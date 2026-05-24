export type paths = {
    "/chats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List chats
         * @description List all unique conversations for the organization, sorted by most recent message.
         */
        get: operations["listChats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chats/{chatId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a chat
         * @description Get details for a specific conversation.
         */
        get: operations["getChat"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chats/{chatId}/background": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get chat background
         * @description Get the current background image metadata for a conversation. Works for both 1-on-1 and group chats.
         */
        get: operations["getChatBackground"];
        /**
         * Set chat background
         * @description Set or update the background image for a conversation. Works for both 1-on-1 and group chats.
         *
         *     The uploaded image is converted into a PosterKit-compatible archive and applied to the iMessage conversation on the linked device. Supported formats: JPEG, PNG, GIF, WebP, HEIC/HEIF. Maximum file size: 10 MB.
         */
        put: operations["setChatBackground"];
        post?: never;
        /**
         * Remove chat background
         * @description Remove the background image from a conversation, reverting to the default appearance.
         */
        delete: operations["removeChatBackground"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chats/{chatId}/contact-card": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Share contact card
         * @description Stage the contact card (Name & Photo) for sharing in a chat. The contact card will be piggybacked onto the next outgoing message (text or attachment) sent to this chat. This is idempotent — calling it multiple times is harmless.
         */
        post: operations["shareContactCard"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chats/{chatId}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List messages in a chat
         * @description List all messages in a conversation with optional filtering.
         */
        get: operations["listChatMessages"];
        put?: never;
        /**
         * Send a message
         * @description Send a message to a chat. The chatId can be: (1) E.164 phone number, (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone/email for multi-recipient chats. For multi-recipient, an unnamed group is automatically created or reused if the exact participant combination already exists. For explicit groups, the group must be linked to an existing iMessage chat.
         *
         *     **iMessage send-with-effect:** set the optional `effect` field to attach an Apple expressive send (slam, loud, gentle, invisible-ink) or screen effect (echo, spotlight, balloons, confetti, love, lasers, fireworks, celebration). Effects are an iMessage-only feature — when the recipient is on SMS/RCS the message is delivered without the animation. Effects are not supported in multipart (`parts`) mode.
         */
        post: operations["sendMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chats/{chatId}/messages/{messageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a message
         * @description Get details for a specific message.
         */
        get: operations["getMessage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chats/{chatId}/messages/{messageId}/reactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add or remove a reaction
         * @description Add or remove a reaction to a message. Supports classic iMessage tapbacks (love, like, dislike, laugh, emphasize, question) and emoji reactions (e.g. +😂, -😂).
         *
         *     The messageId can be an explicit message ID (e.g., msg_xxx) or a relative index (-1 for last message, -2 for second-to-last, etc.). When using relative indices, you can optionally filter by message direction (inbound/outbound only).
         *
         *     Emoji reactions require macOS 14 (Sonoma) or later on the device.
         */
        post: operations["addReaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chats/{chatId}/messages/{messageId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get message status
         * @description Get delivery status for a specific message.
         */
        get: operations["getMessageStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chats/{chatId}/polls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send a poll
         * @description Send a native iMessage poll to a chat. The poll appears as an interactive ballot that recipients can vote on.
         */
        post: operations["sendPoll"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chats/{chatId}/polls/{pollId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get poll results
         * @description Retrieve a poll's definition and aggregated vote counts. The pollId is the poll_id returned in the poll.received or poll.created webhook event.
         */
        get: operations["getPollResults"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chats/{chatId}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Mark chat as read
         * @description Mark all messages in a chat as read. This sends a read receipt to the sender.
         */
        post: operations["markChatRead"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chats/{chatId}/typing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start typing indicator
         * @description Start the typing indicator for a chat. The indicator shows the recipient that you are typing.
         *
         *     **RCS limitation:** typing indicators are only delivered for iMessage chats — the RCS protocol does not carry composing state. Calls against RCS-routed chats return 200 with a `warning` field and have no visible effect on the recipient.
         */
        post: operations["startTyping"];
        /**
         * Stop typing indicator
         * @description Stop the typing indicator for a chat.
         *
         *     **RCS limitation:** typing indicators are only delivered for iMessage chats — the RCS protocol does not carry composing state. Calls against RCS-routed chats return 200 with a `warning` field and have no visible effect on the recipient.
         */
        delete: operations["stopTyping"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contacts
         * @description List all contacts for the organization with optional search and pagination.
         */
        get: operations["listContacts"];
        put?: never;
        /**
         * Create a contact
         * @description Create a new contact with a phone number (E.164 format) or email address.
         */
        post: operations["createContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a contact
         * @description Get details for a specific contact by phone number or email.
         */
        get: operations["getContact"];
        put?: never;
        post?: never;
        /**
         * Delete a contact
         * @description Soft-delete a contact.
         */
        delete: operations["deleteContact"];
        options?: never;
        head?: never;
        /**
         * Update a contact
         * @description Update a contact's name.
         */
        patch: operations["updateContact"];
        trace?: never;
    };
    "/contacts/{contactId}/capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check contact capabilities
         * @description Check if a contact supports iMessage and/or SMS.
         */
        get: operations["getContactCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contact tags
         * @description List all tags assigned to a contact.
         */
        get: operations["listContactTags"];
        put?: never;
        /**
         * Add tags to a contact
         * @description Add one or more tags to a contact. If a tag already exists on the contact, it is re-activated (idempotent). Tags are free-form strings.
         */
        post: operations["addContactTags"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/tags/{tag}": {
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
         * Remove a tag from a contact
         * @description Remove a specific tag from a contact. The tag is soft-deleted and can be re-added later.
         */
        delete: operations["removeContactTag"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/facetime/calls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Initiate a FaceTime call (Coming Soon)
         * @description **Coming Soon** -- This endpoint is temporarily disabled while we stabilize the FaceTime call flow.
         *
         *     Initiates a FaceTime call to the specified phone number or email address. Returns a shareable FaceTime link that anyone can use to join the call. The call will ring the contact and auto-admit the first person who joins via the link.
         */
        post: operations["callFaceTime"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
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
         * @description List all groups for the organization with optional search and pagination.
         */
        get: operations["listGroups"];
        put?: never;
        /**
         * Create a group
         * @description Create a new group. There are two modes:
         *
         *     **1. Link to existing iMessage chat:** Provide `chat_guid` to join an existing group chat that was created outside the API. The `members` list records who is in the group but does NOT add them to the linked iMessage chat. Multiple groups can have the same participants if they have different `chat_guid`s.
         *
         *     **2. Create new group:** Omit `chat_guid` to create a new group. When you send the first message, a new iMessage chat will be created. Note: iMessage only allows one chat per unique participant set when created via API.
         */
        post: operations["createGroup"];
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
         * Get a group
         * @description Get details for a specific group.
         */
        get: operations["getGroup"];
        put?: never;
        post?: never;
        /**
         * Delete a group
         * @description Soft-delete a group. Members are automatically removed. If the group is linked to an existing iMessage chat, the number also leaves that chat.
         */
        delete: operations["deleteGroup"];
        options?: never;
        head?: never;
        /**
         * Update a group
         * @description Update a group's name. If the group has a linked `chat_guid`, the display name will also be updated in the linked iMessage chat. Note: iMessage only allows one chat per unique participant set, so renaming simply changes the display name on the existing chat thread.
         */
        patch: operations["updateGroup"];
        trace?: never;
    };
    "/groups/{groupId}/icon": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Set group icon
         * @description Set the group icon/photo. Requires the group to have a linked chat_guid. Uses multipart/form-data.
         *
         *     The uploaded image is stored in Blooio storage and synced to the linked iMessage chat before the request returns.
         */
        post: operations["setGroupIcon"];
        /**
         * Remove group icon
         * @description Remove the group icon/photo. Requires the group to have a linked chat_guid.
         *
         *     The icon is removed from both Blooio storage and the linked iMessage chat before the request returns.
         */
        delete: operations["removeGroupIcon"];
        options?: never;
        head?: never;
        patch?: never;
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
         * List group members
         * @description List all members of a group.
         */
        get: operations["listGroupMembers"];
        put?: never;
        /**
         * Add a member to a group (Coming Soon)
         * @description ⚠️ **COMING SOON** - This endpoint is temporarily disabled while we stabilize this feature.
         *
         *     Add an existing contact to a group. If the group is linked to an existing iMessage chat, also adds the participant to that chat.
         */
        post: operations["addGroupMember"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups/{groupId}/members/{contactId}": {
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
         * Remove a member from a group (Coming Soon)
         * @description ⚠️ **COMING SOON** - This endpoint is temporarily disabled while we stabilize this feature.
         *
         *     Remove a contact from a group. If the group is linked to an existing iMessage chat, also removes the participant from that chat. If the contact being removed is the organization's own phone number, leaves the group chat instead.
         */
        delete: operations["removeGroupMember"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/location/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contact locations
         * @description Returns cached FindMy contact locations available through your blooio account. Each entry includes the contact's handle (phone/email), coordinates, and last update time.
         */
        get: operations["listLocationContacts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/location/contacts/{handle}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get contact location
         * @description Returns the cached location for a specific contact identified by phone number or email.
         */
        get: operations["getLocationContact"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/location/contacts/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refresh contact locations
         * @description Triggers a refresh of cached FindMy contact locations. Updated results may take 15-20 seconds to appear.
         */
        post: operations["refreshLocationContacts"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get current authentication context
         * @description Returns details about the authenticated API key or dashboard user, including organization info, devices, and usage statistics.
         */
        get: operations["getMe"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/numbers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List phone numbers
         * @description List all phone numbers bound to this API key with their availability status. Use the returned phone numbers as the `:number` path parameter for other `/me/numbers/` endpoints.
         */
        get: operations["listNumbers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/numbers/{number}/contact-card": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get contact card (Coming Soon)
         * @description ⚠️ **COMING SOON** - This endpoint is temporarily disabled while we stabilize this feature.
         *
         *     Get the personal contact card (Name & Photo) for the specified phone number. This is the identity that gets shared with contacts in iMessage.
         */
        get: operations["getMyContactCard"];
        /**
         * Update contact card
         * @description Update the personal contact card (Name & Photo) for the specified phone number. All fields are optional — only provided fields are updated.
         */
        put: operations["updateMyContactCard"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/phone-numbers/batch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Batch look up phone numbers
         * @description Look up multiple phone numbers in a single request. Returns the same detailed information as the single lookup endpoint for each number. Maximum 100 numbers per request.
         *
         *     **Requires an Enterprise plan** (Dedicated Enterprise).
         */
        post: operations["batchLookupPhoneNumbers"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/phone-numbers/lookup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Look up a phone number
         * @description Returns detailed information about a phone number including validation, formatting (E.164, national, international), number type, and NANPA geocoding (city, state/province) for North American numbers. The geocoding data is sourced from different database with 240,000+ NPA-NXX entries.
         *
         *     **Requires an Enterprise plan** (Dedicated Enterprise). Returns 403 if your organization does not have an active enterprise subscription.
         */
        get: operations["lookupPhoneNumber"];
        put?: never;
        /**
         * Look up a phone number
         * @description Same as the GET endpoint, but accepts the phone number in the request body. Useful when the number contains characters that are difficult to URL-encode.
         *
         *     **Requires an Enterprise plan** (Dedicated Enterprise).
         */
        post: operations["lookupPhoneNumberPost"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
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
         * @description List all webhooks for the organization.
         */
        get: operations["listWebhooks"];
        put?: never;
        /**
         * Create a webhook
         * @description Create a new webhook subscription.
         */
        post: operations["createWebhook"];
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
         * Get a webhook
         * @description Get details for a specific webhook.
         */
        get: operations["getWebhook"];
        put?: never;
        post?: never;
        /**
         * Delete a webhook
         * @description Permanently delete a webhook.
         */
        delete: operations["deleteWebhook"];
        options?: never;
        head?: never;
        /**
         * Update a webhook
         * @description Update a webhook's configuration.
         */
        patch: operations["updateWebhook"];
        trace?: never;
    };
    "/webhooks/{webhookId}/logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List webhook logs
         * @description List delivery logs for a specific webhook.
         */
        get: operations["listWebhookLogs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/{webhookId}/logs/{eventId}/replay": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Replay a webhook event
         * @description Re-send a webhook event to the configured URL.
         */
        post: operations["replayWebhookEvent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/{webhookId}/secret/rotate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Rotate webhook signing secret
         * @description Generate a new signing secret for the webhook. The new secret is returned only once in this response - store it securely. The old secret becomes invalid immediately.
         */
        post: operations["rotateWebhookSecret"];
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
        Chat: {
            /** @description Contact info (only for non-group chats) */
            contact?: {
                contact_id?: string;
                identifier?: string;
                name?: string | null;
            } | null;
            /** @description Group ID (only for group chats) */
            group_id?: string | null;
            /** @description Group name (only for group chats) */
            group_name?: string | null;
            /** @description Chat identifier (phone number, email, or group ID) */
            id?: string;
            inbound_count?: number;
            /** @description Whether this is a group chat */
            is_group?: boolean;
            /** Format: int64 */
            last_inbound_time?: number | null;
            last_message?: components["schemas"]["LastMessage"];
            /** Format: int64 */
            last_message_time?: number;
            /** Format: int64 */
            last_outbound_time?: number | null;
            /** @description Number of members (only for group chats) */
            member_count?: number;
            message_count?: number;
            outbound_count?: number;
            /** @enum {string} */
            type?: "phone" | "email" | "group";
        };
        /** @description Response for chat background operations */
        ChatBackgroundResponse: {
            /** @description Unique identifier for the current background, or null if none */
            background_id?: string | null;
            /** @description Version number of the background (for cache invalidation) */
            background_version?: number | null;
            /** @description Whether the background was changed by this operation (only present on PUT) */
            changed?: boolean;
            /** @description Normalized chat identifier (phone number, email, or group ID) */
            chat_id?: string;
            /** @description Whether the chat currently has a background set */
            has_background?: boolean;
        };
        ChatDetail: {
            /** @description Contact info (only for non-group chats) */
            contact?: {
                contact_id?: string;
                identifier?: string;
                name?: string | null;
            } | null;
            /** Format: int64 */
            first_message_time?: number;
            /** @description Group ID (only for group chats) */
            group_id?: string | null;
            /** @description Group name (only for group chats) */
            group_name?: string | null;
            /** @description Chat identifier (phone number, email, or group ID) */
            id?: string;
            inbound_count?: number;
            /** @description Whether this is a group chat */
            is_group?: boolean;
            /** Format: int64 */
            last_inbound_time?: number | null;
            last_message?: components["schemas"]["LastMessage"];
            /** Format: int64 */
            last_message_time?: number;
            /** Format: int64 */
            last_outbound_time?: number | null;
            /** @description Number of members (only for group chats) */
            member_count?: number;
            message_count?: number;
            outbound_count?: number;
            /** @enum {string} */
            type?: "phone" | "email" | "group";
        };
        Contact: {
            /** @description Internal contact ID */
            contact_id?: string;
            /** Format: int64 */
            created_at?: number;
            /** @description Contact identifier (phone or email) */
            id?: string;
            /** @description Phone number (E.164) or email */
            identifier?: string;
            /** Format: int64 */
            last_message_time?: number | null;
            name?: string | null;
            tags?: string[];
            /** @enum {string} */
            type?: "phone" | "email";
        };
        ContactLocation: {
            /** @description GPS coordinates [latitude, longitude] */
            coordinates?: number[];
            /** @description Contact's phone number or email */
            handle?: string;
            /**
             * Format: int64
             * @description Timestamp of last location update (epoch ms)
             */
            last_updated?: number;
            /** @description Location status (e.g., 'live', 'shallow', 'legacy') */
            status?: string;
        };
        DeleteResponse: {
            /** Format: int64 */
            deleted_at?: number;
            success?: boolean;
        };
        /** @description Result of syncing the operation to a linked iMessage chat */
        DeviceSyncResult: {
            /**
             * @description The action that was performed for the linked chat
             * @enum {string}
             */
            action?: "add_participant" | "remove_participant" | "leave";
            /** @description The linked iMessage chat GUID */
            chat_guid?: string;
            /** @description Error message if sync failed */
            error?: string | null;
            /** @description Whether the sync was successful */
            synced?: boolean;
        };
        Error: {
            /** @description Machine-readable error code for programmatic handling (e.g. `inbound_only_no_prior_inbound`, `outbound_limit_reached`, `attachment_first_message_not_allowed`). Switch on `code`, not on `message`. Present on all known/structured error cases. */
            code?: string;
            /** @description Error class identifier (typically `ApiError`). */
            error?: string;
            /** @description Human-readable explanation of the failure. */
            message?: string;
            /** @description HTTP status code */
            status?: number;
        };
        Group: {
            /** @description BlueBubbles chat GUID if linked to a device group chat */
            chat_guid?: string | null;
            /** Format: int64 */
            created_at?: number;
            group_id?: string;
            /** @description URL of the group icon/photo */
            icon_url?: string | null;
            /**
             * @description Direction of the most recent message
             * @enum {string|null}
             */
            last_message_direction?: "inbound" | "outbound" | null;
            /** @description Text of the most recent message in the group */
            last_message_text?: string | null;
            /**
             * Format: int64
             * @description Timestamp of the most recent message
             */
            last_message_time?: number | null;
            member_count?: number;
            /** @description Total number of messages in this group */
            message_count?: number;
            /** @description Group name. Null for unnamed groups. */
            name?: string | null;
        };
        /** @description Response for group icon operations */
        GroupIconResponse: {
            /** @description The BlueBubbles chat GUID */
            chat_guid?: string;
            /** @description Linked chat sync status */
            device_sync?: {
                chat_guid?: string;
                /** @description Status message about linked chat sync */
                message?: string;
                /** @description Whether the icon change was synced to the linked iMessage chat. This will be true on successful set/remove operations. */
                synced?: boolean;
            };
            group_id?: string;
            /** @description URL of the uploaded icon (only present on set) */
            icon_url?: string;
            message?: string;
            success?: boolean;
        };
        GroupMember: {
            /** Format: int64 */
            added_at?: number;
            contact_id?: string;
            /** @description Contact identifier (phone or email) */
            id?: string;
            identifier?: string;
            name?: string | null;
        };
        LastMessage: {
            /** @enum {string} */
            direction?: "inbound" | "outbound";
            message_id?: string;
            text?: string | null;
            /** Format: int64 */
            time_sent?: number;
        };
        /** @description Rich-link-preview overrides for URL messages (iMessage URL balloon). All fields are optional. Only applies when the message text (or the concatenated part text) is exactly a single http(s) URL. If omitted but the text is a URL, Blooio auto-fetches the page's Open Graph metadata to generate a preview. If the image download fails, the send still succeeds — Blooio silently falls back to the auto-generated preview. */
        LinkPreview: {
            /**
             * Format: uri
             * @description HTTPS URL to an image (png, jpg, webp, gif). Blooio downloads the image server-side and attaches it as the rich-link hero. Max 16 MB. If the download fails or returns a non-image MIME, the send falls back to auto-fetched OG metadata.
             */
            image_url?: string;
            /** @description Bold title line rendered in the iMessage bubble. Overrides the page's `<meta property="og:title">`. */
            title?: string;
        };
        /** @description Response depends on auth_type. For 'api_key': includes full API key details. For 'dashboard': includes user_id and organization info only. */
        MeResponse: {
            /** @description The API key (only for api_key auth) */
            api_key?: string;
            /**
             * @description Type of authentication used
             * @enum {string}
             */
            auth_type?: "api_key" | "dashboard";
            /** @description List of devices associated with this API key (only for api_key auth) */
            devices?: {
                is_active?: boolean;
                /** Format: int64 */
                last_active?: number | null;
                /** @description Phone number assigned to this device (E.164 format) */
                phone_number?: string | null;
                /**
                 * @description Plan type the underlying allocation runs on. `inbound` numbers are reply-only — see `/me/numbers` for details.
                 * @enum {string|null}
                 */
                plan_kind?: "shared" | "dedicated" | "inbound" | "trial" | "2fa" | null;
            }[];
            /** @description Integration details if the API key is associated with an integration (only for api_key auth) */
            integration_details?: Record<string, never> | null;
            /** @description API key metadata (only for api_key auth) */
            metadata?: Record<string, never>;
            organization?: {
                country_code?: string | null;
                /** Format: int64 */
                created_at?: number;
                name?: string;
                organization_id?: string;
            };
            /** @description Organization ID (only for api_key auth) */
            organization_id?: string;
            /** @description Usage statistics (only for api_key auth) */
            usage?: {
                inbound_messages?: number;
                /** Format: int64 */
                last_message_sent?: number | null;
                outbound_messages?: number;
            };
            /** @description User ID (only for dashboard auth) */
            user_id?: string | null;
            /** @description Whether the API key is valid (only for api_key auth) */
            valid?: boolean;
        };
        Message: {
            attachments?: Record<string, never>[];
            /** @enum {string} */
            direction?: "inbound" | "outbound";
            error?: string | null;
            /** @description Phone number or email of the contact, or group ID for group messages */
            external_id?: string;
            /** @description Organization phone number (from-number) used for this message */
            internal_id?: string | null;
            message_id?: string;
            /** @enum {string|null} */
            protocol?: "imessage" | "sms" | "rcs" | "non-imessage" | null;
            /** @description Reactions on this message (tapbacks and emoji reactions) */
            reactions?: components["schemas"]["Reaction"][];
            /** @description Sender's phone number or email for inbound group messages. Null for outbound messages and 1-1 chats. */
            sender?: string | null;
            /** @enum {string|null} */
            status?: "pending" | "queued" | "sent" | "delivered" | "failed" | "cancellation_requested" | "cancelled" | null;
            text?: string | null;
            /** Format: int64 */
            time_delivered?: number | null;
            /** Format: int64 */
            time_sent?: number;
        };
        MessageDetail: {
            attachments?: Record<string, never>[];
            chat_id?: string;
            contact?: {
                contact_id?: string;
                /** @description The contact's phone number or email */
                identifier?: string;
                name?: string | null;
            } | null;
            /** @enum {string} */
            direction?: "inbound" | "outbound";
            error?: string | null;
            /** @description Organization phone number (from-number) used for this message */
            internal_id?: string | null;
            message_id?: string;
            /** @enum {string|null} */
            protocol?: "imessage" | "sms" | "rcs" | "non-imessage" | null;
            /** @description Reactions on this message (tapbacks and emoji reactions) */
            reactions?: components["schemas"]["Reaction"][];
            /** @description Sender's phone number or email for inbound group messages. Null for outbound messages and 1-1 chats. */
            sender?: string | null;
            /** @enum {string|null} */
            status?: "pending" | "queued" | "sent" | "delivered" | "failed" | "cancellation_requested" | "cancelled" | null;
            text?: string | null;
            /** Format: int64 */
            time_delivered?: number | null;
            /** Format: int64 */
            time_sent?: number;
        };
        MessageStatus: {
            chat_id?: string;
            /** @enum {string} */
            direction?: "inbound" | "outbound";
            error?: string | null;
            message_id?: string;
            /** @enum {string|null} */
            protocol?: "imessage" | "sms" | "rcs" | "non-imessage" | null;
            /** @enum {string|null} */
            status?: "pending" | "queued" | "sent" | "delivered" | "failed" | "cancellation_requested" | "cancelled" | null;
            /** Format: int64 */
            time_delivered?: number | null;
            /** Format: int64 */
            time_sent?: number;
        };
        Pagination: {
            limit?: number;
            offset?: number;
            total?: number;
        };
        PhoneNumberLookupResult: {
            /**
             * @description NPA area code (first 3 digits of national number, only for NANP numbers)
             * @example 212
             */
            area_code?: string;
            /**
             * @description General region for the area code (most common city, only for NANP numbers)
             * @example New York, NY
             */
            area_code_region?: string;
            /**
             * @description ISO 3166-1 alpha-2 country code
             * @example US
             */
            country?: string | null;
            /**
             * @description Country calling code without +
             * @example 1
             */
            country_calling_code?: string;
            /**
             * @description E.164 formatted number
             * @example +12125551234
             */
            e164?: string;
            /**
             * @description NXX exchange code (digits 4-6 of national number, only for NANP numbers)
             * @example 555
             */
            exchange?: string;
            /**
             * @description The original input string
             * @example +12125551234
             */
            input?: string;
            /**
             * @description International formatted number
             * @example +1 212 555 1234
             */
            international?: string;
            /** @description NANPA geocoding location (only for North American numbers with country code 1) */
            location?: {
                /**
                 * @description City name
                 * @example New York
                 */
                city?: string | null;
                /**
                 * @description State/province abbreviation
                 * @example NY
                 */
                region?: string | null;
                /**
                 * @description Full state/province name
                 * @example New York
                 */
                region_name?: string | null;
            } | null;
            /**
             * @description National formatted number
             * @example (212) 555-1234
             */
            national?: string;
            /**
             * @description National number without country code
             * @example 2125551234
             */
            national_number?: string;
            /** @description Whether the phone number is a possible number (less strict than valid) */
            possible?: boolean;
            /**
             * @description Number type detected by libphonenumber
             * @example FIXED_LINE_OR_MOBILE
             * @enum {string|null}
             */
            type?: "FIXED_LINE" | "MOBILE" | "FIXED_LINE_OR_MOBILE" | "TOLL_FREE" | "PREMIUM_RATE" | "SHARED_COST" | "VOIP" | "PERSONAL_NUMBER" | "PAGER" | "UAN" | "VOICEMAIL" | null;
            /** @description Whether the phone number is valid */
            valid?: boolean;
        };
        Reaction: {
            /** @description Whether the reaction is currently active (true) or was removed (false) */
            is_added?: boolean;
            /** @description The reaction value. Classic tapbacks: love, like, dislike, laugh, emphasize, question. Emoji reactions: the emoji character (e.g. 😂, 👍). */
            reaction?: string;
            /** @description Phone number or email of who sent the reaction. Null when the reaction was sent by you (outbound). */
            sender?: string | null;
            /**
             * Format: int64
             * @description Timestamp when the reaction was sent (ms)
             */
            time_sent?: number;
        };
        ReactionRequest: {
            /**
             * @description Filter by message direction (only used when messageId is a relative index like -1, -2)
             * @enum {string}
             */
            direction?: "inbound" | "outbound";
            /**
             * @description The reaction to add or remove. Must be prefixed with `+` to add or `-` to remove.
             *
             *     **Classic tapbacks:** `+love`, `-love`, `+like`, `-like`, `+dislike`, `-dislike`, `+laugh`, `-laugh`, `+emphasize`, `-emphasize`, `+question`, `-question`
             *
             *     **Emoji reactions:** Any emoji prefixed with `+` or `-` (e.g. `+😂`, `-😂`, `+👍`, `-🔥`). Emoji reactions require macOS 14 (Sonoma) or later on the device.
             * @example +love
             * @example -like
             * @example +😂
             * @example -🔥
             */
            reaction: string;
        };
        ReactionResponse: {
            /**
             * @description The action that was performed
             * @enum {string}
             */
            action?: "add" | "remove";
            /** @description The ID of the message that was reacted to */
            message_id?: string;
            /**
             * @description The reaction that was added or removed. For classic tapbacks: love, like, dislike, laugh, emphasize, question. For emoji reactions: the emoji character (e.g. 😂, 👍, 🔥).
             * @example love
             * @example like
             * @example 😂
             * @example 👍
             */
            reaction?: string;
            /** @description Whether the reaction was sent successfully */
            success?: boolean;
        };
        ReadResponse: {
            /** @description Chat identifier */
            chat_id?: string;
            /**
             * Format: int64
             * @description Timestamp when marked as read
             */
            marked_at?: number;
            /**
             * @description Read status
             * @enum {string}
             */
            status?: "read";
        };
        /** @description Request body for sending a message */
        SendMessageRequest: {
            /** @description Array of attachment URLs or objects with url/name */
            attachments?: (string | {
                name?: string;
                url: string;
            })[];
            /**
             * @description Optional. Attach an iMessage send-with-effect to the outgoing message.
             *
             *     **Bubble effects** (apply to a single text bubble):
             *     - `slam` — Slam
             *     - `loud` — Loud
             *     - `gentle` — Gentle
             *     - `invisible-ink` — Invisible Ink
             *
             *     **Screen effects** (full-screen animation in the recipient's chat):
             *     - `echo` — Echo
             *     - `spotlight` — Spotlight
             *     - `balloons` — Balloons
             *     - `confetti` — Confetti
             *     - `love` — Love (heart)
             *     - `lasers` — Lasers
             *     - `fireworks` — Fireworks
             *     - `celebration` — Celebration (sparkles)
             *
             *     Values are case-insensitive and accept either dashes or spaces (`"Invisible Ink"` and `"invisible-ink"` both work). Pass `"none"` or omit the field to send without an effect.
             *
             *     **Limitations:**
             *     - iMessage-only — when the chat is delivered as SMS or RCS the message is sent without an animation.
             *     - Not supported alongside the `parts` array (multipart bubbles cannot carry an effect). Use the top-level `text` field instead.
             *     - When `text` is an array, every message in the array is sent with the same effect.
             * @enum {string|null}
             */
            effect?: "slam" | "loud" | "gentle" | "invisible-ink" | "echo" | "spotlight" | "balloons" | "confetti" | "love" | "lasers" | "fireworks" | "celebration" | "none" | null;
            /** @description E.164 phone number to send from. For Twilio API keys, this is optional — if omitted, the first assigned Twilio number is auto-selected. For Blooio (iMessage) API keys, this selects a specific number from your pool. Must be a number assigned to your API key. */
            from_number?: string;
            /** @description Optional. Override the rich-link-preview image and/or title on URL messages. See the LinkPreview schema. When omitted, Blooio auto-generates the preview from the page's Open Graph tags. */
            link_preview?: components["schemas"]["LinkPreview"] | null;
            /**
             * @description Ordered array of message parts. Two modes:
             *
             *       1. **Multipart mode** — parts sent as a single unified iMessage bubble (mix of text and attachment parts). This is the default.
             *       2. **URL-balloon batch mode** — triggered when any part has a `link_preview` object. Each part becomes its own rich-link-preview iMessage; parts are sent sequentially in array order. In batch mode every part must be text-only with `text` being a single http(s) URL. Response contains `message_ids[]` + `count` instead of `message_id`.
             */
            parts?: {
                /** @description Optional. Per-part rich-link-preview override. When any part carries this, every part must be a text-only single-URL part (URL-balloon batch mode). */
                link_preview?: components["schemas"]["LinkPreview"] | null;
                /** @description Participant phone number or email to @-mention. Only valid with 'text'. The entire text of the part is rendered as the mention. */
                mention?: string;
                /** @description Filename for the attachment. Only valid with 'url'. */
                name?: string;
                /** @description Text content for this part. Mutually exclusive with 'url'. */
                text?: string;
                /** @description URL to an attachment for this part. Mutually exclusive with 'text'. */
                url?: string;
            }[];
            /**
             * @description If true, the contact card (Name & Photo) will be shared with this message. The contact card is piggybacked onto the outgoing message. Defaults to false.
             * @default false
             */
            share_contact: boolean;
            /** @description Message text. Can be a single string or array of strings (each becomes a separate message) */
            text?: string | string[];
            /** @description Whether to show typing indicator before sending. Defaults to org preference. */
            use_typing_indicator?: boolean;
        };
        /** @description Response after sending a message */
        SendMessageResponse: {
            /** @description Number of messages sent. Only present in URL-balloon batch mode. */
            count?: number;
            /** @description True if a new unnamed group was created for this multi-recipient message */
            group_created?: boolean;
            /** @description Group ID when sending to multi-recipient (new or existing) */
            group_id?: string;
            /** @description ID of the sent message (single-message sends) */
            message_id?: string;
            /** @description IDs of sent messages. Present when `text` is an array or when `parts` uses per-part `link_preview` (URL-balloon batch mode). */
            message_ids?: string[];
            /** @description List of participants (present for multi-recipient) */
            participants?: string[];
            /**
             * @description Initial status of the message(s)
             * @enum {string}
             */
            status?: "queued" | "failed";
        };
        TypingResponse: {
            /** @description Chat identifier */
            chat_id?: string;
            /**
             * Format: int64
             * @description Timestamp when typing started (only for start)
             */
            started_at?: number;
            /**
             * Format: int64
             * @description Timestamp when typing stopped (only for stop)
             */
            stopped_at?: number;
            /** @description Whether typing indicator is active */
            typing?: boolean;
            /**
             * @description Present when the request was accepted but the indicator could not be delivered. The most common reason is that the chat last routed via RCS, which does not carry composing state.
             * @example RCS chats do not support composing indicators
             */
            warning?: string;
        };
        Webhook: {
            /** @description Name of the API key (if scope is api_key) */
            api_key_name?: string | null;
            /** Format: int64 */
            created_at?: number;
            /** Format: int64 */
            deprecated_at?: number | null;
            failure_count?: number;
            /** @description Name of the integration (if scope is integration) */
            integration_name?: string | null;
            /** @description Whether the webhook is active (not deprecated) */
            is_active?: boolean;
            /** Format: int64 */
            last_triggered?: number | null;
            /** @enum {string} */
            scope?: "api_key" | "organization" | "integration";
            /**
             * Format: int64
             * @description -1 means no expiration
             */
            valid_until?: number;
            webhook_id?: string;
            /** @enum {string} */
            webhook_type?: "message" | "status" | "all";
            /** Format: uri */
            webhook_url?: string;
        };
        /** @description Webhook event payload. Structure varies by event type. All message events include group information when applicable. */
        WebhookEventPayload: {
            /** @description Array of attachment objects */
            attachments?: {
                name?: string | null;
                url?: string;
            }[] | null;
            /**
             * Format: int64
             * @description Timestamp when message was delivered (for message.delivered events)
             */
            delivered_at?: number | null;
            /** @description Error code (for message.failed events) */
            error_code?: string | null;
            /** @description Error description (for message.failed events) */
            error_message?: string | null;
            /**
             * @description Event type (e.g., message.received, message.sent, message.delivered, message.failed, message.read)
             * @example message.sent
             */
            event?: string;
            /** @description Recipient identifier (phone number, email, or group ID) */
            external_id?: string;
            /** @description Group ID (only present when is_group=true) */
            group_id?: string | null;
            /** @description Group display name (only present when is_group=true) */
            group_name?: string | null;
            /** @description Phone number that sent/received the message */
            internal_id?: string | null;
            /** @description Whether this message is from/to a group chat. Always present. */
            is_group?: boolean;
            /** @description Unique message identifier */
            message_id?: string;
            /** @description Array of group participants (only present when is_group=true) */
            participants?: {
                contact_id?: string;
                identifier?: string;
                name?: string | null;
            }[] | null;
            /**
             * @description Message protocol
             * @enum {string|null}
             */
            protocol?: "imessage" | "sms" | "rcs" | "non-imessage" | null;
            /**
             * Format: int64
             * @description Timestamp when message was read (for message.read events)
             */
            read_at?: number | null;
            /** @description Sender identifier (for inbound messages) */
            sender?: string | null;
            /**
             * Format: int64
             * @description Timestamp when message was sent (for message.sent events)
             */
            sent_at?: number | null;
            /**
             * @description Message status
             * @enum {string}
             */
            status?: "queued" | "pending" | "sent" | "delivered" | "failed" | "read" | "received";
            /** @description Message text content */
            text?: string | null;
            /**
             * Format: int64
             * @description Event timestamp in milliseconds
             */
            timestamp?: number;
        };
        WebhookLog: {
            /** Format: int64 */
            attempted_time?: number;
            event_body?: components["schemas"]["WebhookEventPayload"];
            event_id?: string;
            /** @description Additional metadata about the webhook delivery */
            metadata?: {
                duration_ms?: number;
                event_name?: string;
                is_replay?: boolean;
                message_id?: string;
                organization_id?: string;
                original_event_id?: string;
            };
            /** @description Response body from the webhook endpoint (if JSON) */
            response_json?: Record<string, never> | null;
            /** Format: int64 */
            response_received_at?: number | null;
            /** @description HTTP status code received from the webhook endpoint */
            response_status?: number | null;
            /** @enum {string} */
            scope?: "api" | "integration" | "org";
            webhook_url?: string;
        };
    };
    responses: {
        /** @description Invalid request parameters */
        BadRequest: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description Resource not found */
        NotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description Authentication required or invalid */
        Unauthorized: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
    };
    parameters: {
        /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
        ChatIdParam: string;
        /**
         * @description Contact identifier (phone number in E.164 format or email, URL-encoded)
         * @example %2B15551234567
         */
        ContactIdParam: string;
        /**
         * @description Group ID
         * @example grp_abc123def456
         */
        GroupIdParam: string;
        /** @description Maximum number of items to return (1-200) */
        LimitParam: number;
        /**
         * @description Message ID
         * @example msg_abc123def456
         */
        MessageIdParam: string;
        /** @description Number of items to skip */
        OffsetParam: number;
        /**
         * @description Webhook ID
         * @example wh_abc123def456
         */
        WebhookIdParam: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    listChats: {
        parameters: {
            query?: {
                /** @description Maximum number of items to return (1-200) */
                limit?: components["parameters"]["LimitParam"];
                /** @description Number of items to skip */
                offset?: components["parameters"]["OffsetParam"];
                /** @description Search query (matches phone/email or contact name) */
                q?: string;
                /** @description Sort order */
                sort?: "recent" | "oldest";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of chats */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        chats?: components["schemas"]["Chat"][];
                        pagination?: components["schemas"]["Pagination"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    getChat: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatDetail"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    getChatBackground: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat background details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatBackgroundResponse"];
                };
            };
            401: components["responses"]["Unauthorized"];
            /** @description Temporary communication error with device */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description No active number available */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    setChatBackground: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description The image file to set as the chat background
                     */
                    background: string;
                };
            };
        };
        responses: {
            /** @description Chat background set successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatBackgroundResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Failed to set background on device */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description No active number available */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    removeChatBackground: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat background removed successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatBackgroundResponse"];
                };
            };
            401: components["responses"]["Unauthorized"];
            /** @description Failed to remove background on device */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description No active number available */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    shareContactCard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Contact card staged for sharing */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Normalized chat identifier */
                        chat_id?: string;
                        /** @example Contact card staged. It will be sent with the next outgoing message in this chat. */
                        message?: string;
                        /** @example true */
                        success?: boolean;
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            /** @description Temporary communication error */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description No active number available */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    listChatMessages: {
        parameters: {
            query?: {
                /** @description Filter by message direction */
                direction?: "inbound" | "outbound";
                /** @description Maximum number of items to return (1-200) */
                limit?: components["parameters"]["LimitParam"];
                /** @description Number of items to skip */
                offset?: components["parameters"]["OffsetParam"];
                /** @description Only messages sent after this timestamp (ms) */
                since?: number;
                /** @description Sort order by time */
                sort?: "asc" | "desc";
                /** @description Only messages sent before this timestamp (ms) */
                until?: number;
            };
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of messages */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        chat_id?: string;
                        messages?: components["schemas"]["Message"][];
                        pagination?: components["schemas"]["Pagination"];
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    sendMessage: {
        parameters: {
            query?: never;
            header?: {
                /** @description Unique key to prevent duplicate message sends. If the same key is used again, the original message_id and status are returned. */
                "Idempotency-Key"?: string;
            };
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SendMessageRequest"];
            };
        };
        responses: {
            /** @description Duplicate request (idempotency key matched) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendMessageResponse"];
                };
            };
            /** @description Message accepted for sending */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendMessageResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /**
             * @description Forbidden. The response body's `code` field disambiguates the specific failure:
             *     - `inbound_only_no_prior_inbound` — the sender is on the Inbound plan and the recipient has never messaged this number first. Inbound numbers are reply-only. Body also includes `allocation_id` and `external_id`.
             *     - Emergency number
             *     - Integration-assigned number that can't be sent from manually
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "error": "ApiError",
                     *       "message": "Inbound-only plan: outbound is restricted to contacts who messaged this number first.",
                     *       "status": 403,
                     *       "code": "inbound_only_no_prior_inbound",
                     *       "allocation_id": "alloc_...",
                     *       "external_id": "+15555550199"
                     *     }
                     */
                    "application/json": components["schemas"]["Error"];
                };
            };
            404: components["responses"]["NotFound"];
            /**
             * @description Too many requests. Two possible `code`s on this endpoint:
             *     - `outbound_limit_reached` — org-level new-contact cap (configured in Settings) tripped. Body includes `limit`, `current`, `mode`, and on per-number mode `allocation_id` + `sender_number`.
             *     - `new_conversation_limit_reached` — shared plan's daily new-conversation cap reached. Body includes `plan_id`, `cap`, `current`. Existing conversations continue to send.
             */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description No active number available */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
                /**
                 * @description Message ID
                 * @example msg_abc123def456
                 */
                messageId: components["parameters"]["MessageIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Message details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageDetail"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    addReaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
                /** @description Message ID (e.g., msg_xxx) or relative index (-1, -2, etc.) */
                messageId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReactionRequest"];
            };
        };
        responses: {
            /** @description Reaction added or removed successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReactionResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
            /** @description Temporary communication error */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Device not available */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getMessageStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
                /**
                 * @description Message ID
                 * @example msg_abc123def456
                 */
                messageId: components["parameters"]["MessageIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Message status */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageStatus"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    sendPoll: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Array of 2-10 option strings for the poll */
                    options: string[];
                    /** @description Poll question or title (optional) */
                    title?: string;
                };
            };
        };
        responses: {
            /** @description Poll sent successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        chat_id?: string;
                        poll?: {
                            options?: string[];
                            title?: string;
                        };
                        /** @description Unique identifier for the poll */
                        poll_id?: string;
                        sent_at?: number;
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Device unreachable */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description No active device available */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getPollResults: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
                /** @description The poll ID */
                pollId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Poll results */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        chat_id?: string;
                        options?: {
                            text?: string;
                            votes?: number;
                        }[];
                        poll_id?: string;
                        title?: string;
                        total_votes?: number;
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    markChatRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat marked as read */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReadResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
            /** @description Temporary communication error */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    startTyping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typing indicator started */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TypingResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Temporary communication error */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description No active number available */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    stopTyping: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567), (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone numbers/emails for multi-recipient group chats (e.g., +15551234567,+15559876543). All values should be URL-encoded. */
                chatId: components["parameters"]["ChatIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typing indicator stopped */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TypingResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Temporary communication error */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description No active number available */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    listContacts: {
        parameters: {
            query?: {
                /** @description Maximum number of items to return (1-200) */
                limit?: components["parameters"]["LimitParam"];
                /** @description Number of items to skip */
                offset?: components["parameters"]["OffsetParam"];
                /** @description Search query (matches identifier or name) */
                q?: string;
                /** @description Sort order */
                sort?: "recent" | "oldest" | "name_asc" | "name_desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of contacts */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        contacts?: components["schemas"]["Contact"][];
                        pagination?: components["schemas"]["Pagination"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    createContact: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Phone number (E.164 format, e.g., +15551234567) or email address
                     * @example +15551234567
                     */
                    identifier: string;
                    /**
                     * @description Display name for the contact
                     * @example John Doe
                     */
                    name?: string;
                };
            };
        };
        responses: {
            /** @description Contact created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Contact"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Contact already exists */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Contact identifier (phone number in E.164 format or email, URL-encoded)
                 * @example %2B15551234567
                 */
                contactId: components["parameters"]["ContactIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Contact details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Contact"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    deleteContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Contact identifier (phone number in E.164 format or email, URL-encoded)
                 * @example %2B15551234567
                 */
                contactId: components["parameters"]["ContactIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Contact deleted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    updateContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Contact identifier (phone number in E.164 format or email, URL-encoded)
                 * @example %2B15551234567
                 */
                contactId: components["parameters"]["ContactIdParam"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description New display name (null to clear)
                     * @example Jane Doe
                     */
                    name?: string | null;
                };
            };
        };
        responses: {
            /** @description Contact updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Contact"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    getContactCapabilities: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Contact identifier (phone number in E.164 format or email, URL-encoded)
                 * @example %2B15551234567
                 */
                contactId: components["parameters"]["ContactIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Contact capabilities */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        capabilities?: {
                            /** @description Whether FaceTime is available */
                            facetime?: boolean;
                            /** @description Whether iMessage is available */
                            imessage?: boolean;
                            /** @description Whether SMS is available (phone only) */
                            sms?: boolean;
                        };
                        /** @description Normalized contact identifier */
                        contact?: string;
                        /**
                         * Format: int64
                         * @description Timestamp when capabilities were checked
                         */
                        last_checked?: number;
                        /** @enum {string} */
                        type?: "phone" | "email";
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description No active number available to check capabilities */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    listContactTags: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Contact identifier (phone number in E.164 format or email, URL-encoded)
                 * @example %2B15551234567
                 */
                contactId: components["parameters"]["ContactIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of tags */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        tags?: {
                            /**
                             * Format: int64
                             * @description Timestamp when the tag was added (ms since epoch)
                             */
                            created_at?: number;
                            /**
                             * @description The tag value
                             * @example vip
                             */
                            tag?: string;
                        }[];
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    addContactTags: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Contact identifier (phone number in E.164 format or email, URL-encoded)
                 * @example %2B15551234567
                 */
                contactId: components["parameters"]["ContactIdParam"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Tags to add
                     * @example [
                     *       "vip",
                     *       "priority"
                     *     ]
                     */
                    tags: string[];
                };
            };
        };
        responses: {
            /** @description Tags added */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example true */
                        success?: boolean;
                        /**
                         * @description Tags that were added
                         * @example [
                         *       "vip",
                         *       "priority"
                         *     ]
                         */
                        tags_added?: string[];
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    removeContactTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Contact identifier (phone number in E.164 format or email, URL-encoded)
                 * @example %2B15551234567
                 */
                contactId: components["parameters"]["ContactIdParam"];
                /**
                 * @description The tag to remove (URL-encode if it contains special characters)
                 * @example vip
                 */
                tag: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tag removed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    callFaceTime: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Phone number (E.164) or email address to call
                     * @example +15551234567
                     */
                    handle: string;
                };
            };
        };
        responses: {
            /** @description FaceTime call initiated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The handle that was called */
                        handle?: string;
                        /**
                         * @description Shareable FaceTime link
                         * @example https://facetime.apple.com/join#v=1&p=xxx
                         */
                        link?: string;
                        success?: boolean;
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
        };
    };
    listGroups: {
        parameters: {
            query?: {
                /** @description Maximum number of items to return (1-200) */
                limit?: components["parameters"]["LimitParam"];
                /** @description Number of items to skip */
                offset?: components["parameters"]["OffsetParam"];
                /** @description Search query (matches group name) */
                q?: string;
                /** @description Sort order */
                sort?: "recent" | "oldest" | "name_asc" | "name_desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of groups */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        groups?: components["schemas"]["Group"][];
                        pagination?: components["schemas"]["Pagination"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    createGroup: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description BlueBubbles chat GUID to link this group to an existing iMessage chat. Use this to join groups created elsewhere. You can get this from the BlueBubbles API or from inbound message webhooks.
                     * @example iMessage;+;chat123456789
                     */
                    chat_guid?: string;
                    /**
                     * @description Phone numbers or emails of contacts in the group. When linking via chat_guid, this is for record-keeping only (members are not added to the linked iMessage chat).
                     * @example [
                     *       "+15551234567",
                     *       "+15559876543"
                     *     ]
                     */
                    members?: string[];
                    /**
                     * @description Group name (max 255 characters)
                     * @example Sales Team
                     */
                    name: string;
                };
            };
        };
        responses: {
            /** @description Group created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Group"] & {
                        /** @description List of member identifiers that were added to the group */
                        added_members?: string[];
                        /** @description List of contacts that were auto-created */
                        created_contacts?: string[];
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Conflict. Either: (1) A group with this chat_guid already exists, or (2) A group with the same participants already exists on this allocation. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Group ID
                 * @example grp_abc123def456
                 */
                groupId: components["parameters"]["GroupIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Group details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Group"];
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    deleteGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Group ID
                 * @example grp_abc123def456
                 */
                groupId: components["parameters"]["GroupIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Group deleted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int64 */
                        deleted_at?: number;
                        success?: boolean;
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
            /** @description Failed to leave linked iMessage chat */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description No active number available to leave group chat */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    updateGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Group ID
                 * @example grp_abc123def456
                 */
                groupId: components["parameters"]["GroupIdParam"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description New group name
                     * @example Marketing Team
                     */
                    name?: string;
                };
            };
        };
        responses: {
            /** @description Group updated successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Group"] & {
                        device_sync?: components["schemas"]["DeviceSyncResult"];
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    setGroupIcon: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Group ID
                 * @example grp_abc123def456
                 */
                groupId: components["parameters"]["GroupIdParam"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description The icon image file to set as the group photo
                     */
                    icon: string;
                };
            };
        };
        responses: {
            /** @description Group icon set successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupIconResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
            /** @description Failed to update the linked iMessage chat */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description No active number available */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    removeGroupIcon: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Group ID
                 * @example grp_abc123def456
                 */
                groupId: components["parameters"]["GroupIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Group icon removed successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupIconResponse"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
            /** @description Failed to update the linked iMessage chat */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description No active number available */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    listGroupMembers: {
        parameters: {
            query?: {
                /** @description Maximum number of items to return (1-200) */
                limit?: components["parameters"]["LimitParam"];
                /** @description Number of items to skip */
                offset?: components["parameters"]["OffsetParam"];
            };
            header?: never;
            path: {
                /**
                 * @description Group ID
                 * @example grp_abc123def456
                 */
                groupId: components["parameters"]["GroupIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of group members */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The group ID */
                        group_id?: string;
                        /** @description The group name */
                        group_name?: string | null;
                        /** @description URL of the group icon/photo */
                        icon_url?: string | null;
                        members?: components["schemas"]["GroupMember"][];
                        pagination?: components["schemas"]["Pagination"];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    addGroupMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Group ID
                 * @example grp_abc123def456
                 */
                groupId: components["parameters"]["GroupIdParam"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Contact identifier (phone number or email)
                     * @example +15551234567
                     */
                    contact_id: string;
                };
            };
        };
        responses: {
            /** @description Contact is already a member */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        member?: components["schemas"]["GroupMember"];
                        message?: string;
                    };
                };
            };
            /** @description Member added */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Whether a new contact was created for this member */
                        contact_created?: boolean;
                        member?: components["schemas"]["GroupMember"];
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
            /** @description Coming soon - endpoint temporarily disabled */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Coming soon */
                        error?: string;
                        /** @example Adding group members is coming soon */
                        message?: string;
                    };
                };
            };
        };
    };
    removeGroupMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Contact identifier (phone number in E.164 format or email, URL-encoded)
                 * @example %2B15551234567
                 */
                contactId: components["parameters"]["ContactIdParam"];
                /**
                 * @description Group ID
                 * @example grp_abc123def456
                 */
                groupId: components["parameters"]["GroupIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Member removed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int64 */
                        removed_at?: number;
                        success?: boolean;
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
            /** @description Coming soon - endpoint temporarily disabled */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Coming soon */
                        error?: string;
                        /** @example Removing group members is coming soon */
                        message?: string;
                    };
                };
            };
        };
    };
    listLocationContacts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of contact locations */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        friends?: components["schemas"]["ContactLocation"][];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            /** @description No active number is available for this API key */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getLocationContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Contact's phone number (E.164) or email address */
                handle: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Contact location data */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactLocation"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description No location found for this contact */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    refreshLocationContacts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Refresh triggered, returns updated locations */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        friends?: components["schemas"]["ContactLocation"][];
                        success?: boolean;
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    getMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Authentication context */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MeResponse"];
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    listNumbers: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of phone numbers */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        numbers?: {
                            is_active?: boolean;
                            /** Format: date-time */
                            last_active?: string | null;
                            /** @example +15551234567 */
                            phone_number?: string;
                            /**
                             * @description Plan type the underlying allocation runs on. Sourced directly from `allocation_pool.type` — the enum mirrors the DB `CHECK` constraint (see migration 2026-05-09-inbound-plan.sql), so any value here is also a valid type stored in the database. `inbound` numbers are reply-only — outbound to a recipient (a contact for 1:1 chats, the group for group chats) requires that recipient to have messaged the number first (otherwise the send returns `403 inbound_only_no_prior_inbound`). `null` indicates the underlying allocation predates the type column or is unattributed; clients should treat `null` the same as `dedicated` for routing decisions.
                             * @enum {string|null}
                             */
                            plan_kind?: "shared" | "dedicated" | "inbound" | "trial" | "2fa" | null;
                        }[];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    getMyContactCard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description E.164 phone number (URL-encoded, e.g., %2B15551234567) */
                number: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Contact card data */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Base64-encoded JPEG/PNG image */
                        avatar?: string | null;
                        first_name?: string | null;
                        has_wallpaper?: boolean;
                        last_name?: string | null;
                        /** @description Display name */
                        name?: string | null;
                        phone_number?: string;
                        sharing?: {
                            /** @description 0 = Contacts Only, 1 = Always Ask */
                            audience?: number;
                            /** @description Whether Name & Photo sharing is enabled */
                            enabled?: boolean;
                            /** @description 0 = First & Last, 1 = First Only */
                            name_format?: number;
                        };
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Phone number not accessible with this API key */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["NotFound"];
        };
    };
    updateMyContactCard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description E.164 phone number (URL-encoded, e.g., %2B15551234567) */
                number: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Profile photo as base64-encoded JPEG/PNG */
                    avatar?: string;
                    /** @description First name */
                    first_name?: string;
                    /** @description Last name */
                    last_name?: string;
                    sharing?: {
                        /** @description 0 = Contacts Only, 1 = Always Ask */
                        audience?: number;
                        /** @description Enable/disable Name & Photo sharing */
                        enabled?: boolean;
                        /** @description 0 = First & Last, 1 = First Only */
                        name_format?: number;
                    };
                };
            };
        };
        responses: {
            /** @description Contact card updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        first_name?: string | null;
                        last_name?: string | null;
                        phone_number?: string;
                        /** @example true */
                        success?: boolean;
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Phone number not accessible with this API key */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["NotFound"];
            /** @description Temporary communication error */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    batchLookupPhoneNumbers: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Array of phone numbers to look up
                     * @example [
                     *       "+12125551234",
                     *       "+14155551234",
                     *       "+18582849901"
                     *     ]
                     */
                    numbers: string[];
                };
            };
        };
        responses: {
            /** @description Batch lookup results */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        results?: components["schemas"]["PhoneNumberLookupResult"][];
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Enterprise plan required */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    lookupPhoneNumber: {
        parameters: {
            query: {
                /** @description Phone number to look up. Can be E.164 format (+12125551234), national format (2125551234), or with formatting ((212) 555-1234). */
                number: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Phone number information */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PhoneNumberLookupResult"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Enterprise plan required. Upgrade to Dedicated Enterprise to access this endpoint. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    lookupPhoneNumberPost: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Phone number to look up
                     * @example +12125551234
                     */
                    number: string;
                };
            };
        };
        responses: {
            /** @description Phone number information */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PhoneNumberLookupResult"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Enterprise plan required */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    listWebhooks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of webhooks */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        webhooks?: components["schemas"]["Webhook"][];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
        };
    };
    createWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * Format: int64
                     * @description Expiration timestamp (-1 for no expiration)
                     * @default -1
                     */
                    valid_until?: number;
                    /**
                     * @description Type of events to receive
                     * @default message
                     * @enum {string}
                     */
                    webhook_type?: "message" | "status" | "all";
                    /**
                     * Format: uri
                     * @description URL to receive webhook events
                     * @example https://example.com/webhook
                     */
                    webhook_url: string;
                };
            };
        };
        responses: {
            /** @description Webhook already exists (idempotent) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message?: string;
                        /** @enum {string} */
                        scope?: "api_key" | "organization";
                        webhook_id?: string;
                        webhook_url?: string;
                    };
                };
            };
            /** @description Webhook created. The signing_secret is shown only once - store it securely. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int64 */
                        created_at?: number;
                        /** @enum {string} */
                        scope?: "api_key" | "organization";
                        /** @description The webhook signing secret. Store this securely - it will not be shown again. */
                        signing_secret?: string;
                        webhook_id?: string;
                        /** @enum {string} */
                        webhook_type?: "message" | "status" | "all";
                        /** Format: uri */
                        webhook_url?: string;
                    };
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            /** @description Webhook limit reached (max 64 per organization) */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Webhook ID
                 * @example wh_abc123def456
                 */
                webhookId: components["parameters"]["WebhookIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webhook details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Webhook"];
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    deleteWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Webhook ID
                 * @example wh_abc123def456
                 */
                webhookId: components["parameters"]["WebhookIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webhook deleted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Webhook deleted */
                        message?: string;
                        success?: boolean;
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    updateWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Webhook ID
                 * @example wh_abc123def456
                 */
                webhookId: components["parameters"]["WebhookIdParam"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Set to true to deprecate, false to undeprecate */
                    deprecate?: boolean;
                    /**
                     * Format: int64
                     * @description Expiration timestamp. Use -1 or null for no expiration.
                     */
                    valid_until?: number;
                    /**
                     * @description Type of events to receive
                     * @enum {string}
                     */
                    webhook_type?: "message" | "status" | "all";
                };
            };
        };
        responses: {
            /** @description Webhook updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Webhook"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    listWebhookLogs: {
        parameters: {
            query?: {
                /** @description Maximum number of items to return (1-200) */
                limit?: components["parameters"]["LimitParam"];
                /** @description Maximum HTTP status code */
                max_status?: number;
                /** @description Minimum HTTP status code */
                min_status?: number;
                /** @description Number of items to skip */
                offset?: components["parameters"]["OffsetParam"];
                /** @description Sort order by attempted time */
                sort?: "asc" | "desc";
                /** @description Filter by exact HTTP status code */
                status?: number;
            };
            header?: never;
            path: {
                /**
                 * @description Webhook ID
                 * @example wh_abc123def456
                 */
                webhookId: components["parameters"]["WebhookIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of webhook logs */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        logs?: components["schemas"]["WebhookLog"][];
                        pagination?: {
                            /** @description Whether there are more logs to fetch */
                            has_more?: boolean;
                            limit?: number;
                            offset?: number;
                            /** @description Number of logs returned in this response */
                            returned?: number;
                            /** @description Total number of matching logs */
                            total?: number;
                        };
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    replayWebhookEvent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Event ID to replay */
                eventId: string;
                /**
                 * @description Webhook ID
                 * @example wh_abc123def456
                 */
                webhookId: components["parameters"]["WebhookIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Event replayed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Time taken for the replay request in milliseconds */
                        duration_ms?: number;
                        /** @description The original event ID that was replayed */
                        original_event_id?: string;
                        /** @description New event ID for this replay attempt */
                        replay_event_id?: string;
                        /** @description Response details from the replay attempt */
                        response_data?: {
                            /** @description Response body (if parseable) */
                            body?: unknown;
                            contentType?: string;
                            duration?: number;
                            error?: string | null;
                            errorType?: string | null;
                            headers?: Record<string, never>;
                            size?: number;
                        };
                        /** @description HTTP status code from replay attempt */
                        response_status?: number;
                        /** @description Whether the replay received a 2xx response */
                        success?: boolean;
                        webhook_id?: string;
                        webhook_url?: string;
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    rotateWebhookSecret: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Webhook ID
                 * @example wh_abc123def456
                 */
                webhookId: components["parameters"]["WebhookIdParam"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Secret rotated successfully. The new secret is shown only once. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * Format: int64
                         * @description Timestamp when the secret was rotated
                         */
                        rotated_at?: number;
                        /** @description Identifier of who rotated the secret */
                        rotated_by?: string;
                        /** @description Total number of times this secret has been rotated */
                        rotation_count?: number;
                        /** @description The new signing secret. Store this securely - it will not be shown again. */
                        signing_secret?: string;
                        webhook_id?: string;
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
}
