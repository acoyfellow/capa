export type paths = {
    "/2010-04-01/Accounts.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieves a collection of Accounts belonging to the account used to make the request
         * @description Retrieves a collection of Accounts belonging to the account used to make the request
         */
        get: operations["ListAccount"];
        put?: never;
        /**
         * Create a new Twilio Subaccount from the account making the request
         * @description Create a new Twilio Subaccount from the account making the request
         */
        post: operations["CreateAccount"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Addresses.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListAddress"];
        put?: never;
        post: operations["CreateAddress"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Addresses/{AddressSid}/DependentPhoneNumbers.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListDependentPhoneNumber"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchAddress"];
        put?: never;
        post: operations["UpdateAddress"];
        delete: operations["DeleteAddress"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Applications.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of applications representing an application within the requesting account
         * @description Retrieve a list of applications representing an application within the requesting account
         */
        get: operations["ListApplication"];
        put?: never;
        /**
         * Create a new application within your account
         * @description Create a new application within your account
         */
        post: operations["CreateApplication"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch the application specified by the provided sid
         * @description Fetch the application specified by the provided sid
         */
        get: operations["FetchApplication"];
        put?: never;
        /**
         * Updates the application's properties
         * @description Updates the application's properties
         */
        post: operations["UpdateApplication"];
        /**
         * Delete the application by the specified application sid
         * @description Delete the application by the specified application sid
         */
        delete: operations["DeleteApplication"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of authorized-connect-apps belonging to the account used to make the request
         * @description Retrieve a list of authorized-connect-apps belonging to the account used to make the request
         */
        get: operations["ListAuthorizedConnectApp"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of an authorized-connect-app
         * @description Fetch an instance of an authorized-connect-app
         */
        get: operations["FetchAuthorizedConnectApp"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListAvailablePhoneNumberCountry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchAvailablePhoneNumberCountry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Local.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListAvailablePhoneNumberLocal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/MachineToMachine.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListAvailablePhoneNumberMachineToMachine"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Mobile.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListAvailablePhoneNumberMobile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/National.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListAvailablePhoneNumberNational"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/SharedCost.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListAvailablePhoneNumberSharedCost"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/TollFree.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListAvailablePhoneNumberTollFree"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Voip.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListAvailablePhoneNumberVoip"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Balance.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
         * @description Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
         */
        get: operations["FetchBalance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieves a collection of calls made to and from your account
         * @description Retrieves a collection of calls made to and from your account
         */
        get: operations["ListCall"];
        put?: never;
        /**
         * Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
         * @description Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
         */
        post: operations["CreateCall"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Events.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of all events for a call.
         * @description Retrieve a list of all events for a call.
         */
        get: operations["ListCallEvent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListCallNotification"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchCallNotification"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * create an instance of payments. This will start a new payments session
         * @description create an instance of payments. This will start a new payments session
         */
        post: operations["CreatePayments"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * update an instance of payments with different phases of payment flows.
         * @description update an instance of payments with different phases of payment flows.
         */
        post: operations["UpdatePayments"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of recordings belonging to the call used to make the request
         * @description Retrieve a list of recordings belonging to the call used to make the request
         */
        get: operations["ListCallRecording"];
        put?: never;
        /**
         * Create a recording for the call
         * @description Create a recording for the call
         */
        post: operations["CreateCallRecording"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a recording for a call
         * @description Fetch an instance of a recording for a call
         */
        get: operations["FetchCallRecording"];
        put?: never;
        /**
         * Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
         * @description Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
         */
        post: operations["UpdateCallRecording"];
        /**
         * Delete a recording from your account
         * @description Delete a recording from your account
         */
        delete: operations["DeleteCallRecording"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a Siprec
         * @description Create a Siprec
         */
        post: operations["CreateSiprec"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
         * @description Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
         */
        post: operations["UpdateSiprec"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a Stream
         * @description Create a Stream
         */
        post: operations["CreateStream"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
         * @description Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
         */
        post: operations["UpdateStream"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a Transcription
         * @description Create a Transcription
         */
        post: operations["CreateRealtimeTranscription"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stop a Transcription using either the SID of the Transcription resource or the `name` used when creating the resource
         * @description Stop a Transcription using either the SID of the Transcription resource or the `name` used when creating the resource
         */
        post: operations["UpdateRealtimeTranscription"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessages.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new User Defined Message for the given Call SID.
         * @description Create a new User Defined Message for the given Call SID.
         */
        post: operations["CreateUserDefinedMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Subscribe to User Defined Messages for a given Call SID.
         * @description Subscribe to User Defined Messages for a given Call SID.
         */
        post: operations["CreateUserDefinedMessageSubscription"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete a specific User Defined Message Subscription.
         * @description Delete a specific User Defined Message Subscription.
         */
        delete: operations["DeleteUserDefinedMessageSubscription"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch the call specified by the provided Call SID
         * @description Fetch the call specified by the provided Call SID
         */
        get: operations["FetchCall"];
        put?: never;
        /**
         * Initiates a call redirect or terminates a call
         * @description Initiates a call redirect or terminates a call
         */
        post: operations["UpdateCall"];
        /**
         * Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
         * @description Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
         */
        delete: operations["DeleteCall"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Conferences.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of conferences belonging to the account used to make the request
         * @description Retrieve a list of conferences belonging to the account used to make the request
         */
        get: operations["ListConference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of participants belonging to the account used to make the request
         * @description Retrieve a list of participants belonging to the account used to make the request
         */
        get: operations["ListParticipant"];
        put?: never;
        post: operations["CreateParticipant"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a participant
         * @description Fetch an instance of a participant
         */
        get: operations["FetchParticipant"];
        put?: never;
        /**
         * Update the properties of the participant
         * @description Update the properties of the participant
         */
        post: operations["UpdateParticipant"];
        /**
         * Kick a participant from a given conference
         * @description Kick a participant from a given conference
         */
        delete: operations["DeleteParticipant"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of recordings belonging to the call used to make the request
         * @description Retrieve a list of recordings belonging to the call used to make the request
         */
        get: operations["ListConferenceRecording"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a recording for a call
         * @description Fetch an instance of a recording for a call
         */
        get: operations["FetchConferenceRecording"];
        put?: never;
        /**
         * Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
         * @description Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
         */
        post: operations["UpdateConferenceRecording"];
        /**
         * Delete a recording from your account
         * @description Delete a recording from your account
         */
        delete: operations["DeleteConferenceRecording"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a conference
         * @description Fetch an instance of a conference
         */
        get: operations["FetchConference"];
        put?: never;
        post: operations["UpdateConference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/ConnectApps.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of connect-apps belonging to the account used to make the request
         * @description Retrieve a list of connect-apps belonging to the account used to make the request
         */
        get: operations["ListConnectApp"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a connect-app
         * @description Fetch an instance of a connect-app
         */
        get: operations["FetchConnectApp"];
        put?: never;
        /**
         * Update a connect-app with the specified parameters
         * @description Update a connect-app with the specified parameters
         */
        post: operations["UpdateConnectApp"];
        /**
         * Delete an instance of a connect-app
         * @description Delete an instance of a connect-app
         */
        delete: operations["DeleteConnectApp"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
         * @description Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
         */
        get: operations["ListIncomingPhoneNumber"];
        put?: never;
        /**
         * Purchase a phone-number for the account.
         * @description Purchase a phone-number for the account.
         */
        post: operations["CreateIncomingPhoneNumber"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of Add-on installations currently assigned to this Number.
         * @description Retrieve a list of Add-on installations currently assigned to this Number.
         */
        get: operations["ListIncomingPhoneNumberAssignedAddOn"];
        put?: never;
        /**
         * Assign an Add-on installation to the Number specified.
         * @description Assign an Add-on installation to the Number specified.
         */
        post: operations["CreateIncomingPhoneNumberAssignedAddOn"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of Extensions for the Assigned Add-on.
         * @description Retrieve a list of Extensions for the Assigned Add-on.
         */
        get: operations["ListIncomingPhoneNumberAssignedAddOnExtension"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of an Extension for the Assigned Add-on.
         * @description Fetch an instance of an Extension for the Assigned Add-on.
         */
        get: operations["FetchIncomingPhoneNumberAssignedAddOnExtension"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of an Add-on installation currently assigned to this Number.
         * @description Fetch an instance of an Add-on installation currently assigned to this Number.
         */
        get: operations["FetchIncomingPhoneNumberAssignedAddOn"];
        put?: never;
        post?: never;
        /**
         * Remove the assignment of an Add-on installation from the Number specified.
         * @description Remove the assignment of an Add-on installation from the Number specified.
         */
        delete: operations["DeleteIncomingPhoneNumberAssignedAddOn"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an incoming-phone-number belonging to the account used to make the request.
         * @description Fetch an incoming-phone-number belonging to the account used to make the request.
         */
        get: operations["FetchIncomingPhoneNumber"];
        put?: never;
        /**
         * Update an incoming-phone-number instance.
         * @description Update an incoming-phone-number instance.
         */
        post: operations["UpdateIncomingPhoneNumber"];
        /**
         * Delete a phone-numbers belonging to the account used to make the request.
         * @description Delete a phone-numbers belonging to the account used to make the request.
         */
        delete: operations["DeleteIncomingPhoneNumber"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListIncomingPhoneNumberLocal"];
        put?: never;
        post: operations["CreateIncomingPhoneNumberLocal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListIncomingPhoneNumberMobile"];
        put?: never;
        post: operations["CreateIncomingPhoneNumberMobile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListIncomingPhoneNumberTollFree"];
        put?: never;
        post: operations["CreateIncomingPhoneNumberTollFree"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Keys.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListKey"];
        put?: never;
        post: operations["CreateNewKey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchKey"];
        put?: never;
        post: operations["UpdateKey"];
        delete: operations["DeleteKey"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Messages.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of Message resources associated with a Twilio Account
         * @description Retrieve a list of Message resources associated with a Twilio Account
         */
        get: operations["ListMessage"];
        put?: never;
        /**
         * Send a message
         * @description Send a message
         */
        post: operations["CreateMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Message Feedback to confirm a tracked user action was performed by the recipient of the associated Message
         * @description Create Message Feedback to confirm a tracked user action was performed by the recipient of the associated Message
         */
        post: operations["CreateMessageFeedback"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read a list of Media resources associated with a specific Message resource
         * @description Read a list of Media resources associated with a specific Message resource
         */
        get: operations["ListMedia"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a single Media resource associated with a specific Message resource
         * @description Fetch a single Media resource associated with a specific Message resource
         */
        get: operations["FetchMedia"];
        put?: never;
        post?: never;
        /**
         * Delete the Media resource.
         * @description Delete the Media resource.
         */
        delete: operations["DeleteMedia"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific Message
         * @description Fetch a specific Message
         */
        get: operations["FetchMessage"];
        put?: never;
        /**
         * Update a Message resource (used to redact Message `body` text and to cancel not-yet-sent messages)
         * @description Update a Message resource (used to redact Message `body` text and to cancel not-yet-sent messages)
         */
        post: operations["UpdateMessage"];
        /**
         * Deletes a Message resource from your account
         * @description Deletes a Message resource from your account
         */
        delete: operations["DeleteMessage"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Notifications.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of notifications belonging to the account used to make the request
         * @description Retrieve a list of notifications belonging to the account used to make the request
         */
        get: operations["ListNotification"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Notifications/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a notification belonging to the account used to make the request
         * @description Fetch a notification belonging to the account used to make the request
         */
        get: operations["FetchNotification"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
         * @description Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
         */
        get: operations["ListOutgoingCallerId"];
        put?: never;
        post: operations["CreateValidationRequest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an outgoing-caller-id belonging to the account used to make the request
         * @description Fetch an outgoing-caller-id belonging to the account used to make the request
         */
        get: operations["FetchOutgoingCallerId"];
        put?: never;
        /**
         * Updates the caller-id
         * @description Updates the caller-id
         */
        post: operations["UpdateOutgoingCallerId"];
        /**
         * Delete the caller-id specified from the account
         * @description Delete the caller-id specified from the account
         */
        delete: operations["DeleteOutgoingCallerId"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Queues.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of queues belonging to the account used to make the request
         * @description Retrieve a list of queues belonging to the account used to make the request
         */
        get: operations["ListQueue"];
        put?: never;
        /**
         * Create a queue
         * @description Create a queue
         */
        post: operations["CreateQueue"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve the members of the queue
         * @description Retrieve the members of the queue
         */
        get: operations["ListMember"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific member from the queue
         * @description Fetch a specific member from the queue
         */
        get: operations["FetchMember"];
        put?: never;
        /**
         * Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
         * @description Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
         */
        post: operations["UpdateMember"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a queue identified by the QueueSid
         * @description Fetch an instance of a queue identified by the QueueSid
         */
        get: operations["FetchQueue"];
        put?: never;
        /**
         * Update the queue with the new parameters
         * @description Update the queue with the new parameters
         */
        post: operations["UpdateQueue"];
        /**
         * Remove an empty queue
         * @description Remove an empty queue
         */
        delete: operations["DeleteQueue"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Recordings.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of recordings belonging to the account used to make the request
         * @description Retrieve a list of recordings belonging to the account used to make the request
         */
        get: operations["ListRecording"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListRecordingTranscription"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchRecordingTranscription"];
        put?: never;
        post?: never;
        delete: operations["DeleteRecordingTranscription"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of results belonging to the recording
         * @description Retrieve a list of results belonging to the recording
         */
        get: operations["ListRecordingAddOnResult"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of payloads belonging to the AddOnResult
         * @description Retrieve a list of payloads belonging to the AddOnResult
         */
        get: operations["ListRecordingAddOnResultPayload"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{PayloadSid}/Data.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a result payload
         * @description Fetch an instance of a result payload
         */
        get: operations["FetchRecordingAddOnResultPayloadData"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a result payload
         * @description Fetch an instance of a result payload
         */
        get: operations["FetchRecordingAddOnResultPayload"];
        put?: never;
        post?: never;
        /**
         * Delete a payload from the result along with all associated Data
         * @description Delete a payload from the result along with all associated Data
         */
        delete: operations["DeleteRecordingAddOnResultPayload"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of an AddOnResult
         * @description Fetch an instance of an AddOnResult
         */
        get: operations["FetchRecordingAddOnResult"];
        put?: never;
        post?: never;
        /**
         * Delete a result and purge all associated Payloads
         * @description Delete a result and purge all associated Payloads
         */
        delete: operations["DeleteRecordingAddOnResult"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a recording
         * @description Fetch an instance of a recording
         */
        get: operations["FetchRecording"];
        put?: never;
        post?: never;
        /**
         * Delete a recording from your account
         * @description Delete a recording from your account
         */
        delete: operations["DeleteRecording"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SigningKeys.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListSigningKey"];
        put?: never;
        /**
         * Create a new Signing Key for the account making the request.
         * @description Create a new Signing Key for the account making the request.
         */
        post: operations["CreateNewSigningKey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["FetchSigningKey"];
        put?: never;
        post: operations["UpdateSigningKey"];
        delete: operations["DeleteSigningKey"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP.json": {
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
    "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get All Credential Lists
         * @description Get All Credential Lists
         */
        get: operations["ListSipCredentialList"];
        put?: never;
        /**
         * Create a Credential List
         * @description Create a Credential List
         */
        post: operations["CreateSipCredentialList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of credentials.
         * @description Retrieve a list of credentials.
         */
        get: operations["ListSipCredential"];
        put?: never;
        /**
         * Create a new credential resource.
         * @description Create a new credential resource.
         */
        post: operations["CreateSipCredential"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a single credential.
         * @description Fetch a single credential.
         */
        get: operations["FetchSipCredential"];
        put?: never;
        /**
         * Update a credential resource.
         * @description Update a credential resource.
         */
        post: operations["UpdateSipCredential"];
        /**
         * Delete a credential resource.
         * @description Delete a credential resource.
         */
        delete: operations["DeleteSipCredential"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a Credential List
         * @description Get a Credential List
         */
        get: operations["FetchSipCredentialList"];
        put?: never;
        /**
         * Update a Credential List
         * @description Update a Credential List
         */
        post: operations["UpdateSipCredentialList"];
        /**
         * Delete a Credential List
         * @description Delete a Credential List
         */
        delete: operations["DeleteSipCredentialList"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of domains belonging to the account used to make the request
         * @description Retrieve a list of domains belonging to the account used to make the request
         */
        get: operations["ListSipDomain"];
        put?: never;
        /**
         * Create a new Domain
         * @description Create a new Domain
         */
        post: operations["CreateSipDomain"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth.json": {
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
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls.json": {
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
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of credential list mappings belonging to the domain used in the request
         * @description Retrieve a list of credential list mappings belonging to the domain used in the request
         */
        get: operations["ListSipAuthCallsCredentialListMapping"];
        put?: never;
        /**
         * Create a new credential list mapping resource
         * @description Create a new credential list mapping resource
         */
        post: operations["CreateSipAuthCallsCredentialListMapping"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific instance of a credential list mapping
         * @description Fetch a specific instance of a credential list mapping
         */
        get: operations["FetchSipAuthCallsCredentialListMapping"];
        put?: never;
        post?: never;
        /**
         * Delete a credential list mapping from the requested domain
         * @description Delete a credential list mapping from the requested domain
         */
        delete: operations["DeleteSipAuthCallsCredentialListMapping"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
         * @description Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
         */
        get: operations["ListSipAuthCallsIpAccessControlListMapping"];
        put?: never;
        /**
         * Create a new IP Access Control List mapping
         * @description Create a new IP Access Control List mapping
         */
        post: operations["CreateSipAuthCallsIpAccessControlListMapping"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific instance of an IP Access Control List mapping
         * @description Fetch a specific instance of an IP Access Control List mapping
         */
        get: operations["FetchSipAuthCallsIpAccessControlListMapping"];
        put?: never;
        post?: never;
        /**
         * Delete an IP Access Control List mapping from the requested domain
         * @description Delete an IP Access Control List mapping from the requested domain
         */
        delete: operations["DeleteSipAuthCallsIpAccessControlListMapping"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations.json": {
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
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of credential list mappings belonging to the domain used in the request
         * @description Retrieve a list of credential list mappings belonging to the domain used in the request
         */
        get: operations["ListSipAuthRegistrationsCredentialListMapping"];
        put?: never;
        /**
         * Create a new credential list mapping resource
         * @description Create a new credential list mapping resource
         */
        post: operations["CreateSipAuthRegistrationsCredentialListMapping"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific instance of a credential list mapping
         * @description Fetch a specific instance of a credential list mapping
         */
        get: operations["FetchSipAuthRegistrationsCredentialListMapping"];
        put?: never;
        post?: never;
        /**
         * Delete a credential list mapping from the requested domain
         * @description Delete a credential list mapping from the requested domain
         */
        delete: operations["DeleteSipAuthRegistrationsCredentialListMapping"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read multiple CredentialListMapping resources from an account.
         * @description Read multiple CredentialListMapping resources from an account.
         */
        get: operations["ListSipCredentialListMapping"];
        put?: never;
        /**
         * Create a CredentialListMapping resource for an account.
         * @description Create a CredentialListMapping resource for an account.
         */
        post: operations["CreateSipCredentialListMapping"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a single CredentialListMapping resource from an account.
         * @description Fetch a single CredentialListMapping resource from an account.
         */
        get: operations["FetchSipCredentialListMapping"];
        put?: never;
        post?: never;
        /**
         * Delete a CredentialListMapping resource from an account.
         * @description Delete a CredentialListMapping resource from an account.
         */
        delete: operations["DeleteSipCredentialListMapping"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of IpAccessControlListMapping resources.
         * @description Retrieve a list of IpAccessControlListMapping resources.
         */
        get: operations["ListSipIpAccessControlListMapping"];
        put?: never;
        /**
         * Create a new IpAccessControlListMapping resource.
         * @description Create a new IpAccessControlListMapping resource.
         */
        post: operations["CreateSipIpAccessControlListMapping"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an IpAccessControlListMapping resource.
         * @description Fetch an IpAccessControlListMapping resource.
         */
        get: operations["FetchSipIpAccessControlListMapping"];
        put?: never;
        post?: never;
        /**
         * Delete an IpAccessControlListMapping resource.
         * @description Delete an IpAccessControlListMapping resource.
         */
        delete: operations["DeleteSipIpAccessControlListMapping"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a Domain
         * @description Fetch an instance of a Domain
         */
        get: operations["FetchSipDomain"];
        put?: never;
        /**
         * Update the attributes of a domain
         * @description Update the attributes of a domain
         */
        post: operations["UpdateSipDomain"];
        /**
         * Delete an instance of a Domain
         * @description Delete an instance of a Domain
         */
        delete: operations["DeleteSipDomain"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of IpAccessControlLists that belong to the account used to make the request
         * @description Retrieve a list of IpAccessControlLists that belong to the account used to make the request
         */
        get: operations["ListSipIpAccessControlList"];
        put?: never;
        /**
         * Create a new IpAccessControlList resource
         * @description Create a new IpAccessControlList resource
         */
        post: operations["CreateSipIpAccessControlList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read multiple IpAddress resources.
         * @description Read multiple IpAddress resources.
         */
        get: operations["ListSipIpAddress"];
        put?: never;
        /**
         * Create a new IpAddress resource.
         * @description Create a new IpAddress resource.
         */
        post: operations["CreateSipIpAddress"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read one IpAddress resource.
         * @description Read one IpAddress resource.
         */
        get: operations["FetchSipIpAddress"];
        put?: never;
        /**
         * Update an IpAddress resource.
         * @description Update an IpAddress resource.
         */
        post: operations["UpdateSipIpAddress"];
        /**
         * Delete an IpAddress resource.
         * @description Delete an IpAddress resource.
         */
        delete: operations["DeleteSipIpAddress"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a specific instance of an IpAccessControlList
         * @description Fetch a specific instance of an IpAccessControlList
         */
        get: operations["FetchSipIpAccessControlList"];
        put?: never;
        /**
         * Rename an IpAccessControlList
         * @description Rename an IpAccessControlList
         */
        post: operations["UpdateSipIpAccessControlList"];
        /**
         * Delete an IpAccessControlList from the requested account
         * @description Delete an IpAccessControlList from the requested account
         */
        delete: operations["DeleteSipIpAccessControlList"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of short-codes belonging to the account used to make the request
         * @description Retrieve a list of short-codes belonging to the account used to make the request
         */
        get: operations["ListShortCode"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a short code
         * @description Fetch an instance of a short code
         */
        get: operations["FetchShortCode"];
        put?: never;
        /**
         * Update a short code with the following parameters
         * @description Update a short code with the following parameters
         */
        post: operations["UpdateShortCode"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Tokens.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new token for ICE servers
         * @description Create a new token for ICE servers
         */
        post: operations["CreateToken"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Transcriptions.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of transcriptions belonging to the account used to make the request
         * @description Retrieve a list of transcriptions belonging to the account used to make the request
         */
        get: operations["ListTranscription"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch an instance of a Transcription
         * @description Fetch an instance of a Transcription
         */
        get: operations["FetchTranscription"];
        put?: never;
        post?: never;
        /**
         * Delete a transcription from the account used to make the request
         * @description Delete a transcription from the account used to make the request
         */
        delete: operations["DeleteTranscription"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Usage.json": {
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
    "/2010-04-01/Accounts/{AccountSid}/Usage/Records.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of usage-records belonging to the account used to make the request
         * @description Retrieve a list of usage-records belonging to the account used to make the request
         */
        get: operations["ListUsageRecord"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Usage/Records/AllTime.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListUsageRecordAllTime"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Daily.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListUsageRecordDaily"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Usage/Records/LastMonth.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListUsageRecordLastMonth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Monthly.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListUsageRecordMonthly"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Usage/Records/ThisMonth.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListUsageRecordThisMonth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Today.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListUsageRecordToday"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Yearly.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListUsageRecordYearly"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Yesterday.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ListUsageRecordYesterday"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a list of usage-triggers belonging to the account used to make the request
         * @description Retrieve a list of usage-triggers belonging to the account used to make the request
         */
        get: operations["ListUsageTrigger"];
        put?: never;
        /**
         * Create a new UsageTrigger
         * @description Create a new UsageTrigger
         */
        post: operations["CreateUsageTrigger"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch and instance of a usage-trigger
         * @description Fetch and instance of a usage-trigger
         */
        get: operations["FetchUsageTrigger"];
        put?: never;
        /**
         * Update an instance of a usage trigger
         * @description Update an instance of a usage trigger
         */
        post: operations["UpdateUsageTrigger"];
        delete: operations["DeleteUsageTrigger"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/2010-04-01/Accounts/{Sid}.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch the account specified by the provided Account Sid
         * @description Fetch the account specified by the provided Account Sid
         */
        get: operations["FetchAccount"];
        put?: never;
        /**
         * Modify the properties of a given Account
         * @description Modify the properties of a given Account
         */
        post: operations["UpdateAccount"];
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
         * @description The status of this account. Usually `active`, but can be `suspended` or `closed`.
         * @enum {string}
         */
        account_enum_status: "active" | "suspended" | "closed";
        /**
         * @description The type of this account. Either `Trial` or `Full` if it's been upgraded
         * @enum {string}
         */
        account_enum_type: "Trial" | "Full";
        "api.v2010.account": {
            /** @description The authorization token for this account. This token should be kept a secret, so no sharing. */
            auth_token?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this account was created, in GMT in RFC 2822 format
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this account was last updated, in GMT in RFC 2822 format.
             */
            date_updated?: string | null;
            /** @description A human readable description of this account, up to 64 characters long. By default the FriendlyName is your email address. */
            friendly_name?: string | null;
            /** @description The unique 34 character id that represents the parent of this account. The OwnerAccountSid of a parent account is it's own sid. */
            owner_account_sid?: string | null;
            /** @description A 34 character string that uniquely identifies this resource. */
            sid?: string | null;
            status?: components["schemas"]["account_enum_status"];
            /**
             * Format: uri-map
             * @description A Map of various subresources available for the given Account Instance
             */
            subresource_uris?: Record<string, never> | null;
            type?: components["schemas"]["account_enum_type"];
            /** @description The URI for this resource, relative to `https://api.twilio.com` */
            uri?: string | null;
        };
        "api.v2010.account.address": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource. */
            account_sid?: string | null;
            /** @description The city in which the address is located. */
            city?: string | null;
            /** @description The name associated with the address.This property has a maximum length of 16 4-byte characters, or 21 3-byte characters. */
            customer_name?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description Whether emergency calling has been enabled on this number. */
            emergency_enabled?: boolean | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /**
             * Format: iso-country-code
             * @description The ISO country code of the address.
             */
            iso_country?: string | null;
            /** @description The postal code of the address. */
            postal_code?: string | null;
            /** @description The state or region of the address. */
            region?: string | null;
            /** @description The unique string that that we created to identify the Address resource. */
            sid?: string | null;
            /** @description The number and street address of the address. */
            street?: string | null;
            /** @description The additional number and street address of the address. */
            street_secondary?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description Whether the address has been validated to comply with local regulation. In countries that require valid addresses, an invalid address will not be accepted. `true` indicates the Address has been validated. `false` indicate the country doesn't require validation or the Address is not valid. */
            validated?: boolean | null;
            /** @description Whether the address has been verified to comply with regulation. In countries that require valid addresses, an invalid address will not be accepted. `true` indicates the Address has been verified. `false` indicate the country doesn't require verified or the Address is not valid. */
            verified?: boolean | null;
        };
        "api.v2010.account.address.dependent_phone_number": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the DependentPhoneNumber resource. */
            account_sid?: string | null;
            address_requirements?: components["schemas"]["dependent_phone_number_enum_address_requirement"];
            /** @description The API version used to start a new TwiML session. */
            api_version?: string | null;
            /** @description The set of Boolean properties that indicates whether a phone number can receive calls or messages.  Capabilities are  `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`. */
            capabilities?: unknown;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The SID of the emergency address configuration that we use for emergency calling from the phone number. */
            emergency_address_sid?: string | null;
            emergency_status?: components["schemas"]["dependent_phone_number_enum_emergency_status"];
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The unique string that that we created to identify the DependentPhoneNumber resource. */
            sid?: string | null;
            /** @description The SID of the application that handles SMS messages sent to the phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application. */
            sms_application_sid?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs while retrieving or executing the TwiML from `sms_url`.
             */
            sms_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call when the phone number receives an incoming SMS message.
             */
            sms_url?: string | null;
            /**
             * Format: uri
             * @description The URL we call using the `status_callback_method` to send status information to your application.
             */
            status_callback?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            status_callback_method?: "GET" | "POST" | null;
            /** @description The SID of the Trunk that handles calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
            trunk_sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The SID of the application that handles calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
            voice_application_sid?: string | null;
            /** @description Whether we look up the caller's caller-ID name from the CNAM database. Can be: `true` or `false`. Caller ID lookups can cost $0.01 each. */
            voice_caller_id_lookup?: boolean | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
             */
            voice_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call when the phone number receives a call. The `voice_url` will not be used if a `voice_application_sid` or a `trunk_sid` is set.
             */
            voice_url?: string | null;
        };
        "api.v2010.account.application": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resource. */
            account_sid?: string | null;
            /** @description The API version used to start a new TwiML session. */
            api_version?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /**
             * Format: uri
             * @description The URL we call using a POST method to send message status information to your application.
             */
            message_status_callback?: string | null;
            /** @description Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be: `true` or `false`. */
            public_application_connect_enabled?: boolean | null;
            /** @description The unique string that that we created to identify the Application resource. */
            sid?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs while retrieving or executing the TwiML from `sms_url`.
             */
            sms_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call using a POST method to send status information to your application about SMS messages that refer to the application.
             */
            sms_status_callback?: string | null;
            /**
             * Format: uri
             * @description The URL we call when the phone number receives an incoming SMS message.
             */
            sms_url?: string | null;
            /**
             * Format: uri
             * @description The URL we call using the `status_callback_method` to send status information to your application.
             */
            status_callback?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            status_callback_method?: "GET" | "POST" | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description Whether we look up the caller's caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`. */
            voice_caller_id_lookup?: boolean | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
             */
            voice_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call when the phone number assigned to this application receives a call.
             */
            voice_url?: string | null;
        };
        "api.v2010.account.authorized_connect_app": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AuthorizedConnectApp resource. */
            account_sid?: string | null;
            /** @description The company name set for the Connect App. */
            connect_app_company_name?: string | null;
            /** @description A detailed description of the Connect App. */
            connect_app_description?: string | null;
            /** @description The name of the Connect App. */
            connect_app_friendly_name?: string | null;
            /**
             * Format: uri
             * @description The public URL for the Connect App.
             */
            connect_app_homepage_url?: string | null;
            /** @description The SID that we assigned to the Connect App. */
            connect_app_sid?: string | null;
            /** @description The set of permissions that you authorized for the Connect App.  Can be: `get-all` or `post-all`. */
            permissions?: components["schemas"]["authorized_connect_app_enum_permission"][] | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.available_phone_number_country": {
            /** @description Whether all phone numbers available in the country are new to the Twilio platform. `true` if they are and `false` if all numbers are not in the Twilio Phone Number Beta program. */
            beta?: boolean | null;
            /** @description The name of the country. */
            country?: string | null;
            /**
             * Format: iso-country-code
             * @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country.
             */
            country_code?: string | null;
            /**
             * Format: uri-map
             * @description A list of related AvailablePhoneNumber resources identified by their URIs relative to `https://api.twilio.com`.
             */
            subresource_uris?: Record<string, never> | null;
            /**
             * Format: uri
             * @description The URI of the Country resource, relative to `https://api.twilio.com`.
             */
            uri?: string | null;
        };
        "api.v2010.account.available_phone_number_country.available_phone_number_local": {
            /** @description The type of [Address](https://www.twilio.com/docs/usage/api/address) resource the phone number requires. Can be: `none`, `any`, `local`, or `foreign`. `none` means no address is required. `any` means an address is required, but it can be anywhere in the world. `local` means an address in the phone number's country is required. `foreign` means an address outside of the phone number's country is required. */
            address_requirements?: string | null;
            /** @description Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
            beta?: boolean | null;
            /**
             * Format: phone-number-capabilities
             * @description The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are: `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
             */
            capabilities?: {
                fax?: boolean;
                mms?: boolean;
                sms?: boolean;
                voice?: boolean;
            } | null;
            /**
             * Format: phone-number
             * @description A formatted version of the phone number.
             */
            friendly_name?: string | null;
            /**
             * Format: iso-country-code
             * @description The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of this phone number.
             */
            iso_country?: string | null;
            /** @description The [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) of this phone number. Available for only phone numbers from the US and Canada. */
            lata?: string | null;
            /** @description The latitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            latitude?: number | null;
            /** @description The locality or city of this phone number's location. */
            locality?: string | null;
            /** @description The longitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            longitude?: number | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The postal or ZIP code of this phone number's location. Available for only phone numbers from the US and Canada. */
            postal_code?: string | null;
            /** @description The [rate center](https://en.wikipedia.org/wiki/Telephone_exchange) of this phone number. Available for only phone numbers from the US and Canada. */
            rate_center?: string | null;
            /** @description The two-letter state or province abbreviation of this phone number's location. Available for only phone numbers from the US and Canada. */
            region?: string | null;
        };
        "api.v2010.account.available_phone_number_country.available_phone_number_machine_to_machine": {
            /** @description The type of [Address](https://www.twilio.com/docs/usage/api/address) resource the phone number requires. Can be: `none`, `any`, `local`, or `foreign`. `none` means no address is required. `any` means an address is required, but it can be anywhere in the world. `local` means an address in the phone number's country is required. `foreign` means an address outside of the phone number's country is required. */
            address_requirements?: string | null;
            /** @description Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
            beta?: boolean | null;
            /**
             * Format: phone-number-capabilities
             * @description The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are: `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
             */
            capabilities?: {
                fax?: boolean;
                mms?: boolean;
                sms?: boolean;
                voice?: boolean;
            } | null;
            /**
             * Format: phone-number
             * @description A formatted version of the phone number.
             */
            friendly_name?: string | null;
            /**
             * Format: iso-country-code
             * @description The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of this phone number.
             */
            iso_country?: string | null;
            /** @description The [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) of this phone number. Available for only phone numbers from the US and Canada. */
            lata?: string | null;
            /** @description The latitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            latitude?: number | null;
            /** @description The locality or city of this phone number's location. */
            locality?: string | null;
            /** @description The longitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            longitude?: number | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The postal or ZIP code of this phone number's location. Available for only phone numbers from the US and Canada. */
            postal_code?: string | null;
            /** @description The [rate center](https://en.wikipedia.org/wiki/Telephone_exchange) of this phone number. Available for only phone numbers from the US and Canada. */
            rate_center?: string | null;
            /** @description The two-letter state or province abbreviation of this phone number's location. Available for only phone numbers from the US and Canada. */
            region?: string | null;
        };
        "api.v2010.account.available_phone_number_country.available_phone_number_mobile": {
            /** @description The type of [Address](https://www.twilio.com/docs/usage/api/address) resource the phone number requires. Can be: `none`, `any`, `local`, or `foreign`. `none` means no address is required. `any` means an address is required, but it can be anywhere in the world. `local` means an address in the phone number's country is required. `foreign` means an address outside of the phone number's country is required. */
            address_requirements?: string | null;
            /** @description Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
            beta?: boolean | null;
            /**
             * Format: phone-number-capabilities
             * @description The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are: `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
             */
            capabilities?: {
                fax?: boolean;
                mms?: boolean;
                sms?: boolean;
                voice?: boolean;
            } | null;
            /**
             * Format: phone-number
             * @description A formatted version of the phone number.
             */
            friendly_name?: string | null;
            /**
             * Format: iso-country-code
             * @description The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of this phone number.
             */
            iso_country?: string | null;
            /** @description The [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) of this phone number. Available for only phone numbers from the US and Canada. */
            lata?: string | null;
            /** @description The latitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            latitude?: number | null;
            /** @description The locality or city of this phone number's location. */
            locality?: string | null;
            /** @description The longitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            longitude?: number | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The postal or ZIP code of this phone number's location. Available for only phone numbers from the US and Canada. */
            postal_code?: string | null;
            /** @description The [rate center](https://en.wikipedia.org/wiki/Telephone_exchange) of this phone number. Available for only phone numbers from the US and Canada. */
            rate_center?: string | null;
            /** @description The two-letter state or province abbreviation of this phone number's location. Available for only phone numbers from the US and Canada. */
            region?: string | null;
        };
        "api.v2010.account.available_phone_number_country.available_phone_number_national": {
            /** @description The type of [Address](https://www.twilio.com/docs/usage/api/address) resource the phone number requires. Can be: `none`, `any`, `local`, or `foreign`. `none` means no address is required. `any` means an address is required, but it can be anywhere in the world. `local` means an address in the phone number's country is required. `foreign` means an address outside of the phone number's country is required. */
            address_requirements?: string | null;
            /** @description Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
            beta?: boolean | null;
            /**
             * Format: phone-number-capabilities
             * @description The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are: `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
             */
            capabilities?: {
                fax?: boolean;
                mms?: boolean;
                sms?: boolean;
                voice?: boolean;
            } | null;
            /**
             * Format: phone-number
             * @description A formatted version of the phone number.
             */
            friendly_name?: string | null;
            /**
             * Format: iso-country-code
             * @description The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of this phone number.
             */
            iso_country?: string | null;
            /** @description The [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) of this phone number. Available for only phone numbers from the US and Canada. */
            lata?: string | null;
            /** @description The latitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            latitude?: number | null;
            /** @description The locality or city of this phone number's location. */
            locality?: string | null;
            /** @description The longitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            longitude?: number | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The postal or ZIP code of this phone number's location. Available for only phone numbers from the US and Canada. */
            postal_code?: string | null;
            /** @description The [rate center](https://en.wikipedia.org/wiki/Telephone_exchange) of this phone number. Available for only phone numbers from the US and Canada. */
            rate_center?: string | null;
            /** @description The two-letter state or province abbreviation of this phone number's location. Available for only phone numbers from the US and Canada. */
            region?: string | null;
        };
        "api.v2010.account.available_phone_number_country.available_phone_number_shared_cost": {
            /** @description The type of [Address](https://www.twilio.com/docs/usage/api/address) resource the phone number requires. Can be: `none`, `any`, `local`, or `foreign`. `none` means no address is required. `any` means an address is required, but it can be anywhere in the world. `local` means an address in the phone number's country is required. `foreign` means an address outside of the phone number's country is required. */
            address_requirements?: string | null;
            /** @description Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
            beta?: boolean | null;
            /**
             * Format: phone-number-capabilities
             * @description The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are: `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
             */
            capabilities?: {
                fax?: boolean;
                mms?: boolean;
                sms?: boolean;
                voice?: boolean;
            } | null;
            /**
             * Format: phone-number
             * @description A formatted version of the phone number.
             */
            friendly_name?: string | null;
            /**
             * Format: iso-country-code
             * @description The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of this phone number.
             */
            iso_country?: string | null;
            /** @description The [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) of this phone number. Available for only phone numbers from the US and Canada. */
            lata?: string | null;
            /** @description The latitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            latitude?: number | null;
            /** @description The locality or city of this phone number's location. */
            locality?: string | null;
            /** @description The longitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            longitude?: number | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The postal or ZIP code of this phone number's location. Available for only phone numbers from the US and Canada. */
            postal_code?: string | null;
            /** @description The [rate center](https://en.wikipedia.org/wiki/Telephone_exchange) of this phone number. Available for only phone numbers from the US and Canada. */
            rate_center?: string | null;
            /** @description The two-letter state or province abbreviation of this phone number's location. Available for only phone numbers from the US and Canada. */
            region?: string | null;
        };
        "api.v2010.account.available_phone_number_country.available_phone_number_toll_free": {
            /** @description The type of [Address](https://www.twilio.com/docs/usage/api/address) resource the phone number requires. Can be: `none`, `any`, `local`, or `foreign`. `none` means no address is required. `any` means an address is required, but it can be anywhere in the world. `local` means an address in the phone number's country is required. `foreign` means an address outside of the phone number's country is required. */
            address_requirements?: string | null;
            /** @description Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
            beta?: boolean | null;
            /**
             * Format: phone-number-capabilities
             * @description The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are: `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
             */
            capabilities?: {
                fax?: boolean;
                mms?: boolean;
                sms?: boolean;
                voice?: boolean;
            } | null;
            /**
             * Format: phone-number
             * @description A formatted version of the phone number.
             */
            friendly_name?: string | null;
            /**
             * Format: iso-country-code
             * @description The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of this phone number.
             */
            iso_country?: string | null;
            /** @description The [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) of this phone number. Available for only phone numbers from the US and Canada. */
            lata?: string | null;
            /** @description The latitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            latitude?: number | null;
            /** @description The locality or city of this phone number's location. */
            locality?: string | null;
            /** @description The longitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            longitude?: number | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The postal or ZIP code of this phone number's location. Available for only phone numbers from the US and Canada. */
            postal_code?: string | null;
            /** @description The [rate center](https://en.wikipedia.org/wiki/Telephone_exchange) of this phone number. Available for only phone numbers from the US and Canada. */
            rate_center?: string | null;
            /** @description The two-letter state or province abbreviation of this phone number's location. Available for only phone numbers from the US and Canada. */
            region?: string | null;
        };
        "api.v2010.account.available_phone_number_country.available_phone_number_voip": {
            /** @description The type of [Address](https://www.twilio.com/docs/usage/api/address) resource the phone number requires. Can be: `none`, `any`, `local`, or `foreign`. `none` means no address is required. `any` means an address is required, but it can be anywhere in the world. `local` means an address in the phone number's country is required. `foreign` means an address outside of the phone number's country is required. */
            address_requirements?: string | null;
            /** @description Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
            beta?: boolean | null;
            /**
             * Format: phone-number-capabilities
             * @description The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are: `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
             */
            capabilities?: {
                fax?: boolean;
                mms?: boolean;
                sms?: boolean;
                voice?: boolean;
            } | null;
            /**
             * Format: phone-number
             * @description A formatted version of the phone number.
             */
            friendly_name?: string | null;
            /**
             * Format: iso-country-code
             * @description The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of this phone number.
             */
            iso_country?: string | null;
            /** @description The [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) of this phone number. Available for only phone numbers from the US and Canada. */
            lata?: string | null;
            /** @description The latitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            latitude?: number | null;
            /** @description The locality or city of this phone number's location. */
            locality?: string | null;
            /** @description The longitude of this phone number's location. Available for only phone numbers from the US and Canada. */
            longitude?: number | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The postal or ZIP code of this phone number's location. Available for only phone numbers from the US and Canada. */
            postal_code?: string | null;
            /** @description The [rate center](https://en.wikipedia.org/wiki/Telephone_exchange) of this phone number. Available for only phone numbers from the US and Canada. */
            rate_center?: string | null;
            /** @description The two-letter state or province abbreviation of this phone number's location. Available for only phone numbers from the US and Canada. */
            region?: string | null;
        };
        "api.v2010.account.balance": {
            /** @description The unique SID identifier of the Account. */
            account_sid?: string | null;
            /** @description The balance of the Account, in units specified by the unit parameter. Balance changes may not be reflected immediately. Child accounts do not contain balance information */
            balance?: string | null;
            /** @description The units of currency for the account balance */
            currency?: string | null;
        };
        "api.v2010.account.call": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Call resource. */
            account_sid?: string | null;
            /** @description Either `human` or `machine` if this call was initiated with answering machine detection. Empty otherwise. */
            answered_by?: string | null;
            /** @description The API version used to create the call. */
            api_version?: string | null;
            /** @description The caller's name if this call was an incoming call to a phone number with caller ID Lookup enabled. Otherwise, empty. */
            caller_name?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in UTC that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in UTC that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description A string describing the direction of the call. Can be: `inbound` for inbound calls, `outbound-api` for calls initiated via the REST API or `outbound-dial` for calls initiated by a `<Dial>` verb. Using [Elastic SIP Trunking](https://www.twilio.com/docs/sip-trunking), the values can be [`trunking-terminating`](https://www.twilio.com/docs/sip-trunking#termination) for outgoing calls from your communications infrastructure to the PSTN or [`trunking-originating`](https://www.twilio.com/docs/sip-trunking#origination) for incoming calls to your communications infrastructure from the PSTN. */
            direction?: string | null;
            /** @description The length of the call in seconds. This value is empty for busy, failed, unanswered, or ongoing calls. */
            duration?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The time the call ended, given as UTC in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call did not complete successfully.
             */
            end_time?: string | null;
            /** @description The forwarding phone number if this call was an incoming call forwarded from another number (depends on carrier supporting forwarding). Otherwise, empty. */
            forwarded_from?: string | null;
            /** @description The phone number, SIP address, Client identifier or SIM SID that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`. */
            from?: string | null;
            /** @description The calling phone number, SIP address, or Client identifier formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750). */
            from_formatted?: string | null;
            /** @description The Group SID associated with this call. If no Group is associated with the call, the field is empty. */
            group_sid?: string | null;
            /** @description The SID that identifies the call that created this leg. */
            parent_call_sid?: string | null;
            /** @description If the call was inbound, this is the SID of the IncomingPhoneNumber resource that received the call. If the call was outbound, it is the SID of the OutgoingCallerId resource from which the call was placed. */
            phone_number_sid?: string | null;
            /** @description The charge for this call, in the currency associated with the account. Populated after the call is completed. May not be immediately available. The price associated with a call only reflects the charge for connectivity.  Charges for other call-related features such as Answering Machine Detection, Text-To-Speech, and SIP REFER are not included in this value. */
            price?: string | null;
            /**
             * Format: currency
             * @description The currency in which `Price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g., `USD`, `EUR`, `JPY`). Always capitalized for calls.
             */
            price_unit?: string | null;
            /** @description The wait time in milliseconds before the call is placed. */
            queue_time?: string | null;
            /** @description The unique string that we created to identify this Call resource. */
            sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The start time of the call, given as UTC in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format. Empty if the call has not yet been dialed.
             */
            start_time?: string | null;
            status?: components["schemas"]["call_enum_status"];
            /**
             * Format: uri-map
             * @description A list of subresources available to this call, identified by their URIs relative to `https://api.twilio.com`.
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The phone number, SIP address, Client identifier or SIM SID that received this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`. SIM SIDs are formatted as `sim:sid`. */
            to?: string | null;
            /** @description The phone number, SIP address or Client identifier that received this call. Formatted for display. Non-North American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750). */
            to_formatted?: string | null;
            /** @description The unique identifier of the trunk resource that was used for this call. The field is empty if the call was not made using a SIP trunk or if the call is not terminated. */
            trunk_sid?: string | null;
            /** @description The URI of this resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.call.call_event": {
            /** @description Contains a dictionary representing the request of the call. */
            request?: unknown;
            /** @description Contains a dictionary representing the call response, including a list of the call events. */
            response?: unknown;
        };
        "api.v2010.account.call.call_notification": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call Notification resource. */
            account_sid?: string | null;
            /** @description The API version used to create the Call Notification resource. */
            api_version?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Call Notification resource is associated with. */
            call_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description A unique error code for the error condition that is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors). */
            error_code?: string | null;
            /** @description An integer log level that corresponds to the type of notification: `0` is ERROR, `1` is WARNING. */
            log?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date the notification was actually generated in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. Message buffering can cause this value to differ from `date_created`.
             */
            message_date?: string | null;
            /** @description The text of the notification. */
            message_text?: string | null;
            /**
             * Format: uri
             * @description The URL for more information about the error condition. This value is a page in our [Error Dictionary](https://www.twilio.com/docs/api/errors).
             */
            more_info?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method used to generate the notification. If the notification was generated during a phone call, this is the HTTP Method used to request the resource on your server. If the notification was generated by your use of our REST API, this is the HTTP method used to call the resource on our servers.
             * @enum {string|null}
             */
            request_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL of the resource that generated the notification. If the notification was generated during a phone call, this is the URL of the resource on your server that caused the notification. If the notification was generated by your use of our REST API, this is the URL of the resource you called.
             */
            request_url?: string | null;
            /** @description The unique string that that we created to identify the Call Notification resource. */
            sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.call.call_notification-instance": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call Notification resource. */
            account_sid?: string | null;
            /** @description The API version used to create the Call Notification resource. */
            api_version?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Call Notification resource is associated with. */
            call_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description A unique error code for the error condition that is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors). */
            error_code?: string | null;
            /** @description An integer log level that corresponds to the type of notification: `0` is ERROR, `1` is WARNING. */
            log?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date the notification was actually generated in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. Message buffering can cause this value to differ from `date_created`.
             */
            message_date?: string | null;
            /** @description The text of the notification. */
            message_text?: string | null;
            /**
             * Format: uri
             * @description The URL for more information about the error condition. This value is a page in our [Error Dictionary](https://www.twilio.com/docs/api/errors).
             */
            more_info?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method used to generate the notification. If the notification was generated during a phone call, this is the HTTP Method used to request the resource on your server. If the notification was generated by your use of our REST API, this is the HTTP method used to call the resource on our servers.
             * @enum {string|null}
             */
            request_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL of the resource that generated the notification. If the notification was generated during a phone call, this is the URL of the resource on your server that caused the notification. If the notification was generated by your use of our REST API, this is the URL of the resource you called.
             */
            request_url?: string | null;
            /** @description The HTTP GET or POST variables we sent to your server. However, if the notification was generated by our REST API, this contains the HTTP POST or PUT variables you sent to our API. */
            request_variables?: string | null;
            /** @description The HTTP body returned by your server. */
            response_body?: string | null;
            /** @description The HTTP headers returned by your server. */
            response_headers?: string | null;
            /** @description The unique string that that we created to identify the Call Notification resource. */
            sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.call.call_recording": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource. */
            account_sid?: string | null;
            /** @description The API version used to make the recording. */
            api_version?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Recording resource is associated with. */
            call_sid?: string | null;
            /**
             * @description The number of channels in the final recording file.  Can be: `1`, or `2`. Separating a two leg call into two separate channels of the recording file is supported in [Dial](https://www.twilio.com/docs/voice/twiml/dial#attributes-record) and [Outbound Rest API](https://www.twilio.com/docs/voice/make-calls) record options.
             * @default 0
             */
            channels: number;
            /** @description The Conference SID that identifies the conference associated with the recording, if a conference recording. */
            conference_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The length of the recording in seconds. */
            duration?: string | null;
            /** @description How to decrypt the recording if it was encrypted using [Call Recording Encryption](https://www.twilio.com/docs/voice/tutorials/voice-recording-encryption) feature. */
            encryption_details?: unknown;
            /** @description The error code that describes why the recording is `absent`. The error code is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors). This value is null if the recording `status` is not `absent`. */
            error_code?: number | null;
            /** @description The one-time cost of creating the recording in the `price_unit` currency. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency used in the `price` property. Example: `USD`.
             */
            price_unit?: string | null;
            /** @description The unique string that that we created to identify the Recording resource. */
            sid?: string | null;
            source?: components["schemas"]["call_recording_enum_source"];
            /**
             * Format: date-time-rfc-2822
             * @description The start time of the recording in GMT and in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            start_time?: string | null;
            status?: components["schemas"]["call_recording_enum_status"];
            /** @description The recorded track. Can be: `inbound`, `outbound`, or `both`. */
            track?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.call.payments": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Payments resource. */
            account_sid?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Payments resource is associated with. This will refer to the call sid that is producing the payment card (credit/ACH) information thru DTMF. */
            call_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The SID of the Payments resource. */
            sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.call.realtime_transcription": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Transcription resource. */
            account_sid?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Transcription resource is associated with. */
            call_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The user-specified name of this Transcription, if one was given when the Transcription was created. This may be used to stop the Transcription. */
            name?: string | null;
            /** @description The SID of the Transcription resource. */
            sid?: string | null;
            status?: components["schemas"]["realtime_transcription_enum_status"];
            uri?: string | null;
        };
        "api.v2010.account.call.siprec": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Siprec resource. */
            account_sid?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Siprec resource is associated with. */
            call_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The user-specified name of this Siprec, if one was given when the Siprec was created. This may be used to stop the Siprec. */
            name?: string | null;
            /** @description The SID of the Siprec resource. */
            sid?: string | null;
            status?: components["schemas"]["siprec_enum_status"];
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.call.stream": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Stream resource. */
            account_sid?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Stream resource is associated with. */
            call_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The user-specified name of this Stream, if one was given when the Stream was created. This can be used to stop the Stream. */
            name?: string | null;
            /** @description The SID of the Stream resource. */
            sid?: string | null;
            status?: components["schemas"]["stream_enum_status"];
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.call.user_defined_message": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created User Defined Message. */
            account_sid?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Message is associated with. */
            call_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this User Defined Message was created, given in RFC 2822 format.
             */
            date_created?: string | null;
            /** @description The SID that uniquely identifies this User Defined Message. */
            sid?: string | null;
        };
        "api.v2010.account.call.user_defined_message_subscription": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that subscribed to the User Defined Messages. */
            account_sid?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Message Subscription is associated with. This refers to the Call SID that is producing the User Defined Messages. */
            call_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this User Defined Message Subscription was created, given in RFC 2822 format.
             */
            date_created?: string | null;
            /** @description The SID that uniquely identifies this User Defined Message Subscription. */
            sid?: string | null;
            /** @description The URI of the User Defined Message Subscription Resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.conference": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Conference resource. */
            account_sid?: string | null;
            /** @description The API version used to create this conference. */
            api_version?: string | null;
            /** @description The call SID that caused the conference to end. */
            call_sid_ending_conference?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in UTC that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in UTC that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description A string that you assigned to describe this conference room. Maximum length is 128 characters. */
            friendly_name?: string | null;
            reason_conference_ended?: components["schemas"]["conference_enum_reason_conference_ended"];
            /** @description A string that represents the Twilio Region where the conference audio was mixed. May be `us1`, `us2`, `ie1`,  `de1`, `sg1`, `br1`, `au1`, and `jp1`. Basic conference audio will always be mixed in `us1`. Global Conference audio will be mixed nearest to the majority of participants. */
            region?: string | null;
            /** @description The unique, Twilio-provided string used to identify this Conference resource. */
            sid?: string | null;
            status?: components["schemas"]["conference_enum_status"];
            /**
             * Format: uri-map
             * @description A list of related resources identified by their URIs relative to `https://api.twilio.com`.
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of this resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.conference.conference_recording": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resource. */
            account_sid?: string | null;
            /** @description The API version used to create the recording. */
            api_version?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Conference Recording resource is associated with. */
            call_sid?: string | null;
            /**
             * @description The number of channels in the final recording file.  Can be: `1`, or `2`. Separating a two leg call into two separate channels of the recording file is supported in [Dial](https://www.twilio.com/docs/voice/twiml/dial#attributes-record) and [Outbound Rest API](https://www.twilio.com/docs/voice/make-calls) record options.
             * @default 0
             */
            channels: number;
            /** @description The Conference SID that identifies the conference associated with the recording. */
            conference_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The length of the recording in seconds. */
            duration?: string | null;
            /** @description How to decrypt the recording if it was encrypted using [Call Recording Encryption](https://www.twilio.com/docs/voice/tutorials/voice-recording-encryption) feature. */
            encryption_details?: unknown;
            /** @description The error code that describes why the recording is `absent`. The error code is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors). This value is null if the recording `status` is not `absent`. */
            error_code?: number | null;
            /** @description The one-time cost of creating the recording in the `price_unit` currency. */
            price?: string | null;
            /**
             * Format: currency
             * @description The currency used in the `price` property. Example: `USD`.
             */
            price_unit?: string | null;
            /** @description The unique string that that we created to identify the Conference Recording resource. */
            sid?: string | null;
            source?: components["schemas"]["conference_recording_enum_source"];
            /**
             * Format: date-time-rfc-2822
             * @description The start time of the recording in GMT and in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            start_time?: string | null;
            status?: components["schemas"]["conference_recording_enum_status"];
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.conference.participant": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resource. */
            account_sid?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Participant resource is associated with. */
            call_sid?: string | null;
            /** @description The SID of the participant who is being `coached`. The participant being coached is the only participant who can hear the participant who is `coaching`. */
            call_sid_to_coach?: string | null;
            /** @description Whether the participant is coaching another call. Can be: `true` or `false`. If not present, defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach` must be defined. */
            coaching?: boolean | null;
            /** @description The SID of the conference the participant is in. */
            conference_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description Whether the conference ends when the participant leaves. Can be: `true` or `false` and the default is `false`. If `true`, the conference ends and all other participants drop out when the participant leaves. */
            end_conference_on_exit?: boolean | null;
            /** @description Whether the participant is on hold. Can be `true` or `false`. */
            hold?: boolean | null;
            /** @description The user-specified label of this participant, if one was given when the participant was created. This may be used to fetch, update or delete the participant. */
            label?: string | null;
            /** @description Whether the participant is muted. Can be `true` or `false`. */
            muted?: boolean | null;
            /** @description The wait time in milliseconds before participant's call is placed. Only available in the response to a create participant request. */
            queue_time?: string | null;
            /** @description Whether the conference starts when the participant joins the conference, if it has not already started. Can be: `true` or `false` and the default is `true`. If `false` and the conference has not started, the participant is muted and hears background music until another participant starts the conference. */
            start_conference_on_enter?: boolean | null;
            status?: components["schemas"]["participant_enum_status"];
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.connect_app": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resource. */
            account_sid?: string | null;
            /**
             * Format: uri
             * @description The URL we redirect the user to after we authenticate the user and obtain authorization to access the Connect App.
             */
            authorize_redirect_url?: string | null;
            /** @description The company name set for the Connect App. */
            company_name?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `deauthorize_callback_url`.
             * @enum {string|null}
             */
            deauthorize_callback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call using the `deauthorize_callback_method` to de-authorize the Connect App.
             */
            deauthorize_callback_url?: string | null;
            /** @description The description of the Connect App. */
            description?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /**
             * Format: uri
             * @description The public URL where users can obtain more information about this Connect App.
             */
            homepage_url?: string | null;
            /** @description The set of permissions that your ConnectApp requests. */
            permissions?: components["schemas"]["connect_app_enum_permission"][] | null;
            /** @description The unique string that that we created to identify the ConnectApp resource. */
            sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.incoming_phone_number": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this IncomingPhoneNumber resource. */
            account_sid?: string | null;
            address_requirements?: components["schemas"]["incoming_phone_number_enum_address_requirement"];
            /** @description The SID of the Address resource associated with the phone number. */
            address_sid?: string | null;
            /** @description The API version used to start a new TwiML session. */
            api_version?: string | null;
            /** @description Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
            beta?: boolean | null;
            /** @description The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations. */
            bundle_sid?: string | null;
            /**
             * Format: phone-number-capabilities
             * @description The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are  `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
             */
            capabilities?: {
                fax?: boolean;
                mms?: boolean;
                sms?: boolean;
                voice?: boolean;
            } | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The SID of the emergency address configuration that we use for emergency calling from this phone number. */
            emergency_address_sid?: string | null;
            emergency_address_status?: components["schemas"]["incoming_phone_number_enum_emergency_address_status"];
            emergency_status?: components["schemas"]["incoming_phone_number_enum_emergency_status"];
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description The SID of the Identity resource that we associate with the phone number. Some regions require an Identity to meet local regulations. */
            identity_sid?: string | null;
            /** @description The phone number's origin. `twilio` identifies Twilio-owned phone numbers and `hosted` identifies hosted phone numbers. */
            origin?: string | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The unique string that that we created to identify this IncomingPhoneNumber resource. */
            sid?: string | null;
            /** @description The SID of the application that handles SMS messages sent to the phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application. */
            sms_application_sid?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs while retrieving or executing the TwiML from `sms_url`.
             */
            sms_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call when the phone number receives an incoming SMS message.
             */
            sms_url?: string | null;
            status?: string | null;
            /**
             * Format: uri
             * @description The URL we call using the `status_callback_method` to send status information to your application.
             */
            status_callback?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            status_callback_method?: "GET" | "POST" | null;
            /** @description The SID of the Trunk that handles calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
            trunk_sid?: string | null;
            /** @description The phone number type. */
            type?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The SID of the application that handles calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
            voice_application_sid?: string | null;
            /** @description Whether we look up the caller's caller-ID name from the CNAM database ($0.01 per look up). Can be: `true` or `false`. */
            voice_caller_id_lookup?: boolean | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
             */
            voice_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_method?: "GET" | "POST" | null;
            voice_receive_mode?: components["schemas"]["incoming_phone_number_enum_voice_receive_mode"];
            /**
             * Format: uri
             * @description The URL we call when the phone number receives a call. The `voice_url` will not be used if a `voice_application_sid` or a `trunk_sid` is set.
             */
            voice_url?: string | null;
        };
        "api.v2010.account.incoming_phone_number.incoming_phone_number_assigned_add_on": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource. */
            account_sid?: string | null;
            /** @description A JSON string that represents the current configuration of this Add-on installation. */
            configuration?: unknown;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description A short description of the functionality that the Add-on provides. */
            description?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description The SID of the Phone Number to which the Add-on is assigned. */
            resource_sid?: string | null;
            /** @description The unique string that that we created to identify the resource. */
            sid?: string | null;
            /**
             * Format: uri-map
             * @description A list of related resources identified by their relative URIs.
             */
            subresource_uris?: Record<string, never> | null;
            /** @description An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
            unique_name?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.incoming_phone_number.incoming_phone_number_assigned_add_on.incoming_phone_number_assigned_add_on_extension": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource. */
            account_sid?: string | null;
            /** @description The SID that uniquely identifies the assigned Add-on installation. */
            assigned_add_on_sid?: string | null;
            /** @description Whether the Extension will be invoked. */
            enabled?: boolean | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description A string that you assigned to describe the Product this Extension is used within. */
            product_name?: string | null;
            /** @description The SID of the Phone Number to which the Add-on is assigned. */
            resource_sid?: string | null;
            /** @description The unique string that that we created to identify the resource. */
            sid?: string | null;
            /** @description An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
            unique_name?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.incoming_phone_number.incoming_phone_number_local": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource. */
            account_sid?: string | null;
            address_requirements?: components["schemas"]["incoming_phone_number_local_enum_address_requirement"];
            /** @description The SID of the Address resource associated with the phone number. */
            address_sid?: string | null;
            /** @description The API version used to start a new TwiML session. */
            api_version?: string | null;
            /** @description Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
            beta?: boolean | null;
            /** @description The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations. */
            bundle_sid?: string | null;
            /**
             * Format: phone-number-capabilities
             * @description The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are  `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
             */
            capabilities?: {
                fax?: boolean;
                mms?: boolean;
                sms?: boolean;
                voice?: boolean;
            } | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The SID of the emergency address configuration that we use for emergency calling from this phone number. */
            emergency_address_sid?: string | null;
            emergency_address_status?: components["schemas"]["incoming_phone_number_local_enum_emergency_address_status"];
            emergency_status?: components["schemas"]["incoming_phone_number_local_enum_emergency_status"];
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description The SID of the Identity resource that we associate with the phone number. Some regions require an Identity to meet local regulations. */
            identity_sid?: string | null;
            /** @description The phone number's origin. `twilio` identifies Twilio-owned phone numbers and `hosted` identifies hosted phone numbers. */
            origin?: string | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The unique string that that we created to identify the resource. */
            sid?: string | null;
            /** @description The SID of the application that handles SMS messages sent to the phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application. */
            sms_application_sid?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs while retrieving or executing the TwiML from `sms_url`.
             */
            sms_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call when the phone number receives an incoming SMS message.
             */
            sms_url?: string | null;
            status?: string | null;
            /**
             * Format: uri
             * @description The URL we call using the `status_callback_method` to send status information to your application.
             */
            status_callback?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            status_callback_method?: "GET" | "POST" | null;
            /** @description The SID of the Trunk that handles calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
            trunk_sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The SID of the application that handles calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
            voice_application_sid?: string | null;
            /** @description Whether we look up the caller's caller-ID name from the CNAM database ($0.01 per look up). Can be: `true` or `false`. */
            voice_caller_id_lookup?: boolean | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
             */
            voice_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_method?: "GET" | "POST" | null;
            voice_receive_mode?: components["schemas"]["incoming_phone_number_local_enum_voice_receive_mode"];
            /**
             * Format: uri
             * @description The URL we call when this phone number receives a call. The `voice_url` will not be used if a `voice_application_sid` or a `trunk_sid` is set.
             */
            voice_url?: string | null;
        };
        "api.v2010.account.incoming_phone_number.incoming_phone_number_mobile": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource. */
            account_sid?: string | null;
            address_requirements?: components["schemas"]["incoming_phone_number_mobile_enum_address_requirement"];
            /** @description The SID of the Address resource associated with the phone number. */
            address_sid?: string | null;
            /** @description The API version used to start a new TwiML session. */
            api_version?: string | null;
            /** @description Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
            beta?: boolean | null;
            /** @description The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations. */
            bundle_sid?: string | null;
            /**
             * Format: phone-number-capabilities
             * @description The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are  `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
             */
            capabilities?: {
                fax?: boolean;
                mms?: boolean;
                sms?: boolean;
                voice?: boolean;
            } | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The SID of the emergency address configuration that we use for emergency calling from this phone number. */
            emergency_address_sid?: string | null;
            emergency_address_status?: components["schemas"]["incoming_phone_number_mobile_enum_emergency_address_status"];
            emergency_status?: components["schemas"]["incoming_phone_number_mobile_enum_emergency_status"];
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description The SID of the Identity resource that we associate with the phone number. Some regions require an Identity to meet local regulations. */
            identity_sid?: string | null;
            /** @description The phone number's origin. `twilio` identifies Twilio-owned phone numbers and `hosted` identifies hosted phone numbers. */
            origin?: string | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The unique string that that we created to identify the resource. */
            sid?: string | null;
            /** @description The SID of the application that handles SMS messages sent to the phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application. */
            sms_application_sid?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs while retrieving or executing the TwiML from `sms_url`.
             */
            sms_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call when the phone number receives an incoming SMS message.
             */
            sms_url?: string | null;
            status?: string | null;
            /**
             * Format: uri
             * @description The URL we call using the `status_callback_method` to send status information to your application.
             */
            status_callback?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            status_callback_method?: "GET" | "POST" | null;
            /** @description The SID of the Trunk that handles calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
            trunk_sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The SID of the application that handles calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
            voice_application_sid?: string | null;
            /** @description Whether we look up the caller's caller-ID name from the CNAM database ($0.01 per look up). Can be: `true` or `false`. */
            voice_caller_id_lookup?: boolean | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
             */
            voice_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_method?: "GET" | "POST" | null;
            voice_receive_mode?: components["schemas"]["incoming_phone_number_mobile_enum_voice_receive_mode"];
            /**
             * Format: uri
             * @description The URL we call when the phone number receives a call. The `voice_url` will not be used if a `voice_application_sid` or a `trunk_sid` is set.
             */
            voice_url?: string | null;
        };
        "api.v2010.account.incoming_phone_number.incoming_phone_number_toll_free": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource. */
            account_sid?: string | null;
            address_requirements?: components["schemas"]["incoming_phone_number_toll_free_enum_address_requirement"];
            /** @description The SID of the Address resource associated with the phone number. */
            address_sid?: string | null;
            /** @description The API version used to start a new TwiML session. */
            api_version?: string | null;
            /** @description Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
            beta?: boolean | null;
            /** @description The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations. */
            bundle_sid?: string | null;
            /**
             * Format: phone-number-capabilities
             * @description The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are  `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
             */
            capabilities?: {
                fax?: boolean;
                mms?: boolean;
                sms?: boolean;
                voice?: boolean;
            } | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The SID of the emergency address configuration that we use for emergency calling from this phone number. */
            emergency_address_sid?: string | null;
            emergency_address_status?: components["schemas"]["incoming_phone_number_toll_free_enum_emergency_address_status"];
            emergency_status?: components["schemas"]["incoming_phone_number_toll_free_enum_emergency_status"];
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description The SID of the Identity resource that we associate with the phone number. Some regions require an Identity to meet local regulations. */
            identity_sid?: string | null;
            /** @description The phone number's origin. `twilio` identifies Twilio-owned phone numbers and `hosted` identifies hosted phone numbers. */
            origin?: string | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The unique string that that we created to identify the resource. */
            sid?: string | null;
            /** @description The SID of the application that handles SMS messages sent to the phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application. */
            sms_application_sid?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs while retrieving or executing the TwiML from `sms_url`.
             */
            sms_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call when the phone number receives an incoming SMS message.
             */
            sms_url?: string | null;
            status?: string | null;
            /**
             * Format: uri
             * @description The URL we call using the `status_callback_method` to send status information to your application.
             */
            status_callback?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            status_callback_method?: "GET" | "POST" | null;
            /** @description The SID of the Trunk that handles calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
            trunk_sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The SID of the application that handles calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
            voice_application_sid?: string | null;
            /** @description Whether we look up the caller's caller-ID name from the CNAM database ($0.01 per look up). Can be: `true` or `false`. */
            voice_caller_id_lookup?: boolean | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
             */
            voice_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_method?: "GET" | "POST" | null;
            voice_receive_mode?: components["schemas"]["incoming_phone_number_toll_free_enum_voice_receive_mode"];
            /**
             * Format: uri
             * @description The URL we call when the phone number receives a call. The `voice_url` will not be used if a `voice_application_sid` or a `trunk_sid` is set.
             */
            voice_url?: string | null;
        };
        "api.v2010.account.key": {
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description The unique string that that we created to identify the Key resource. */
            sid?: string | null;
        };
        "api.v2010.account.message": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resource */
            account_sid?: string | null;
            /** @description The API version used to process the Message */
            api_version?: string | null;
            /** @description The text content of the message */
            body?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message resource was created
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message was sent. For an outgoing message, this is when Twilio sent the message. For an incoming message, this is when Twilio sent the HTTP request to your incoming message webhook URL.
             */
            date_sent?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3) timestamp (in GMT) of when the Message resource was last updated
             */
            date_updated?: string | null;
            direction?: components["schemas"]["message_enum_direction"];
            /** @description The [error code](https://www.twilio.com/docs/api/errors) returned if the Message `status` is `failed` or `undelivered`. If no error was encountered, the value is `null`. The value returned in this field for a specific error cause is subject to change as Twilio improves errors. Users should not use the `error_code` and `error_message` fields programmatically. */
            error_code?: number | null;
            /** @description The description of the `error_code` if the Message `status` is `failed` or `undelivered`. If no error was encountered, the value is `null`. The value returned in this field for a specific error cause is subject to change as Twilio improves errors. Users should not use the `error_code` and `error_message` fields programmatically. */
            error_message?: string | null;
            /**
             * Format: phone-number
             * @description The sender's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), [Wireless SIM](https://www.twilio.com/docs/iot/wireless/programmable-wireless-send-machine-machine-sms-commands), [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), or  [channel address](https://www.twilio.com/docs/messaging/channels) (e.g., `whatsapp:+15554449999`). For incoming messages, this is the number or channel address of the sender. For outgoing messages, this value is a Twilio phone number, alphanumeric sender ID, short code, or channel address from which the message is sent.
             */
            from?: string | null;
            /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) associated with the Message resource. A unique default value is assigned if a Messaging Service is not used. */
            messaging_service_sid?: string | null;
            /** @description The number of media files associated with the Message resource. */
            num_media?: string | null;
            /** @description The number of segments that make up the complete message. SMS message bodies that exceed the [character limit](https://www.twilio.com/docs/glossary/what-sms-character-limit) are segmented and charged as multiple messages. Note: For messages sent via a Messaging Service, `num_segments` is initially `0`, since a sender hasn't yet been assigned. */
            num_segments?: string | null;
            /** @description The amount billed for the message in the currency specified by `price_unit`. The `price` is populated after the message has been sent/received, and may not be immediately availalble. View the [Pricing page](https://www.twilio.com/en-us/pricing) for more details. */
            price?: string | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
             */
            price_unit?: string | null;
            /** @description The unique, Twilio-provided string that identifies the Message resource. */
            sid?: string | null;
            status?: components["schemas"]["message_enum_status"];
            /**
             * Format: uri-map
             * @description A list of related resources identified by their URIs relative to `https://api.twilio.com`
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The recipient's phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format) or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g. `whatsapp:+15552229999`) */
            to?: string | null;
            /** @description The URI of the Message resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.message.media": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with this Media resource. */
            account_sid?: string | null;
            /** @description The default [MIME type](https://en.wikipedia.org/wiki/Internet_media_type) of the media, for example `image/jpeg`, `image/png`, or `image/gif`. */
            content_type?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT when this Media resource was created, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT when this Media resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The SID of the Message resource that is associated with this Media resource. */
            parent_sid?: string | null;
            /** @description The unique string that identifies this Media resource. */
            sid?: string | null;
            /** @description The URI of this Media resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.message.message_feedback": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with this MessageFeedback resource. */
            account_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT when this MessageFeedback resource was created, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT when this MessageFeedback resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The SID of the Message resource associated with this MessageFeedback resource. */
            message_sid?: string | null;
            outcome?: components["schemas"]["message_feedback_enum_outcome"];
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.new_key": {
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the API Key was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the new API Key was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description The secret your application uses to sign Access Tokens and to authenticate to the REST API (you will use this as the basic-auth `password`).  **Note that for security reasons, this field is ONLY returned when the API Key is first created.** */
            secret?: string | null;
            /** @description The unique string that that we created to identify the NewKey resource. You will use this as the basic-auth `user` when authenticating to the API. */
            sid?: string | null;
        };
        "api.v2010.account.new_signing_key": {
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description The secret your application uses to sign Access Tokens and to authenticate to the REST API (you will use this as the basic-auth `password`).  **Note that for security reasons, this field is ONLY returned when the API Key is first created.** */
            secret?: string | null;
            /** @description The unique string that that we created to identify the NewSigningKey resource. */
            sid?: string | null;
        };
        "api.v2010.account.notification": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Notification resource. */
            account_sid?: string | null;
            /** @description The API version used to generate the notification. Can be empty for events that don't have a specific API version, such as incoming phone calls. */
            api_version?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Notification resource is associated with. */
            call_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description A unique error code for the error condition that is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors). */
            error_code?: string | null;
            /** @description An integer log level that corresponds to the type of notification: `0` is ERROR, `1` is WARNING. */
            log?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date the notification was actually generated in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. Message buffering can cause this value to differ from `date_created`.
             */
            message_date?: string | null;
            /** @description The text of the notification. */
            message_text?: string | null;
            /**
             * Format: uri
             * @description The URL for more information about the error condition. This value is a page in our [Error Dictionary](https://www.twilio.com/docs/api/errors).
             */
            more_info?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method used to generate the notification. If the notification was generated during a phone call, this is the HTTP Method used to request the resource on your server. If the notification was generated by your use of our REST API, this is the HTTP method used to call the resource on our servers.
             * @enum {string|null}
             */
            request_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL of the resource that generated the notification. If the notification was generated during a phone call, this is the URL of the resource on your server that caused the notification. If the notification was generated by your use of our REST API, this is the URL of the resource you called.
             */
            request_url?: string | null;
            /** @description The unique string that that we created to identify the Notification resource. */
            sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.notification-instance": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Notification resource. */
            account_sid?: string | null;
            /** @description The API version used to generate the notification. Can be empty for events that don't have a specific API version, such as incoming phone calls. */
            api_version?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Notification resource is associated with. */
            call_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description A unique error code for the error condition that is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors). */
            error_code?: string | null;
            /** @description An integer log level that corresponds to the type of notification: `0` is ERROR, `1` is WARNING. */
            log?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date the notification was actually generated in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. Message buffering can cause this value to differ from `date_created`.
             */
            message_date?: string | null;
            /** @description The text of the notification. */
            message_text?: string | null;
            /**
             * Format: uri
             * @description The URL for more information about the error condition. This value is a page in our [Error Dictionary](https://www.twilio.com/docs/api/errors).
             */
            more_info?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method used to generate the notification. If the notification was generated during a phone call, this is the HTTP Method used to request the resource on your server. If the notification was generated by your use of our REST API, this is the HTTP method used to call the resource on our servers.
             * @enum {string|null}
             */
            request_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL of the resource that generated the notification. If the notification was generated during a phone call, this is the URL of the resource on your server that caused the notification. If the notification was generated by your use of our REST API, this is the URL of the resource you called.
             */
            request_url?: string | null;
            /** @description The HTTP GET or POST variables we sent to your server. However, if the notification was generated by our REST API, this contains the HTTP POST or PUT variables you sent to our API. */
            request_variables?: string | null;
            /** @description The HTTP body returned by your server. */
            response_body?: string | null;
            /** @description The HTTP headers returned by your server. */
            response_headers?: string | null;
            /** @description The unique string that that we created to identify the Notification resource. */
            sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.outgoing_caller_id": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resource. */
            account_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /**
             * Format: phone-number
             * @description The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The unique string that that we created to identify the OutgoingCallerId resource. */
            sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.queue": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Queue resource. */
            account_sid?: string | null;
            /**
             * @description The average wait time in seconds of the members in this queue. This is calculated at the time of the request.
             * @default 0
             */
            average_wait_time: number;
            /**
             * @description The number of calls currently in the queue.
             * @default 0
             */
            current_size: number;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description A string that you assigned to describe this resource. */
            friendly_name?: string | null;
            /**
             * @description The maximum number of calls that can be in the queue. The default is 1000 and the maximum is 5000.
             * @default 0
             */
            max_size: number;
            /** @description The unique string that that we created to identify this Queue resource. */
            sid?: string | null;
            /** @description The URI of this resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.queue.member": {
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Member resource is associated with. */
            call_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that the member was enqueued, given in RFC 2822 format.
             */
            date_enqueued?: string | null;
            /**
             * @description This member's current position in the queue.
             * @default 0
             */
            position: number;
            /** @description The SID of the Queue the member is in. */
            queue_sid?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /**
             * @description The number of seconds the member has been in the queue.
             * @default 0
             */
            wait_time: number;
        };
        "api.v2010.account.recording": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource. */
            account_sid?: string | null;
            /** @description The API version used during the recording. */
            api_version?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Recording resource is associated with. This will always refer to the parent leg of a two-leg call. */
            call_sid?: string | null;
            /** @description The number of channels in the recording resource. For information on specifying the number of channels in the downloaded recording file, check out [Fetch a Recording’s media file](https://www.twilio.com/docs/voice/api/recording#download-dual-channel-media-file). */
            channels?: number | null;
            /** @description The Conference SID that identifies the conference associated with the recording, if a conference recording. */
            conference_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The length of the recording in seconds. */
            duration?: string | null;
            /** @description How to decrypt the recording if it was encrypted using [Call Recording Encryption](https://www.twilio.com/docs/voice/tutorials/voice-recording-encryption) feature. */
            encryption_details?: unknown;
            /** @description The error code that describes why the recording is `absent`. The error code is described in our [Error Dictionary](https://www.twilio.com/docs/api/errors). This value is null if the recording `status` is not `absent`. */
            error_code?: number | null;
            /**
             * Format: uri
             * @description The URL of the media file associated with this recording resource. When stored externally, this is the full URL location of the media file.
             */
            media_url?: string | null;
            /** @description The one-time cost of creating the recording in the `price_unit` currency. */
            price?: string | null;
            /** @description The currency used in the `price` property. Example: `USD`. */
            price_unit?: string | null;
            /** @description The unique string that that we created to identify the Recording resource. */
            sid?: string | null;
            source?: components["schemas"]["recording_enum_source"];
            /**
             * Format: date-time-rfc-2822
             * @description The start time of the recording in GMT and in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            start_time?: string | null;
            status?: components["schemas"]["recording_enum_status"];
            /**
             * Format: uri-map
             * @description A list of related resources identified by their relative URIs.
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.recording.recording_add_on_result": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resource. */
            account_sid?: string | null;
            /** @description The SID of the Add-on configuration. */
            add_on_configuration_sid?: string | null;
            /** @description The SID of the Add-on to which the result belongs. */
            add_on_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the result was completed specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_completed?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The SID of the recording to which the AddOnResult resource belongs. */
            reference_sid?: string | null;
            /** @description The unique string that that we created to identify the Recording AddOnResult resource. */
            sid?: string | null;
            status?: components["schemas"]["recording_add_on_result_enum_status"];
            /**
             * Format: uri-map
             * @description A list of related resources identified by their relative URIs.
             */
            subresource_uris?: Record<string, never> | null;
        };
        "api.v2010.account.recording.recording_add_on_result.recording_add_on_result_payload": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resource. */
            account_sid?: string | null;
            /** @description The SID of the Add-on configuration. */
            add_on_configuration_sid?: string | null;
            /** @description The SID of the AddOnResult to which the payload belongs. */
            add_on_result_sid?: string | null;
            /** @description The SID of the Add-on to which the result belongs. */
            add_on_sid?: string | null;
            /** @description The MIME type of the payload. */
            content_type?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The string provided by the vendor that describes the payload. */
            label?: string | null;
            /** @description The SID of the recording to which the AddOnResult resource that contains the payload belongs. */
            reference_sid?: string | null;
            /** @description The unique string that that we created to identify the Recording AddOnResult Payload resource. */
            sid?: string | null;
            /**
             * Format: uri-map
             * @description A list of related resources identified by their relative URIs.
             */
            subresource_uris?: Record<string, never> | null;
        };
        "api.v2010.account.recording.recording_add_on_result.recording_add_on_result_payload.recording_add_on_result_payload_data": {
            /**
             * Format: uri
             * @description The URL to redirect to to get the data returned by the AddOn that was previously stored.
             */
            redirect_to?: string | null;
        };
        "api.v2010.account.recording.recording_transcription": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource. */
            account_sid?: string | null;
            /** @description The API version used to create the transcription. */
            api_version?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The duration of the transcribed audio in seconds. */
            duration?: string | null;
            /** @description The charge for the transcript in the currency associated with the account. This value is populated after the transcript is complete so it may not be available immediately. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
             */
            price_unit?: string | null;
            /** @description The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) from which the transcription was created. */
            recording_sid?: string | null;
            /** @description The unique string that that we created to identify the Transcription resource. */
            sid?: string | null;
            status?: components["schemas"]["recording_transcription_enum_status"];
            /** @description The text content of the transcription. */
            transcription_text?: string | null;
            /** @description The transcription type. */
            type?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.short_code": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this ShortCode resource. */
            account_sid?: string | null;
            /** @description The API version used to start a new TwiML session when an SMS message is sent to this short code. */
            api_version?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description A string that you assigned to describe this resource. By default, the `FriendlyName` is the short code. */
            friendly_name?: string | null;
            /** @description The short code. e.g., 894546. */
            short_code?: string | null;
            /** @description The unique string that that we created to identify this ShortCode resource. */
            sid?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call the `sms_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call if an error occurs while retrieving or executing the TwiML from `sms_url`.
             */
            sms_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call the `sms_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            sms_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call when receiving an incoming SMS message to this short code.
             */
            sms_url?: string | null;
            /** @description The URI of this resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.signing_key": {
            /** Format: date-time-rfc-2822 */
            date_created?: string | null;
            /** Format: date-time-rfc-2822 */
            date_updated?: string | null;
            friendly_name?: string | null;
            sid?: string | null;
        };
        "api.v2010.account.sip": Record<string, never>;
        "api.v2010.account.sip.sip_credential_list": {
            /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) that owns this resource. */
            account_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was created, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was last updated, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_updated?: string | null;
            /** @description A human readable descriptive text that describes the CredentialList, up to 64 characters long. */
            friendly_name?: string | null;
            /** @description A 34 character string that uniquely identifies this resource. */
            sid?: string | null;
            /**
             * Format: uri-map
             * @description A list of credentials associated with this credential list.
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI for this resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.sip.sip_credential_list.sip_credential": {
            /** @description The unique id of the Account that is responsible for this resource. */
            account_sid?: string | null;
            /** @description The unique id that identifies the credential list that includes this credential. */
            credential_list_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was created, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was last updated, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_updated?: string | null;
            /** @description A 34 character string that uniquely identifies this resource. */
            sid?: string | null;
            /** @description The URI for this resource, relative to `https://api.twilio.com` */
            uri?: string | null;
            /** @description The username for this credential. */
            username?: string | null;
        };
        "api.v2010.account.sip.sip_domain": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resource. */
            account_sid?: string | null;
            /** @description The API version used to process the call. */
            api_version?: string | null;
            /** @description The types of authentication you have mapped to your domain. Can be: `IP_ACL` and `CREDENTIAL_LIST`. If you have both defined for your domain, both will be returned in a comma delimited string. If `auth_type` is not defined, the domain will not be able to receive any traffic. */
            auth_type?: string | null;
            /** @description The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be associated with. */
            byoc_trunk_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and "-" and must end with `sip.twilio.com`. */
            domain_name?: string | null;
            /** @description Whether an emergency caller sid is configured for the domain. If present, this phone number will be used as the callback for the emergency call. */
            emergency_caller_sid?: string | null;
            /** @description Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on the domain from phone numbers with validated addresses. */
            emergency_calling_enabled?: boolean | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will be negotiated on all incoming calls to this sip domain. */
            secure?: boolean | null;
            /** @description The unique string that that we created to identify the SipDomain resource. */
            sid?: string | null;
            /** @description Whether to allow SIP Endpoints to register with the domain to receive calls. */
            sip_registration?: boolean | null;
            /**
             * Format: uri-map
             * @description A list of mapping resources associated with the SIP Domain resource identified by their relative URIs.
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_fallback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call when an error occurs while retrieving or executing the TwiML requested from `voice_url`.
             */
            voice_fallback_url?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            voice_method?: "GET" | "POST" | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `voice_status_callback_url`. Either `GET` or `POST`.
             * @enum {string|null}
             */
            voice_status_callback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL that we call to pass status parameters (such as call ended) to your application.
             */
            voice_status_callback_url?: string | null;
            /**
             * Format: uri
             * @description The URL we call using the `voice_method` when the domain receives a call.
             */
            voice_url?: string | null;
        };
        "api.v2010.account.sip.sip_domain.sip_auth": Record<string, never>;
        "api.v2010.account.sip.sip_domain.sip_auth.sip_auth_calls": Record<string, never>;
        "api.v2010.account.sip.sip_domain.sip_auth.sip_auth_calls.sip_auth_calls_credential_list_mapping": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resource. */
            account_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description The unique string that that we created to identify the CredentialListMapping resource. */
            sid?: string | null;
        };
        "api.v2010.account.sip.sip_domain.sip_auth.sip_auth_calls.sip_auth_calls_ip_access_control_list_mapping": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlListMapping resource. */
            account_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description The unique string that that we created to identify the IpAccessControlListMapping resource. */
            sid?: string | null;
        };
        "api.v2010.account.sip.sip_domain.sip_auth.sip_auth_registrations": Record<string, never>;
        "api.v2010.account.sip.sip_domain.sip_auth.sip_auth_registrations.sip_auth_registrations_credential_list_mapping": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resource. */
            account_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /** @description The unique string that that we created to identify the CredentialListMapping resource. */
            sid?: string | null;
        };
        "api.v2010.account.sip.sip_domain.sip_credential_list_mapping": {
            /** @description The unique id of the Account that is responsible for this resource. */
            account_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was created, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was last updated, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_updated?: string | null;
            /** @description The unique string that is created to identify the SipDomain resource. */
            domain_sid?: string | null;
            /** @description A human readable descriptive text for this resource, up to 64 characters long. */
            friendly_name?: string | null;
            /** @description A 34 character string that uniquely identifies this resource. */
            sid?: string | null;
            /** @description The URI for this resource, relative to `https://api.twilio.com` */
            uri?: string | null;
        };
        "api.v2010.account.sip.sip_domain.sip_ip_access_control_list_mapping": {
            /** @description The unique id of the Account that is responsible for this resource. */
            account_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was created, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was last updated, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_updated?: string | null;
            /** @description The unique string that is created to identify the SipDomain resource. */
            domain_sid?: string | null;
            /** @description A human readable descriptive text for this resource, up to 64 characters long. */
            friendly_name?: string | null;
            /** @description A 34 character string that uniquely identifies this resource. */
            sid?: string | null;
            /** @description The URI for this resource, relative to `https://api.twilio.com` */
            uri?: string | null;
        };
        "api.v2010.account.sip.sip_ip_access_control_list": {
            /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) that owns this resource. */
            account_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was created, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was last updated, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_updated?: string | null;
            /** @description A human readable descriptive text, up to 255 characters long. */
            friendly_name?: string | null;
            /** @description A 34 character string that uniquely identifies this resource. */
            sid?: string | null;
            /**
             * Format: uri-map
             * @description A list of the IpAddress resources associated with this IP access control list resource.
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI for this resource, relative to `https://api.twilio.com` */
            uri?: string | null;
        };
        "api.v2010.account.sip.sip_ip_access_control_list.sip_ip_address": {
            /** @description The unique id of the Account that is responsible for this resource. */
            account_sid?: string | null;
            /**
             * @description An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used.
             * @default 0
             */
            cidr_prefix_length: number;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was created, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date that this resource was last updated, given as GMT in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
             */
            date_updated?: string | null;
            /** @description A human readable descriptive text for this resource, up to 255 characters long. */
            friendly_name?: string | null;
            /** @description The unique id of the IpAccessControlList resource that includes this resource. */
            ip_access_control_list_sid?: string | null;
            /** @description An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today. */
            ip_address?: string | null;
            /** @description A 34 character string that uniquely identifies this resource. */
            sid?: string | null;
            /** @description The URI for this resource, relative to `https://api.twilio.com` */
            uri?: string | null;
        };
        "api.v2010.account.token": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Token resource. */
            account_sid?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description An array representing the ephemeral credentials and the STUN and TURN server URIs. */
            ice_servers?: {
                credential?: string;
                url?: string;
                urls?: string;
                username?: string;
            }[] | null;
            /** @description The temporary password that the username will use when authenticating with Twilio. */
            password?: string | null;
            /** @description The duration in seconds for which the username and password are valid. */
            ttl?: string | null;
            /** @description The temporary username that uniquely identifies a Token. */
            username?: string | null;
        };
        "api.v2010.account.transcription": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource. */
            account_sid?: string | null;
            /** @description The API version used to create the transcription. */
            api_version?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The duration of the transcribed audio in seconds. */
            duration?: string | null;
            /** @description The charge for the transcript in the currency associated with the account. This value is populated after the transcript is complete so it may not be available immediately. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
             */
            price_unit?: string | null;
            /** @description The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) from which the transcription was created. */
            recording_sid?: string | null;
            /** @description The unique string that that we created to identify the Transcription resource. */
            sid?: string | null;
            status?: components["schemas"]["transcription_enum_status"];
            /** @description The text content of the transcription. */
            transcription_text?: string | null;
            /** @description The transcription type. Can only be: `fast`. */
            type?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
        };
        "api.v2010.account.usage": Record<string, never>;
        "api.v2010.account.usage.usage_record": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage. */
            account_sid?: string | null;
            /** @description The API version used to create the resource. */
            api_version?: string | null;
            /** @description Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT */
            as_of?: string | null;
            /** @description The category of usage. For more information, see [Usage Categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
            category?: string | null;
            /** @description The number of usage events, such as the number of calls. */
            count?: string | null;
            /** @description The units in which `count` is measured, such as `calls` for calls or `messages` for SMS. */
            count_unit?: string | null;
            /** @description A plain-language description of the usage category. */
            description?: string | null;
            /**
             * Format: date
             * @description The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            end_date?: string | null;
            /** @description The total price of the usage in the currency specified in `price_unit` and associated with the account. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
             */
            price_unit?: string | null;
            /**
             * Format: date
             * @description The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            start_date?: string | null;
            /**
             * Format: uri-map
             * @description A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The amount used to bill usage and measured in units described in `usage_unit`. */
            usage?: string | null;
            /** @description The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS. */
            usage_unit?: string | null;
        };
        "api.v2010.account.usage.usage_record.usage_record_all_time": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage. */
            account_sid?: string | null;
            /** @description The API version used to create the resource. */
            api_version?: string | null;
            /** @description Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT */
            as_of?: string | null;
            /** @description The category of usage. For more information, see [Usage Categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
            category?: string | null;
            /** @description The number of usage events, such as the number of calls. */
            count?: string | null;
            /** @description The units in which `count` is measured, such as `calls` for calls or `messages` for SMS. */
            count_unit?: string | null;
            /** @description A plain-language description of the usage category. */
            description?: string | null;
            /**
             * Format: date
             * @description The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            end_date?: string | null;
            /** @description The total price of the usage in the currency specified in `price_unit` and associated with the account. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
             */
            price_unit?: string | null;
            /**
             * Format: date
             * @description The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            start_date?: string | null;
            /**
             * Format: uri-map
             * @description A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The amount used to bill usage and measured in units described in `usage_unit`. */
            usage?: string | null;
            /** @description The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS. */
            usage_unit?: string | null;
        };
        "api.v2010.account.usage.usage_record.usage_record_daily": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage. */
            account_sid?: string | null;
            /** @description The API version used to create the resource. */
            api_version?: string | null;
            /** @description Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT */
            as_of?: string | null;
            /** @description The category of usage. For more information, see [Usage Categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
            category?: string | null;
            /** @description The number of usage events, such as the number of calls. */
            count?: string | null;
            /** @description The units in which `count` is measured, such as `calls` for calls or `messages` for SMS. */
            count_unit?: string | null;
            /** @description A plain-language description of the usage category. */
            description?: string | null;
            /**
             * Format: date
             * @description The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            end_date?: string | null;
            /** @description The total price of the usage in the currency specified in `price_unit` and associated with the account. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
             */
            price_unit?: string | null;
            /**
             * Format: date
             * @description The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            start_date?: string | null;
            /**
             * Format: uri-map
             * @description A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The amount used to bill usage and measured in units described in `usage_unit`. */
            usage?: string | null;
            /** @description The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS. */
            usage_unit?: string | null;
        };
        "api.v2010.account.usage.usage_record.usage_record_last_month": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage. */
            account_sid?: string | null;
            /** @description The API version used to create the resource. */
            api_version?: string | null;
            /** @description Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT */
            as_of?: string | null;
            /** @description The category of usage. For more information, see [Usage Categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
            category?: string | null;
            /** @description The number of usage events, such as the number of calls. */
            count?: string | null;
            /** @description The units in which `count` is measured, such as `calls` for calls or `messages` for SMS. */
            count_unit?: string | null;
            /** @description A plain-language description of the usage category. */
            description?: string | null;
            /**
             * Format: date
             * @description The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            end_date?: string | null;
            /** @description The total price of the usage in the currency specified in `price_unit` and associated with the account. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
             */
            price_unit?: string | null;
            /**
             * Format: date
             * @description The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            start_date?: string | null;
            /**
             * Format: uri-map
             * @description A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The amount used to bill usage and measured in units described in `usage_unit`. */
            usage?: string | null;
            /** @description The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS. */
            usage_unit?: string | null;
        };
        "api.v2010.account.usage.usage_record.usage_record_monthly": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage. */
            account_sid?: string | null;
            /** @description The API version used to create the resource. */
            api_version?: string | null;
            /** @description Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT */
            as_of?: string | null;
            /** @description The category of usage. For more information, see [Usage Categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
            category?: string | null;
            /** @description The number of usage events, such as the number of calls. */
            count?: string | null;
            /** @description The units in which `count` is measured, such as `calls` for calls or `messages` for SMS. */
            count_unit?: string | null;
            /** @description A plain-language description of the usage category. */
            description?: string | null;
            /**
             * Format: date
             * @description The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            end_date?: string | null;
            /** @description The total price of the usage in the currency specified in `price_unit` and associated with the account. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
             */
            price_unit?: string | null;
            /**
             * Format: date
             * @description The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            start_date?: string | null;
            /**
             * Format: uri-map
             * @description A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The amount used to bill usage and measured in units described in `usage_unit`. */
            usage?: string | null;
            /** @description The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS. */
            usage_unit?: string | null;
        };
        "api.v2010.account.usage.usage_record.usage_record_this_month": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage. */
            account_sid?: string | null;
            /** @description The API version used to create the resource. */
            api_version?: string | null;
            /** @description Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT */
            as_of?: string | null;
            /** @description The category of usage. For more information, see [Usage Categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
            category?: string | null;
            /** @description The number of usage events, such as the number of calls. */
            count?: string | null;
            /** @description The units in which `count` is measured, such as `calls` for calls or `messages` for SMS. */
            count_unit?: string | null;
            /** @description A plain-language description of the usage category. */
            description?: string | null;
            /**
             * Format: date
             * @description The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            end_date?: string | null;
            /** @description The total price of the usage in the currency specified in `price_unit` and associated with the account. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
             */
            price_unit?: string | null;
            /**
             * Format: date
             * @description The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            start_date?: string | null;
            /**
             * Format: uri-map
             * @description A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The amount used to bill usage and measured in units described in `usage_unit`. */
            usage?: string | null;
            /** @description The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS. */
            usage_unit?: string | null;
        };
        "api.v2010.account.usage.usage_record.usage_record_today": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage. */
            account_sid?: string | null;
            /** @description The API version used to create the resource. */
            api_version?: string | null;
            /** @description Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT */
            as_of?: string | null;
            /** @description The category of usage. For more information, see [Usage Categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
            category?: string | null;
            /** @description The number of usage events, such as the number of calls. */
            count?: string | null;
            /** @description The units in which `count` is measured, such as `calls` for calls or `messages` for SMS. */
            count_unit?: string | null;
            /** @description A plain-language description of the usage category. */
            description?: string | null;
            /**
             * Format: date
             * @description The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            end_date?: string | null;
            /** @description The total price of the usage in the currency specified in `price_unit` and associated with the account. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
             */
            price_unit?: string | null;
            /**
             * Format: date
             * @description The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            start_date?: string | null;
            /**
             * Format: uri-map
             * @description A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The amount used to bill usage and measured in units described in `usage_unit`. */
            usage?: string | null;
            /** @description The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS. */
            usage_unit?: string | null;
        };
        "api.v2010.account.usage.usage_record.usage_record_yearly": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage. */
            account_sid?: string | null;
            /** @description The API version used to create the resource. */
            api_version?: string | null;
            /** @description Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT */
            as_of?: string | null;
            /** @description The category of usage. For more information, see [Usage Categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
            category?: string | null;
            /** @description The number of usage events, such as the number of calls. */
            count?: string | null;
            /** @description The units in which `count` is measured, such as `calls` for calls or `messages` for SMS. */
            count_unit?: string | null;
            /** @description A plain-language description of the usage category. */
            description?: string | null;
            /**
             * Format: date
             * @description The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            end_date?: string | null;
            /** @description The total price of the usage in the currency specified in `price_unit` and associated with the account. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
             */
            price_unit?: string | null;
            /**
             * Format: date
             * @description The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            start_date?: string | null;
            /**
             * Format: uri-map
             * @description A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The amount used to bill usage and measured in units described in `usage_unit`. */
            usage?: string | null;
            /** @description The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS. */
            usage_unit?: string | null;
        };
        "api.v2010.account.usage.usage_record.usage_record_yesterday": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage. */
            account_sid?: string | null;
            /** @description The API version used to create the resource. */
            api_version?: string | null;
            /** @description Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT */
            as_of?: string | null;
            /** @description The category of usage. For more information, see [Usage Categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
            category?: string | null;
            /** @description The number of usage events, such as the number of calls. */
            count?: string | null;
            /** @description The units in which `count` is measured, such as `calls` for calls or `messages` for SMS. */
            count_unit?: string | null;
            /** @description A plain-language description of the usage category. */
            description?: string | null;
            /**
             * Format: date
             * @description The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            end_date?: string | null;
            /** @description The total price of the usage in the currency specified in `price_unit` and associated with the account. */
            price?: number | null;
            /**
             * Format: currency
             * @description The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
             */
            price_unit?: string | null;
            /**
             * Format: date
             * @description The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
             */
            start_date?: string | null;
            /**
             * Format: uri-map
             * @description A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
             */
            subresource_uris?: Record<string, never> | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The amount used to bill usage and measured in units described in `usage_unit`. */
            usage?: string | null;
            /** @description The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS. */
            usage_unit?: string | null;
        };
        "api.v2010.account.usage.usage_trigger": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the trigger monitors. */
            account_sid?: string | null;
            /** @description The API version used to create the resource. */
            api_version?: string | null;
            /**
             * Format: http-method
             * @description The HTTP method we use to call `callback_url`. Can be: `GET` or `POST`.
             * @enum {string|null}
             */
            callback_method?: "GET" | "POST" | null;
            /**
             * Format: uri
             * @description The URL we call using the `callback_method` when the trigger fires.
             */
            callback_url?: string | null;
            /** @description The current value of the field the trigger is watching. */
            current_value?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_created?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the trigger was last fired specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_fired?: string | null;
            /**
             * Format: date-time-rfc-2822
             * @description The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
             */
            date_updated?: string | null;
            /** @description The string that you assigned to describe the trigger. */
            friendly_name?: string | null;
            recurring?: components["schemas"]["usage_trigger_enum_recurring"];
            /** @description The unique string that that we created to identify the UsageTrigger resource. */
            sid?: string | null;
            trigger_by?: components["schemas"]["usage_trigger_enum_trigger_field"];
            /** @description The value at which the trigger will fire.  Must be a positive, numeric value. */
            trigger_value?: string | null;
            /** @description The URI of the resource, relative to `https://api.twilio.com`. */
            uri?: string | null;
            /** @description The usage category the trigger watches. Must be one of the supported [usage categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
            usage_category?: string | null;
            /** @description The URI of the [UsageRecord](https://www.twilio.com/docs/usage/api/usage-record) resource this trigger watches, relative to `https://api.twilio.com`. */
            usage_record_uri?: string | null;
        };
        "api.v2010.account.validation_request": {
            /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for the Caller ID. */
            account_sid?: string | null;
            /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Caller ID is associated with. */
            call_sid?: string | null;
            /** @description The string that you assigned to describe the resource. */
            friendly_name?: string | null;
            /**
             * Format: phone-number
             * @description The phone number to verify in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
             */
            phone_number?: string | null;
            /** @description The 6 digit validation code that someone must enter to validate the Caller ID  when `phone_number` is called. */
            validation_code?: string | null;
        };
        /**
         * @description The set of permissions that you authorized for the Connect App.  Can be: `get-all` or `post-all`.
         * @enum {string}
         */
        authorized_connect_app_enum_permission: "get-all" | "post-all";
        /** @enum {string} */
        call_enum_event: "initiated" | "ringing" | "answered" | "completed";
        /**
         * @description The status of this call. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`, `failed`, `busy` or `no-answer`. See [Call Status Values](https://www.twilio.com/docs/voice/api/call-resource#call-status-values) below for more information.
         * @enum {string}
         */
        call_enum_status: "queued" | "ringing" | "in-progress" | "completed" | "busy" | "failed" | "no-answer" | "canceled";
        /** @enum {string} */
        call_enum_update_status: "canceled" | "completed";
        /**
         * @description How the recording was created. Can be: `DialVerb`, `Conference`, `OutboundAPI`, `Trunking`, `RecordVerb`, `StartCallRecordingAPI`, and `StartConferenceRecordingAPI`.
         * @enum {string}
         */
        call_recording_enum_source: "DialVerb" | "Conference" | "OutboundAPI" | "Trunking" | "RecordVerb" | "StartCallRecordingAPI" | "StartConferenceRecordingAPI";
        /**
         * @description The status of the recording. Can be: `processing`, `completed` and `absent`. For more detailed statuses on in-progress recordings, check out how to [Update a Recording Resource](https://www.twilio.com/docs/voice/api/recording#update-a-recording-resource).
         * @enum {string}
         */
        call_recording_enum_status: "in-progress" | "paused" | "stopped" | "processing" | "completed" | "absent";
        /**
         * @description The reason why a conference ended. When a conference is in progress, will be `null`. When conference is completed, can be: `conference-ended-via-api`, `participant-with-end-conference-on-exit-left`, `participant-with-end-conference-on-exit-kicked`, `last-participant-kicked`, or `last-participant-left`.
         * @enum {string}
         */
        conference_enum_reason_conference_ended: "conference-ended-via-api" | "participant-with-end-conference-on-exit-left" | "participant-with-end-conference-on-exit-kicked" | "last-participant-kicked" | "last-participant-left";
        /**
         * @description The status of this conference. Can be: `init`, `in-progress`, or `completed`.
         * @enum {string}
         */
        conference_enum_status: "init" | "in-progress" | "completed";
        /** @enum {string} */
        conference_enum_update_status: "completed";
        /**
         * @description How the recording was created. Can be: `DialVerb`, `Conference`, `OutboundAPI`, `Trunking`, `RecordVerb`, `StartCallRecordingAPI`, `StartConferenceRecordingAPI`.
         * @enum {string}
         */
        conference_recording_enum_source: "DialVerb" | "Conference" | "OutboundAPI" | "Trunking" | "RecordVerb" | "StartCallRecordingAPI" | "StartConferenceRecordingAPI";
        /**
         * @description The status of the recording. Can be: `processing`, `completed` and `absent`. For more detailed statuses on in-progress recordings, check out how to [Update a Recording Resource](https://www.twilio.com/docs/voice/api/recording#update-a-recording-resource).
         * @enum {string}
         */
        conference_recording_enum_status: "in-progress" | "paused" | "stopped" | "processing" | "completed" | "absent";
        /**
         * @description The set of permissions that your ConnectApp requests.
         * @enum {string}
         */
        connect_app_enum_permission: "get-all" | "post-all";
        /**
         * @description Whether the phone number requires an [Address](https://www.twilio.com/docs/usage/api/address) registered with Twilio. Can be: `none`, `any`, `local`, or `foreign`.
         * @enum {string}
         */
        dependent_phone_number_enum_address_requirement: "none" | "any" | "local" | "foreign";
        /**
         * @description Whether the phone number is enabled for emergency calling.
         * @enum {string}
         */
        dependent_phone_number_enum_emergency_status: "Active" | "Inactive";
        /**
         * @description Whether the phone number requires an [Address](https://www.twilio.com/docs/usage/api/address) registered with Twilio. Can be: `none`, `any`, `local`, or `foreign`.
         * @enum {string}
         */
        incoming_phone_number_enum_address_requirement: "none" | "any" | "local" | "foreign";
        /**
         * @description The status of address registration with emergency services. A registered emergency address will be used during handling of emergency calls from this number.
         * @enum {string}
         */
        incoming_phone_number_enum_emergency_address_status: "registered" | "unregistered" | "pending-registration" | "registration-failure" | "pending-unregistration" | "unregistration-failure";
        /**
         * @description The parameter displays if emergency calling is enabled for this number. Active numbers may place emergency calls by dialing valid emergency numbers for the country.
         * @enum {string}
         */
        incoming_phone_number_enum_emergency_status: "Active" | "Inactive";
        /** @enum {string} */
        incoming_phone_number_enum_voice_receive_mode: "voice" | "fax";
        /**
         * @description Whether the phone number requires an [Address](https://www.twilio.com/docs/usage/api/address) registered with Twilio. Can be: `none`, `any`, `local`, or `foreign`.
         * @enum {string}
         */
        incoming_phone_number_local_enum_address_requirement: "none" | "any" | "local" | "foreign";
        /**
         * @description The status of address registration with emergency services. A registered emergency address will be used during handling of emergency calls from this number.
         * @enum {string}
         */
        incoming_phone_number_local_enum_emergency_address_status: "registered" | "unregistered" | "pending-registration" | "registration-failure" | "pending-unregistration" | "unregistration-failure";
        /**
         * @description The parameter displays if emergency calling is enabled for this number. Active numbers may place emergency calls by dialing valid emergency numbers for the country.
         * @enum {string}
         */
        incoming_phone_number_local_enum_emergency_status: "Active" | "Inactive";
        /** @enum {string} */
        incoming_phone_number_local_enum_voice_receive_mode: "voice" | "fax";
        /**
         * @description Whether the phone number requires an [Address](https://www.twilio.com/docs/usage/api/address) registered with Twilio. Can be: `none`, `any`, `local`, or `foreign`.
         * @enum {string}
         */
        incoming_phone_number_mobile_enum_address_requirement: "none" | "any" | "local" | "foreign";
        /**
         * @description The status of address registration with emergency services. A registered emergency address will be used during handling of emergency calls from this number.
         * @enum {string}
         */
        incoming_phone_number_mobile_enum_emergency_address_status: "registered" | "unregistered" | "pending-registration" | "registration-failure" | "pending-unregistration" | "unregistration-failure";
        /**
         * @description The parameter displays if emergency calling is enabled for this number. Active numbers may place emergency calls by dialing valid emergency numbers for the country.
         * @enum {string}
         */
        incoming_phone_number_mobile_enum_emergency_status: "Active" | "Inactive";
        /** @enum {string} */
        incoming_phone_number_mobile_enum_voice_receive_mode: "voice" | "fax";
        /**
         * @description Whether the phone number requires an [Address](https://www.twilio.com/docs/usage/api/address) registered with Twilio. Can be: `none`, `any`, `local`, or `foreign`.
         * @enum {string}
         */
        incoming_phone_number_toll_free_enum_address_requirement: "none" | "any" | "local" | "foreign";
        /**
         * @description The status of address registration with emergency services. A registered emergency address will be used during handling of emergency calls from this number.
         * @enum {string}
         */
        incoming_phone_number_toll_free_enum_emergency_address_status: "registered" | "unregistered" | "pending-registration" | "registration-failure" | "pending-unregistration" | "unregistration-failure";
        /**
         * @description The parameter displays if emergency calling is enabled for this number. Active numbers may place emergency calls by dialing valid emergency numbers for the country.
         * @enum {string}
         */
        incoming_phone_number_toll_free_enum_emergency_status: "Active" | "Inactive";
        /** @enum {string} */
        incoming_phone_number_toll_free_enum_voice_receive_mode: "voice" | "fax";
        /**
         * @description Determines if the address can be stored or obfuscated based on privacy settings
         * @enum {string}
         */
        message_enum_address_retention: "retain" | "obfuscate";
        /**
         * @description Determines if the message content can be stored or redacted based on privacy settings
         * @enum {string}
         */
        message_enum_content_retention: "retain" | "discard";
        /**
         * @description The direction of the message. Can be: `inbound` for incoming messages, `outbound-api` for messages created by the REST API, `outbound-call` for messages created during a call, or `outbound-reply` for messages created in response to an incoming message.
         * @enum {string}
         */
        message_enum_direction: "inbound" | "outbound-api" | "outbound-call" | "outbound-reply";
        /**
         * @description Include this parameter with a value of `disable` to skip any kind of risk check on the respective message request.
         * @enum {string}
         */
        message_enum_risk_check: "enable" | "disable";
        /**
         * @description For Messaging Services only: Include this parameter with a value of `fixed` in conjuction with the `send_time` parameter in order to [schedule a Message](https://www.twilio.com/docs/messaging/features/message-scheduling).
         * @enum {string}
         */
        message_enum_schedule_type: "fixed";
        /**
         * @description The status of the Message. Possible values: `accepted`, `scheduled`, `canceled`, `queued`, `sending`, `sent`, `failed`, `delivered`, `undelivered`, `receiving`, `received`, or `read` (WhatsApp only). For more information, See [detailed descriptions](https://www.twilio.com/docs/sms/api/message-resource#message-status-values).
         * @enum {string}
         */
        message_enum_status: "queued" | "sending" | "sent" | "failed" | "delivered" | "undelivered" | "receiving" | "received" | "accepted" | "scheduled" | "read" | "partially_delivered" | "canceled";
        /** @enum {string} */
        message_enum_traffic_type: "free";
        /** @enum {string} */
        message_enum_update_status: "canceled";
        /**
         * @description Reported outcome indicating whether there is confirmation that the Message recipient performed a tracked user action. Can be: `unconfirmed` or `confirmed`. For more details see [How to Optimize Message Deliverability with Message Feedback](https://www.twilio.com/docs/messaging/guides/send-message-feedback-to-twilio).
         * @enum {string}
         */
        message_feedback_enum_outcome: "confirmed" | "unconfirmed";
        /**
         * @description The status of the participant's call in a session. Can be: `queued`, `connecting`, `ringing`, `connected`, `complete`, or `failed`.
         * @enum {string}
         */
        participant_enum_status: "queued" | "connecting" | "ringing" | "connected" | "complete" | "failed";
        /**
         * @description Type of bank account if payment source is ACH. One of `consumer-checking`, `consumer-savings`, or `commercial-checking`. The default value is `consumer-checking`.
         * @enum {string}
         */
        payments_enum_bank_account_type: "consumer-checking" | "consumer-savings" | "commercial-checking";
        /**
         * @description The piece of payment information that you wish the caller to enter. Must be one of `payment-card-number`, `expiration-date`, `security-code`, `postal-code`, `bank-routing-number`, `bank-account-number`, or their `-matcher` variants for input confirmation when `RequireMatchingInputs` is enabled.
         * @enum {string}
         */
        payments_enum_capture: "payment-card-number" | "expiration-date" | "security-code" | "postal-code" | "bank-routing-number" | "bank-account-number" | "payment-card-number-matcher" | "expiration-date-matcher" | "security-code-matcher" | "postal-code-matcher";
        /**
         * @description Type of payment being captured. One of `credit-card` or `ach-debit`. The default value is `credit-card`.
         * @enum {string}
         */
        payments_enum_payment_method: "credit-card" | "ach-debit";
        /**
         * @description Indicates whether the current payment session should be cancelled or completed. When `cancel` the payment session is cancelled. When `complete`, Twilio sends the payment information to the selected Pay Connector for processing.
         * @enum {string}
         */
        payments_enum_status: "complete" | "cancel";
        /**
         * @description Indicates whether the payment method should be tokenized as a `one-time`, `reusable`, or `payment-method` token. The default value is `reusable`. Do not enter a charge amount when tokenizing. If a charge amount is entered, the payment method will be charged and not tokenized.
         * @enum {string}
         */
        payments_enum_token_type: "one-time" | "reusable" | "payment-method";
        /**
         * @description The status - one of `stopped`, `in-flight`
         * @enum {string}
         */
        realtime_transcription_enum_status: "in-progress" | "stopped";
        /**
         * @description One of `inbound_track`, `outbound_track`, `both_tracks`.
         * @enum {string}
         */
        realtime_transcription_enum_track: "inbound_track" | "outbound_track" | "both_tracks";
        /** @enum {string} */
        realtime_transcription_enum_update_status: "stopped";
        /**
         * @description The status of the result. Can be: `canceled`, `completed`, `deleted`, `failed`, `in-progress`, `init`, `processing`, `queued`.
         * @enum {string}
         */
        recording_add_on_result_enum_status: "canceled" | "completed" | "deleted" | "failed" | "in-progress" | "init" | "processing" | "queued";
        /**
         * @description How the recording was created. Can be: `DialVerb`, `Conference`, `OutboundAPI`, `Trunking`, `RecordVerb`, `StartCallRecordingAPI`, and `StartConferenceRecordingAPI`.
         * @enum {string}
         */
        recording_enum_source: "DialVerb" | "Conference" | "OutboundAPI" | "Trunking" | "RecordVerb" | "StartCallRecordingAPI" | "StartConferenceRecordingAPI";
        /**
         * @description The status of the recording. Can be: `processing`, `completed`, `absent` or `deleted`. For information about more detailed statuses on in-progress recordings, check out how to [Update a Recording Resource](https://www.twilio.com/docs/voice/api/recording#update-a-recording-resource).
         * @enum {string}
         */
        recording_enum_status: "in-progress" | "paused" | "stopped" | "processing" | "completed" | "absent" | "deleted";
        /**
         * @description The status of the transcription. Can be: `in-progress`, `completed`, `failed`.
         * @enum {string}
         */
        recording_transcription_enum_status: "in-progress" | "completed" | "failed";
        /**
         * @description The status - one of `stopped`, `in-progress`
         * @enum {string}
         */
        siprec_enum_status: "in-progress" | "stopped";
        /**
         * @description One of `inbound_track`, `outbound_track`, `both_tracks`.
         * @enum {string}
         */
        siprec_enum_track: "inbound_track" | "outbound_track" | "both_tracks";
        /** @enum {string} */
        siprec_enum_update_status: "stopped";
        /** @enum {string} */
        sms_feedback_enum_outcome: "confirmed" | "unconfirmed" | "received" | "not-received" | "delayed";
        /** @enum {string} */
        sms_message_enum_direction: "inbound" | "outbound-api" | "outbound-call" | "outbound-reply";
        /** @enum {string} */
        sms_message_enum_status: "queued" | "sending" | "sent" | "failed" | "delivered" | "undelivered" | "receiving" | "received" | "accepted" | "scheduled" | "read" | "partially_delivered" | "canceled";
        /** @enum {string} */
        sms_message_enum_update_status: "canceled";
        /**
         * @description The status of the Stream. Possible values are `stopped` and `in-progress`.
         * @enum {string}
         */
        stream_enum_status: "in-progress" | "stopped";
        /**
         * @description The tracks to be included in the Stream. Possible values are `inbound_track`, `outbound_track`, `both_tracks`. Default value is `inbound_track`.
         * @enum {string}
         */
        stream_enum_track: "inbound_track" | "outbound_track" | "both_tracks";
        /** @enum {string} */
        stream_enum_update_status: "stopped";
        /**
         * @description The status of the transcription. Can be: `in-progress`, `completed`, `failed`.
         * @enum {string}
         */
        transcription_enum_status: "in-progress" | "completed" | "failed";
        /**
         * @description The frequency of a recurring UsageTrigger.  Can be: `daily`, `monthly`, or `yearly` for recurring triggers or empty for non-recurring triggers. A trigger will only fire once during each period. Recurring times are in GMT.
         * @enum {string}
         */
        usage_trigger_enum_recurring: "daily" | "monthly" | "yearly" | "alltime";
        /**
         * @description The field in the [UsageRecord](https://www.twilio.com/docs/usage/api/usage-record) resource that fires the trigger.  Can be: `count`, `usage`, or `price`, as described in the [UsageRecords documentation](https://www.twilio.com/docs/usage/api/usage-record#usage-count-price).
         * @enum {string}
         */
        usage_trigger_enum_trigger_field: "count" | "usage" | "price";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    ListAccount: {
        parameters: {
            query?: {
                /** @description Only return the Account resources with friendly names that exactly match this name. */
                FriendlyName?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only return Account resources with the given status. Can be `closed`, `suspended` or `active`. */
                Status?: components["schemas"]["account_enum_status"];
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
                        accounts?: components["schemas"]["api.v2010.account"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateAccount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A human readable description of the account to create, defaults to `SubAccount Created at {YYYY-MM-DD HH:MM meridian}` */
                    FriendlyName?: string;
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
                    "application/json": components["schemas"]["api.v2010.account"];
                };
            };
        };
    };
    ListAddress: {
        parameters: {
            query?: {
                /** @description The `customer_name` of the Address resources to read. */
                CustomerName?: string;
                /** @description Whether the address can be associated to a number for emergency calling. */
                EmergencyEnabled?: boolean;
                /** @description The string that identifies the Address resources to read. */
                FriendlyName?: string;
                /** @description The ISO country code of the Address resources to read. */
                IsoCountry?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to read. */
                AccountSid: string;
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
                        addresses?: components["schemas"]["api.v2010.account.address"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will be responsible for the new Address resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Whether we should automatically correct the address. Can be: `true` or `false` and the default is `true`. If empty or `true`, we will correct the address you provide if necessary. If `false`, we won't alter the address you provide. */
                    AutoCorrectAddress?: boolean;
                    /** @description The city of the new address. */
                    City: string;
                    /** @description The name to associate with the new address. */
                    CustomerName: string;
                    /** @description Whether to enable emergency calling on the new address. Can be: `true` or `false`. */
                    EmergencyEnabled?: boolean;
                    /** @description A descriptive string that you create to describe the new address. It can be up to 64 characters long for Regulatory Compliance addresses and 32 characters long for Emergency addresses. */
                    FriendlyName?: string;
                    /**
                     * Format: iso-country-code
                     * @description The ISO country code of the new address.
                     */
                    IsoCountry: string;
                    /** @description The postal code of the new address. */
                    PostalCode: string;
                    /** @description The state or region of the new address. */
                    Region: string;
                    /** @description The number and street address of the new address. */
                    Street: string;
                    /** @description The additional number and street address of the address. */
                    StreetSecondary?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.address"];
                };
            };
        };
    };
    ListDependentPhoneNumber: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the DependentPhoneNumber resources to read. */
                AccountSid: string;
                /** @description The SID of the Address resource associated with the phone number. */
                AddressSid: string;
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
                        dependent_phone_numbers?: components["schemas"]["api.v2010.account.address.dependent_phone_number"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Address resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.address"];
                };
            };
        };
    };
    UpdateAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to update. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Address resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Whether we should automatically correct the address. Can be: `true` or `false` and the default is `true`. If empty or `true`, we will correct the address you provide if necessary. If `false`, we won't alter the address you provide. */
                    AutoCorrectAddress?: boolean;
                    /** @description The city of the address. */
                    City?: string;
                    /** @description The name to associate with the address. */
                    CustomerName?: string;
                    /** @description Whether to enable emergency calling on the address. Can be: `true` or `false`. */
                    EmergencyEnabled?: boolean;
                    /** @description A descriptive string that you create to describe the new address. It can be up to 64 characters long for Regulatory Compliance addresses and 32 characters long for Emergency addresses. */
                    FriendlyName?: string;
                    /** @description The postal code of the address. */
                    PostalCode?: string;
                    /** @description The state or region of the address. */
                    Region?: string;
                    /** @description The number and street address of the address. */
                    Street?: string;
                    /** @description The additional number and street address of the address. */
                    StreetSecondary?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.address"];
                };
            };
        };
    };
    DeleteAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to delete. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Address resource to delete. */
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
    ListApplication: {
        parameters: {
            query?: {
                /** @description The string that identifies the Application resources to read. */
                FriendlyName?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resources to read. */
                AccountSid: string;
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
                        applications?: components["schemas"]["api.v2010.account.application"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateApplication: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. The default value is the account's default API version. */
                    ApiVersion?: string;
                    /** @description A descriptive string that you create to describe the new application. It can be up to 64 characters long. */
                    FriendlyName?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using a POST method to send message status information to your application.
                     */
                    MessageStatusCallback?: string;
                    /** @description Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be: `true` or `false`. */
                    PublicApplicationConnectEnabled?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    SmsFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs while retrieving or executing the TwiML from `sms_url`.
                     */
                    SmsFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    SmsMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call using a POST method to send status information about SMS messages sent by the application.
                     */
                    SmsStatusCallback?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call when the phone number receives an incoming SMS message.
                     */
                    SmsUrl?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `status_callback_method` to send status information to your application.
                     */
                    StatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    /** @description Whether we should look up the caller's caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`. */
                    VoiceCallerIdLookup?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    VoiceFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
                     */
                    VoiceFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    VoiceMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call when the phone number assigned to this application receives a call.
                     */
                    VoiceUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.application"];
                };
            };
        };
    };
    FetchApplication: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Application resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.application"];
                };
            };
        };
    };
    UpdateApplication: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resources to update. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Application resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. The default value is your account's default API version. */
                    ApiVersion?: string;
                    /** @description A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
                    FriendlyName?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using a POST method to send message status information to your application.
                     */
                    MessageStatusCallback?: string;
                    /** @description Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be: `true` or `false`. */
                    PublicApplicationConnectEnabled?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    SmsFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs while retrieving or executing the TwiML from `sms_url`.
                     */
                    SmsFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    SmsMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description Same as message_status_callback: The URL we should call using a POST method to send status information about SMS messages sent by the application. Deprecated, included for backwards compatibility.
                     */
                    SmsStatusCallback?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call when the phone number receives an incoming SMS message.
                     */
                    SmsUrl?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `status_callback_method` to send status information to your application.
                     */
                    StatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    /** @description Whether we should look up the caller's caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`. */
                    VoiceCallerIdLookup?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    VoiceFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
                     */
                    VoiceFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    VoiceMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call when the phone number assigned to this application receives a call.
                     */
                    VoiceUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.application"];
                };
            };
        };
    };
    DeleteApplication: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resources to delete. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Application resource to delete. */
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
    ListAuthorizedConnectApp: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AuthorizedConnectApp resources to read. */
                AccountSid: string;
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
                        authorized_connect_apps?: components["schemas"]["api.v2010.account.authorized_connect_app"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchAuthorizedConnectApp: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AuthorizedConnectApp resource to fetch. */
                AccountSid: string;
                /** @description The SID of the Connect App to fetch. */
                ConnectAppSid: string;
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
                    "application/json": components["schemas"]["api.v2010.account.authorized_connect_app"];
                };
            };
        };
    };
    ListAvailablePhoneNumberCountry: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the available phone number Country resources. */
                AccountSid: string;
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
                        countries?: components["schemas"]["api.v2010.account.available_phone_number_country"][];
                        /** Format: uri */
                        uri?: string | null;
                    };
                };
            };
        };
    };
    FetchAvailablePhoneNumberCountry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the available phone number Country resource. */
                AccountSid: string;
                /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country to fetch available phone number information about. */
                CountryCode: string;
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
                    "application/json": components["schemas"]["api.v2010.account.available_phone_number_country"];
                };
            };
        };
    };
    ListAvailablePhoneNumberLocal: {
        parameters: {
            query?: {
                /** @description The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada. */
                AreaCode?: number;
                /** @description Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
                Beta?: boolean;
                /** @description Matching pattern to identify phone numbers. This pattern can be between 2 and 16 characters long and allows all digits (0-9) and all non-diacritic latin alphabet letters (a-z, A-Z). It accepts four meta-characters: `*`, `%`, `+`, `$`. The `*` and `%` meta-characters can appear multiple times in the pattern. To match wildcards at the beginning or end of the pattern, use `*` to match any single character or `%` to match a sequence of characters. If you use the wildcard patterns, it must include at least two non-meta-characters, and wildcards cannot be used between non-meta-characters. To match the beginning of a pattern, start the pattern with `+`. To match the end of the pattern, append the pattern with `$`. These meta-characters can't be adjacent to each other. */
                Contains?: string;
                /** @description The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada. */
                Distance?: number;
                /** @description Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeAllAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeForeignAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeLocalAddressRequired?: boolean;
                /** @description Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
                FaxEnabled?: boolean;
                /** @description Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada. */
                InLata?: string;
                /** @description Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number. */
                InLocality?: string;
                /** @description Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada. */
                InPostalCode?: string;
                /** @description Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada. */
                InRateCenter?: string;
                /** @description Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada. */
                InRegion?: string;
                /** @description Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
                MmsEnabled?: boolean;
                /** @description Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada. */
                NearLatLong?: string;
                /** @description Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada. */
                NearNumber?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
                SmsEnabled?: boolean;
                /** @description Whether the phone numbers can receive calls. Can be: `true` or `false`. */
                VoiceEnabled?: boolean;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the AvailablePhoneNumber resources. */
                AccountSid: string;
                /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country from which to read phone numbers. */
                CountryCode: string;
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
                        available_phone_numbers?: components["schemas"]["api.v2010.account.available_phone_number_country.available_phone_number_local"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    ListAvailablePhoneNumberMachineToMachine: {
        parameters: {
            query?: {
                /** @description The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada. */
                AreaCode?: number;
                /** @description Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
                Beta?: boolean;
                /** @description Matching pattern to identify phone numbers. This pattern can be between 2 and 16 characters long and allows all digits (0-9) and all non-diacritic latin alphabet letters (a-z, A-Z). It accepts four meta-characters: `*`, `%`, `+`, `$`. The `*` and `%` meta-characters can appear multiple times in the pattern. To match wildcards at the beginning or end of the pattern, use `*` to match any single character or `%` to match a sequence of characters. If you use the wildcard patterns, it must include at least two non-meta-characters, and wildcards cannot be used between non-meta-characters. To match the beginning of a pattern, start the pattern with `+`. To match the end of the pattern, append the pattern with `$`. These meta-characters can't be adjacent to each other. */
                Contains?: string;
                /** @description The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada. */
                Distance?: number;
                /** @description Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeAllAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeForeignAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeLocalAddressRequired?: boolean;
                /** @description Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
                FaxEnabled?: boolean;
                /** @description Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada. */
                InLata?: string;
                /** @description Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number. */
                InLocality?: string;
                /** @description Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada. */
                InPostalCode?: string;
                /** @description Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada. */
                InRateCenter?: string;
                /** @description Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada. */
                InRegion?: string;
                /** @description Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
                MmsEnabled?: boolean;
                /** @description Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada. */
                NearLatLong?: string;
                /** @description Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada. */
                NearNumber?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
                SmsEnabled?: boolean;
                /** @description Whether the phone numbers can receive calls. Can be: `true` or `false`. */
                VoiceEnabled?: boolean;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the AvailablePhoneNumber resources. */
                AccountSid: string;
                /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country from which to read phone numbers. */
                CountryCode: string;
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
                        available_phone_numbers?: components["schemas"]["api.v2010.account.available_phone_number_country.available_phone_number_machine_to_machine"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    ListAvailablePhoneNumberMobile: {
        parameters: {
            query?: {
                /** @description The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada. */
                AreaCode?: number;
                /** @description Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
                Beta?: boolean;
                /** @description Matching pattern to identify phone numbers. This pattern can be between 2 and 16 characters long and allows all digits (0-9) and all non-diacritic latin alphabet letters (a-z, A-Z). It accepts four meta-characters: `*`, `%`, `+`, `$`. The `*` and `%` meta-characters can appear multiple times in the pattern. To match wildcards at the beginning or end of the pattern, use `*` to match any single character or `%` to match a sequence of characters. If you use the wildcard patterns, it must include at least two non-meta-characters, and wildcards cannot be used between non-meta-characters. To match the beginning of a pattern, start the pattern with `+`. To match the end of the pattern, append the pattern with `$`. These meta-characters can't be adjacent to each other. */
                Contains?: string;
                /** @description The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada. */
                Distance?: number;
                /** @description Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeAllAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeForeignAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeLocalAddressRequired?: boolean;
                /** @description Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
                FaxEnabled?: boolean;
                /** @description Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada. */
                InLata?: string;
                /** @description Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number. */
                InLocality?: string;
                /** @description Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada. */
                InPostalCode?: string;
                /** @description Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada. */
                InRateCenter?: string;
                /** @description Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada. */
                InRegion?: string;
                /** @description Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
                MmsEnabled?: boolean;
                /** @description Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada. */
                NearLatLong?: string;
                /** @description Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada. */
                NearNumber?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
                SmsEnabled?: boolean;
                /** @description Whether the phone numbers can receive calls. Can be: `true` or `false`. */
                VoiceEnabled?: boolean;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the AvailablePhoneNumber resources. */
                AccountSid: string;
                /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country from which to read phone numbers. */
                CountryCode: string;
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
                        available_phone_numbers?: components["schemas"]["api.v2010.account.available_phone_number_country.available_phone_number_mobile"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    ListAvailablePhoneNumberNational: {
        parameters: {
            query?: {
                /** @description The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada. */
                AreaCode?: number;
                /** @description Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
                Beta?: boolean;
                /** @description Matching pattern to identify phone numbers. This pattern can be between 2 and 16 characters long and allows all digits (0-9) and all non-diacritic latin alphabet letters (a-z, A-Z). It accepts four meta-characters: `*`, `%`, `+`, `$`. The `*` and `%` meta-characters can appear multiple times in the pattern. To match wildcards at the beginning or end of the pattern, use `*` to match any single character or `%` to match a sequence of characters. If you use the wildcard patterns, it must include at least two non-meta-characters, and wildcards cannot be used between non-meta-characters. To match the beginning of a pattern, start the pattern with `+`. To match the end of the pattern, append the pattern with `$`. These meta-characters can't be adjacent to each other. */
                Contains?: string;
                /** @description The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada. */
                Distance?: number;
                /** @description Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeAllAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeForeignAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeLocalAddressRequired?: boolean;
                /** @description Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
                FaxEnabled?: boolean;
                /** @description Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada. */
                InLata?: string;
                /** @description Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number. */
                InLocality?: string;
                /** @description Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada. */
                InPostalCode?: string;
                /** @description Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada. */
                InRateCenter?: string;
                /** @description Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada. */
                InRegion?: string;
                /** @description Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
                MmsEnabled?: boolean;
                /** @description Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada. */
                NearLatLong?: string;
                /** @description Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada. */
                NearNumber?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
                SmsEnabled?: boolean;
                /** @description Whether the phone numbers can receive calls. Can be: `true` or `false`. */
                VoiceEnabled?: boolean;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the AvailablePhoneNumber resources. */
                AccountSid: string;
                /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country from which to read phone numbers. */
                CountryCode: string;
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
                        available_phone_numbers?: components["schemas"]["api.v2010.account.available_phone_number_country.available_phone_number_national"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    ListAvailablePhoneNumberSharedCost: {
        parameters: {
            query?: {
                /** @description The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada. */
                AreaCode?: number;
                /** @description Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
                Beta?: boolean;
                /** @description Matching pattern to identify phone numbers. This pattern can be between 2 and 16 characters long and allows all digits (0-9) and all non-diacritic latin alphabet letters (a-z, A-Z). It accepts four meta-characters: `*`, `%`, `+`, `$`. The `*` and `%` meta-characters can appear multiple times in the pattern. To match wildcards at the beginning or end of the pattern, use `*` to match any single character or `%` to match a sequence of characters. If you use the wildcard patterns, it must include at least two non-meta-characters, and wildcards cannot be used between non-meta-characters. To match the beginning of a pattern, start the pattern with `+`. To match the end of the pattern, append the pattern with `$`. These meta-characters can't be adjacent to each other. */
                Contains?: string;
                /** @description The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada. */
                Distance?: number;
                /** @description Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeAllAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeForeignAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeLocalAddressRequired?: boolean;
                /** @description Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
                FaxEnabled?: boolean;
                /** @description Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada. */
                InLata?: string;
                /** @description Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number. */
                InLocality?: string;
                /** @description Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada. */
                InPostalCode?: string;
                /** @description Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada. */
                InRateCenter?: string;
                /** @description Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada. */
                InRegion?: string;
                /** @description Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
                MmsEnabled?: boolean;
                /** @description Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada. */
                NearLatLong?: string;
                /** @description Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada. */
                NearNumber?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
                SmsEnabled?: boolean;
                /** @description Whether the phone numbers can receive calls. Can be: `true` or `false`. */
                VoiceEnabled?: boolean;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the AvailablePhoneNumber resources. */
                AccountSid: string;
                /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country from which to read phone numbers. */
                CountryCode: string;
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
                        available_phone_numbers?: components["schemas"]["api.v2010.account.available_phone_number_country.available_phone_number_shared_cost"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    ListAvailablePhoneNumberTollFree: {
        parameters: {
            query?: {
                /** @description The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada. */
                AreaCode?: number;
                /** @description Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
                Beta?: boolean;
                /** @description Matching pattern to identify phone numbers. This pattern can be between 2 and 16 characters long and allows all digits (0-9) and all non-diacritic latin alphabet letters (a-z, A-Z). It accepts four meta-characters: `*`, `%`, `+`, `$`. The `*` and `%` meta-characters can appear multiple times in the pattern. To match wildcards at the beginning or end of the pattern, use `*` to match any single character or `%` to match a sequence of characters. If you use the wildcard patterns, it must include at least two non-meta-characters, and wildcards cannot be used between non-meta-characters. To match the beginning of a pattern, start the pattern with `+`. To match the end of the pattern, append the pattern with `$`. These meta-characters can't be adjacent to each other. */
                Contains?: string;
                /** @description The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada. */
                Distance?: number;
                /** @description Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeAllAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeForeignAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeLocalAddressRequired?: boolean;
                /** @description Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
                FaxEnabled?: boolean;
                /** @description Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada. */
                InLata?: string;
                /** @description Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number. */
                InLocality?: string;
                /** @description Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada. */
                InPostalCode?: string;
                /** @description Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada. */
                InRateCenter?: string;
                /** @description Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada. */
                InRegion?: string;
                /** @description Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
                MmsEnabled?: boolean;
                /** @description Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada. */
                NearLatLong?: string;
                /** @description Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada. */
                NearNumber?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
                SmsEnabled?: boolean;
                /** @description Whether the phone numbers can receive calls. Can be: `true` or `false`. */
                VoiceEnabled?: boolean;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the AvailablePhoneNumber resources. */
                AccountSid: string;
                /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country from which to read phone numbers. */
                CountryCode: string;
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
                        available_phone_numbers?: components["schemas"]["api.v2010.account.available_phone_number_country.available_phone_number_toll_free"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    ListAvailablePhoneNumberVoip: {
        parameters: {
            query?: {
                /** @description The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada. */
                AreaCode?: number;
                /** @description Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
                Beta?: boolean;
                /** @description Matching pattern to identify phone numbers. This pattern can be between 2 and 16 characters long and allows all digits (0-9) and all non-diacritic latin alphabet letters (a-z, A-Z). It accepts four meta-characters: `*`, `%`, `+`, `$`. The `*` and `%` meta-characters can appear multiple times in the pattern. To match wildcards at the beginning or end of the pattern, use `*` to match any single character or `%` to match a sequence of characters. If you use the wildcard patterns, it must include at least two non-meta-characters, and wildcards cannot be used between non-meta-characters. To match the beginning of a pattern, start the pattern with `+`. To match the end of the pattern, append the pattern with `$`. These meta-characters can't be adjacent to each other. */
                Contains?: string;
                /** @description The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada. */
                Distance?: number;
                /** @description Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeAllAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeForeignAddressRequired?: boolean;
                /** @description Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
                ExcludeLocalAddressRequired?: boolean;
                /** @description Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
                FaxEnabled?: boolean;
                /** @description Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada. */
                InLata?: string;
                /** @description Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number. */
                InLocality?: string;
                /** @description Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada. */
                InPostalCode?: string;
                /** @description Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada. */
                InRateCenter?: string;
                /** @description Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada. */
                InRegion?: string;
                /** @description Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
                MmsEnabled?: boolean;
                /** @description Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada. */
                NearLatLong?: string;
                /** @description Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada. */
                NearNumber?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
                SmsEnabled?: boolean;
                /** @description Whether the phone numbers can receive calls. Can be: `true` or `false`. */
                VoiceEnabled?: boolean;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the AvailablePhoneNumber resources. */
                AccountSid: string;
                /** @description The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country from which to read phone numbers. */
                CountryCode: string;
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
                        available_phone_numbers?: components["schemas"]["api.v2010.account.available_phone_number_country.available_phone_number_voip"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchBalance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique SID identifier of the Account. */
                AccountSid: string;
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
                    "application/json": components["schemas"]["api.v2010.account.balance"];
                };
            };
        };
    };
    ListCall: {
        parameters: {
            query?: {
                /** @description Only include calls that ended on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that ended on this date. */
                EndTime?: string;
                /** @description Only include calls that ended before this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that ended before this date. */
                "EndTime<"?: string;
                /** @description Only include calls that ended on or after this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that ended on or after this date. */
                "EndTime>"?: string;
                /** @description Only include calls from this phone number, SIP address, Client identifier or SIM SID. */
                From?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only include calls spawned by calls with this SID. */
                ParentCallSid?: string;
                /** @description Only include calls that started on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that started on this date. */
                StartTime?: string;
                /** @description Only include calls that started before this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that started before this date. */
                "StartTime<"?: string;
                /** @description Only include calls that started on or after this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only calls that started on or after this date. */
                "StartTime>"?: string;
                /** @description The status of the calls to include. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`, `failed`, `busy`, or `no-answer`. */
                Status?: components["schemas"]["call_enum_status"];
                /** @description Only show calls made to this phone number, SIP address, Client identifier or SIM SID. */
                To?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call resource(s) to read. */
                AccountSid: string;
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
                        calls?: components["schemas"]["api.v2010.account.call"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateCall: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the Application resource that will handle the call, if the call will be handled by an application. */
                    ApplicationSid?: string;
                    /** @description Select whether to perform answering machine detection in the background. Default, blocks the execution of the call until Answering Machine Detection is completed. Can be: `true` or `false`. */
                    AsyncAmd?: string;
                    /**
                     * Format: uri
                     * @description The URL that we should call using the `async_amd_status_callback_method` to notify customer application whether the call was answered by human, machine or fax.
                     */
                    AsyncAmdStatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use when calling the `async_amd_status_callback` URL. Can be: `GET` or `POST` and the default is `POST`.
                     * @enum {string}
                     */
                    AsyncAmdStatusCallbackMethod?: "GET" | "POST";
                    /** @description The SID of a BYOC (Bring Your Own Carrier) trunk to route this call with. Note that `byoc` is only meaningful when `to` is a phone number; it will otherwise be ignored. (Beta) */
                    Byoc?: string;
                    /** @description The phone number, SIP address, or Client identifier that made this call. Phone numbers are in [E.164 format](https://wwnw.twilio.com/docs/glossary/what-e164) (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. */
                    CallerId?: string;
                    /** @description The Reason for the outgoing call. Use it to specify the purpose of the call that is presented on the called party's phone. (Branded Calls Beta) */
                    CallReason?: string;
                    /** @description A token string needed to invoke a forwarded call. A call_token is generated when an incoming call is received on a Twilio number. Pass an incoming call's call_token value to a forwarded call via the call_token parameter when creating a new call. A forwarded call should bear the same CallerID of the original incoming call. */
                    CallToken?: string;
                    /**
                     * Format: uri
                     * @description The URL that we should use to deliver `push call notification`.
                     */
                    ClientNotificationUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to request the `fallback_url`. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
                     * @enum {string}
                     */
                    FallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we call using the `fallback_method` if an error occurs when requesting or executing the TwiML at `url`. If an `application_sid` parameter is present, this parameter is ignored.
                     */
                    FallbackUrl?: string;
                    /**
                     * Format: endpoint
                     * @description The phone number or client identifier to use as the caller id. If using a phone number, it must be a Twilio number or a Verified [outgoing caller id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `to` parameter is a phone number, `From` must also be a phone number.
                     */
                    From: string;
                    /** @description Whether to detect if a human, answering machine, or fax has picked up the call. Can be: `Enable` or `DetectMessageEnd`. Use `Enable` if you would like us to return `AnsweredBy` as soon as the called party is identified. Use `DetectMessageEnd`, if you would like to leave a message on an answering machine. If `send_digits` is provided, this parameter is ignored. For more information, see [Answering Machine Detection](https://www.twilio.com/docs/voice/answering-machine-detection). */
                    MachineDetection?: string;
                    /** @description The number of milliseconds of initial silence after which an `unknown` AnsweredBy result will be returned. Possible Values: 2000-10000. Default: 5000. */
                    MachineDetectionSilenceTimeout?: number;
                    /** @description The number of milliseconds of silence after speech activity at which point the speech activity is considered complete. Possible Values: 500-5000. Default: 1200. */
                    MachineDetectionSpeechEndThreshold?: number;
                    /** @description The number of milliseconds that is used as the measuring stick for the length of the speech activity, where durations lower than this value will be interpreted as a human and longer than this value as a machine. Possible Values: 1000-6000. Default: 2400. */
                    MachineDetectionSpeechThreshold?: number;
                    /** @description The number of seconds that we should attempt to detect an answering machine before timing out and sending a voice request with `AnsweredBy` of `unknown`. The default timeout is 30 seconds. */
                    MachineDetectionTimeout?: number;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use when calling the `url` parameter's value. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
                     * @enum {string}
                     */
                    Method?: "GET" | "POST";
                    /** @description Whether to record the call. Can be `true` to record the phone call, or `false` to not. The default is `false`. The `recording_url` is sent to the `status_callback` URL. */
                    Record?: boolean;
                    /** @description The number of channels in the final recording. Can be: `mono` or `dual`. The default is `mono`. `mono` records both legs of the call in a single channel of the recording file. `dual` records each leg to a separate channel of the recording file. The first channel of a dual-channel recording contains the parent call and the second channel contains the child call. */
                    RecordingChannels?: string;
                    /** @description The identifier of the configuration to be used when creating and processing the recording */
                    RecordingConfigurationId?: string;
                    /** @description The URL that we call when the recording is available to be accessed. */
                    RecordingStatusCallback?: string;
                    /** @description The recording status events that will trigger calls to the URL specified in `recording_status_callback`. Can be: `in-progress`, `completed` and `absent`. Defaults to `completed`. Separate  multiple values with a space. */
                    RecordingStatusCallbackEvent?: string[];
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use when calling the `recording_status_callback` URL. Can be: `GET` or `POST` and the default is `POST`.
                     * @enum {string}
                     */
                    RecordingStatusCallbackMethod?: "GET" | "POST";
                    /** @description The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the audio that is generated from Twilio. `both` records the audio that is received and generated by Twilio. */
                    RecordingTrack?: string;
                    /** @description The string of keys to dial after connecting to the number, with a maximum length of 32 digits. Valid digits in the string include any digit (`0`-`9`), '`A`', '`B`', '`C`', '`D`', '`#`', and '`*`'. You can also use '`w`' to insert a half-second pause and '`W`' to insert a one-second pause. For example, to pause for one second after connecting and then dial extension 1234 followed by the # key, set this parameter to `W1234#`. Be sure to URL-encode this string because the '`#`' character has special meaning in a URL. If both `SendDigits` and `MachineDetection` parameters are provided, then `MachineDetection` will be ignored. */
                    SendDigits?: string;
                    /** @description The password required to authenticate the user account specified in `sip_auth_username`. */
                    SipAuthPassword?: string;
                    /** @description The username used to authenticate the caller making a SIP call. */
                    SipAuthUsername?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `status_callback_method` to send status information to your application. If no `status_callback_event` is specified, we will send the `completed` status. If an `application_sid` parameter is present, this parameter is ignored. URLs must contain a valid hostname (underscores are not permitted).
                     */
                    StatusCallback?: string;
                    /** @description The call progress events that we will send to the `status_callback` URL. Can be: `initiated`, `ringing`, `answered`, and `completed`. If no event is specified, we send the `completed` status. If you want to receive multiple events, specify each one in a separate `status_callback_event` parameter. See the code sample for [monitoring call progress](https://www.twilio.com/docs/voice/api/call-resource?code-sample=code-create-a-call-resource-and-specify-a-statuscallbackevent&code-sdk-version=json). If an `application_sid` is present, this parameter is ignored. */
                    StatusCallbackEvent?: string[];
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use when calling the `status_callback` URL. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    /** @description The maximum duration of the call in seconds. Constraints depend on account and configuration. */
                    TimeLimit?: number;
                    /** @description The integer number of seconds that we should allow the phone to ring before assuming there is no answer. The default is `60` seconds and the maximum is `600` seconds. For some call flows, we will add a 5-second buffer to the timeout value you provide. For this reason, a timeout value of 10 seconds could result in an actual timeout closer to 15 seconds. You can set this to a short time, such as `15` seconds, to hang up before reaching an answering machine or voicemail. */
                    Timeout?: number;
                    /**
                     * Format: endpoint
                     * @description The phone number, SIP address, or client identifier to call.
                     */
                    To: string;
                    /** @description Whether to trim any leading and trailing silence from the recording. Can be: `trim-silence` or `do-not-trim` and the default is `trim-silence`. */
                    Trim?: string;
                    /**
                     * Format: twiml
                     * @description TwiML instructions for the call Twilio will use without fetching Twiml from url parameter. If both `twiml` and `url` are provided then `twiml` parameter will be ignored. Max 4000 characters.
                     */
                    Twiml?: string;
                    /**
                     * Format: uri
                     * @description The absolute URL that returns the TwiML instructions for the call. We will call this URL using the `method` when the call connects. For more information, see the [Url Parameter](https://www.twilio.com/docs/voice/make-calls#specify-a-url-parameter) section in [Making Calls](https://www.twilio.com/docs/voice/make-calls).
                     */
                    Url?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.call"];
                };
            };
        };
    };
    ListCallEvent: {
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
                /** @description The unique SID identifier of the Account. */
                AccountSid: string;
                /** @description The unique SID identifier of the Call. */
                CallSid: string;
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
                        end?: number;
                        events?: components["schemas"]["api.v2010.account.call.call_event"][];
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    ListCallNotification: {
        parameters: {
            query?: {
                /** @description Only read notifications of the specified log level. Can be:  `0` to read only ERROR notifications or `1` to read only WARNING notifications. By default, all notifications are read. */
                Log?: number;
                /** @description Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
                MessageDate?: string;
                /** @description Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
                "MessageDate<"?: string;
                /** @description Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
                "MessageDate>"?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call Notification resources to read. */
                AccountSid: string;
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the Call Notification resources to read. */
                CallSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        notifications?: components["schemas"]["api.v2010.account.call.call_notification"][];
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchCallNotification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call Notification resource to fetch. */
                AccountSid: string;
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the Call Notification resource to fetch. */
                CallSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Call Notification resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.call.call_notification-instance"];
                };
            };
        };
    };
    CreatePayments: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
                /** @description The SID of the call that will create the resource. Call leg associated with this sid is expected to provide payment information thru DTMF. */
                CallSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    BankAccountType?: components["schemas"]["payments_enum_bank_account_type"];
                    /** @description A positive decimal value less than 1,000,000 to charge against the credit card or bank account. Default currency can be overwritten with `currency` field. Leave blank or set to 0 to tokenize. */
                    ChargeAmount?: number;
                    /**
                     * @description Whether to prompt the caller to confirm their payment information before submitting to the payment gateway. If `true`, the caller will hear the last 4 digits of their card or account number and must press 1 to confirm or 2 to cancel. Default is `false`.
                     * @enum {string}
                     */
                    Confirmation?: "true" | "false";
                    /** @description The currency of the `charge_amount`, formatted as [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format. The default value is `USD` and all values allowed from the Pay Connector are accepted. */
                    Currency?: string;
                    /** @description The description can be used to provide more details regarding the transaction. This information is submitted along with the payment details to the Payment Connector which are then posted on the transactions. */
                    Description?: string;
                    /** @description A unique token that will be used to ensure that multiple API calls with the same information do not result in multiple transactions. This should be a unique string value per API call and can be a randomly generated. */
                    IdempotencyKey: string;
                    /** @description A list of inputs that should be accepted. Currently only `dtmf` is supported. All digits captured during a pay session are redacted from the logs. */
                    Input?: string;
                    /** @description A positive integer that is used to validate the length of the `PostalCode` inputted by the user. User must enter this many digits. */
                    MinPostalCodeLength?: number;
                    /** @description A single-level JSON object used to pass custom parameters to payment processors. (Required for ACH payments). The information that has to be included here depends on the <Pay> Connector. [Read more](https://www.twilio.com/console/voice/pay-connectors). */
                    Parameter?: unknown;
                    /** @description This is the unique name corresponding to the Pay Connector installed in the Twilio Add-ons. Learn more about [<Pay> Connectors](https://www.twilio.com/console/voice/pay-connectors). The default value is `Default`. */
                    PaymentConnector?: string;
                    PaymentMethod?: components["schemas"]["payments_enum_payment_method"];
                    /** @description Indicates whether the credit card postal code (zip code) is a required piece of payment information that must be provided by the caller. The default is `true`. */
                    PostalCode?: boolean;
                    /** @description A comma-separated list of payment information fields that require the caller to enter the same value twice for confirmation. Supported values are `payment-card-number`, `expiration-date`, `security-code`, and `postal-code`. */
                    RequireMatchingInputs?: string;
                    /** @description Indicates whether the credit card security code is a required piece of payment information that must be provided by the caller. The default is `true`. */
                    SecurityCode?: boolean;
                    /**
                     * Format: uri
                     * @description Provide an absolute or relative URL to receive status updates regarding your Pay session. Read more about the [expected StatusCallback values](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback)
                     */
                    StatusCallback: string;
                    /** @description The number of seconds that <Pay> should wait for the caller to press a digit between each subsequent digit, after the first one, before moving on to validate the digits captured. The default is `5`, maximum is `600`. */
                    Timeout?: number;
                    TokenType?: components["schemas"]["payments_enum_token_type"];
                    /** @description Credit card types separated by space that Pay should accept. The default value is `visa mastercard amex` */
                    ValidCardTypes?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.call.payments"];
                };
            };
        };
    };
    UpdatePayments: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will update the resource. */
                AccountSid: string;
                /** @description The SID of the call that will update the resource. This should be the same call sid that was used to create payments resource. */
                CallSid: string;
                /** @description The SID of Payments session that needs to be updated. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    Capture?: components["schemas"]["payments_enum_capture"];
                    /** @description A unique token that will be used to ensure that multiple API calls with the same information do not result in multiple transactions. This should be a unique string value per API call and can be a randomly generated. */
                    IdempotencyKey: string;
                    Status?: components["schemas"]["payments_enum_status"];
                    /**
                     * Format: uri
                     * @description Provide an absolute or relative URL to receive status updates regarding your Pay session. Read more about the [Update](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback-update) and [Complete/Cancel](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback-cancelcomplete) POST requests.
                     */
                    StatusCallback: string;
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
                    "application/json": components["schemas"]["api.v2010.account.call.payments"];
                };
            };
        };
    };
    ListCallRecording: {
        parameters: {
            query?: {
                /** @description The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
                DateCreated?: string;
                /** @description The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
                "DateCreated<"?: string;
                /** @description The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
                "DateCreated>"?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resources to read. */
                AccountSid: string;
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read. */
                CallSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        recordings?: components["schemas"]["api.v2010.account.call.call_recording"][];
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateCallRecording: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
                /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) to associate the resource with. */
                CallSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The number of channels used in the recording. Can be: `mono` or `dual` and the default is `mono`. `mono` records all parties of the call into one channel. `dual` records each party of a 2-party call into separate channels. */
                    RecordingChannels?: string;
                    /** @description The identifier of the configuration to be used when creating and processing the recording */
                    RecordingConfigurationId?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `recording_status_callback_method` on each recording event specified in  `recording_status_callback_event`. For more information, see [RecordingStatusCallback parameters](https://www.twilio.com/docs/voice/api/recording#recordingstatuscallback).
                     */
                    RecordingStatusCallback?: string;
                    /** @description The recording status events on which we should call the `recording_status_callback` URL. Can be: `in-progress`, `completed` and `absent` and the default is `completed`. Separate multiple event values with a space. */
                    RecordingStatusCallbackEvent?: string[];
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `recording_status_callback`. Can be: `GET` or `POST` and the default is `POST`.
                     * @enum {string}
                     */
                    RecordingStatusCallbackMethod?: "GET" | "POST";
                    /** @description The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the audio that is generated from Twilio. `both` records the audio that is received and generated by Twilio. */
                    RecordingTrack?: string;
                    /** @description Whether to trim any leading and trailing silence in the recording. Can be: `trim-silence` or `do-not-trim` and the default is `do-not-trim`. `trim-silence` trims the silence from the beginning and end of the recording and `do-not-trim` does not. */
                    Trim?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.call.call_recording"];
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
                    "application/json": components["schemas"]["api.v2010.account.call.call_recording"];
                };
            };
        };
    };
    FetchCallRecording: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource to fetch. */
                AccountSid: string;
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource to fetch. */
                CallSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Recording resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.call.call_recording"];
                };
            };
        };
    };
    UpdateCallRecording: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource to update. */
                AccountSid: string;
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource to update. */
                CallSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Recording resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Whether to record during a pause. Can be: `skip` or `silence` and the default is `silence`. `skip` does not record during the pause period, while `silence` will replace the actual audio of the call with silence during the pause period. This parameter only applies when setting `status` is set to `paused`. */
                    PauseBehavior?: string;
                    Status: components["schemas"]["call_recording_enum_status"];
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
                    "application/json": components["schemas"]["api.v2010.account.call.call_recording"];
                };
            };
            /** @description Request Timeout */
            408: {
                headers: {
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
    DeleteCallRecording: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resources to delete. */
                AccountSid: string;
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to delete. */
                CallSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Recording resource to delete. */
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
    CreateSiprec: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Siprec resource. */
                AccountSid: string;
                /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Siprec resource is associated with. */
                CallSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Unique name used when configuring the connector via Marketplace Add-on. */
                    ConnectorName?: string;
                    /** @description The user-specified name of this Siprec, if one was given when the Siprec was created. This may be used to stop the Siprec. */
                    Name?: string;
                    /** @description Parameter name */
                    "Parameter1.Name"?: string;
                    /** @description Parameter value */
                    "Parameter1.Value"?: string;
                    /** @description Parameter name */
                    "Parameter2.Name"?: string;
                    /** @description Parameter value */
                    "Parameter2.Value"?: string;
                    /** @description Parameter name */
                    "Parameter3.Name"?: string;
                    /** @description Parameter value */
                    "Parameter3.Value"?: string;
                    /** @description Parameter name */
                    "Parameter4.Name"?: string;
                    /** @description Parameter value */
                    "Parameter4.Value"?: string;
                    /** @description Parameter name */
                    "Parameter5.Name"?: string;
                    /** @description Parameter value */
                    "Parameter5.Value"?: string;
                    /** @description Parameter name */
                    "Parameter6.Name"?: string;
                    /** @description Parameter value */
                    "Parameter6.Value"?: string;
                    /** @description Parameter name */
                    "Parameter7.Name"?: string;
                    /** @description Parameter value */
                    "Parameter7.Value"?: string;
                    /** @description Parameter name */
                    "Parameter8.Name"?: string;
                    /** @description Parameter value */
                    "Parameter8.Value"?: string;
                    /** @description Parameter name */
                    "Parameter9.Name"?: string;
                    /** @description Parameter value */
                    "Parameter9.Value"?: string;
                    /** @description Parameter name */
                    "Parameter10.Name"?: string;
                    /** @description Parameter value */
                    "Parameter10.Value"?: string;
                    /** @description Parameter name */
                    "Parameter11.Name"?: string;
                    /** @description Parameter value */
                    "Parameter11.Value"?: string;
                    /** @description Parameter name */
                    "Parameter12.Name"?: string;
                    /** @description Parameter value */
                    "Parameter12.Value"?: string;
                    /** @description Parameter name */
                    "Parameter13.Name"?: string;
                    /** @description Parameter value */
                    "Parameter13.Value"?: string;
                    /** @description Parameter name */
                    "Parameter14.Name"?: string;
                    /** @description Parameter value */
                    "Parameter14.Value"?: string;
                    /** @description Parameter name */
                    "Parameter15.Name"?: string;
                    /** @description Parameter value */
                    "Parameter15.Value"?: string;
                    /** @description Parameter name */
                    "Parameter16.Name"?: string;
                    /** @description Parameter value */
                    "Parameter16.Value"?: string;
                    /** @description Parameter name */
                    "Parameter17.Name"?: string;
                    /** @description Parameter value */
                    "Parameter17.Value"?: string;
                    /** @description Parameter name */
                    "Parameter18.Name"?: string;
                    /** @description Parameter value */
                    "Parameter18.Value"?: string;
                    /** @description Parameter name */
                    "Parameter19.Name"?: string;
                    /** @description Parameter value */
                    "Parameter19.Value"?: string;
                    /** @description Parameter name */
                    "Parameter20.Name"?: string;
                    /** @description Parameter value */
                    "Parameter20.Value"?: string;
                    /** @description Parameter name */
                    "Parameter21.Name"?: string;
                    /** @description Parameter value */
                    "Parameter21.Value"?: string;
                    /** @description Parameter name */
                    "Parameter22.Name"?: string;
                    /** @description Parameter value */
                    "Parameter22.Value"?: string;
                    /** @description Parameter name */
                    "Parameter23.Name"?: string;
                    /** @description Parameter value */
                    "Parameter23.Value"?: string;
                    /** @description Parameter name */
                    "Parameter24.Name"?: string;
                    /** @description Parameter value */
                    "Parameter24.Value"?: string;
                    /** @description Parameter name */
                    "Parameter25.Name"?: string;
                    /** @description Parameter value */
                    "Parameter25.Value"?: string;
                    /** @description Parameter name */
                    "Parameter26.Name"?: string;
                    /** @description Parameter value */
                    "Parameter26.Value"?: string;
                    /** @description Parameter name */
                    "Parameter27.Name"?: string;
                    /** @description Parameter value */
                    "Parameter27.Value"?: string;
                    /** @description Parameter name */
                    "Parameter28.Name"?: string;
                    /** @description Parameter value */
                    "Parameter28.Value"?: string;
                    /** @description Parameter name */
                    "Parameter29.Name"?: string;
                    /** @description Parameter value */
                    "Parameter29.Value"?: string;
                    /** @description Parameter name */
                    "Parameter30.Name"?: string;
                    /** @description Parameter value */
                    "Parameter30.Value"?: string;
                    /** @description Parameter name */
                    "Parameter31.Name"?: string;
                    /** @description Parameter value */
                    "Parameter31.Value"?: string;
                    /** @description Parameter name */
                    "Parameter32.Name"?: string;
                    /** @description Parameter value */
                    "Parameter32.Value"?: string;
                    /** @description Parameter name */
                    "Parameter33.Name"?: string;
                    /** @description Parameter value */
                    "Parameter33.Value"?: string;
                    /** @description Parameter name */
                    "Parameter34.Name"?: string;
                    /** @description Parameter value */
                    "Parameter34.Value"?: string;
                    /** @description Parameter name */
                    "Parameter35.Name"?: string;
                    /** @description Parameter value */
                    "Parameter35.Value"?: string;
                    /** @description Parameter name */
                    "Parameter36.Name"?: string;
                    /** @description Parameter value */
                    "Parameter36.Value"?: string;
                    /** @description Parameter name */
                    "Parameter37.Name"?: string;
                    /** @description Parameter value */
                    "Parameter37.Value"?: string;
                    /** @description Parameter name */
                    "Parameter38.Name"?: string;
                    /** @description Parameter value */
                    "Parameter38.Value"?: string;
                    /** @description Parameter name */
                    "Parameter39.Name"?: string;
                    /** @description Parameter value */
                    "Parameter39.Value"?: string;
                    /** @description Parameter name */
                    "Parameter40.Name"?: string;
                    /** @description Parameter value */
                    "Parameter40.Value"?: string;
                    /** @description Parameter name */
                    "Parameter41.Name"?: string;
                    /** @description Parameter value */
                    "Parameter41.Value"?: string;
                    /** @description Parameter name */
                    "Parameter42.Name"?: string;
                    /** @description Parameter value */
                    "Parameter42.Value"?: string;
                    /** @description Parameter name */
                    "Parameter43.Name"?: string;
                    /** @description Parameter value */
                    "Parameter43.Value"?: string;
                    /** @description Parameter name */
                    "Parameter44.Name"?: string;
                    /** @description Parameter value */
                    "Parameter44.Value"?: string;
                    /** @description Parameter name */
                    "Parameter45.Name"?: string;
                    /** @description Parameter value */
                    "Parameter45.Value"?: string;
                    /** @description Parameter name */
                    "Parameter46.Name"?: string;
                    /** @description Parameter value */
                    "Parameter46.Value"?: string;
                    /** @description Parameter name */
                    "Parameter47.Name"?: string;
                    /** @description Parameter value */
                    "Parameter47.Value"?: string;
                    /** @description Parameter name */
                    "Parameter48.Name"?: string;
                    /** @description Parameter value */
                    "Parameter48.Value"?: string;
                    /** @description Parameter name */
                    "Parameter49.Name"?: string;
                    /** @description Parameter value */
                    "Parameter49.Value"?: string;
                    /** @description Parameter name */
                    "Parameter50.Name"?: string;
                    /** @description Parameter value */
                    "Parameter50.Value"?: string;
                    /** @description Parameter name */
                    "Parameter51.Name"?: string;
                    /** @description Parameter value */
                    "Parameter51.Value"?: string;
                    /** @description Parameter name */
                    "Parameter52.Name"?: string;
                    /** @description Parameter value */
                    "Parameter52.Value"?: string;
                    /** @description Parameter name */
                    "Parameter53.Name"?: string;
                    /** @description Parameter value */
                    "Parameter53.Value"?: string;
                    /** @description Parameter name */
                    "Parameter54.Name"?: string;
                    /** @description Parameter value */
                    "Parameter54.Value"?: string;
                    /** @description Parameter name */
                    "Parameter55.Name"?: string;
                    /** @description Parameter value */
                    "Parameter55.Value"?: string;
                    /** @description Parameter name */
                    "Parameter56.Name"?: string;
                    /** @description Parameter value */
                    "Parameter56.Value"?: string;
                    /** @description Parameter name */
                    "Parameter57.Name"?: string;
                    /** @description Parameter value */
                    "Parameter57.Value"?: string;
                    /** @description Parameter name */
                    "Parameter58.Name"?: string;
                    /** @description Parameter value */
                    "Parameter58.Value"?: string;
                    /** @description Parameter name */
                    "Parameter59.Name"?: string;
                    /** @description Parameter value */
                    "Parameter59.Value"?: string;
                    /** @description Parameter name */
                    "Parameter60.Name"?: string;
                    /** @description Parameter value */
                    "Parameter60.Value"?: string;
                    /** @description Parameter name */
                    "Parameter61.Name"?: string;
                    /** @description Parameter value */
                    "Parameter61.Value"?: string;
                    /** @description Parameter name */
                    "Parameter62.Name"?: string;
                    /** @description Parameter value */
                    "Parameter62.Value"?: string;
                    /** @description Parameter name */
                    "Parameter63.Name"?: string;
                    /** @description Parameter value */
                    "Parameter63.Value"?: string;
                    /** @description Parameter name */
                    "Parameter64.Name"?: string;
                    /** @description Parameter value */
                    "Parameter64.Value"?: string;
                    /** @description Parameter name */
                    "Parameter65.Name"?: string;
                    /** @description Parameter value */
                    "Parameter65.Value"?: string;
                    /** @description Parameter name */
                    "Parameter66.Name"?: string;
                    /** @description Parameter value */
                    "Parameter66.Value"?: string;
                    /** @description Parameter name */
                    "Parameter67.Name"?: string;
                    /** @description Parameter value */
                    "Parameter67.Value"?: string;
                    /** @description Parameter name */
                    "Parameter68.Name"?: string;
                    /** @description Parameter value */
                    "Parameter68.Value"?: string;
                    /** @description Parameter name */
                    "Parameter69.Name"?: string;
                    /** @description Parameter value */
                    "Parameter69.Value"?: string;
                    /** @description Parameter name */
                    "Parameter70.Name"?: string;
                    /** @description Parameter value */
                    "Parameter70.Value"?: string;
                    /** @description Parameter name */
                    "Parameter71.Name"?: string;
                    /** @description Parameter value */
                    "Parameter71.Value"?: string;
                    /** @description Parameter name */
                    "Parameter72.Name"?: string;
                    /** @description Parameter value */
                    "Parameter72.Value"?: string;
                    /** @description Parameter name */
                    "Parameter73.Name"?: string;
                    /** @description Parameter value */
                    "Parameter73.Value"?: string;
                    /** @description Parameter name */
                    "Parameter74.Name"?: string;
                    /** @description Parameter value */
                    "Parameter74.Value"?: string;
                    /** @description Parameter name */
                    "Parameter75.Name"?: string;
                    /** @description Parameter value */
                    "Parameter75.Value"?: string;
                    /** @description Parameter name */
                    "Parameter76.Name"?: string;
                    /** @description Parameter value */
                    "Parameter76.Value"?: string;
                    /** @description Parameter name */
                    "Parameter77.Name"?: string;
                    /** @description Parameter value */
                    "Parameter77.Value"?: string;
                    /** @description Parameter name */
                    "Parameter78.Name"?: string;
                    /** @description Parameter value */
                    "Parameter78.Value"?: string;
                    /** @description Parameter name */
                    "Parameter79.Name"?: string;
                    /** @description Parameter value */
                    "Parameter79.Value"?: string;
                    /** @description Parameter name */
                    "Parameter80.Name"?: string;
                    /** @description Parameter value */
                    "Parameter80.Value"?: string;
                    /** @description Parameter name */
                    "Parameter81.Name"?: string;
                    /** @description Parameter value */
                    "Parameter81.Value"?: string;
                    /** @description Parameter name */
                    "Parameter82.Name"?: string;
                    /** @description Parameter value */
                    "Parameter82.Value"?: string;
                    /** @description Parameter name */
                    "Parameter83.Name"?: string;
                    /** @description Parameter value */
                    "Parameter83.Value"?: string;
                    /** @description Parameter name */
                    "Parameter84.Name"?: string;
                    /** @description Parameter value */
                    "Parameter84.Value"?: string;
                    /** @description Parameter name */
                    "Parameter85.Name"?: string;
                    /** @description Parameter value */
                    "Parameter85.Value"?: string;
                    /** @description Parameter name */
                    "Parameter86.Name"?: string;
                    /** @description Parameter value */
                    "Parameter86.Value"?: string;
                    /** @description Parameter name */
                    "Parameter87.Name"?: string;
                    /** @description Parameter value */
                    "Parameter87.Value"?: string;
                    /** @description Parameter name */
                    "Parameter88.Name"?: string;
                    /** @description Parameter value */
                    "Parameter88.Value"?: string;
                    /** @description Parameter name */
                    "Parameter89.Name"?: string;
                    /** @description Parameter value */
                    "Parameter89.Value"?: string;
                    /** @description Parameter name */
                    "Parameter90.Name"?: string;
                    /** @description Parameter value */
                    "Parameter90.Value"?: string;
                    /** @description Parameter name */
                    "Parameter91.Name"?: string;
                    /** @description Parameter value */
                    "Parameter91.Value"?: string;
                    /** @description Parameter name */
                    "Parameter92.Name"?: string;
                    /** @description Parameter value */
                    "Parameter92.Value"?: string;
                    /** @description Parameter name */
                    "Parameter93.Name"?: string;
                    /** @description Parameter value */
                    "Parameter93.Value"?: string;
                    /** @description Parameter name */
                    "Parameter94.Name"?: string;
                    /** @description Parameter value */
                    "Parameter94.Value"?: string;
                    /** @description Parameter name */
                    "Parameter95.Name"?: string;
                    /** @description Parameter value */
                    "Parameter95.Value"?: string;
                    /** @description Parameter name */
                    "Parameter96.Name"?: string;
                    /** @description Parameter value */
                    "Parameter96.Value"?: string;
                    /** @description Parameter name */
                    "Parameter97.Name"?: string;
                    /** @description Parameter value */
                    "Parameter97.Value"?: string;
                    /** @description Parameter name */
                    "Parameter98.Name"?: string;
                    /** @description Parameter value */
                    "Parameter98.Value"?: string;
                    /** @description Parameter name */
                    "Parameter99.Name"?: string;
                    /** @description Parameter value */
                    "Parameter99.Value"?: string;
                    /**
                     * Format: uri
                     * @description Absolute URL of the status callback.
                     */
                    StatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The http method for the status_callback (one of GET, POST).
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    Track?: components["schemas"]["siprec_enum_track"];
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
                    "application/json": components["schemas"]["api.v2010.account.call.siprec"];
                };
            };
        };
    };
    UpdateSiprec: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Siprec resource. */
                AccountSid: string;
                /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Siprec resource is associated with. */
                CallSid: string;
                /** @description The SID of the Siprec resource, or the `name` used when creating the resource */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    Status: components["schemas"]["siprec_enum_update_status"];
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
                    "application/json": components["schemas"]["api.v2010.account.call.siprec"];
                };
            };
        };
    };
    CreateStream: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Stream resource. */
                AccountSid: string;
                /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Stream resource is associated with. */
                CallSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The user-specified name of this Stream, if one was given when the Stream was created. This can be used to stop the Stream. */
                    Name?: string;
                    /** @description Parameter name */
                    "Parameter1.Name"?: string;
                    /** @description Parameter value */
                    "Parameter1.Value"?: string;
                    /** @description Parameter name */
                    "Parameter2.Name"?: string;
                    /** @description Parameter value */
                    "Parameter2.Value"?: string;
                    /** @description Parameter name */
                    "Parameter3.Name"?: string;
                    /** @description Parameter value */
                    "Parameter3.Value"?: string;
                    /** @description Parameter name */
                    "Parameter4.Name"?: string;
                    /** @description Parameter value */
                    "Parameter4.Value"?: string;
                    /** @description Parameter name */
                    "Parameter5.Name"?: string;
                    /** @description Parameter value */
                    "Parameter5.Value"?: string;
                    /** @description Parameter name */
                    "Parameter6.Name"?: string;
                    /** @description Parameter value */
                    "Parameter6.Value"?: string;
                    /** @description Parameter name */
                    "Parameter7.Name"?: string;
                    /** @description Parameter value */
                    "Parameter7.Value"?: string;
                    /** @description Parameter name */
                    "Parameter8.Name"?: string;
                    /** @description Parameter value */
                    "Parameter8.Value"?: string;
                    /** @description Parameter name */
                    "Parameter9.Name"?: string;
                    /** @description Parameter value */
                    "Parameter9.Value"?: string;
                    /** @description Parameter name */
                    "Parameter10.Name"?: string;
                    /** @description Parameter value */
                    "Parameter10.Value"?: string;
                    /** @description Parameter name */
                    "Parameter11.Name"?: string;
                    /** @description Parameter value */
                    "Parameter11.Value"?: string;
                    /** @description Parameter name */
                    "Parameter12.Name"?: string;
                    /** @description Parameter value */
                    "Parameter12.Value"?: string;
                    /** @description Parameter name */
                    "Parameter13.Name"?: string;
                    /** @description Parameter value */
                    "Parameter13.Value"?: string;
                    /** @description Parameter name */
                    "Parameter14.Name"?: string;
                    /** @description Parameter value */
                    "Parameter14.Value"?: string;
                    /** @description Parameter name */
                    "Parameter15.Name"?: string;
                    /** @description Parameter value */
                    "Parameter15.Value"?: string;
                    /** @description Parameter name */
                    "Parameter16.Name"?: string;
                    /** @description Parameter value */
                    "Parameter16.Value"?: string;
                    /** @description Parameter name */
                    "Parameter17.Name"?: string;
                    /** @description Parameter value */
                    "Parameter17.Value"?: string;
                    /** @description Parameter name */
                    "Parameter18.Name"?: string;
                    /** @description Parameter value */
                    "Parameter18.Value"?: string;
                    /** @description Parameter name */
                    "Parameter19.Name"?: string;
                    /** @description Parameter value */
                    "Parameter19.Value"?: string;
                    /** @description Parameter name */
                    "Parameter20.Name"?: string;
                    /** @description Parameter value */
                    "Parameter20.Value"?: string;
                    /** @description Parameter name */
                    "Parameter21.Name"?: string;
                    /** @description Parameter value */
                    "Parameter21.Value"?: string;
                    /** @description Parameter name */
                    "Parameter22.Name"?: string;
                    /** @description Parameter value */
                    "Parameter22.Value"?: string;
                    /** @description Parameter name */
                    "Parameter23.Name"?: string;
                    /** @description Parameter value */
                    "Parameter23.Value"?: string;
                    /** @description Parameter name */
                    "Parameter24.Name"?: string;
                    /** @description Parameter value */
                    "Parameter24.Value"?: string;
                    /** @description Parameter name */
                    "Parameter25.Name"?: string;
                    /** @description Parameter value */
                    "Parameter25.Value"?: string;
                    /** @description Parameter name */
                    "Parameter26.Name"?: string;
                    /** @description Parameter value */
                    "Parameter26.Value"?: string;
                    /** @description Parameter name */
                    "Parameter27.Name"?: string;
                    /** @description Parameter value */
                    "Parameter27.Value"?: string;
                    /** @description Parameter name */
                    "Parameter28.Name"?: string;
                    /** @description Parameter value */
                    "Parameter28.Value"?: string;
                    /** @description Parameter name */
                    "Parameter29.Name"?: string;
                    /** @description Parameter value */
                    "Parameter29.Value"?: string;
                    /** @description Parameter name */
                    "Parameter30.Name"?: string;
                    /** @description Parameter value */
                    "Parameter30.Value"?: string;
                    /** @description Parameter name */
                    "Parameter31.Name"?: string;
                    /** @description Parameter value */
                    "Parameter31.Value"?: string;
                    /** @description Parameter name */
                    "Parameter32.Name"?: string;
                    /** @description Parameter value */
                    "Parameter32.Value"?: string;
                    /** @description Parameter name */
                    "Parameter33.Name"?: string;
                    /** @description Parameter value */
                    "Parameter33.Value"?: string;
                    /** @description Parameter name */
                    "Parameter34.Name"?: string;
                    /** @description Parameter value */
                    "Parameter34.Value"?: string;
                    /** @description Parameter name */
                    "Parameter35.Name"?: string;
                    /** @description Parameter value */
                    "Parameter35.Value"?: string;
                    /** @description Parameter name */
                    "Parameter36.Name"?: string;
                    /** @description Parameter value */
                    "Parameter36.Value"?: string;
                    /** @description Parameter name */
                    "Parameter37.Name"?: string;
                    /** @description Parameter value */
                    "Parameter37.Value"?: string;
                    /** @description Parameter name */
                    "Parameter38.Name"?: string;
                    /** @description Parameter value */
                    "Parameter38.Value"?: string;
                    /** @description Parameter name */
                    "Parameter39.Name"?: string;
                    /** @description Parameter value */
                    "Parameter39.Value"?: string;
                    /** @description Parameter name */
                    "Parameter40.Name"?: string;
                    /** @description Parameter value */
                    "Parameter40.Value"?: string;
                    /** @description Parameter name */
                    "Parameter41.Name"?: string;
                    /** @description Parameter value */
                    "Parameter41.Value"?: string;
                    /** @description Parameter name */
                    "Parameter42.Name"?: string;
                    /** @description Parameter value */
                    "Parameter42.Value"?: string;
                    /** @description Parameter name */
                    "Parameter43.Name"?: string;
                    /** @description Parameter value */
                    "Parameter43.Value"?: string;
                    /** @description Parameter name */
                    "Parameter44.Name"?: string;
                    /** @description Parameter value */
                    "Parameter44.Value"?: string;
                    /** @description Parameter name */
                    "Parameter45.Name"?: string;
                    /** @description Parameter value */
                    "Parameter45.Value"?: string;
                    /** @description Parameter name */
                    "Parameter46.Name"?: string;
                    /** @description Parameter value */
                    "Parameter46.Value"?: string;
                    /** @description Parameter name */
                    "Parameter47.Name"?: string;
                    /** @description Parameter value */
                    "Parameter47.Value"?: string;
                    /** @description Parameter name */
                    "Parameter48.Name"?: string;
                    /** @description Parameter value */
                    "Parameter48.Value"?: string;
                    /** @description Parameter name */
                    "Parameter49.Name"?: string;
                    /** @description Parameter value */
                    "Parameter49.Value"?: string;
                    /** @description Parameter name */
                    "Parameter50.Name"?: string;
                    /** @description Parameter value */
                    "Parameter50.Value"?: string;
                    /** @description Parameter name */
                    "Parameter51.Name"?: string;
                    /** @description Parameter value */
                    "Parameter51.Value"?: string;
                    /** @description Parameter name */
                    "Parameter52.Name"?: string;
                    /** @description Parameter value */
                    "Parameter52.Value"?: string;
                    /** @description Parameter name */
                    "Parameter53.Name"?: string;
                    /** @description Parameter value */
                    "Parameter53.Value"?: string;
                    /** @description Parameter name */
                    "Parameter54.Name"?: string;
                    /** @description Parameter value */
                    "Parameter54.Value"?: string;
                    /** @description Parameter name */
                    "Parameter55.Name"?: string;
                    /** @description Parameter value */
                    "Parameter55.Value"?: string;
                    /** @description Parameter name */
                    "Parameter56.Name"?: string;
                    /** @description Parameter value */
                    "Parameter56.Value"?: string;
                    /** @description Parameter name */
                    "Parameter57.Name"?: string;
                    /** @description Parameter value */
                    "Parameter57.Value"?: string;
                    /** @description Parameter name */
                    "Parameter58.Name"?: string;
                    /** @description Parameter value */
                    "Parameter58.Value"?: string;
                    /** @description Parameter name */
                    "Parameter59.Name"?: string;
                    /** @description Parameter value */
                    "Parameter59.Value"?: string;
                    /** @description Parameter name */
                    "Parameter60.Name"?: string;
                    /** @description Parameter value */
                    "Parameter60.Value"?: string;
                    /** @description Parameter name */
                    "Parameter61.Name"?: string;
                    /** @description Parameter value */
                    "Parameter61.Value"?: string;
                    /** @description Parameter name */
                    "Parameter62.Name"?: string;
                    /** @description Parameter value */
                    "Parameter62.Value"?: string;
                    /** @description Parameter name */
                    "Parameter63.Name"?: string;
                    /** @description Parameter value */
                    "Parameter63.Value"?: string;
                    /** @description Parameter name */
                    "Parameter64.Name"?: string;
                    /** @description Parameter value */
                    "Parameter64.Value"?: string;
                    /** @description Parameter name */
                    "Parameter65.Name"?: string;
                    /** @description Parameter value */
                    "Parameter65.Value"?: string;
                    /** @description Parameter name */
                    "Parameter66.Name"?: string;
                    /** @description Parameter value */
                    "Parameter66.Value"?: string;
                    /** @description Parameter name */
                    "Parameter67.Name"?: string;
                    /** @description Parameter value */
                    "Parameter67.Value"?: string;
                    /** @description Parameter name */
                    "Parameter68.Name"?: string;
                    /** @description Parameter value */
                    "Parameter68.Value"?: string;
                    /** @description Parameter name */
                    "Parameter69.Name"?: string;
                    /** @description Parameter value */
                    "Parameter69.Value"?: string;
                    /** @description Parameter name */
                    "Parameter70.Name"?: string;
                    /** @description Parameter value */
                    "Parameter70.Value"?: string;
                    /** @description Parameter name */
                    "Parameter71.Name"?: string;
                    /** @description Parameter value */
                    "Parameter71.Value"?: string;
                    /** @description Parameter name */
                    "Parameter72.Name"?: string;
                    /** @description Parameter value */
                    "Parameter72.Value"?: string;
                    /** @description Parameter name */
                    "Parameter73.Name"?: string;
                    /** @description Parameter value */
                    "Parameter73.Value"?: string;
                    /** @description Parameter name */
                    "Parameter74.Name"?: string;
                    /** @description Parameter value */
                    "Parameter74.Value"?: string;
                    /** @description Parameter name */
                    "Parameter75.Name"?: string;
                    /** @description Parameter value */
                    "Parameter75.Value"?: string;
                    /** @description Parameter name */
                    "Parameter76.Name"?: string;
                    /** @description Parameter value */
                    "Parameter76.Value"?: string;
                    /** @description Parameter name */
                    "Parameter77.Name"?: string;
                    /** @description Parameter value */
                    "Parameter77.Value"?: string;
                    /** @description Parameter name */
                    "Parameter78.Name"?: string;
                    /** @description Parameter value */
                    "Parameter78.Value"?: string;
                    /** @description Parameter name */
                    "Parameter79.Name"?: string;
                    /** @description Parameter value */
                    "Parameter79.Value"?: string;
                    /** @description Parameter name */
                    "Parameter80.Name"?: string;
                    /** @description Parameter value */
                    "Parameter80.Value"?: string;
                    /** @description Parameter name */
                    "Parameter81.Name"?: string;
                    /** @description Parameter value */
                    "Parameter81.Value"?: string;
                    /** @description Parameter name */
                    "Parameter82.Name"?: string;
                    /** @description Parameter value */
                    "Parameter82.Value"?: string;
                    /** @description Parameter name */
                    "Parameter83.Name"?: string;
                    /** @description Parameter value */
                    "Parameter83.Value"?: string;
                    /** @description Parameter name */
                    "Parameter84.Name"?: string;
                    /** @description Parameter value */
                    "Parameter84.Value"?: string;
                    /** @description Parameter name */
                    "Parameter85.Name"?: string;
                    /** @description Parameter value */
                    "Parameter85.Value"?: string;
                    /** @description Parameter name */
                    "Parameter86.Name"?: string;
                    /** @description Parameter value */
                    "Parameter86.Value"?: string;
                    /** @description Parameter name */
                    "Parameter87.Name"?: string;
                    /** @description Parameter value */
                    "Parameter87.Value"?: string;
                    /** @description Parameter name */
                    "Parameter88.Name"?: string;
                    /** @description Parameter value */
                    "Parameter88.Value"?: string;
                    /** @description Parameter name */
                    "Parameter89.Name"?: string;
                    /** @description Parameter value */
                    "Parameter89.Value"?: string;
                    /** @description Parameter name */
                    "Parameter90.Name"?: string;
                    /** @description Parameter value */
                    "Parameter90.Value"?: string;
                    /** @description Parameter name */
                    "Parameter91.Name"?: string;
                    /** @description Parameter value */
                    "Parameter91.Value"?: string;
                    /** @description Parameter name */
                    "Parameter92.Name"?: string;
                    /** @description Parameter value */
                    "Parameter92.Value"?: string;
                    /** @description Parameter name */
                    "Parameter93.Name"?: string;
                    /** @description Parameter value */
                    "Parameter93.Value"?: string;
                    /** @description Parameter name */
                    "Parameter94.Name"?: string;
                    /** @description Parameter value */
                    "Parameter94.Value"?: string;
                    /** @description Parameter name */
                    "Parameter95.Name"?: string;
                    /** @description Parameter value */
                    "Parameter95.Value"?: string;
                    /** @description Parameter name */
                    "Parameter96.Name"?: string;
                    /** @description Parameter value */
                    "Parameter96.Value"?: string;
                    /** @description Parameter name */
                    "Parameter97.Name"?: string;
                    /** @description Parameter value */
                    "Parameter97.Value"?: string;
                    /** @description Parameter name */
                    "Parameter98.Name"?: string;
                    /** @description Parameter value */
                    "Parameter98.Value"?: string;
                    /** @description Parameter name */
                    "Parameter99.Name"?: string;
                    /** @description Parameter value */
                    "Parameter99.Value"?: string;
                    /**
                     * Format: uri
                     * @description Absolute URL to which Twilio sends status callback HTTP requests.
                     */
                    StatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method Twilio uses when sending `status_callback` requests. Possible values are `GET` and `POST`. Default is `POST`.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    Track?: components["schemas"]["stream_enum_track"];
                    /**
                     * Format: uri
                     * @description Relative or absolute URL where WebSocket connection will be established.
                     */
                    Url: string;
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
                    "application/json": components["schemas"]["api.v2010.account.call.stream"];
                };
            };
        };
    };
    UpdateStream: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Stream resource. */
                AccountSid: string;
                /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Stream resource is associated with. */
                CallSid: string;
                /** @description The SID or the `name` of the Stream resource to be stopped */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    Status: components["schemas"]["stream_enum_update_status"];
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
                    "application/json": components["schemas"]["api.v2010.account.call.stream"];
                };
            };
        };
    };
    CreateRealtimeTranscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Transcription resource. */
                AccountSid: string;
                /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Transcription resource is associated with. */
                CallSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The ID of the Conversations Configuration for customizing conversation behavior in Intelligence Service */
                    ConversationConfiguration?: string;
                    /** @description The ID of the Conversation for associating this Transcription with an existing Conversation in Intelligence Service */
                    ConversationId?: string;
                    /** @description The provider will add punctuation to recognition result */
                    EnableAutomaticPunctuation?: boolean;
                    /** @description Whether the callback includes raw provider data. */
                    EnableProviderData?: boolean;
                    /** @description A Phrase contains words and phrase "hints" so that the speech recognition engine is more likely to recognize them. */
                    Hints?: string;
                    /** @description Friendly name given to the Inbound Track */
                    InboundTrackLabel?: string;
                    /** @description The SID or unique name of the [Intelligence Service](https://www.twilio.com/docs/conversational-intelligence/api/service-resource) for persisting transcripts and running post-call Language Operators */
                    IntelligenceService?: string;
                    /** @description Language code used by the transcription engine, specified in [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) format */
                    LanguageCode?: string;
                    /** @description The user-specified name of this Transcription, if one was given when the Transcription was created. This may be used to stop the Transcription. */
                    Name?: string;
                    /** @description Friendly name given to the Outbound Track */
                    OutboundTrackLabel?: string;
                    /** @description Indicates if partial results are going to be sent to the customer */
                    PartialResults?: boolean;
                    /** @description indicates if the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks */
                    ProfanityFilter?: boolean;
                    /** @description Recognition model used by the transcription engine, among those supported by the provider */
                    SpeechModel?: string;
                    /**
                     * Format: http-method
                     * @description The http method for the status_callback (one of GET, POST).
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description Absolute URL of the status callback.
                     */
                    StatusCallbackUrl?: string;
                    Track?: components["schemas"]["realtime_transcription_enum_track"];
                    /** @description The ID of the RealTimeTranscription Configuration for configuring all the non-default behaviors in one go. */
                    TranscriptionConfigurationId?: string;
                    /** @description Definition of the transcription engine to be used, among those supported by Twilio */
                    TranscriptionEngine?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.call.realtime_transcription"];
                };
            };
        };
    };
    UpdateRealtimeTranscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Transcription resource. */
                AccountSid: string;
                /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Transcription resource is associated with. */
                CallSid: string;
                /** @description The SID of the Transcription resource, or the `name` used when creating the resource */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    Status: components["schemas"]["realtime_transcription_enum_update_status"];
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
                    "application/json": components["schemas"]["api.v2010.account.call.realtime_transcription"];
                };
            };
        };
    };
    CreateUserDefinedMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created User Defined Message. */
                AccountSid: string;
                /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Message is associated with. */
                CallSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The User Defined Message in the form of URL-encoded JSON string. */
                    Content: string;
                    /** @description A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated. */
                    IdempotencyKey?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.call.user_defined_message"];
                };
            };
        };
    };
    CreateUserDefinedMessageSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that subscribed to the User Defined Messages. */
                AccountSid: string;
                /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Messages subscription is associated with. This refers to the Call SID that is producing the user defined messages. */
                CallSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: uri
                     * @description The URL we should call using the `method` to send user defined events to your application. URLs must contain a valid hostname (underscores are not permitted).
                     */
                    Callback: string;
                    /** @description A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated. */
                    IdempotencyKey?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`. Default is `POST`.
                     * @enum {string}
                     */
                    Method?: "GET" | "POST";
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
                    "application/json": components["schemas"]["api.v2010.account.call.user_defined_message_subscription"];
                };
            };
        };
    };
    DeleteUserDefinedMessageSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that subscribed to the User Defined Messages. */
                AccountSid: string;
                /** @description The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Message Subscription is associated with. This refers to the Call SID that is producing the User Defined Messages. */
                CallSid: string;
                /** @description The SID that uniquely identifies this User Defined Message Subscription. */
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
    FetchCall: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call resource(s) to fetch. */
                AccountSid: string;
                /** @description The SID of the Call resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.call"];
                };
            };
        };
    };
    UpdateCall: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call resource(s) to update. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Call resource to update */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to request the `fallback_url`. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
                     * @enum {string}
                     */
                    FallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we call using the `fallback_method` if an error occurs when requesting or executing the TwiML at `url`. If an `application_sid` parameter is present, this parameter is ignored.
                     */
                    FallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use when calling the `url`. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
                     * @enum {string}
                     */
                    Method?: "GET" | "POST";
                    Status?: components["schemas"]["call_enum_update_status"];
                    /**
                     * Format: uri
                     * @description The URL we should call using the `status_callback_method` to send status information to your application. If no `status_callback_event` is specified, we will send the `completed` status. If an `application_sid` parameter is present, this parameter is ignored. URLs must contain a valid hostname (underscores are not permitted).
                     */
                    StatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use when requesting the `status_callback` URL. Can be: `GET` or `POST` and the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    /** @description The maximum duration of the call in seconds. Constraints depend on account and configuration. */
                    TimeLimit?: number;
                    /**
                     * Format: twiml
                     * @description TwiML instructions for the call Twilio will use without fetching Twiml from url. Twiml and url parameters are mutually exclusive
                     */
                    Twiml?: string;
                    /**
                     * Format: uri
                     * @description The absolute URL that returns the TwiML instructions for the call. We will call this URL using the `method` when the call connects. For more information, see the [Url Parameter](https://www.twilio.com/docs/voice/make-calls#specify-a-url-parameter) section in [Making Calls](https://www.twilio.com/docs/voice/make-calls).
                     */
                    Url?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.call"];
                };
            };
        };
    };
    DeleteCall: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call resource(s) to delete. */
                AccountSid: string;
                /** @description The Twilio-provided Call SID that uniquely identifies the Call resource to delete */
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
    ListConference: {
        parameters: {
            query?: {
                /** @description Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
                DateCreated?: string;
                /** @description Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
                "DateCreated<"?: string;
                /** @description Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
                "DateCreated>"?: string;
                /** @description Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
                DateUpdated?: string;
                /** @description Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
                "DateUpdated<"?: string;
                /** @description Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
                "DateUpdated>"?: string;
                /** @description The string that identifies the Conference resources to read. */
                FriendlyName?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description The status of the resources to read. Can be: `init`, `in-progress`, or `completed`. */
                Status?: components["schemas"]["conference_enum_status"];
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference resource(s) to read. */
                AccountSid: string;
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
                        conferences?: components["schemas"]["api.v2010.account.conference"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    ListParticipant: {
        parameters: {
            query?: {
                /** @description Whether to return only participants who are coaching another call. Can be: `true` or `false`. */
                Coaching?: boolean;
                /** @description Whether to return only participants that are on hold. Can be: `true` or `false`. */
                Hold?: boolean;
                /** @description Whether to return only participants that are muted. Can be: `true` or `false`. */
                Muted?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resources to read. */
                AccountSid: string;
                /** @description The SID of the conference with the participants to read. */
                ConferenceSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        participants?: components["schemas"]["api.v2010.account.conference.participant"][];
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateParticipant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
                /** @description The SID of the participant's conference. */
                ConferenceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: uri
                     * @description The URL that we should call using the `amd_status_callback_method` to notify customer application whether the call was answered by human, machine or fax.
                     */
                    AmdStatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use when calling the `amd_status_callback` URL. Can be: `GET` or `POST` and the default is `POST`.
                     * @enum {string}
                     */
                    AmdStatusCallbackMethod?: "GET" | "POST";
                    /** @description Whether to play a notification beep to the conference when the participant joins. Can be: `true`, `false`, `onEnter`, or `onExit`. The default value is `true`. */
                    Beep?: string;
                    /** @description The SID of a BYOC (Bring Your Own Carrier) trunk to route this call with. Note that `byoc` is only meaningful when `to` is a phone number; it will otherwise be ignored. (Beta) */
                    Byoc?: string;
                    /** @description The name that populates the display name in the From header. Must be between 2 and 255 characters. Only applicable for calls to sip address. */
                    CallerDisplayName?: string;
                    /** @description The phone number, Client identifier, or username portion of SIP address that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). Client identifiers are formatted `client:name`. If using a phone number, it must be a Twilio number or a Verified [outgoing caller id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `to` parameter is a phone number, `callerId` must also be a phone number. If `to` is sip address, this value of `callerId` should be a username portion to be used to populate the From header that is passed to the SIP endpoint. */
                    CallerId?: string;
                    /** @description The Reason for the outgoing call. Use it to specify the purpose of the call that is presented on the called party's phone. (Branded Calls Beta) */
                    CallReason?: string;
                    /** @description The SID of the participant who is being `coached`. The participant being coached is the only participant who can hear the participant who is `coaching`. */
                    CallSidToCoach?: string;
                    /** @description A token string needed to invoke a forwarded call. A call_token is generated when an incoming call is received on a Twilio number. Pass an incoming call's call_token value to a forwarded call via the call_token parameter when creating a new call. A forwarded call should bear the same CallerID of the original incoming call. */
                    CallToken?: string;
                    /**
                     * Format: uri
                     * @description The URL that we should use to deliver `push call notification`.
                     */
                    ClientNotificationUrl?: string;
                    /** @description Whether the participant is coaching another call. Can be: `true` or `false`. If not present, defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach` must be defined. */
                    Coaching?: boolean;
                    /** @description Whether to record the conference the participant is joining. Can be: `true`, `false`, `record-from-start`, and `do-not-record`. The default value is `false`. */
                    ConferenceRecord?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `conference_recording_status_callback_method` when the conference recording is available.
                     */
                    ConferenceRecordingStatusCallback?: string;
                    /** @description The conference recording state changes that generate a call to `conference_recording_status_callback`. Can be: `in-progress`, `completed`, `failed`, and `absent`. Separate multiple values with a space, ex: `'in-progress completed failed'` */
                    ConferenceRecordingStatusCallbackEvent?: string[];
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `conference_recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    ConferenceRecordingStatusCallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call using the `conference_status_callback_method` when the conference events in `conference_status_callback_event` occur. Only the value set by the first participant to join the conference is used. Subsequent `conference_status_callback` values are ignored.
                     */
                    ConferenceStatusCallback?: string;
                    /** @description The conference state changes that should generate a call to `conference_status_callback`. Can be: `start`, `end`, `join`, `leave`, `mute`, `hold`, `modify`, `speaker`, and `announcement`. Separate multiple values with a space. Defaults to `start end`. */
                    ConferenceStatusCallbackEvent?: string[];
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `conference_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    ConferenceStatusCallbackMethod?: "GET" | "POST";
                    /** @description Whether to trim leading and trailing silence from the conference recording. Can be: `trim-silence` or `do-not-trim` and defaults to `trim-silence`. */
                    ConferenceTrim?: string;
                    /** @description Whether to allow an agent to hear the state of the outbound call, including ringing or disconnect messages. Can be: `true` or `false` and defaults to `true`. */
                    EarlyMedia?: boolean;
                    /** @description Whether to end the conference when the participant leaves. Can be: `true` or `false` and defaults to `false`. */
                    EndConferenceOnExit?: boolean;
                    /**
                     * Format: endpoint
                     * @description The phone number, Client identifier, or username portion of SIP address that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). Client identifiers are formatted `client:name`. If using a phone number, it must be a Twilio number or a Verified [outgoing caller id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `to` parameter is a phone number, `from` must also be a phone number. If `to` is sip address, this value of `from` should be a username portion to be used to populate the P-Asserted-Identity header that is passed to the SIP endpoint.
                     */
                    From: string;
                    /** @description Jitter buffer size for the connecting participant. Twilio will use this setting to apply Jitter Buffer before participant's audio is mixed into the conference. Can be: `off`, `small`, `medium`, and `large`. Default to `large`. */
                    JitterBufferSize?: string;
                    /** @description A label for this participant. If one is supplied, it may subsequently be used to fetch, update or delete the participant. */
                    Label?: string;
                    /** @description Whether to detect if a human, answering machine, or fax has picked up the call. Can be: `Enable` or `DetectMessageEnd`. Use `Enable` if you would like us to return `AnsweredBy` as soon as the called party is identified. Use `DetectMessageEnd`, if you would like to leave a message on an answering machine. For more information, see [Answering Machine Detection](https://www.twilio.com/docs/voice/answering-machine-detection). */
                    MachineDetection?: string;
                    /** @description The number of milliseconds of initial silence after which an `unknown` AnsweredBy result will be returned. Possible Values: 2000-10000. Default: 5000. */
                    MachineDetectionSilenceTimeout?: number;
                    /** @description The number of milliseconds of silence after speech activity at which point the speech activity is considered complete. Possible Values: 500-5000. Default: 1200. */
                    MachineDetectionSpeechEndThreshold?: number;
                    /** @description The number of milliseconds that is used as the measuring stick for the length of the speech activity, where durations lower than this value will be interpreted as a human and longer than this value as a machine. Possible Values: 1000-6000. Default: 2400. */
                    MachineDetectionSpeechThreshold?: number;
                    /** @description The number of seconds that we should attempt to detect an answering machine before timing out and sending a voice request with `AnsweredBy` of `unknown`. The default timeout is 30 seconds. */
                    MachineDetectionTimeout?: number;
                    /** @description The maximum number of participants in the conference. Can be a positive integer from `2` to `250`. The default value is `250`. */
                    MaxParticipants?: number;
                    /** @description Whether the agent is muted in the conference. Can be `true` or `false` and the default is `false`. */
                    Muted?: boolean;
                    /** @description Whether to record the participant and their conferences, including the time between conferences. Can be `true` or `false` and the default is `false`. */
                    Record?: boolean;
                    /** @description The recording channels for the final recording. Can be: `mono` or `dual` and the default is `mono`. */
                    RecordingChannels?: string;
                    /** @description The identifier of the configuration to be used when creating and processing the recording */
                    RecordingConfigurationId?: string;
                    /**
                     * Format: uri
                     * @description The URL that we should call using the `recording_status_callback_method` when the recording status changes.
                     */
                    RecordingStatusCallback?: string;
                    /** @description The recording state changes that should generate a call to `recording_status_callback`. Can be: `started`, `in-progress`, `paused`, `resumed`, `stopped`, `completed`, `failed`, and `absent`. Separate multiple values with a space, ex: `'in-progress completed failed'`. */
                    RecordingStatusCallbackEvent?: string[];
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use when we call `recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    RecordingStatusCallbackMethod?: "GET" | "POST";
                    /** @description The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the audio that is sent from Twilio. `both` records the audio that is received and sent by Twilio. */
                    RecordingTrack?: string;
                    /** @description The [region](https://support.twilio.com/hc/en-us/articles/223132167-How-global-low-latency-routing-and-region-selection-work-for-conferences-and-Client-calls) where we should mix the recorded audio. Can be:`us1`, `us2`, `ie1`, `de1`, `sg1`, `br1`, `au1`, or `jp1`. */
                    Region?: string;
                    /** @description The SIP password for authentication. */
                    SipAuthPassword?: string;
                    /** @description The SIP username used for authentication. */
                    SipAuthUsername?: string;
                    /** @description Whether to start the conference when the participant joins, if it has not already started. Can be: `true` or `false` and the default is `true`. If `false` and the conference has not started, the participant is muted and hears background music until another participant starts the conference. */
                    StartConferenceOnEnter?: boolean;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `status_callback_method` to send status information to your application.
                     */
                    StatusCallback?: string;
                    /** @description The conference state changes that should generate a call to `status_callback`. Can be: `initiated`, `ringing`, `answered`, and `completed`. Separate multiple values with a space. The default value is `completed`. */
                    StatusCallbackEvent?: string[];
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `status_callback`. Can be: `GET` and `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    /** @description The maximum duration of the call in seconds. Constraints depend on account and configuration. */
                    TimeLimit?: number;
                    /** @description The number of seconds that we should allow the phone to ring before assuming there is no answer. Can be an integer between `5` and `600`, inclusive. The default value is `60`. We always add a 5-second timeout buffer to outgoing calls, so  value of 10 would result in an actual timeout that was closer to 15 seconds. */
                    Timeout?: number;
                    /**
                     * Format: endpoint
                     * @description The phone number, SIP address, Client, TwiML App identifier that received this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `sip:name@company.com`. Client identifiers are formatted `client:name`. TwiML App identifiers are formatted `app:<APP_SID>`. [Custom parameters](https://www.twilio.com/docs/voice/api/conference-participant-resource#custom-parameters) may also be specified.
                     */
                    To: string;
                    /** @description Whether to trim any leading and trailing silence from the participant recording. Can be: `trim-silence` or `do-not-trim` and the default is `trim-silence`. */
                    Trim?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
                     * @enum {string}
                     */
                    WaitMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that Twilio calls using the `wait_method` before the conference has started. The URL may return an MP3 file, a WAV file, or a TwiML document. The default value is the URL of our standard hold music. If you do not want anything to play while waiting for the conference to start, specify an empty string by setting `wait_url` to `''`. For more details on the allowable verbs within the `waitUrl`, see the `waitUrl` attribute in the [<Conference> TwiML instruction](https://www.twilio.com/docs/voice/twiml/conference#attributes-waiturl).
                     */
                    WaitUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.conference.participant"];
                };
            };
        };
    };
    FetchParticipant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resource to fetch. */
                AccountSid: string;
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the participant to fetch. Non URL safe characters in a label must be percent encoded, for example, a space character is represented as %20. */
                CallSid: string;
                /** @description The SID of the conference with the participant to fetch. */
                ConferenceSid: string;
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
                    "application/json": components["schemas"]["api.v2010.account.conference.participant"];
                };
            };
        };
    };
    UpdateParticipant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resources to update. */
                AccountSid: string;
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the participant to update. Non URL safe characters in a label must be percent encoded, for example, a space character is represented as %20. */
                CallSid: string;
                /** @description The SID of the conference with the participant to update. */
                ConferenceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `announce_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    AnnounceMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we call using the `announce_method` for an announcement to the participant. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.
                     */
                    AnnounceUrl?: string;
                    /** @description Whether to play a notification beep to the conference when the participant exits. Can be: `true` or `false`. */
                    BeepOnExit?: boolean;
                    /** @description The SID of the participant who is being `coached`. The participant being coached is the only participant who can hear the participant who is `coaching`. */
                    CallSidToCoach?: string;
                    /** @description Whether the participant is coaching another call. Can be: `true` or `false`. If not present, defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach` must be defined. */
                    Coaching?: boolean;
                    /** @description Whether to end the conference when the participant leaves. Can be: `true` or `false` and defaults to `false`. */
                    EndConferenceOnExit?: boolean;
                    /** @description Whether the participant should be on hold. Can be: `true` or `false`. `true` puts the participant on hold, and `false` lets them rejoin the conference. */
                    Hold?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `hold_url`. Can be: `GET` or `POST` and the default is `GET`.
                     * @enum {string}
                     */
                    HoldMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we call using the `hold_method` for music that plays when the participant is on hold. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.
                     */
                    HoldUrl?: string;
                    /** @description Whether the participant should be muted. Can be `true` or `false`. `true` will mute the participant, and `false` will un-mute them. Anything value other than `true` or `false` is interpreted as `false`. */
                    Muted?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
                     * @enum {string}
                     */
                    WaitMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that Twilio calls using the `wait_method` before the conference has started. The URL may return an MP3 file, a WAV file, or a TwiML document. The default value is the URL of our standard hold music. If you do not want anything to play while waiting for the conference to start, specify an empty string by setting `wait_url` to `''`. For more details on the allowable verbs within the `waitUrl`, see the `waitUrl` attribute in the [<Conference> TwiML instruction](https://www.twilio.com/docs/voice/twiml/conference#attributes-waiturl).
                     */
                    WaitUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.conference.participant"];
                };
            };
        };
    };
    DeleteParticipant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resources to delete. */
                AccountSid: string;
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the participant to delete. Non URL safe characters in a label must be percent encoded, for example, a space character is represented as %20. */
                CallSid: string;
                /** @description The SID of the conference with the participants to delete. */
                ConferenceSid: string;
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
    ListConferenceRecording: {
        parameters: {
            query?: {
                /** @description The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
                DateCreated?: string;
                /** @description The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
                "DateCreated<"?: string;
                /** @description The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or after midnight on a date. */
                "DateCreated>"?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resources to read. */
                AccountSid: string;
                /** @description The Conference SID that identifies the conference associated with the recording to read. */
                ConferenceSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        recordings?: components["schemas"]["api.v2010.account.conference.conference_recording"][];
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchConferenceRecording: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resource to fetch. */
                AccountSid: string;
                /** @description The Conference SID that identifies the conference associated with the recording to fetch. */
                ConferenceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Conference Recording resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.conference.conference_recording"];
                };
            };
        };
    };
    UpdateConferenceRecording: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resource to update. */
                AccountSid: string;
                /** @description The Conference SID that identifies the conference associated with the recording to update. */
                ConferenceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Conference Recording resource to update. Use `Twilio.CURRENT` to reference the current active recording. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Whether to record during a pause. Can be: `skip` or `silence` and the default is `silence`. `skip` does not record during the pause period, while `silence` will replace the actual audio of the call with silence during the pause period. This parameter only applies when setting `status` is set to `paused`. */
                    PauseBehavior?: string;
                    Status: components["schemas"]["conference_recording_enum_status"];
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
                    "application/json": components["schemas"]["api.v2010.account.conference.conference_recording"];
                };
            };
        };
    };
    DeleteConferenceRecording: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resources to delete. */
                AccountSid: string;
                /** @description The Conference SID that identifies the conference associated with the recording to delete. */
                ConferenceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Conference Recording resource to delete. */
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
    FetchConference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference resource(s) to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Conference resource to fetch */
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
                    "application/json": components["schemas"]["api.v2010.account.conference"];
                };
            };
        };
    };
    UpdateConference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference resource(s) to update. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Conference resource to update */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: http-method
                     * @description The HTTP method used to call `announce_url`. Can be: `GET` or `POST` and the default is `POST`
                     * @enum {string}
                     */
                    AnnounceMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call to announce something into the conference. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.
                     */
                    AnnounceUrl?: string;
                    Status?: components["schemas"]["conference_enum_update_status"];
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
                    "application/json": components["schemas"]["api.v2010.account.conference"];
                };
            };
        };
    };
    ListConnectApp: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resources to read. */
                AccountSid: string;
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
                        connect_apps?: components["schemas"]["api.v2010.account.connect_app"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchConnectApp: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the ConnectApp resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.connect_app"];
                };
            };
        };
    };
    UpdateConnectApp: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resources to update. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the ConnectApp resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: uri
                     * @description The URL to redirect the user to after we authenticate the user and obtain authorization to access the Connect App.
                     */
                    AuthorizeRedirectUrl?: string;
                    /** @description The company name to set for the Connect App. */
                    CompanyName?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method to use when calling `deauthorize_callback_url`.
                     * @enum {string}
                     */
                    DeauthorizeCallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL to call using the `deauthorize_callback_method` to de-authorize the Connect App.
                     */
                    DeauthorizeCallbackUrl?: string;
                    /** @description A description of the Connect App. */
                    Description?: string;
                    /** @description A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
                    FriendlyName?: string;
                    /**
                     * Format: uri
                     * @description A public URL where users can obtain more information about this Connect App.
                     */
                    HomepageUrl?: string;
                    /** @description A comma-separated list of the permissions you will request from the users of this ConnectApp.  Can include: `get-all` and `post-all`. */
                    Permissions?: components["schemas"]["connect_app_enum_permission"][];
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
                    "application/json": components["schemas"]["api.v2010.account.connect_app"];
                };
            };
        };
    };
    DeleteConnectApp: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the ConnectApp resource to fetch. */
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
    ListIncomingPhoneNumber: {
        parameters: {
            query?: {
                /** @description Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
                Beta?: boolean;
                /** @description A string that identifies the IncomingPhoneNumber resources to read. */
                FriendlyName?: string;
                /** @description Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By default, phone numbers of all origin are included. */
                Origin?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use '*' as a wildcard for any digit. */
                PhoneNumber?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        incoming_phone_numbers?: components["schemas"]["api.v2010.account.incoming_phone_number"][];
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateIncomingPhoneNumber: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the Address resource we should associate with the new phone number. Some regions require addresses to meet local regulations. */
                    AddressSid?: string;
                    /** @description The API version to use for incoming calls made to the new phone number. The default is `2010-04-01`. */
                    ApiVersion?: string;
                    /** @description The desired area code for your new incoming phone number. Can be any three-digit, US or Canada area code. We will provision an available phone number within this area code for you. **You must provide an `area_code` or a `phone_number`.** (US and Canada only). */
                    AreaCode?: string;
                    /** @description The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations. */
                    BundleSid?: string;
                    /** @description The SID of the emergency address configuration to use for emergency calling from the new phone number. */
                    EmergencyAddressSid?: string;
                    EmergencyStatus?: components["schemas"]["incoming_phone_number_enum_emergency_status"];
                    /** @description A descriptive string that you created to describe the new phone number. It can be up to 64 characters long. By default, this is a formatted version of the new phone number. */
                    FriendlyName?: string;
                    /** @description The SID of the Identity resource that we should associate with the new phone number. Some regions require an identity to meet local regulations. */
                    IdentitySid?: string;
                    /**
                     * Format: phone-number
                     * @description The phone number to purchase specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234.
                     */
                    PhoneNumber?: string;
                    /** @description The SID of the application that should handle SMS messages sent to the new phone number. If an `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those set on the application. */
                    SmsApplicationSid?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    SmsFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`.
                     */
                    SmsFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    SmsMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call when the new phone number receives an incoming SMS message.
                     */
                    SmsUrl?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `status_callback_method` to send status information to your application.
                     */
                    StatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    /** @description The SID of the Trunk we should use to handle calls to the new phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
                    TrunkSid?: string;
                    /** @description The SID of the application we should use to handle calls to the new phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use only those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
                    VoiceApplicationSid?: string;
                    /** @description Whether to lookup the caller's name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`. */
                    VoiceCallerIdLookup?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    VoiceFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
                     */
                    VoiceFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    VoiceMethod?: "GET" | "POST";
                    VoiceReceiveMode?: components["schemas"]["incoming_phone_number_enum_voice_receive_mode"];
                    /**
                     * Format: uri
                     * @description The URL that we should call to answer a call to the new phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set.
                     */
                    VoiceUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.incoming_phone_number"];
                };
            };
        };
    };
    ListIncomingPhoneNumberAssignedAddOn: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to read. */
                AccountSid: string;
                /** @description The SID of the Phone Number to which the Add-on is assigned. */
                ResourceSid: string;
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
                        assigned_add_ons?: components["schemas"]["api.v2010.account.incoming_phone_number.incoming_phone_number_assigned_add_on"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateIncomingPhoneNumberAssignedAddOn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
                /** @description The SID of the Phone Number to assign the Add-on. */
                ResourceSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID that identifies the Add-on installation. */
                    InstalledAddOnSid: string;
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
                    "application/json": components["schemas"]["api.v2010.account.incoming_phone_number.incoming_phone_number_assigned_add_on"];
                };
            };
        };
    };
    ListIncomingPhoneNumberAssignedAddOnExtension: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to read. */
                AccountSid: string;
                /** @description The SID that uniquely identifies the assigned Add-on installation. */
                AssignedAddOnSid: string;
                /** @description The SID of the Phone Number to which the Add-on is assigned. */
                ResourceSid: string;
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
                        end?: number;
                        extensions?: components["schemas"]["api.v2010.account.incoming_phone_number.incoming_phone_number_assigned_add_on.incoming_phone_number_assigned_add_on_extension"][];
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchIncomingPhoneNumberAssignedAddOnExtension: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource to fetch. */
                AccountSid: string;
                /** @description The SID that uniquely identifies the assigned Add-on installation. */
                AssignedAddOnSid: string;
                /** @description The SID of the Phone Number to which the Add-on is assigned. */
                ResourceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.incoming_phone_number.incoming_phone_number_assigned_add_on.incoming_phone_number_assigned_add_on_extension"];
                };
            };
        };
    };
    FetchIncomingPhoneNumberAssignedAddOn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource to fetch. */
                AccountSid: string;
                /** @description The SID of the Phone Number to which the Add-on is assigned. */
                ResourceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.incoming_phone_number.incoming_phone_number_assigned_add_on"];
                };
            };
        };
    };
    DeleteIncomingPhoneNumberAssignedAddOn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to delete. */
                AccountSid: string;
                /** @description The SID of the Phone Number to which the Add-on is assigned. */
                ResourceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the resource to delete. */
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
    FetchIncomingPhoneNumber: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.incoming_phone_number"];
                };
            };
        };
    };
    UpdateIncomingPhoneNumber: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resource to update.  For more information, see [Exchanging Numbers Between Subaccounts](https://www.twilio.com/docs/iam/api/subaccounts#exchanging-numbers). */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resource to update.  For more information, see [Exchanging Numbers Between Subaccounts](https://www.twilio.com/docs/iam/api/subaccounts#exchanging-numbers). */
                    AccountSid?: string;
                    /** @description The SID of the Address resource we should associate with the phone number. Some regions require addresses to meet local regulations. */
                    AddressSid?: string;
                    /** @description The API version to use for incoming calls made to the phone number. The default is `2010-04-01`. */
                    ApiVersion?: string;
                    /** @description The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations. */
                    BundleSid?: string;
                    /** @description The SID of the emergency address configuration to use for emergency calling from this phone number. */
                    EmergencyAddressSid?: string;
                    EmergencyStatus?: components["schemas"]["incoming_phone_number_enum_emergency_status"];
                    /** @description A descriptive string that you created to describe this phone number. It can be up to 64 characters long. By default, this is a formatted version of the phone number. */
                    FriendlyName?: string;
                    /** @description The SID of the Identity resource that we should associate with the phone number. Some regions require an identity to meet local regulations. */
                    IdentitySid?: string;
                    /** @description The SID of the application that should handle SMS messages sent to the number. If an `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those set on the application. */
                    SmsApplicationSid?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    SmsFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`.
                     */
                    SmsFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    SmsMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call when the phone number receives an incoming SMS message.
                     */
                    SmsUrl?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `status_callback_method` to send status information to your application.
                     */
                    StatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    /** @description The SID of the Trunk we should use to handle phone calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
                    TrunkSid?: string;
                    /** @description The SID of the application we should use to handle phone calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use only those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
                    VoiceApplicationSid?: string;
                    /** @description Whether to lookup the caller's name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`. */
                    VoiceCallerIdLookup?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    VoiceFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
                     */
                    VoiceFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    VoiceMethod?: "GET" | "POST";
                    VoiceReceiveMode?: components["schemas"]["incoming_phone_number_enum_voice_receive_mode"];
                    /**
                     * Format: uri
                     * @description The URL that we should call to answer a call to the phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set.
                     */
                    VoiceUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.incoming_phone_number"];
                };
            };
        };
    };
    DeleteIncomingPhoneNumber: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resources to delete. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to delete. */
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
    ListIncomingPhoneNumberLocal: {
        parameters: {
            query?: {
                /** @description Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
                Beta?: boolean;
                /** @description A string that identifies the resources to read. */
                FriendlyName?: string;
                /** @description Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By default, phone numbers of all origin are included. */
                Origin?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use '*' as a wildcard for any digit. */
                PhoneNumber?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        incoming_phone_numbers?: components["schemas"]["api.v2010.account.incoming_phone_number.incoming_phone_number_local"][];
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateIncomingPhoneNumberLocal: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the Address resource we should associate with the new phone number. Some regions require addresses to meet local regulations. */
                    AddressSid?: string;
                    /** @description The API version to use for incoming calls made to the new phone number. The default is `2010-04-01`. */
                    ApiVersion?: string;
                    /** @description The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations. */
                    BundleSid?: string;
                    /** @description The SID of the emergency address configuration to use for emergency calling from the new phone number. */
                    EmergencyAddressSid?: string;
                    EmergencyStatus?: components["schemas"]["incoming_phone_number_local_enum_emergency_status"];
                    /** @description A descriptive string that you created to describe the new phone number. It can be up to 64 characters long. By default, this is a formatted version of the phone number. */
                    FriendlyName?: string;
                    /** @description The SID of the Identity resource that we should associate with the new phone number. Some regions require an identity to meet local regulations. */
                    IdentitySid?: string;
                    /**
                     * Format: phone-number
                     * @description The phone number to purchase specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234.
                     */
                    PhoneNumber: string;
                    /** @description The SID of the application that should handle SMS messages sent to the new phone number. If an `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those set on the application. */
                    SmsApplicationSid?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    SmsFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`.
                     */
                    SmsFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    SmsMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call when the new phone number receives an incoming SMS message.
                     */
                    SmsUrl?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `status_callback_method` to send status information to your application.
                     */
                    StatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    /** @description The SID of the Trunk we should use to handle calls to the new phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
                    TrunkSid?: string;
                    /** @description The SID of the application we should use to handle calls to the new phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use only those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
                    VoiceApplicationSid?: string;
                    /** @description Whether to lookup the caller's name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`. */
                    VoiceCallerIdLookup?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    VoiceFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
                     */
                    VoiceFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    VoiceMethod?: "GET" | "POST";
                    VoiceReceiveMode?: components["schemas"]["incoming_phone_number_local_enum_voice_receive_mode"];
                    /**
                     * Format: uri
                     * @description The URL that we should call to answer a call to the new phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set.
                     */
                    VoiceUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.incoming_phone_number.incoming_phone_number_local"];
                };
            };
        };
    };
    ListIncomingPhoneNumberMobile: {
        parameters: {
            query?: {
                /** @description Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
                Beta?: boolean;
                /** @description A string that identifies the resources to read. */
                FriendlyName?: string;
                /** @description Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By default, phone numbers of all origin are included. */
                Origin?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use '*' as a wildcard for any digit. */
                PhoneNumber?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        incoming_phone_numbers?: components["schemas"]["api.v2010.account.incoming_phone_number.incoming_phone_number_mobile"][];
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateIncomingPhoneNumberMobile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the Address resource we should associate with the new phone number. Some regions require addresses to meet local regulations. */
                    AddressSid?: string;
                    /** @description The API version to use for incoming calls made to the new phone number. The default is `2010-04-01`. */
                    ApiVersion?: string;
                    /** @description The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations. */
                    BundleSid?: string;
                    /** @description The SID of the emergency address configuration to use for emergency calling from the new phone number. */
                    EmergencyAddressSid?: string;
                    EmergencyStatus?: components["schemas"]["incoming_phone_number_mobile_enum_emergency_status"];
                    /** @description A descriptive string that you created to describe the new phone number. It can be up to 64 characters long. By default, the is a formatted version of the phone number. */
                    FriendlyName?: string;
                    /** @description The SID of the Identity resource that we should associate with the new phone number. Some regions require an identity to meet local regulations. */
                    IdentitySid?: string;
                    /**
                     * Format: phone-number
                     * @description The phone number to purchase specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234.
                     */
                    PhoneNumber: string;
                    /** @description The SID of the application that should handle SMS messages sent to the new phone number. If an `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those of the application. */
                    SmsApplicationSid?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    SmsFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`.
                     */
                    SmsFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    SmsMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call when the new phone number receives an incoming SMS message.
                     */
                    SmsUrl?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `status_callback_method` to send status information to your application.
                     */
                    StatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    /** @description The SID of the Trunk we should use to handle calls to the new phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
                    TrunkSid?: string;
                    /** @description The SID of the application we should use to handle calls to the new phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use only those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
                    VoiceApplicationSid?: string;
                    /** @description Whether to lookup the caller's name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`. */
                    VoiceCallerIdLookup?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    VoiceFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
                     */
                    VoiceFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    VoiceMethod?: "GET" | "POST";
                    VoiceReceiveMode?: components["schemas"]["incoming_phone_number_mobile_enum_voice_receive_mode"];
                    /**
                     * Format: uri
                     * @description The URL that we should call to answer a call to the new phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set.
                     */
                    VoiceUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.incoming_phone_number.incoming_phone_number_mobile"];
                };
            };
        };
    };
    ListIncomingPhoneNumberTollFree: {
        parameters: {
            query?: {
                /** @description Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
                Beta?: boolean;
                /** @description A string that identifies the resources to read. */
                FriendlyName?: string;
                /** @description Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By default, phone numbers of all origin are included. */
                Origin?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use '*' as a wildcard for any digit. */
                PhoneNumber?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        incoming_phone_numbers?: components["schemas"]["api.v2010.account.incoming_phone_number.incoming_phone_number_toll_free"][];
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateIncomingPhoneNumberTollFree: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the Address resource we should associate with the new phone number. Some regions require addresses to meet local regulations. */
                    AddressSid?: string;
                    /** @description The API version to use for incoming calls made to the new phone number. The default is `2010-04-01`. */
                    ApiVersion?: string;
                    /** @description The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations. */
                    BundleSid?: string;
                    /** @description The SID of the emergency address configuration to use for emergency calling from the new phone number. */
                    EmergencyAddressSid?: string;
                    EmergencyStatus?: components["schemas"]["incoming_phone_number_toll_free_enum_emergency_status"];
                    /** @description A descriptive string that you created to describe the new phone number. It can be up to 64 characters long. By default, this is a formatted version of the phone number. */
                    FriendlyName?: string;
                    /** @description The SID of the Identity resource that we should associate with the new phone number. Some regions require an Identity to meet local regulations. */
                    IdentitySid?: string;
                    /**
                     * Format: phone-number
                     * @description The phone number to purchase specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234.
                     */
                    PhoneNumber: string;
                    /** @description The SID of the application that should handle SMS messages sent to the new phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application. */
                    SmsApplicationSid?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    SmsFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`.
                     */
                    SmsFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    SmsMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call when the new phone number receives an incoming SMS message.
                     */
                    SmsUrl?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `status_callback_method` to send status information to your application.
                     */
                    StatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
                    /** @description The SID of the Trunk we should use to handle calls to the new phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa. */
                    TrunkSid?: string;
                    /** @description The SID of the application we should use to handle calls to the new phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa. */
                    VoiceApplicationSid?: string;
                    /** @description Whether to lookup the caller's name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`. */
                    VoiceCallerIdLookup?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    VoiceFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
                     */
                    VoiceFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`.
                     * @enum {string}
                     */
                    VoiceMethod?: "GET" | "POST";
                    VoiceReceiveMode?: components["schemas"]["incoming_phone_number_toll_free_enum_voice_receive_mode"];
                    /**
                     * Format: uri
                     * @description The URL that we should call to answer a call to the new phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set.
                     */
                    VoiceUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.incoming_phone_number.incoming_phone_number_toll_free"];
                };
            };
        };
    };
    ListKey: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Key resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        keys?: components["schemas"]["api.v2010.account.key"][];
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateNewKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will be responsible for the new Key resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
                    FriendlyName?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.new_key"];
                };
            };
        };
    };
    FetchKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Key resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Key resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.key"];
                };
            };
        };
    };
    UpdateKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Key resources to update. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Key resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
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
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["api.v2010.account.key"];
                };
            };
        };
    };
    DeleteKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Key resources to delete. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Key resource to delete. */
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
    ListMessage: {
        parameters: {
            query?: {
                /** @description Filter by Message `sent_date`. Accepts GMT dates in the following formats: `YYYY-MM-DD` (to find Messages with a specific `sent_date`), `<=YYYY-MM-DD` (to find Messages with `sent_date`s on and before a specific date), and `>=YYYY-MM-DD` (to find Messages with `sent_dates` on and after a specific date). */
                DateSent?: string;
                /** @description Filter by Message `sent_date`. Accepts GMT dates in the following formats: `YYYY-MM-DD` (to find Messages with a specific `sent_date`), `<=YYYY-MM-DD` (to find Messages with `sent_date`s on and before a specific date), and `>=YYYY-MM-DD` (to find Messages with `sent_dates` on and after a specific date). */
                "DateSent<"?: string;
                /** @description Filter by Message `sent_date`. Accepts GMT dates in the following formats: `YYYY-MM-DD` (to find Messages with a specific `sent_date`), `<=YYYY-MM-DD` (to find Messages with `sent_date`s on and before a specific date), and `>=YYYY-MM-DD` (to find Messages with `sent_dates` on and after a specific date). */
                "DateSent>"?: string;
                /** @description Filter by sender. For example: Set this parameter to `+15552229999` to retrieve a list of Message resources sent by `+15552229999`. */
                From?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Filter by recipient. For example: Set this parameter to `+15558881111` to retrieve a list of Message resources sent to `+15558881111`. */
                To?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resources. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        messages?: components["schemas"]["api.v2010.account.message"][];
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) creating the Message resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    AddressRetention?: components["schemas"]["message_enum_address_retention"];
                    /** @description The SID of the associated [TwiML Application](https://www.twilio.com/docs/usage/api/applications). [Message status callback requests](https://www.twilio.com/docs/sms/api/message-resource#twilios-request-to-the-statuscallback-url) are sent to the TwiML App's `message_status_callback` URL. Note that the `status_callback` parameter of a request takes priority over the `application_sid` parameter; if both are included `application_sid` is ignored. */
                    ApplicationSid?: string;
                    /** @description Total number of attempts made (including this request) to send the message regardless of the provider used */
                    Attempt?: number;
                    /** @description The text content of the outgoing message. Can be up to 1,600 characters in length. SMS only: If the `body` contains more than 160 [GSM-7](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding) characters (or 70 [UCS-2](https://www.twilio.com/docs/glossary/what-is-ucs-2-character-encoding) characters), the message is segmented and charged accordingly. For long `body` text, consider using the [send_as_mms parameter](https://www.twilio.com/blog/mms-for-long-text-messages). */
                    Body?: string;
                    ContentRetention?: components["schemas"]["message_enum_content_retention"];
                    /** @description For [Content Editor/API](https://www.twilio.com/docs/content) only: The SID of the Content Template to be used with the Message, e.g., `HXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`. If this parameter is not provided, a Content Template is not used. Find the SID in the Console on the Content Editor page. For Content API users, the SID is found in Twilio's response when [creating the Template](https://www.twilio.com/docs/content/content-api-resources#create-templates) or by [fetching your Templates](https://www.twilio.com/docs/content/content-api-resources#fetch-all-content-resources). */
                    ContentSid?: string;
                    /** @description For [Content Editor/API](https://www.twilio.com/docs/content) only: Key-value pairs of [Template variables](https://www.twilio.com/docs/content/using-variables-with-content-api) and their substitution values. `content_sid` parameter must also be provided. If values are not defined in the `content_variables` parameter, the [Template's default placeholder values](https://www.twilio.com/docs/content/content-api-resources#create-templates) are used. */
                    ContentVariables?: string;
                    /**
                     * Format: phone-number
                     * @description A fallback SMS sender to use when the recipient cannot be reached over RCS. This parameter may only be used when also providing a [Messaging Service](https://twilio.com/docs/messaging/services) containing an RCS sender. The fallback SMS sender must be either a Twilio phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), or [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), hosted within Twilio and belong to the Account creating the Message.
                     */
                    FallbackFrom?: string;
                    /** @description Reserved */
                    ForceDelivery?: boolean;
                    /**
                     * Format: phone-number
                     * @description The sender's Twilio phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), [Wireless SIM](https://www.twilio.com/docs/iot/wireless/programmable-wireless-send-machine-machine-sms-commands), [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g., `whatsapp:+15554449999`). The value of the `from` parameter must be a sender that is hosted within Twilio and belongs to the Account creating the Message. If you are using `messaging_service_sid`, this parameter can be empty (Twilio assigns a `from` value from the Messaging Service's Sender Pool) or you can provide a specific sender from your Sender Pool.
                     */
                    From?: string;
                    /** @description [OBSOLETE] This parameter will no longer have any effect as of 2024-06-03. */
                    MaxPrice?: number;
                    /** @description The URL of media to include in the Message content. `jpeg`, `jpg`, `gif`, and `png` file types are fully supported by Twilio and content is formatted for delivery on destination devices. The media size limit is 5 MB for supported file types (`jpeg`, `jpg`, `png`, `gif`) and 500 KB for [other types](https://www.twilio.com/docs/messaging/guides/accepted-mime-types) of accepted media. To send more than one image in the message, provide multiple `media_url` parameters in the POST request. You can include up to ten `media_url` parameters per message. [International](https://support.twilio.com/hc/en-us/articles/223179808-Sending-and-receiving-MMS-messages) and [carrier](https://support.twilio.com/hc/en-us/articles/223133707-Is-MMS-supported-for-all-carriers-in-US-and-Canada-) limits apply. */
                    MediaUrl?: string[];
                    /** @description The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services) you want to associate with the Message. When this parameter is provided and the `from` parameter is omitted, Twilio selects the optimal sender from the Messaging Service's Sender Pool. You may also provide a `from` parameter if you want to use a specific Sender from the Sender Pool. */
                    MessagingServiceSid?: string;
                    /** @description Rich actions for non-SMS/MMS channels. Used for [sending location in WhatsApp messages](https://www.twilio.com/docs/whatsapp/message-features#location-messages-with-whatsapp). */
                    PersistentAction?: string[];
                    /** @description Boolean indicating whether or not you intend to provide delivery confirmation feedback to Twilio (used in conjunction with the [Message Feedback subresource](https://www.twilio.com/docs/sms/api/message-feedback-resource)). Default value is `false`. */
                    ProvideFeedback?: boolean;
                    RiskCheck?: components["schemas"]["message_enum_risk_check"];
                    ScheduleType?: components["schemas"]["message_enum_schedule_type"];
                    /** @description If set to `true`, Twilio delivers the message as a single MMS message, regardless of the presence of media. */
                    SendAsMms?: boolean;
                    /**
                     * Format: date-time
                     * @description The time that Twilio will send the message. Must be in ISO 8601 format.
                     */
                    SendAt?: string;
                    /** @description For Messaging Services with [Link Shortening configured](https://www.twilio.com/docs/messaging/features/link-shortening) only: A Boolean indicating whether or not Twilio should shorten links in the `body` of the Message. Default value is `false`. If `true`, the `messaging_service_sid` parameter must also be provided. */
                    ShortenUrls?: boolean;
                    /** @description Whether to detect Unicode characters that have a similar GSM-7 character and replace them. Can be: `true` or `false`. */
                    SmartEncoded?: boolean;
                    /**
                     * Format: uri
                     * @description The URL of the endpoint to which Twilio sends [Message status callback requests](https://www.twilio.com/docs/sms/api/message-resource#twilios-request-to-the-statuscallback-url). URL must contain a valid hostname and underscores are not allowed. If you include this parameter with the `messaging_service_sid`, Twilio uses this URL instead of the Status Callback URL of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource).
                     */
                    StatusCallback?: string;
                    /**
                     * Format: phone-number
                     * @description The recipient's phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (for SMS/MMS) or [channel address](https://www.twilio.com/docs/messaging/channels), e.g. `whatsapp:+15552229999`.
                     */
                    To: string;
                    TrafficType?: components["schemas"]["message_enum_traffic_type"];
                    /** @description The maximum length in seconds that the Message can remain in Twilio's outgoing message queue. If a queued Message exceeds the `validity_period`, the Message is not sent. Accepted values are integers from `1` to `36000`. Default value is `36000`. A `validity_period` greater than `5` is recommended. [Learn more about the validity period](https://www.twilio.com/blog/take-more-control-of-outbound-messages-using-validity-period-html) */
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
                    "application/json": components["schemas"]["api.v2010.account.message"];
                };
            };
        };
    };
    CreateMessageFeedback: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resource for which to create MessageFeedback. */
                AccountSid: string;
                /** @description The SID of the Message resource for which to create MessageFeedback. */
                MessageSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    Outcome?: components["schemas"]["message_feedback_enum_outcome"];
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
                    "application/json": components["schemas"]["api.v2010.account.message.message_feedback"];
                };
            };
        };
    };
    ListMedia: {
        parameters: {
            query?: {
                /** @description Only include Media resources that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read Media that were created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read Media that were created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read Media that were created on or after midnight of this date. */
                DateCreated?: string;
                /** @description Only include Media resources that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read Media that were created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read Media that were created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read Media that were created on or after midnight of this date. */
                "DateCreated<"?: string;
                /** @description Only include Media resources that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read Media that were created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read Media that were created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read Media that were created on or after midnight of this date. */
                "DateCreated>"?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is associated with the Media resources. */
                AccountSid: string;
                /** @description The SID of the Message resource that is associated with the Media resources. */
                MessageSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        media_list?: components["schemas"]["api.v2010.account.message.media"][];
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchMedia: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Media resource. */
                AccountSid: string;
                /** @description The SID of the Message resource that is associated with the Media resource. */
                MessageSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Media resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.message.media"];
                };
            };
        };
    };
    DeleteMedia: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is associated with the Media resource. */
                AccountSid: string;
                /** @description The SID of the Message resource that is associated with the Media resource. */
                MessageSid: string;
                /** @description The unique identifier of the to-be-deleted Media resource. */
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
    FetchMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resource */
                AccountSid: string;
                /** @description The SID of the Message resource to be fetched */
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
                    "application/json": components["schemas"]["api.v2010.account.message"];
                };
            };
        };
    };
    UpdateMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Message resources to update. */
                AccountSid: string;
                /** @description The SID of the Message resource to be updated */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The new `body` of the Message resource. To redact the text content of a Message, this parameter's value must be an empty string */
                    Body?: string;
                    Status?: components["schemas"]["message_enum_update_status"];
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
                    "application/json": components["schemas"]["api.v2010.account.message"];
                };
            };
        };
    };
    DeleteMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resource */
                AccountSid: string;
                /** @description The SID of the Message resource you wish to delete */
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
    ListNotification: {
        parameters: {
            query?: {
                /** @description Only read notifications of the specified log level. Can be:  `0` to read only ERROR notifications or `1` to read only WARNING notifications. By default, all notifications are read. */
                Log?: number;
                /** @description Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
                MessageDate?: string;
                /** @description Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
                "MessageDate<"?: string;
                /** @description Only show notifications for the specified date, formatted as `YYYY-MM-DD`. You can also specify an inequality, such as `<=YYYY-MM-DD` for messages logged at or before midnight on a date, or `>=YYYY-MM-DD` for messages logged at or after midnight on a date. */
                "MessageDate>"?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Notification resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        notifications?: components["schemas"]["api.v2010.account.notification"][];
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchNotification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Notification resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Notification resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.notification-instance"];
                };
            };
        };
    };
    ListOutgoingCallerId: {
        parameters: {
            query?: {
                /** @description The string that identifies the OutgoingCallerId resources to read. */
                FriendlyName?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description The phone number of the OutgoingCallerId resources to read. */
                PhoneNumber?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        outgoing_caller_ids?: components["schemas"]["api.v2010.account.outgoing_caller_id"][];
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateValidationRequest: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for the new caller ID resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The number of seconds to delay before initiating the verification call. Can be an integer between `0` and `60`, inclusive. The default is `0`. */
                    CallDelay?: number;
                    /** @description The digits to dial after connecting the verification call. */
                    Extension?: string;
                    /** @description A descriptive string that you create to describe the new caller ID resource. It can be up to 64 characters long. The default value is a formatted version of the phone number. */
                    FriendlyName?: string;
                    /**
                     * Format: phone-number
                     * @description The phone number to verify in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
                     */
                    PhoneNumber: string;
                    /**
                     * Format: uri
                     * @description The URL we should call using the `status_callback_method` to send status information about the verification process to your application.
                     */
                    StatusCallback?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`, and the default is `POST`.
                     * @enum {string}
                     */
                    StatusCallbackMethod?: "GET" | "POST";
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
                    "application/json": components["schemas"]["api.v2010.account.validation_request"];
                };
            };
        };
    };
    FetchOutgoingCallerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.outgoing_caller_id"];
                };
            };
        };
    };
    UpdateOutgoingCallerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resources to update. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
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
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["api.v2010.account.outgoing_caller_id"];
                };
            };
        };
    };
    DeleteOutgoingCallerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resources to delete. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to delete. */
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
    ListQueue: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        queues?: components["schemas"]["api.v2010.account.queue"][];
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateQueue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A descriptive string that you created to describe this resource. It can be up to 64 characters long. */
                    FriendlyName: string;
                    /** @description The maximum number of calls allowed to be in the queue. The default is 1000. The maximum is 5000. */
                    MaxSize?: number;
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
                    "application/json": components["schemas"]["api.v2010.account.queue"];
                };
            };
        };
    };
    ListMember: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member resource(s) to read. */
                AccountSid: string;
                /** @description The SID of the Queue in which to find the members */
                QueueSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        queue_members?: components["schemas"]["api.v2010.account.queue.member"][];
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member resource(s) to fetch. */
                AccountSid: string;
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource(s) to fetch. */
                CallSid: string;
                /** @description The SID of the Queue in which to find the members to fetch. */
                QueueSid: string;
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
                    "application/json": components["schemas"]["api.v2010.account.queue.member"];
                };
            };
        };
    };
    UpdateMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member resource(s) to update. */
                AccountSid: string;
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource(s) to update. */
                CallSid: string;
                /** @description The SID of the Queue in which to find the members to update. */
                QueueSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: http-method
                     * @description How to pass the update request data. Can be `GET` or `POST` and the default is `POST`. `POST` sends the data as encoded form data and `GET` sends the data as query parameters.
                     * @enum {string}
                     */
                    Method?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The absolute URL of the Queue resource.
                     */
                    Url: string;
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
                    "application/json": components["schemas"]["api.v2010.account.queue.member"];
                };
            };
        };
    };
    FetchQueue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Queue resource to fetch */
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
                    "application/json": components["schemas"]["api.v2010.account.queue"];
                };
            };
        };
    };
    UpdateQueue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue resource to update. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Queue resource to update */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A descriptive string that you created to describe this resource. It can be up to 64 characters long. */
                    FriendlyName?: string;
                    /** @description The maximum number of calls allowed to be in the queue. The default is 1000. The maximum is 5000. */
                    MaxSize?: number;
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
                    "application/json": components["schemas"]["api.v2010.account.queue"];
                };
            };
        };
    };
    DeleteQueue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Queue resource to delete. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Queue resource to delete */
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
    ListRecording: {
        parameters: {
            query?: {
                /** @description The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read. */
                CallSid?: string;
                /** @description The Conference SID that identifies the conference associated with the recording to read. */
                ConferenceSid?: string;
                /** @description Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date. */
                DateCreated?: string;
                /** @description Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date. */
                "DateCreated<"?: string;
                /** @description Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings that were created on or after midnight of this date. */
                "DateCreated>"?: string;
                /** @description A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days. */
                IncludeSoftDeleted?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        recordings?: components["schemas"]["api.v2010.account.recording"][];
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    ListRecordingTranscription: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resources to read. */
                AccountSid: string;
                /** @description The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the transcriptions to read. */
                RecordingSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        transcriptions?: components["schemas"]["api.v2010.account.recording.recording_transcription"][];
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchRecordingTranscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource to fetch. */
                AccountSid: string;
                /** @description The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the transcription to fetch. */
                RecordingSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Transcription resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.recording.recording_transcription"];
                };
            };
        };
    };
    DeleteRecordingTranscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resources to delete. */
                AccountSid: string;
                /** @description The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the transcription to delete. */
                RecordingSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Transcription resource to delete. */
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
    ListRecordingAddOnResult: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resources to read. */
                AccountSid: string;
                /** @description The SID of the recording to which the result to read belongs. */
                ReferenceSid: string;
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
                        add_on_results?: components["schemas"]["api.v2010.account.recording.recording_add_on_result"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    ListRecordingAddOnResultPayload: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resources to read. */
                AccountSid: string;
                /** @description The SID of the AddOnResult to which the payloads to read belongs. */
                AddOnResultSid: string;
                /** @description The SID of the recording to which the AddOnResult resource that contains the payloads to read belongs. */
                ReferenceSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        payloads?: components["schemas"]["api.v2010.account.recording.recording_add_on_result.recording_add_on_result_payload"][];
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchRecordingAddOnResultPayloadData: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resource to fetch. */
                AccountSid: string;
                /** @description The SID of the AddOnResult to which the payload to fetch belongs. */
                AddOnResultSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Recording AddOnResult Payload resource to fetch. */
                PayloadSid: string;
                /** @description The SID of the recording to which the AddOnResult resource that contains the payload to fetch belongs. */
                ReferenceSid: string;
            };
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
                    "application/json": components["schemas"]["api.v2010.account.recording.recording_add_on_result.recording_add_on_result_payload.recording_add_on_result_payload_data"];
                };
            };
        };
    };
    FetchRecordingAddOnResultPayload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resource to fetch. */
                AccountSid: string;
                /** @description The SID of the AddOnResult to which the payload to fetch belongs. */
                AddOnResultSid: string;
                /** @description The SID of the recording to which the AddOnResult resource that contains the payload to fetch belongs. */
                ReferenceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Recording AddOnResult Payload resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.recording.recording_add_on_result.recording_add_on_result_payload"];
                };
            };
        };
    };
    DeleteRecordingAddOnResultPayload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resources to delete. */
                AccountSid: string;
                /** @description The SID of the AddOnResult to which the payloads to delete belongs. */
                AddOnResultSid: string;
                /** @description The SID of the recording to which the AddOnResult resource that contains the payloads to delete belongs. */
                ReferenceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Recording AddOnResult Payload resource to delete. */
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
    FetchRecordingAddOnResult: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resource to fetch. */
                AccountSid: string;
                /** @description The SID of the recording to which the result to fetch belongs. */
                ReferenceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Recording AddOnResult resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.recording.recording_add_on_result"];
                };
            };
        };
    };
    DeleteRecordingAddOnResult: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resources to delete. */
                AccountSid: string;
                /** @description The SID of the recording to which the result to delete belongs. */
                ReferenceSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Recording AddOnResult resource to delete. */
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
    FetchRecording: {
        parameters: {
            query?: {
                /** @description A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings metadata are kept after deletion for a retention period of 40 days. */
                IncludeSoftDeleted?: boolean;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Recording resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.recording"];
                };
            };
        };
    };
    DeleteRecording: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resources to delete. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Recording resource to delete. */
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
    ListSigningKey: {
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
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        signing_keys?: components["schemas"]["api.v2010.account.signing_key"][];
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateNewSigningKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will be responsible for the new Key resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
                    FriendlyName?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.new_signing_key"];
                };
            };
        };
    };
    FetchSigningKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AccountSid: string;
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
                    "application/json": components["schemas"]["api.v2010.account.signing_key"];
                };
            };
        };
    };
    UpdateSigningKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AccountSid: string;
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
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
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["api.v2010.account.signing_key"];
                };
            };
        };
    };
    DeleteSigningKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AccountSid: string;
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
    ListSipCredentialList: {
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
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
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
                        credential_lists?: components["schemas"]["api.v2010.account.sip.sip_credential_list"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateSipCredentialList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A human readable descriptive text that describes the CredentialList, up to 64 characters long. */
                    FriendlyName: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_credential_list"];
                };
            };
        };
    };
    ListSipCredential: {
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
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description The unique id that identifies the credential list that contains the desired credentials. */
                CredentialListSid: string;
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
                        credentials?: components["schemas"]["api.v2010.account.sip.sip_credential_list.sip_credential"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateSipCredential: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description The unique id that identifies the credential list to include the created credential. */
                CredentialListSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The password that the username will use when authenticating SIP requests. The password must be a minimum of 12 characters, contain at least 1 digit, and have mixed case. (eg `IWasAtSignal2018`) */
                    Password: string;
                    /** @description The username that will be passed when authenticating SIP requests. The username should be sent in response to Twilio's challenge of the initial INVITE. It can be up to 32 characters long. */
                    Username: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_credential_list.sip_credential"];
                };
            };
        };
    };
    FetchSipCredential: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description The unique id that identifies the credential list that contains the desired credential. */
                CredentialListSid: string;
                /** @description The unique id that identifies the resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_credential_list.sip_credential"];
                };
            };
        };
    };
    UpdateSipCredential: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description The unique id that identifies the credential list that includes this credential. */
                CredentialListSid: string;
                /** @description The unique id that identifies the resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The password that the username will use when authenticating SIP requests. The password must be a minimum of 12 characters, contain at least 1 digit, and have mixed case. (eg `IWasAtSignal2018`) */
                    Password?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_credential_list.sip_credential"];
                };
            };
        };
    };
    DeleteSipCredential: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description The unique id that identifies the credential list that contains the desired credentials. */
                CredentialListSid: string;
                /** @description The unique id that identifies the resource to delete. */
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
    FetchSipCredentialList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description The credential list Sid that uniquely identifies this resource */
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_credential_list"];
                };
            };
        };
    };
    UpdateSipCredentialList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description The credential list Sid that uniquely identifies this resource */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A human readable descriptive text for a CredentialList, up to 64 characters long. */
                    FriendlyName: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_credential_list"];
                };
            };
        };
    };
    DeleteSipCredentialList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description The credential list Sid that uniquely identifies this resource */
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
    ListSipDomain: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resources to read. */
                AccountSid: string;
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
                        domains?: components["schemas"]["api.v2010.account.sip.sip_domain"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateSipDomain: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be associated with. */
                    ByocTrunkSid?: string;
                    /** @description The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and "-" and must end with `sip.twilio.com`. */
                    DomainName: string;
                    /** @description Whether an emergency caller sid is configured for the domain. If present, this phone number will be used as the callback for the emergency call. */
                    EmergencyCallerSid?: string;
                    /** @description Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on the domain from phone numbers with validated addresses. */
                    EmergencyCallingEnabled?: boolean;
                    /** @description A descriptive string that you created to describe the resource. It can be up to 64 characters long. */
                    FriendlyName?: string;
                    /** @description Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will be negotiated on all incoming calls to this sip domain. */
                    Secure?: boolean;
                    /** @description Whether to allow SIP Endpoints to register with the domain to receive calls. Can be `true` or `false`. `true` allows SIP Endpoints to register with the domain to receive calls, `false` does not. */
                    SipRegistration?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    VoiceFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs while retrieving or executing the TwiML from `voice_url`.
                     */
                    VoiceFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    VoiceMethod?: "GET" | "POST";
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `voice_status_callback_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    VoiceStatusCallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call to pass status parameters (such as call ended) to your application.
                     */
                    VoiceStatusCallbackUrl?: string;
                    /**
                     * Format: uri
                     * @description The URL we should when the domain receives a call.
                     */
                    VoiceUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain"];
                };
            };
        };
    };
    ListSipAuthCallsCredentialListMapping: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resources to read. */
                AccountSid: string;
                /** @description The SID of the SIP domain that contains the resources to read. */
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
                    "application/json": {
                        contents?: components["schemas"]["api.v2010.account.sip.sip_domain.sip_auth.sip_auth_calls.sip_auth_calls_credential_list_mapping"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateSipAuthCallsCredentialListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
                /** @description The SID of the SIP domain that will contain the new resource. */
                DomainSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the CredentialList resource to map to the SIP domain. */
                    CredentialListSid: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain.sip_auth.sip_auth_calls.sip_auth_calls_credential_list_mapping"];
                };
            };
        };
    };
    FetchSipAuthCallsCredentialListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resource to fetch. */
                AccountSid: string;
                /** @description The SID of the SIP domain that contains the resource to fetch. */
                DomainSid: string;
                /** @description The Twilio-provided string that uniquely identifies the CredentialListMapping resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain.sip_auth.sip_auth_calls.sip_auth_calls_credential_list_mapping"];
                };
            };
        };
    };
    DeleteSipAuthCallsCredentialListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resources to delete. */
                AccountSid: string;
                /** @description The SID of the SIP domain that contains the resource to delete. */
                DomainSid: string;
                /** @description The Twilio-provided string that uniquely identifies the CredentialListMapping resource to delete. */
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
    ListSipAuthCallsIpAccessControlListMapping: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlListMapping resources to read. */
                AccountSid: string;
                /** @description The SID of the SIP domain that contains the resources to read. */
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
                    "application/json": {
                        contents?: components["schemas"]["api.v2010.account.sip.sip_domain.sip_auth.sip_auth_calls.sip_auth_calls_ip_access_control_list_mapping"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateSipAuthCallsIpAccessControlListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
                /** @description The SID of the SIP domain that will contain the new resource. */
                DomainSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the IpAccessControlList resource to map to the SIP domain. */
                    IpAccessControlListSid: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain.sip_auth.sip_auth_calls.sip_auth_calls_ip_access_control_list_mapping"];
                };
            };
        };
    };
    FetchSipAuthCallsIpAccessControlListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlListMapping resource to fetch. */
                AccountSid: string;
                /** @description The SID of the SIP domain that contains the resource to fetch. */
                DomainSid: string;
                /** @description The Twilio-provided string that uniquely identifies the IpAccessControlListMapping resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain.sip_auth.sip_auth_calls.sip_auth_calls_ip_access_control_list_mapping"];
                };
            };
        };
    };
    DeleteSipAuthCallsIpAccessControlListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlListMapping resources to delete. */
                AccountSid: string;
                /** @description The SID of the SIP domain that contains the resources to delete. */
                DomainSid: string;
                /** @description The Twilio-provided string that uniquely identifies the IpAccessControlListMapping resource to delete. */
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
    ListSipAuthRegistrationsCredentialListMapping: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resources to read. */
                AccountSid: string;
                /** @description The SID of the SIP domain that contains the resources to read. */
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
                    "application/json": {
                        contents?: components["schemas"]["api.v2010.account.sip.sip_domain.sip_auth.sip_auth_registrations.sip_auth_registrations_credential_list_mapping"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateSipAuthRegistrationsCredentialListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
                /** @description The SID of the SIP domain that will contain the new resource. */
                DomainSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the CredentialList resource to map to the SIP domain. */
                    CredentialListSid: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain.sip_auth.sip_auth_registrations.sip_auth_registrations_credential_list_mapping"];
                };
            };
        };
    };
    FetchSipAuthRegistrationsCredentialListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resource to fetch. */
                AccountSid: string;
                /** @description The SID of the SIP domain that contains the resource to fetch. */
                DomainSid: string;
                /** @description The Twilio-provided string that uniquely identifies the CredentialListMapping resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain.sip_auth.sip_auth_registrations.sip_auth_registrations_credential_list_mapping"];
                };
            };
        };
    };
    DeleteSipAuthRegistrationsCredentialListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resources to delete. */
                AccountSid: string;
                /** @description The SID of the SIP domain that contains the resources to delete. */
                DomainSid: string;
                /** @description The Twilio-provided string that uniquely identifies the CredentialListMapping resource to delete. */
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
    ListSipCredentialListMapping: {
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
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description A 34 character string that uniquely identifies the SIP Domain that includes the resource to read. */
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
                    "application/json": {
                        credential_list_mappings?: components["schemas"]["api.v2010.account.sip.sip_domain.sip_credential_list_mapping"][];
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateSipCredentialListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description A 34 character string that uniquely identifies the SIP Domain for which the CredentialList resource will be mapped. */
                DomainSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A 34 character string that uniquely identifies the CredentialList resource to map to the SIP domain. */
                    CredentialListSid: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain.sip_credential_list_mapping"];
                };
            };
        };
    };
    FetchSipCredentialListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description A 34 character string that uniquely identifies the SIP Domain that includes the resource to fetch. */
                DomainSid: string;
                /** @description A 34 character string that uniquely identifies the resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain.sip_credential_list_mapping"];
                };
            };
        };
    };
    DeleteSipCredentialListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description A 34 character string that uniquely identifies the SIP Domain that includes the resource to delete. */
                DomainSid: string;
                /** @description A 34 character string that uniquely identifies the resource to delete. */
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
    ListSipIpAccessControlListMapping: {
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
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description A 34 character string that uniquely identifies the SIP domain. */
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
                    "application/json": {
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        ip_access_control_list_mappings?: components["schemas"]["api.v2010.account.sip.sip_domain.sip_ip_access_control_list_mapping"][];
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateSipIpAccessControlListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description A 34 character string that uniquely identifies the SIP domain. */
                DomainSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The unique id of the IP access control list to map to the SIP domain. */
                    IpAccessControlListSid: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain.sip_ip_access_control_list_mapping"];
                };
            };
        };
    };
    FetchSipIpAccessControlListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description A 34 character string that uniquely identifies the SIP domain. */
                DomainSid: string;
                /** @description A 34 character string that uniquely identifies the resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain.sip_ip_access_control_list_mapping"];
                };
            };
        };
    };
    DeleteSipIpAccessControlListMapping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the Account that is responsible for this resource. */
                AccountSid: string;
                /** @description A 34 character string that uniquely identifies the SIP domain. */
                DomainSid: string;
                /** @description A 34 character string that uniquely identifies the resource to delete. */
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
    FetchSipDomain: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the SipDomain resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain"];
                };
            };
        };
    };
    UpdateSipDomain: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resource to update. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the SipDomain resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be associated with. */
                    ByocTrunkSid?: string;
                    /** @description The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and "-" and must end with `sip.twilio.com`. */
                    DomainName?: string;
                    /** @description Whether an emergency caller sid is configured for the domain. If present, this phone number will be used as the callback for the emergency call. */
                    EmergencyCallerSid?: string;
                    /** @description Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on the domain from phone numbers with validated addresses. */
                    EmergencyCallingEnabled?: boolean;
                    /** @description A descriptive string that you created to describe the resource. It can be up to 64 characters long. */
                    FriendlyName?: string;
                    /** @description Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will be negotiated on all incoming calls to this sip domain. */
                    Secure?: boolean;
                    /** @description Whether to allow SIP Endpoints to register with the domain to receive calls. Can be `true` or `false`. `true` allows SIP Endpoints to register with the domain to receive calls, `false` does not. */
                    SipRegistration?: boolean;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    VoiceFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call when an error occurs while retrieving or executing the TwiML requested by `voice_url`.
                     */
                    VoiceFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `voice_url`
                     * @enum {string}
                     */
                    VoiceMethod?: "GET" | "POST";
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `voice_status_callback_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    VoiceStatusCallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call to pass status parameters (such as call ended) to your application.
                     */
                    VoiceStatusCallbackUrl?: string;
                    /**
                     * Format: uri
                     * @description The URL we should call when the domain receives a call.
                     */
                    VoiceUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_domain"];
                };
            };
        };
    };
    DeleteSipDomain: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resources to delete. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the SipDomain resource to delete. */
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
    ListSipIpAccessControlList: {
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
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        ip_access_control_lists?: components["schemas"]["api.v2010.account.sip.sip_ip_access_control_list"][];
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateSipIpAccessControlList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A human readable descriptive text that describes the IpAccessControlList, up to 255 characters long. */
                    FriendlyName: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_ip_access_control_list"];
                };
            };
        };
    };
    ListSipIpAddress: {
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
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description The IpAccessControlList Sid that identifies the IpAddress resources to read. */
                IpAccessControlListSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        ip_addresses?: components["schemas"]["api.v2010.account.sip.sip_ip_access_control_list.sip_ip_address"][];
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    CreateSipIpAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description The IpAccessControlList Sid with which to associate the created IpAddress resource. */
                IpAccessControlListSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used. */
                    CidrPrefixLength?: number;
                    /** @description A human readable descriptive text for this resource, up to 255 characters long. */
                    FriendlyName: string;
                    /** @description An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today. */
                    IpAddress: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_ip_access_control_list.sip_ip_address"];
                };
            };
        };
    };
    FetchSipIpAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description The IpAccessControlList Sid that identifies the IpAddress resources to fetch. */
                IpAccessControlListSid: string;
                /** @description A 34 character string that uniquely identifies the IpAddress resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_ip_access_control_list.sip_ip_address"];
                };
            };
        };
    };
    UpdateSipIpAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description The IpAccessControlList Sid that identifies the IpAddress resources to update. */
                IpAccessControlListSid: string;
                /** @description A 34 character string that identifies the IpAddress resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used. */
                    CidrPrefixLength?: number;
                    /** @description A human readable descriptive text for this resource, up to 255 characters long. */
                    FriendlyName?: string;
                    /** @description An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today. */
                    IpAddress?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_ip_access_control_list.sip_ip_address"];
                };
            };
        };
    };
    DeleteSipIpAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description The IpAccessControlList Sid that identifies the IpAddress resources to delete. */
                IpAccessControlListSid: string;
                /** @description A 34 character string that uniquely identifies the resource to delete. */
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
    FetchSipIpAccessControlList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description A 34 character string that uniquely identifies the resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_ip_access_control_list"];
                };
            };
        };
    };
    UpdateSipIpAccessControlList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description A 34 character string that uniquely identifies the resource to udpate. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A human readable descriptive text, up to 255 characters long. */
                    FriendlyName: string;
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
                    "application/json": components["schemas"]["api.v2010.account.sip.sip_ip_access_control_list"];
                };
            };
        };
    };
    DeleteSipIpAccessControlList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource. */
                AccountSid: string;
                /** @description A 34 character string that uniquely identifies the resource to delete. */
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
                /** @description The string that identifies the ShortCode resources to read. */
                FriendlyName?: string;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only show the ShortCode resources that match this pattern. You can specify partial numbers and use '*' as a wildcard for any digit. */
                ShortCode?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource(s) to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        short_codes?: components["schemas"]["api.v2010.account.short_code"][];
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchShortCode: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource(s) to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the ShortCode resource to fetch */
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
                    "application/json": components["schemas"]["api.v2010.account.short_code"];
                };
            };
        };
    };
    UpdateShortCode: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource(s) to update. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the ShortCode resource to update */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. */
                    ApiVersion?: string;
                    /** @description A descriptive string that you created to describe this resource. It can be up to 64 characters long. By default, the `FriendlyName` is the short code. */
                    FriendlyName?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method that we should use to call the `sms_fallback_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    SmsFallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL that we should call if an error occurs while retrieving or executing the TwiML from `sms_url`.
                     */
                    SmsFallbackUrl?: string;
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use when calling the `sms_url`. Can be: `GET` or `POST`.
                     * @enum {string}
                     */
                    SmsMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call when receiving an incoming SMS message to this short code.
                     */
                    SmsUrl?: string;
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
                    "application/json": components["schemas"]["api.v2010.account.short_code"];
                };
            };
        };
    };
    CreateToken: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The duration in seconds for which the generated credentials are valid. The default value is 86400 (24 hours). */
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
                    "application/json": components["schemas"]["api.v2010.account.token"];
                };
            };
        };
    };
    ListTranscription: {
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
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        transcriptions?: components["schemas"]["api.v2010.account.transcription"][];
                        /** Format: uri */
                        uri?: string;
                    };
                };
            };
        };
    };
    FetchTranscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Transcription resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.transcription"];
                };
            };
        };
    };
    DeleteTranscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resources to delete. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the Transcription resource to delete. */
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
    ListUsageRecord: {
        parameters: {
            query?: {
                /** @description The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved. */
                Category?: string;
                /** @description Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date. */
                EndDate?: string;
                /** @description Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account. */
                IncludeSubaccounts?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date. */
                StartDate?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                        usage_records?: components["schemas"]["api.v2010.account.usage.usage_record"][];
                    };
                };
            };
        };
    };
    ListUsageRecordAllTime: {
        parameters: {
            query?: {
                /** @description The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved. */
                Category?: string;
                /** @description Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date. */
                EndDate?: string;
                /** @description Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account. */
                IncludeSubaccounts?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date. */
                StartDate?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                        usage_records?: components["schemas"]["api.v2010.account.usage.usage_record.usage_record_all_time"][];
                    };
                };
            };
        };
    };
    ListUsageRecordDaily: {
        parameters: {
            query?: {
                /** @description The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved. */
                Category?: string;
                /** @description Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date. */
                EndDate?: string;
                /** @description Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account. */
                IncludeSubaccounts?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date. */
                StartDate?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                        usage_records?: components["schemas"]["api.v2010.account.usage.usage_record.usage_record_daily"][];
                    };
                };
            };
        };
    };
    ListUsageRecordLastMonth: {
        parameters: {
            query?: {
                /** @description The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved. */
                Category?: string;
                /** @description Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date. */
                EndDate?: string;
                /** @description Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account. */
                IncludeSubaccounts?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date. */
                StartDate?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                        usage_records?: components["schemas"]["api.v2010.account.usage.usage_record.usage_record_last_month"][];
                    };
                };
            };
        };
    };
    ListUsageRecordMonthly: {
        parameters: {
            query?: {
                /** @description The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved. */
                Category?: string;
                /** @description Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date. */
                EndDate?: string;
                /** @description Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account. */
                IncludeSubaccounts?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date. */
                StartDate?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                        usage_records?: components["schemas"]["api.v2010.account.usage.usage_record.usage_record_monthly"][];
                    };
                };
            };
        };
    };
    ListUsageRecordThisMonth: {
        parameters: {
            query?: {
                /** @description The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved. */
                Category?: string;
                /** @description Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date. */
                EndDate?: string;
                /** @description Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account. */
                IncludeSubaccounts?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date. */
                StartDate?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                        usage_records?: components["schemas"]["api.v2010.account.usage.usage_record.usage_record_this_month"][];
                    };
                };
            };
        };
    };
    ListUsageRecordToday: {
        parameters: {
            query?: {
                /** @description The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved. */
                Category?: string;
                /** @description Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date. */
                EndDate?: string;
                /** @description Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account. */
                IncludeSubaccounts?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date. */
                StartDate?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                        usage_records?: components["schemas"]["api.v2010.account.usage.usage_record.usage_record_today"][];
                    };
                };
            };
        };
    };
    ListUsageRecordYearly: {
        parameters: {
            query?: {
                /** @description The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved. */
                Category?: string;
                /** @description Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date. */
                EndDate?: string;
                /** @description Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account. */
                IncludeSubaccounts?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date. */
                StartDate?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                        usage_records?: components["schemas"]["api.v2010.account.usage.usage_record.usage_record_yearly"][];
                    };
                };
            };
        };
    };
    ListUsageRecordYesterday: {
        parameters: {
            query?: {
                /** @description The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved. */
                Category?: string;
                /** @description Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date. */
                EndDate?: string;
                /** @description Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account. */
                IncludeSubaccounts?: boolean;
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date. */
                StartDate?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                        usage_records?: components["schemas"]["api.v2010.account.usage.usage_record.usage_record_yesterday"][];
                    };
                };
            };
        };
    };
    ListUsageTrigger: {
        parameters: {
            query?: {
                /** @description The page index. This value is simply for client state. */
                Page?: number;
                /** @description How many resources to return in each list page. The default is 50, and the maximum is 1000. */
                PageSize?: number;
                /** @description The page token. This is provided by the API. */
                PageToken?: string;
                /** @description The frequency of recurring UsageTriggers to read. Can be: `daily`, `monthly`, or `yearly` to read recurring UsageTriggers. An empty value or a value of `alltime` reads non-recurring UsageTriggers. */
                Recurring?: components["schemas"]["usage_trigger_enum_recurring"];
                /** @description The trigger field of the UsageTriggers to read.  Can be: `count`, `usage`, or `price` as described in the [UsageRecords documentation](https://www.twilio.com/docs/usage/api/usage-record#usage-count-price). */
                TriggerBy?: components["schemas"]["usage_trigger_enum_trigger_field"];
                /** @description The usage category of the UsageTriggers to read. Must be a supported [usage categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories). */
                UsageCategory?: string;
            };
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resources to read. */
                AccountSid: string;
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
                        end?: number;
                        /** Format: uri */
                        first_page_uri?: string;
                        /** Format: uri */
                        next_page_uri?: string | null;
                        page?: number;
                        page_size?: number;
                        /** Format: uri */
                        previous_page_uri?: string | null;
                        start?: number;
                        /** Format: uri */
                        uri?: string;
                        usage_triggers?: components["schemas"]["api.v2010.account.usage.usage_trigger"][];
                    };
                };
            };
        };
    };
    CreateUsageTrigger: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
                AccountSid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is `POST`.
                     * @enum {string}
                     */
                    CallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call using `callback_method` when the trigger fires.
                     */
                    CallbackUrl: string;
                    /** @description A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
                    FriendlyName?: string;
                    Recurring?: components["schemas"]["usage_trigger_enum_recurring"];
                    TriggerBy?: components["schemas"]["usage_trigger_enum_trigger_field"];
                    /** @description The usage value at which the trigger should fire.  For convenience, you can use an offset value such as `+30` to specify a trigger_value that is 30 units more than the current usage value. Be sure to urlencode a `+` as `%2B`. */
                    TriggerValue: string;
                    /** @description The usage category that the trigger should watch.  Use one of the supported [usage categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) for this value. */
                    UsageCategory: string;
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
                    "application/json": components["schemas"]["api.v2010.account.usage.usage_trigger"];
                };
            };
        };
    };
    FetchUsageTrigger: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resource to fetch. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the UsageTrigger resource to fetch. */
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
                    "application/json": components["schemas"]["api.v2010.account.usage.usage_trigger"];
                };
            };
        };
    };
    UpdateUsageTrigger: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resources to update. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the UsageTrigger resource to update. */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /**
                     * Format: http-method
                     * @description The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is `POST`.
                     * @enum {string}
                     */
                    CallbackMethod?: "GET" | "POST";
                    /**
                     * Format: uri
                     * @description The URL we should call using `callback_method` when the trigger fires.
                     */
                    CallbackUrl?: string;
                    /** @description A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
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
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["api.v2010.account.usage.usage_trigger"];
                };
            };
        };
    };
    DeleteUsageTrigger: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resources to delete. */
                AccountSid: string;
                /** @description The Twilio-provided string that uniquely identifies the UsageTrigger resource to delete. */
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
    FetchAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Account Sid that uniquely identifies the account to fetch */
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
                    "application/json": components["schemas"]["api.v2010.account"];
                };
            };
        };
    };
    UpdateAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Account Sid that uniquely identifies the account to update */
                Sid: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Update the human-readable description of this Account */
                    FriendlyName?: string;
                    Status?: components["schemas"]["account_enum_status"];
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
                    "application/json": components["schemas"]["api.v2010.account"];
                };
            };
        };
    };
}
