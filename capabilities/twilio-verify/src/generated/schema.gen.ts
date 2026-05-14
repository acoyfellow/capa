export type paths = {
    "/v2/Attempts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all the verification attempts for a given Account.
         * @description List all the verification attempts for a given Account.
         */
        get: operations["ListVerificationAttempt"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Attempts/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific verification attempt.
         * @description Fetch a specific verification attempt.
         */
        get: operations["FetchVerificationAttempt"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Attempts/Summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a summary of how many attempts were made and how many were converted.
         * @description Get a summary of how many attempts were made and how many were converted.
         */
        get: operations["FetchVerificationAttemptsSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Forms/{FormType}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch the forms for a specific Form Type.
         * @description Fetch the forms for a specific Form Type.
         */
        get: operations["FetchForm"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/SafeList/Numbers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add a new phone number to SafeList.
         * @description Add a new phone number to SafeList.
         */
        post: operations["CreateSafelist"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/SafeList/Numbers/{PhoneNumber}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check if a phone number exists in SafeList.
         * @description Check if a phone number exists in SafeList.
         */
        get: operations["FetchSafelist"];
        put?: never;
        post?: never;
        /**
         * Remove a phone number from SafeList.
         * @description Remove a phone number from SafeList.
         */
        delete: operations["DeleteSafelist"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of all Verification Services for an account.
         * @description Retrieve a list of all Verification Services for an account.
         */
        get: operations["ListService"];
        put?: never;
        /**
         * Create a new Verification Service.
         * @description Create a new Verification Service.
         */
        post: operations["CreateService"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/AccessTokens": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new enrollment Access Token for the Entity
         * @description Create a new enrollment Access Token for the Entity
         */
        post: operations["CreateAccessToken"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/AccessTokens/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an Access Token for the Entity
         * @description Fetch an Access Token for the Entity
         */
        get: operations["FetchAccessToken"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Entities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of all Entities for a Service.
         * @description Retrieve a list of all Entities for a Service.
         */
        get: operations["ListEntity"];
        put?: never;
        /**
         * Create a new Entity for the Service
         * @description Create a new Entity for the Service
         */
        post: operations["CreateEntity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Entities/{Identity}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific Entity.
         * @description Fetch a specific Entity.
         */
        get: operations["FetchEntity"];
        put?: never;
        post?: never;
        /**
         * Delete a specific Entity.
         * @description Delete a specific Entity.
         */
        delete: operations["DeleteEntity"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of all Challenges for a Factor.
         * @description Retrieve a list of all Challenges for a Factor.
         */
        get: operations["ListChallenge"];
        put?: never;
        /**
         * Create a new Challenge for the Factor
         * @description Create a new Challenge for the Factor
         */
        post: operations["CreateChallenge"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new Notification for the corresponding Challenge
         * @description Create a new Notification for the corresponding Challenge
         */
        post: operations["CreateNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific Challenge.
         * @description Fetch a specific Challenge.
         */
        get: operations["FetchChallenge"];
        put?: never;
        /**
         * Verify a specific Challenge.
         * @description Verify a specific Challenge.
         */
        post: operations["UpdateChallenge"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of all Factors for an Entity.
         * @description Retrieve a list of all Factors for an Entity.
         */
        get: operations["ListFactor"];
        put?: never;
        /**
         * Create a new Factor for the Entity
         * @description Create a new Factor for the Entity
         */
        post: operations["CreateNewFactor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific Factor.
         * @description Fetch a specific Factor.
         */
        get: operations["FetchFactor"];
        put?: never;
        /**
         * Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
         * @description Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
         */
        post: operations["UpdateFactor"];
        /**
         * Delete a specific Factor.
         * @description Delete a specific Factor.
         */
        delete: operations["DeleteFactor"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/MessagingConfigurations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of all Messaging Configurations for a Service.
         * @description Retrieve a list of all Messaging Configurations for a Service.
         */
        get: operations["ListMessagingConfiguration"];
        put?: never;
        /**
         * Create a new MessagingConfiguration for a service.
         * @description Create a new MessagingConfiguration for a service.
         */
        post: operations["CreateMessagingConfiguration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific MessagingConfiguration.
         * @description Fetch a specific MessagingConfiguration.
         */
        get: operations["FetchMessagingConfiguration"];
        put?: never;
        /**
         * Update a specific MessagingConfiguration
         * @description Update a specific MessagingConfiguration
         */
        post: operations["UpdateMessagingConfiguration"];
        /**
         * Delete a specific MessagingConfiguration.
         * @description Delete a specific MessagingConfiguration.
         */
        delete: operations["DeleteMessagingConfiguration"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Passkeys/ApproveChallenge": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Approve a Passkeys Challenge
         * @description Approve a Passkeys challenge
         */
        post: operations["UpdateChallengePasskeys"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Passkeys/Challenges": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a Passkeys Challenge
         * @description Create a Passkeys Challenge
         */
        post: operations["CreateChallengePasskeys"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Passkeys/Factors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new Passkeys Factor for the Entity
         * @description Create a new Passkeys Factor for the Entity
         */
        post: operations["CreateNewFactorPasskey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Passkeys/VerifyFactor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Verify a Passkeys Factor
         * @description Verify a Passkeys Factor
         */
        post: operations["UpdatePasskeysFactor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/RateLimits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of all Rate Limits for a service.
         * @description Retrieve a list of all Rate Limits for a service.
         */
        get: operations["ListRateLimit"];
        put?: never;
        /**
         * Create a new Rate Limit for a Service
         * @description Create a new Rate Limit for a Service
         */
        post: operations["CreateRateLimit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of all Buckets for a Rate Limit.
         * @description Retrieve a list of all Buckets for a Rate Limit.
         */
        get: operations["ListBucket"];
        put?: never;
        /**
         * Create a new Bucket for a Rate Limit
         * @description Create a new Bucket for a Rate Limit
         */
        post: operations["CreateBucket"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific Bucket.
         * @description Fetch a specific Bucket.
         */
        get: operations["FetchBucket"];
        put?: never;
        /**
         * Update a specific Bucket.
         * @description Update a specific Bucket.
         */
        post: operations["UpdateBucket"];
        /**
         * Delete a specific Bucket.
         * @description Delete a specific Bucket.
         */
        delete: operations["DeleteBucket"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/RateLimits/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific Rate Limit.
         * @description Fetch a specific Rate Limit.
         */
        get: operations["FetchRateLimit"];
        put?: never;
        /**
         * Update a specific Rate Limit.
         * @description Update a specific Rate Limit.
         */
        post: operations["UpdateRateLimit"];
        /**
         * Delete a specific Rate Limit.
         * @description Delete a specific Rate Limit.
         */
        delete: operations["DeleteRateLimit"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/VerificationCheck": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * challenge a specific Verification Check.
         * @description challenge a specific Verification Check.
         */
        post: operations["CreateVerificationCheck"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Verifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new Verification using a Service
         * @description Create a new Verification using a Service
         */
        post: operations["CreateVerification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Verifications/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific Verification
         * @description Fetch a specific Verification
         */
        get: operations["FetchVerification"];
        put?: never;
        /**
         * Update a Verification status
         * @description Update a Verification status
         */
        post: operations["UpdateVerification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of all Webhooks for a Service.
         * @description Retrieve a list of all Webhooks for a Service.
         */
        get: operations["ListWebhook"];
        put?: never;
        /**
         * Create a new Webhook for the Service
         * @description Create a new Webhook for the Service
         */
        post: operations["CreateWebhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{ServiceSid}/Webhooks/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific Webhook.
         * @description Fetch a specific Webhook.
         */
        get: operations["FetchWebhook"];
        put?: never;
        post: operations["UpdateWebhook"];
        /**
         * Delete a specific Webhook.
         * @description Delete a specific Webhook.
         */
        delete: operations["DeleteWebhook"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Services/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch specific Verification Service Instance.
         * @description Fetch specific Verification Service Instance.
         */
        get: operations["FetchService"];
        put?: never;
        /**
         * Update a specific Verification Service.
         * @description Update a specific Verification Service.
         */
        post: operations["UpdateService"];
        /**
         * Delete a specific Verification Service Instance.
         * @description Delete a specific Verification Service Instance.
         */
        delete: operations["DeleteService"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/Templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all the available templates for a given Account.
         * @description List all the available templates for a given Account.
         */
        get: operations["ListVerificationTemplate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        /**
         * @description The Type of the Factor. Currently only `push` is supported.
         * @enum {string}
         */
        access_token_enum_factor_types: "push";
        /**
         * @description Reason for the Challenge to be in certain `status`. One of `none`, `not_needed` or `not_requested`.
         * @enum {string}
         */
        challenge_enum_challenge_reasons: "none" | "not_needed" | "not_requested";
        /**
         * @description The Status of this Challenge. One of `pending`, `expired`, `approved` or `denied`.
         * @enum {string}
         */
        challenge_enum_challenge_statuses: "pending" | "expired" | "approved" | "denied";
        /**
         * @description The Factor Type of this Challenge. Currently `push` and `totp` are supported.
         * @enum {string}
         */
        challenge_enum_factor_types: "push" | "totp" | "passkeys";
        /** @enum {string} */
        challenge_enum_list_orders: "asc" | "desc";
        /**
         * @description The Status of this Factor. One of `unverified` or `verified`.
         * @enum {string}
         */
        factor_enum_factor_statuses: "unverified" | "verified";
        /**
         * @description The Type of this Factor. Currently `push` and `totp` are supported.
         * @enum {string}
         */
        factor_enum_factor_types: "push" | "totp" | "passkeys";
        /** @enum {string} */
        factor_enum_notification_platforms: "apn" | "fcm" | "none";
        /** @enum {string} */
        factor_enum_totp_algorithms: "sha1" | "sha256" | "sha512";
        /**
         * @description The Type of this Form. Currently only `form-push` is supported.
         * @enum {string}
         */
        form_enum_form_types: "form-push";
        /**
         * @description The Status of this Factor. One of `unverified` or `verified`.
         * @enum {string}
         */
        new_factor_enum_factor_statuses: "unverified" | "verified";
        /**
         * @description The Type of this Factor. Currently `push` and `totp` are supported.
         * @enum {string}
         */
        new_factor_enum_factor_types: "push" | "totp" | "passkeys";
        /** @enum {string} */
        new_factor_enum_notification_platforms: "apn" | "fcm" | "none";
        /** @enum {string} */
        new_factor_enum_totp_algorithms: "sha1" | "sha256" | "sha512";
        /** @enum {string} */
        verification_attempt_enum_attempt_status: "confirmed" | "unconfirmed" | "expired";
        /** @enum {string} */
        verification_attempt_enum_call_status: "queued" | "in-progress" | "completed" | "busy" | "failed" | "no-answer" | "ringing" | "canceled";
        /**
         * @description A string specifying the communication channel used for the verification attempt.
         * @enum {string}
         */
        verification_attempt_enum_channels: "sms" | "call" | "email" | "whatsapp" | "rbm";
        /**
         * @description A string specifying the conversion status of the verification. A conversion happens when the user is able to provide the correct code. Possible values are `CONVERTED` and `UNCONVERTED`.
         * @enum {string}
         */
        verification_attempt_enum_conversion_status: "converted" | "unconverted";
        /** @enum {string} */
        verification_attempt_enum_message_status: "queued" | "sending" | "sent" | "failed" | "delivered" | "undelivered" | "receiving" | "received" | "accepted" | "scheduled" | "read" | "partially_delivered" | "canceled";
        /** @enum {string} */
        verification_attempts_summary_enum_channels: "sms" | "call" | "email" | "whatsapp" | "rbm";
        /**
         * @description The verification method to use. One of: [`email`](https://www.twilio.com/docs/verify/email), `sms`, `whatsapp`, `call`, or `sna`.
         * @enum {string}
         */
        verification_check_enum_channel: "sms" | "call" | "email" | "whatsapp" | "sna";
        /**
         * @description The verification method used. One of: [`email`](https://www.twilio.com/docs/verify/email), `sms`, `whatsapp`, `call`, `sna`, or `rcs`.
         * @enum {string}
         */
        verification_enum_channel: "sms" | "call" | "email" | "whatsapp" | "sna";
        /**
         * @description Risk_check overrides Fraud Prevention measures like Fraud Guard, Geo Permissions etc per verification attempt basis, allowing Verify to block traffic considered fraudulent if enabled or bypass active protections if disabled. Can be: `enable`(default) or `disable`. For SMS channel only.
         * @enum {string}
         */
        verification_enum_risk_check: "enable" | "disable";
        /**
         * @description The status of the verification. Can be: `pending`, `approved`, `canceled`, `max_attempts_reached`, `deleted`, `failed` or `expired`.
         * @enum {string}
         */
        verification_enum_status: "canceled" | "approved";
        "verify.v2.form": {
            /** @description Additional information for the available forms for this type. E.g. The separator string used for `binding` in a Factor push. */
            form_meta?: unknown;
            form_type?: components["schemas"]["form_enum_form_types"];
            /** @description Object that contains the available forms for this type. This available forms are given in the standard [JSON Schema](https://json-schema.org/) format */
            forms?: unknown;
            /**
             * Format: uri
             * @description The URL to access the forms for this type.
             */
            url?: string | null;
        };
        "verify.v2.safelist": {
            /** @description The phone number in SafeList. */
            phone_number?: string | null;
            /** @description The unique string that we created to identify the SafeList resource. */
            sid?: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the SafeList resource.
             */
            url?: string | null;
        };
        "verify.v2.service": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource. */
            account_sid?: string | null;
            /**
             * @description The length of the verification code to generate.
             * @default 0
             */
            code_length: number;
            /** @description Whether to allow sending verifications with a custom code instead of a randomly generated one. */
            custom_code_enabled?: boolean | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            default_template_sid?: string | null;
            /** @description Whether to add a security warning at the end of an SMS verification body. Disabled by default and applies only to SMS. Example SMS body: `Your AppName verification code is: 1234. Don’t share this code with anyone; our employees will never ask for the code` */
            do_not_share_warning_enabled?: boolean | null;
            /** @description Whether to ask the user to press a number before delivering the verify code in a phone call. */
            dtmf_input_required?: boolean | null;
            /** @description The name that appears in the body of your verification messages. It can be up to 30 characters long and can include letters, numbers, spaces, dashes, underscores. Phone numbers, special characters or links are NOT allowed. It cannot contain more than 4 (consecutive or non-consecutive) digits. **This value should not contain PII.** */
            friendly_name?: string | null;
            /**
             * Format: uri-map
             * @description The URLs of related resources.
             */
            links?: Record<string, never> | null;
            /** @description Whether to perform a lookup with each verification started and return info about the phone number. */
            lookup_enabled?: boolean | null;
            passkeys?: unknown;
            /** @description Whether to pass PSD2 transaction parameters when starting a verification. */
            psd2_enabled?: boolean | null;
            /** @description Configurations for the Push factors (channel) created under this Service. */
            push?: unknown;
            /** @description The unique string that we created to identify the Service resource. */
            sid?: string | null;
            /** @description Whether to skip sending SMS verifications to landlines. Requires `lookup_enabled`. */
            skip_sms_to_landlines?: boolean | null;
            /** @description Configurations for the TOTP factors (channel) created under this Service. */
            totp?: unknown;
            /** @description The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS languages. */
            tts_name?: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the resource.
             */
            url?: string | null;
            /** @description Whether to allow verifications from the service to reach the stream-events sinks if configured */
            verify_event_subscription_enabled?: boolean | null;
            whatsapp?: unknown;
        };
        "verify.v2.service.access_token": {
            /** @description The unique SID identifier of the Account. */
            account_sid?: string | null;
            /**
             * Format: date-time
             * @description The date that this access token was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_created?: string | null;
            /** @description The unique external identifier for the Entity of the Service. */
            entity_identity?: string | null;
            /** @description A human readable description of this factor, up to 64 characters. For a push factor, this can be the device's name. */
            factor_friendly_name?: string | null;
            factor_type?: components["schemas"]["access_token_enum_factor_types"];
            /** @description The unique SID identifier of the Verify Service. */
            service_sid?: string | null;
            /** @description A 34 character string that uniquely identifies this Access Token. */
            sid?: string | null;
            /** @description The access token generated for enrollment, this is an encrypted json web token. */
            token?: string | null;
            /**
             * @description How long, in seconds, the access token is valid. Max: 5 minutes
             * @default 0
             */
            ttl: number;
            /**
             * Format: uri
             * @description The URL of this resource.
             */
            url?: string | null;
        };
        "verify.v2.service.entity": {
            /** @description The unique SID identifier of the Account. */
            account_sid?: string | null;
            /**
             * Format: date-time
             * @description The date that this Entity was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The date that this Entity was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_updated?: string | null;
            /** @description The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
            identity?: string | null;
            /**
             * Format: uri-map
             * @description Contains a dictionary of URL links to nested resources of this Entity.
             */
            links?: Record<string, never> | null;
            /** @description The unique SID identifier of the Service. */
            service_sid?: string | null;
            /** @description A 34 character string that uniquely identifies this Entity. */
            sid?: string | null;
            /**
             * Format: uri
             * @description The URL of this resource.
             */
            url?: string | null;
        };
        "verify.v2.service.entity.challenge": {
            /** @description The unique SID identifier of the Account. */
            account_sid?: string | null;
            /**
             * Format: date-time
             * @description The date that this Challenge was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The date that this Challenge was responded, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_responded?: string | null;
            /**
             * Format: date-time
             * @description The date that this Challenge was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_updated?: string | null;
            /** @description Details provided to give context about the Challenge. Intended to be shown to the end user. */
            details?: unknown;
            /** @description The unique SID identifier of the Entity. */
            entity_sid?: string | null;
            /**
             * Format: date-time
             * @description The date-time when this Challenge expires, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. The default value is five (5) minutes after Challenge creation. The max value is sixty (60) minutes after creation.
             */
            expiration_date?: string | null;
            /** @description The unique SID identifier of the Factor. */
            factor_sid?: string | null;
            factor_type?: components["schemas"]["challenge_enum_factor_types"];
            /** @description Details provided to give context about the Challenge. Intended to be hidden from the end user. It must be a stringified JSON with only strings values eg. `{"ip": "172.168.1.234"}` */
            hidden_details?: unknown;
            /** @description Customer unique identity for the Entity owner of the Challenge. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
            identity?: string | null;
            /**
             * Format: uri-map
             * @description Contains a dictionary of URL links to nested resources of this Challenge.
             */
            links?: Record<string, never> | null;
            /** @description Custom metadata associated with the challenge. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{"os": "Android"}`. Can be up to 1024 characters in length. */
            metadata?: unknown;
            responded_reason?: components["schemas"]["challenge_enum_challenge_reasons"];
            /** @description The unique SID identifier of the Service. */
            service_sid?: string | null;
            /** @description A 34 character string that uniquely identifies this Challenge. */
            sid?: string | null;
            status?: components["schemas"]["challenge_enum_challenge_statuses"];
            /**
             * Format: uri
             * @description The URL of this resource.
             */
            url?: string | null;
        };
        "verify.v2.service.entity.challenge.notification": {
            /** @description The unique SID identifier of the Account. */
            account_sid?: string | null;
            /** @description The unique SID identifier of the Challenge. */
            challenge_sid?: string | null;
            /**
             * Format: date-time
             * @description The date that this Notification was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_created?: string | null;
            /** @description The unique SID identifier of the Entity. */
            entity_sid?: string | null;
            /** @description Customer unique identity for the Entity owner of the Challenge. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
            identity?: string | null;
            /** @description The priority of the notification. For `push` Challenges it's always `high` which sends the notification immediately, and can wake up a sleeping device. */
            priority?: string | null;
            /** @description The unique SID identifier of the Service. */
            service_sid?: string | null;
            /** @description A 34 character string that uniquely identifies this Notification. */
            sid?: string | null;
            /**
             * @description How long, in seconds, the notification is valid. Max: 5 minutes
             * @default 0
             */
            ttl: number;
        };
        "verify.v2.service.entity.factor": {
            /** @description The unique SID identifier of the Account. */
            account_sid?: string | null;
            /** @description An object that contains configurations specific to a `factor_type`. */
            config?: unknown;
            /**
             * Format: date-time
             * @description The date that this Factor was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The date that this Factor was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_updated?: string | null;
            /** @description The unique SID identifier of the Entity. */
            entity_sid?: string | null;
            factor_type?: components["schemas"]["factor_enum_factor_types"];
            /** @description A human readable description of this resource, up to 64 characters. For a push factor, this can be the device's name. */
            friendly_name?: string | null;
            /** @description Customer unique identity for the Entity owner of the Factor. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
            identity?: string | null;
            /** @description Custom metadata associated with the factor. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{"os": "Android"}`. Can be up to 1024 characters in length. */
            metadata?: unknown;
            /** @description The unique SID identifier of the Service. */
            service_sid?: string | null;
            /** @description A 34 character string that uniquely identifies this Factor. */
            sid?: string | null;
            status?: components["schemas"]["factor_enum_factor_statuses"];
            /**
             * Format: uri
             * @description The URL of this resource.
             */
            url?: string | null;
        };
        "verify.v2.service.entity.new_factor": {
            /** @description The unique SID identifier of the Account. */
            account_sid?: string | null;
            /**
             * @description Contains the `factor_type` specific secret and metadata.
             *     For push, this is `binding.public_key` and `binding.alg`.
             *     For totp, this is `binding.secret` and `binding.uri`. The `binding.uri` property is generated following the [google authenticator key URI format](https://github.com/google/google-authenticator/wiki/Key-Uri-Format), and `Factor.friendly_name` is used for the “accountname” value and `Service.friendly_name` or `Service.totp.issuer` is used for the `issuer` value.
             *
             *
             *     The Binding property is ONLY returned upon Factor creation.
             */
            binding?: unknown;
            /** @description An object that contains configurations specific to a `factor_type`. */
            config?: unknown;
            /**
             * Format: date-time
             * @description The date that this Factor was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The date that this Factor was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_updated?: string | null;
            /** @description The unique SID identifier of the Entity. */
            entity_sid?: string | null;
            factor_type?: components["schemas"]["new_factor_enum_factor_types"];
            /**
             * @description The friendly name of this Factor. This can be any string up to 64 characters, meant for humans to distinguish between Factors.
             *     For `factor_type` `push`, this could be a device name.
             *     For `factor_type` `totp`, this value is used as the “account name” in constructing the `binding.uri` property.
             *     At the same time, we recommend avoiding providing PII.
             */
            friendly_name?: string | null;
            /** @description Customer unique identity for the Entity owner of the Factor. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
            identity?: string | null;
            /** @description Custom metadata associated with the factor. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{"os": "Android"}`. Can be up to 1024 characters in length. */
            metadata?: unknown;
            options?: unknown;
            /** @description The unique SID identifier of the Service. */
            service_sid?: string | null;
            /** @description A 34 character string that uniquely identifies this Factor. */
            sid?: string | null;
            status?: components["schemas"]["new_factor_enum_factor_statuses"];
            /**
             * Format: uri
             * @description The URL of this resource.
             */
            url?: string | null;
        };
        "verify.v2.service.messaging_configuration": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource. */
            account_sid?: string | null;
            /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country this configuration will be applied to. If this is a global configuration, Country will take the value `all`. */
            country?: string | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) to be used to send SMS to the country of this configuration. */
            messaging_service_sid?: string | null;
            /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is associated with. */
            service_sid?: string | null;
            /**
             * Format: uri
             * @description The URL of this resource.
             */
            url?: string | null;
        };
        "verify.v2.service.rate_limit": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Rate Limit resource. */
            account_sid?: string | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description Description of this Rate Limit */
            description?: string | null;
            /**
             * Format: uri-map
             * @description The URLs of related resources.
             */
            links?: Record<string, never> | null;
            /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
            service_sid?: string | null;
            /** @description A 34 character string that uniquely identifies this Rate Limit. */
            sid?: string | null;
            /** @description Provides a unique and addressable name to be assigned to this Rate Limit, assigned by the developer, to be optionally used in addition to SID. **This value should not contain PII.** */
            unique_name?: string | null;
            /**
             * Format: uri
             * @description The URL of this resource.
             */
            url?: string | null;
        };
        "verify.v2.service.rate_limit.bucket": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Rate Limit resource. */
            account_sid?: string | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /**
             * @description Number of seconds that the rate limit will be enforced over.
             * @default 0
             */
            interval: number;
            /**
             * @description Maximum number of requests permitted in during the interval.
             * @default 0
             */
            max: number;
            /** @description The Twilio-provided string that uniquely identifies the Rate Limit resource. */
            rate_limit_sid?: string | null;
            /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
            service_sid?: string | null;
            /** @description A 34 character string that uniquely identifies this Bucket. */
            sid?: string | null;
            /**
             * Format: uri
             * @description The URL of this resource.
             */
            url?: string | null;
        };
        "verify.v2.service.verification": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Verification resource. */
            account_sid?: string | null;
            /** @description The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
            amount?: string | null;
            channel?: components["schemas"]["verification_enum_channel"];
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description Information about the phone number being verified. */
            lookup?: unknown;
            /** @description The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
            payee?: string | null;
            /** @description An array of verification attempt objects containing the channel attempted and the channel-specific transaction SID. */
            send_code_attempts?: unknown[] | null;
            /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
            service_sid?: string | null;
            /** @description The unique string that we created to identify the Verification resource. */
            sid?: string | null;
            /** @description The set of fields used for a silent network auth (`sna`) verification. Contains a single field with the URL to be invoked to verify the phone number. */
            sna?: unknown;
            /** @description The status of the verification. Can be: `pending`, `approved`, `canceled`, `max_attempts_reached`, `deleted`, `failed` or `expired`. */
            status?: string | null;
            /** @description The phone number or [email](https://www.twilio.com/docs/verify/email) being verified. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). */
            to?: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the Verification resource.
             */
            url?: string | null;
            /** @description Use "status" instead. Legacy property indicating whether the verification was successful. */
            valid?: boolean | null;
        };
        "verify.v2.service.verification_check": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the VerificationCheck resource. */
            account_sid?: string | null;
            /** @description The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
            amount?: string | null;
            channel?: components["schemas"]["verification_check_enum_channel"];
            /**
             * Format: date-time
             * @description The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the Verification Check resource was created.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the Verification Check resource was last updated.
             */
            date_updated?: string | null;
            /** @description The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
            payee?: string | null;
            /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
            service_sid?: string | null;
            /** @description The unique string that we created to identify the VerificationCheck resource. */
            sid?: string | null;
            /** @description List of error codes as a result of attempting a verification using the `sna` channel. The error codes are chronologically ordered, from the first attempt to the latest attempt. This will be an empty list if no errors occured or `null` if the last channel used wasn't `sna`. */
            sna_attempts_error_codes?: unknown[] | null;
            /** @description The status of the verification. Can be: `pending`, `approved`, `canceled`, `max_attempts_reached`, `deleted`, `failed` or `expired`. */
            status?: string | null;
            /** @description The phone number or [email](https://www.twilio.com/docs/verify/email) being verified. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). */
            to?: string | null;
            /** @description Use "status" instead. Legacy property indicating whether the verification was successful. */
            valid?: boolean | null;
        };
        "verify.v2.service.webhook": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource. */
            account_sid?: string | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_updated?: string | null;
            /** @description The array of events that this Webhook is subscribed to. Possible event types: `*, factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied` */
            event_types?: string[] | null;
            /** @description The string that you assigned to describe the webhook. **This value should not contain PII.** */
            friendly_name?: string | null;
            /** @description The unique SID identifier of the Service. */
            service_sid?: string | null;
            /** @description The unique string that we created to identify the Webhook resource. */
            sid?: string | null;
            status?: components["schemas"]["webhook_enum_status"];
            /**
             * Format: uri
             * @description The absolute URL of the Webhook resource.
             */
            url?: string | null;
            version?: components["schemas"]["webhook_enum_version"];
            webhook_method?: components["schemas"]["webhook_enum_methods"];
            /**
             * Format: uri
             * @description The URL associated with this Webhook.
             */
            webhook_url?: string | null;
        };
        "verify.v2.verification_attempt": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Verification resource. */
            account_sid?: string | null;
            channel?: components["schemas"]["verification_attempt_enum_channels"];
            /** @description An object containing the channel specific information for an attempt. */
            channel_data?: unknown;
            conversion_status?: components["schemas"]["verification_attempt_enum_conversion_status"];
            /**
             * Format: date-time
             * @description The date that this Attempt was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description The date that this Attempt was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_updated?: string | null;
            /** @description An object containing the charge for this verification attempt related to the channel costs and the currency used. The costs related to the succeeded verifications are not included. May not be immediately available. More information on pricing is available [here](https://www.twilio.com/en-us/verify/pricing). */
            price?: unknown;
            /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) used to generate the attempt. */
            service_sid?: string | null;
            /** @description The SID that uniquely identifies the verification attempt resource. */
            sid?: string | null;
            /** Format: uri */
            url?: string | null;
            /** @description The SID of the [Verification](https://www.twilio.com/docs/verify/api/verification) that generated the attempt. */
            verification_sid?: string | null;
        };
        "verify.v2.verification_attempts_summary": {
            /** @description Percentage of the confirmed messages over the total, defined by (total_converted/total_attempts)*100. */
            conversion_rate_percentage?: string | null;
            /**
             * @description Total of attempts made according to the provided filters
             * @default 0
             */
            total_attempts: number;
            /**
             * @description Total of  attempts made that were confirmed by the end user, according to the provided filters.
             * @default 0
             */
            total_converted: number;
            /**
             * @description Total of attempts made that were not confirmed by the end user, according to the provided filters.
             * @default 0
             */
            total_unconverted: number;
            /** Format: uri */
            url?: string | null;
        };
        "verify.v2.verification_template": {
            /** @description The unique SID identifier of the Account. */
            account_sid?: string | null;
            /** @description A list of channels that support the Template. Can include: sms, voice. */
            channels?: string[] | null;
            /** @description A descriptive string that you create to describe a Template. It can be up to 32 characters long. */
            friendly_name?: string | null;
            /** @description A 34 character string that uniquely identifies a Verification Template. */
            sid?: string | null;
            /** @description An object that contains the different translations of the template. Every translation is identified by the language short name and contains its respective information as the approval status, text and created/modified date. */
            translations?: unknown;
        };
        /**
         * @description The method to be used when calling the webhook's URL.
         * @enum {string}
         */
        webhook_enum_methods: "GET" | "POST";
        /**
         * @description The webhook status. Default value is `enabled`. One of: `enabled` or `disabled`
         * @enum {string}
         */
        webhook_enum_status: "enabled" | "disabled";
        /**
         * @description The webhook version. Default value is `v2` which includes all the latest fields. Version `v1` is legacy and may be removed in the future.
         * @enum {string}
         */
        webhook_enum_version: "v1" | "v2";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    ListVerificationAttempt: {
        parameters: {
            query?: {
                /** @description Filter used to query Verification Attempts by communication channel. */
                Channel?: components["schemas"]["verification_attempt_enum_channels"];
                /** @description Destination of a verification. It is phone number in E.164 format. */
                "ChannelData.To"?: string;
                /** @description Filter used to query Verification Attempts sent to the specified destination country. */
                Country?: string;
                /** @description Datetime filter used to consider only Verification Attempts created after this datetime on the summary aggregation. Given as GMT in ISO 8601 formatted datetime string: yyyy-MM-dd'T'HH:mm:ss'Z. */
                DateCreatedAfter?: string;
                /** @description Datetime filter used to consider only Verification Attempts created before this datetime on the summary aggregation. Given as GMT in ISO 8601 formatted datetime string: yyyy-MM-dd'T'HH:mm:ss'Z. */
                DateCreatedBefore?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Filter used to query Verification Attempts by conversion status. Valid values are `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were confirmed. */
                Status?: components["schemas"]["verification_attempt_enum_conversion_status"];
                /** @description Filter used to return all the Verification Attempts of a single verification. Only attempts of the provided verification SID will be returned. */
                VerificationSid?: string;
                /** @description Filter used to query Verification Attempts by verify service. Only attempts of the provided SID will be returned. */
                VerifyServiceSid?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        attempts?: components["schemas"]["verify.v2.verification_attempt"][];
                        meta?: {
                            /** Format: uri */
                            first_page_url?: string;
                            key?: string;
                            /** Format: uri */
                            next_page_url?: string | null;
                            page?: number;
                            page_size?: number;
                            /** Format: uri */
                            previous_page_url?: string | null;
                            /** Format: uri */
                            url?: string;
                        };
                    };
                };
            };
        };
    };
    FetchVerificationAttempt: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of a Verification Attempt */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.verification_attempt"];
                };
            };
        };
    };
    FetchVerificationAttemptsSummary: {
        parameters: {
            query?: {
                /** @description Filter Verification Attempts considered on the summary aggregation by communication channel. */
                Channel?: components["schemas"]["verification_attempts_summary_enum_channels"];
                /** @description Filter used to consider only Verification Attempts sent to the specified destination country on the summary aggregation. */
                Country?: string;
                /** @description Datetime filter used to consider only Verification Attempts created after this datetime on the summary aggregation. Given as GMT in ISO 8601 formatted datetime string: yyyy-MM-dd'T'HH:mm:ss'Z. */
                DateCreatedAfter?: string;
                /** @description Datetime filter used to consider only Verification Attempts created before this datetime on the summary aggregation. Given as GMT in ISO 8601 formatted datetime string: yyyy-MM-dd'T'HH:mm:ss'Z. */
                DateCreatedBefore?: string;
                /** @description Filter the Verification Attempts considered on the summary aggregation by Destination prefix. It is the prefix of a phone number in E.164 format. */
                DestinationPrefix?: string;
                /** @description Filter used to consider only Verification Attempts of the given verify service on the summary aggregation. */
                VerifyServiceSid?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.verification_attempts_summary"];
                };
            };
        };
    };
    FetchForm: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Type of this Form. Currently only `form-push` is supported. */
                FormType: components["schemas"]["form_enum_form_types"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.form"];
                };
            };
        };
    };
    CreateSafelist: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The phone number to be added in SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). */
                    PhoneNumber: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.safelist"];
                };
            };
        };
    };
    FetchSafelist: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The phone number to be fetched from SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). */
                PhoneNumber: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.safelist"];
                };
            };
        };
    };
    DeleteSafelist: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The phone number to be removed from SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). */
                PhoneNumber: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The resource was deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ListService: {
        parameters: {
            query?: {
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: {
                            /** Format: uri */
                            first_page_url?: string;
                            key?: string;
                            /** Format: uri */
                            next_page_url?: string | null;
                            page?: number;
                            page_size?: number;
                            /** Format: uri */
                            previous_page_url?: string | null;
                            /** Format: uri */
                            url?: string;
                        };
                        services?: components["schemas"]["verify.v2.service"][];
                    };
                };
            };
        };
    };
    CreateService: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The length of the verification code to generate. Must be an integer value between 4 and 10, inclusive. */
                    CodeLength?: number;
                    /** @description Whether to allow sending verifications with a custom code instead of a randomly generated one. */
                    CustomCodeEnabled?: boolean;
                    /** @description The default message [template](https://www.twilio.com/docs/verify/api/templates). Will be used for all SMS verifications unless explicitly overriden. SMS channel only. */
                    DefaultTemplateSid?: string;
                    /** @description Whether to add a security warning at the end of an SMS verification body. Disabled by default and applies only to SMS. Example SMS body: `Your AppName verification code is: 1234. Don’t share this code with anyone; our employees will never ask for the code` */
                    DoNotShareWarningEnabled?: boolean;
                    /** @description Whether to ask the user to press a number before delivering the verify code in a phone call. */
                    DtmfInputRequired?: boolean;
                    /** @description A descriptive string that you create to describe the verification service. It can be up to 32 characters long. **This value should not contain PII.** */
                    FriendlyName: string;
                    /** @description Whether to perform a lookup with each verification started and return info about the phone number. */
                    LookupEnabled?: boolean;
                    /** @description The Authenticator Attachment for Passkeys. This is the type of authenticator that will be used to create Passkeys. It can be empty or it can have the values `platform`, `cross-platform` or `any`. */
                    "Passkeys.AuthenticatorAttachment"?: string;
                    /** @description Indicates whether credentials must be discoverable by the authenticator. It can be empty or it can have the values `required`, `preferred` or `discouraged`. */
                    "Passkeys.DiscoverableCredentials"?: string;
                    /** @description The Relying Party ID for Passkeys. This is the domain of your application, e.g. `example.com`. It is used to identify your application when creating Passkeys. */
                    "Passkeys.RelyingParty.Id"?: string;
                    /** @description The Relying Party Name for Passkeys. This is the name of your application, e.g. `Example App`. It is used to identify your application when creating Passkeys. */
                    "Passkeys.RelyingParty.Name"?: string;
                    /** @description The Relying Party Origins for Passkeys. This is the origin of your application, e.g. `login.example.com,www.example.com`. It is used to identify your application when creating Passkeys, it can have multiple origins split by `,`. */
                    "Passkeys.RelyingParty.Origins"?: string;
                    /** @description The User Verification for Passkeys. This is the type of user verification that will be used to create Passkeys. It can be empty or it can have the values `required`, `preferred` or `discouraged`. */
                    "Passkeys.UserVerification"?: string;
                    /** @description Whether to pass PSD2 transaction parameters when starting a verification. */
                    Psd2Enabled?: boolean;
                    /** @description Optional configuration for the Push factors. Set the APN Credential for this service. This will allow to send push notifications to iOS devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource) */
                    "Push.ApnCredentialSid"?: string;
                    /** @description Optional configuration for the Push factors. Set the FCM Credential for this service. This will allow to send push notifications to Android devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource) */
                    "Push.FcmCredentialSid"?: string;
                    /** @description Optional configuration for the Push factors. If true, include the date in the Challenge's response. Otherwise, the date is omitted from the response. See [Challenge](https://www.twilio.com/docs/verify/api/challenge) resource’s details parameter for more info. Default: false. **Deprecated** do not use this parameter. This timestamp value is the same one as the one found in `date_created`, please use that one instead. */
                    "Push.IncludeDate"?: boolean;
                    /** @description Whether to skip sending SMS verifications to landlines. Requires `lookup_enabled`. */
                    SkipSmsToLandlines?: boolean;
                    /** @description Optional configuration for the TOTP factors. Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. Defaults to 6 */
                    "Totp.CodeLength"?: number;
                    /** @description Optional configuration for the TOTP factors. Set TOTP Issuer for this service. This will allow to configure the issuer of the TOTP URI. Defaults to the service friendly name if not provided. */
                    "Totp.Issuer"?: string;
                    /** @description Optional configuration for the TOTP factors. The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. Defaults to 1 */
                    "Totp.Skew"?: number;
                    /** @description Optional configuration for the TOTP factors. Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive. Defaults to 30 seconds */
                    "Totp.TimeStep"?: number;
                    /** @description The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS languages. */
                    TtsName?: string;
                    /** @description Whether to allow verifications from the service to reach the stream-events sinks if configured */
                    VerifyEventSubscriptionEnabled?: boolean;
                    /** @description The number to use as the WhatsApp Sender that Verify will use to send WhatsApp messages to your users.This WhatsApp Sender must be associated with a Messaging Service SID. */
                    "Whatsapp.From"?: string;
                    /** @description The SID of the Messaging Service containing WhatsApp Sender(s) that Verify will use to send WhatsApp messages to your users. */
                    "Whatsapp.MsgServiceSid"?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service"];
                };
            };
        };
    };
    CreateAccessToken: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The friendly name of the factor that is going to be created with this access token */
                    FactorFriendlyName?: string;
                    FactorType: components["schemas"]["access_token_enum_factor_types"];
                    /** @description The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, and generated by your external system, such as your user's UUID, GUID, or SID. */
                    Identity: string;
                    /** @description How long, in seconds, the access token is valid. Can be an integer between 60 and 300. Default is 60. */
                    Ttl?: number;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.access_token"];
                };
            };
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.access_token"];
                };
            };
        };
    };
    FetchAccessToken: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
                /** @description A 34 character string that uniquely identifies this Access Token. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.access_token"];
                };
            };
        };
    };
    ListEntity: {
        parameters: {
            query?: {
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        entities?: components["schemas"]["verify.v2.service.entity"][];
                        meta?: {
                            /** Format: uri */
                            first_page_url?: string;
                            key?: string;
                            /** Format: uri */
                            next_page_url?: string | null;
                            page?: number;
                            page_size?: number;
                            /** Format: uri */
                            previous_page_url?: string | null;
                            /** Format: uri */
                            url?: string;
                        };
                    };
                };
            };
        };
    };
    CreateEntity: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                    Identity: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.entity"];
                };
            };
        };
    };
    FetchEntity: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.entity"];
                };
            };
        };
    };
    DeleteEntity: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The resource was deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ListChallenge: {
        parameters: {
            query?: {
                /** @description The unique SID identifier of the Factor. */
                FactorSid?: string;
                /** @description The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and descending respectively. Defaults to `asc`. */
                Order?: components["schemas"]["challenge_enum_list_orders"];
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`. */
                Status?: components["schemas"]["challenge_enum_challenge_statuses"];
            };
            header?: never;
            path: {
                /** @description Customer unique identity for the Entity owner of the Challenge. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        challenges?: components["schemas"]["verify.v2.service.entity.challenge"][];
                        meta?: {
                            /** Format: uri */
                            first_page_url?: string;
                            key?: string;
                            /** Format: uri */
                            next_page_url?: string | null;
                            page?: number;
                            page_size?: number;
                            /** Format: uri */
                            previous_page_url?: string | null;
                            /** Format: uri */
                            url?: string;
                        };
                    };
                };
            };
        };
    };
    CreateChallenge: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Customer unique identity for the Entity owner of the Challenge. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Optional payload used to verify the Challenge upon creation. Only used with a Factor of type `totp` to carry the TOTP code that needs to be verified. For `TOTP` this value must be between 3 and 8 characters long. */
                    AuthPayload?: string;
                    /** @description A list of objects that describe the Fields included in the Challenge. Each object contains the label and value of the field, the label can be up to 36 characters in length and the value can be up to 128 characters in length. Used when `factor_type` is `push`. There can be up to 20 details fields. */
                    "Details.Fields"?: unknown[];
                    /** @description Shown to the user when the push notification arrives. Required when `factor_type` is `push`. Can be up to 256 characters in length */
                    "Details.Message"?: string;
                    /**
                     * Format: date-time
                     * @description The date-time when this Challenge expires, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. The default value is five (5) minutes after Challenge creation. The max value is sixty (60) minutes after creation.
                     */
                    ExpirationDate?: string;
                    /** @description The unique SID identifier of the Factor. */
                    FactorSid: string;
                    /** @description Details provided to give context about the Challenge. Not shown to the end user. It must be a stringified JSON with only strings values eg. `{"ip": "172.168.1.234"}`. Can be up to 1024 characters in length */
                    HiddenDetails?: unknown;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.entity.challenge"];
                };
            };
        };
    };
    CreateNotification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Challenge. */
                ChallengeSid: string;
                /** @description Customer unique identity for the Entity owner of the Challenge. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description How long, in seconds, the notification is valid. Can be an integer between 0 and 300. Default is 300. Delivery is attempted until the TTL elapses, even if the device is offline. 0 means that the notification delivery is attempted immediately, only once, and is not stored for future delivery. */
                    Ttl?: number;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.entity.challenge.notification"];
                };
            };
        };
    };
    FetchChallenge: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Customer unique identity for the Entity owner of the Challenges. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
                /** @description A 34 character string that uniquely identifies this Challenge. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    "Twilio-Verify-Signature-Fields"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.entity.challenge"];
                };
            };
        };
    };
    UpdateChallenge: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Customer unique identity for the Entity owner of the Challenge. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
                /** @description A 34 character string that uniquely identifies this Challenge. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The optional payload needed to verify the Challenge. E.g., a TOTP would use the numeric code. For `TOTP` this value must be between 3 and 8 characters long. For `Push` this value can be up to 5456 characters in length */
                    AuthPayload?: string;
                    /** @description Custom metadata associated with the challenge. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{"os": "Android"}`. Can be up to 1024 characters in length. */
                    Metadata?: unknown;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    "Twilio-Verify-Challenge-Signature"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.entity.challenge"];
                };
            };
        };
    };
    ListFactor: {
        parameters: {
            query?: {
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description Customer unique identity for the Entity owner of the Factors. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        factors?: components["schemas"]["verify.v2.service.entity.factor"][];
                        meta?: {
                            /** Format: uri */
                            first_page_url?: string;
                            key?: string;
                            /** Format: uri */
                            next_page_url?: string | null;
                            page?: number;
                            page_size?: number;
                            /** Format: uri */
                            previous_page_url?: string | null;
                            /** Format: uri */
                            url?: string;
                        };
                    };
                };
            };
        };
    };
    CreateNewFactor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Customer unique identity for the Entity owner of the Factor. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The algorithm used when `factor_type` is `push`. Algorithm supported: `ES256` */
                    "Binding.Alg"?: string;
                    /**
                     * @description The Ecdsa public key in PKIX, ASN.1 DER format encoded in Base64.
                     *
                     *     Required when `factor_type` is `push`
                     */
                    "Binding.PublicKey"?: string;
                    /**
                     * @description The shared secret for TOTP factors encoded in Base32. This can be provided when creating the Factor, otherwise it will be generated.
                     *
                     *     Used when `factor_type` is `totp`
                     */
                    "Binding.Secret"?: string;
                    "Config.Alg"?: components["schemas"]["new_factor_enum_totp_algorithms"];
                    /**
                     * @description The ID that uniquely identifies your app in the Google or Apple store, such as `com.example.myapp`. It can be up to 100 characters long.
                     *
                     *     Required when `factor_type` is `push`.
                     */
                    "Config.AppId"?: string;
                    /**
                     * @description Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. The default value is defined at the service level in the property `totp.code_length`. If not configured defaults to 6.
                     *
                     *     Used when `factor_type` is `totp`
                     */
                    "Config.CodeLength"?: number;
                    "Config.NotificationPlatform"?: components["schemas"]["new_factor_enum_notification_platforms"];
                    /**
                     * @description For APN, the device token. For FCM, the registration token. It is used to send the push notifications. Must be between 32 and 255 characters long.
                     *
                     *     Required when `factor_type` is `push`.
                     */
                    "Config.NotificationToken"?: string;
                    /**
                     * @description The Verify Push SDK version used to configure the factor
                     *
                     *     Required when `factor_type` is `push`
                     */
                    "Config.SdkVersion"?: string;
                    /**
                     * @description The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. The default value is defined at the service level in the property `totp.skew`. If not configured defaults to 1.
                     *
                     *     Used when `factor_type` is `totp`
                     */
                    "Config.Skew"?: number;
                    /**
                     * @description Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive. The default value is defined at the service level in the property `totp.time_step`. Defaults to 30 seconds if not configured.
                     *
                     *     Used when `factor_type` is `totp`
                     */
                    "Config.TimeStep"?: number;
                    FactorType: components["schemas"]["new_factor_enum_factor_types"];
                    /**
                     * @description The friendly name of this Factor. This can be any string up to 64 characters, meant for humans to distinguish between Factors.
                     *     For `factor_type` `push`, this could be a device name.
                     *     For `factor_type` `totp`, this value is used as the “account name” in constructing the `binding.uri` property.
                     *     At the same time, we recommend avoiding providing PII.
                     */
                    FriendlyName: string;
                    /** @description Custom metadata associated with the factor. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{"os": "Android"}`. Can be up to 1024 characters in length. */
                    Metadata?: unknown;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.entity.new_factor"];
                };
            };
        };
    };
    FetchFactor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Customer unique identity for the Entity owner of the Factor. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
                /** @description A 34 character string that uniquely identifies this Factor. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.entity.factor"];
                };
            };
        };
    };
    UpdateFactor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Customer unique identity for the Entity owner of the Factor. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
                /** @description A 34 character string that uniquely identifies this Factor. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The optional payload needed to verify the Factor for the first time. E.g. for a TOTP, the numeric code. */
                    AuthPayload?: string;
                    "Config.Alg"?: components["schemas"]["factor_enum_totp_algorithms"];
                    /** @description Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive */
                    "Config.CodeLength"?: number;
                    /**
                     * @description The transport technology used to generate the Notification Token. Can be `apn`, `fcm` or `none`.
                     *
                     *     Required when `factor_type` is `push`.
                     */
                    "Config.NotificationPlatform"?: string;
                    /** @description For APN, the device token. For FCM, the registration token. It is used to send the push notifications. Required when `factor_type` is `push`. If specified, this value must be between 32 and 255 characters long. */
                    "Config.NotificationToken"?: string;
                    /** @description The Verify Push SDK version used to configure the factor */
                    "Config.SdkVersion"?: string;
                    /** @description The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive */
                    "Config.Skew"?: number;
                    /** @description Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive */
                    "Config.TimeStep"?: number;
                    /** @description The new friendly name of this Factor. It can be up to 64 characters. */
                    FriendlyName?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    "Twilio-Verify-Factor-Signature"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.entity.factor"];
                };
            };
        };
    };
    DeleteFactor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Customer unique identity for the Entity owner of the Factor. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters. */
                Identity: string;
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
                /** @description A 34 character string that uniquely identifies this Factor. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The resource was deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ListMessagingConfiguration: {
        parameters: {
            query?: {
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is associated with. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        messaging_configurations?: components["schemas"]["verify.v2.service.messaging_configuration"][];
                        meta?: {
                            /** Format: uri */
                            first_page_url?: string;
                            key?: string;
                            /** Format: uri */
                            next_page_url?: string | null;
                            page?: number;
                            page_size?: number;
                            /** Format: uri */
                            previous_page_url?: string | null;
                            /** Format: uri */
                            url?: string;
                        };
                    };
                };
            };
        };
    };
    CreateMessagingConfiguration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is associated with. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country this configuration will be applied to. If this is a global configuration, Country will take the value `all`. */
                    Country: string;
                    /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) to be used to send SMS to the country of this configuration. */
                    MessagingServiceSid: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.messaging_configuration"];
                };
            };
        };
    };
    FetchMessagingConfiguration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country this configuration will be applied to. If this is a global configuration, Country will take the value `all`. */
                Country: string;
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is associated with. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.messaging_configuration"];
                };
            };
        };
    };
    UpdateMessagingConfiguration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country this configuration will be applied to. If this is a global configuration, Country will take the value `all`. */
                Country: string;
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is associated with. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) to be used to send SMS to the country of this configuration. */
                    MessagingServiceSid: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.messaging_configuration"];
                };
            };
        };
    };
    DeleteMessagingConfiguration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country this configuration will be applied to. If this is a global configuration, Country will take the value `all`. */
                Country: string;
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is associated with. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The resource was deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UpdateChallengePasskeys: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A string that indicates the mechanism by which the WebAuthn implementation is attached to the authenticator at the time the associated `navigator.credentials.create()` or `navigator.credentials.get()` call completes.
                     * @enum {string}
                     */
                    authenticatorAttachment: "platform" | "cross-platform";
                    /** @description A [base64url](https://base64.guru/standards/base64url) encoded representation of `rawId`. */
                    id: string;
                    /** @description The globally unique identifier for this `PublicKeyCredential`. */
                    rawId: string;
                    /** @description The result of a WebAuthn authentication via a `navigator.credentials.get()` request, as specified in [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse). */
                    response: {
                        /** @description The [authenticator data](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API/Authenticator_data) structure contains information from the authenticator about the processing of a credential creation or authentication request. */
                        authenticatorData: string;
                        /** @description This property contains the JSON-compatible serialization of the data passed from the browser to the authenticator in order to generate this credential. */
                        clientDataJSON: string;
                        /** @description An assertion signature over `authenticatorData` and `clientDataJSON`. The assertion signature is created with the private key of the key pair that was created during the originating `navigator.credentials.create()` call and verified using the public key of that same key pair. */
                        signature: string;
                        /** @description The user handle stored in the authenticator, specified as `user.id` in the options passed to the originating `navigator.credentials.create()` call. This property should contain a base64url-encoded entity SID. */
                        userHandle?: string;
                    };
                    /**
                     * @description The valid credential types supported by the API. The values of this enumeration are used for versioning the `AuthenticatorAssertion` and `AuthenticatorAttestation` structures according to the type of the authenticator.
                     * @default public-key
                     * @enum {string}
                     */
                    type?: "public-key";
                };
            };
        };
        responses: {
            /** @description Approved */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The unique SID identifier of the Account. */
                        account_sid?: string | null;
                        /**
                         * Format: date-time
                         * @description The date that this Challenge was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        date_created?: string | null;
                        /**
                         * Format: date-time
                         * @description The date that this Challenge was responded, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        date_responded?: string | null;
                        /**
                         * Format: date-time
                         * @description The date that this Challenge was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        date_updated?: string | null;
                        /** @description Details provided to give context about the Challenge. */
                        details?: unknown;
                        /** @description The unique SID identifier of the Entity. */
                        entity_sid?: string | null;
                        /**
                         * Format: date-time
                         * @description The date-time when this Challenge expires, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        expiration_date?: string | null;
                        /** @description The unique SID identifier of the Factor. */
                        factor_sid?: string | null;
                        /**
                         * @description The Factor Type of this Challenge. Currently `push` and `totp` are supported.
                         * @enum {string}
                         */
                        factor_type?: "push" | "totp" | "passkeys";
                        /** @description Details provided to give context about the Challenge. */
                        hidden_details?: unknown;
                        /** @description Customer unique identity for the Entity owner of the Challenge. */
                        identity?: string | null;
                        /**
                         * Format: uri-map
                         * @description Contains a dictionary of URL links to nested resources of this Challenge.
                         */
                        links?: Record<string, never> | null;
                        /** @description Custom metadata associated with the challenge. */
                        metadata?: unknown;
                        /** @description An object that contains challenge options. Currently only used for `passkeys`. */
                        options?: Record<string, never>;
                        /**
                         * @description Reason for the Challenge to be in certain `status`. One of `none`, `not_needed` or `not_requested`.
                         * @enum {string}
                         */
                        responded_reason?: "none" | "not_needed" | "not_requested";
                        /** @description The unique SID identifier of the Service. */
                        service_sid?: string | null;
                        /** @description A 34 character string that uniquely identifies this Challenge. */
                        sid?: string | null;
                        /**
                         * @description The Status of this Challenge. One of `pending`, `expired`, `approved` or `denied`.
                         * @enum {string}
                         */
                        status?: "pending" | "expired" | "approved" | "denied";
                        /**
                         * Format: uri
                         * @description The URL of this resource.
                         */
                        url?: string | null;
                    };
                };
            };
        };
    };
    CreateChallengePasskeys: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    factor_sid?: string;
                    identity?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The unique SID identifier of the Account. */
                        account_sid?: string | null;
                        /**
                         * Format: date-time
                         * @description The date that this Challenge was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        date_created?: string | null;
                        /**
                         * Format: date-time
                         * @description The date that this Challenge was responded, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        date_responded?: string | null;
                        /**
                         * Format: date-time
                         * @description The date that this Challenge was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        date_updated?: string | null;
                        /** @description Details provided to give context about the Challenge. */
                        details?: unknown;
                        /** @description The unique SID identifier of the Entity. */
                        entity_sid?: string | null;
                        /**
                         * Format: date-time
                         * @description The date-time when this Challenge expires, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        expiration_date?: string | null;
                        /** @description The unique SID identifier of the Factor. */
                        factor_sid?: string | null;
                        /**
                         * @description The Factor Type of this Challenge. Currently `push` and `totp` are supported.
                         * @enum {string}
                         */
                        factor_type?: "push" | "totp" | "passkeys";
                        /** @description Details provided to give context about the Challenge. */
                        hidden_details?: unknown;
                        /** @description Customer unique identity for the Entity owner of the Challenge. */
                        identity?: string | null;
                        /**
                         * Format: uri-map
                         * @description Contains a dictionary of URL links to nested resources of this Challenge.
                         */
                        links?: Record<string, never> | null;
                        /** @description Custom metadata associated with the challenge. */
                        metadata?: unknown;
                        /** @description An object that contains challenge options. Currently only used for `passkeys`. */
                        options?: Record<string, never>;
                        /**
                         * @description Reason for the Challenge to be in certain `status`. One of `none`, `not_needed` or `not_requested`.
                         * @enum {string}
                         */
                        responded_reason?: "none" | "not_needed" | "not_requested";
                        /** @description The unique SID identifier of the Service. */
                        service_sid?: string | null;
                        /** @description A 34 character string that uniquely identifies this Challenge. */
                        sid?: string | null;
                        /**
                         * @description The Status of this Challenge. One of `pending`, `expired`, `approved` or `denied`.
                         * @enum {string}
                         */
                        status?: "pending" | "expired" | "approved" | "denied";
                        /**
                         * Format: uri
                         * @description The URL of this resource.
                         */
                        url?: string | null;
                    };
                };
            };
        };
    };
    CreateNewFactorPasskey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    config?: {
                        /** @enum {string} */
                        authenticator_attachment?: "platform" | "cross-platform" | "any";
                        /** @enum {string} */
                        discoverable_credentials?: "required" | "preferred" | "discouraged";
                        /** @description Contains the information of the party requesting the user for authentication */
                        relying_party?: {
                            id?: string;
                            name?: string;
                            origins?: string[];
                        };
                        /** @enum {string} */
                        user_verification?: "required" | "preferred" | "discouraged";
                    };
                    friendly_name: string;
                    identity: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The unique SID identifier of the Account. */
                        account_sid?: string | null;
                        /** @description Contains the `factor_type` specific secret and metadata. The Binding property is ONLY returned upon Factor creation. */
                        binding?: unknown;
                        /** @description An object that contains configurations specific to a `factor_type`. */
                        config?: unknown;
                        /**
                         * Format: date-time
                         * @description The date that this Factor was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        date_created?: string | null;
                        /**
                         * Format: date-time
                         * @description The date that this Factor was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        date_updated?: string | null;
                        /** @description The unique SID identifier of the Entity. */
                        entity_sid?: string | null;
                        /**
                         * @description The Type of this Factor. Currently `push` and `totp` are supported.
                         * @enum {string}
                         */
                        factor_type?: "push" | "totp" | "passkeys";
                        /** @description The friendly name of this Factor. This can be any string up to 64 characters, meant for humans to distinguish between Factors. */
                        friendly_name?: string | null;
                        /** @description Customer unique identity for the Entity owner of the Factor. */
                        identity?: string | null;
                        /** @description Custom metadata associated with the factor. */
                        metadata?: unknown;
                        options?: unknown;
                        /** @description The unique SID identifier of the Service. */
                        service_sid?: string | null;
                        /** @description A 34 character string that uniquely identifies this Factor. */
                        sid?: string | null;
                        /**
                         * @description The Status of this Factor. One of `unverified` or `verified`.
                         * @enum {string}
                         */
                        status?: "unverified" | "verified";
                        /**
                         * Format: uri
                         * @description The URL of this resource.
                         */
                        url?: string | null;
                    };
                };
            };
        };
    };
    UpdatePasskeysFactor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A string that indicates the mechanism by which the WebAuthn implementation is attached to the authenticator at the time the associated
                     *     `navigator.credentials.create()` or `navigator.credentials.get()` call completes.
                     * @enum {string}
                     */
                    authenticatorAttachment?: "platform" | "cross-platform";
                    /** @description A [base64url](https://base64.guru/standards/base64url) encoded representation of `rawId`. */
                    id?: string;
                    /** @description The globally unique identifier for this `PublicKeyCredential`. */
                    rawId?: string;
                    /** @description The result of a WebAuthn credential registration via `navigator.credentials.create()`, as specified in [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse). */
                    response: {
                        /** @description The authenticator data and an attestation statement for a new key pair generated by the authenticator. */
                        attestationObject?: string;
                        /** @description This property contains the JSON-compatible serialization of the data passed from the browser to the authenticator in order to generate this credential. */
                        clientDataJSON?: string;
                        /** @description An array of strings providing hints as to the methods the client could use to communicate with the relevant authenticator of the public key credential to retrieve. */
                        transports?: ("usb" | "nfc" | "ble" | "smart-card" | "internal" | "hybrid")[];
                    };
                    /**
                     * @description The valid credential types supported by the API.
                     *     The values of this enumeration are used for versioning the `AuthenticatorAssertion` and `AuthenticatorAttestation` structures according to the type of the authenticator.
                     * @default public-key
                     * @enum {string}
                     */
                    type?: "public-key";
                };
            };
        };
        responses: {
            /** @description Created */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The unique SID identifier of the Account. */
                        account_sid?: string | null;
                        /** @description An object that contains configurations specific to a `factor_type`. */
                        config?: unknown;
                        /**
                         * Format: date-time
                         * @description The date that this Factor was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        date_created?: string | null;
                        /**
                         * Format: date-time
                         * @description The date that this Factor was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
                         */
                        date_updated?: string | null;
                        /** @description The unique SID identifier of the Entity. */
                        entity_sid?: string | null;
                        /**
                         * @description The Type of this Factor. Currently `push` and `totp` are supported.
                         * @enum {string}
                         */
                        factor_type?: "push" | "totp" | "passkeys";
                        /** @description A human readable description of this resource, up to 64 characters. */
                        friendly_name?: string | null;
                        /** @description Customer unique identity for the Entity owner of the Factor. */
                        identity?: string | null;
                        /** @description Custom metadata associated with the factor. */
                        metadata?: unknown;
                        /** @description The unique SID identifier of the Service. */
                        service_sid?: string | null;
                        /** @description A 34 character string that uniquely identifies this Factor. */
                        sid?: string | null;
                        /**
                         * @description The Status of this Factor. One of `unverified` or `verified`.
                         * @enum {string}
                         */
                        status?: "unverified" | "verified";
                        /**
                         * Format: uri
                         * @description The URL of this resource.
                         */
                        url?: string | null;
                    };
                };
            };
        };
    };
    ListRateLimit: {
        parameters: {
            query?: {
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: {
                            /** Format: uri */
                            first_page_url?: string;
                            key?: string;
                            /** Format: uri */
                            next_page_url?: string | null;
                            page?: number;
                            page_size?: number;
                            /** Format: uri */
                            previous_page_url?: string | null;
                            /** Format: uri */
                            url?: string;
                        };
                        rate_limits?: components["schemas"]["verify.v2.service.rate_limit"][];
                    };
                };
            };
        };
    };
    CreateRateLimit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Description of this Rate Limit */
                    Description?: string;
                    /** @description Provides a unique and addressable name to be assigned to this Rate Limit, assigned by the developer, to be optionally used in addition to SID. **This value should not contain PII.** */
                    UniqueName: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.rate_limit"];
                };
            };
        };
    };
    ListBucket: {
        parameters: {
            query?: {
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The Twilio-provided string that uniquely identifies the Rate Limit resource. */
                RateLimitSid: string;
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        buckets?: components["schemas"]["verify.v2.service.rate_limit.bucket"][];
                        meta?: {
                            /** Format: uri */
                            first_page_url?: string;
                            key?: string;
                            /** Format: uri */
                            next_page_url?: string | null;
                            page?: number;
                            page_size?: number;
                            /** Format: uri */
                            previous_page_url?: string | null;
                            /** Format: uri */
                            url?: string;
                        };
                    };
                };
            };
        };
    };
    CreateBucket: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Twilio-provided string that uniquely identifies the Rate Limit resource. */
                RateLimitSid: string;
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Number of seconds that the rate limit will be enforced over. */
                    Interval: number;
                    /** @description Maximum number of requests permitted in during the interval. */
                    Max: number;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.rate_limit.bucket"];
                };
            };
        };
    };
    FetchBucket: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Twilio-provided string that uniquely identifies the Rate Limit resource. */
                RateLimitSid: string;
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
                ServiceSid: string;
                /** @description A 34 character string that uniquely identifies this Bucket. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.rate_limit.bucket"];
                };
            };
        };
    };
    UpdateBucket: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Twilio-provided string that uniquely identifies the Rate Limit resource. */
                RateLimitSid: string;
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
                ServiceSid: string;
                /** @description A 34 character string that uniquely identifies this Bucket. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Number of seconds that the rate limit will be enforced over. */
                    Interval?: number;
                    /** @description Maximum number of requests permitted in during the interval. */
                    Max?: number;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.rate_limit.bucket"];
                };
            };
        };
    };
    DeleteBucket: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Twilio-provided string that uniquely identifies the Rate Limit resource. */
                RateLimitSid: string;
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
                ServiceSid: string;
                /** @description A 34 character string that uniquely identifies this Bucket. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The resource was deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FetchRateLimit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
                ServiceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Rate Limit resource to fetch. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.rate_limit"];
                };
            };
        };
    };
    UpdateRateLimit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
                ServiceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Rate Limit resource to fetch. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Description of this Rate Limit */
                    Description?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.rate_limit"];
                };
            };
        };
    };
    DeleteRateLimit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with. */
                ServiceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Rate Limit resource to fetch. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The resource was deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CreateVerificationCheck: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to create the resource under. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
                    Amount?: string;
                    /** @description The 4-10 character string being verified. */
                    Code?: string;
                    /** @description The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
                    Payee?: string;
                    /** @description A sna client token received in sna url invocation response needs to be passed in Verification Check request and should match to get successful response. */
                    SnaClientToken?: string;
                    /** @description The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Either this parameter or the `verification_sid` must be specified. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). */
                    To?: string;
                    /** @description A SID that uniquely identifies the Verification Check. Either this parameter or the `to` phone number/[email](https://www.twilio.com/docs/verify/email) must be specified. */
                    VerificationSid?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.verification_check"];
                };
            };
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.verification_check"];
                };
            };
        };
    };
    CreateVerification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to create the resource under. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
                    Amount?: string;
                    /** @description Your [App Hash](https://developers.google.com/identity/sms-retriever/verify#computing_your_apps_hash_string) to be appended at the end of your verification SMS body. Applies only to SMS. Example SMS body: `<#> Your AppName verification code is: 1234 He42w354ol9`. */
                    AppHash?: string;
                    /** @description The verification method to use. One of: [`email`](https://www.twilio.com/docs/verify/email), `sms`, `whatsapp`, `call`, `sna` or `auto`. */
                    Channel: string;
                    /** @description [`email`](https://www.twilio.com/docs/verify/email) channel configuration in json format. The fields 'from' and 'from_name' are optional but if included the 'from' field must have a valid email address. */
                    ChannelConfiguration?: unknown;
                    /** @description A pre-generated code to use for verification. The code can be between 4 and 10 characters, inclusive. */
                    CustomCode?: string;
                    /** @description A custom user defined friendly name that overwrites the existing one in the verification message */
                    CustomFriendlyName?: string;
                    /**
                     * @deprecated
                     * @description The text of a custom message to use for the verification [DEPRECATED].
                     */
                    CustomMessage?: string;
                    /** @description Strongly encouraged if using the auto channel. The IP address of the client's device. If provided, it has to be a valid IPv4 or IPv6 address. */
                    DeviceIp?: string;
                    /** @description An optional Boolean value to indicate the requirement of sna client token in the SNA URL invocation response for added security. This token must match in the Verification Check request to confirm phone number verification. */
                    EnableSnaClientToken?: boolean;
                    /** @description Locale will automatically resolve based on phone number country code for SMS, WhatsApp, and call channel verifications. It will fallback to English or the template’s default translation if the selected translation is not available. This parameter will override the automatic locale resolution. [See supported languages and more information here](https://www.twilio.com/docs/verify/supported-languages). */
                    Locale?: string;
                    /** @description The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
                    Payee?: string;
                    /** @description The custom key-value pairs of Programmable Rate Limits. Keys correspond to `unique_name` fields defined when [creating your Rate Limit](https://www.twilio.com/docs/verify/api/service-rate-limits). Associated value pairs represent values in the request that you are rate limiting on. You may include multiple Rate Limit values in each request. */
                    RateLimits?: unknown;
                    RiskCheck?: components["schemas"]["verification_enum_risk_check"];
                    /** @description The digits to send after a phone call is answered, for example, to dial an extension. For more information, see the Programmable Voice documentation of [sendDigits](https://www.twilio.com/docs/voice/twiml/number#attributes-sendDigits). */
                    SendDigits?: string;
                    /** @description A string containing a JSON map of key value pairs of tags to be recorded as metadata for the message. The tags will also be included as part of the verification and message status event type payloads. The object may contain up to 10 tags. Keys and values can each be up to 128 characters in length. **This value should not contain PII.** */
                    Tags?: string;
                    /** @description A stringified JSON object in which the keys are the template's special variables and the values are the variables substitutions. */
                    TemplateCustomSubstitutions?: string;
                    /** @description The message [template](https://www.twilio.com/docs/verify/api/templates). If provided, will override the default template for the Service. SMS and Voice channels only. */
                    TemplateSid?: string;
                    /** @description The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). */
                    To: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    "Retry-After"?: string;
                    "Twilio-Reached-Rate-Limit"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.verification"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    "Retry-After"?: string;
                    "Twilio-Reached-Rate-Limit"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: int32
                         * @description Twilio-specific error code
                         */
                        code?: number;
                        /** @description Error message */
                        message?: string;
                        /** @description Link to Error Code References */
                        more_info?: string;
                        /**
                         * Format: int32
                         * @description HTTP response status code
                         */
                        status?: number;
                    };
                };
            };
        };
    };
    FetchVerification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to fetch the resource from. */
                ServiceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Verification resource to fetch. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.verification"];
                };
            };
        };
    };
    UpdateVerification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to update the resource from. */
                ServiceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Verification resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    Status: components["schemas"]["verification_enum_status"];
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.verification"];
                };
            };
        };
    };
    ListWebhook: {
        parameters: {
            query?: {
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: {
                            /** Format: uri */
                            first_page_url?: string;
                            key?: string;
                            /** Format: uri */
                            next_page_url?: string | null;
                            page?: number;
                            page_size?: number;
                            /** Format: uri */
                            previous_page_url?: string | null;
                            /** Format: uri */
                            url?: string;
                        };
                        webhooks?: components["schemas"]["verify.v2.service.webhook"][];
                    };
                };
            };
        };
    };
    CreateWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The array of events that this Webhook is subscribed to. Possible event types: `*, factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied` */
                    EventTypes: string[];
                    /** @description The string that you assigned to describe the webhook. **This value should not contain PII.** */
                    FriendlyName: string;
                    Status?: components["schemas"]["webhook_enum_status"];
                    Version?: components["schemas"]["webhook_enum_version"];
                    /** @description The URL associated with this Webhook. */
                    WebhookUrl: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.webhook"];
                };
            };
        };
    };
    FetchWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Webhook resource to fetch. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.webhook"];
                };
            };
        };
    };
    UpdateWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Webhook resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The array of events that this Webhook is subscribed to. Possible event types: `*, factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied` */
                    EventTypes?: string[];
                    /** @description The string that you assigned to describe the webhook. **This value should not contain PII.** */
                    FriendlyName?: string;
                    Status?: components["schemas"]["webhook_enum_status"];
                    Version?: components["schemas"]["webhook_enum_version"];
                    /** @description The URL associated with this Webhook. */
                    WebhookUrl?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service.webhook"];
                };
            };
        };
    };
    DeleteWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Service. */
                ServiceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Webhook resource to delete. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The resource was deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FetchService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Twilio-provided string that uniquely identifies the Verification Service resource to fetch. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service"];
                };
            };
        };
    };
    UpdateService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Twilio-provided string that uniquely identifies the Service resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The length of the verification code to generate. Must be an integer value between 4 and 10, inclusive. */
                    CodeLength?: number;
                    /** @description Whether to allow sending verifications with a custom code instead of a randomly generated one. */
                    CustomCodeEnabled?: boolean;
                    /** @description The default message [template](https://www.twilio.com/docs/verify/api/templates). Will be used for all SMS verifications unless explicitly overriden. SMS channel only. */
                    DefaultTemplateSid?: string;
                    /** @description Whether to add a privacy warning at the end of an SMS. **Disabled by default and applies only for SMS.** */
                    DoNotShareWarningEnabled?: boolean;
                    /** @description Whether to ask the user to press a number before delivering the verify code in a phone call. */
                    DtmfInputRequired?: boolean;
                    /** @description A descriptive string that you create to describe the verification service. It can be up to 32 characters long. **This value should not contain PII.** */
                    FriendlyName?: string;
                    /** @description Whether to perform a lookup with each verification started and return info about the phone number. */
                    LookupEnabled?: boolean;
                    /** @description The Authenticator Attachment for Passkeys. This is the type of authenticator that will be used to create Passkeys. It can be empty or it can have the values `platform`, `cross-platform` or `any`. */
                    "Passkeys.AuthenticatorAttachment"?: string;
                    /** @description Indicates whether credentials must be discoverable by the authenticator. It can be empty or it can have the values `required`, `preferred` or `discouraged`. */
                    "Passkeys.DiscoverableCredentials"?: string;
                    /** @description The Relying Party ID for Passkeys. This is the domain of your application, e.g. `example.com`. It is used to identify your application when creating Passkeys. */
                    "Passkeys.RelyingParty.Id"?: string;
                    /** @description The Relying Party Name for Passkeys. This is the name of your application, e.g. `Example App`. It is used to identify your application when creating Passkeys. */
                    "Passkeys.RelyingParty.Name"?: string;
                    /** @description The Relying Party Origins for Passkeys. This is the origin of your application, e.g. `login.example.com,www.example.com`. It is used to identify your application when creating Passkeys, it can have multiple origins split by `,`. */
                    "Passkeys.RelyingParty.Origins"?: string;
                    /** @description The User Verification for Passkeys. This is the type of user verification that will be used to create Passkeys. It can be empty or it can have the values `required`, `preferred` or `discouraged`. */
                    "Passkeys.UserVerification"?: string;
                    /** @description Whether to pass PSD2 transaction parameters when starting a verification. */
                    Psd2Enabled?: boolean;
                    /** @description Optional configuration for the Push factors. Set the APN Credential for this service. This will allow to send push notifications to iOS devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource) */
                    "Push.ApnCredentialSid"?: string;
                    /** @description Optional configuration for the Push factors. Set the FCM Credential for this service. This will allow to send push notifications to Android devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource) */
                    "Push.FcmCredentialSid"?: string;
                    /** @description Optional configuration for the Push factors. If true, include the date in the Challenge's response. Otherwise, the date is omitted from the response. See [Challenge](https://www.twilio.com/docs/verify/api/challenge) resource’s details parameter for more info. Default: false. **Deprecated** do not use this parameter. */
                    "Push.IncludeDate"?: boolean;
                    /** @description Whether to skip sending SMS verifications to landlines. Requires `lookup_enabled`. */
                    SkipSmsToLandlines?: boolean;
                    /** @description Optional configuration for the TOTP factors. Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. Defaults to 6 */
                    "Totp.CodeLength"?: number;
                    /** @description Optional configuration for the TOTP factors. Set TOTP Issuer for this service. This will allow to configure the issuer of the TOTP URI. */
                    "Totp.Issuer"?: string;
                    /** @description Optional configuration for the TOTP factors. The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. Defaults to 1 */
                    "Totp.Skew"?: number;
                    /** @description Optional configuration for the TOTP factors. Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive. Defaults to 30 seconds */
                    "Totp.TimeStep"?: number;
                    /** @description The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS languages. */
                    TtsName?: string;
                    /** @description Whether to allow verifications from the service to reach the stream-events sinks if configured */
                    VerifyEventSubscriptionEnabled?: boolean;
                    /** @description The WhatsApp number to use as the sender of the verification messages. This number must be associated with the WhatsApp Message Service. */
                    "Whatsapp.From"?: string;
                    /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services) to associate with the Verification Service. */
                    "Whatsapp.MsgServiceSid"?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["verify.v2.service"];
                };
            };
        };
    };
    DeleteService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Twilio-provided string that uniquely identifies the Verification Service resource to delete. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The resource was deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ListVerificationTemplate: {
        parameters: {
            query?: {
                /** @description String filter used to query templates with a given friendly name. */
                FriendlyName?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description Indicates whether the browser should include credentials */
                    "Access-Control-Allow-Credentials"?: boolean;
                    /**
                     * @description Specify the headers allowed when accessing the resource
                     * @example Content-Type, Authorization
                     */
                    "Access-Control-Allow-Headers"?: string;
                    /**
                     * @description Specify the HTTP methods allowed when accessing the resource
                     * @example POST, OPTIONS
                     */
                    "Access-Control-Allow-Methods"?: string;
                    /**
                     * @description Specify the origin(s) allowed to access the resource
                     * @example *
                     */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Headers exposed to the client */
                    "Access-Control-Expose-Headers"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        meta?: {
                            /** Format: uri */
                            first_page_url?: string;
                            key?: string;
                            /** Format: uri */
                            next_page_url?: string | null;
                            page?: number;
                            page_size?: number;
                            /** Format: uri */
                            previous_page_url?: string | null;
                            /** Format: uri */
                            url?: string;
                        };
                        templates?: components["schemas"]["verify.v2.verification_template"][];
                    };
                };
            };
        };
    };
}
