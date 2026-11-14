# Skills Exchange — Architecture and staged build plan

## Product architecture

Build a multilingual marketplace that brings learners and verified professionals together for paid monthly learning programs. The project environment is TanStack Start with React and TypeScript, so the implementation will use that supported stack and Lovable Cloud for authentication, persistent data, and secure document storage—not the requested Spring Boot/MySQL/Razorpay stack. Payments will use a supported Lovable payment integration after product details and eligibility are established; payment setup and product creation are separate steps and require user confirmation.

### Main workflows

1. **Learner onboarding:** create an account, verify email, complete learner profile and interests, then browse approved professionals using skill, profession, experience, and language filters.
2. **Professional onboarding:** create an account, complete professional and teaching profiles, upload identity/qualification evidence privately, and wait for an administrator to review and approve the application. Unapproved professionals cannot publish paid programs.
3. **Trial conversation:** each learner receives one lifetime allowance of five free outbound messages across all conversations. Show remaining messages; count successful sends in a server-verified, atomic operation. Creating another conversation does not reset the allowance. After the allowance, messaging requires an active paid learning plan.
4. **Monthly learning:** learner selects a professional and plan, reviews the monthly fee and agreed class count, pays through the enabled provider, and receives a confirmed enrollment. Classes are scheduled and attendance/completion is recorded. The professional's earnings remain pending until the agreement's completion checks pass; disputes/refunds pause release for review.
5. **Trust and administration:** administrators review professionals and evidence, moderate reports and blocks, manage taxonomy and supported languages, and inspect payments, refunds, disputes, and audit events.

## Data model and relationships

Use the authenticated account as the identity source, with separate user-role records and role-specific learner/professional profiles. Core relational tables:

- `profiles` — user id, display name, unique normalized username, locale, account status; one profile per account.
- `user_roles` — user id and role (`learner`, `professional`, `admin`); roles are never stored on profiles or trusted from the browser.
- `learner_profiles` — education level, degree/department, goals; `learner_interests` links learners to many skills.
- `professional_profiles` — profession, experience, employment status/company, qualifications, expected monthly salary, approval state, public bio.
- `professions`, `skills`, `courses`, `languages` — reusable catalogues; join tables connect professionals to many skills/languages and courses.
- `verification_records` — private evidence object references, review state, reviewer, and timestamps; files live in private storage.
- `conversations`, `conversation_members`, `messages` — conversations between accounts and ordered messages; membership is unique per user/conversation.
- `learner_message_allowances` — one row per learner, allowance of five, used count; enforce the cap in a trusted atomic operation, not client state.
- `learning_plans`, `enrollments`, `payments`, `refunds`, `disputes`, `payouts` — monthly offer terms and payment/reconciliation state. Provider events are idempotent; payout state stays pending until completion is confirmed.
- `class_schedules`, `attendance`, `class_completions` — scheduled sessions, participant attendance, and learner/professional completion confirmations.
- `reviews`, `reports`, `blocks`, `admin_audit_events` — post-enrollment feedback, safety reports, communication restrictions, and traceable moderation actions.

```text
auth.users 1—1 profiles 1—0..1 learner_profiles
                         1—0..1 professional_profiles
profiles 1—* user_roles; learners *—* skills; professionals *—* skills/languages
professionals 1—* learning_plans 1—* enrollments *—1 learner
enrollments 1—* payments / class_schedules / attendance / class_completions
profiles *—* conversations (conversation_members) 1—* messages
professionals 1—* verification_records; profiles 1—* reports/reviews
```

## Pages and navigation

- Public: home, browse professionals, professional profile, course details, about, contact, help.
- Separate entry points: learner sign-up/sign-in and professional sign-up/sign-in; one account identity with an assigned role and guarded role-specific areas.
- Learner area: overview, interests, messages and free-message count, plans/payments, schedule, progress, reviews.
- Professional area: profile/courses, verification status, learner requests, messages, schedule/completions, pending and paid earnings.
- Admin area: professional review queue, account moderation, taxonomy/languages, transactions/refunds/disputes, reports, platform statistics.
- Shared: language selector, notification states, empty/loading/error states, responsive navigation.

## Logical API design

Internal authenticated actions use TanStack server functions; public payment callbacks use narrowly scoped public API routes that verify provider signatures. Every operation checks the authenticated identity, role, ownership, and current record state server-side.

- **Accounts:** `registerLearner`, `registerProfessional`, `getMyProfile`, `updateMyProfile`; email verification via managed auth.
- **Discovery:** `searchProfessionals(filters)`, `getProfessionalProfile(id)`, `listCourses(filters)`; public results expose approved profiles only.
- **Messaging:** `createConversation(professionalId)`, `sendMessage(conversationId, body)`, `getMessages(conversationId)`, `getMessageAllowance()`; enforce the global allowance and paid enrollment on the server.
- **Learning/payments:** `createEnrollment(planId)`, `getMyEnrollments()`, `recordPaymentProviderEvent` (signed callback), `requestRefund(enrollmentId)`, `openDispute(enrollmentId)`; idempotency and valid state transitions required.
- **Classes:** `scheduleClass(enrollmentId, time)`, `recordAttendance(classId)`, `confirmClassCompletion(classId)`, `getLearningProgress(enrollmentId)`.
- **Professional/admin:** `submitVerification`, `reviewProfessional`, `manageCatalog`, `reviewReport`, `suspendAccount`, `releaseEligiblePayout`; admin actions are role-checked and audited.

## Security and data access

- Use managed email verification and secure auth sessions; confirm the user's identity on trusted server operations.
- Keep learner, professional, and admin roles in a separate role table. Never infer admin status from local storage or user-editable profile fields.
- Apply least-privilege row policies and explicit data-access grants. Learners see only their private profile, conversations, enrollment, and class data; professionals see only their own records and their enrolled learners' relevant class data. Admin-only access is verified server-side.
- Store verification files in private storage with short-lived authorized access. Never return private evidence in public profile responses.
- Validate and constrain inputs, escape/render message content safely, rate-limit sensitive actions, and record security-sensitive administrative/payment changes.
- Treat payment callbacks as untrusted until signature verification; enforce idempotency and legal state transitions. No browser action can mark a professional verified, a class complete, or a payout released.
- Enforce the five-message allowance atomically per learner, across conversations; require an active enrollment after it is exhausted.

## Staged implementation

1. Replace the template with the public Skills Exchange experience and its design system; establish page structure, discovery filters, and language selection.
2. Enable Lovable Cloud before implementing authentication or persistent data; then implement verified email accounts, profiles, roles, private storage, and access policies.
3. Add professional applications/review, catalogues, discovery, and learner interest management.
4. Add conversations and server-enforced five-message allowance, then monthly plans, classes, attendance, completion, and progress.
5. After explicit confirmation, enable the eligible payment integration, create products separately, and implement verified payment/refund/dispute workflows and completion-gated earnings.
6. Add admin moderation and audit views; validate the key security and business rules with focused tests and end-to-end preview checks.

The first implementation milestone will deliver the public discovery experience and its visual foundation; full authentication, real payments, and real-time delivery are not claimed until their respective stages are connected and verified.