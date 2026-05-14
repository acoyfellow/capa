export type paths = {
    "/v1/a2p/BrandRegistrations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListBrandRegistrations"];
        put?: never;
        post: operations["CreateBrandRegistrations"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/a2p/BrandRegistrations/{BrandRegistrationSid}/2fa": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/a2p/BrandRegistrations/{BrandRegistrationSid}/SmsOtp": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CreateBrandRegistrationOtp"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/a2p/BrandRegistrations/{BrandSid}/Vettings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListBrandVetting"];
        put?: never;
        post: operations["CreateBrandVetting"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/a2p/BrandRegistrations/{BrandSid}/Vettings/{BrandVettingSid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchBrandVetting"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/a2p/BrandRegistrations/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchBrandRegistrations"];
        put?: never;
        post: operations["UpdateBrandRegistrations"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Deactivations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a list of all United States numbers that have been deactivated on a specific date.
         * @description Fetch a list of all United States numbers that have been deactivated on a specific date.
         */
        get: operations["FetchDeactivation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/LinkShortening/Domains/{DomainSid}/Certificate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchDomainCertV4"];
        put?: never;
        post: operations["UpdateDomainCertV4"];
        delete: operations["DeleteDomainCertV4"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/LinkShortening/Domains/{DomainSid}/Config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchDomainConfig"];
        put?: never;
        post: operations["UpdateDomainConfig"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CreateLinkshorteningMessagingService"];
        delete: operations["DeleteLinkshorteningMessagingService"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/LinkShortening/Domains/{DomainSid}/RequestManagedCert": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["UpdateRequestManagedCert"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/LinkShortening/Domains/{DomainSid}/ValidateDns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchDomainDnsValidation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/LinkShortening/MessagingService/{MessagingServiceSid}/DomainConfig": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchDomainConfigMessagingService"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/LinkShortening/MessagingServices/{MessagingServiceSid}/Domain": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchLinkshorteningMessagingServiceDomainAssociation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListService"];
        put?: never;
        post: operations["CreateService"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{MessagingServiceSid}/ChannelSenders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListChannelSender"];
        put?: never;
        post: operations["CreateChannelSender"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchChannelSender"];
        put?: never;
        post?: never;
        delete: operations["DeleteChannelSender"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListUsAppToPerson"];
        put?: never;
        post: operations["CreateUsAppToPerson"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchUsAppToPerson"];
        put?: never;
        post: operations["UpdateUsAppToPerson"];
        delete: operations["DeleteUsAppToPerson"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/Usecases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchUsAppToPersonUsecase"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{ServiceSid}/AlphaSenders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListAlphaSender"];
        put?: never;
        post: operations["CreateAlphaSender"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{ServiceSid}/AlphaSenders/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchAlphaSender"];
        put?: never;
        post?: never;
        delete: operations["DeleteAlphaSender"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{ServiceSid}/DestinationAlphaSenders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListDestinationAlphaSender"];
        put?: never;
        post: operations["CreateDestinationAlphaSender"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{ServiceSid}/DestinationAlphaSenders/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchDestinationAlphaSender"];
        put?: never;
        post?: never;
        delete: operations["DeleteDestinationAlphaSender"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{ServiceSid}/PhoneNumbers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListPhoneNumber"];
        put?: never;
        post: operations["CreatePhoneNumber"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchPhoneNumber"];
        put?: never;
        post?: never;
        delete: operations["DeletePhoneNumber"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{ServiceSid}/ShortCodes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListShortCode"];
        put?: never;
        post: operations["CreateShortCode"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{ServiceSid}/ShortCodes/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchShortCode"];
        put?: never;
        post?: never;
        delete: operations["DeleteShortCode"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchService"];
        put?: never;
        post: operations["UpdateService"];
        delete: operations["DeleteService"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/PreregisteredUsa2p": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["CreateExternalCampaign"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Services/Usecases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchUsecase"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Tollfree/Verifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List tollfree verifications
         * @description List tollfree verifications
         */
        get: operations["ListTollfreeVerification"];
        put?: never;
        /**
         * Create a tollfree verification
         * @description Create a tollfree verification
         */
        post: operations["CreateTollfreeVerification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/Tollfree/Verifications/{Sid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a tollfree verification
         * @description Retrieve a tollfree verification
         */
        get: operations["FetchTollfreeVerification"];
        put?: never;
        /**
         * Edit a tollfree verification
         * @description Edit a tollfree verification
         */
        post: operations["UpdateTollfreeVerification"];
        /**
         * Delete a tollfree verification
         * @description Delete a tollfree verification
         */
        delete: operations["DeleteTollfreeVerification"];
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
         * @description DEPRECATED. Feedback on how to improve brand score
         * @enum {string}
         */
        brand_registrations_enum_brand_feedback: "TAX_ID" | "STOCK_SYMBOL" | "NONPROFIT" | "GOVERNMENT_ENTITY" | "OTHERS";
        /**
         * @description When a brand is registered, TCR will attempt to verify the identity of the brand based on the supplied information.
         * @enum {string}
         */
        brand_registrations_enum_identity_status: "SELF_DECLARED" | "UNVERIFIED" | "VERIFIED" | "VETTED_VERIFIED";
        /**
         * @description Brand Registration status. One of "PENDING", "APPROVED", "FAILED", "IN_REVIEW", "DELETION_PENDING", "DELETION_FAILED", "SUSPENDED".
         * @enum {string}
         */
        brand_registrations_enum_status: "PENDING" | "APPROVED" | "FAILED" | "IN_REVIEW" | "DELETION_PENDING" | "DELETION_FAILED" | "SUSPENDED";
        /**
         * @description The third-party provider that has conducted the vetting. One of “CampaignVerify” (Campaign Verify tokens) or “AEGIS” (Secondary Vetting).
         * @enum {string}
         */
        brand_vetting_enum_vetting_provider: "campaign-verify" | "aegis";
        "messaging.v1.brand_registrations": {
            /** @description A2P Messaging Profile Bundle BundleSid. */
            a2p_profile_bundle_sid?: string | null;
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Brand Registration resource. */
            account_sid?: string | null;
            /** @description DEPRECATED. Feedback on how to improve brand score */
            brand_feedback?: components["schemas"]["brand_registrations_enum_brand_feedback"][] | null;
            /** @description The secondary vetting score if it was done. Otherwise, it will be the brand score if it's returned from TCR. It may be null if no score is available. */
            brand_score?: number | null;
            /** @description Type of brand. One of: "STANDARD", "SOLE_PROPRIETOR". SOLE_PROPRIETOR is for the low volume, SOLE_PROPRIETOR campaign use case. There can only be one SOLE_PROPRIETOR campaign created per SOLE_PROPRIETOR brand. STANDARD is for all other campaign use cases. Multiple campaign use cases can be created per STANDARD brand. */
            brand_type?: string | null;
            /** @description A2P Messaging Profile Bundle BundleSid. */
            customer_profile_bundle_sid?: string | null;
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
            /** @description A list of errors that occurred during the brand registration process. */
            errors?: unknown[] | null;
            /** @description DEPRECATED. A reason why brand registration has failed. Only applicable when status is FAILED. */
            failure_reason?: string | null;
            /** @description Identified as a government entity */
            government_entity?: boolean | null;
            identity_status?: components["schemas"]["brand_registrations_enum_identity_status"];
            /** Format: uri-map */
            links?: Record<string, never> | null;
            /** @description A boolean that specifies whether brand should be a mock or not. If true, brand will be registered as a mock brand. Defaults to false if no value is provided. */
            mock?: boolean | null;
            /** @description Publicly traded company identified in the Russell 3000 Index */
            russell_3000?: boolean | null;
            /** @description The unique string to identify Brand Registration. */
            sid?: string | null;
            /** @description A flag to disable automatic secondary vetting for brands which it would otherwise be done. */
            skip_automatic_sec_vet?: boolean | null;
            status?: components["schemas"]["brand_registrations_enum_status"];
            /** @description Nonprofit organization tax-exempt status per section 501 of the U.S. tax code. */
            tax_exempt_status?: string | null;
            /** @description Campaign Registry (TCR) Brand ID. Assigned only after successful brand registration. */
            tcr_id?: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the Brand Registration resource.
             */
            url?: string | null;
        };
        "messaging.v1.brand_registrations.brand_registration_otp": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Brand Registration resource. */
            account_sid?: string | null;
            /** @description The unique string to identify Brand Registration of Sole Proprietor Brand */
            brand_registration_sid?: string | null;
        };
        "messaging.v1.brand_registrations.brand_vetting": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the vetting record. */
            account_sid?: string | null;
            /** @description The unique string to identify Brand Registration. */
            brand_sid?: string | null;
            /** @description The Twilio SID of the third-party vetting record. */
            brand_vetting_sid?: string | null;
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
            /**
             * Format: uri
             * @description The absolute URL of the Brand Vetting resource.
             */
            url?: string | null;
            /** @description The type of vetting that has been conducted. One of “STANDARD” (Aegis) or “POLITICAL” (Campaign Verify). */
            vetting_class?: string | null;
            /** @description The unique identifier of the vetting from the third-party provider. */
            vetting_id?: string | null;
            vetting_provider?: components["schemas"]["brand_vetting_enum_vetting_provider"];
            /** @description The status of the import vetting attempt. One of “PENDING,” “SUCCESS,” or “FAILED”. */
            vetting_status?: string | null;
        };
        "messaging.v1.deactivation": {
            /**
             * Format: uri
             * @description Returns an authenticated url that redirects to a file containing the deactivated numbers for the requested day. This url is valid for up to two minutes.
             */
            redirect_to?: string | null;
        };
        "messaging.v1.domain_cert_v4": {
            /** @description Optional JSON field describing the status and upload date of a new certificate in the process of validation */
            cert_in_validation?: unknown;
            /** @description The unique string that we created to identify this Certificate resource. */
            certificate_sid?: string | null;
            /**
             * Format: date-time
             * @description Date that this Domain was registered to the Twilio platform to create a new Domain object.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description Date that the private certificate associated with this domain expires. You will need to update the certificate before that date to ensure your shortened links will continue to work.
             */
            date_expires?: string | null;
            /**
             * Format: date-time
             * @description Date that this Domain was last updated.
             */
            date_updated?: string | null;
            /**
             * Format: uri
             * @description Full url path for this domain.
             */
            domain_name?: string | null;
            /** @description The unique string that we created to identify the Domain resource. */
            domain_sid?: string | null;
            /** Format: uri */
            url?: string | null;
        };
        "messaging.v1.domain_config": {
            /**
             * Format: uri
             * @description URL to receive click events to your webhook whenever the recipients click on the shortened links.
             */
            callback_url?: string | null;
            /** @description The unique string that we created to identify the Domain config (prefix ZK). */
            config_sid?: string | null;
            /** @description Boolean field to set customer delivery preference when there is a failure in linkShortening service */
            continue_on_failure?: boolean | null;
            /**
             * Format: date-time
             * @description Date this Domain Config was created.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description Date that this Domain Config was last updated.
             */
            date_updated?: string | null;
            /** @description Customer's choice to send links with/without "https://" attached to shortened url. If true, messages will not be sent with https:// at the beginning of the url. If false, messages will be sent with https:// at the beginning of the url. False is the default behavior if it is not specified. */
            disable_https?: boolean | null;
            /** @description The unique string that we created to identify the Domain resource. */
            domain_sid?: string | null;
            /**
             * Format: uri
             * @description Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping.
             */
            fallback_url?: string | null;
            /** Format: uri */
            url?: string | null;
        };
        "messaging.v1.domain_config_messaging_service": {
            /**
             * Format: uri
             * @description URL to receive click events to your webhook whenever the recipients click on the shortened links.
             */
            callback_url?: string | null;
            /** @description The unique string that we created to identify the Domain config (prefix ZK). */
            config_sid?: string | null;
            /** @description Boolean field to set customer delivery preference when there is a failure in linkShortening service */
            continue_on_failure?: boolean | null;
            /**
             * Format: date-time
             * @description Date this Domain Config was created.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description Date that this Domain Config was last updated.
             */
            date_updated?: string | null;
            /** @description The unique string that we created to identify the Domain resource. */
            domain_sid?: string | null;
            /**
             * Format: uri
             * @description Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping.
             */
            fallback_url?: string | null;
            /** @description The unique string that identifies the messaging service */
            messaging_service_sid?: string | null;
            /** Format: uri */
            url?: string | null;
        };
        "messaging.v1.domain_dns_validation": {
            /** @description The unique string that we created to identify the Domain resource. */
            domain_sid?: string | null;
            is_valid?: boolean | null;
            reason?: string | null;
            /** Format: uri */
            url?: string | null;
        };
        "messaging.v1.external_campaign": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the Campaign belongs to. */
            account_sid?: string | null;
            /** @description ID of the preregistered campaign. */
            campaign_id?: string | null;
            /**
             * Format: date-time
             * @description The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
             */
            date_created?: string | null;
            /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) that the resource is associated with. */
            messaging_service_sid?: string | null;
            /** @description The unique string that identifies a US A2P Compliance resource `QE2c6890da8086d771620e9b13fadeba0b`. */
            sid?: string | null;
        };
        "messaging.v1.linkshortening_messaging_service": {
            /** @description The unique string identifies the domain resource */
            domain_sid?: string | null;
            /** @description The unique string that identifies the messaging service */
            messaging_service_sid?: string | null;
            /** Format: uri */
            url?: string | null;
        };
        "messaging.v1.linkshortening_messaging_service_domain_association": {
            /** @description The unique string that we created to identify the Domain resource. */
            domain_sid?: string | null;
            /** @description The unique string that identifies the messaging service */
            messaging_service_sid?: string | null;
            /** Format: uri */
            url?: string | null;
        };
        "messaging.v1.request_managed_cert": {
            /** @description The unique string that we created to identify this Certificate resource. */
            certificate_sid?: string | null;
            /**
             * Format: date-time
             * @description Date that this Domain was registered to the Twilio platform to create a new Domain object.
             */
            date_created?: string | null;
            /**
             * Format: date-time
             * @description Date that the private certificate associated with this domain expires. This is the expiration date of your existing cert.
             */
            date_expires?: string | null;
            /**
             * Format: date-time
             * @description Date that this Domain was last updated.
             */
            date_updated?: string | null;
            /**
             * Format: uri
             * @description Full url path for this domain.
             */
            domain_name?: string | null;
            /** @description The unique string that we created to identify the Domain resource. */
            domain_sid?: string | null;
            /** @description A boolean flag indicating if the certificate is managed by Twilio. */
            managed?: boolean | null;
            /** @description A boolean flag indicating if a managed certificate needs to be fulfilled by Twilio. */
            requesting?: boolean | null;
            /** Format: uri */
            url?: string | null;
        };
        "messaging.v1.service": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource. */
            account_sid?: string | null;
            /** @description Whether to enable [Area Code Geomatch](https://www.twilio.com/docs/messaging/services#area-code-geomatch) on the Service Instance. */
            area_code_geomatch?: boolean | null;
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
            /**
             * Format: http-method
             * @description The HTTP method we use to call `fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            fallback_method?: "GET" | "POST" | null;
            /** @description [OBSOLETE] Former feature used to fallback to long code sender after certain short code message failures. */
            fallback_to_long_code?: boolean | null;
            /**
             * Format: uri
             * @description The URL that we call using `fallback_method` if an error occurs while retrieving or executing the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `fallback_url` defined for the Messaging Service.
             */
            fallback_url?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `inbound_request_url`. Can be `GET` or `POST`.
             * @enum {string|null}
             */
            inbound_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call using `inbound_method` when a message is received by any phone number or short code in the Service. When this property is `null`, receiving inbound messages is disabled. All messages sent to the Twilio phone number or short code will not be logged and received on the Account. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `inbound_request_url` defined for the Messaging Service.
             */
            inbound_request_url?: string | null;
            /**
             * Format: uri-map
             * @description The absolute URLs of related resources.
             */
            links?: Record<string, never> | null;
            /** @description Whether to enable the [MMS Converter](https://www.twilio.com/docs/messaging/services#mms-converter) for messages sent through the Service instance. */
            mms_converter?: boolean | null;
            scan_message_content?: components["schemas"]["service_enum_scan_message_content"];
            /** @description The unique string that we created to identify the Service resource. */
            sid?: string | null;
            /** @description Whether to enable [Smart Encoding](https://www.twilio.com/docs/messaging/services#smart-encoding) for messages sent through the Service instance. */
            smart_encoding?: boolean | null;
            /**
             * Format: uri
             * @description The URL we call to [pass status updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about message delivery.
             */
            status_callback?: string | null;
            /** @description Whether to enable [Sticky Sender](https://www.twilio.com/docs/messaging/services#sticky-sender) on the Service instance. */
            sticky_sender?: boolean | null;
            /** @description Reserved. */
            synchronous_validation?: boolean | null;
            /**
             * Format: uri
             * @description The absolute URL of the Service resource.
             */
            url?: string | null;
            /** @description Whether US A2P campaign is registered for this Service. */
            us_app_to_person_registered?: boolean | null;
            /** @description A boolean value that indicates either the webhook url configured on the phone number will be used or `inbound_request_url`/`fallback_url` url will be called when a message is received from the phone number. If this field is enabled then the webhook url defined on the phone number will override the `inbound_request_url`/`fallback_url` defined for the Messaging Service. */
            use_inbound_webhook_on_number?: boolean | null;
            /** @description A string that describes the scenario in which the Messaging Service will be used. Possible values are `notifications`, `marketing`, `verification`, `discussion`, `poll`, `undeclared`. */
            usecase?: string | null;
            /**
             * @description How long, in seconds, messages sent from the Service are valid. Can be an integer from `1` to `36,000`. Default value is `36,000`.
             * @default 0
             */
            validity_period: number;
        };
        "messaging.v1.service.addons": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the add on resource. */
            account_sid?: string | null;
            /** @description The config of the add on in JSON string format. */
            add_on_config?: string | null;
            /** @description The SID that identifies the add on type. */
            add_on_type_sid?: string | null;
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
            /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource is associated with. */
            service_sid?: string | null;
            /** @description The unique string that we created to identify the add on resource. */
            sid?: string;
            /**
             * Format: uri
             * @description The absolute URL of the add on resource.
             */
            url?: string | null;
        };
        "messaging.v1.service.alpha_sender": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AlphaSender resource. */
            account_sid?: string | null;
            /** @description The Alphanumeric Sender ID string. */
            alpha_sender?: string | null;
            /** @description An array of values that describe whether the number can receive calls or messages. Can be: `SMS`. */
            capabilities?: string[] | null;
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
            /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource is associated with. */
            service_sid?: string | null;
            /** @description The unique string that we created to identify the AlphaSender resource. */
            sid?: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the AlphaSender resource.
             */
            url?: string | null;
        };
        "messaging.v1.service.channel_sender": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ChannelSender resource. */
            account_sid?: string | null;
            /** @description The 2-character [ISO Country Code](https://www.iso.org/iso-3166-country-codes.html) of the number. */
            country_code?: string | null;
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
            /** @description The SID of the [Service](https://www.twilio.com/docs/messaging/services) the resource is associated with. */
            messaging_service_sid?: string | null;
            /** @description The unique string that identifies the sender e.g whatsapp:+123456XXXX. */
            sender?: string | null;
            /** @description A string value that identifies the sender type e.g WhatsApp, Messenger. */
            sender_type?: string | null;
            /** @description The unique string that we created to identify the ChannelSender resource. */
            sid?: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the ChannelSender resource.
             */
            url?: string | null;
        };
        "messaging.v1.service.destination_alpha_sender": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AlphaSender resource. */
            account_sid?: string | null;
            /** @description The Alphanumeric Sender ID string. */
            alpha_sender?: string | null;
            /** @description An array of values that describe whether the number can receive calls or messages. Can be: `SMS`. */
            capabilities?: string[] | null;
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
            /** @description The Two Character ISO Country Code the Alphanumeric Sender ID will be used for. For Default Alpha Senders that work across countries, this value will be an empty string */
            iso_country_code?: string | null;
            /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource is associated with. */
            service_sid?: string | null;
            /** @description The unique string that we created to identify the AlphaSender resource. */
            sid?: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the AlphaSender resource.
             */
            url?: string | null;
        };
        "messaging.v1.service.generic_sender": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the number or channel sender resource. */
            account_sid?: string | null;
            /** @description The 2-character [ISO Country Code](https://www.iso.org/iso-3166-country-codes.html) of the number or channel sender. */
            country_code?: string | null;
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
            /** @description The unique string that identifies the number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format or the channel sender e.g whatsapp:+123456XXXX. */
            sender?: string | null;
            /** @description A string value that identifies the number or channel sender type e.g AlphaSenderId, LongCode, ShortCode, Whatsapp, RCS. */
            sender_type?: string | null;
            /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource is associated with. */
            service_sid?: string | null;
            /** @description The SID to identify the number or channel sender resource. */
            sid?: string | null;
        };
        "messaging.v1.service.phone_number": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PhoneNumber resource. */
            account_sid?: string | null;
            /** @description An array of values that describe whether the number can receive calls or messages. Can be: `Voice`, `SMS`, and `MMS`. */
            capabilities?: string[] | null;
            /** @description The 2-character [ISO Country Code](https://www.iso.org/iso-3166-country-codes.html) of the number. */
            country_code?: string | null;
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
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource is associated with. */
            service_sid?: string | null;
            /** @description The unique string that we created to identify the PhoneNumber resource. */
            sid?: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the PhoneNumber resource.
             */
            url?: string | null;
        };
        "messaging.v1.service.service_for_number": {
            /** @description The string that you assigned to describe the messaging service resource. */
            friendly_name?: string | null;
            /** @description The SID to identify the number resource. */
            number_sid?: string | null;
            /** @description The SID of the messaging service that the phone number is in. */
            sid?: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the Service resource.
             */
            url?: string | null;
        };
        "messaging.v1.service.short_code": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource. */
            account_sid?: string | null;
            /** @description An array of values that describe whether the number can receive calls or messages. Can be: `SMS` and `MMS`. */
            capabilities?: string[] | null;
            /** @description The 2-character [ISO Country Code](https://www.iso.org/iso-3166-country-codes.html) of the number. */
            country_code?: string | null;
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
            /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource is associated with. */
            service_sid?: string | null;
            /** @description The [E.164](https://www.twilio.com/docs/glossary/what-e164) format of the short code. */
            short_code?: string | null;
            /** @description The unique string that we created to identify the ShortCode resource. */
            sid?: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the ShortCode resource.
             */
            url?: string | null;
        };
        "messaging.v1.service.us_app_to_person": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the Campaign belongs to. */
            account_sid?: string | null;
            /** @description A boolean that specifies whether campaign is age gated or not. */
            age_gated?: boolean | null;
            /** @description The unique string to identify the A2P brand. */
            brand_registration_sid?: string | null;
            /** @description The Campaign Registry (TCR) Campaign ID. */
            campaign_id?: string | null;
            /** @description Campaign status. Examples: IN_PROGRESS, VERIFIED, FAILED. */
            campaign_status?: string | null;
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
            /** @description A short description of what this SMS campaign does. Min length: 40 characters. Max length: 4096 characters. */
            description?: string | null;
            /** @description A boolean that specifies whether campaign allows direct lending or not. */
            direct_lending?: boolean | null;
            /** @description Details indicating why a campaign registration failed. These errors can indicate one or more fields that were incorrect or did not meet review requirements. */
            errors?: unknown[] | null;
            /** @description Indicate that this SMS campaign will send messages that contain links. */
            has_embedded_links?: boolean | null;
            /** @description Indicates that this SMS campaign will send messages that contain phone numbers. */
            has_embedded_phone?: boolean | null;
            /** @description End users should be able to text in a keyword to receive help. Those keywords must be provided as part of the campaign registration request. This field is required if managing help keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). Values must be alphanumeric. 255 character maximum. */
            help_keywords?: string[] | null;
            /** @description When customers receive the help keywords from their end users, Twilio customers are expected to send back an auto-generated response; this may include the brand name and additional support contact information. This field is required if managing help keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). 20 character minimum. 320 character maximum. */
            help_message?: string | null;
            /** @description Indicates whether the campaign was registered externally or not. */
            is_externally_registered?: boolean | null;
            /** @description Details around how a consumer opts-in to their campaign, therefore giving consent to receive their messages. If multiple opt-in methods can be used for the same campaign, they must all be listed. 40 character minimum. 2048 character maximum. */
            message_flow?: string | null;
            /** @description An array of sample message strings, min two and max five. Min length for each sample: 20 chars. Max length for each sample: 1024 chars. */
            message_samples?: string[] | null;
            /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) that the resource is associated with. */
            messaging_service_sid?: string | null;
            /** @description A boolean that specifies whether campaign is a mock or not. Mock campaigns will be automatically created if using a mock brand. Mock campaigns should only be used for testing purposes. */
            mock?: boolean | null;
            /** @description If end users can text in a keyword to start receiving messages from this campaign, those keywords must be provided. This field is required if end users can text in a keyword to start receiving messages from this campaign. Values must be alphanumeric. 255 character maximum. */
            opt_in_keywords?: string[] | null;
            /** @description If end users can text in a keyword to start receiving messages from this campaign, the auto-reply messages sent to the end users must be provided. The opt-in response should include the Brand name, confirmation of opt-in enrollment to a recurring message campaign, how to get help, and clear description of how to opt-out. This field is required if end users can text in a keyword to start receiving messages from this campaign. 20 character minimum. 320 character maximum. */
            opt_in_message?: string | null;
            /** @description End users should be able to text in a keyword to stop receiving messages from this campaign. Those keywords must be provided. This field is required if managing opt out keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). Values must be alphanumeric. 255 character maximum. */
            opt_out_keywords?: string[] | null;
            /** @description Upon receiving the opt-out keywords from the end users, Twilio customers are expected to send back an auto-generated response, which must provide acknowledgment of the opt-out request and confirmation that no further messages will be sent. It is also recommended that these opt-out messages include the brand name. This field is required if managing opt out keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). 20 character minimum. 320 character maximum. */
            opt_out_message?: string | null;
            /** @description Rate limit and/or classification set by each carrier, Ex. AT&T or T-Mobile. */
            rate_limits?: unknown;
            /** @description The unique string that identifies a US A2P Compliance resource `QE2c6890da8086d771620e9b13fadeba0b`. */
            sid?: string | null;
            /** @description A boolean that specifies whether campaign has Subscriber Optin or not. */
            subscriber_opt_in?: boolean | null;
            /**
             * Format: uri
             * @description The absolute URL of the US App to Person resource.
             */
            url?: string | null;
            /** @description A2P Campaign Use Case. Examples: [ 2FA, EMERGENCY, MARKETING, SOLE_PROPRIETOR...]. SOLE_PROPRIETOR campaign use cases can only be created by SOLE_PROPRIETOR Brands, and there can only be one SOLE_PROPRIETOR campaign created per SOLE_PROPRIETOR Brand. */
            us_app_to_person_usecase?: string | null;
        };
        "messaging.v1.service.us_app_to_person_response": components["schemas"]["messaging.v1.service.us_app_to_person"] | components["schemas"]["messaging.v1.service.us_app_to_person_v2"];
        "messaging.v1.service.us_app_to_person_usecase": {
            /** @description Human readable name, code, description and post_approval_required (indicates whether or not post approval is required for this Use Case) of A2P Campaign Use Cases. */
            us_app_to_person_usecases?: unknown[] | null;
        };
        "messaging.v1.service.us_app_to_person_v2": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the Campaign belongs to. */
            account_sid?: string | null;
            /** @description A boolean that specifies whether campaign is age gated or not. */
            age_gated?: boolean | null;
            /** @description The unique string to identify the A2P brand. */
            brand_registration_sid?: string | null;
            /** @description The Campaign Registry (TCR) Campaign ID. */
            campaign_id?: string | null;
            /** @description Campaign status. Examples: IN_PROGRESS, VERIFIED, FAILED. */
            campaign_status?: string | null;
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
            /** @description A short description of what this SMS campaign does. Min length: 40 characters. Max length: 4096 characters. */
            description?: string | null;
            /** @description A boolean that specifies whether campaign allows direct lending or not. */
            direct_lending?: boolean | null;
            /** @description Details indicating why a campaign registration failed. These errors can indicate one or more fields that were incorrect or did not meet review requirements. */
            errors?: unknown[] | null;
            /** @description Indicate that this SMS campaign will send messages that contain links. */
            has_embedded_links?: boolean | null;
            /** @description Indicates that this SMS campaign will send messages that contain phone numbers. */
            has_embedded_phone?: boolean | null;
            /** @description End users should be able to text in a keyword to receive help. Those keywords must be provided as part of the campaign registration request. This field is required if managing help keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). Values must be alphanumeric. 255 character maximum. */
            help_keywords?: string[] | null;
            /** @description When customers receive the help keywords from their end users, Twilio customers are expected to send back an auto-generated response; this may include the brand name and additional support contact information. This field is required if managing help keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). 20 character minimum. 320 character maximum. */
            help_message?: string | null;
            /** @description Indicates whether the campaign was registered externally or not. */
            is_externally_registered?: boolean | null;
            /** @description Details around how a consumer opts-in to their campaign, therefore giving consent to receive their messages. If multiple opt-in methods can be used for the same campaign, they must all be listed. 40 character minimum. 2048 character maximum. */
            message_flow?: string | null;
            /** @description An array of sample message strings, min two and max five. Min length for each sample: 20 chars. Max length for each sample: 1024 chars. */
            message_samples?: string[] | null;
            /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) that the resource is associated with. */
            messaging_service_sid?: string | null;
            /** @description A boolean that specifies whether campaign is a mock or not. Mock campaigns will be automatically created if using a mock brand. Mock campaigns should only be used for testing purposes. */
            mock?: boolean | null;
            /** @description If end users can text in a keyword to start receiving messages from this campaign, those keywords must be provided. This field is required if end users can text in a keyword to start receiving messages from this campaign. Values must be alphanumeric. 255 character maximum. */
            opt_in_keywords?: string[] | null;
            /** @description If end users can text in a keyword to start receiving messages from this campaign, the auto-reply messages sent to the end users must be provided. The opt-in response should include the Brand name, confirmation of opt-in enrollment to a recurring message campaign, how to get help, and clear description of how to opt-out. This field is required if end users can text in a keyword to start receiving messages from this campaign. 20 character minimum. 320 character maximum. */
            opt_in_message?: string | null;
            /** @description End users should be able to text in a keyword to stop receiving messages from this campaign. Those keywords must be provided. This field is required if managing opt out keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). Values must be alphanumeric. 255 character maximum. */
            opt_out_keywords?: string[] | null;
            /** @description Upon receiving the opt-out keywords from the end users, Twilio customers are expected to send back an auto-generated response, which must provide acknowledgment of the opt-out request and confirmation that no further messages will be sent. It is also recommended that these opt-out messages include the brand name. This field is required if managing opt out keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). 20 character minimum. 320 character maximum. */
            opt_out_message?: string | null;
            /**
             * Format: uri
             * @description The URL of the privacy policy for the campaign.
             */
            privacy_policy_url: string | null;
            /** @description Rate limit and/or classification set by each carrier, Ex. AT&T or T-Mobile. */
            rate_limits?: unknown;
            /** @description The unique string that identifies a US A2P Compliance resource `QE2c6890da8086d771620e9b13fadeba0b`. */
            sid?: string | null;
            /** @description A boolean that specifies whether campaign has Subscriber Optin or not. */
            subscriber_opt_in?: boolean | null;
            /**
             * Format: uri
             * @description The URL of the terms and conditions for the campaign.
             */
            terms_and_conditions_url: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the US App to Person resource.
             */
            url?: string | null;
            /** @description A2P Campaign Use Case. Examples: [ 2FA, EMERGENCY, MARKETING, SOLE_PROPRIETOR...]. SOLE_PROPRIETOR campaign use cases can only be created by SOLE_PROPRIETOR Brands, and there can only be one SOLE_PROPRIETOR campaign created per SOLE_PROPRIETOR Brand. */
            us_app_to_person_usecase?: string | null;
        };
        "messaging.v1.tollfree_verification": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Tollfree Verification resource. */
            account_sid?: string | null;
            /** @description Additional information to be provided for verification. */
            additional_information?: string | null;
            /** @description Indicates if the content is age gated. */
            age_gated_content?: boolean | null;
            /** @description The city of the business or organization using the Tollfree number. */
            business_city?: string | null;
            /** @description The email address of the contact for the business or organization using the Tollfree number. */
            business_contact_email?: string | null;
            /** @description The first name of the contact for the business or organization using the Tollfree number. */
            business_contact_first_name?: string | null;
            /** @description The last name of the contact for the business or organization using the Tollfree number. */
            business_contact_last_name?: string | null;
            /**
             * Format: phone-number
             * @description The E.164 formatted phone number of the contact for the business or organization using the Tollfree number.
             */
            business_contact_phone?: string | null;
            /** @description The country of the business or organization using the Tollfree number. */
            business_country?: string | null;
            /** @description The name of the business or organization using the Tollfree number. */
            business_name?: string | null;
            /** @description The postal code of the business or organization using the Tollfree number. */
            business_postal_code?: string | null;
            business_registration_authority?: components["schemas"]["tollfree_verification_enum_business_registration_authority"];
            /** @description Country business is registered in */
            business_registration_country?: string | null;
            /** @description A legally recognized business registration number */
            business_registration_number?: string | null;
            /** @description The E.164 formatted number associated with the business. */
            business_registration_phone_number?: string | null;
            /** @description The state/province/region of the business or organization using the Tollfree number. */
            business_state_province_region?: string | null;
            /** @description The address of the business or organization using the Tollfree number. */
            business_street_address?: string | null;
            /** @description The address of the business or organization using the Tollfree number. */
            business_street_address2?: string | null;
            business_type?: components["schemas"]["tollfree_verification_enum_business_type"];
            /** @description The website of the business or organization using the Tollfree number. */
            business_website?: string | null;
            /** @description Customer's Profile Bundle BundleSid. */
            customer_profile_sid?: string | null;
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
            /** @description Trade name, sub entity, or downstream business name of business being submitted for verification */
            doing_business_as?: string | null;
            /** @description If a rejected verification is allowed to be edited/resubmitted. Some rejection reasons allow editing and some do not. */
            edit_allowed?: boolean | null;
            /**
             * Format: date-time
             * @description The date and time when the ability to edit a rejected verification expires.
             */
            edit_expiration?: string | null;
            /** @description The error code given when a Tollfree Verification has been rejected. */
            error_code?: number | null;
            /** @description An optional external reference ID supplied by customer and echoed back on status retrieval. */
            external_reference_id?: string | null;
            /** @description A sample help message provided to users. */
            help_message_sample?: string | null;
            /** @description Estimate monthly volume of messages from the Tollfree Number. */
            message_volume?: string | null;
            /** @description The email address to receive the notification about the verification result. . */
            notification_email?: string | null;
            /** @description The confirmation message sent to users when they opt in to receive messages. */
            opt_in_confirmation_message?: string | null;
            /** @description Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL. */
            opt_in_image_urls?: string[] | null;
            /** @description List of keywords that users can send to opt in or out of messages. */
            opt_in_keywords?: string[] | null;
            opt_in_type?: components["schemas"]["tollfree_verification_enum_opt_in_type"];
            /**
             * Format: uri
             * @description The URL to the privacy policy for the business or organization.
             */
            privacy_policy_url?: string | null;
            /** @description An example of message content, i.e. a sample message. */
            production_message_sample?: string | null;
            /** @description The SID of the Regulated Item. */
            regulated_item_sid?: string | null;
            /** @description The rejection reason given when a Tollfree Verification has been rejected. */
            rejection_reason?: string | null;
            /** @description A list of rejection reasons and codes describing why a Tollfree Verification has been rejected. */
            rejection_reasons?: unknown[] | null;
            /** @description The URLs of the documents associated with the Tollfree Verification resource. */
            resource_links?: unknown;
            /** @description The unique string to identify Tollfree Verification. */
            sid?: string | null;
            status?: components["schemas"]["tollfree_verification_enum_status"];
            /**
             * Format: uri
             * @description The URL of the terms and conditions for the business or organization.
             */
            terms_and_conditions_url?: string | null;
            /**
             * Format: phone-number
             * @description The E.164 formatted toll-free phone number associated with the verification.
             */
            tollfree_phone_number?: string | null;
            /** @description The SID of the Phone Number associated with the Tollfree Verification. */
            tollfree_phone_number_sid?: string | null;
            /** @description Tollfree TrustProduct Bundle BundleSid. */
            trust_product_sid?: string | null;
            /**
             * Format: uri
             * @description The absolute URL of the Tollfree Verification resource.
             */
            url?: string | null;
            use_case_categories?: components["schemas"]["tollfree_verification_enum_use_case_categories"];
            /** @description Use this to further explain how messaging is used by the business or organization. */
            use_case_summary?: string | null;
            vetting_id?: string | null;
            /** Format: date-time */
            vetting_id_expiration?: string | null;
            vetting_provider?: components["schemas"]["tollfree_verification_enum_vetting_provider"];
        };
        "messaging.v1.usecase": {
            /** @description Human readable use case details (usecase, description and purpose) of Messaging Service Use Cases. */
            usecases?: unknown[] | null;
        };
        /**
         * @description Reserved.
         * @enum {string}
         */
        service_enum_scan_message_content: "inherit" | "enable" | "disable";
        /**
         * @description The organizational authority for business registrations. Required for all business types except SOLE_PROPRIETOR.
         * @enum {string|null}
         */
        tollfree_verification_enum_business_registration_authority: "EIN" | "CBN" | "CRN" | "PROVINCIAL_NUMBER" | "VAT" | "ACN" | "ABN" | "BRN" | "SIREN" | "SIRET" | "NZBN" | "USt-IdNr" | "CIF" | "NIF" | "CNPJ" | "UID" | "NEQ" | "OTHER" | null;
        /**
         * @description The type of business, valid values are PRIVATE_PROFIT, PUBLIC_PROFIT, NON_PROFIT, SOLE_PROPRIETOR, GOVERNMENT. Required field.
         * @enum {string|null}
         */
        tollfree_verification_enum_business_type: "PRIVATE_PROFIT" | "PUBLIC_PROFIT" | "SOLE_PROPRIETOR" | "NON_PROFIT" | "GOVERNMENT" | null;
        /**
         * @description Describe how a user opts-in to text messages.
         * @enum {string}
         */
        tollfree_verification_enum_opt_in_type: "VERBAL" | "WEB_FORM" | "PAPER_FORM" | "VIA_TEXT" | "MOBILE_QR_CODE" | "IMPORT" | "IMPORT_PLEASE_REPLACE";
        /**
         * @description The compliance status of the Tollfree Verification record.
         * @enum {string}
         */
        tollfree_verification_enum_status: "PENDING_REVIEW" | "IN_REVIEW" | "TWILIO_APPROVED" | "TWILIO_REJECTED";
        /** @description The category of the use case for the Tollfree Number. List as many as are applicable. */
        tollfree_verification_enum_use_case_categories: ("TWO_FACTOR_AUTHENTICATION" | "ACCOUNT_NOTIFICATIONS" | "CUSTOMER_CARE" | "CHARITY_NONPROFIT" | "DELIVERY_NOTIFICATIONS" | "FRAUD_ALERT_MESSAGING" | "EVENTS" | "HIGHER_EDUCATION" | "K12" | "MARKETING" | "POLLING_AND_VOTING_NON_POLITICAL" | "POLITICAL_ELECTION_CAMPAIGNS" | "PUBLIC_SERVICE_ANNOUNCEMENT" | "SECURITY_ALERT")[] | null;
        /**
         * @description The third-party political vetting provider.
         * @enum {string|null}
         */
        tollfree_verification_enum_vetting_provider: "CAMPAIGN_VERIFY" | null;
        /**
         * @description The status of the sender. Configuring: We are in the process of registering the sender. If your sender stays in this state for a long period of time it is possible that there is an issue with parameters you provided; PendingVerification: We have successfully registered the sender with WhatsApp and you should receive a code from their services; Configured: The sender has been successfully verified with WhatsApp and is all set to start sending messages; ConfigurationError - If configuration fails due to below possibilities: parameters provided were incorrect, Twilio account suspended or deleted, whatsapp api failed, Twilio internal error. VerificationError - If verification api fails, please check error_message for more details
         * @enum {string}
         */
        whatsapp_sender_enum_status: "Configuring" | "PendingVerification" | "Configured" | "ConfigurationError" | "VerificationError";
        /**
         * @description The Category of this WhatsApp Template. One of `ACCOUNT_UPDATE`, `ALERT_UPDATE`, `APPOINTMENT_UPDATE`, `AUTO_REPLY`, `ISSUE_RESOLUTION`, `PAYMENT_UPDATE`, `PERSONAL_FINANCE_UPDATE`, `RESERVATION_UPDATE`, `SHIPPING_UPDATE`, `TICKET_UPDATE`, `TRANSPORTATION_UPDATE`, `MARKETING`, `AUTHENTICATION`, `UTILITY`, `OTP` or `TRANSACTIONAL`.
         * @enum {string}
         */
        whatsapp_template_enum_category: "ACCOUNT_UPDATE" | "ALERT_UPDATE" | "AUTO_REPLY" | "APPOINTMENT_UPDATE" | "ISSUE_RESOLUTION" | "PAYMENT_UPDATE" | "PERSONAL_FINANCE_UPDATE" | "RESERVATION_UPDATE" | "SHIPPING_UPDATE" | "TICKET_UPDATE" | "TRANSPORTATION_UPDATE" | "MARKETING" | "OTP" | "TRANSACTIONAL" | "AUTHENTICATION" | "UTILITY";
    };
    responses: never;
    parameters: {
        /** @description The version of the Messaging API to use for this request */
        XTwilioApiVersion: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    ListBrandRegistrations: {
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
                        data?: components["schemas"]["messaging.v1.brand_registrations"][];
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
    CreateBrandRegistrations: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A2P Messaging Profile Bundle Sid. */
                    A2PProfileBundleSid: string;
                    /** @description Type of brand being created. One of: "STANDARD", "SOLE_PROPRIETOR". SOLE_PROPRIETOR is for low volume, SOLE_PROPRIETOR use cases. STANDARD is for all other use cases. */
                    BrandType?: string;
                    /** @description Customer Profile Bundle Sid. */
                    CustomerProfileBundleSid: string;
                    /** @description A boolean that specifies whether brand should be a mock or not. If true, brand will be registered as a mock brand. Defaults to false if no value is provided. */
                    Mock?: boolean;
                    /** @description A flag to disable automatic secondary vetting for brands which it would otherwise be done. */
                    SkipAutomaticSecVet?: boolean;
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
                    "application/json": components["schemas"]["messaging.v1.brand_registrations"];
                };
            };
        };
    };
    CreateBrandRegistrationOtp: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Brand Registration Sid of Sole Proprietor Brand. */
                BrandRegistrationSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
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
                    "application/json": components["schemas"]["messaging.v1.brand_registrations.brand_registration_otp"];
                };
            };
        };
    };
    ListBrandVetting: {
        parameters: {
            query?: {
                /** @description The third-party provider of the vettings to read */
                VettingProvider?: components["schemas"]["brand_vetting_enum_vetting_provider"];
            };
            header?: never;
            path: {
                /** @description The SID of the Brand Registration resource of the vettings to read . */
                BrandSid: string;
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
                        data?: components["schemas"]["messaging.v1.brand_registrations.brand_vetting"][];
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
    CreateBrandVetting: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the Brand Registration resource of the vettings to create . */
                BrandSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The unique ID of the vetting */
                    VettingId?: string;
                    VettingProvider: components["schemas"]["brand_vetting_enum_vetting_provider"];
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
                    "application/json": components["schemas"]["messaging.v1.brand_registrations.brand_vetting"];
                };
            };
            /** @description Accepted */
            202: {
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
                    "application/json": components["schemas"]["messaging.v1.brand_registrations.brand_vetting"];
                };
            };
        };
    };
    FetchBrandVetting: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the Brand Registration resource of the vettings to read . */
                BrandSid: string;
                /** @description The Twilio SID of the third-party vetting record. */
                BrandVettingSid: string;
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
                    "application/json": components["schemas"]["messaging.v1.brand_registrations.brand_vetting"];
                };
            };
        };
    };
    FetchBrandRegistrations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the Brand Registration resource to fetch. */
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
                    "application/json": components["schemas"]["messaging.v1.brand_registrations"];
                };
            };
        };
    };
    UpdateBrandRegistrations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the Brand Registration resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Accepted */
            202: {
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
                    "application/json": components["schemas"]["messaging.v1.brand_registrations"];
                };
            };
        };
    };
    FetchDeactivation: {
        parameters: {
            query?: {
                /** @description The request will return a list of all United States Phone Numbers that were deactivated on the day specified by this parameter. This date should be specified in YYYY-MM-DD format. */
                Date?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Temporary Redirect */
            307: {
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
                    "application/json": components["schemas"]["messaging.v1.deactivation"];
                };
            };
        };
    };
    FetchDomainCertV4: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique string used to identify the domain that this certificate should be associated with. */
                DomainSid: string;
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
                    "application/json": components["schemas"]["messaging.v1.domain_cert_v4"];
                };
            };
        };
    };
    UpdateDomainCertV4: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique string used to identify the domain that this certificate should be associated with. */
                DomainSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Contains the full TLS certificate and private for this domain in PEM format: https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail. Twilio uses this information to process HTTPS traffic sent to your domain. */
                    TlsCert: string;
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
                    "application/json": components["schemas"]["messaging.v1.domain_cert_v4"];
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
                    "application/json": components["schemas"]["messaging.v1.domain_cert_v4"];
                };
            };
        };
    };
    DeleteDomainCertV4: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique string used to identify the domain that this certificate should be associated with. */
                DomainSid: string;
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
    FetchDomainConfig: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique string used to identify the domain that this config should be associated with. */
                DomainSid: string;
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
                    "application/json": components["schemas"]["messaging.v1.domain_config"];
                };
            };
        };
    };
    UpdateDomainConfig: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique string used to identify the domain that this config should be associated with. */
                DomainSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: uri
                     * @description URL to receive click events to your webhook whenever the recipients click on the shortened links
                     */
                    CallbackUrl?: string;
                    /** @description Boolean field to set customer delivery preference when there is a failure in linkShortening service */
                    ContinueOnFailure?: boolean;
                    /** @description Customer's choice to send links with/without "https://" attached to shortened url. If true, messages will not be sent with https:// at the beginning of the url. If false, messages will be sent with https:// at the beginning of the url. False is the default behavior if it is not specified. */
                    DisableHttps?: boolean;
                    /**
                     * Format: uri
                     * @description Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping.
                     */
                    FallbackUrl?: string;
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
                    "application/json": components["schemas"]["messaging.v1.domain_config"];
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
                    "application/json": components["schemas"]["messaging.v1.domain_config"];
                };
            };
        };
    };
    CreateLinkshorteningMessagingService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The domain SID to associate with a messaging service. With URL shortening enabled, links in messages sent with the associated messaging service will be shortened to the provided domain */
                DomainSid: string;
                /** @description A messaging service SID to associate with a domain. With URL shortening enabled, links in messages sent with the provided messaging service will be shortened to the associated domain */
                MessagingServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
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
                    "application/json": components["schemas"]["messaging.v1.linkshortening_messaging_service"];
                };
            };
        };
    };
    DeleteLinkshorteningMessagingService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The domain SID to dissociate from a messaging service. With URL shortening enabled, links in messages sent with the associated messaging service will be shortened to the provided domain */
                DomainSid: string;
                /** @description A messaging service SID to dissociate from a domain. With URL shortening enabled, links in messages sent with the provided messaging service will be shortened to the associated domain */
                MessagingServiceSid: string;
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
    UpdateRequestManagedCert: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique string used to identify the domain that this certificate should be associated with. */
                DomainSid: string;
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
                    "application/json": components["schemas"]["messaging.v1.request_managed_cert"];
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
                    "application/json": components["schemas"]["messaging.v1.request_managed_cert"];
                };
            };
        };
    };
    FetchDomainDnsValidation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique string used to identify the domain. */
                DomainSid: string;
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
                    "application/json": components["schemas"]["messaging.v1.domain_dns_validation"];
                };
            };
        };
    };
    FetchDomainConfigMessagingService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique string used to identify the Messaging service that this domain should be associated with. */
                MessagingServiceSid: string;
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
                    "application/json": components["schemas"]["messaging.v1.domain_config_messaging_service"];
                };
            };
        };
    };
    FetchLinkshorteningMessagingServiceDomainAssociation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique string used to identify the Messaging service that this domain should be associated with. */
                MessagingServiceSid: string;
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
                    "application/json": components["schemas"]["messaging.v1.linkshortening_messaging_service_domain_association"];
                };
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
                        services?: components["schemas"]["messaging.v1.service"][];
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
                    /** @description Whether to enable [Area Code Geomatch](https://www.twilio.com/docs/messaging/services#area-code-geomatch) on the Service Instance. */
                    AreaCodeGeomatch?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `fallback_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    FallbackMethod?: "GET" | "POST";
                    /** @description [OBSOLETE] Former feature used to fallback to long code sender after certain short code message failures. */
                    FallbackToLongCode?: boolean;
                    /**
                     * Format: uri
                     * @description The URL that we call using `fallback_method` if an error occurs while retrieving or executing the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `fallback_url` defined for the Messaging Service.
                     */
                    FallbackUrl?: string;
                    /** @description A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
                    FriendlyName: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `inbound_request_url`. Can be `GET` or `POST` and the default is `POST`.
                     * @enum {string}
                     */
                    InboundMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we call using `inbound_method` when a message is received by any phone number or short code in the Service. When this property is `null`, receiving inbound messages is disabled. All messages sent to the Twilio phone number or short code will not be logged and received on the Account. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `inbound_request_url` defined for the Messaging Service.
                     */
                    InboundRequestUrl?: string;
                    /** @description Whether to enable the [MMS Converter](https://www.twilio.com/docs/messaging/services#mms-converter) for messages sent through the Service instance. */
                    MmsConverter?: boolean;
                    ScanMessageContent?: components["schemas"]["service_enum_scan_message_content"];
                    /** @description Whether to enable [Smart Encoding](https://www.twilio.com/docs/messaging/services#smart-encoding) for messages sent through the Service instance. */
                    SmartEncoding?: boolean;
                    /**
                     * Format: uri
                     * @description The URL we should call to [pass status updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about message delivery.
                     */
                    StatusCallback?: string;
                    /** @description Whether to enable [Sticky Sender](https://www.twilio.com/docs/messaging/services#sticky-sender) on the Service instance. */
                    StickySender?: boolean;
                    /** @description Reserved. */
                    SynchronousValidation?: boolean;
                    /** @description A string that describes the scenario in which the Messaging Service will be used. Possible values are `notifications`, `marketing`, `verification`, `discussion`, `poll`, `undeclared`. */
                    Usecase?: string;
                    /** @description A boolean value that indicates either the webhook url configured on the phone number will be used or `inbound_request_url`/`fallback_url` url will be called when a message is received from the phone number. If this field is enabled then the webhook url defined on the phone number will override the `inbound_request_url`/`fallback_url` defined for the Messaging Service. */
                    UseInboundWebhookOnNumber?: boolean;
                    /** @description How long, in seconds, messages sent from the Service are valid. Can be an integer from `1` to `36,000`. Default value is `36,000`. */
                    ValidityPeriod?: number;
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
                    "application/json": components["schemas"]["messaging.v1.service"];
                };
            };
        };
    };
    ListChannelSender: {
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
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the resources from. */
                MessagingServiceSid: string;
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
                        senders?: components["schemas"]["messaging.v1.service.channel_sender"][];
                    };
                };
            };
        };
    };
    CreateChannelSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the resource under. */
                MessagingServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the Channel Sender being added to the Service. */
                    Sid: string;
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
                    "application/json": components["schemas"]["messaging.v1.service.channel_sender"];
                };
            };
        };
    };
    FetchChannelSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the resource from. */
                MessagingServiceSid: string;
                /** @description The SID of the ChannelSender resource to fetch. */
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
                    "application/json": components["schemas"]["messaging.v1.service.channel_sender"];
                };
            };
        };
    };
    DeleteChannelSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the resource from. */
                MessagingServiceSid: string;
                /** @description The SID of the Channel Sender resource to delete. */
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
    ListUsAppToPerson: {
        parameters: {
            query?: {
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: {
                /** @description The version of the Messaging API to use for this request */
                "X-Twilio-Api-Version"?: components["parameters"]["XTwilioApiVersion"];
            };
            path: {
                /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) to fetch the resource from. */
                MessagingServiceSid: string;
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
                        compliance?: components["schemas"]["messaging.v1.service.us_app_to_person_response"][];
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
    CreateUsAppToPerson: {
        parameters: {
            query?: never;
            header?: {
                /** @description The version of the Messaging API to use for this request */
                "X-Twilio-Api-Version"?: components["parameters"]["XTwilioApiVersion"];
            };
            path: {
                /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) to create the resources from. */
                MessagingServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A boolean that specifies whether campaign is age gated or not. */
                    AgeGated?: boolean;
                    /** @description A2P Brand Registration SID */
                    BrandRegistrationSid: string;
                    /** @description A short description of what this SMS campaign does. Min length: 40 characters. Max length: 4096 characters. */
                    Description: string;
                    /** @description A boolean that specifies whether campaign allows direct lending or not. */
                    DirectLending?: boolean;
                    /** @description Indicates that this SMS campaign will send messages that contain links. */
                    HasEmbeddedLinks: boolean;
                    /** @description Indicates that this SMS campaign will send messages that contain phone numbers. */
                    HasEmbeddedPhone: boolean;
                    /** @description End users should be able to text in a keyword to receive help. Those keywords must be provided as part of the campaign registration request. This field is required if managing help keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). Values must be alphanumeric. 255 character maximum. */
                    HelpKeywords?: string[];
                    /** @description When customers receive the help keywords from their end users, Twilio customers are expected to send back an auto-generated response; this may include the brand name and additional support contact information. This field is required if managing help keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). 20 character minimum. 320 character maximum. */
                    HelpMessage?: string;
                    /** @description Required for all Campaigns. Details around how a consumer opts-in to their campaign, therefore giving consent to receive their messages. If multiple opt-in methods can be used for the same campaign, they must all be listed. 40 character minimum. 2048 character maximum. */
                    MessageFlow: string;
                    /** @description An array of sample message strings, min two and max five. Min length for each sample: 20 chars. Max length for each sample: 1024 chars. */
                    MessageSamples: string[];
                    /** @description If end users can text in a keyword to start receiving messages from this campaign, those keywords must be provided. This field is required if end users can text in a keyword to start receiving messages from this campaign. Values must be alphanumeric. 255 character maximum. */
                    OptInKeywords?: string[];
                    /** @description If end users can text in a keyword to start receiving messages from this campaign, the auto-reply messages sent to the end users must be provided. The opt-in response should include the Brand name, confirmation of opt-in enrollment to a recurring message campaign, how to get help, and clear description of how to opt-out. This field is required if end users can text in a keyword to start receiving messages from this campaign. 20 character minimum. 320 character maximum. */
                    OptInMessage?: string;
                    /** @description End users should be able to text in a keyword to stop receiving messages from this campaign. Those keywords must be provided. This field is required if managing opt out keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). Values must be alphanumeric. 255 character maximum. */
                    OptOutKeywords?: string[];
                    /** @description Upon receiving the opt-out keywords from the end users, Twilio customers are expected to send back an auto-generated response, which must provide acknowledgment of the opt-out request and confirmation that no further messages will be sent. It is also recommended that these opt-out messages include the brand name. This field is required if managing opt out keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). 20 character minimum. 320 character maximum. */
                    OptOutMessage?: string;
                    /**
                     * Format: uri
                     * @description The URL of the privacy policy for the campaign.
                     */
                    PrivacyPolicyUrl?: string;
                    /** @description A boolean that specifies whether campaign has Subscriber Optin or not. */
                    SubscriberOptIn?: boolean;
                    /**
                     * Format: uri
                     * @description The URL of the terms and conditions for the campaign.
                     */
                    TermsAndConditionsUrl?: string;
                    /** @description A2P Campaign Use Case. Examples: [ 2FA, EMERGENCY, MARKETING..] */
                    UsAppToPersonUsecase: string;
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
                    "application/json": components["schemas"]["messaging.v1.service.us_app_to_person_response"];
                };
            };
        };
    };
    FetchUsAppToPerson: {
        parameters: {
            query?: never;
            header?: {
                /** @description The version of the Messaging API to use for this request */
                "X-Twilio-Api-Version"?: components["parameters"]["XTwilioApiVersion"];
            };
            path: {
                /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) to fetch the resource from. */
                MessagingServiceSid: string;
                /** @description The SID of the US A2P Compliance resource to fetch `QE2c6890da8086d771620e9b13fadeba0b`. */
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
                    "application/json": components["schemas"]["messaging.v1.service.us_app_to_person_response"];
                };
            };
        };
    };
    UpdateUsAppToPerson: {
        parameters: {
            query?: never;
            header?: {
                /** @description The version of the Messaging API to use for this request */
                "X-Twilio-Api-Version"?: components["parameters"]["XTwilioApiVersion"];
            };
            path: {
                /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) to update the resource from. */
                MessagingServiceSid: string;
                /** @description The SID of the US A2P Compliance resource to update `QE2c6890da8086d771620e9b13fadeba0b`. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A boolean that specifies whether campaign requires age gate for federally legal content. */
                    AgeGated: boolean;
                    /** @description A short description of what this SMS campaign does. Min length: 40 characters. Max length: 4096 characters. */
                    Description: string;
                    /** @description A boolean that specifies whether campaign allows direct lending or not. */
                    DirectLending: boolean;
                    /** @description Indicates that this SMS campaign will send messages that contain links. */
                    HasEmbeddedLinks: boolean;
                    /** @description Indicates that this SMS campaign will send messages that contain phone numbers. */
                    HasEmbeddedPhone: boolean;
                    /** @description Required for all Campaigns. Details around how a consumer opts-in to their campaign, therefore giving consent to receive their messages. If multiple opt-in methods can be used for the same campaign, they must all be listed. 40 character minimum. 2048 character maximum. */
                    MessageFlow: string;
                    /** @description An array of sample message strings, min two and max five. Min length for each sample: 20 chars. Max length for each sample: 1024 chars. */
                    MessageSamples: string[];
                    /**
                     * Format: uri
                     * @description The URL of the privacy policy for the campaign.
                     */
                    PrivacyPolicyUrl?: string;
                    /**
                     * Format: uri
                     * @description The URL of the terms and conditions for the campaign.
                     */
                    TermsAndConditionsUrl?: string;
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
                    "application/json": components["schemas"]["messaging.v1.service.us_app_to_person_response"];
                };
            };
        };
    };
    DeleteUsAppToPerson: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) to delete the resource from. */
                MessagingServiceSid: string;
                /** @description The SID of the US A2P Compliance resource to delete `QE2c6890da8086d771620e9b13fadeba0b`. */
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
    FetchUsAppToPersonUsecase: {
        parameters: {
            query?: {
                /** @description The unique string to identify the A2P brand. */
                BrandRegistrationSid?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) to fetch the resource from. */
                MessagingServiceSid: string;
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
                    "application/json": components["schemas"]["messaging.v1.service.us_app_to_person_usecase"];
                };
            };
        };
    };
    ListAlphaSender: {
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
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the resources from. */
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
                        alpha_senders?: components["schemas"]["messaging.v1.service.alpha_sender"][];
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
    CreateAlphaSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the resource under. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The Alphanumeric Sender ID string. Can be up to 11 characters long. Valid characters are A-Z, a-z, 0-9, space, hyphen `-`, plus `+`, underscore `_` and ampersand `&`. This value cannot contain only numbers. */
                    AlphaSender: string;
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
                    "application/json": components["schemas"]["messaging.v1.service.alpha_sender"];
                };
            };
        };
    };
    FetchAlphaSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the resource from. */
                ServiceSid: string;
                /** @description The SID of the AlphaSender resource to fetch. */
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
                    "application/json": components["schemas"]["messaging.v1.service.alpha_sender"];
                };
            };
        };
    };
    DeleteAlphaSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the resource from. */
                ServiceSid: string;
                /** @description The SID of the AlphaSender resource to delete. */
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
    ListDestinationAlphaSender: {
        parameters: {
            query?: {
                /** @description Optional filter to return only alphanumeric sender IDs associated with the specified two-character ISO country code. */
                IsoCountryCode?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the resources from. */
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
                        alpha_senders?: components["schemas"]["messaging.v1.service.destination_alpha_sender"][];
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
    CreateDestinationAlphaSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the resource under. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The Alphanumeric Sender ID string. Can be up to 11 characters long. Valid characters are A-Z, a-z, 0-9, space, hyphen `-`, plus `+`, underscore `_` and ampersand `&`. This value cannot contain only numbers. */
                    AlphaSender: string;
                    /** @description The Optional Two Character ISO Country Code the Alphanumeric Sender ID will be used for. If the IsoCountryCode is not provided, a default Alpha Sender will be created that can be used across all countries. */
                    IsoCountryCode?: string;
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
                    "application/json": components["schemas"]["messaging.v1.service.destination_alpha_sender"];
                };
            };
        };
    };
    FetchDestinationAlphaSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the resource from. */
                ServiceSid: string;
                /** @description The SID of the AlphaSender resource to fetch. */
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
                    "application/json": components["schemas"]["messaging.v1.service.destination_alpha_sender"];
                };
            };
        };
    };
    DeleteDestinationAlphaSender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the resource from. */
                ServiceSid: string;
                /** @description The SID of the AlphaSender resource to delete. */
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
    ListPhoneNumber: {
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
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the resources from. */
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
                        phone_numbers?: components["schemas"]["messaging.v1.service.phone_number"][];
                    };
                };
            };
        };
    };
    CreatePhoneNumber: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the resource under. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the Phone Number being added to the Service. */
                    PhoneNumberSid: string;
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
                    "application/json": components["schemas"]["messaging.v1.service.phone_number"];
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
                    "application/json": components["schemas"]["messaging.v1.service.phone_number"];
                };
            };
        };
    };
    FetchPhoneNumber: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the resource from. */
                ServiceSid: string;
                /** @description The SID of the PhoneNumber resource to fetch. */
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
                    "application/json": components["schemas"]["messaging.v1.service.phone_number"];
                };
            };
        };
    };
    DeletePhoneNumber: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the resource from. */
                ServiceSid: string;
                /** @description The SID of the PhoneNumber resource to delete. */
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
    ListShortCode: {
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
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the resources from. */
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
                        short_codes?: components["schemas"]["messaging.v1.service.short_code"][];
                    };
                };
            };
        };
    };
    CreateShortCode: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the resource under. */
                ServiceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the ShortCode resource being added to the Service. */
                    ShortCodeSid: string;
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
                    "application/json": components["schemas"]["messaging.v1.service.short_code"];
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
                    "application/json": components["schemas"]["messaging.v1.service.short_code"];
                };
            };
        };
    };
    FetchShortCode: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the resource from. */
                ServiceSid: string;
                /** @description The SID of the ShortCode resource to fetch. */
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
                    "application/json": components["schemas"]["messaging.v1.service.short_code"];
                };
            };
        };
    };
    DeleteShortCode: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete the resource from. */
                ServiceSid: string;
                /** @description The SID of the ShortCode resource to delete. */
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
                /** @description The SID of the Service resource to fetch. */
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
                    "application/json": components["schemas"]["messaging.v1.service"];
                };
            };
        };
    };
    UpdateService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the Service resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Whether to enable [Area Code Geomatch](https://www.twilio.com/docs/messaging/services#area-code-geomatch) on the Service Instance. */
                    AreaCodeGeomatch?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `fallback_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    FallbackMethod?: "GET" | "POST";
                    /** @description [OBSOLETE] Former feature used to fallback to long code sender after certain short code message failures. */
                    FallbackToLongCode?: boolean;
                    /**
                     * Format: uri
                     * @description The URL that we call using `fallback_method` if an error occurs while retrieving or executing the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `fallback_url` defined for the Messaging Service.
                     */
                    FallbackUrl?: string;
                    /** @description A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
                    FriendlyName?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `inbound_request_url`. Can be `GET` or `POST` and the default is `POST`.
                     * @enum {string}
                     */
                    InboundMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we call using `inbound_method` when a message is received by any phone number or short code in the Service. When this property is `null`, receiving inbound messages is disabled. All messages sent to the Twilio phone number or short code will not be logged and received on the Account. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `inbound_request_url` defined for the Messaging Service.
                     */
                    InboundRequestUrl?: string;
                    /** @description Whether to enable the [MMS Converter](https://www.twilio.com/docs/messaging/services#mms-converter) for messages sent through the Service instance. */
                    MmsConverter?: boolean;
                    ScanMessageContent?: components["schemas"]["service_enum_scan_message_content"];
                    /** @description Whether to enable [Smart Encoding](https://www.twilio.com/docs/messaging/services#smart-encoding) for messages sent through the Service instance. */
                    SmartEncoding?: boolean;
                    /**
                     * Format: uri
                     * @description The URL we should call to [pass status updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about message delivery.
                     */
                    StatusCallback?: string;
                    /** @description Whether to enable [Sticky Sender](https://www.twilio.com/docs/messaging/services#sticky-sender) on the Service instance. */
                    StickySender?: boolean;
                    /** @description Reserved. */
                    SynchronousValidation?: boolean;
                    /** @description A string that describes the scenario in which the Messaging Service will be used. Possible values are `notifications`, `marketing`, `verification`, `discussion`, `poll`, `undeclared`. */
                    Usecase?: string;
                    /** @description A boolean value that indicates either the webhook url configured on the phone number will be used or `inbound_request_url`/`fallback_url` url will be called when a message is received from the phone number. If this field is enabled then the webhook url defined on the phone number will override the `inbound_request_url`/`fallback_url` defined for the Messaging Service. */
                    UseInboundWebhookOnNumber?: boolean;
                    /** @description How long, in seconds, messages sent from the Service are valid. Can be an integer from `1` to `36,000`. Default value is `36,000`. */
                    ValidityPeriod?: number;
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
                    "application/json": components["schemas"]["messaging.v1.service"];
                };
            };
        };
    };
    DeleteService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the Service resource to delete. */
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
    CreateExternalCampaign: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description ID of the preregistered campaign. */
                    CampaignId: string;
                    /** @description Customers should use this flag during the ERC registration process to indicate to Twilio that the campaign being registered is undergoing CNP migration. It is important for the user to first trigger the CNP migration process for said campaign in their CSP portal and have Twilio accept the sharing request, before making this api call. */
                    CnpMigration?: boolean;
                    /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) that the resource is associated with. */
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
                    "application/json": components["schemas"]["messaging.v1.external_campaign"];
                };
            };
        };
    };
    FetchUsecase: {
        parameters: {
            query?: never;
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
                    "application/json": components["schemas"]["messaging.v1.usecase"];
                };
            };
        };
    };
    ListTollfreeVerification: {
        parameters: {
            query?: {
                /** @description Customer supplied reference id for the Tollfree Verification record. */
                ExternalReferenceId?: string;
                /** @description Whether to include Tollfree Verifications from sub accounts in list response. */
                IncludeSubAccounts?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description The compliance status of the Tollfree Verification record. */
                Status?: components["schemas"]["tollfree_verification_enum_status"];
                /** @description The SID of the Phone Number associated with the Tollfree Verification. */
                TollfreePhoneNumberSid?: string;
                /** @description The trust product sids / tollfree bundle sids of tollfree verifications */
                TrustProductSid?: string[];
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
                        verifications?: components["schemas"]["messaging.v1.tollfree_verification"][];
                    };
                };
            };
        };
    };
    CreateTollfreeVerification: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Additional information to be provided for verification. */
                    AdditionalInformation?: string;
                    /** @description Indicates if the content is age gated. */
                    AgeGatedContent?: boolean;
                    /** @description The city of the business or organization using the Tollfree number. */
                    BusinessCity?: string;
                    /** @description The email address of the contact for the business or organization using the Tollfree number. */
                    BusinessContactEmail?: string;
                    /** @description The first name of the contact for the business or organization using the Tollfree number. */
                    BusinessContactFirstName?: string;
                    /** @description The last name of the contact for the business or organization using the Tollfree number. */
                    BusinessContactLastName?: string;
                    /**
                     * Format: phone-number
                     * @description The E.164 formatted phone number of the contact for the business or organization using the Tollfree number.
                     */
                    BusinessContactPhone?: string;
                    /** @description The country of the business or organization using the Tollfree number. */
                    BusinessCountry?: string;
                    /** @description The name of the business or organization using the Tollfree number. */
                    BusinessName: string;
                    /** @description The postal code of the business or organization using the Tollfree number. */
                    BusinessPostalCode?: string;
                    BusinessRegistrationAuthority?: components["schemas"]["tollfree_verification_enum_business_registration_authority"];
                    /** @description The country where the business is registered. Required for all business types except SOLE_PROPRIETOR. */
                    BusinessRegistrationCountry?: string;
                    /** @description A legally recognized business registration number. Required for all business types except SOLE_PROPRIETOR. */
                    BusinessRegistrationNumber?: string;
                    /** @description The E.164 formatted number associated with the business. */
                    BusinessRegistrationPhoneNumber?: string;
                    /** @description The state/province/region of the business or organization using the Tollfree number. */
                    BusinessStateProvinceRegion?: string;
                    /** @description The address of the business or organization using the Tollfree number. */
                    BusinessStreetAddress?: string;
                    /** @description The address of the business or organization using the Tollfree number. */
                    BusinessStreetAddress2?: string;
                    BusinessType?: components["schemas"]["tollfree_verification_enum_business_type"];
                    /** @description The website of the business or organization using the Tollfree number. */
                    BusinessWebsite: string;
                    /** @description Customer's Profile Bundle BundleSid. */
                    CustomerProfileSid?: string;
                    /** @description Trade name, sub entity, or downstream business name of business being submitted for verification */
                    DoingBusinessAs?: string;
                    /** @description An optional external reference ID supplied by customer and echoed back on status retrieval. */
                    ExternalReferenceId?: string;
                    /** @description A sample help message provided to users. */
                    HelpMessageSample?: string;
                    /** @description Estimate monthly volume of messages from the Tollfree Number. */
                    MessageVolume: string;
                    /** @description The email address to receive the notification about the verification result. . */
                    NotificationEmail: string;
                    /** @description The confirmation message sent to users when they opt in to receive messages. */
                    OptInConfirmationMessage?: string;
                    /** @description Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL. */
                    OptInImageUrls: string[];
                    /** @description List of keywords that users can text in to opt in to receive messages. */
                    OptInKeywords?: string[];
                    OptInType: components["schemas"]["tollfree_verification_enum_opt_in_type"];
                    /** @description The URL to the privacy policy for the business or organization. */
                    PrivacyPolicyUrl?: string;
                    /** @description An example of message content, i.e. a sample message. */
                    ProductionMessageSample: string;
                    /** @description The URL to the terms and conditions for the business or organization. */
                    TermsAndConditionsUrl?: string;
                    /** @description The SID of the Phone Number associated with the Tollfree Verification. */
                    TollfreePhoneNumberSid: string;
                    UseCaseCategories: components["schemas"]["tollfree_verification_enum_use_case_categories"];
                    /** @description Use this to further explain how messaging is used by the business or organization. */
                    UseCaseSummary: string;
                    /** @description The unique ID of the vetting */
                    VettingId?: string;
                    VettingProvider?: components["schemas"]["tollfree_verification_enum_vetting_provider"];
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
                    "application/json": components["schemas"]["messaging.v1.tollfree_verification"];
                };
            };
        };
    };
    FetchTollfreeVerification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique string identifying a Tollfree Verification. */
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
                    "application/json": components["schemas"]["messaging.v1.tollfree_verification"];
                };
            };
        };
    };
    UpdateTollfreeVerification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique string to identify Tollfree Verification. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Additional information to be provided for verification. */
                    AdditionalInformation?: string;
                    /** @description Indicates if the content is age gated. */
                    AgeGatedContent?: boolean;
                    /** @description The city of the business or organization using the Tollfree number. */
                    BusinessCity?: string;
                    /** @description The email address of the contact for the business or organization using the Tollfree number. */
                    BusinessContactEmail?: string;
                    /** @description The first name of the contact for the business or organization using the Tollfree number. */
                    BusinessContactFirstName?: string;
                    /** @description The last name of the contact for the business or organization using the Tollfree number. */
                    BusinessContactLastName?: string;
                    /**
                     * Format: phone-number
                     * @description The E.164 formatted phone number of the contact for the business or organization using the Tollfree number.
                     */
                    BusinessContactPhone?: string;
                    /** @description The country of the business or organization using the Tollfree number. */
                    BusinessCountry?: string;
                    /** @description The name of the business or organization using the Tollfree number. */
                    BusinessName?: string;
                    /** @description The postal code of the business or organization using the Tollfree number. */
                    BusinessPostalCode?: string;
                    BusinessRegistrationAuthority?: components["schemas"]["tollfree_verification_enum_business_registration_authority"];
                    /** @description Country business is registered in */
                    BusinessRegistrationCountry?: string;
                    /** @description A legally recognized business registration number */
                    BusinessRegistrationNumber?: string;
                    /** @description The E.164 formatted number associated with the business. */
                    BusinessRegistrationPhoneNumber?: string;
                    /** @description The state/province/region of the business or organization using the Tollfree number. */
                    BusinessStateProvinceRegion?: string;
                    /** @description The address of the business or organization using the Tollfree number. */
                    BusinessStreetAddress?: string;
                    /** @description The address of the business or organization using the Tollfree number. */
                    BusinessStreetAddress2?: string;
                    BusinessType?: components["schemas"]["tollfree_verification_enum_business_type"];
                    /** @description The website of the business or organization using the Tollfree number. */
                    BusinessWebsite?: string;
                    /** @description Trade name, sub entity, or downstream business name of business being submitted for verification */
                    DoingBusinessAs?: string;
                    /** @description Describe why the verification is being edited. If the verification was rejected because of a technical issue, such as the website being down, and the issue has been resolved this parameter should be set to something similar to 'Website fixed'. */
                    EditReason?: string;
                    /** @description A sample help message provided to users. */
                    HelpMessageSample?: string;
                    /** @description Estimate monthly volume of messages from the Tollfree Number. */
                    MessageVolume?: string;
                    /** @description The email address to receive the notification about the verification result. . */
                    NotificationEmail?: string;
                    /** @description The confirmation message sent to users when they opt in to receive messages. */
                    OptInConfirmationMessage?: string;
                    /** @description Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL. */
                    OptInImageUrls?: string[];
                    /** @description List of keywords that users can text in to opt in to receive messages. */
                    OptInKeywords?: string[];
                    OptInType?: components["schemas"]["tollfree_verification_enum_opt_in_type"];
                    /** @description The URL to the privacy policy for the business or organization. */
                    PrivacyPolicyUrl?: string;
                    /** @description An example of message content, i.e. a sample message. */
                    ProductionMessageSample?: string;
                    /** @description The URL to the terms and conditions for the business or organization. */
                    TermsAndConditionsUrl?: string;
                    UseCaseCategories?: components["schemas"]["tollfree_verification_enum_use_case_categories"];
                    /** @description Use this to further explain how messaging is used by the business or organization. */
                    UseCaseSummary?: string;
                    /** @description The unique ID of the vetting */
                    VettingId?: string;
                    VettingProvider?: components["schemas"]["tollfree_verification_enum_vetting_provider"];
                };
            };
        };
        responses: {
            /** @description Accepted */
            202: {
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
                    "application/json": components["schemas"]["messaging.v1.tollfree_verification"];
                };
            };
        };
    };
    DeleteTollfreeVerification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique string to identify Tollfree Verification. */
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
}
