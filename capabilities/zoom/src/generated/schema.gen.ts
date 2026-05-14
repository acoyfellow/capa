export type paths = {
    "/accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List sub accounts
         * @description List all the sub accounts under the master account
         */
        get: operations["accounts"];
        put?: never;
        /**
         * Create a sub account
         * @description Create a sub account under the master account. <aside>Your account must be a master account and have this privilege to create sub account. Zoom only assigns this privilege to trusted partners. The created user will not receive a confirmation email.</aside>.
         */
        post: operations["accountCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounts/{accountId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a sub account
         * @description Retrieve a sub account under the master account. <aside>Your account must be a master account and have this privilege to read sub accounts. Zoom only assigns this privilege to trusted partners</aside>.
         */
        get: operations["account"];
        put?: never;
        post?: never;
        /**
         * Disassociate an account
         * @description Disassociate a sub account from the master account. This will leave the account intact but the sub account will not longer be associated with the master account.
         */
        delete: operations["accountDisassociate"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounts/{accountId}/billing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve billing information for a sub account
         * @description Retrieve billing information for a sub account under the master account
         */
        get: operations["accountBilling"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update billing information for a sub account
         * @description Update billing information for a sub account under the master account <aside>Only for the sub account which is a paid account and paid by master account</aside>
         */
        patch: operations["accountBillingUpdate"];
        trace?: never;
    };
    "/accounts/{accountId}/managed_domains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a sub account's managed domains
         * @description Retrieve a sub account's managed domains under the master account
         */
        get: operations["accountManagedDomain"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounts/{accountId}/options": {
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
        /**
         * Update a sub account's options
         * @description Update a sub account's options under the master account
         */
        patch: operations["accountOptionsUpdate"];
        trace?: never;
    };
    "/accounts/{accountId}/plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve plan information for a sub account
         * @description Retrieve plan information for a sub account under the master account  <aside>Only for the sub account which is paid by master account</aside>
         */
        get: operations["accountPlans"];
        put?: never;
        /**
         * Subscribe plans for a sub account
         * @description Subscribe plans for a sub account of the master account <aside>Can only subscribe plans for the sub account which is a free account and paid by master account</aside>
         */
        post: operations["accountPlanCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounts/{accountId}/plans/addons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update an additional plan for sub account
         * @description Update an additional plan for sub account<aside>Can only update an Additional plan for the sub account which is a paid account and paid by master account</aside>
         */
        put: operations["accountPlanAddonUpdate"];
        /**
         * Add an additional plan for sub account
         * @description Add an additional plan for sub account <aside>Can only add an Additional plan for the sub account which is a paid account and paid by master account</aside>
         */
        post: operations["accountPlanAddonCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounts/{accountId}/plans/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update a base plan for a sub account
         * @description Update a base plan for a sub account <aside>Can only update a base plan for the sub account which is a paid account and paid by master account</aside>
         */
        put: operations["accountPlanBaseUpdate"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounts/{accountId}/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a sub account's settings
         * @description Retrieve a sub account's settings under the master account
         */
        get: operations["accountSettings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a sub account's settings
         * @description Update a sub account's settings under the master account
         */
        patch: operations["accountSettingsUpdate"];
        trace?: never;
    };
    "/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List groups
         * @description List groups under your account
         */
        get: operations["groups"];
        put?: never;
        /**
         * Create a group
         * @description Create a group under your account
         */
        post: operations["groupCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups/{groupId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a group
         * @description Retrieve a group under your account
         */
        get: operations["group"];
        put?: never;
        post?: never;
        /**
         * Delete a group
         * @description Delete a group under your account
         */
        delete: operations["groupDelete"];
        options?: never;
        head?: never;
        /**
         * Update a group
         * @description Update a group under your account
         */
        patch: operations["groupUpdate"];
        trace?: never;
    };
    "/groups/{groupId}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a group's members
         * @description List a group's members under your account
         */
        get: operations["groupMembers"];
        put?: never;
        /**
         * Add group members
         * @description Add members to a group under your account
         */
        post: operations["groupMembersCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups/{groupId}/members/{memberId}": {
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
         * Delete a group member
         * @description Delete a member from a group under your account
         */
        delete: operations["groupMembersDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/h323/devices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List H.323/SIP Devices.
         * @description List H.323/SIP Devices on your Zoom account.
         */
        get: operations["deviceList"];
        put?: never;
        /**
         * Create a H.323/SIP Device
         * @description Create a H.323/SIP Device on your Zoom account
         */
        post: operations["deviceCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/h323/devices/{deviceId}": {
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
         * Delete a H.323/SIP Device
         * @description Delete a H.323/SIP Device on your Zoom account
         */
        delete: operations["deviceDelete"];
        options?: never;
        head?: never;
        /**
         * Update a H.323/SIP Device
         * @description Update a H.323/SIP Device on your Zoom account
         */
        patch: operations["deviceUpdate"];
        trace?: never;
    };
    "/im/chat/sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve IM Chat sessions
         * @description Retrieve IM Chat sessions for a specified period <aside>This API only supports oauth2.</aside>
         */
        get: operations["imChatSessions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/im/chat/sessions/{sessionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve IM Chat messages
         * @description Retrieve IM Chat messages for a specified period <aside>This API only supports oauth2.</aside>
         */
        get: operations["imChatMessages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/im/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List IM Groups
         * @description List IM groups under your account
         */
        get: operations["imGroups"];
        put?: never;
        /**
         * Create an IM Group
         * @description Create a IM Group under your account
         */
        post: operations["imGroupCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/im/groups/{groupId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an IM Group
         * @description Retrieve an IM Group under your account
         */
        get: operations["imGroup"];
        put?: never;
        post?: never;
        /**
         * Delete an IM Group
         * @description Delete an IM Group under your account
         */
        delete: operations["imGroupDelete"];
        options?: never;
        head?: never;
        /**
         * Update an IM Group
         * @description Update an IM Group under your account
         */
        patch: operations["imGroupUpdate"];
        trace?: never;
    };
    "/im/groups/{groupId}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List an IM Group's members
         * @description List an IM Group's members under your account
         */
        get: operations["imGroupMembers"];
        put?: never;
        /**
         * Add IM Group members
         * @description Add members to an IM Group under your account
         */
        post: operations["imGroupMembersCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/im/groups/{groupId}/members/{memberId}": {
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
         * Delete an IM Group member
         * @description Delete a member from an IM Group under your account
         */
        delete: operations["imGroupMembersDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/meetings/{meetingId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a meeting
         * @description Retrieve a meeting's details
         */
        get: operations["meeting"];
        put?: never;
        post?: never;
        /**
         * Delete a meeting
         * @description Delete a meeting
         */
        delete: operations["meetingDelete"];
        options?: never;
        head?: never;
        /**
         * Update a meeting
         * @description Update a meeting's details
         */
        patch: operations["meetingUpdate"];
        trace?: never;
    };
    "/meetings/{meetingId}/invitation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve meeting invitation
         * @description Retrieve a meeting invitation
         */
        get: operations["meetingInvitation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/meetings/{meetingId}/livestream": {
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
        /**
         * Update a meeting live stream
         * @description Update a meeting's live stream
         */
        patch: operations["meetingLiveStreamUpdate"];
        trace?: never;
    };
    "/meetings/{meetingId}/livestream/status": {
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
        /**
         * Update a meeting live stream status
         * @description Update a meeting's live stream status
         */
        patch: operations["meetingLiveStreamStatusUpdate"];
        trace?: never;
    };
    "/meetings/{meetingId}/polls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a meeting's polls
         * @description List polls of a meeting
         */
        get: operations["meetingPolls"];
        put?: never;
        /**
         * Create a meeting's poll
         * @description Create a poll for a meeting
         */
        post: operations["meetingPollCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/meetings/{meetingId}/polls/{pollId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a meeting's poll
         * @description Retrieve a meeting's poll
         */
        get: operations["meetingPollGet"];
        /**
         * Update a meeting's poll
         * @description Update a meeting's poll
         */
        put: operations["meetingPollUpdate"];
        post?: never;
        /**
         * Delete a meeting's Poll
         * @description Delete a meeting's Poll
         */
        delete: operations["meetingPollDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/meetings/{meetingId}/recordings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a meeting’s all recordings
         * @description Retrieve a meeting’s all recordings
         */
        get: operations["recordingGet"];
        put?: never;
        post?: never;
        /**
         * Delete a meeting's recordings
         * @description Delete a meeting's recordings
         */
        delete: operations["recordingDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/meetings/{meetingId}/recordings/{recordingId}": {
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
         * Delete one meeting recording file
         * @description Delete one meeting recording file
         */
        delete: operations["recordingDeleteOne"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/meetings/{meetingId}/recordings/{recordingId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Recover a single recording
         * @description Recover a single recording
         */
        put: operations["recordingStatusUpdateOne"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/meetings/{meetingId}/recordings/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a meeting recording's settings
         * @description Retrieve a meeting recording's settings
         */
        get: operations["recordingSettingUpdate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a meeting recording's settings
         * @description Update a meeting recording's settings
         */
        patch: operations["recordingSettingsUpdate"];
        trace?: never;
    };
    "/meetings/{meetingId}/recordings/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Recover a meeting's recordings
         * @description Recover a meeting's recordings
         */
        put: operations["recordingStatusUpdate"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/meetings/{meetingId}/registrants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a meeting's registrants
         * @description List registrants of a meeting
         */
        get: operations["meetingRegistrants"];
        put?: never;
        /**
         * Add a meeting registrant
         * @description Register a participant for a meeting
         */
        post: operations["meetingRegistrantCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/meetings/{meetingId}/registrants/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update a meeting registrant's status
         * @description Update a meeting registrant's status
         */
        put: operations["meetingRegistrantStatus"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/meetings/{meetingId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update a meeting's status
         * @description Update a meeting's status
         */
        put: operations["meetingStatus"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/crc": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve CRC Port Usage
         * @description Get CRC Port usage hour by hour for a specified time period <aside class='notice'>We will report a maximum of one month. For example, if "from" is set to "2017-08-05" and "to" is "2017-10-10" we will adjust "from" to "2017-09-10"</aside>.
         */
        get: operations["dashboardCRC"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/im": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve IM
         * @description Retrieve metrics of Zoom IM
         */
        get: operations["dashboardIM"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/meetings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List meetings
         * @description List live meetings or past meetings for a specified period
         */
        get: operations["dashboardMeetings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/meetings/{meetingId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve meeting detail
         * @description Retrieve live or past meetings detail
         */
        get: operations["dashboardMeetingDetail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/meetings/{meetingId}/participants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve meeting participants
         * @description Retrieve live or past meetings participants
         */
        get: operations["dashboardMeetingParticipants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/meetings/{meetingId}/participants/{participantId}/qos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve meeting participant QOS
         * @description Retrieve live or past meetings participant quality of service
         */
        get: operations["dashboardMeetingParticipantQOS"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/meetings/{meetingId}/participants/qos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List meeting participants QOS
         * @description Retrieve list of live or past meetings participants quality of service
         */
        get: operations["dashboardMeetingParticipantsQOS"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/meetings/{meetingId}/participants/sharing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve sharing/recording details of meeting participant
         * @description Retrieve sharing/recording details of live or past meetings participant
         */
        get: operations["dashboardMeetingParticipantShare"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/webinars": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List webinars
         * @description List live webinars or past webinars for a specified period
         */
        get: operations["dashboardWebinars"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/webinars/{webinarId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve webinar detail
         * @description Retrieve live  or past webinars detail
         */
        get: operations["dashboardWebinarDetail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/webinars/{webinarId}/participants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve webinar participants
         * @description Retrieve live or past webinar participants
         */
        get: operations["dashboardWebinarParticipants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/webinars/{webinarId}/participants/{participantId}/qos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve webinar participant QOS
         * @description Retrieve live or past webinar participant quality of service
         */
        get: operations["dashboardWebinarParticipantQOS"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/webinars/{webinarId}/participants/qos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List webinar participant QOS
         * @description Retrieve list of live or past webinar participants quality of service
         */
        get: operations["dashboardWebinarParticipantsQOS"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/webinars/{webinarId}/participants/sharing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve sharing/recording details of webinar participant
         * @description Retrieve sharing/recording details of live or past webinar participant
         */
        get: operations["dashboardWebinarParticipantShare"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/zoomrooms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Zoom Rooms
         * @description List all zoom rooms on account
         */
        get: operations["dashboardZoomRooms"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics/zoomrooms/{zoomroomId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve Zoom Room
         * @description Retrieve zoom room on account
         */
        get: operations["dashboardZoomRoom"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/past_meetings/{meetingId}/instances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List of ended meeting instances
         * @description List of ended meeting instances
         */
        get: operations["pastMeetings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/past_meetings/{meetingUUID}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve past meeting details
         * @description Retrieve ended meeting details
         */
        get: operations["pastMeetingDetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/past_meetings/{meetingUUID}/participants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve past meeting participants
         * @description Retrieve ended meeting participants
         */
        get: operations["pastMeetingParticipants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/past_webinars/{webinarId}/instances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List of ended webinar instances
         * @description List of ended webinar instances
         */
        get: operations["pastWebinars"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/cloud_recording": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve cloud recording usage report
         * @description Retrieve cloud recording usage report for a specified period. You can only get cloud recording reports for the most recent period of 6 months. The date gap between from and to dates should be smaller or equal to 30 days.
         */
        get: operations["reportCloudRecording"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/daily": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve daily report
         * @description Retrieve daily report for one month, can only get daily report for recent 6 months
         */
        get: operations["reportDaily"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/meetings/{meetingId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve meeting details report
         * @description Retrieve ended meeting details report
         */
        get: operations["reportMeetingDetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/meetings/{meetingId}/participants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve meeting participants report
         * @description Retrieve ended meeting participants report
         */
        get: operations["reportMeetingParticipants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/meetings/{meetingId}/polls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve meeting polls report
         * @description Retrieve ended meeting polls report
         */
        get: operations["reportMeetingPolls"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/telephone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve telephone report
         * @description Retrieve telephone report for a specified period <aside>Toll Report option would be removed.</aside>.
         */
        get: operations["reportTelephone"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve hosts report
         * @description Retrieve active or inactive hosts report for a specified period
         */
        get: operations["reportUsers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/users/{userId}/meetings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve meetings report
         * @description Retrieve ended meetings report for a specified period
         */
        get: operations["reportMeetings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/webinars/{webinarId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve webinar details report
         * @description Retrieve ended webinar details report
         */
        get: operations["reportWebinarDetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/webinars/{webinarId}/participants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve webinar participants report
         * @description Retrieve ended webinar participants report
         */
        get: operations["reportWebinarParticipants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/webinars/{webinarId}/polls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve webinar polls report
         * @description Retrieve ended webinar polls report
         */
        get: operations["reportWebinarPolls"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/webinars/{webinarId}/qa": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve webinar Q&A report
         * @description Retrieve ended webinar Q&A report
         */
        get: operations["reportWebinarQA"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tsp": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve account's TSP information
         * @description Retrieve TSP information on account level
         */
        get: operations["tsp"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update account's TSP information
         * @description Update TSP information on account level
         */
        patch: operations["tspUpdate"];
        trace?: never;
    };
    "/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Users
         * @description List users on your account
         */
        get: operations["users"];
        put?: never;
        /**
         * Create a user
         * @description Create a user on your account
         */
        post: operations["userCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a user
         * @description Retrieve a user on your account
         */
        get: operations["user"];
        put?: never;
        post?: never;
        /**
         * Delete a user
         * @description Delete a user on your account
         */
        delete: operations["userDelete"];
        options?: never;
        head?: never;
        /**
         * Update a user
         * @description Update a user on your account
         */
        patch: operations["userUpdate"];
        trace?: never;
    };
    "/users/{userId}/assistants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a user's assistants
         * @description List a user's assistants
         */
        get: operations["userAssistants"];
        put?: never;
        /**
         * Add assistants
         * @description Add assistants to a user
         */
        post: operations["userAssistantCreate"];
        /**
         * Delete a user's assistants
         * @description Delete all of a user'sassitants
         */
        delete: operations["userAssistantsDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/assistants/{assistantId}": {
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
         * Delete a user's assistant
         * @description Delete one of a user's assistants
         */
        delete: operations["userAssistantDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/email": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update a user's email
         * @description Update a user's email
         */
        put: operations["userEmailUpdate"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/meetings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List meetings
         * @description List meetings for a user
         */
        get: operations["meetings"];
        put?: never;
        /**
         * Create a meeting
         * @description Create a meeting for a user <aside>The expiration time of start_url is two hours. But for API users, the expiration time is 90 days.</aside>
         */
        post: operations["meetingCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/pac": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List user's PAC accounts
         * @description List user's PAC accounts
         */
        get: operations["userPACs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update a user's password
         * @description Update a user's password
         */
        put: operations["userPassword"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a user's permissions
         * @description Retrieve a user's permissions
         */
        get: operations["userPermission"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/picture": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload a user's picture
         * @description Upload a user's profile picture
         */
        post: operations["userPicture"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/recordings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all the recordings
         * @description List all the recordings
         */
        get: operations["recordingsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/schedulers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a user's schedulers
         * @description List a user's schedulers
         */
        get: operations["userSchedulers"];
        put?: never;
        post?: never;
        /**
         * Delete a user's schedulers
         * @description Delete all of a user'schedulers
         */
        delete: operations["userSchedulersDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/schedulers/{schedulerId}": {
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
         * Delete a user's scheduler
         * @description Delete one of a user's schedulers
         */
        delete: operations["userSchedulerDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a user's settings
         * @description Retrieve a user's settings
         */
        get: operations["userSettings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a user's settings
         * @description Update a user's settings
         */
        patch: operations["userSettingsUpdate"];
        trace?: never;
    };
    "/users/{userId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update a user's status
         * @description Update a user's status
         */
        put: operations["userStatus"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a user's token
         * @description Retrieve a user's token
         */
        get: operations["userToken"];
        put?: never;
        post?: never;
        /**
         * Revoke a user's SSO token
         * @description Revoke a user's SSO token
         */
        delete: operations["userSSOTokenDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/tsp": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List user's TSP accounts
         * @description List user's TSP accounts
         */
        get: operations["userTSPs"];
        put?: never;
        /**
         * Add a user's TSP account
         * @description Add a user's TSP account
         */
        post: operations["userTSPCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/tsp/{tspId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a user's TSP account
         * @description Retrieve a user's TSP account
         */
        get: operations["userTSP"];
        put?: never;
        post?: never;
        /**
         * Delete a user's TSP account
         * @description Delete a user's TSP account
         */
        delete: operations["userTSPDelete"];
        options?: never;
        head?: never;
        /**
         * Update a TSP account
         * @description Update a user's TSP account
         */
        patch: operations["userTSPUpdate"];
        trace?: never;
    };
    "/users/{userId}/webinars": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List webinars
         * @description List webinars for a user
         */
        get: operations["webinars"];
        put?: never;
        /**
         * Create a webinar
         * @description Create a webinar for a user <aside>The expiration time of start_url is two hours. But for API users, the expiration time is 90 days.</aside>
         */
        post: operations["webinarCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/email": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check a user's email
         * @description Check if the user email exists
         */
        get: operations["userEmail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/vanity_name": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check a user's personal meeting room name
         * @description Check if the user's personal meeting room name exists
         */
        get: operations["userVanityName"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/zpk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Verify a user's zpk (Deprecated
         * @description Check if the zpk is expired. The zpk is used to authenticate a user.
         */
        get: operations["userZPK"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/tracking_fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Tracking Fields.
         * @description List Tracking Fields on your Zoom account.
         */
        get: operations["trackingfieldList"];
        put?: never;
        /**
         * Create a Tracking Field
         * @description Create a Tracking Field on your Zoom account
         */
        post: operations["trackingfieldCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/tracking_fields/{fieldId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a tracking field
         * @description Retrieve a tracking field
         */
        get: operations["trackingfieldGet"];
        put?: never;
        post?: never;
        /**
         * Delete a Tracking Field
         * @description Delete a Tracking Field on your Zoom account
         */
        delete: operations["trackingfieldDelete"];
        options?: never;
        head?: never;
        /**
         * Update a Tracking Field
         * @description Update a Tracking Field on your Zoom account
         */
        patch: operations["trackingfieldUpdate"];
        trace?: never;
    };
    "/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List webhooks
         * @description List webhooks for a account
         */
        get: operations["webhooks"];
        put?: never;
        /**
         * Create a webhook
         * @description Create a webhook for a account
         */
        post: operations["webhookCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/{webhookId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a webhook
         * @description Retrieve a webhook
         */
        get: operations["webhook"];
        put?: never;
        post?: never;
        /**
         * Delete a webhook
         * @description Delete a webhook
         */
        delete: operations["webhookDelete"];
        options?: never;
        head?: never;
        /**
         * Update a webhook
         * @description Update a webhook
         */
        patch: operations["webhookUpdate"];
        trace?: never;
    };
    "/webhooks/options": {
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
        /**
         * Switch webhook version
         * @description Switch webhook version
         */
        patch: operations["webhookSwitch"];
        trace?: never;
    };
    "/webinars/{webinarId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a webinar
         * @description Retrieve a webinar
         */
        get: operations["webinar"];
        put?: never;
        post?: never;
        /**
         * Delete a webinar
         * @description Delete a webinar
         */
        delete: operations["webinarDelete"];
        options?: never;
        head?: never;
        /**
         * Update a webinar
         * @description Update a webinar
         */
        patch: operations["webinarUpdate"];
        trace?: never;
    };
    "/webinars/{webinarId}/panelists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a webinar's panelists
         * @description List panelists for a webinar
         */
        get: operations["webinarPanelists"];
        put?: never;
        /**
         * Add a webinar panelist
         * @description Add panelist to webinar
         */
        post: operations["webinarPanelistCreate"];
        /**
         * Remove a webinar's panelists
         * @description Remove all panelists from a webinar
         */
        delete: operations["webinarPanelistsDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webinars/{webinarId}/panelists/{panelistId}": {
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
         * Remove a webinar panelist
         * @description Remove a panelist from a webinar
         */
        delete: operations["webinarPanelistDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webinars/{webinarId}/polls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a webinar's polls
         * @description List polls of a webinar
         */
        get: operations["webinarPolls"];
        put?: never;
        /**
         * Create a webinar's poll
         * @description Create a poll for a webinar
         */
        post: operations["webinarPollCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webinars/{webinarId}/polls/{pollId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a webinar's poll
         * @description Retrieve a webinar's poll
         */
        get: operations["webinarPollGet"];
        /**
         * Update a webinar's poll
         * @description Update a webinar's poll
         */
        put: operations["webinarPollUpdate"];
        post?: never;
        /**
         * Delete a webinar's Poll
         * @description Delete a webinar's Poll
         */
        delete: operations["webinarPollDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webinars/{webinarId}/registrants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a webinar's registrants
         * @description List registrants for a webinar
         */
        get: operations["webinarRegistrants"];
        put?: never;
        /**
         * Add a webinar registrant
         * @description Add a registrant for a webinar
         */
        post: operations["webinarRegistrantCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webinars/{webinarId}/registrants/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update a webinar registrant's status
         * @description Update a webinar registrant's status
         */
        put: operations["webinarRegistrantStatus"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webinars/{webinarId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update a webinar's status
         * @description Update a webinar's status
         */
        put: operations["webinarStatus"];
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
        /** @description The account object represents an account on zoom. The person who created the account, or who the account was created for, is referred to as the account owner. You can read more about the Zoom account structure <a href='https://developer.zoom.us/blog/a-brief-look-at-zoom-account-structures/' target='_blank'>here</a>. */
        Account: {
            /** @description User's email address */
            email: string;
            /** @description User's first name */
            first_name: string;
            /** @description User's last name */
            last_name: string;
            options?: components["schemas"]["AccountOptions"];
            /** @description User's password */
            password: string;
        };
        /**
         * Account List
         * @description List of Accounts
         */
        AccountList: components["schemas"]["Pagination"] & components["schemas"]["AccountListItem"];
        /** @description Account object in account list */
        AccountListItem: {
            /** @description List of Account objects */
            accounts?: {
                /** @description Account name */
                account_name?: string;
                /** @description Account type */
                account_type?: string;
                /**
                 * Format: date-time
                 * @description Account creation date/time
                 */
                created_at?: string;
                /**
                 * Format: uuid
                 * @description Account ID
                 */
                id?: string;
                /** @description Account owner email */
                owner_email?: string;
                /** @description Account seats */
                seats?: number;
                /**
                 * Format: date-time
                 * @description Account subscription end date/time
                 */
                subscription_end_time?: string;
                /**
                 * Format: date-time
                 * @description Account subscription start date/time
                 */
                subscription_start_time?: string;
            }[];
        };
        /** @description Account options object */
        AccountOptions: {
            /** @description Meeting Connector, multiple values separated by comma */
            meeting_connectors?: string;
            /**
             * @description Payee
             * @default master
             * @enum {string}
             */
            pay_mode: "master" | "sub";
            /** @description Virtual Room Connector, multiple value separated by comma */
            room_connectors?: string;
            /**
             * @description Enable Share Meeting Connector
             * @default false
             */
            share_mc: boolean;
            /**
             * @description Enable Share Virtual Room Connector
             * @default false
             */
            share_rc: boolean;
        };
        /** @description Account plan object */
        AccountPlan: {
            /** @description Account plan number of hosts */
            hosts?: number;
            /** @description Account <a href="#plans">plan type</a> */
            type?: string;
        };
        /** @description Account base plan object */
        AccountPlanBaseRequired: {
            /** @description Account base plan number of hosts. For a Pro Plan, please select a value between 1 and 9. For a Business Plan, please select a value between 10 and 49. For a Education Plan, please select a value between 20 and 149. For a Free Trial Plan, please select a value between 1 and 9999. */
            hosts: number;
            /** @description Account base <a href="#plans">plan type</a> */
            type: string;
        };
        /** @description Account plan object */
        AccountPlanRequired: {
            /** @description Account plan number of hosts */
            hosts: number;
            /** @description Account <a href="#plans">plan type</a> */
            type: string;
        };
        /** @description Account Plans object */
        AccountPlans: {
            /** @description Additional Audio Conferencing <a href="#plans">plan type</a> */
            plan_audio?: {
                /** @description Call-out countries, multiple value separated by comma */
                callout_countries?: string;
                /** @description Dedicated Dial-In Numbers */
                ddi_numbers?: number;
                /** @description Premium countries, multiple value separated by comma */
                premium_countries?: string;
                /** @description Toll-free countries, multiple value separated by comma */
                tollfree_countries?: string;
                /** @description Additional Audio Conferencing <a href="#plans">plan type</a> */
                type?: string;
            };
            plan_base?: components["schemas"]["AccountPlanBaseRequired"];
            /** @description Additional Large Meeting Plans */
            plan_large_meeting?: components["schemas"]["AccountPlan"][];
            /** @description Additional Cloud Recording Plan */
            plan_recording?: string;
            plan_room_connector?: components["schemas"]["AccountPlan"];
            /** @description Additional Webinar Plans */
            plan_webinar?: components["schemas"]["AccountPlan"][];
            plan_zoom_rooms?: components["schemas"]["AccountPlan"];
        };
        /** Account settings */
        AccountSettings: {
            email_notification?: components["schemas"]["AccountSettingsEmailNotification"];
            feature?: components["schemas"]["AccountSettingsFeature"];
            in_meeting?: components["schemas"]["AccountSettingsInMeeting"];
            integration?: components["schemas"]["AccountSettingsIntegration"];
            recording?: components["schemas"]["AccountSettingsRecording"];
            schedule_meting?: components["schemas"]["AccountSettingsScheduleMeeting"];
            security?: components["schemas"]["AccountSettingsSecurity"];
            telephony?: components["schemas"]["AccountSettingsTelephony"];
            zoom_rooms?: components["schemas"]["AccountSettingsZoomRooms"];
        };
        /** @description Account Settings: Notification */
        AccountSettingsEmailNotification: {
            /** @description Notify when an alternative host is set or removed from a meeting */
            alternative_host_reminder?: boolean;
            /** @description Notify host and participants when the meeting is cancelled */
            cancel_meeting_reminder?: boolean;
            /** @description Notify host when cloud recording is available */
            cloud_recording_avaliable_reminder?: boolean;
            /** @description Notify host when participants join the meeting before them */
            jbh_reminder?: boolean;
            /** @description Notify when host licenses are running low */
            low_host_count_reminder?: boolean;
        };
        /** @description Account Settings: Feature */
        AccountSettingsFeature: {
            /**
             * @description Set the maximum number of participants this user can have in a single meeting
             * @default 100
             */
            meeting_capacity: number;
        };
        /** @description Account Settings: In Meeting */
        AccountSettingsInMeeting: {
            /** @description Identify guest participants in the meeting/webinar */
            alert_guest_join?: boolean;
            /** @description Allow live streaming */
            allow_live_streaming?: boolean;
            /** @description Show Zoom Desktop application when sharing screen */
            allow_show_zoom_windows?: boolean;
            /** @description Allow participants to use annotation tools to add information to shared screens */
            annotation?: boolean;
            /** @description Allow Anonymous Q&A in Webinar */
            anonymous_question_answer?: boolean;
            /** @description Allow hosts to temporarily remove an attendee from the meeting */
            attendee_on_hold?: boolean;
            /** @description Lets the host see an indicator in the participant panel if a meeting/webinar attendee does not have Zoom in focus during screen sharing */
            attention_tracking?: boolean;
            /** @description Enable users to see and add contacts to 'auto-answer group' in the contact list on chat. Any call from members of this group will be automatically answered. */
            auto_answer?: boolean;
            /** @description Automatically save all in-meeting chats so that hosts do not need to manually save the text of the chat after the meeting starts */
            auto_saving_chat?: boolean;
            /** @description Allow host to split meeting participants into separate, smaller rooms */
            breakout_room?: boolean;
            /** @description Allow meeting participants to send a message visible to all participants */
            chat?: boolean;
            /** @description Allow host to type closed captions or assign a participant/third party device to add closed captions */
            closed_caption?: boolean;
            /** @description Allow the host to add co-hosts */
            co_host?: boolean;
            /** @description Custom live streaming */
            custom_live_streaming?: boolean;
            /** @description Custom service instructions */
            custom_service_instructions?: string;
            /** @description DSCP Audio */
            dscp_audio?: number;
            /** @description DSCP marking */
            dscp_marking?: boolean;
            /** @description DSCP Video */
            dscp_video?: number;
            /** @description Require that all meetings are encrypted using AES */
            e2e_encryption?: boolean;
            /** @description Allow another user to take control of your camera during a meeting */
            far_end_camera_control?: boolean;
            /** @description Add a Feedback tab to the Windows Settings or Mac Preferences dialog, and also enable users to provide feedback to Zoom at the end of the meeting */
            feedback?: boolean;
            /** @description Hosts and participants can send files through the in-meeting chat */
            file_transfer?: boolean;
            /** @description Activate higher quality video for host and participants. (This will use more bandwidth.) */
            group_hd?: boolean;
            /** @description Allow users to select original sound in their client settings */
            original_audio?: boolean;
            /** @description Peer to Peer connection while only 2 people are in a meeting */
            p2p_connetion?: boolean;
            /** @description P2P listening ports range */
            p2p_ports?: boolean;
            /** @description Add 'Polls' to the meeting controls. */
            polling?: boolean;
            /**
             * @description Listening ports range, separated by comma (ex 55,56). The ports range must be between 1 to 65535.
             * @default
             */
            ports_range: string;
            /** @description Display a thumbs up/down survey at the end of each meeting */
            post_meeting_feedback?: boolean;
            /** @description Allow meeting participants to send a private 1:1 message to another participants */
            private_chat?: boolean;
            /** @description Allow users to request remote control */
            remote_control?: boolean;
            /** @description Allow screen sharing */
            screen_sharing?: boolean;
            /** @description Only show default email when sending email invites */
            sending_default_email_invites?: boolean;
            /** @description Always show meeting control toolbar */
            show_meeting_control_toolbar?: boolean;
            /** @description Allow users to select stereo audio in their client settings */
            stereo_audio?: boolean;
            /** @description Use HTML format email for Outlook plugin */
            use_html_format_email?: boolean;
            /** @description Allow users to replace their background with any selected image. Choose or upload an image in the Zoom Desktop application settings. */
            virtual_background?: boolean;
            /** @description Add watermark when viewing shared screen */
            watermark?: boolean;
            /** @description Q&A in webinar */
            webinar_question_answer?: boolean;
            /** @description Allow participants to share a whiteboard that includes annotation tools */
            whiteboard?: boolean;
            /** @description Workplace by facebook */
            workplace_by_facebook?: boolean;
        };
        /** @description Account Settings: Integration */
        AccountSettingsIntegration: {
            /** @description Enables users who join a meeting from their mobile device to share content from their Box account */
            box?: boolean;
            /** @description Enables users who join a meeting from their mobile device to share content from their Dropbox account */
            dropbox?: boolean;
            /** @description Enables meetings to be scheduled using Google Calendars */
            google_calendar?: boolean;
            /** @description Enables users who join a meeting from their mobile device to share content from their Google Drive */
            google_drive?: boolean;
            /** @description Enables users to control a connected Kubi device from within a Zoom meeting */
            kubi?: boolean;
            /** @description Enables users who join a meeting from their mobile device to share content from their Microsoft OneDrive account */
            microsoft_one_drive?: boolean;
        };
        /** @description Account Settings: Recording */
        AccountSettingsRecording: {
            /** @description Cloud recordings are only accessible to account members. People outside of your organization cannot open links that provide access to cloud recordings. */
            account_user_access_recording?: boolean;
            /** @description Allow Zoom to automatically delete recordings permanently after a specified number of days */
            auto_delete_cmr?: boolean;
            /** @description When `auto_delete_cmr` is 'true' this value will set the number of days before auto deletion of cloud recordings */
            auto_delete_cmr_days?: number;
            /**
             * @description Record meetings automatically as they start
             * @enum {string}
             */
            auto_recording?: "local" | "cloud" | "none";
            /** @description Allow hosts to record and save the meeting in the cloud */
            cloud_recording?: boolean;
            /** @description Cloud Recording Downloads */
            cloud_recording_download?: boolean;
            /** @description Only the host can download cloud recordings */
            cloud_recording_download_host?: boolean;
            /** @description Allow hosts and participants to record the meeting to a local file */
            local_recording?: boolean;
            /** @description Record an audio only file */
            record_audio_file?: boolean;
            /** @description Record gallery view with shared screen */
            record_gallery_view?: boolean;
            /** @description Record active speaker with shared screen */
            record_speaker_view?: boolean;
            /** @description Automatically transcribe the audio of the meeting or webinar to the cloud */
            recording_audio_transcript?: boolean;
            /** @description Save chat text from the meeting */
            save_chat_text?: boolean;
            /** @description Add a timestamp to the recording */
            show_timestamp?: boolean;
        };
        /** @description Account Settings: Schedule Meeting */
        AccountSettingsScheduleMeeting: {
            /**
             * @description Determine how participants can join the audio portion of the meeting
             * @default both
             * @enum {string}
             */
            audio_type: "both" | "telephony" | "voip" | "thirdParty";
            /** @description Only signed-in (Zoom users) users can join meetings */
            enforce_login?: boolean;
            /** @description Only signed-in users with a specified domains */
            enforce_login_domains?: string;
            /** @description Only signed-in users with a specific domain can join meetings */
            enforce_login_with_domains?: boolean;
            /** @description Require a password for Personal Meetings if attendees can join before host */
            force_pmi_jbh_password?: boolean;
            /** @description Start meetings with host video on */
            host_video?: boolean;
            /** @description Allow participants to join the meeting before the host arrives */
            join_before_host?: boolean;
            /** @description Always display "Zoom Meeting" as the meeting topic */
            not_store_meeting_topic?: boolean;
            /** @description Start meetings with participant video on. Participants can change this during the meeting. */
            participant_video?: boolean;
        };
        /** @description Account Settings: Security */
        AccountSettingsSecurity: {
            /** @description Only account administrators can change user's username and picture */
            admin_change_name_pic?: boolean;
            /** @description Hide billing information */
            hide_billing_info?: boolean;
            /** @description Allow importing of photos from photo library on the user's device */
            import_photos_from_devices?: boolean;
        };
        /** @description Account Settings: Telephony */
        AccountSettingsTelephony: {
            /** @description 3rd party audio conference info */
            audio_conference_info?: string;
            /** @description Users can join the meeting using the existing 3rd party audio configuration */
            third_party_audio?: boolean;
        };
        /** @description Account Settings: Zoom Rooms */
        AccountSettingsZoomRooms: {
            /** @description Automatic start/stop for scheduled meetings */
            auto_start_stop_scheduled_meetings?: boolean;
            /** @description Cloud recording for instant meetings */
            cmr_for_instant_meeting?: boolean;
            /** @description Transform all meetings to private */
            force_private_meeting?: boolean;
            /** @description Hide host and meeting ID from private meetings */
            hide_host_information?: boolean;
            /** @description Display meeting list with calendar integration */
            list_meetings_with_calendar?: boolean;
            /** @description Start AirPlay service manually */
            start_airplay_manually?: boolean;
            /** @description Automatic direct sharing using ultrasonic proximity signal */
            ultrasonic?: boolean;
            /** @description Upcoming meeting alert */
            upcoming_meeting_alert?: boolean;
            /** @description Weekly system restart */
            weekly_system_restart?: boolean;
            /** @description Zoom Room post meeting feedback */
            zr_post_meeting_feedback?: boolean;
        };
        /** @description Billing Contact object */
        BillingContact: {
            /** @description Billing Contact's address */
            address?: string;
            /** @description Billing Contact's apartment/suite */
            apt?: string;
            /** @description Billing Contact's city */
            city?: string;
            /** @description Billing Contact's country */
            country?: string;
            /** @description Billing Contact's email address */
            email?: string;
            /** @description Billing Contact's first name */
            first_name?: string;
            /** @description Billing Contact's last name */
            last_name?: string;
            /** @description Billing Contact's phone number */
            phone_number?: string;
            /** @description Billing Contact's state */
            state?: string;
            /** @description Billing Contact's zip/postal code */
            zip?: string;
        };
        /** @description Billing Contact object */
        BillingContactRequired: {
            /** @description Billing Contact's address */
            address: string;
            /** @description Billing Contact's apartment/suite */
            apt?: string;
            /** @description Billing Contact's city */
            city: string;
            /** @description Billing Contact's country */
            country: string;
            /** @description Billing Contact's email address */
            email: string;
            /** @description Billing Contact's first name */
            first_name: string;
            /** @description Billing Contact's last name */
            last_name: string;
            /** @description Billing Contact's phone number */
            phone_number: string;
            /** @description Billing Contact's state */
            state: string;
            /** @description Billing Contact's zip/postal code */
            zip: string;
        };
        /** @description Custom Question */
        CustomQuestion: {
            title?: string;
            value?: string;
        };
        /** @description DateTime Object */
        DateTime: {
            /**
             * Format: date
             * @description Start Date,
             */
            from?: string;
            /**
             * Format: date
             * @description End Date
             */
            to?: string;
        };
        /**
         * The H.323/SIP device object.
         * @description The H.323/SIP device object.
         */
        Device: {
            /**
             * @description Device encryption
             * @enum {string}
             */
            encryption: "auto" | "yes" | "no";
            /** @description Device Ip */
            ip: string;
            /** @description Device name */
            name: string;
            /**
             * @description Device protocol
             * @enum {string}
             */
            protocol: "H.323" | "SIP";
        };
        /**
         * H.323/SIP Device List
         * @description List of H.323/SIP Devices
         */
        DeviceList: components["schemas"]["Pagination"] & {
            /** @description List of H.323/SIP Device objects */
            devices?: ({
                /** @description Device ID */
                id?: string;
            } & components["schemas"]["Device"])[];
        };
        /** @description List of Managed Domains */
        DomainsList: {
            /** @description List of Managed Domains objects */
            domains?: {
                /** @description Domain Name */
                domain?: string;
                /** @description Domain Status */
                status?: string;
            }[];
            /** @description Total records */
            total_records?: number;
        };
        /** @description Group object */
        Group: {
            /** @description Group name */
            name?: string;
            /** @description Total number of members in this group */
            total_members?: number;
        };
        /** @description List of Groups */
        GroupList: {
            /** @description List of Group objects */
            groups?: ({
                /** @description Group ID */
                id?: string;
            } & components["schemas"]["Group"])[];
            /** @description Total records */
            total_records?: number;
        };
        /** @description Group member object */
        GroupMember: {
            /** @description User email */
            email?: string;
            /** @description User first name */
            first_name?: string;
            /** @description User ID */
            id?: string;
            /** @description User last name */
            last_name?: string;
            /** @description User type */
            type?: number;
        };
        /**
         * Group Member List
         * @description List of Group Members
         */
        GroupMemberList: components["schemas"]["Pagination"] & {
            /** @description List of Group member objects */
            members?: components["schemas"]["GroupMember"][];
        };
        /** @description IM Group object */
        IMGroup: components["schemas"]["Group"] & {
            /** @description Members can search others under same account */
            search_by_account?: boolean;
            /** @description Members can search others in the same email domain */
            search_by_domain?: boolean;
            /** @description Members can search others under same master account, including all sub accounts */
            search_by_ma_account?: boolean;
            /**
             * @description IM Group type
             * @default normal
             * @enum {string}
             */
            type: "normal" | "shared" | "restricted";
        };
        /**
         * IM Group List
         * @description List of IM Groups
         */
        IMGroupList: components["schemas"]["Pagination"] & {
            /** @description List of Group objects */
            groups?: ({
                /** @description IM Group ID */
                id?: string;
            } & components["schemas"]["IMGroup"])[];
        };
        /** @description Meeting object */
        Meeting: components["schemas"]["Session"];
        /** @description Meeting object */
        MeetingInfo: {
            /** @description Agenda */
            agenda?: string;
            /**
             * Format: date-time
             * @description Create time
             */
            created_at?: string;
            /** @description Meeting duration */
            duration?: number;
            /** @description H.323/SIP room system password */
            h323_password?: string;
            /** @description Join url */
            join_url?: string;
            occurrences?: components["schemas"]["Occurrences"];
            /** @description Meeting password */
            password?: string;
            settings?: components["schemas"]["MeetingSettings"];
            /**
             * Format: date-time
             * @description Meeting start time
             */
            start_time?: string;
            /** @description Start url */
            start_url?: string;
            /** @description Timezone to format start_time */
            timezone?: string;
            /** @description Meeting topic */
            topic?: string;
            /** @description Tracking fields */
            tracking_fields?: {
                /** @description Tracking fields type */
                field?: string;
                /** @description Tracking fields value */
                value?: string;
            }[];
            /**
             * @description Meeting Type
             * @default 2
             * @enum {integer}
             */
            type: 1 | 2 | 3 | 8;
        };
        /**
         * Meeting instances
         * @description List of Meetings
         */
        MeetingInstances: {
            /** @description List of ended meeting instances. */
            meetings?: {
                /**
                 * Format: date-time
                 * @description Start time
                 */
                start_time?: string;
                /** @description MeetingUUID */
                uuid?: string;
            }[];
        };
        /**
         * Meeting Invitation
         * @description Meeting invitation details
         */
        MeetingInvitation: {
            /** @description Meeting invitation */
            invitation?: string;
        };
        /**
         * Group List
         * @description List of Meetings
         */
        MeetingList: components["schemas"]["Pagination"] & {
            /** @description List of Meeting objects */
            meetings?: {
                /**
                 * Format: date-time
                 * @description Create time
                 */
                created_at?: string;
                /** @description Meeting duration */
                duration?: number;
                /** @description ID of the user set as host of meeting */
                host_id?: string;
                /** @description Meeting ID, also know as meeting number */
                id?: string;
                /** @description Join url */
                join_url?: string;
                /**
                 * Format: date-time
                 * @description Meeting start time
                 */
                start_time?: string;
                /** @description Timezone to format start_time */
                timezone?: string;
                /** @description Meeting topic */
                topic?: string;
                /**
                 * @description Meeting Type
                 * @enum {integer}
                 */
                type?: 1 | 2 | 3 | 8;
                /** @description Meeting unique ID */
                uuid?: string;
            }[];
        };
        /** @description Meeting Live Stream */
        MeetingLiveStream: {
            /** @description View URL. */
            page_url?: string;
            /** @description Stream name/key. */
            stream_key: string;
            /** @description Server URL. */
            stream_url: string;
        };
        /** @description Meeting Live Stream Status */
        MeetingLiveStreamStatus: {
            /**
             * @description Action
             * @enum {string}
             */
            action?: "start" | "stop";
            settings?: {
                /** @description Live stream active speaker name. */
                active_speaker_name?: boolean;
                /** @description Live stream display name. */
                display_name?: string;
            };
        };
        /**
         * Meeting Metrics
         * @description Meeting metric details
         */
        MeetingMetric: {
            /** @description Meeting duration */
            duration?: string;
            /** @description User email */
            email?: string;
            /**
             * Format: date-time
             * @description Meeting end time
             */
            end_time?: string;
            has_3rd_party_audio?: boolean;
            has_pstn?: boolean;
            has_recording?: boolean;
            has_screen_share?: boolean;
            has_sip?: boolean;
            has_video?: boolean;
            has_voip?: boolean;
            /** @description User display name */
            host?: string;
            /** @description Meeting ID */
            id?: number;
            /** @description Meeting participant count */
            participants?: number;
            /**
             * Format: date-time
             * @description Meeting start time
             */
            start_time?: string;
            /** @description Meeting topic */
            topic?: string;
            /** @description User type */
            user_type?: string;
            /**
             * Format: uuid
             * @description Meeting UUID
             */
            uuid?: string;
        };
        /**
         * Registration List
         * @description List of meeting recording registrant
         */
        MeetingRecordingRegistrantList: components["schemas"]["RecordingRegistrantList"];
        /** @description Meeting registrant */
        MeetingRegistrant: components["schemas"]["Registrant"];
        /**
         * Registration List
         * @description List of Users
         */
        MeetingRegistrantList: components["schemas"]["RegistrantList"];
        /** @description Meeting Settings */
        MeetingSettings: {
            /** @description Alternative hosts emails or IDs. Multiple value separated by comma. */
            alternative_hosts?: string;
            /**
             * @default 2
             * @enum {integer}
             */
            approval_type: 0 | 1 | 2;
            /**
             * @description Determine how participants can join the audio portion of the meeting
             * @default both
             * @enum {string}
             */
            audio: "both" | "telephony" | "voip";
            /**
             * @default none
             * @enum {string}
             */
            auto_recording: "local" | "cloud" | "none";
            /**
             * @description Close registration after event date
             * @default false
             */
            close_registration: boolean;
            /**
             * @description Host meeting in China
             * @default false
             */
            cn_meeting: boolean;
            /** @description Only signed-in users can join this meeting */
            enforce_login?: boolean;
            /** @description Only signed-in users with specified domains can join meetings */
            enforce_login_domains?: string;
            /** @description Start video when host joins meeting */
            host_video?: boolean;
            /**
             * @description Host meeting in India
             * @default false
             */
            in_meeting: boolean;
            /**
             * @description Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings.
             * @default false
             */
            join_before_host: boolean;
            /**
             * @description Mute participants upon entry
             * @default false
             */
            mute_upon_entry: boolean;
            /** @description Start video when participants join meeting */
            participant_video?: boolean;
            /**
             * @description Registration type. Used for recurring meeting with fixed time only.
             * @default 1
             * @enum {integer}
             */
            registration_type: 1 | 2 | 3;
            /**
             * @description Use Personal Meeting ID. Only used for scheduled meetings and recurring meetings with no fixed time.
             * @default false
             */
            use_pmi: boolean;
            /**
             * @description Enable waiting room
             * @default false
             */
            waiting_room: boolean;
            /**
             * @description Add watermark when viewing shared screen
             * @default false
             */
            watermark: boolean;
        };
        /** @description Meeting object */
        MeetingUpdate: components["schemas"]["SessionUpdate"];
        /** @description Occurence object */
        Occurrence: {
            /** @description Duration */
            duration?: number;
            /** @description Occurrence Id */
            occurrence_id?: number;
            /**
             * Format: date-time
             * @description Start time
             */
            start_time?: string;
            /** @description Occurrence status */
            status?: string;
        };
        /** @description Array of occurrence objects */
        Occurrences: components["schemas"]["Occurrence"][];
        /**
         * PAC Accounts List
         * @description List of PAC Accounts
         */
        PAC: {
            /** @description Conference ID */
            conference_id?: number;
            /** @description List of Dedicated Dial In Numbers */
            dedicated_dial_in_number?: {
                /** @description Country Code */
                country?: string;
                /** @description Dial-in number, length is less than 16 */
                number?: string;
            }[];
            /** @description List of Global Dial In Numbers */
            global_dial_in_numbers?: {
                /** @description Country Code */
                country?: string;
                /** @description Dial-in number, length is less than 16 */
                number?: string;
            }[];
            /** @description Listen-Only Password, numeric value, length is less than 6 */
            listen_only_password?: string;
            /** @description Participant Password, numeric value, length is less than 6 */
            participant_password?: string;
        };
        /** @description Pagination Object */
        Pagination: {
            /** @description The number of items returned on this page */
            page_count?: number;
            /**
             * @description The page number of current results
             * @default 1
             */
            page_number: number;
            /**
             * @description The number of records returned within a single API call
             * @default 30
             */
            page_size: number;
            /** @description The number of all records available across pages */
            total_records?: number;
        };
        /** @description Pagination Object */
        PaginationToken: {
            /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
            next_page_token?: string;
            /** @description The number of items returned on this page */
            page_count?: number;
            /**
             * @description The number of records returned within a single API call.
             * @default 30
             */
            page_size: number;
            /** @description The number of all records available across pages */
            total_records?: number;
        };
        /** @description Pagination Object */
        PaginationToken4IMChat: {
            /** @description Next page token, used to paginate through large result sets. A next page token will be returned whenever the set of available result list exceeds page size. The expiration period is 15 minutes. */
            next_page_token?: string;
            /**
             * @description The amount of records returns within a single API call.
             * @default 30
             */
            page_size: number;
        };
        /** @description Pagination Object */
        PaginationToken4Qos: {
            /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
            next_page_token?: string;
            /**
             * Format: int64
             * @description The number of items returned on this page
             */
            page_count?: number;
            /**
             * @description The number of items per page
             * @default 1
             */
            page_size: number;
            /**
             * Format: int64
             * @description The number of all records available across pages
             */
            total_records?: number;
        };
        /** @description Panelist base object */
        Panelist: {
            /** @description Panelist's email */
            email?: string;
            /** @description Panelist's full name */
            name?: string;
        };
        /**
         * Panelist List
         * @description List of Panelist
         */
        PanelistList: {
            /** @description List of Panelist objects */
            panelists?: ({
                /** @description Panelist's ID */
                id?: string;
            } & components["schemas"]["Panelist"] & {
                /** @description Join url */
                join_url?: string;
            })[];
            /** @description Total records */
            total_records?: number;
        };
        /**
         * Poll
         * @description Poll
         */
        Poll: {
            /** @description Array of Polls */
            questions?: {
                /** @description Question answers */
                answers?: string[];
                /** @description Question name */
                name?: string;
                /**
                 * @description Question type
                 * @enum {string}
                 */
                type?: "single" | "multiple";
            }[];
            /** @description Poll Title */
            title?: string;
        };
        /**
         * Poll List
         * @description Poll List
         */
        PollList: {
            /** @description Array of Polls */
            polls?: ({
                /** @description ID of Poll */
                id?: string;
                /**
                 * @description Status of Poll
                 * @enum {string}
                 */
                status?: "notstart" | "started" | "ended" | "sharing";
            } & components["schemas"]["Poll"])[];
            /** @description The number of all records available across pages */
            total_records?: number;
        };
        /**
         * QOS Object
         * @description Quality of Service object
         */
        QOSAudio: {
            /** @description Average Loss */
            avg_loss?: string;
            /** @description Bitrate */
            bitrate?: string;
            /** @description Jitter */
            jitter?: string;
            /** @description Latency */
            latency?: string;
            /** @description Max Loss */
            max_loss?: string;
        };
        /**
         * Participant QOS
         * @description Participant QOS
         */
        QOSParticipant: {
            /** @description Participant device */
            device?: string;
            /** @description Participant domain */
            domain?: string;
            /** @description Participant hard disk id */
            harddisk_id?: string;
            /** @description Participant IP Address */
            ip_address?: string;
            /**
             * Format: date-time
             * @description Participant join time
             */
            join_time?: string;
            /**
             * Format: date-time
             * @description Participant leave time
             */
            leave_time?: string;
            /** @description Participant location */
            location?: string;
            /** @description Participant MAC Address */
            mac_addr?: string;
            /** @description Participant PC name */
            pc_name?: string;
            /**
             * Format: uuid
             * @description Participant ID
             */
            user_id?: string;
            /** @description Participant display name */
            user_name?: string;
            /** @description User quality of service */
            user_qos?: {
                as_input?: components["schemas"]["QOSVideo"];
                as_output?: components["schemas"]["QOSVideo"];
                audio_input?: components["schemas"]["QOSAudio"];
                audio_output?: components["schemas"]["QOSAudio"];
                cpu_usage?: {
                    /** @description System Maximum CPU Usage */
                    system_max_cpu_usage?: string;
                    /** @description Zoom Average CPU Usage */
                    zoom_avg_cpu_usage?: string;
                    /** @description Zoom Maximum CPU Usage */
                    zoom_max_cpu_usage?: string;
                    /** @description Zoom Minimum CPU Usage */
                    zoom_min_cpu_usage?: string;
                };
                /**
                 * Format: date-time
                 * @description Datetime of QOS
                 */
                date_time?: string;
                video_input?: components["schemas"]["QOSVideo"];
                video_output?: components["schemas"]["QOSVideo"];
            };
            /** @description Participant version */
            version?: string;
        };
        /**
         * Participant QOS List
         * @description Participant QOS List
         */
        QOSParticipantList: components["schemas"]["PaginationToken4Qos"] & {
            /** @description Array of user objects */
            participants?: components["schemas"]["QOSParticipant"][];
        };
        /**
         * QOS Object
         * @description Quality of Service object
         */
        QOSVideo: components["schemas"]["QOSAudio"] & {
            /** @description Frame Rate */
            frame_rate?: string;
            /** @description Resolution */
            resolution?: string;
        };
        /** @description Recording file Object */
        Recording: {
            /** @description The recording delete time. Response in trash query. */
            deleted_time?: string;
            /** @description The recording download url. Response in general query. */
            download_url?: string;
            /** @description The recording file size. */
            file_size?: number;
            /** @description The recording file type. */
            file_type?: string;
            /** @description The recording file ID.Response in general query. */
            id?: string;
            /** @description The meeting ID. */
            meeting_id?: string;
            /** @description The recording file play url. Response in general query. */
            play_url?: string;
            /** @description The recording end time. Response in general query. */
            recording_end?: string;
            /** @description The recording start time. */
            recording_start?: string;
            /** @description The recording file type. */
            recording_type?: string;
            /** @description The recording status. Response in general query. */
            status?: string;
        };
        /**
         * Recording file List
         * @description List of Recording file
         */
        RecordingList: {
            /**
             * Recording file List
             * @description List of Recording file
             */
            recording_files?: components["schemas"]["Recording"][];
        };
        /** @description The recording meeting object */
        RecordingMeeting: {
            /** @description ID of the user account */
            account_id?: string;
            /** @description Meeting duration */
            duration?: number;
            /** @description ID of the user set as host of meeting */
            host_id?: string;
            /** @description Meeting ID, also know as meeting number */
            id?: string;
            /** @description Recording count */
            recording_count?: string;
            /**
             * Format: date-time
             * @description Meeting start time
             */
            start_time?: string;
            /** @description Meeting topic */
            topic?: string;
            /** @description Total size */
            total_size?: string;
            /** @description Meeting unique ID */
            uuid?: string;
        } & components["schemas"]["RecordingList"];
        /**
         * Recording List
         * @description List of Recording
         */
        RecordingMeetingList: components["schemas"]["DateTime"] & components["schemas"]["PaginationToken"] & {
            /**
             * Recording List
             * @description List of Recording
             */
            meetings?: components["schemas"]["RecordingMeeting"][];
        };
        /**
         * Recording Registration List
         * @description List of Recording Registration
         */
        RecordingRegistrantList: components["schemas"]["Pagination"] & {
            /** @description List of Registrant objects */
            registrants?: ({
                id?: string;
            } & components["schemas"]["MeetingRegistrant"])[];
        };
        /** @description Registrant Status */
        RecordingRegistrantStatus: {
            /** @enum {string} */
            action: "approve" | "deny";
            /** @description List of registrants */
            registrants?: {
                id?: string;
            }[];
        };
        /** Recording settings */
        RecordingSettings: {
            /**
             * @description Approval type
             * @enum {integer}
             */
            approval_type?: 0 | 1 | 2;
            /** @description Registration required */
            on_demand?: boolean;
            /** @description Password protect */
            password?: string;
            /** @description Send an email to host when someone registers */
            send_email_to_host?: boolean;
            /**
             * @description Determine if the meeting recording is shared
             * @enum {string}
             */
            share_recording?: "publicly" | "internally" | "none";
            /** @description Show social share buttons on registration page */
            show_social_share_buttons?: boolean;
            /** @description Host video */
            viewer_download?: boolean;
        };
        /** @description Recurrence object */
        Recurrence: {
            /**
             * Format: date-time
             * @description Select a date the meeting will occur before it is canceled.. Should be UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
             */
            end_date_time?: string;
            /**
             * @description Select how many times the meeting will occur before it is canceled. (Cannot be used with "end_date_time".)
             * @default 1
             */
            end_times: number;
            /** @description Day of the month for the meeting to be scheduled. The value range is from 1 to 31. */
            monthly_day?: number;
            /**
             * @description Week for which the meeting should recur each month,
             * @enum {integer}
             */
            monthly_week?: -1 | 1 | 2 | 3 | 4;
            /**
             * @description Day for which the meeting should recur each month
             * @enum {integer}
             */
            monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
            /** @description At which interval should the meeting repeat? For a daily meeting, max of 90 days. For a weekly meeting, max of 12 weeks. For a monthly meeting, max of 3 months. */
            repeat_interval?: number;
            /**
             * @description Recurrence meeting type
             * @enum {integer}
             */
            type?: 1 | 2 | 3;
            /**
             * @description Days of the week the meeting should repeat, multiple values separated by comma
             * @enum {integer}
             */
            weekly_days?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** @description Registrant base object */
        Registrant: {
            /** @description Address */
            address?: string;
            /** @description City */
            city?: string;
            /** @description Questions & Comments */
            comments?: string;
            /** @description Country */
            country?: string;
            /** @description Custom Questions */
            custom_questions?: components["schemas"]["CustomQuestion"][];
            /** @description A valid email address */
            email: string;
            /** @description User’s first name */
            first_name: string;
            /** @description Industry */
            industry?: string;
            /** @description Job Title */
            job_title?: string;
            /** @description User’s last name */
            last_name: string;
            /**
             * @description Number of Employees
             * @enum {string}
             */
            no_of_employees?: "1-20" | "21-50" | "51-100" | "101-500" | "500-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
            /** @description Organization */
            org?: string;
            /** @description Phone */
            phone?: string;
            /**
             * @description Purchasing Time Frame
             * @enum {string}
             */
            purchasing_time_frame?: "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
            /**
             * @description Role in Purchase Process
             * @enum {string}
             */
            role_in_purchase_process?: "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
            /** @description State/Province */
            state?: string;
            /** @description Zip/Postal Code */
            zip?: string;
        };
        /**
         * Registration List
         * @description List of Users
         */
        RegistrantList: components["schemas"]["Pagination"] & {
            /** @description List of Registrant objects */
            registrants?: ({
                id?: string;
            } & components["schemas"]["MeetingRegistrant"] & {
                /** Format: date-time */
                create_time?: string;
                /** Format: string */
                join_url?: string;
                status?: string;
            })[];
        };
        /** @description Registrant Status */
        RegistrantStatus: {
            /** @enum {string} */
            action: "approve" | "cancel" | "deny";
            /** @description List of registrants */
            registrants?: {
                email?: string;
                id?: string;
            }[];
        };
        /** @description Base object for sessions */
        Session: {
            /** @description Meeting description */
            agenda?: string;
            /** @description Meeting duration (minutes). Used for scheduled meetings only */
            duration?: number;
            /** @description Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters. */
            password?: string;
            recurrence?: components["schemas"]["Recurrence"];
            settings?: components["schemas"]["MeetingSettings"];
            /**
             * Format: date-time
             * @description Meeting start time. When using a format like "yyyy-MM-dd'T'HH:mm:ss'Z'", always use GMT time. When using a format like "yyyy-MM-dd'T'HH:mm:ss", you should use local time and you will need to specify the time zone. Only used for scheduled meetings and recurring meetings with fixed time.
             */
            start_time?: string;
            /** @description Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats. */
            timezone?: string;
            /** @description Meeting topic */
            topic?: string;
            /** @description Tracking fields */
            tracking_fields?: {
                /** @description Tracking fields type */
                field?: string;
                /** @description Tracking fields value */
                value?: string;
            }[];
            /**
             * @description Meeting Type
             * @default 2
             * @enum {integer}
             */
            type: 1 | 2 | 3 | 8;
        };
        /** @description Base object for sessions */
        SessionUpdate: {
            /** @description Meeting description */
            agenda?: string;
            /** @description Meeting duration (minutes). Used for scheduled meetings only */
            duration?: number;
            /** @description Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters. */
            password?: string;
            recurrence?: components["schemas"]["Recurrence"];
            settings?: components["schemas"]["MeetingSettings"] & {
                /** @description Send confirmation Email to Registrants */
                registrants_confirmation_email?: boolean;
            };
            /**
             * Format: date-time
             * @description Meeting start time. When using a format like "yyyy-MM-dd'T'HH:mm:ss'Z'", always use GMT time. When using a format like "yyyy-MM-dd'T'HH:mm:ss", you should use local time and you will need to specify the time zone. Only used for scheduled meetings and recurring meetings with fixed time.
             */
            start_time?: string;
            /** @description Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats. */
            timezone?: string;
            /** @description Meeting topic */
            topic?: string;
            /** @description Tracking fields */
            tracking_fields?: {
                /** @description Tracking fields type */
                field?: string;
                /** @description Tracking fields value */
                value?: string;
            }[];
            /**
             * @description Meeting Type
             * @default 2
             * @enum {integer}
             */
            type: 1 | 2 | 3 | 8;
        };
        /** @description Base webinar object for sessions */
        SessionWebinar: {
            /** @description Webinar description */
            agenda?: string;
            /** @description Webinar duration (minutes). Used for scheduled webinar only */
            duration?: number;
            /** @description Webinar password. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters. */
            password?: string;
            recurrence?: components["schemas"]["Recurrence"];
            settings?: components["schemas"]["WebinarSettings"];
            /**
             * Format: date-time
             * @description Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled webinar and recurring webinar with fixed time.
             */
            start_time?: string;
            /** @description Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats. */
            timezone?: string;
            /** @description Webinar topic */
            topic?: string;
            /** @description Tracking fields */
            tracking_fields?: {
                /** @description Tracking fields type */
                field?: string;
                /** @description Tracking fields value */
                value?: string;
            }[];
            /**
             * @description Webinar Type
             * @default 5
             * @enum {integer}
             */
            type: 5 | 6 | 9;
        };
        /** @description Base webinar object for sessions */
        SessionWebinarUpdate: {
            /** @description Webinar description */
            agenda?: string;
            /** @description Webinar duration (minutes). Used for scheduled webinar only */
            duration?: number;
            /** @description Webinar password. Password may only contain the following characters: [a-z A-Z 0-9 @ - _ *]. Max of 10 characters. */
            password?: string;
            recurrence?: components["schemas"]["Recurrence"];
            settings?: components["schemas"]["WebinarSettings"] & {
                /** @description Send confirmation Email to Registrants */
                registrants_confirmation_email?: boolean;
            };
            /**
             * Format: date-time
             * @description Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'", should be GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss", should be local time, need to specify the time zone. Only used for scheduled webinar and recurring webinar with fixed time.
             */
            start_time?: string;
            /** @description Timezone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](#timezones) list for supported timezones and their formats. */
            timezone?: string;
            /** @description Webinar topic */
            topic?: string;
            /** @description Tracking fields */
            tracking_fields?: {
                /** @description Tracking fields type */
                field?: string;
                /** @description Tracking fields value */
                value?: string;
            }[];
            /**
             * @description Webinar Type
             * @default 5
             * @enum {integer}
             */
            type: 5 | 6 | 9;
        };
        /**
         * Tracking Field
         * @description Tracking Field
         */
        TrackingField: {
            /** @description Tracking Field Name */
            field?: string;
            /** @description Array of recommended values */
            recommended_values?: string[];
            /** @description Tracking Field Required */
            required?: boolean;
            /** @description Tracking Field Visible */
            visible?: boolean;
        };
        /**
         * Tracking Field List
         * @description Tracking Field List
         */
        TrackingFieldList: {
            /** @description The number of all records available across pages */
            total_records?: number;
            /** @description Array of Tracking Fields */
            tracking_fields?: ({
                /** @description ID of Tracking Field */
                id?: string;
            } & components["schemas"]["TrackingField"])[];
        };
        /**
         * TSP Accounts List
         * @description List of TSP Accounts
         */
        TSP: {
            /** @description Conference code, numeric value, length is less than 16. */
            conference_code: string;
            /** @description List of Dial In Numbers */
            dial_in_numbers?: {
                /** @description Country Code */
                code?: string;
                /** @description Country Label, if passed, will display in place of code. */
                country_label?: string;
                /** @description Dial-in number, length is less than 16. */
                number?: string;
                /**
                 * @description Dial-in number type.
                 * @enum {string}
                 */
                type?: "toll" | "tollfree" | "media_link";
            }[];
            /** @description Leader PIN, numeric value, length is less than 16. */
            leader_pin: string;
        };
        /** @description The user object represents a User on Zoom */
        User: {
            /**
             * Format: date-time
             * @description User create time
             */
            created_at?: string;
            /** @description Department */
            dept?: string;
            /** @description User's email address */
            email: string;
            /** @description User's first name */
            first_name?: string;
            /** @description User last login client version */
            last_client_version?: string;
            /**
             * Format: date-time
             * @description User last login time
             */
            last_login_time?: string;
            /** @description User's last name */
            last_name?: string;
            /** @description Personal Meeting ID */
            pmi?: string;
            /** @description Time Zone */
            timezone?: string;
            /**
             * @description User's type
             * @enum {integer}
             */
            type: 1 | 2 | 3;
        };
        /**
         * User assistants List
         * @description List of User's assistants
         */
        UserAssistantsList: {
            /** @description List of User's assistants */
            assistants?: {
                /** @description User email address. Must have id or email, if given id, the email is ignored. */
                email?: string;
                /** @description User ID */
                id?: string;
            }[];
        };
        /**
         * User List
         * @description List of Users
         */
        UserList: components["schemas"]["Pagination"] & {
            /** @description List of User objects */
            users?: ({
                /** @description User ID */
                id?: string;
            } & components["schemas"]["User"] & {
                group_ids?: string[];
                im_group_ids?: string[];
            })[];
        };
        UserPermissions: {
            /** @description List of user permissions */
            permissions?: string[];
        };
        /**
         * User schedulers List
         * @description List of User's schedulers
         */
        UserSchedulersList: {
            /** @description List of User's schedulers. */
            assistants?: {
                /** @description User email address. */
                email?: string;
                /** @description User ID */
                id?: string;
            }[];
        };
        /** User settings */
        UserSettings: {
            email_notification?: components["schemas"]["UserSettingsEmailNotification"];
            feature?: components["schemas"]["UserSettingsFeature"];
            in_meeting?: components["schemas"]["UserSettingsInMeeting"];
            recording?: components["schemas"]["UserSettingsRecording"];
            schedule_meeting?: components["schemas"]["UserSettingsScheduleMeeting"];
            telephony?: components["schemas"]["UserSettingsTelephony"];
        };
        /** User settings: Notification settings */
        UserSettingsEmailNotification: {
            /**
             * @description When an alternative host is set or removed from a meeting
             * @default false
             */
            alternative_host_reminder: boolean;
            /**
             * @description When a meeting is cancelled
             * @default false
             */
            cancel_meeting_reminder: boolean;
            /**
             * @description When attendees join meeting before host
             * @default false
             */
            jbh_reminder: boolean;
        };
        /** User settings: Feature settings */
        UserSettingsFeature: {
            /** @description CN meeting feature */
            cn_meeting?: boolean;
            /** @description IN meeting feature */
            in_meeting?: boolean;
            /** @description Large meting feature */
            large_meeting?: boolean;
            /** @description Large meeting capacity, can be 100, 200, 300 or 500, depends on if having related large meeting capacity plan subscription or not */
            large_meeting_capacity?: number;
            /** @description User’s meeting capacity */
            meeting_capacity?: number;
            /** @description Webinar feature */
            webinar?: boolean;
            /** @description Webinar capacity, can be 100, 500, 1000, 3000, 5000 or 10000, depends on if having related webinar capacity plan subscription or not */
            webinar_capacity?: number;
        };
        /** User settings: Feature settings */
        UserSettingsFeatureUpdate: {
            /** @description Large meting feature */
            large_meeting?: boolean;
            /** @description Large meeting capacity, can be 100, 200, 300 or 500, depends on if having related large meeting capacity plan subscription or not */
            large_meeting_capacity?: number;
            /** @description User’s meeting capacity */
            meeting_capacity?: number;
            /** @description Webinar feature */
            webinar?: boolean;
            /** @description Webinar capacity, can be 100, 500, 1000, 3000, 5000 or 10000, depends on if having related webinar capacity plan subscription or not */
            webinar_capacity?: number;
        };
        /** User settings: Meeting settings */
        UserSettingsInMeeting: {
            /** @description Allow live streaming */
            allow_live_streaming?: boolean;
            /**
             * @description Annotation
             * @default false
             */
            annotation: boolean;
            /**
             * @description Allow host to put attendee on hold
             * @default false
             */
            attendee_on_hold: boolean;
            /**
             * @description Attention tracking
             * @default false
             */
            attention_tracking: boolean;
            /**
             * @description Auto saving chats
             * @default false
             */
            auto_saving_chat: boolean;
            /**
             * @description Breakout room
             * @default false
             */
            breakout_room: boolean;
            /**
             * @description Chat
             * @default false
             */
            chat: boolean;
            /**
             * @description Closed caption
             * @default false
             */
            closed_caption: boolean;
            /**
             * @description Co-host
             * @default false
             */
            co_host: boolean;
            /** @description Custom live streaming */
            custom_live_streaming?: boolean;
            /** @description Custom service instructions */
            custom_service_instructions?: string;
            /** @description End-to-end encryption */
            e2e_encryption?: boolean;
            /**
             * @description Play sound on join/leave
             * @default a''
             * @enum {string}
             */
            entry_exit_chime: "host" | "all" | "none";
            /**
             * @description Far end camera control
             * @default false
             */
            far_end_camera_control: boolean;
            /**
             * @description Feedback to Zoom
             * @default false
             */
            feedback: boolean;
            /**
             * @description File transfer
             * @default false
             */
            file_transfer: boolean;
            /**
             * @description Group HD video
             * @default false
             */
            group_hd: boolean;
            /**
             * @description Non-verbal feedback
             * @default false
             */
            non_verbal_feedback: boolean;
            /**
             * @description Polling
             * @default false
             */
            polling: boolean;
            /**
             * @description Private chat
             * @default false
             */
            private_chat: boolean;
            /** @description Record and play their own voice */
            record_play_voice?: boolean;
            /**
             * @description Remote control
             * @default false
             */
            remote_control: boolean;
            /**
             * @description Remote support
             * @default false
             */
            remote_support: boolean;
            /**
             * @description Share dual camera (Deprecated)
             * @default false
             */
            share_dual_camera: boolean;
            /**
             * @description Virtual background
             * @default false
             */
            virtual_background: boolean;
            /**
             * @description Waiting room
             * @default false
             */
            waiting_room: boolean;
            /** @description Workplace by facebook */
            workplace_by_facebook?: boolean;
        };
        /** User settings: Recording settings */
        UserSettingsRecording: {
            /**
             * @description Auto delete cloud recordings
             * @default false
             */
            auto_delete_cmr: boolean;
            /**
             * @description A specified number of days of auto delete cloud recordings
             * @default false
             */
            auto_delete_cmr_days: number;
            /**
             * @description Automatic recording
             * @default local
             * @enum {string}
             */
            auto_recording: "local" | "cloud" | "none";
            /**
             * @description Cloud recording
             * @default false
             */
            cloud_recording: boolean;
            /** @description Local recording */
            local_recording?: boolean;
            /**
             * @description Record an audio only file
             * @default false
             */
            record_audio_file: boolean;
            /**
             * @description Record the gallery view
             * @default false
             */
            record_gallery_view: boolean;
            /**
             * @description Record the active speaker view
             * @default false
             */
            record_speaker_view: boolean;
            /** @description Audio transcript */
            recording_audio_transcript?: boolean;
            /**
             * @description Save chat text from the meeting
             * @default false
             */
            save_chat_text: boolean;
            /**
             * @description Show timestamp on video
             * @default false
             */
            show_timestamp: boolean;
        };
        /** User settings: Meeting settings */
        UserSettingsScheduleMeeting: {
            /**
             * @description Determine how participants can join the audio portion of the meeting
             * @default voip
             * @enum {string}
             */
            audio_type: "both" | "telephony" | "voip" | "thirdParty";
            /** @description Require a password for Personal Meetings if attendees can join before host */
            force_pmi_jbh_password?: boolean;
            /** @description Host video */
            host_video?: boolean;
            /** @description Join before host */
            join_before_host?: boolean;
            /** @description Participants video */
            participants_video?: boolean;
            /** @description Generate and require password for participants joining by phone */
            pstn_password_protected?: boolean;
        };
        /** User settings: Meeting settings */
        UserSettingsTelephony: {
            /**
             * @description 3rd party audio conference info
             * @default
             */
            audio_conference_info: string;
            /** @description Show international numbers link on the invitation email */
            show_international_numbers_link?: boolean;
            /** @description 3rd party audio conference */
            third_party_audio?: boolean;
        };
        /** User settings */
        UserSettingsUpdate: {
            email_notification?: components["schemas"]["UserSettingsEmailNotification"];
            feature?: components["schemas"]["UserSettingsFeatureUpdate"];
            in_meeting?: components["schemas"]["UserSettingsInMeeting"];
            recording?: components["schemas"]["UserSettingsRecording"];
            schedule_meeting?: components["schemas"]["UserSettingsScheduleMeeting"];
            telephony?: components["schemas"]["UserSettingsTelephony"];
        };
        /** @description The user update object represents a User on Zoom */
        UserUpdate: {
            /** @description Kaltura User Id */
            cms_user_id?: string;
            /** @description Department for user profile, use for report */
            dept?: string;
            /** @description User's first name. Cannot contain more than 5 Chinese words. */
            first_name?: string;
            /** @description Host Key, should be 6-digit number */
            host_key?: string;
            /** @description language */
            language?: string;
            /** @description User's last name. Cannot contain more than 5 Chinese words. */
            last_name?: string;
            /** @description Personal Meeting ID,length must be 10 */
            pmi?: string;
            /**
             * Format: date-time
             * @description The time zone id for user profile. For this parameter value please refer to the id value in [timezone](#timezones) list.
             */
            timezone?: string;
            /**
             * @description User's type
             * @enum {integer}
             */
            type?: 1 | 2 | 3;
            /**
             * @description Use Personal Meeting ID for instant meetings.
             * @default false
             */
            use_pmi: boolean;
            /** @description Personal meeting room name */
            vanity_name?: string;
        };
        /** @description Webhook base object, only available for version 2 webhook */
        Webhook: {
            /** @description Webhook auth password */
            auth_password: string;
            /** @description Webhook auth user name */
            auth_user: string;
            /**
             * @description List of events objects.
             * @enum {array}
             */
            events: "meeting_started" | "meeting_ended" | "meeting_jbh" | "meeting_join" | "recording_completed" | "participant_joined" | "participant_left" | "meeting_registered" | "recording_transcript_completed";
            /** @description Webhook endpoint */
            url: string;
        };
        /**
         * Webhook List
         * @description List of Webhooks
         */
        WebhookList: {
            /** @description The number of all records available across pages */
            total_records?: number;
            /** @description List of Webhook objects */
            webhooks?: ({
                /** @description Webhook Id */
                webhook_id?: string;
            } & components["schemas"]["Webhook"] & {
                /**
                 * Format: date-time
                 * @description Webhook create time
                 */
                created_at?: string;
            })[];
        };
        /** @description Webhook base object */
        WebhookUpdate: {
            /** @description Webhook auth password */
            auth_password?: string;
            /** @description Webhook auth user name */
            auth_user?: string;
            /**
             * @description List of events objects
             * @enum {array}
             */
            events?: "meeting_started" | "meeting_ended" | "meeting_jbh" | "meeting_join" | "recording_completed" | "participant_joined" | "participant_left" | "meeting_registered" | "recording_transcript_completed";
            /** @description Webhook endpoint */
            url?: string;
        };
        /** @description Webinar object */
        Webinar: components["schemas"]["SessionWebinar"];
        /** @description Webinar object */
        WebinarInfo: {
            /** @description Webinar agenda */
            agenda?: string;
            /**
             * Format: date-time
             * @description Create time
             */
            created_at?: string;
            /** @description Webinar duration */
            duration?: number;
            /** @description Join url */
            join_url?: string;
            occurrences?: components["schemas"]["Occurrences"];
            settings?: components["schemas"]["WebinarSettings"];
            /**
             * Format: date-time
             * @description Webinar start time
             */
            start_time?: string;
            /** @description Start url */
            start_url?: string;
            /** @description Timezone to format start_time */
            timezone?: string;
            /** @description Webinar topic */
            topic?: string;
            /** @description Tracking fields */
            tracking_fields?: {
                /** @description Tracking fields type */
                field?: string;
                /** @description Tracking fields value */
                value?: string;
            }[];
            /**
             * @description Webinar Type
             * @default 5
             * @enum {integer}
             */
            type: 5 | 6 | 9;
        };
        /**
         * Webinar instances
         * @description List of Webinars
         */
        WebinarInstances: {
            /** @description List of ended webinar instances. */
            webinars?: {
                /**
                 * Format: date-time
                 * @description Start time
                 */
                start_time?: string;
                /** @description WebinarUUID */
                uuid?: string;
            }[];
        };
        /**
         * User List
         * @description List of Webinars
         */
        WebinarList: components["schemas"]["Pagination"] & {
            /** @description List of Webinar objects */
            webinars?: {
                /**
                 * Format: date-time
                 * @description Create time
                 */
                created_at?: string;
                /** @description Meeting duration */
                duration?: number;
                /** @description ID of the user set as host of webinar */
                host_id?: string;
                /** @description Webinar ID, also know as webinar number */
                id?: string;
                /** @description Join url */
                join_url?: string;
                /** @description Timezone to format start_time */
                timezone?: string;
                /** @description Meeting topic */
                topic?: string;
                /**
                 * @description Meeting Type
                 * @enum {integer}
                 */
                type?: 5 | 6 | 9;
                /** @description Webinar unique ID */
                uuid?: string;
            }[];
        };
        /**
         * Webinar Metrics
         * @description Webinar metric details
         */
        WebinarMetric: {
            /** @description Webinar duration */
            duration?: string;
            /** @description User email */
            email?: string;
            /**
             * Format: date-time
             * @description Webinar end time
             */
            end_time?: string;
            has_3rd_party_audio?: boolean;
            has_pstn?: boolean;
            has_recording?: boolean;
            has_screen_share?: boolean;
            has_sip?: boolean;
            has_video?: boolean;
            has_voip?: boolean;
            /** @description User display name */
            host?: string;
            /** @description Webinar ID */
            id?: number;
            /** @description Webinar participant count */
            participants?: number;
            /**
             * Format: date-time
             * @description Webinar start time
             */
            start_time?: string;
            /** @description Webinar topic */
            topic?: string;
            /** @description User type */
            user_type?: string;
            /**
             * Format: uuid
             * @description Webinar UUID
             */
            uuid?: string;
        };
        /** @description Webinar panelist */
        WebinarPanelist: {
            /** @description List of Panelist objects */
            panelists?: components["schemas"]["Panelist"][];
        };
        /** @description Webinar panelist */
        WebinarPanelistList: components["schemas"]["PanelistList"];
        /** @description Webianr registrant */
        WebinarRegistrant: components["schemas"]["Registrant"];
        /**
         * Registration List
         * @description List of Users
         */
        WebinarRegistrantList: components["schemas"]["RegistrantList"];
        /** @description Webinar Settings */
        WebinarSettings: {
            /** @description Allow attendees to join from multiple devices */
            allow_multiple_devices?: boolean;
            /** @description Alternative hosts emails or IDs. Multiple values separated by comma. */
            alternative_hosts?: string;
            /**
             * @default 2
             * @enum {integer}
             */
            approval_type: 0 | 1 | 2;
            /**
             * @description Determine how participants can join the audio portion of the meeting
             * @default both
             * @enum {string}
             */
            audio: "both" | "telephony" | "voip";
            /**
             * @default none
             * @enum {string}
             */
            auto_recording: "local" | "cloud" | "none";
            /** @description Close registration after event date */
            close_registration?: boolean;
            /** @description Only signed-in users can join this meeting */
            enforce_login?: boolean;
            /** @description Only signed-in users with specified domains can join meetings */
            enforce_login_domains?: string;
            /**
             * @description Default to HD Video
             * @default false
             */
            hd_video: boolean;
            /** @description Start video when host joins webinar */
            host_video?: boolean;
            /**
             * @description Make the webinar on-demand
             * @default false
             */
            on_demand: boolean;
            /** @description Start video when panelists join webinar */
            panelists_video?: boolean;
            /**
             * @description Enable Practice Session
             * @default false
             */
            practice_session: boolean;
            /**
             * @description Registration type. Used for recurring webinar with fixed time only.
             * @default 1
             * @enum {integer}
             */
            registration_type: 1 | 2 | 3;
            /** @description Show social share buttons on registration page */
            show_share_button?: boolean;
        };
        /** @description Webinar object */
        WebinarUpdate: components["schemas"]["SessionWebinarUpdate"];
        /**
         * Zoom Room
         * @description Zoom Room
         */
        ZoomRoom: {
            /** @description Zoom Room email type */
            account_type?: string;
            /** @description Zoom Calendar name */
            calender_name?: string;
            /** @description Zoom Room camera */
            camera?: string;
            /** @description Zoom Room device IP */
            device_ip?: string;
            /** @description Zoom Room email */
            email?: string;
            /** @description Zoom Room ID */
            id?: string;
            /** @description Zoom Room last start time */
            last_start_time?: string;
            /** @description Zoom Room microphone */
            microphone?: string;
            /** @description Zoom Room name */
            room_name?: string;
            /** @description Zoom Room speaker */
            speaker?: string;
            /** @description Zoom Room status */
            status?: string;
        };
        /**
         * Zoom Room List
         * @description Zoom Room List
         */
        ZoomRoomList: components["schemas"]["Pagination"] & {
            /** @description Array of Zoom Rooms */
            zoom_rooms?: components["schemas"]["ZoomRoom"][];
        };
    };
    responses: never;
    parameters: {
        /** @description The account ID */
        AccountId: string;
        /** @description The device ID */
        DeviceId: string;
        /** @description Start Date */
        FromDate: string;
        /** @description The group ID */
        GroupId: string;
        LoginType: 0 | 1 | 99 | 100 | 101;
        /** @description Query mc */
        Mc: string;
        /** @description The meeting ID */
        MeetingId: number;
        /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
        MeetingId4Metrics: string;
        /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
        MeetingId4Recording: string;
        /** @description The meeting ID or uuid */
        MeetingIdNumber: string;
        /** @description The meeting type */
        MeetingType: "scheduled" | "live" | "upcoming";
        /** @description The meeting type */
        MeetingTypePast: "past" | "pastOne" | "live";
        /** @description The meeting type */
        MeetingTypePast2: "past" | "live";
        /** @description The meeting type */
        MeetingTypePast3: "past" | "pastOne" | "live";
        /** @description The meeting UUID. */
        MeetingUUID: string;
        /** @description The member ID */
        MemberId: string;
        /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
        NextPageToken: string;
        /** @description The meeting occurrence ID */
        OccurrenceId: string;
        /** @description Current page number of returned records */
        PageNumber: number;
        /** @description The number of records returned within a single API call */
        PageSize: number;
        /** @description Number of items returned per page */
        PageSize4Qos: number;
        /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
        PageToken: string;
        /** @description Participant ID */
        ParticipantId: string;
        /** @description The recording delete action */
        RecordingDeleteAction: "trash" | "delete";
        /** @description The recording ID */
        RecordingId: string;
        /** @description The registrant ID */
        RegistrantId: string;
        /** @description The registrant status */
        RegistrantStatus: "pending" | "approved" | "denied";
        /** @description IM Chat Session ID */
        SessionId: string;
        /** @description End Date */
        ToDate: string;
        /** @description Transfer email */
        TransferEmail: string;
        /** @description Transfer meeting */
        TransferMeeting: boolean;
        /** @description Transfer recording */
        TransferRecording: boolean;
        /** @description Transfer webinar */
        TransferWebinar: boolean;
        /** @description Query trash */
        Trash: boolean;
        /** @description TSP account index */
        TSPId: string;
        /** @description The user ID or email address */
        UserId: string;
        /** @description The webhook ID */
        WebhookId: string;
        /** @description The webinar ID */
        WebinarId: number;
        /** @description The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance. */
        WebinarId4Metrics: string;
        /** @description The webinar type */
        WebinarTypePast: "past" | "pastOne" | "live";
        /** @description The webinar type */
        WebinarTypePast2: "past" | "live";
        /** @description The Zoom Room ID */
        ZoomRoomId: string;
    };
    requestBodies: {
        AccountPlanRequired: {
            content: {
                "application/json": components["schemas"]["AccountPlanRequired"];
                "multipart/form-data": components["schemas"]["AccountPlanRequired"];
            };
        };
        recordingStatusUpdateBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    action?: "recover";
                };
                "multipart/form-data": {
                    /** @enum {string} */
                    action?: "recover";
                };
            };
        };
        /** @description TSP Account */
        TSP: {
            content: {
                "application/json": components["schemas"]["TSP"];
                "multipart/form-data": components["schemas"]["TSP"];
            };
        };
    };
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    accounts: {
        parameters: {
            query?: {
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Account list returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountList"];
                    "application/xml": components["schemas"]["AccountList"];
                };
            };
        };
    };
    accountCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Account */
        requestBody: {
            content: {
                "application/json": components["schemas"]["Account"];
                "multipart/form-data": components["schemas"]["Account"];
            };
        };
        responses: {
            /** @description Account Created */
            201: {
                headers: {
                    /** @description Location of created Account */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Account created date time */
                        created_at?: string;
                        /** @description Account ID */
                        id?: string;
                        /** @description Account owner email */
                        owner_email?: string;
                        /** @description Account Owner ID */
                        owner_id?: string;
                    };
                    "application/xml": {
                        /** @description Account created date time */
                        created_at?: string;
                        /** @description Account ID */
                        id?: string;
                        /** @description Account owner email */
                        owner_email?: string;
                        /** @description Account Owner ID */
                        owner_id?: string;
                    };
                };
            };
            /** @description Account with that email already exists */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    account: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Account object returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: date-time
                         * @description Account creation date/time
                         */
                        created_at?: string;
                        /** @description Account ID */
                        id?: string;
                        options?: components["schemas"]["AccountOptions"];
                        /** @description Account Owner email */
                        owner_email?: string;
                        /** @description Account Owner ID */
                        owner_id?: string;
                        /** @description Account Vanity URL */
                        vanity_url?: string;
                    };
                    "application/xml": {
                        /**
                         * Format: date-time
                         * @description Account creation date/time
                         */
                        created_at?: string;
                        /** @description Account ID */
                        id?: string;
                        options?: components["schemas"]["AccountOptions"];
                        /** @description Account Owner email */
                        owner_email?: string;
                        /** @description Account Owner ID */
                        owner_id?: string;
                        /** @description Account Vanity URL */
                        vanity_url?: string;
                    };
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    accountDisassociate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Account deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Account not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    accountBilling: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Account billing contact information returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingContactRequired"];
                    "application/xml": components["schemas"]["BillingContactRequired"];
                };
            };
            /** @description Account not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    accountBillingUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BillingContact"];
                "multipart/form-data": components["schemas"]["BillingContact"];
            };
        };
        responses: {
            /** @description Account billing contact information updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Account not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    accountManagedDomain: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Account managed domains returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DomainsList"];
                    "application/xml": components["schemas"]["DomainsList"];
                };
            };
            /** @description Account not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    accountOptionsUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AccountOptions"];
                "multipart/form-data": components["schemas"]["AccountOptions"];
            };
        };
        responses: {
            /** @description Account options updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Account not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    accountPlans: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Account plans returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountPlans"];
                    "application/xml": components["schemas"]["AccountPlans"];
                };
            };
            /** @description Account not fond */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    accountPlanCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    contact?: components["schemas"]["BillingContactRequired"];
                } & components["schemas"]["AccountPlans"];
                "multipart/form-data": {
                    contact?: components["schemas"]["BillingContactRequired"];
                } & components["schemas"]["AccountPlans"];
            };
        };
        responses: {
            /** @description Account plans updated */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountPlans"];
                    "application/xml": components["schemas"]["AccountPlans"];
                };
            };
        };
    };
    accountPlanAddonUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["AccountPlanRequired"];
        responses: {
            /** @description Account plans updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    accountPlanAddonCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["AccountPlanRequired"];
        responses: {
            /** @description Account plans updated */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    accountPlanBaseUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AccountPlanBaseRequired"];
                "multipart/form-data": components["schemas"]["AccountPlanBaseRequired"];
            };
        };
        responses: {
            /** @description Account plans updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    accountSettings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Account settings returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountSettings"];
                    "application/xml": components["schemas"]["AccountSettings"];
                };
            };
            /** @description Account not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    accountSettingsUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The account ID */
                accountId: components["parameters"]["AccountId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AccountSettings"];
                "multipart/form-data": components["schemas"]["AccountSettings"];
            };
        };
        responses: {
            /** @description Account settings updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Account not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    groups: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of groups returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupList"];
                    "application/xml": components["schemas"]["GroupList"];
                };
            };
        };
    };
    groupCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Group name */
                    name?: string;
                };
                "multipart/form-data": {
                    /** @description Group name */
                    name?: string;
                };
            };
        };
        responses: {
            /** @description Group created */
            201: {
                headers: {
                    /** @description Location of created group */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Group ID */
                        id?: string;
                        /** @description Group name */
                        name?: string;
                        /** @description Group member count */
                        total_members?: number;
                    };
                    "application/xml": {
                        /** @description Group ID */
                        id?: string;
                        /** @description Group name */
                        name?: string;
                        /** @description Group member count */
                        total_members?: number;
                    };
                };
            };
        };
    };
    group: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Group object returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Group ID */
                        id?: string;
                    } & components["schemas"]["Group"];
                    "application/xml": {
                        /** @description Group ID */
                        id?: string;
                    } & components["schemas"]["Group"];
                };
            };
            /** @description Group not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    groupDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Group deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Group not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    groupUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Group name. Must be unique in one account. Character length is less than 128. */
                    name?: string;
                };
                "multipart/form-data": {
                    /** @description Group name. Must be unique in one account. Character length is less than 128. */
                    name?: string;
                };
            };
        };
        responses: {
            /** @description Group updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Group not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    groupMembers: {
        parameters: {
            query?: {
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
            };
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Group member list returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupMemberList"];
                    "application/xml": components["schemas"]["GroupMemberList"];
                };
            };
            /** @description Group not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    groupMembersCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description List of Group members */
                    members?: {
                        /** @description User email. If ID given, email is ignored. */
                        email?: string;
                        /** @description User ID */
                        id?: string;
                    }[];
                };
                "multipart/form-data": {
                    /** @description List of Group members */
                    members?: {
                        /** @description User email. If ID given, email is ignored. */
                        email?: string;
                        /** @description User ID */
                        id?: string;
                    }[];
                };
            };
        };
        responses: {
            /** @description Member added */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: date-time */
                        added_at?: string;
                        ids?: string;
                    };
                    "application/xml": {
                        /** Format: date-time */
                        added_at?: string;
                        ids?: string;
                    };
                };
            };
            /** @description Group not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    groupMembersDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
                /** @description The member ID */
                memberId: components["parameters"]["MemberId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Group member deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Group or Group member not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deviceList: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of H.323/SIP Devices returned. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeviceList"];
                    "application/xml": components["schemas"]["DeviceList"];
                };
            };
        };
    };
    deviceCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description H.323/SIP Device */
        requestBody: {
            content: {
                "application/json": components["schemas"]["Device"];
                "multipart/form-data": components["schemas"]["Device"];
            };
        };
        responses: {
            /** @description H.323/SIP Device created */
            201: {
                headers: {
                    /** @description Location of created device */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Device ID */
                        id?: string;
                    } & components["schemas"]["Device"];
                    "application/xml": {
                        /** @description Device ID */
                        id?: string;
                    } & components["schemas"]["Device"];
                };
            };
        };
    };
    deviceDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                deviceId: components["parameters"]["DeviceId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description H.323/SIP Device deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description H.323/SIP Device not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deviceUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The device ID */
                deviceId: components["parameters"]["DeviceId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Device"];
                "multipart/form-data": components["schemas"]["Device"];
            };
        };
        responses: {
            /** @description H.323/SIP Device updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description H.323/SIP Device not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    imChatSessions: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Archived IM Chat sessions Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: date
                         * @description Start date
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken4IMChat"] & {
                        /** @description Array of session objects */
                        sessions?: {
                            /**
                             * Format: date-time
                             * @description Last message sent time
                             */
                            last_message_sent_time?: string;
                            /** @description Meeting topic */
                            name?: string;
                            /** @description IM Chat session ID */
                            session_id?: string;
                            /** @description IM Chat session type */
                            type?: string;
                        }[];
                    };
                    "application/xml": {
                        /**
                         * Format: date
                         * @description Start date
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken4IMChat"] & {
                        /** @description Array of session objects */
                        sessions?: {
                            /**
                             * Format: date-time
                             * @description Last message sent time
                             */
                            last_message_sent_time?: string;
                            /** @description Meeting topic */
                            name?: string;
                            /** @description IM Chat session ID */
                            session_id?: string;
                            /** @description IM Chat session type */
                            type?: string;
                        }[];
                    };
                };
            };
        };
    };
    imChatMessages: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
            };
            header?: never;
            path: {
                /** @description IM Chat Session ID */
                sessionId: components["parameters"]["SessionId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Archived IM Chat messages Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: date
                         * @description Start date
                         */
                        from?: string;
                        /** @description IM Chat session ID */
                        session_id?: string;
                        /**
                         * Format: date
                         * @description End date
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken4IMChat"] & {
                        /** @description Array of session objects */
                        messages?: {
                            /** @description IM Chat message action */
                            action?: string;
                            /**
                             * Format: date-time
                             * @description Action time
                             */
                            action_time?: string;
                            /**
                             * Format: date-time
                             * @description IM Chat message sent time
                             */
                            date_time?: string;
                            /** @description IM Chat message content */
                            message?: string;
                            /** @description IM Chat message sender */
                            sender?: string;
                        }[];
                    };
                    "application/xml": {
                        /**
                         * Format: date
                         * @description Start date
                         */
                        from?: string;
                        /** @description IM Chat session ID */
                        session_id?: string;
                        /**
                         * Format: date
                         * @description End date
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken4IMChat"] & {
                        /** @description Array of session objects */
                        messages?: {
                            /** @description IM Chat message action */
                            action?: string;
                            /**
                             * Format: date-time
                             * @description Action time
                             */
                            action_time?: string;
                            /**
                             * Format: date-time
                             * @description IM Chat message sent time
                             */
                            date_time?: string;
                            /** @description IM Chat message content */
                            message?: string;
                            /** @description IM Chat message sender */
                            sender?: string;
                        }[];
                    };
                };
            };
        };
    };
    imGroups: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of IM Groups returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IMGroupList"];
                    "application/xml": components["schemas"]["IMGroupList"];
                };
            };
        };
    };
    imGroupCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Group name, must be unique in one account */
                    name?: string;
                    /** @description Members can search others under same account */
                    search_by_account?: boolean;
                    /** @description Members can search others in the same email domain */
                    search_by_domain?: boolean;
                    /** @description Members can search others under same master account, including all sub accounts */
                    search_by_ma_account?: boolean;
                    /**
                     * @description IM Group type
                     * @default normal
                     * @enum {string}
                     */
                    type?: "normal" | "shared" | "restricted";
                };
                "multipart/form-data": {
                    /** @description Group name, must be unique in one account */
                    name?: string;
                    /** @description Members can search others under same account */
                    search_by_account?: boolean;
                    /** @description Members can search others in the same email domain */
                    search_by_domain?: boolean;
                    /** @description Members can search others under same master account, including all sub accounts */
                    search_by_ma_account?: boolean;
                    /**
                     * @description IM Group type
                     * @default normal
                     * @enum {string}
                     */
                    type?: "normal" | "shared" | "restricted";
                };
            };
        };
        responses: {
            /** @description IM Group created */
            201: {
                headers: {
                    /** @description Location of created IM Group */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Group ID */
                        id?: string;
                        /** @description Group name */
                        name?: string;
                        /** @description Members can search others under same account */
                        search_by_account?: boolean;
                        /** @description Members can search others in the same email domain */
                        search_by_domain?: boolean;
                        /** @description Members can search others under same master account, including all sub accounts */
                        search_by_ma_account?: boolean;
                        /** @description Group member count */
                        total_members?: number;
                    };
                    "application/xml": {
                        /** @description Group ID */
                        id?: string;
                        /** @description Group name */
                        name?: string;
                        /** @description Members can search others under same account */
                        search_by_account?: boolean;
                        /** @description Members can search others in the same email domain */
                        search_by_domain?: boolean;
                        /** @description Members can search others under same master account, including all sub accounts */
                        search_by_ma_account?: boolean;
                        /** @description Group member count */
                        total_members?: number;
                    };
                };
            };
        };
    };
    imGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description IM Group object returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Group ID */
                        id?: string;
                    } & components["schemas"]["IMGroup"];
                    "application/xml": {
                        /** @description Group ID */
                        id?: string;
                    } & components["schemas"]["IMGroup"];
                };
            };
            /** @description IM Group not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    imGroupDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description IM Group deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description IM Group not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    imGroupUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Group name, must be unique in one account */
                    name?: string;
                    /** @description Members can search others under same account */
                    search_by_account?: boolean;
                    /** @description Members can search others in the same email domain */
                    search_by_domain?: boolean;
                    /** @description Members can search others under same master account, including all sub accounts */
                    search_by_ma_account?: boolean;
                    /**
                     * @description IM Group type
                     * @enum {string}
                     */
                    type?: "normal" | "shared" | "restricted";
                };
                "multipart/form-data": {
                    /** @description Group name, must be unique in one account */
                    name?: string;
                    /** @description Members can search others under same account */
                    search_by_account?: boolean;
                    /** @description Members can search others in the same email domain */
                    search_by_domain?: boolean;
                    /** @description Members can search others under same master account, including all sub accounts */
                    search_by_ma_account?: boolean;
                    /**
                     * @description IM Group type
                     * @enum {string}
                     */
                    type?: "normal" | "shared" | "restricted";
                };
            };
        };
        responses: {
            /** @description IM Group updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description IM Group not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    imGroupMembers: {
        parameters: {
            query?: {
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
            };
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description IM Group member list returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupMemberList"];
                    "application/xml": components["schemas"]["GroupMemberList"];
                };
            };
            /** @description IM Group not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    imGroupMembersCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description List of IM Group members */
                    members?: {
                        /** @description User email. If ID given, email is ignored. */
                        email?: string;
                        /** @description User ID */
                        id?: string;
                    }[];
                };
                "multipart/form-data": {
                    /** @description List of IM Group members */
                    members?: {
                        /** @description User email. If ID given, email is ignored. */
                        email?: string;
                        /** @description User ID */
                        id?: string;
                    }[];
                };
            };
        };
        responses: {
            /** @description Member added */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: date-time */
                        added_at?: string;
                        ids?: string;
                    };
                    "application/xml": {
                        /** Format: date-time */
                        added_at?: string;
                        ids?: string;
                    };
                };
            };
            /** @description IM Group not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    imGroupMembersDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The group ID */
                groupId: components["parameters"]["GroupId"];
                /** @description The member ID */
                memberId: components["parameters"]["MemberId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description IM Group member deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description IM Group or IM Group member not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meeting: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting object returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description ID of the user set as host of meeting */
                        host_id?: string;
                        /** @description Meeting ID, also know as meeting number */
                        id?: string;
                        /** @description Meeting unique ID */
                        uuid?: string;
                    } & components["schemas"]["MeetingInfo"];
                    "application/xml": {
                        /** @description ID of the user set as host of meeting */
                        host_id?: string;
                        /** @description Meeting ID, also know as meeting number */
                        id?: string;
                        /** @description Meeting unique ID */
                        uuid?: string;
                    } & components["schemas"]["MeetingInfo"];
                };
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingDelete: {
        parameters: {
            query?: {
                /** @description The meeting occurrence ID */
                occurrence_id?: components["parameters"]["OccurrenceId"];
            };
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        /** @description Meeting */
        requestBody: {
            content: {
                "application/json": {
                    /** @description Email or userId if you want to schedule meeting for another user. */
                    schedule_for?: string;
                } & components["schemas"]["MeetingUpdate"];
                "multipart/form-data": {
                    /** @description Email or userId if you want to schedule meeting for another user. */
                    schedule_for?: string;
                } & components["schemas"]["MeetingUpdate"];
            };
        };
        responses: {
            /** @description Meeting Updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingInvitation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting invitation Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MeetingInvitation"];
                    "application/xml": components["schemas"]["MeetingInvitation"];
                };
            };
        };
    };
    meetingLiveStreamUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        /** @description Meeting */
        requestBody: {
            content: {
                "application/json": components["schemas"]["MeetingLiveStream"];
                "multipart/form-data": components["schemas"]["MeetingLiveStream"];
            };
        };
        responses: {
            /** @description Meeting live stream Updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingLiveStreamStatusUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        /** @description Meeting */
        requestBody: {
            content: {
                "application/json": components["schemas"]["MeetingLiveStreamStatus"];
                "multipart/form-data": components["schemas"]["MeetingLiveStreamStatus"];
            };
        };
        responses: {
            /** @description Meeting live stream Updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingPolls: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List polls of a Meeting  returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PollList"];
                    "application/xml": components["schemas"]["PollList"];
                };
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingPollCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        /** @description Meeting poll object */
        requestBody: {
            content: {
                "application/json": components["schemas"]["Poll"];
                "multipart/form-data": components["schemas"]["Poll"];
            };
        };
        responses: {
            /** @description Meeting Poll Created */
            201: {
                headers: {
                    /** @description Location of created Meeting Poll */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Meeting Poll ID */
                        id?: string;
                        /**
                         * @description Status of the Meeting Poll
                         * @enum {string}
                         */
                        status?: "notstart" | "started" | "ended" | "sharing";
                    } & components["schemas"]["Poll"];
                    "application/xml": {
                        /** @description Meeting Poll ID */
                        id?: string;
                        /**
                         * @description Status of the Meeting Poll
                         * @enum {string}
                         */
                        status?: "notstart" | "started" | "ended" | "sharing";
                    } & components["schemas"]["Poll"];
                };
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingPollGet: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
                /** @description The poll ID */
                pollId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting Poll object returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Meeting Poll ID */
                        id?: string;
                        /**
                         * @description Status of the Meeting Poll
                         * @enum {string}
                         */
                        status?: "notstart" | "started" | "ended" | "sharing";
                    } & components["schemas"]["Poll"];
                    "application/xml": {
                        /** @description Meeting Poll ID */
                        id?: string;
                        /**
                         * @description Status of the Meeting Poll
                         * @enum {string}
                         */
                        status?: "notstart" | "started" | "ended" | "sharing";
                    } & components["schemas"]["Poll"];
                };
            };
            /** @description Meeting Poll not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingPollUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
                /** @description The poll ID */
                pollId: string;
            };
            cookie?: never;
        };
        /** @description Meeting Poll */
        requestBody: {
            content: {
                "application/json": components["schemas"]["Poll"];
                "multipart/form-data": components["schemas"]["Poll"];
            };
        };
        responses: {
            /** @description Meeting Poll Updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting Poll not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingPollDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
                /** @description The poll ID */
                pollId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting Poll deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting Poll not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    recordingGet: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Recording"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Recording object returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecordingMeeting"];
                    "application/xml": components["schemas"]["RecordingMeeting"];
                };
            };
            /** @description Meeting recording not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    recordingDelete: {
        parameters: {
            query?: {
                /** @description The recording delete action */
                action?: components["parameters"]["RecordingDeleteAction"];
            };
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Recording"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting recording deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting recording not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    recordingDeleteOne: {
        parameters: {
            query?: {
                /** @description The recording delete action */
                action?: components["parameters"]["RecordingDeleteAction"];
            };
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Recording"];
                /** @description The recording ID */
                recordingId: components["parameters"]["RecordingId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting recording file deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting recording file not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    recordingStatusUpdateOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Recording"];
                /** @description The recording ID */
                recordingId: components["parameters"]["RecordingId"];
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["recordingStatusUpdateBody"];
        responses: {
            /** @description Meeting recording recover */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting recording not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    recordingSettingUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Recording"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting recording settings returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecordingSettings"];
                    "application/xml": components["schemas"]["RecordingSettings"];
                };
            };
            /** @description Meeting recording not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    recordingSettingsUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Recording"];
            };
            cookie?: never;
        };
        /** @description Meeting recording Settings */
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordingSettings"];
                "multipart/form-data": components["schemas"]["RecordingSettings"];
            };
        };
        responses: {
            /** @description Meeting recording setting's updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting recording not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    recordingStatusUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Recording"];
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["recordingStatusUpdateBody"];
        responses: {
            /** @description Meeting recording recover */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting recording not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingRegistrants: {
        parameters: {
            query?: {
                /** @description The meeting occurrence ID */
                occurrence_id?: components["parameters"]["OccurrenceId"];
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description The registrant status */
                status?: components["parameters"]["RegistrantStatus"];
            };
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MeetingRegistrantList"];
                    "application/xml": components["schemas"]["MeetingRegistrantList"];
                };
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingRegistrantCreate: {
        parameters: {
            query?: {
                /** @description Occurrence IDs. You can find these with the meeting get API. Multiple values separated by comma. */
                occurrence_ids?: string;
            };
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MeetingRegistrant"];
                "multipart/form-data": components["schemas"]["MeetingRegistrant"];
            };
        };
        responses: {
            /** @description Registration created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Registrant ID */
                        id?: string;
                        /** @description Join URL for this registrant */
                        join_url?: string;
                        /** @description Registrant ID */
                        registrant_id?: string;
                        /**
                         * Format: date-time
                         * @description Start time
                         */
                        start_time?: string;
                        /** @description Topic */
                        topic?: string;
                    };
                    "application/xml": {
                        /** @description Registrant ID */
                        id?: string;
                        /** @description Join URL for this registrant */
                        join_url?: string;
                        /** @description Registrant ID */
                        registrant_id?: string;
                        /**
                         * Format: date-time
                         * @description Start time
                         */
                        start_time?: string;
                        /** @description Topic */
                        topic?: string;
                    };
                };
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingRegistrantStatus: {
        parameters: {
            query?: {
                /** @description The meeting occurrence ID */
                occurrence_id?: components["parameters"]["OccurrenceId"];
            };
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RegistrantStatus"];
                "multipart/form-data": components["schemas"]["RegistrantStatus"];
            };
        };
        responses: {
            /** @description Registrant status updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting or Registrant not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    action?: "end";
                };
                "multipart/form-data": {
                    /** @enum {string} */
                    action?: "end";
                };
            };
        };
        responses: {
            /** @description Meeting updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    dashboardCRC: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description CRC Usage returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & {
                        crc_ports_usage?: {
                            crc_ports_hour_usage?: {
                                hour?: string;
                                max_usage?: number;
                                total_usage?: number;
                            }[];
                            /** @description Date and time */
                            date_time?: string;
                        }[];
                    };
                    "application/xml": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & {
                        crc_ports_usage?: {
                            crc_ports_hour_usage?: {
                                hour?: string;
                                max_usage?: number;
                                total_usage?: number;
                            }[];
                            /** @description Date and time */
                            date_time?: string;
                        }[];
                    };
                };
            };
        };
    };
    dashboardIM: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description IM setails returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken"] & {
                        users?: {
                            calls_receive?: number;
                            calls_send?: number;
                            /** @description User email */
                            email?: string;
                            emoji_receive?: number;
                            emoji_send?: number;
                            files_receive?: number;
                            files_send?: number;
                            group_receive?: number;
                            group_send?: number;
                            images_receive?: number;
                            images_send?: number;
                            total_receive?: number;
                            total_send?: number;
                            /** @description User ID */
                            user_id?: string;
                            /** @description User display name */
                            user_name?: string;
                            videos_receive?: number;
                            videos_send?: number;
                            voice_receive?: number;
                            voice_send?: number;
                        }[];
                    };
                    "application/xml": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken"] & {
                        users?: {
                            calls_receive?: number;
                            calls_send?: number;
                            /** @description User email */
                            email?: string;
                            emoji_receive?: number;
                            emoji_send?: number;
                            files_receive?: number;
                            files_send?: number;
                            group_receive?: number;
                            group_send?: number;
                            images_receive?: number;
                            images_send?: number;
                            total_receive?: number;
                            total_send?: number;
                            /** @description User ID */
                            user_id?: string;
                            /** @description User display name */
                            user_name?: string;
                            videos_receive?: number;
                            videos_send?: number;
                            voice_receive?: number;
                            voice_send?: number;
                        }[];
                    };
                };
            };
        };
    };
    dashboardMeetings: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
                /** @description The meeting type */
                type?: components["parameters"]["MeetingTypePast"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meetings Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken"] & {
                        /** @description Array of meeting objects */
                        meetings?: components["schemas"]["MeetingMetric"][];
                    };
                    "application/xml": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken"] & {
                        /** @description Array of meeting objects */
                        meetings?: components["schemas"]["MeetingMetric"][];
                    };
                };
            };
        };
    };
    dashboardMeetingDetail: {
        parameters: {
            query?: {
                /** @description The meeting type */
                type?: components["parameters"]["MeetingTypePast3"];
            };
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MeetingMetric"];
                    "application/xml": components["schemas"]["MeetingMetric"];
                };
            };
        };
    };
    dashboardMeetingParticipants: {
        parameters: {
            query?: {
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description The meeting type */
                type?: components["parameters"]["MeetingTypePast3"];
            };
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting Participants Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginationToken"] & {
                        /** @description Array of user objects */
                        participants?: {
                            /** @description Participant connection type */
                            connection_type?: string;
                            /** @description Participant data center */
                            data_center?: string;
                            /** @description Participant device */
                            device?: string;
                            /** @description Participant domain */
                            domain?: string;
                            /** @description Participant hard disk id */
                            harddisk_id?: string;
                            /**
                             * Format: uuid
                             * @description Participant UUID
                             */
                            id?: string;
                            /** @description Participant IP Address */
                            ip_address?: string;
                            /**
                             * Format: date-time
                             * @description Participant join time
                             */
                            join_time?: string;
                            /**
                             * Format: date-time
                             * @description Participant leave time
                             */
                            leave_time?: string;
                            /** @description Participant location */
                            location?: string;
                            /** @description Participant MAC Address */
                            mac_addr?: string;
                            /** @description Participant microphone */
                            microphone?: string;
                            /** @description Participant network type */
                            network_type?: string;
                            /** @description Participant PC name */
                            pc_name?: string;
                            /** @description Participant record */
                            recording?: boolean;
                            /** @description Did participant share application */
                            share_application?: boolean;
                            /** @description Did participant share desktop */
                            share_desktop?: boolean;
                            /** @description Did participant share whiteboard */
                            share_whiteboard?: boolean;
                            /** @description Participant speaker */
                            speaker?: string;
                            /** @description Participant ID */
                            user_id?: string;
                            /** @description Participant display name */
                            user_name?: string;
                            /** @description Participant version */
                            version?: string;
                        }[];
                    };
                    "application/xml": components["schemas"]["PaginationToken"] & {
                        /** @description Array of user objects */
                        participants?: {
                            /** @description Participant connection type */
                            connection_type?: string;
                            /** @description Participant data center */
                            data_center?: string;
                            /** @description Participant device */
                            device?: string;
                            /** @description Participant domain */
                            domain?: string;
                            /** @description Participant hard disk id */
                            harddisk_id?: string;
                            /**
                             * Format: uuid
                             * @description Participant UUID
                             */
                            id?: string;
                            /** @description Participant IP Address */
                            ip_address?: string;
                            /**
                             * Format: date-time
                             * @description Participant join time
                             */
                            join_time?: string;
                            /**
                             * Format: date-time
                             * @description Participant leave time
                             */
                            leave_time?: string;
                            /** @description Participant location */
                            location?: string;
                            /** @description Participant MAC Address */
                            mac_addr?: string;
                            /** @description Participant microphone */
                            microphone?: string;
                            /** @description Participant network type */
                            network_type?: string;
                            /** @description Participant PC name */
                            pc_name?: string;
                            /** @description Participant record */
                            recording?: boolean;
                            /** @description Did participant share application */
                            share_application?: boolean;
                            /** @description Did participant share desktop */
                            share_desktop?: boolean;
                            /** @description Did participant share whiteboard */
                            share_whiteboard?: boolean;
                            /** @description Participant speaker */
                            speaker?: string;
                            /** @description Participant ID */
                            user_id?: string;
                            /** @description Participant display name */
                            user_name?: string;
                            /** @description Participant version */
                            version?: string;
                        }[];
                    };
                };
            };
        };
    };
    dashboardMeetingParticipantQOS: {
        parameters: {
            query?: {
                /** @description The meeting type */
                type?: components["parameters"]["MeetingTypePast2"];
            };
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Metrics"];
                /** @description Participant ID */
                participantId: components["parameters"]["ParticipantId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting Participant QOS Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QOSParticipant"];
                    "application/xml": components["schemas"]["QOSParticipant"];
                };
            };
        };
    };
    dashboardMeetingParticipantsQOS: {
        parameters: {
            query?: {
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description Number of items returned per page */
                page_size?: components["parameters"]["PageSize4Qos"];
                /** @description The meeting type */
                type?: components["parameters"]["MeetingTypePast2"];
            };
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting Participants Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QOSParticipantList"];
                    "application/xml": components["schemas"]["QOSParticipantList"];
                };
            };
        };
    };
    dashboardMeetingParticipantShare: {
        parameters: {
            query?: {
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["PageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description The meeting type */
                type?: components["parameters"]["MeetingTypePast2"];
            };
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting Participants Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginationToken"] & {
                        /** @description Array of participants */
                        participants?: {
                            /** @description Array of sharing and recording details */
                            details?: {
                                /** @description Type of content shared */
                                content?: string;
                                /** @description End time of sharing */
                                end_time?: string;
                                /** @description Start time of sharing */
                                start_time?: string;
                            }[];
                            /** @description Participant UUID */
                            id?: string;
                            /** @description Participant ID */
                            user_id?: string;
                            /** @description Participant display name */
                            user_name?: string;
                        }[];
                    };
                    "application/xml": components["schemas"]["PaginationToken"] & {
                        /** @description Array of participants */
                        participants?: {
                            /** @description Array of sharing and recording details */
                            details?: {
                                /** @description Type of content shared */
                                content?: string;
                                /** @description End time of sharing */
                                end_time?: string;
                                /** @description Start time of sharing */
                                start_time?: string;
                            }[];
                            /** @description Participant UUID */
                            id?: string;
                            /** @description Participant ID */
                            user_id?: string;
                            /** @description Participant display name */
                            user_name?: string;
                        }[];
                    };
                };
            };
        };
    };
    dashboardWebinars: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
                /** @description The webinar type */
                type?: components["parameters"]["WebinarTypePast"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meetings Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken"] & {
                        /** @description Array of webinar objects */
                        webinars?: components["schemas"]["WebinarMetric"][];
                    };
                    "application/xml": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken"] & {
                        /** @description Array of webinar objects */
                        webinars?: components["schemas"]["WebinarMetric"][];
                    };
                };
            };
        };
    };
    dashboardWebinarDetail: {
        parameters: {
            query?: {
                /** @description The webinar type */
                type?: components["parameters"]["WebinarTypePast2"];
            };
            header?: never;
            path: {
                /** @description The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance. */
                webinarId: components["parameters"]["WebinarId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebinarMetric"];
                    "application/xml": components["schemas"]["WebinarMetric"];
                };
            };
        };
    };
    dashboardWebinarParticipants: {
        parameters: {
            query?: {
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description The webinar type */
                type?: components["parameters"]["WebinarTypePast2"];
            };
            header?: never;
            path: {
                /** @description The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance. */
                webinarId: components["parameters"]["WebinarId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar Participants Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginationToken"] & {
                        /** @description Array of user objects */
                        participants?: {
                            /** @description Participant connection type */
                            connection_type?: string;
                            /** @description Participant data center */
                            data_center?: string;
                            /** @description Participant device */
                            device?: string;
                            /** @description Participant domain */
                            domain?: string;
                            /** @description Participant hard disk id */
                            harddisk_id?: string;
                            /**
                             * Format: uuid
                             * @description Participant UUID
                             */
                            id?: string;
                            /** @description Participant IP Address */
                            ip_address?: string;
                            /**
                             * Format: date-time
                             * @description Participant join time
                             */
                            join_time?: string;
                            /**
                             * Format: date-time
                             * @description Participant leave time
                             */
                            leave_time?: string;
                            /** @description Participant location */
                            location?: string;
                            /** @description Participant MAC Address */
                            mac_addr?: string;
                            /** @description Participant microphone */
                            microphone?: string;
                            /** @description Participant network type */
                            network_type?: string;
                            /** @description Participant PC name */
                            pc_name?: string;
                            /** @description Participant record */
                            recording?: boolean;
                            /** @description Did participant share application */
                            share_application?: boolean;
                            /** @description Did participant share desktop */
                            share_desktop?: boolean;
                            /** @description Did participant share whiteboard */
                            share_whiteboard?: boolean;
                            /** @description Participant speaker */
                            speaker?: string;
                            /** @description Participant ID */
                            user_id?: string;
                            /** @description Participant display name */
                            user_name?: string;
                            /** @description Participant version */
                            version?: string;
                        }[];
                    };
                    "application/xml": components["schemas"]["PaginationToken"] & {
                        /** @description Array of user objects */
                        participants?: {
                            /** @description Participant connection type */
                            connection_type?: string;
                            /** @description Participant data center */
                            data_center?: string;
                            /** @description Participant device */
                            device?: string;
                            /** @description Participant domain */
                            domain?: string;
                            /** @description Participant hard disk id */
                            harddisk_id?: string;
                            /**
                             * Format: uuid
                             * @description Participant UUID
                             */
                            id?: string;
                            /** @description Participant IP Address */
                            ip_address?: string;
                            /**
                             * Format: date-time
                             * @description Participant join time
                             */
                            join_time?: string;
                            /**
                             * Format: date-time
                             * @description Participant leave time
                             */
                            leave_time?: string;
                            /** @description Participant location */
                            location?: string;
                            /** @description Participant MAC Address */
                            mac_addr?: string;
                            /** @description Participant microphone */
                            microphone?: string;
                            /** @description Participant network type */
                            network_type?: string;
                            /** @description Participant PC name */
                            pc_name?: string;
                            /** @description Participant record */
                            recording?: boolean;
                            /** @description Did participant share application */
                            share_application?: boolean;
                            /** @description Did participant share desktop */
                            share_desktop?: boolean;
                            /** @description Did participant share whiteboard */
                            share_whiteboard?: boolean;
                            /** @description Participant speaker */
                            speaker?: string;
                            /** @description Participant ID */
                            user_id?: string;
                            /** @description Participant display name */
                            user_name?: string;
                            /** @description Participant version */
                            version?: string;
                        }[];
                    };
                };
            };
        };
    };
    dashboardWebinarParticipantQOS: {
        parameters: {
            query?: {
                /** @description The webinar type */
                type?: components["parameters"]["WebinarTypePast2"];
            };
            header?: never;
            path: {
                /** @description Participant ID */
                participantId: components["parameters"]["ParticipantId"];
                /** @description The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance. */
                webinarId: components["parameters"]["WebinarId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar Participant QOS Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QOSParticipant"];
                    "application/xml": components["schemas"]["QOSParticipant"];
                };
            };
        };
    };
    dashboardWebinarParticipantsQOS: {
        parameters: {
            query?: {
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description Number of items returned per page */
                page_size?: components["parameters"]["PageSize4Qos"];
                /** @description The webinar type */
                type?: components["parameters"]["WebinarTypePast2"];
            };
            header?: never;
            path: {
                /** @description The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance. */
                webinarId: components["parameters"]["WebinarId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar Participants Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QOSParticipantList"];
                    "application/xml": components["schemas"]["QOSParticipantList"];
                };
            };
        };
    };
    dashboardWebinarParticipantShare: {
        parameters: {
            query?: {
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["PageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description The webinar type */
                type?: components["parameters"]["WebinarTypePast2"];
            };
            header?: never;
            path: {
                /** @description The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance. */
                webinarId: components["parameters"]["WebinarId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar Participants Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginationToken"] & {
                        /** @description Array of participants */
                        participants?: {
                            /** @description Array of sharing and recording details */
                            details?: {
                                /** @description Type of content shared */
                                content?: string;
                                /** @description End time of sharing */
                                end_time?: string;
                                /** @description Start time of sharing */
                                start_time?: string;
                            }[];
                            /** @description Participant UUID */
                            id?: string;
                            /** @description Participant ID */
                            user_id?: string;
                            /** @description Participant display name */
                            user_name?: string;
                        }[];
                    };
                    "application/xml": components["schemas"]["PaginationToken"] & {
                        /** @description Array of participants */
                        participants?: {
                            /** @description Array of sharing and recording details */
                            details?: {
                                /** @description Type of content shared */
                                content?: string;
                                /** @description End time of sharing */
                                end_time?: string;
                                /** @description Start time of sharing */
                                start_time?: string;
                            }[];
                            /** @description Participant UUID */
                            id?: string;
                            /** @description Participant ID */
                            user_id?: string;
                            /** @description Participant display name */
                            user_name?: string;
                        }[];
                    };
                };
            };
        };
    };
    dashboardZoomRooms: {
        parameters: {
            query?: {
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of Zoom Rooms returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ZoomRoomList"];
                    "application/xml": components["schemas"]["ZoomRoomList"];
                };
            };
        };
    };
    dashboardZoomRoom: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
            };
            header?: never;
            path: {
                /** @description The Zoom Room ID */
                zoomroomId: components["parameters"]["ZoomRoomId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Zoom Room returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ZoomRoom"] & {
                        live_meeting?: components["schemas"]["MeetingMetric"];
                        past_meetings?: {
                            /**
                             * Format: date
                             * @description Start date for this report
                             */
                            from?: string;
                            /**
                             * Format: date
                             * @description End date for this report
                             */
                            to?: string;
                        } & components["schemas"]["PaginationToken"] & {
                            /** @description Array of meeting objects */
                            meetings?: components["schemas"]["MeetingMetric"][];
                        };
                    };
                    "application/xml": components["schemas"]["ZoomRoom"] & {
                        live_meeting?: components["schemas"]["MeetingMetric"];
                        past_meetings?: {
                            /**
                             * Format: date
                             * @description Start date for this report
                             */
                            from?: string;
                            /**
                             * Format: date
                             * @description End date for this report
                             */
                            to?: string;
                        } & components["schemas"]["PaginationToken"] & {
                            /** @description Array of meeting objects */
                            meetings?: components["schemas"]["MeetingMetric"][];
                        };
                    };
                };
            };
        };
    };
    pastMeetings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID */
                meetingId: components["parameters"]["MeetingId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of ended meeting instances */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MeetingInstances"];
                    "application/xml": components["schemas"]["MeetingInstances"];
                };
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    pastMeetingDetails: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting UUID. */
                meetingUUID: components["parameters"]["MeetingUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting detail Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Meeting duration */
                        duration?: number;
                        /**
                         * Format: date-time
                         * @description Meeting end time
                         */
                        end_time?: string;
                        /** @description Host ID */
                        host_id?: number;
                        /** @description Meeting ID */
                        id?: number;
                        /** @description Number of meeting participants */
                        participants_count?: number;
                        /**
                         * Format: date-time
                         * @description Meeting start time
                         */
                        start_time?: string;
                        /** @description Meeting topic */
                        topic?: string;
                        /** @description Number of meeting minutes */
                        total_minutes?: number;
                        /** @description Meeting type */
                        type?: number;
                        /** @description User email */
                        user_email?: string;
                        /** @description User display name */
                        user_name?: string;
                        /**
                         * Format: uuid
                         * @description Meeting UUID
                         */
                        uuid?: string;
                    };
                    "application/xml": {
                        /** @description Meeting duration */
                        duration?: number;
                        /**
                         * Format: date-time
                         * @description Meeting end time
                         */
                        end_time?: string;
                        /** @description Host ID */
                        host_id?: number;
                        /** @description Meeting ID */
                        id?: number;
                        /** @description Number of meeting participants */
                        participants_count?: number;
                        /**
                         * Format: date-time
                         * @description Meeting start time
                         */
                        start_time?: string;
                        /** @description Meeting topic */
                        topic?: string;
                        /** @description Number of meeting minutes */
                        total_minutes?: number;
                        /** @description Meeting type */
                        type?: number;
                        /** @description User email */
                        user_email?: string;
                        /** @description User display name */
                        user_name?: string;
                        /**
                         * Format: uuid
                         * @description Meeting UUID
                         */
                        uuid?: string;
                    };
                };
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    pastMeetingParticipants: {
        parameters: {
            query?: {
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
            };
            header?: never;
            path: {
                /** @description The meeting UUID. */
                meetingUUID: components["parameters"]["MeetingUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting Participants Report Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginationToken"] & {
                        /** @description Array of meeting participant objects */
                        participants?: {
                            /**
                             * Format: uuid
                             * @description Participant UUID
                             */
                            id?: string;
                            /** @description Participant display name */
                            name?: string;
                        }[];
                    };
                    "application/xml": components["schemas"]["PaginationToken"] & {
                        /** @description Array of meeting participant objects */
                        participants?: {
                            /**
                             * Format: uuid
                             * @description Participant UUID
                             */
                            id?: string;
                            /** @description Participant display name */
                            name?: string;
                        }[];
                    };
                };
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    pastWebinars: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of ended webinar instances */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebinarInstances"];
                    "application/xml": components["schemas"]["WebinarInstances"];
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reportCloudRecording: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Cloud Recording Report Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & {
                        /** @description Array of cloud usage objects */
                        cloud_recording_storage?: {
                            /** Format: date-time */
                            date?: string;
                            free_usage?: string;
                            plan_usage?: string;
                            usage?: string;
                        }[];
                    };
                    "application/xml": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & {
                        /** @description Array of cloud usage objects */
                        cloud_recording_storage?: {
                            /** Format: date-time */
                            date?: string;
                            free_usage?: string;
                            plan_usage?: string;
                            usage?: string;
                        }[];
                    };
                };
            };
            /** @description Only provide report in recent 6 months */
            300: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reportDaily: {
        parameters: {
            query?: {
                /** @description Month for this report */
                month?: number;
                /** @description Year for this report */
                year?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Daily Report Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Array of date objects */
                        dates?: {
                            /**
                             * Format: date
                             * @description Date for this object
                             */
                            date?: string;
                            /** @description Number of meeting minutes on this date */
                            meeting_minutes?: number;
                            /** @description Number of meetings on this date */
                            meetings?: number;
                            /** @description Number of new users on this date */
                            new_users?: number;
                            /** @description Number of participants on this date */
                            participants?: number;
                        }[];
                        /** @description Month for this report */
                        month?: number;
                        /** @description Year for this report */
                        year?: number;
                    };
                    "application/xml": {
                        /** @description Array of date objects */
                        dates?: {
                            /**
                             * Format: date
                             * @description Date for this object
                             */
                            date?: string;
                            /** @description Number of meeting minutes on this date */
                            meeting_minutes?: number;
                            /** @description Number of meetings on this date */
                            meetings?: number;
                            /** @description Number of new users on this date */
                            new_users?: number;
                            /** @description Number of participants on this date */
                            participants?: number;
                        }[];
                        /** @description Month for this report */
                        month?: number;
                        /** @description Year for this report */
                        year?: number;
                    };
                };
            };
        };
    };
    reportMeetingDetails: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting detail Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Meeting duration */
                        duration?: number;
                        /**
                         * Format: date-time
                         * @description Meeting end time
                         */
                        end_time?: string;
                        /** @description Meeting ID */
                        id?: number;
                        /** @description Number of meeting participants */
                        participants_count?: number;
                        /**
                         * Format: date-time
                         * @description Meeting start time
                         */
                        start_time?: string;
                        /** @description Meeting topic */
                        topic?: string;
                        /** @description Number of meeting minutes */
                        total_minutes?: number;
                        /** @description Tracking fields */
                        tracking_fields?: {
                            /** @description Tracking fields type */
                            field?: string;
                            /** @description Tracking fields value */
                            value?: string;
                        }[];
                        /** @description Meeting type */
                        type?: number;
                        /** @description User email */
                        user_email?: string;
                        /** @description User display name */
                        user_name?: string;
                        /**
                         * Format: uuid
                         * @description Meeting UUID
                         */
                        uuid?: string;
                    };
                    "application/xml": {
                        /** @description Meeting duration */
                        duration?: number;
                        /**
                         * Format: date-time
                         * @description Meeting end time
                         */
                        end_time?: string;
                        /** @description Meeting ID */
                        id?: number;
                        /** @description Number of meeting participants */
                        participants_count?: number;
                        /**
                         * Format: date-time
                         * @description Meeting start time
                         */
                        start_time?: string;
                        /** @description Meeting topic */
                        topic?: string;
                        /** @description Number of meeting minutes */
                        total_minutes?: number;
                        /** @description Tracking fields */
                        tracking_fields?: {
                            /** @description Tracking fields type */
                            field?: string;
                            /** @description Tracking fields value */
                            value?: string;
                        }[];
                        /** @description Meeting type */
                        type?: number;
                        /** @description User email */
                        user_email?: string;
                        /** @description User display name */
                        user_name?: string;
                        /**
                         * Format: uuid
                         * @description Meeting UUID
                         */
                        uuid?: string;
                    };
                };
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reportMeetingParticipants: {
        parameters: {
            query?: {
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
            };
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting Participants Report Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginationToken"] & {
                        /** @description Array of meeting participant objects */
                        participants?: {
                            /** @description Participant attentiveness score */
                            attentiveness_score?: number;
                            /** @description Participant duration */
                            duration?: number;
                            /**
                             * Format: uuid
                             * @description Participant UUID
                             */
                            id?: string;
                            /**
                             * Format: date-time
                             * @description Participant join time
                             */
                            join_time?: string;
                            /**
                             * Format: date-time
                             * @description Participant leave time
                             */
                            leave_time?: string;
                            /** @description Participant display name */
                            name?: string;
                            /** @description Participant email */
                            user_email?: string;
                            /** @description Participant ID */
                            user_id?: string;
                        }[];
                    };
                    "application/xml": components["schemas"]["PaginationToken"] & {
                        /** @description Array of meeting participant objects */
                        participants?: {
                            /** @description Participant attentiveness score */
                            attentiveness_score?: number;
                            /** @description Participant duration */
                            duration?: number;
                            /**
                             * Format: uuid
                             * @description Participant UUID
                             */
                            id?: string;
                            /**
                             * Format: date-time
                             * @description Participant join time
                             */
                            join_time?: string;
                            /**
                             * Format: date-time
                             * @description Participant leave time
                             */
                            leave_time?: string;
                            /** @description Participant display name */
                            name?: string;
                            /** @description Participant email */
                            user_email?: string;
                            /** @description Participant ID */
                            user_id?: string;
                        }[];
                    };
                };
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reportMeetingPolls: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The meeting ID or meeting UUID. If given meeting ID, will take the last meeting instance. */
                meetingId: components["parameters"]["MeetingId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting Polls Report Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Meeting ID */
                        id?: number;
                        /** @description Array of Meeting question objects */
                        questions?: {
                            /** @description Participant email */
                            email?: string;
                            /** @description Participant display name */
                            name?: string;
                            /** @description Array of questions from user */
                            question_details?: {
                                /** @description Given answer */
                                answer?: string;
                                /** @description Asked question */
                                question?: string;
                            }[];
                        }[];
                        /**
                         * Format: date-time
                         * @description Meeting start time
                         */
                        start_time?: string;
                        /**
                         * Format: uuid
                         * @description Meeting UUID
                         */
                        uuid?: string;
                    };
                    "application/xml": {
                        /** @description Meeting ID */
                        id?: number;
                        /** @description Array of Meeting question objects */
                        questions?: {
                            /** @description Participant email */
                            email?: string;
                            /** @description Participant display name */
                            name?: string;
                            /** @description Array of questions from user */
                            question_details?: {
                                /** @description Given answer */
                                answer?: string;
                                /** @description Asked question */
                                question?: string;
                            }[];
                        }[];
                        /**
                         * Format: date-time
                         * @description Meeting start time
                         */
                        start_time?: string;
                        /**
                         * Format: uuid
                         * @description Meeting UUID
                         */
                        uuid?: string;
                    };
                };
            };
            /** @description Meeting not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reportTelephone: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
                /** @description Audio type */
                type?: 1;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Telephone Report Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["Pagination"] & {
                        /** @description Array of telephony objects */
                        telephony_usage?: {
                            /** @description Call in number */
                            call_in_number?: string;
                            /** @description Country Name */
                            country_name?: string;
                            /** @description User department */
                            dept?: string;
                            /** @description Meeting duration */
                            duration?: number;
                            /**
                             * Format: date-time
                             * @description Meeting end time
                             */
                            end_time?: string;
                            /** @description User email */
                            host_email?: string;
                            /** @description User display name */
                            host_name?: string;
                            /** @description Meeting ID */
                            meeting_id?: number;
                            /** @description Meeting Type */
                            meeting_type?: string;
                            /** @description Telephone Number */
                            phone_number?: string;
                            /**
                             * Format: date-time
                             * @description Meeting start time
                             */
                            start_time?: string;
                            /** @description Total */
                            total?: number;
                        }[];
                    };
                    "application/xml": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["Pagination"] & {
                        /** @description Array of telephony objects */
                        telephony_usage?: {
                            /** @description Call in number */
                            call_in_number?: string;
                            /** @description Country Name */
                            country_name?: string;
                            /** @description User department */
                            dept?: string;
                            /** @description Meeting duration */
                            duration?: number;
                            /**
                             * Format: date-time
                             * @description Meeting end time
                             */
                            end_time?: string;
                            /** @description User email */
                            host_email?: string;
                            /** @description User display name */
                            host_name?: string;
                            /** @description Meeting ID */
                            meeting_id?: number;
                            /** @description Meeting Type */
                            meeting_type?: string;
                            /** @description Telephone Number */
                            phone_number?: string;
                            /**
                             * Format: date-time
                             * @description Meeting start time
                             */
                            start_time?: string;
                            /** @description Total */
                            total?: number;
                        }[];
                    };
                };
            };
        };
    };
    reportUsers: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
                /** @description Active hosts or inactive hosts */
                type?: "active" | "inactive";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Active/Inactive Hosts Report Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["Pagination"] & {
                        /** @description Number of meeting minutes for this range */
                        total_meeting_minutes?: number;
                        /** @description Number of meetings for this range */
                        total_meetings?: number;
                        /** @description Number of participants for this range */
                        total_participants?: number;
                        /** @description Array of user objects */
                        users?: {
                            /** @description User department */
                            dept?: string;
                            /** @description User email */
                            email?: string;
                            /**
                             * Format: uuid
                             * @description User ID
                             */
                            id?: string;
                            /** @description Number of meeting minutes for user */
                            meeting_minutes?: number;
                            /** @description Number of meetings for user */
                            meetings?: number;
                            /** @description Number of participants in meetings for user */
                            participants?: number;
                            /** @description User type */
                            type?: number;
                            /** @description User display name */
                            user_name?: string;
                        }[];
                    };
                    "application/xml": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["Pagination"] & {
                        /** @description Number of meeting minutes for this range */
                        total_meeting_minutes?: number;
                        /** @description Number of meetings for this range */
                        total_meetings?: number;
                        /** @description Number of participants for this range */
                        total_participants?: number;
                        /** @description Array of user objects */
                        users?: {
                            /** @description User department */
                            dept?: string;
                            /** @description User email */
                            email?: string;
                            /**
                             * Format: uuid
                             * @description User ID
                             */
                            id?: string;
                            /** @description Number of meeting minutes for user */
                            meeting_minutes?: number;
                            /** @description Number of meetings for user */
                            meetings?: number;
                            /** @description Number of participants in meetings for user */
                            participants?: number;
                            /** @description User type */
                            type?: number;
                            /** @description User display name */
                            user_name?: string;
                        }[];
                    };
                };
            };
        };
    };
    reportMeetings: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
            };
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Active/Inactive Hosts Report Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken"] & {
                        /** @description Array of meeting objects */
                        meetings?: {
                            /** @description Meeting duration */
                            duration?: number;
                            /**
                             * Format: date-time
                             * @description Meeting end time
                             */
                            end_time?: string;
                            /** @description Meeting ID */
                            id?: number;
                            /** @description Number of meeting participants */
                            participants_count?: number;
                            /**
                             * Format: date-time
                             * @description Meeting start time
                             */
                            start_time?: string;
                            /** @description Meeting topic */
                            topic?: string;
                            /** @description Number of meeting minutes */
                            total_minutes?: number;
                            /** @description Meeting type */
                            type?: number;
                            /** @description User email */
                            user_email?: string;
                            /** @description User display name */
                            user_name?: string;
                            /**
                             * Format: uuid
                             * @description Meeting UUID
                             */
                            uuid?: string;
                        }[];
                    };
                    "application/xml": {
                        /**
                         * Format: date
                         * @description Start date for this report
                         */
                        from?: string;
                        /**
                         * Format: date
                         * @description End date for this report
                         */
                        to?: string;
                    } & components["schemas"]["PaginationToken"] & {
                        /** @description Array of meeting objects */
                        meetings?: {
                            /** @description Meeting duration */
                            duration?: number;
                            /**
                             * Format: date-time
                             * @description Meeting end time
                             */
                            end_time?: string;
                            /** @description Meeting ID */
                            id?: number;
                            /** @description Number of meeting participants */
                            participants_count?: number;
                            /**
                             * Format: date-time
                             * @description Meeting start time
                             */
                            start_time?: string;
                            /** @description Meeting topic */
                            topic?: string;
                            /** @description Number of meeting minutes */
                            total_minutes?: number;
                            /** @description Meeting type */
                            type?: number;
                            /** @description User email */
                            user_email?: string;
                            /** @description User display name */
                            user_name?: string;
                            /**
                             * Format: uuid
                             * @description Meeting UUID
                             */
                            uuid?: string;
                        }[];
                    };
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reportWebinarDetails: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance. */
                webinarId: components["parameters"]["WebinarId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar detail Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Meeting duration */
                        duration?: number;
                        /**
                         * Format: date-time
                         * @description Meeting end time
                         */
                        end_time?: string;
                        /** @description Meeting ID */
                        id?: number;
                        /** @description Number of meeting participants */
                        participants_count?: number;
                        /**
                         * Format: date-time
                         * @description Meeting start time
                         */
                        start_time?: string;
                        /** @description Meeting topic */
                        topic?: string;
                        /** @description Number of meeting minutes */
                        total_minutes?: number;
                        /** @description Tracking fields */
                        tracking_fields?: {
                            /** @description Tracking fields type */
                            field?: string;
                            /** @description Tracking fields value */
                            value?: string;
                        }[];
                        /** @description Meeting type */
                        type?: number;
                        /** @description User email */
                        user_email?: string;
                        /** @description User display name */
                        user_name?: string;
                        /**
                         * Format: uuid
                         * @description Meeting UUID
                         */
                        uuid?: string;
                    };
                    "application/xml": {
                        /** @description Meeting duration */
                        duration?: number;
                        /**
                         * Format: date-time
                         * @description Meeting end time
                         */
                        end_time?: string;
                        /** @description Meeting ID */
                        id?: number;
                        /** @description Number of meeting participants */
                        participants_count?: number;
                        /**
                         * Format: date-time
                         * @description Meeting start time
                         */
                        start_time?: string;
                        /** @description Meeting topic */
                        topic?: string;
                        /** @description Number of meeting minutes */
                        total_minutes?: number;
                        /** @description Tracking fields */
                        tracking_fields?: {
                            /** @description Tracking fields type */
                            field?: string;
                            /** @description Tracking fields value */
                            value?: string;
                        }[];
                        /** @description Meeting type */
                        type?: number;
                        /** @description User email */
                        user_email?: string;
                        /** @description User display name */
                        user_name?: string;
                        /**
                         * Format: uuid
                         * @description Meeting UUID
                         */
                        uuid?: string;
                    };
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reportWebinarParticipants: {
        parameters: {
            query?: {
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
            };
            header?: never;
            path: {
                /** @description The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance. */
                webinarId: components["parameters"]["WebinarId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Meeting Participants Report Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaginationToken"] & {
                        /** @description Array of webinar participant objects */
                        participants?: {
                            /** @description Participant attentiveness score */
                            attentiveness_score?: string;
                            /** @description Participant duration */
                            duration?: number;
                            /**
                             * Format: uuid
                             * @description Participant UUID
                             */
                            id?: string;
                            /**
                             * Format: date-time
                             * @description Participant join time
                             */
                            join_time?: string;
                            /**
                             * Format: date-time
                             * @description Participant leave time
                             */
                            leave_time?: string;
                            /** @description Participant display name */
                            name?: string;
                            /** @description Participant email */
                            user_email?: string;
                            /** @description Participant ID */
                            user_id?: string;
                        }[];
                    };
                    "application/xml": components["schemas"]["PaginationToken"] & {
                        /** @description Array of webinar participant objects */
                        participants?: {
                            /** @description Participant attentiveness score */
                            attentiveness_score?: string;
                            /** @description Participant duration */
                            duration?: number;
                            /**
                             * Format: uuid
                             * @description Participant UUID
                             */
                            id?: string;
                            /**
                             * Format: date-time
                             * @description Participant join time
                             */
                            join_time?: string;
                            /**
                             * Format: date-time
                             * @description Participant leave time
                             */
                            leave_time?: string;
                            /** @description Participant display name */
                            name?: string;
                            /** @description Participant email */
                            user_email?: string;
                            /** @description Participant ID */
                            user_id?: string;
                        }[];
                    };
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reportWebinarPolls: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance. */
                webinarId: components["parameters"]["WebinarId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar Polls Report Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Webinar ID */
                        id?: number;
                        /** @description Array of webinar question objects */
                        questions?: {
                            /** @description Participant email */
                            email?: string;
                            /** @description Participant display name */
                            name?: string;
                            /** @description Array of questions from user */
                            question_details?: {
                                /** @description Given answer */
                                answer?: string;
                                /** @description Asked question */
                                question?: string;
                            }[];
                        }[];
                        /**
                         * Format: date-time
                         * @description Webinar start time
                         */
                        start_time?: string;
                        /**
                         * Format: uuid
                         * @description Webinar UUID
                         */
                        uuid?: string;
                    };
                    "application/xml": {
                        /** @description Webinar ID */
                        id?: number;
                        /** @description Array of webinar question objects */
                        questions?: {
                            /** @description Participant email */
                            email?: string;
                            /** @description Participant display name */
                            name?: string;
                            /** @description Array of questions from user */
                            question_details?: {
                                /** @description Given answer */
                                answer?: string;
                                /** @description Asked question */
                                question?: string;
                            }[];
                        }[];
                        /**
                         * Format: date-time
                         * @description Webinar start time
                         */
                        start_time?: string;
                        /**
                         * Format: uuid
                         * @description Webinar UUID
                         */
                        uuid?: string;
                    };
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reportWebinarQA: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID or webinar UUID. If given webinar ID, will take the last webinar instance. */
                webinarId: components["parameters"]["WebinarId4Metrics"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar Q&A Report Returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Webinar ID */
                        id?: number;
                        /** @description Array of webinar question objects */
                        questions?: {
                            /** @description Participant email */
                            email?: string;
                            /** @description Participant display name */
                            name?: string;
                            /** @description Array of questions from user */
                            question_details?: {
                                /** @description Given answer */
                                answer?: string;
                                /** @description Asked question */
                                question?: string;
                            }[];
                        }[];
                        /**
                         * Format: date-time
                         * @description Webinar start time
                         */
                        start_time?: string;
                        /**
                         * Format: uuid
                         * @description Webinar UUID
                         */
                        uuid?: string;
                    };
                    "application/xml": {
                        /** @description Webinar ID */
                        id?: number;
                        /** @description Array of webinar question objects */
                        questions?: {
                            /** @description Participant email */
                            email?: string;
                            /** @description Participant display name */
                            name?: string;
                            /** @description Array of questions from user */
                            question_details?: {
                                /** @description Given answer */
                                answer?: string;
                                /** @description Asked question */
                                question?: string;
                            }[];
                        }[];
                        /**
                         * Format: date-time
                         * @description Webinar start time
                         */
                        start_time?: string;
                        /**
                         * Format: uuid
                         * @description Webinar UUID
                         */
                        uuid?: string;
                    };
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    tsp: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description TSP account detail returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        dial_in_numbers?: {
                            /** @description Country Code */
                            code?: string;
                            /** @description Dial-in number, length is less than 16 */
                            number?: string;
                            type?: string;
                        }[];
                        /** @description Enable 3rd party audio conferencing for account users */
                        enable?: boolean;
                        /** @description 3rd party audio conferencing provider */
                        tsp_provider?: string;
                    };
                    "application/xml": {
                        dial_in_numbers?: {
                            /** @description Country Code */
                            code?: string;
                            /** @description Dial-in number, length is less than 16 */
                            number?: string;
                            type?: string;
                        }[];
                        /** @description Enable 3rd party audio conferencing for account users */
                        enable?: boolean;
                        /** @description 3rd party audio conferencing provider */
                        tsp_provider?: string;
                    };
                };
            };
        };
    };
    tspUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description TSP Account */
        requestBody: {
            content: {
                "application/json": {
                    /** @description Enable 3rd party audio conferencing for account users */
                    enable?: boolean;
                    /** @description 3rd party audio conferencing provider */
                    tsp_provider?: string;
                };
                "multipart/form-data": {
                    /** @description Enable 3rd party audio conferencing for account users */
                    enable?: boolean;
                    /** @description 3rd party audio conferencing provider */
                    tsp_provider?: string;
                };
            };
        };
        responses: {
            /** @description TSP Account updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    users: {
        parameters: {
            query?: {
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description User status */
                status?: "active" | "inactive" | "pending";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User list returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserList"];
                    "application/xml": components["schemas"]["UserList"];
                };
            };
        };
    };
    userCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description User */
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Specify how to create the new user
                     * @enum {string}
                     */
                    action: "create" | "autoCreate" | "custCreate" | "ssoCreate";
                    user_info?: {
                        /** @description User's email address */
                        email: string;
                        /** @description User's first name. Cannot contain more than 5 Chinese words. */
                        first_name?: string;
                        /** @description User's last name. Cannot contain more than 5 Chinese words. */
                        last_name?: string;
                        /** @description User’s password. Only for "autoCreate" action. */
                        password?: string;
                        /**
                         * @description User's type
                         * @enum {integer}
                         */
                        type: 1 | 2 | 3;
                    };
                };
                "multipart/form-data": {
                    /**
                     * @description Specify how to create the new user
                     * @enum {string}
                     */
                    action: "create" | "autoCreate" | "custCreate" | "ssoCreate";
                    user_info?: {
                        /** @description User's email address */
                        email: string;
                        /** @description User's first name. Cannot contain more than 5 Chinese words. */
                        first_name?: string;
                        /** @description User's last name. Cannot contain more than 5 Chinese words. */
                        last_name?: string;
                        /** @description User’s password. Only for "autoCreate" action. */
                        password?: string;
                        /**
                         * @description User's type
                         * @enum {integer}
                         */
                        type: 1 | 2 | 3;
                    };
                };
            };
        };
        responses: {
            /** @description User Created */
            201: {
                headers: {
                    /** @description Location of created User */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description User's email address */
                        email?: string;
                        /** @description User's first name */
                        first_name?: string;
                        /** @description User ID */
                        id?: string;
                        /** @description User's last name */
                        last_name?: string;
                        /**
                         * @description User's type
                         * @enum {integer}
                         */
                        type?: 1 | 2 | 3;
                    };
                    "application/xml": {
                        /** @description User's email address */
                        email?: string;
                        /** @description User's first name */
                        first_name?: string;
                        /** @description User ID */
                        id?: string;
                        /** @description User's last name */
                        last_name?: string;
                        /**
                         * @description User's type
                         * @enum {integer}
                         */
                        type?: 1 | 2 | 3;
                    };
                };
            };
            /** @description User with that email already exists */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    user: {
        parameters: {
            query?: {
                login_type?: components["parameters"]["LoginType"];
            };
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User object returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description User ID */
                        id?: string;
                    } & components["schemas"]["User"] & {
                        account_id?: string;
                        cms_user_id?: string;
                        group_ids?: string[];
                        host_key?: string;
                        im_group_ids?: string[];
                        language?: string;
                        personal_meeting_url?: string;
                        pic_url?: string;
                        use_pmi?: boolean;
                        vanity_url?: string;
                        verified?: number;
                    };
                    "application/xml": {
                        /** @description User ID */
                        id?: string;
                    } & components["schemas"]["User"] & {
                        account_id?: string;
                        cms_user_id?: string;
                        group_ids?: string[];
                        host_key?: string;
                        im_group_ids?: string[];
                        language?: string;
                        personal_meeting_url?: string;
                        pic_url?: string;
                        use_pmi?: boolean;
                        vanity_url?: string;
                        verified?: number;
                    };
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userDelete: {
        parameters: {
            query?: {
                /** @description Delete action type */
                action?: "disassociate" | "delete";
                /** @description Transfer email */
                transfer_email?: components["parameters"]["TransferEmail"];
                /** @description Transfer meeting */
                transfer_meeting?: components["parameters"]["TransferMeeting"];
                /** @description Transfer recording */
                transfer_recording?: components["parameters"]["TransferRecording"];
                /** @description Transfer webinar */
                transfer_webinar?: components["parameters"]["TransferWebinar"];
            };
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        /** @description User */
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserUpdate"];
                "multipart/form-data": components["schemas"]["UserUpdate"];
            };
        };
        responses: {
            /** @description User updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userAssistants: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserAssistantsList"];
                    "application/xml": components["schemas"]["UserAssistantsList"];
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userAssistantCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        /** @description User assistant */
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserAssistantsList"];
                "multipart/form-data": components["schemas"]["UserAssistantsList"];
            };
        };
        responses: {
            /** @description Assitant Added */
            201: {
                headers: {
                    /** @description Location of created assistant */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: date-time */
                        add_at?: string;
                        /** @description User ID */
                        ids?: string;
                    };
                    "application/xml": {
                        /** Format: date-time */
                        add_at?: string;
                        /** @description User ID */
                        ids?: string;
                    };
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userAssistantsDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Assitants deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userAssistantDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Assistant's ID */
                assistantId: string;
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Assitant deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User or Assistant not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userEmailUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        /** @description User email */
        requestBody: {
            content: {
                "application/json": {
                    /** @description User’s email. Character length is less than 128. */
                    email: string;
                };
                "multipart/form-data": {
                    /** @description User’s email. Character length is less than 128. */
                    email: string;
                };
            };
        };
        responses: {
            /** @description email updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetings: {
        parameters: {
            query?: {
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description The meeting type */
                type?: components["parameters"]["MeetingType"];
            };
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of Meeting objects returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MeetingList"];
                    "application/xml": components["schemas"]["MeetingList"];
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    meetingCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        /** @description Meeting object */
        requestBody: {
            content: {
                "application/json": {
                    /** @description Email or userId if you want to schedule meeting for another user. */
                    schedule_for?: string;
                } & components["schemas"]["Meeting"];
                "multipart/form-data": {
                    /** @description Email or userId if you want to schedule meeting for another user. */
                    schedule_for?: string;
                } & components["schemas"]["Meeting"];
            };
        };
        responses: {
            /** @description Meeting Created */
            201: {
                headers: {
                    /** @description Location of created Meeting */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description ID of the user set as host of meeting */
                        host_id?: string;
                        /** @description Meeting ID, also known as meeting number */
                        id?: string;
                        /** @description Meeting unique ID */
                        uuid?: string;
                    } & components["schemas"]["MeetingInfo"];
                    "application/xml": {
                        /** @description ID of the user set as host of meeting */
                        host_id?: string;
                        /** @description Meeting ID, also known as meeting number */
                        id?: string;
                        /** @description Meeting unique ID */
                        uuid?: string;
                    } & components["schemas"]["MeetingInfo"];
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userPACs: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description PAC Account list returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        tsp_accounts?: components["schemas"]["PAC"][];
                    };
                    "application/xml": {
                        tsp_accounts?: components["schemas"]["PAC"][];
                    };
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userPassword: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        /** @description User password */
        requestBody: {
            content: {
                "application/json": {
                    /** @description User’s password. Character length is less than 32, */
                    password: string;
                };
                "multipart/form-data": {
                    /** @description User’s password. Character length is less than 32, */
                    password: string;
                };
            };
        };
        responses: {
            /** @description Password updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userPermission: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User permissions returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPermissions"];
                    "application/xml": components["schemas"]["UserPermissions"];
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userPicture: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description User picture file, must be a jpg/jpeg file
                     */
                    pic_file: string;
                };
            };
        };
        responses: {
            /** @description Picture Uploaded */
            201: {
                headers: {
                    /** @description Location of user's picture */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    recordingsList: {
        parameters: {
            query: {
                /** @description Start Date */
                from: components["parameters"]["FromDate"];
                /** @description Query mc */
                mc?: components["parameters"]["Mc"];
                /** @description Next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes. */
                next_page_token?: components["parameters"]["NextPageToken"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description End Date */
                to: components["parameters"]["ToDate"];
                /** @description Query trash */
                trash?: components["parameters"]["Trash"];
            };
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of Recording objects returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecordingMeetingList"];
                    "application/xml": components["schemas"]["RecordingMeetingList"];
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userSchedulers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserSchedulersList"];
                    "application/xml": components["schemas"]["UserSchedulersList"];
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userSchedulersDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Schedulers deleted. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userSchedulerDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Scheduler's ID */
                schedulerId: string;
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Scheduler deleted. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User or Scheduler not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userSettings: {
        parameters: {
            query?: {
                login_type?: components["parameters"]["LoginType"];
            };
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User settings returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserSettings"];
                    "application/xml": components["schemas"]["UserSettings"];
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userSettingsUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        /** @description User Settings */
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserSettingsUpdate"];
                "multipart/form-data": components["schemas"]["UserSettingsUpdate"];
            };
        };
        responses: {
            /** @description User setting's updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        /** @description User status */
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description The action type
                     * @enum {string}
                     */
                    action: "activate" | "deactivate";
                };
                "multipart/form-data": {
                    /**
                     * @description The action type
                     * @enum {string}
                     */
                    action: "activate" | "deactivate";
                };
            };
        };
        responses: {
            /** @description Status updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userToken: {
        parameters: {
            query?: {
                /** @description User token type */
                type?: "token" | "zpk" | "zak";
            };
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Token returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description User ID */
                        token?: string;
                    };
                    "application/xml": {
                        /** @description User ID */
                        token?: string;
                    };
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userSSOTokenDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Token deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userTSPs: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description TSP Account list returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        tsp_accounts?: components["schemas"]["TSP"][];
                    };
                    "application/xml": {
                        tsp_accounts?: components["schemas"]["TSP"][];
                    };
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userTSPCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["TSP"];
        responses: {
            /** @description TSP Account added */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TSP"];
                    "application/xml": components["schemas"]["TSP"];
                };
            };
        };
    };
    userTSP: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description TSP account index */
                tspId: components["parameters"]["TSPId"];
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description TSP Account returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TSP"];
                    "application/xml": components["schemas"]["TSP"];
                };
            };
        };
    };
    userTSPDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description TSP account index */
                tspId: components["parameters"]["TSPId"];
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description TSP Account deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userTSPUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description TSP account index */
                tspId: components["parameters"]["TSPId"];
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody: components["requestBodies"]["TSP"];
        responses: {
            /** @description TSP Account updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinars: {
        parameters: {
            query?: {
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
            };
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of Webinar objects returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebinarList"];
                    "application/xml": components["schemas"]["WebinarList"];
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The user ID or email address */
                userId: components["parameters"]["UserId"];
            };
            cookie?: never;
        };
        /** @description User */
        requestBody: {
            content: {
                "application/json": components["schemas"]["Webinar"];
                "multipart/form-data": components["schemas"]["Webinar"];
            };
        };
        responses: {
            /** @description Webinar Created */
            201: {
                headers: {
                    /** @description Location of created Webinar */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description ID of the user set as host of Webinar */
                        host_id?: string;
                        /** @description Webinar ID, also known as Webinar number */
                        id?: string;
                        /** @description Webinar unique ID */
                        uuid?: string;
                    } & components["schemas"]["WebinarInfo"];
                    "application/xml": {
                        /** @description ID of the user set as host of Webinar */
                        host_id?: string;
                        /** @description Webinar ID, also known as Webinar number */
                        id?: string;
                        /** @description Webinar unique ID */
                        uuid?: string;
                    } & components["schemas"]["WebinarInfo"];
                };
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    userEmail: {
        parameters: {
            query: {
                /** @description Zoom work email */
                email: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        existed_email?: boolean;
                    };
                    "application/xml": {
                        existed_email?: boolean;
                    };
                };
            };
        };
    };
    userVanityName: {
        parameters: {
            query: {
                /** @description Personal meeting room name */
                vanity_name: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        existed?: boolean;
                    };
                    "application/xml": {
                        existed?: boolean;
                    };
                };
            };
        };
    };
    userZPK: {
        parameters: {
            query: {
                /** @description User zpk */
                zpk: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        expire_in?: number;
                    };
                    "application/xml": {
                        expire_in?: number;
                    };
                };
            };
        };
    };
    trackingfieldList: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of Tracking Fields returned. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TrackingFieldList"];
                    "application/xml": components["schemas"]["TrackingFieldList"];
                };
            };
        };
    };
    trackingfieldCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Tracking Field */
        requestBody: {
            content: {
                "application/json": components["schemas"]["TrackingField"];
                "multipart/form-data": components["schemas"]["TrackingField"];
            };
        };
        responses: {
            /** @description Tracking Field created */
            201: {
                headers: {
                    /** @description Location of created tracking field */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Tracking Field ID */
                        id?: string;
                    } & components["schemas"]["TrackingField"];
                    "application/xml": {
                        /** @description Tracking Field ID */
                        id?: string;
                    } & components["schemas"]["TrackingField"];
                };
            };
        };
    };
    trackingfieldGet: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Tracking Field ID */
                fieldId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tracking Field object returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Tracking Field ID */
                        id?: string;
                    } & components["schemas"]["TrackingField"];
                    "application/xml": {
                        /** @description Tracking Field ID */
                        id?: string;
                    } & components["schemas"]["TrackingField"];
                };
            };
            /** @description Tracking Field not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    trackingfieldDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Tracking Field ID */
                fieldId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tracking Field deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Tracking Field not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    trackingfieldUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Tracking Field ID */
                fieldId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TrackingField"];
                "multipart/form-data": components["schemas"]["TrackingField"];
            };
        };
        responses: {
            /** @description Tracking Field updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Tracking Field not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webhooks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of Webhook objects returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookList"];
                    "application/xml": components["schemas"]["WebhookList"];
                };
            };
            /** @description Webhook not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webhookCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Webhook */
        requestBody: {
            content: {
                "application/json": components["schemas"]["Webhook"];
                "multipart/form-data": components["schemas"]["Webhook"];
            };
        };
        responses: {
            /** @description Webhook Created */
            201: {
                headers: {
                    /** @description Location of created Webhook */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Webhook Id */
                        webhook_id?: string;
                    } & components["schemas"]["Webhook"] & {
                        /**
                         * Format: date-time
                         * @description Webhook create time
                         */
                        created_at?: string;
                    };
                    "application/xml": {
                        /** @description Webhook Id */
                        webhook_id?: string;
                    } & components["schemas"]["Webhook"] & {
                        /**
                         * Format: date-time
                         * @description Webhook create time
                         */
                        created_at?: string;
                    };
                };
            };
            /** @description Account not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webhook ID */
                webhookId: components["parameters"]["WebhookId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webhook object returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Webhook Id */
                        webhook_id?: string;
                    } & components["schemas"]["Webhook"] & {
                        /**
                         * Format: date-time
                         * @description Webhook create time
                         */
                        created_at?: string;
                    };
                    "application/xml": {
                        /** @description Webhook Id */
                        webhook_id?: string;
                    } & components["schemas"]["Webhook"] & {
                        /**
                         * Format: date-time
                         * @description Webhook create time
                         */
                        created_at?: string;
                    };
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webhookDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webhook ID */
                webhookId: components["parameters"]["WebhookId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webhook deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Webhook not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webhookUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webhook ID */
                webhookId: components["parameters"]["WebhookId"];
            };
            cookie?: never;
        };
        /** @description Webhook */
        requestBody: {
            content: {
                "application/json": components["schemas"]["WebhookUpdate"];
                "multipart/form-data": components["schemas"]["WebhookUpdate"];
            };
        };
        responses: {
            /** @description Webhook Updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Webhook not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webhookSwitch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    version: "v1" | "v2";
                };
                "multipart/form-data": {
                    /** @enum {string} */
                    version: "v1" | "v2";
                };
            };
        };
        responses: {
            /** @description Webhook Subscribe version update */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Webhook Subscribe not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinar: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar object returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description ID of the user set as host of webinar */
                        host_id?: string;
                        /** @description Webinar ID, also know as webinar number */
                        id?: string;
                        /** @description Webinar unique ID */
                        uuid?: string;
                    } & components["schemas"]["WebinarInfo"];
                    "application/xml": {
                        /** @description ID of the user set as host of webinar */
                        host_id?: string;
                        /** @description Webinar ID, also know as webinar number */
                        id?: string;
                        /** @description Webinar unique ID */
                        uuid?: string;
                    } & components["schemas"]["WebinarInfo"];
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarDelete: {
        parameters: {
            query?: {
                /** @description The meeting occurrence ID */
                occurrence_id?: components["parameters"]["OccurrenceId"];
            };
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        /** @description Webinar */
        requestBody: {
            content: {
                "application/json": components["schemas"]["WebinarUpdate"];
                "multipart/form-data": components["schemas"]["WebinarUpdate"];
            };
        };
        responses: {
            /** @description Webinar Updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarPanelists: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebinarPanelistList"];
                    "application/xml": components["schemas"]["WebinarPanelistList"];
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarPanelistCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WebinarPanelist"];
                "multipart/form-data": components["schemas"]["WebinarPanelist"];
            };
        };
        responses: {
            /** @description Panelist created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Panelist ID */
                        id?: string;
                        /** @description Join URL for this panelist */
                        join_url?: string;
                    };
                    "application/xml": {
                        /** @description Panelist ID */
                        id?: string;
                        /** @description Join URL for this panelist */
                        join_url?: string;
                    };
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarPanelistsDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Panelists removed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarPanelistDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The panelist ID */
                panelistId: number;
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Panelists removed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Webinar or Panelist not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarPolls: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List polls of a Webinar  returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PollList"];
                    "application/xml": components["schemas"]["PollList"];
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarPollCreate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        /** @description Webinar poll object */
        requestBody: {
            content: {
                "application/json": components["schemas"]["Poll"];
                "multipart/form-data": components["schemas"]["Poll"];
            };
        };
        responses: {
            /** @description Webinar Poll Created */
            201: {
                headers: {
                    /** @description Location of created Webinar Poll */
                    "Content-Location"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Webinar Poll ID */
                        id?: string;
                        /**
                         * @description Status of the Webinar Poll
                         * @enum {string}
                         */
                        status?: "notstart" | "started" | "ended" | "sharing";
                    } & components["schemas"]["Poll"];
                    "application/xml": {
                        /** @description Webinar Poll ID */
                        id?: string;
                        /**
                         * @description Status of the Webinar Poll
                         * @enum {string}
                         */
                        status?: "notstart" | "started" | "ended" | "sharing";
                    } & components["schemas"]["Poll"];
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarPollGet: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The poll ID */
                pollId: string;
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar Poll object returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Webinar Poll ID */
                        id?: string;
                        /**
                         * @description Status of the Webinar Poll
                         * @enum {string}
                         */
                        status?: "notstart" | "started" | "ended" | "sharing";
                    } & components["schemas"]["Poll"];
                    "application/xml": {
                        /** @description Webinar Poll ID */
                        id?: string;
                        /**
                         * @description Status of the Webinar Poll
                         * @enum {string}
                         */
                        status?: "notstart" | "started" | "ended" | "sharing";
                    } & components["schemas"]["Poll"];
                };
            };
            /** @description Webinar Poll not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarPollUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The poll ID */
                pollId: string;
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        /** @description Webinar Poll */
        requestBody: {
            content: {
                "application/json": components["schemas"]["Poll"];
                "multipart/form-data": components["schemas"]["Poll"];
            };
        };
        responses: {
            /** @description Webinar Poll Updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Webinar Poll not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarPollDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The poll ID */
                pollId: string;
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webinar Poll deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Webinar Poll not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarRegistrants: {
        parameters: {
            query?: {
                /** @description The meeting occurrence ID */
                occurrence_id?: components["parameters"]["OccurrenceId"];
                /** @description Current page number of returned records */
                page_number?: components["parameters"]["PageNumber"];
                /** @description The number of records returned within a single API call */
                page_size?: components["parameters"]["PageSize"];
                /** @description The registrant status */
                status?: components["parameters"]["RegistrantStatus"];
            };
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebinarRegistrantList"];
                    "application/xml": components["schemas"]["WebinarRegistrantList"];
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarRegistrantCreate: {
        parameters: {
            query?: {
                /** @description Occurrence IDs, could get this value from Webinar Get API. Multiple value separated by comma. */
                occurrence_ids?: string;
            };
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WebinarRegistrant"];
                "multipart/form-data": components["schemas"]["WebinarRegistrant"];
            };
        };
        responses: {
            /** @description Registration created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Registrant ID */
                        id?: string;
                        /** @description Join URL for this registrant */
                        join_url?: string;
                        /** @description Registrant ID */
                        registrant_id?: string;
                        /**
                         * Format: date-time
                         * @description Start time
                         */
                        start_time?: string;
                        /** @description Topic */
                        topic?: string;
                    };
                    "application/xml": {
                        /** @description Registrant ID */
                        id?: string;
                        /** @description Join URL for this registrant */
                        join_url?: string;
                        /** @description Registrant ID */
                        registrant_id?: string;
                        /**
                         * Format: date-time
                         * @description Start time
                         */
                        start_time?: string;
                        /** @description Topic */
                        topic?: string;
                    };
                };
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarRegistrantStatus: {
        parameters: {
            query?: {
                /** @description The meeting occurrence ID */
                occurrence_id?: components["parameters"]["OccurrenceId"];
            };
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    action: "approve" | "cancel" | "deny";
                    /** @description List of registrants */
                    registrants?: {
                        email?: string;
                        id?: string;
                    }[];
                };
                "multipart/form-data": {
                    /** @enum {string} */
                    action: "approve" | "cancel" | "deny";
                    /** @description List of registrants */
                    registrants?: {
                        email?: string;
                        id?: string;
                    }[];
                };
            };
        };
        responses: {
            /** @description Registrant status updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Webinar or Registrant not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    webinarStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The webinar ID */
                webinarId: components["parameters"]["WebinarId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    action?: "end";
                };
                "multipart/form-data": {
                    /** @enum {string} */
                    action?: "end";
                };
            };
        };
        responses: {
            /** @description Webinar updated */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Webinar not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
