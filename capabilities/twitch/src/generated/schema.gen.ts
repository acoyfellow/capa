export type paths = {
    "/analytics/extensions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets an analytics report for one or more extensions.
         * @description Gets an analytics report for one or more extensions. The response contains the URLs used to download the reports (CSV files). [Learn More](https://dev.twitch.tv/docs/insights)
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **analytics:read:extensions** scope.
         */
        get: operations["get-extension-analytics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/games": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets an analytics report for one or more games.
         * @description Gets an analytics report for one or more games. The response contains the URLs used to download the reports (CSV files). [Learn more](https://dev.twitch.tv/docs/insights)
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **analytics:read:games** scope.
         */
        get: operations["get-game-analytics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authorization/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * NEW Gets the authorization scopes that the specified user has granted the application.
         * @description NEW Gets the authorization scopes that the specified user(s) have granted the application.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).
         */
        get: operations["get-authorization-by-user"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bits/cheermotes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of Cheermotes that users can use to cheer Bits.
         * @description Gets a list of Cheermotes that users can use to cheer Bits in any Bits-enabled channel’s chat room. Cheermotes are animated emotes that viewers can assign Bits to.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-cheermotes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bits/extensions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the list of Bits products that belongs to the extension.
         * @description Gets the list of Bits products that belongs to the extension. The client ID in the app access token identifies the extension.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens). The client ID in the app access token must be the extension’s client ID.
         */
        get: operations["get-extension-bits-products"];
        /**
         * Adds or updates a Bits product that the extension created.
         * @description Adds or updates a Bits product that the extension created. If the SKU doesn’t exist, the product is added. You may update all fields except the `sku` field.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens). The client ID in the app access token must match the extension’s client ID.
         */
        put: operations["update-extension-bits-product"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bits/leaderboard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the Bits leaderboard for the authenticated broadcaster.
         * @description Gets the Bits leaderboard for the authenticated broadcaster.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **bits:read** scope.
         */
        get: operations["get-bits-leaderboard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channel_points/custom_rewards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of custom rewards that the specified broadcaster created.
         * @description Gets a list of custom rewards that the specified broadcaster created.
         *
         *     **NOTE**: A channel may offer a maximum of 50 rewards, which includes both enabled and disabled rewards.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:redemptions** or **channel:manage:redemptions** scope.
         */
        get: operations["get-custom-reward"];
        put?: never;
        /**
         * Creates a Custom Reward in the broadcaster’s channel.
         * @description Creates a Custom Reward in the broadcaster’s channel. The maximum number of custom rewards per channel is 50, which includes both enabled and disabled rewards.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.
         */
        post: operations["create-custom-rewards"];
        /**
         * Deletes a custom reward that the broadcaster created.
         * @description Deletes a custom reward that the broadcaster created.
         *
         *     The app used to create the reward is the only app that may delete it. If the reward’s redemption status is UNFULFILLED at the time the reward is deleted, its redemption status is marked as FULFILLED.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.
         */
        delete: operations["delete-custom-reward"];
        options?: never;
        head?: never;
        /**
         * Updates a custom reward.
         * @description Updates a custom reward. The app used to create the reward is the only app that may update the reward.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.
         *
         *     __Request Body:__
         *
         *     The body of the request should contain only the fields you’re updating.
         */
        patch: operations["update-custom-reward"];
        trace?: never;
    };
    "/channel_points/custom_rewards/redemptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of redemptions for a custom reward.
         * @description Gets a list of redemptions for the specified custom reward. The app used to create the reward is the only app that may get the redemptions.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:redemptions** or **channel:manage:redemptions** scope.
         */
        get: operations["get-custom-reward-redemption"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Updates a redemption’s status.
         * @description Updates a redemption’s status. You may update a redemption only if its status is UNFULFILLED. The app used to create the reward is the only app that may update the redemption.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.
         */
        patch: operations["update-redemption-status"];
        trace?: never;
    };
    "/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets information about one or more channels.
         * @description Gets information about one or more channels.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-channel-information"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Updates a channel’s properties.
         * @description Updates a channel’s properties.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:broadcast** scope.
         *
         *     __Request Body:__
         *
         *     All fields are optional, but you must specify at least one field.
         */
        patch: operations["modify-channel-information"];
        trace?: never;
    };
    "/channels/ads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Returns ad schedule related information.
         * @description This endpoint returns ad schedule related information, including snooze, when the last ad was run, when the next ad is scheduled, and if the channel is currently in pre-roll free time. Note that a new ad cannot be run until 8 minutes after running a previous ad.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:ads** scope. The user ID associated with the token must match the `broadcaster_id` in the query parameter.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **channel:read:ads** scope for the user represented by the `broadcaster_id` query parameter.
         */
        get: operations["get-ad-schedule"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/ads/schedule/snooze": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pushes back the timestamp of the upcoming automatic mid-roll ad by 5 minutes.
         * @description If available, pushes back the timestamp of the upcoming automatic mid-roll ad by 5 minutes. This endpoint duplicates the snooze functionality in the creator dashboard’s Ads Manager.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:ads** scope. The user ID associated with the token must match the `broadcaster_id` in the query parameter.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **channel:manage:ads** scope for the user represented by the `broadcaster_id` query parameter.
         */
        post: operations["snooze-next-ad"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/commercial": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Starts a commercial on the specified channel.
         * @description Starts a commercial on the specified channel.
         *
         *     **NOTE**: Only partners and affiliates may run commercials and they must be streaming live at the time.
         *
         *     **NOTE**: Only the broadcaster may start a commercial; the broadcaster’s editors and moderators may not start commercials on behalf of the broadcaster.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:edit:commercial** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **channel:edit:commercial** scope for the user represented by the `broadcaster_id` query parameter.
         */
        post: operations["start-commercial"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/editors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the broadcaster’s list editors.
         * @description Gets the broadcaster’s list editors.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:editors** scope.
         */
        get: operations["get-channel-editors"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/followed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of broadcasters that the specified user follows. You can also use this endpoint to see whether a user follows a specific broadcaster.
         * @description Gets a list of broadcasters that the specified user follows. You can also use this endpoint to see whether a user follows a specific broadcaster.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:follows** scope.
         */
        get: operations["get-followed-channels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/followers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of users that follow the specified broadcaster. You can also use this endpoint to see whether a specific user follows the broadcaster.
         * @description Gets a list of users that follow the specified broadcaster. You can also use this endpoint to see whether a specific user follows the broadcaster.
         *
         *     __Authorization:__
         *
         *     * Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:followers** scope.
         *     * The ID in the broadcaster\_id query parameter must match the user ID in the access token or the user ID in the access token must be a moderator for the specified broadcaster.
         *
         *     This endpoint will return specific follower information only if both of the above are true. If a scope is not provided or the user isn’t the broadcaster or a moderator for the specified channel, only the total follower count will be included in the response.
         */
        get: operations["get-channel-followers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/vips": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of the broadcaster’s VIPs.
         * @description Gets a list of the broadcaster’s VIPs.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:vips** scope. If your app also adds and removes VIP status, you can use the **channel:manage:vips** scope instead.
         */
        get: operations["get-vips"];
        put?: never;
        /**
         * Adds the specified user as a VIP in the broadcaster’s channel.
         * @description Adds the specified user as a VIP in the broadcaster’s channel.
         *
         *     **Rate Limits**: The broadcaster may add a maximum of 10 VIPs within a 10-second window.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:vips** scope.
         */
        post: operations["add-channel-vip"];
        /**
         * Removes the specified user as a VIP in the broadcaster’s channel.
         * @description Removes the specified user as a VIP in the broadcaster’s channel.
         *
         *     If the broadcaster is removing the user’s VIP status, the ID in the _broadcaster\_id_ query parameter must match the user ID in the access token; otherwise, if the user is removing their VIP status themselves, the ID in the _user\_id_ query parameter must match the user ID in the access token.
         *
         *     **Rate Limits**: The broadcaster may remove a maximum of 10 VIPs within a 10-second window.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:vips** scope.
         */
        delete: operations["remove-channel-vip"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/charity/campaigns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets information about the broadcaster’s active charity campaign.
         * @description Gets information about the charity campaign that a broadcaster is running. For example, the campaign’s fundraising goal and the current amount of donations.
         *
         *     To receive events when progress is made towards the campaign’s goal or the broadcaster changes the fundraising goal, subscribe to the [channel.charity\_campaign.progress](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelcharity%5Fcampaignprogress) subscription type.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:charity** scope.
         */
        get: operations["get-charity-campaign"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/charity/donations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the list of donations that users have made to the broadcaster’s active charity campaign.
         * @description Gets the list of donations that users have made to the broadcaster’s active charity campaign.
         *
         *     To receive events as donations occur, subscribe to the [channel.charity\_campaign.donate](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelcharity%5Fcampaigndonate) subscription type.
         *
         *     __Authorization:__
         *
         *     Requires a user access token that includes the **channel:read:charity** scope.
         */
        get: operations["get-charity-campaign-donations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/announcements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sends an announcement to the broadcaster’s chat room.
         * @description Sends an announcement to the broadcaster’s chat room.
         *
         *     **Rate Limits**: One announcement may be sent every 2 seconds.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:announcements** scope.
         */
        post: operations["send-chat-announcement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/badges": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the broadcaster’s list of custom chat badges.
         * @description Gets the broadcaster’s list of custom chat badges. The list is empty if the broadcaster hasn’t created custom chat badges. For information about custom badges, see [subscriber badges](https://help.twitch.tv/s/article/subscriber-badge-guide) and [Bits badges](https://help.twitch.tv/s/article/custom-bit-badges-guide).
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-channel-chat-badges"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/badges/global": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets Twitch’s list of chat badges.
         * @description Gets Twitch’s list of chat badges, which users may use in any channel’s chat room. For information about chat badges, see [Twitch Chat Badges Guide](https://help.twitch.tv/s/article/twitch-chat-badges-guide).
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         *
         *     __Request Query Parameters:__
         *
         *     None
         */
        get: operations["get-global-chat-badges"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/chatters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the list of users that are connected to the broadcaster’s chat session.
         * @description Gets the list of users that are connected to the broadcaster’s chat session.
         *
         *     **NOTE**: There is a delay between when users join and leave a chat and when the list is updated accordingly.
         *
         *     To determine whether a user is a moderator or VIP, use the [Get Moderators](https://dev.twitch.tv/docs/api/reference#get-moderators) and [Get VIPs](https://dev.twitch.tv/docs/api/reference#get-vips) endpoints. You can check the roles of up to 100 users.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:chatters** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:read:chatters** scope for the user represented by the `moderator_id` query parameter.
         */
        get: operations["get-chatters"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/color": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the color used for the user’s name in chat.
         * @description Gets the color used for the user’s name in chat.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-user-chat-color"];
        /**
         * Updates the color used for the user’s name in chat.
         * @description Updates the color used for the user’s name in chat.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:chat\_color** scope.
         */
        put: operations["update-user-chat-color"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/emotes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the broadcaster’s list of custom emotes.
         * @description Gets the broadcaster’s list of custom emotes. Broadcasters create these custom emotes for users who subscribe to or follow the channel or cheer Bits in the channel’s chat window. [Learn More](https://dev.twitch.tv/docs/irc/emotes)
         *
         *     For information about the custom emotes, see [subscriber emotes](https://help.twitch.tv/s/article/subscriber-emote-guide), [Bits tier emotes](https://help.twitch.tv/s/article/custom-bit-badges-guide?language=bg#slots), and [follower emotes](https://blog.twitch.tv/en/2021/06/04/kicking-off-10-years-with-our-biggest-emote-update-ever/).
         *
         *     **NOTE:** With the exception of custom follower emotes, users may use custom emotes in any Twitch chat.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-channel-emotes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/emotes/global": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets all global emotes.
         * @description Gets the list of [global emotes](https://www.twitch.tv/creatorcamp/en/learn-the-basics/emotes/). Global emotes are Twitch-created emotes that users can use in any Twitch chat.
         *
         *     [Learn More](https://dev.twitch.tv/docs/irc/emotes)
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         *
         *     __Request Query Parameters:__
         *
         *     None
         */
        get: operations["get-global-emotes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/emotes/set": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets emotes for one or more specified emote sets.
         * @description Gets emotes for one or more specified emote sets.
         *
         *     An emote set groups emotes that have a similar context. For example, Twitch places all the subscriber emotes that a broadcaster uploads for their channel in the same emote set.
         *
         *     [Learn More](https://dev.twitch.tv/docs/irc/emotes)
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-emote-sets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/emotes/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieves emotes available to the user across all channels.
         * @description Retrieves emotes available to the user across all channels.
         *
         *     __Authorization:__
         *
         *     * Requires a user access token that includes the **user:read:emotes** scope.
         *     * Query parameter `user_id` must match the `user_id` in the user access token.
         */
        get: operations["get-user-emotes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sends a message to the broadcaster’s chat room.
         * @description Sends a message to the broadcaster’s chat room.
         *
         *     **NOTE:** When sending messages to a Shared Chat session, behaviors differ depending on your authentication token type:
         *
         *     * When using an _App Access Token_, messages will only be sent to the source channel (defined by the `broadcaster_id` parameter) by default starting on May 19, 2025\. Messages can be sent to all channels by using the `for_source_only` parameter and setting it to `false`.
         *     * When using a _User Access Token_, messages will be sent to all channels in the shared chat session, including the source channel. This behavior cannot be changed with this token type.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `user:write:chat` scope. If app access token used, then additionally requires `user:bot` scope from chatting user, and either `channel:bot` scope from broadcaster or moderator status.
         */
        post: operations["send-chat-message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the broadcaster’s chat settings.
         * @description Gets the broadcaster’s chat settings.
         *
         *     For an overview of chat settings, see [Chat Commands for Broadcasters and Moderators](https://help.twitch.tv/s/article/chat-commands#AllMods) and [Moderator Preferences](https://help.twitch.tv/s/article/setting-up-moderation-for-your-twitch-channel#modpreferences).
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-chat-settings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Updates the broadcaster’s chat settings.
         * @description Updates the broadcaster’s chat settings.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:chat\_settings** scope. The user ID associated with the token must match the `moderator_id` in the query parameter.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:chat\_settings** scope for the user represented by the `moderator_id` query parameter.
         *
         *     __Request Body:__
         *
         *     All fields are optional. Specify only those fields that you want to update.
         *
         *     To set the `slow_mode_wait_time` or `follower_mode_duration` field to its default value, set the corresponding `slow_mode` or `follower_mode` field to **true** (and don’t include the `slow_mode_wait_time` or `follower_mode_duration` field).
         *
         *     To set the `slow_mode_wait_time`, `follower_mode_duration`, or `non_moderator_chat_delay_duration` field’s value, you must set the corresponding `slow_mode`, `follower_mode`, or `non_moderator_chat_delay` field to **true**.
         *
         *     To remove the `slow_mode_wait_time`, `follower_mode_duration`, or `non_moderator_chat_delay_duration` field’s value, set the corresponding `slow_mode`, `follower_mode`, or `non_moderator_chat_delay` field to **false** (and don’t include the `slow_mode_wait_time`, `follower_mode_duration`, or `non_moderator_chat_delay_duration` field).
         */
        patch: operations["update-chat-settings"];
        trace?: never;
    };
    "/chat/shoutouts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sends a Shoutout to the specified broadcaster.
         * @description Sends a Shoutout to the specified broadcaster. Typically, you send Shoutouts when you or one of your moderators notice another broadcaster in your chat, the other broadcaster is coming up in conversation, or after they raid your broadcast.
         *
         *     Twitch’s Shoutout feature is a great way for you to show support for other broadcasters and help them grow. Viewers who do not follow the other broadcaster will see a pop-up Follow button in your chat that they can click to follow the other broadcaster. [Learn More](https://help.twitch.tv/s/article/shoutouts)
         *
         *     **Rate Limits**: The broadcaster may send a Shoutout once every 2 minutes. They may send the same broadcaster a Shoutout once every 60 minutes.
         *
         *     To receive notifications when a Shoutout is sent or received, subscribe to the [channel.shoutout.create](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshoutoutcreate) and [channel.shoutout.receive](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshoutoutreceive) subscription types. The **channel.shoutout.create** event includes cooldown periods that indicate when the broadcaster may send another Shoutout without exceeding the endpoint’s rate limit.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:shoutouts** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through prior authorizations, has:
         *
         *     * The **channel:bot** scope for the user represented by the `broadcaster_id` query parameter, and
         *     * The **moderator:manage:shoutouts** and **user:bot** scopes for the user represented by the `moderator_id` in the query parameter.
         */
        post: operations["send-a-shoutout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clips": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets one or more video clips.
         * @description Gets one or more video clips that were captured from streams. For information about clips, see [How to use clips](https://help.twitch.tv/s/article/how-to-use-clips).
         *
         *     When using pagination for clips, note that the maximum number of results returned over multiple requests will be approximately 1,000\. If additional results are necessary, paginate over different query parameters such as multiple `started_at` and `ended_at` timeframes to refine the search.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         *
         *     __Request Query Parameters:__
         *
         *     The _id_, _game\_id_, and _broadcaster\_id_ query parameters are mutually exclusive.
         */
        get: operations["get-clips"];
        put?: never;
        /**
         * Creates a clip from the broadcaster’s stream.
         * @description Creates a clip from the broadcaster’s stream.
         *
         *     This API captures up to 90 seconds of the broadcaster’s stream. The 90 seconds spans the point in the stream from when you called the API. For example, if you call the API at the 4:00 minute mark, the API captures from approximately the 2:35 mark to approximately the 4:05 minute mark. Twitch tries its best to capture 90 seconds of the stream, but the actual length may be less. This may occur if you begin capturing the clip near the beginning or end of the stream.
         *
         *     By default, Twitch publishes up to the last 30 seconds of the 90 seconds window and provides a default title for the clip. To specify the title and the portion of the 90 seconds window that’s used for the clip, use the URL in the response’s `edit_url` field. You can specify a clip that’s from 5 seconds to 60 seconds in length. The URL is valid for up to 24 hours or until the clip is published, whichever comes first.
         *
         *     Creating a clip is an asynchronous process that can take a short amount of time to complete. To determine whether the clip was successfully created, call [Get Clips](https://dev.twitch.tv/docs/api/reference#get-clips) using the clip ID that this request returned. If Get Clips returns the clip, the clip was successfully created. If after 15 seconds Get Clips hasn’t returned the clip, assume it failed.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **clips:edit** scope.
         */
        post: operations["create-clip"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/clips/downloads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * NEW Provides URLs to download the video file(s) for the specified clips.
         * @description NEW Provides URLs to download the video file(s) for the specified clips. For information about clips, see [How to use clips](https://help.twitch.tv/s/article/how-to-use-clips).
         *
         *     **Rate Limits**: Limited to 100 requests per minute.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `editor:manage:clips` or `channel:manage:clips` scope.
         */
        get: operations["get-clips-download"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/content_classification_labels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets information about Twitch content classification labels.
         * @description Gets information about Twitch content classification labels.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-content-classification-labels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/entitlements/drops": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets an organization’s list of entitlements that have been granted to a game, a user, or both.
         * @description Gets an organization’s list of entitlements that have been granted to a game, a user, or both.
         *
         *     **NOTE:** Entitlements returned in the response body data are not guaranteed to be sorted by any field returned by the API. To retrieve **CLAIMED** or **FULFILLED** entitlements, use the `fulfillment_status` query parameter to filter results. To retrieve entitlements for a specific game, use the `game_id` query parameter to filter results.
         *
         *     The following table identifies the request parameters that you may specify based on the type of access token used.
         *
         *     | Access token type | Parameter | Description |
         *     | - | - | - |
         *     | App | None | If you don’t specify request parameters, the request returns all entitlements that your organization owns. |
         *     | App | user_id | The request returns all entitlements for any game that the organization granted to the specified user. |
         *     | App | user_id, game_id | The request returns all entitlements that the specified game granted to the specified user. |
         *     | App | game_id | The request returns all entitlements that the specified game granted to all entitled users. |
         *     | User | None | If you don’t specify request parameters, the request returns all entitlements for any game that the organization granted to the user identified in the access token. |
         *     | User | user_id | Invalid. |
         *     | User | user_id, game_id | Invalid. |
         *     | User | game_id | The request returns all entitlements that the specified game granted to the user identified in the access token. |
         *
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens). The Client ID associated with the access token must be owned by a user who is a member of the [organization](https://dev.twitch.tv/docs/docs/companies/) that holds ownership of the game.
         */
        get: operations["get-drops-entitlements"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Updates the Drop entitlement’s fulfillment status.
         * @description Updates the Drop entitlement’s fulfillment status.
         *
         *     The following table identifies which entitlements are updated based on the type of access token used.
         *
         *     | Access token type | Data that’s updated |
         *     | - | - |
         *     | App | Updates all entitlements with benefits owned by the organization in the access token. |
         *     | User | Updates all entitlements owned by the user in the access token and where the benefits are owned by the organization in the access token. |
         *
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens). The Client ID associated with the access token must be owned by a user who is a member of the [organization](https://dev.twitch.tv/docs/docs/companies/) that holds ownership of the game.
         */
        patch: operations["update-drops-entitlements"];
        trace?: never;
    };
    "/eventsub/conduits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the conduits for a client ID.
         * @description Gets the [conduits](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) for a client ID.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).
         */
        get: operations["get-conduits"];
        put?: never;
        /**
         * Creates a new conduit.
         * @description Creates a new [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/).
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).
         */
        post: operations["create-conduits"];
        /**
         * Deletes a specified conduit.
         * @description Deletes a specified [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/). Note that it may take some time for Eventsub subscriptions on a deleted [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) to show as disabled when calling [Get Eventsub Subscriptions](https://dev.twitch.tv/docs/api/reference/#get-eventsub-subscriptions).
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).
         */
        delete: operations["delete-conduit"];
        options?: never;
        head?: never;
        /**
         * Updates a conduit’s shard count.
         * @description Updates a [conduit’s](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) shard count. To delete shards, update the count to a lower number, and the shards above the count will be deleted. For example, if the existing shard count is 100, by resetting shard count to 50, shards 50-99 are disabled.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).
         */
        patch: operations["update-conduits"];
        trace?: never;
    };
    "/eventsub/conduits/shards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a lists of all shards for a conduit.
         * @description Gets a lists of all shards for a [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/).
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).
         */
        get: operations["get-conduit-shards"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Updates shard(s) for a conduit.
         * @description Updates shard(s) for a [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/).
         *
         *     **NOTE:** Shard IDs are indexed starting at 0, so a conduit with a `shard_count` of 5 will have shards with IDs 0 through 4.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).
         */
        patch: operations["update-conduit-shards"];
        trace?: never;
    };
    "/eventsub/subscriptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of EventSub subscriptions that the client in the access token created.
         * @description Gets a list of EventSub subscriptions that the client in the access token created.
         *
         *     __Authorization:__
         *
         *     If you use [Webhooks](https://dev.twitch.tv/docs/eventsub/handling-webhook-events) or [Conduits](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) to receive events, the request must specify an app access token. The request will fail if you use a user access token.
         *
         *     If you use [WebSockets to receive events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events), the request must specify a user access token. The request will fail if you use an app access token. The token may include any scopes.
         *
         *     __Request Query Parameters:__
         *
         *     Use the _status_, _type_, _user\_id_, and _subscription\_id_ query parameters to filter the list of subscriptions that are returned. The filters are mutually exclusive; the request fails if you specify more than one filter.
         */
        get: operations["get-eventsub-subscriptions"];
        put?: never;
        /**
         * Creates an EventSub subscription.
         * @description Creates an EventSub subscription.
         *
         *     __Authorization:__
         *
         *     If you use [webhooks to receive events](https://dev.twitch.tv/docs/eventsub/handling-webhook-events), the request must specify an app access token. The request will fail if you use a user access token. If the subscription type requires user authorization, the user must have granted your app (client ID) permissions to receive those events before you subscribe to them. For example, to subscribe to [channel.subscribe](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelsubscribe) events, your app must get a user access token that includes the `channel:read:subscriptions` scope, which adds the required permission to your app access token’s client ID.
         *
         *     If you use [WebSockets to receive events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events), the request must specify a user access token. The request will fail if you use an app access token. If the subscription type requires user authorization, the token must include the required scope. However, if the subscription type doesn’t include user authorization, the token may include any scopes or no scopes.
         *
         *     If you use [Conduits](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) to receive events, the request must specify an app access token. The request will fail if you use a user access token.
         */
        post: operations["create-eventsub-subscription"];
        /**
         * Deletes an EventSub subscription.
         * @description Deletes an EventSub subscription.
         *
         *     __Authorization:__
         *
         *     If you use [webhooks to receive events](https://dev.twitch.tv/docs/eventsub/handling-webhook-events), the request must specify an app access token. The request will fail if you use a user access token.
         *
         *     If you use [WebSockets to receive events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events), the request must specify a user access token. The request will fail if you use an app access token. The token may include any scopes.
         */
        delete: operations["delete-eventsub-subscription"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/extensions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets information about an extension.
         * @description Gets information about an extension.
         *
         *     __Authorization:__
         *
         *     Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role` field (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)), and the `role` field must be set to _external_.
         */
        get: operations["get-extensions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/extensions/chat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sends a message to the specified broadcaster’s chat room.
         * @description Sends a message to the specified broadcaster’s chat room. The extension’s name is used as the username for the message in the chat room. To send a chat message, your extension must enable **Chat Capabilities** (under your extension’s **Capabilities** tab).
         *
         *     **Rate Limits**: You may send a maximum of 12 messages per minute per channel.
         *
         *     __Authorization:__
         *
         *     Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role` and `user_id` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.
         */
        post: operations["send-extension-chat-message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/extensions/configurations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the specified configuration segment from the specified extension.
         * @description Gets the specified configuration segment from the specified extension.
         *
         *     **Rate Limits**: You may retrieve each segment a maximum of 20 times per minute.
         *
         *     __Authorization:__
         *
         *     Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.
         */
        get: operations["get-extension-configuration-segment"];
        /**
         * Updates a configuration segment.
         * @description Updates a configuration segment. The segment is limited to 5 KB. Extensions that are active on a channel do not receive the updated configuration.
         *
         *     **Rate Limits**: You may update the configuration a maximum of 20 times per minute.
         *
         *     __Authorization:__
         *
         *     Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.
         */
        put: operations["set-extension-configuration-segment"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/extensions/jwt/secrets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets an extension’s list of shared secrets.
         * @description Gets an extension’s list of shared secrets.
         *
         *     __Authorization:__
         *
         *     Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.
         */
        get: operations["get-extension-secrets"];
        put?: never;
        /**
         * Creates a shared secret used to sign and verify JWT tokens.
         * @description Creates a shared secret used to sign and verify JWT tokens. Creating a new secret removes the current secrets from service. Use this function only when you are ready to use the new secret it returns.
         *
         *     __Authorization:__
         *
         *     Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.
         */
        post: operations["create-extension-secret"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/extensions/live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of broadcasters that are streaming live and have installed or activated the extension.
         * @description Gets a list of broadcasters that are streaming live and have installed or activated the extension.
         *
         *     It may take a few minutes for the list to include or remove broadcasters that have recently gone live or stopped broadcasting.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-extension-live-channels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/extensions/pubsub": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sends a message to one or more viewers.
         * @description Sends a message to one or more viewers. You can send messages to a specific channel or to all channels where your extension is active. This endpoint uses the same mechanism as the [send](https://dev.twitch.tv/docs/extensions/reference#send) JavaScript helper function used to send messages.
         *
         *     **Rate Limits**: You may send a maximum of 100 messages per minute per combination of extension client ID and broadcaster ID.
         *
         *     __Authorization:__
         *
         *     Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)) along with the `channel_id` and `pubsub_perms` fields. The `role` field must be set to _external_.
         *
         *     To send the message to a specific channel, set the `channel_id` field in the JWT to the channel’s ID and set the `pubsub_perms.send` array to _broadcast_.
         *
         *     ```
         *     {
         *       "exp": 1503343947,
         *       "user_id": "27419011",
         *       "role": "external",
         *       "channel_id": "27419011",
         *       "pubsub_perms": {
         *         "send":[
         *           "broadcast"
         *         ]
         *       }
         *     }
         *
         *     ```
         *
         *     To send the message to all channels on which your extension is active, set the `channel_id` field to _all_ and set the `pubsub_perms.send` array to _global_.
         *
         *     ```
         *     {
         *       "exp": 1503343947,
         *       "user_id": "27419011",
         *       "role": "external",
         *       "channel_id": "all",
         *       "pubsub_perms": {
         *         "send":[
         *           "global"
         *         ]
         *       }
         *     }
         *
         *     ```
         */
        post: operations["send-extension-pubsub-message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/extensions/released": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets information about a released extension.
         * @description Gets information about a released extension. Returns the extension if its `state` is Released.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-released-extensions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/extensions/required_configuration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Updates the extension’s required_configuration string.
         * @description Updates the extension’s required\_configuration string. Use this endpoint if your extension requires the broadcaster to configure the extension before activating it (to require configuration, you must select **Custom/My Own Service** in Extension [Capabilities](https://dev.twitch.tv/docs/extensions/life-cycle/#capabilities)). For more information, see [Required Configurations](https://dev.twitch.tv/docs/extensions/building#required-configurations) and [Setting Required Configuration](https://dev.twitch.tv/docs/extensions/building#setting-required-configuration-with-the-configuration-service-optional).
         *
         *     __Authorization:__
         *
         *     Requires a signed JSON Web Token (JWT) created by an EBS. For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). Set the `role` field to _external_ and the `user_id` field to the ID of the user that owns the extension.
         */
        put: operations["set-extension-required-configuration"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/extensions/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets an extension’s list of transactions.
         * @description Gets an extension’s list of transactions. A transaction records the exchange of a currency (for example, Bits) for a digital product.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).
         */
        get: operations["get-extension-transactions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/games": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets information about specified games.
         * @description Gets information about specified categories or games.
         *
         *     You may get up to 100 categories or games by specifying their ID or name. You may specify all IDs, all names, or a combination of IDs and names. If you specify a combination of IDs and names, the total number of IDs and names must not exceed 100.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-games"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/games/top": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets information about all broadcasts on Twitch.
         * @description Gets information about all broadcasts on Twitch.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-top-games"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/goals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the broadcaster’s list of active goals.
         * @description Gets the broadcaster’s list of active goals. Use this endpoint to get the current progress of each goal.
         *
         *     Instead of polling for the progress of a goal, consider [subscribing](https://dev.twitch.tv/docs/eventsub/manage-subscriptions) to receive notifications when a goal makes progress using the [channel.goal.progress](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelgoalprogress) subscription type. [Read More](https://dev.twitch.tv/docs/api/goals#requesting-event-notifications)
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:goals** scope.
         */
        get: operations["get-creator-goals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guest_star/channel_settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * BETA Gets the channel settings for configuration of the Guest Star feature for a particular host.
         * @description BETA Gets the channel settings for configuration of the Guest Star feature for a particular host.
         *
         *     __Authorization:__
         *
         *     * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
         *     * Requires OAuth Scope: `channel:read:guest_star`, `channel:manage:guest_star`, `moderator:read:guest_star` or `moderator:manage:guest_star`
         */
        get: operations["get-channel-guest-star-settings"];
        /**
         * BETA Mutates the channel settings for configuration of the Guest Star feature for a particular host.
         * @description BETA Mutates the channel settings for configuration of the Guest Star feature for a particular host.
         *
         *     __Authorization:__
         *
         *     * Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
         *     * Requires OAuth Scope: `channel:manage:guest_star`
         */
        put: operations["update-channel-guest-star-settings"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guest_star/invites": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * BETA Provides the caller with a list of pending invites to a Guest Star session.
         * @description BETA Provides the caller with a list of pending invites to a Guest Star session, including the invitee’s ready status while joining the waiting room.
         *
         *     __Authorization:__
         *
         *     * Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
         *     * Requires OAuth Scope: `channel:read:guest_star`, `channel:manage:guest_star`, `moderator:read:guest_star` or `moderator:manage:guest_star`
         */
        get: operations["get-guest-star-invites"];
        put?: never;
        /**
         * BETA Sends an invite to a specified guest on behalf of the broadcaster for a Guest Star session in progress.
         * @description BETA Sends an invite to a specified guest on behalf of the broadcaster for a Guest Star session in progress.
         *
         *     __Authorization:__
         *
         *     * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
         *     * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
         */
        post: operations["send-guest-star-invite"];
        /**
         * BETA Revokes a previously sent invite for a Guest Star session.
         * @description BETA Revokes a previously sent invite for a Guest Star session.
         *
         *     __Authorization:__
         *
         *     * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
         *     * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
         */
        delete: operations["delete-guest-star-invite"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guest_star/session": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * BETA Gets information about an ongoing Guest Star session for a particular channel.
         * @description BETA Gets information about an ongoing Guest Star session for a particular channel.
         *
         *     __Authorization:__
         *
         *     * Requires OAuth Scope: `channel:read:guest_star`, `channel:manage:guest_star`, `moderator:read:guest_star` or `moderator:manage:guest_star`
         *     * Guests must be either invited or assigned a slot within the session
         */
        get: operations["get-guest-star-session"];
        put?: never;
        /**
         * BETA Programmatically creates a Guest Star session on behalf of the broadcaster.
         * @description BETA Programmatically creates a Guest Star session on behalf of the broadcaster. Requires the broadcaster to be present in the call interface, or the call will be ended automatically.
         *
         *     __Authorization:__
         *
         *     * Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
         *     * Requires OAuth Scope: `channel:manage:guest_star`
         */
        post: operations["create-guest-star-session"];
        /**
         * BETA Programmatically ends a Guest Star session on behalf of the broadcaster.
         * @description BETA Programmatically ends a Guest Star session on behalf of the broadcaster. Performs the same action as if the host clicked the “End Call” button in the Guest Star UI.
         *
         *     __Authorization:__
         *
         *     * Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
         *     * Requires OAuth Scope: `channel:manage:guest_star`
         */
        delete: operations["end-guest-star-session"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guest_star/slot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * BETA Allows a previously invited user to be assigned a slot within the active Guest Star session.
         * @description BETA Allows a previously invited user to be assigned a slot within the active Guest Star session, once that guest has indicated they are ready to join.
         *
         *     __Authorization:__
         *
         *     * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
         *     * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
         */
        post: operations["assign-guest-star-slot"];
        /**
         * BETA Allows a caller to remove a slot assignment from a user participating in an active Guest Star session.
         * @description BETA Allows a caller to remove a slot assignment from a user participating in an active Guest Star session. This revokes their access to the session immediately and disables their access to publish or subscribe to media within the session.
         *
         *     __Authorization:__
         *
         *     * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
         *     * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
         */
        delete: operations["delete-guest-star-slot"];
        options?: never;
        head?: never;
        /**
         * BETA Allows a user to update the assigned slot for a particular user within the active Guest Star session.
         * @description BETA Allows a user to update the assigned slot for a particular user within the active Guest Star session.
         *
         *     __Authorization:__
         *
         *     * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
         *     * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
         */
        patch: operations["update-guest-star-slot"];
        trace?: never;
    };
    "/guest_star/slot_settings": {
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
         * BETA Allows a user to update slot settings for a particular guest within a Guest Star session.
         * @description BETA Allows a user to update slot settings for a particular guest within a Guest Star session, such as allowing the user to share audio or video within the call as a host. These settings will be broadcasted to all subscribers which control their view of the guest in that slot. One or more of the optional parameters to this API can be specified at any time.
         *
         *     __Authorization:__
         *
         *     * Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
         *     * Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`
         */
        patch: operations["update-guest-star-slot-settings"];
        trace?: never;
    };
    "/hypetrain/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * NEW Gets the status of a Hype Train for the specified broadcaster.
         * @description NEW Get the status of a Hype Train for the specified broadcaster.
         *
         *     __Authorization:__
         *
         *     * Requires an [user access token](https://dev.twitch.tv/docs/authentication/#user-access-tokens).
         *     * Requires OAuth Scope: `channel:read:hype_train`.
         *     * Requires that `broadcaster_id` and `user_id` match in the User-Access token.
         */
        get: operations["get-hype-train-status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/automod/message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Allow or deny the message that AutoMod flagged for review.
         * @description Allow or deny the message that AutoMod flagged for review. For information about AutoMod, see [How to Use AutoMod](https://help.twitch.tv/s/article/how-to-use-automod).
         *
         *     To get messages that AutoMod is holding for review, subscribe to the **automod-queue.<moderator\_id>.<channel\_id>** [topic](https://dev.twitch.tv/docs/pubsub#topics) using [PubSub](https://dev.twitch.tv/docs/pubsub). PubSub sends a notification to your app when AutoMod holds a message for review.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:automod** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:automod** scope for the user represented by the `user_id` query parameter.
         */
        post: operations["manage-held-automod-messages"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/automod/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the broadcaster’s AutoMod settings.
         * @description Gets the broadcaster’s AutoMod settings. The settings are used to automatically block inappropriate or harassing messages from appearing in the broadcaster’s chat room.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:automod\_settings** or **moderator:manage:automod\_settings** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:read:automod\_settings** or **moderator:manage:automod\_settings** scope for the user represented by the `moderator_id` query parameter.
         */
        get: operations["get-automod-settings"];
        /**
         * Updates the broadcaster’s AutoMod settings.
         * @description Updates the broadcaster’s AutoMod settings. The settings are used to automatically block inappropriate or harassing messages from appearing in the broadcaster’s chat room.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:automod\_settings** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:automod\_settings** scope for the user represented by the `moderator_id` query parameter.
         *
         *     __Request Body:__
         *
         *     Because PUT is an overwrite operation, you must include all the fields that you want set after the operation completes. Typically, you’ll send a GET request, update the fields you want to change, and pass that object in the PUT request.
         *
         *     You may set either `overall_level` or the individual settings like `aggression`, but not both.
         *
         *     Setting `overall_level` applies default values to the individual settings. However, setting `overall_level` to 4 does not necessarily mean that it applies 4 to all the individual settings. Instead, it applies a set of recommended defaults to the rest of the settings. For example, if you set `overall_level` to 2, Twitch provides some filtering on discrimination and sexual content, but more filtering on hostility (see the first example response).
         *
         *     If `overall_level` is currently set and you update `swearing` to 3, `overall_level` will be set to **null** and all settings other than `swearing` will be set to 0\. The same is true if individual settings are set and you update `overall_level` to 3 — all the individual settings are updated to reflect the default level.
         *
         *     Note that if you set all the individual settings to values that match what `overall_level` would have set them to, Twitch changes AutoMod to use the default AutoMod level instead of using the individual settings.
         *
         *     Valid values for all levels are from 0 (no filtering) through 4 (most aggressive filtering). These levels affect how aggressively AutoMod holds back messages for moderators to review before they appear in chat or are denied (not shown).
         */
        put: operations["update-automod-settings"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/banned": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets all users that the broadcaster banned or put in a timeout.
         * @description Gets all users that the broadcaster banned or put in a timeout.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderation:read** or **moderator:manage:banned\_users** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderation:read** or **moderator:manage:banned\_users** scope for the user represented by the `broadcaster_id` query parameter.
         */
        get: operations["get-banned-users"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/bans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bans a user from participating in a broadcaster’s chat room or puts them in a timeout.
         * @description Bans a user from participating in the specified broadcaster’s chat room or puts them in a timeout.
         *
         *     For information about banning or putting users in a timeout, see [Ban a User](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat#TheBanFeature) and [Timeout a User](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat#TheTimeoutFeature).
         *
         *     If the user is currently in a timeout, you can call this endpoint to change the duration of the timeout or ban them altogether. If the user is currently banned, you cannot call this method to put them in a timeout instead.
         *
         *     To remove a ban or end a timeout, see [Unban user](https://dev.twitch.tv/docs/api/reference#unban-user).
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:banned\_users** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:banned\_users** and **user:bot** scopes for the user represented by the `moderator_id` query parameter.
         */
        post: operations["ban-user"];
        /**
         * Removes the ban or timeout that was placed on the specified user.
         * @description Removes the ban or timeout that was placed on the specified user.
         *
         *     To ban a user, see [Ban user](https://dev.twitch.tv/docs/api/reference#ban-user).
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:banned\_users** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:banned\_users** and **user:bot** scopes for the user represented by the `moderator_id` query parameter.
         */
        delete: operations["unban-user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/blocked_terms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the broadcaster’s list of non-private, blocked words or phrases.
         * @description Gets the broadcaster’s list of non-private, blocked words or phrases. These are the terms that the broadcaster or moderator added manually or that were denied by AutoMod.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:blocked\_terms** or **moderator:manage:blocked\_terms** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:read:blocked\_terms** or **moderator:manage:blocked\_terms** scope for the user represented by the `moderator_id` query parameter.
         */
        get: operations["get-blocked-terms"];
        put?: never;
        /**
         * Adds a word or phrase to the broadcaster’s list of blocked terms.
         * @description Adds a word or phrase to the broadcaster’s list of blocked terms. These are the terms that the broadcaster doesn’t want used in their chat room.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:blocked\_terms** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:blocked\_terms** scope for the user represented by the `moderator_id` query parameter.
         */
        post: operations["add-blocked-term"];
        /**
         * Removes the word or phrase from the broadcaster’s list of blocked terms.
         * @description Removes the word or phrase from the broadcaster’s list of blocked terms.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:blocked\_terms** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:blocked\_terms** scope for the user represented by the `moderator_id` query parameter.
         */
        delete: operations["remove-blocked-term"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of channels that the specified user has moderator privileges in.
         * @description Gets a list of channels that the specified user has moderator privileges in.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:moderated\_channels**. The user ID associated with the token must match the `user_id` in the query parameter.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **user:read:moderated\_channels** scope for the user represented by the `user_id` query parameter.
         */
        get: operations["get-moderated-channels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/chat": {
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
         * Removes a single chat message or all chat messages from the broadcaster’s chat room.
         * @description Removes a single chat message or all chat messages from the broadcaster’s chat room.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:chat\_messages** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:chat\_messages** scope for the user represented by the `moderator_id` query parameter.
         */
        delete: operations["delete-chat-messages"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/enforcements/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Checks whether AutoMod would flag the specified message for review.
         * @description Checks whether AutoMod would flag the specified message for review.
         *
         *     AutoMod is a moderation tool that holds inappropriate or harassing chat messages for moderators to review. Moderators approve or deny the messages that AutoMod flags; only approved messages are released to chat. AutoMod detects misspellings and evasive language automatically. For information about AutoMod, see [How to Use AutoMod](https://help.twitch.tv/s/article/how-to-use-automod).
         *
         *     **Rate Limits**: Rates are limited per channel based on the account type rather than per access token.
         *
         *     | Account type | Limit per minute | Limit per hour |
         *     | - | - | - |
         *     | Normal | 5 | 50 |
         *     | Affiliate | 10 | 100 |
         *     | Partner | 30 | 300 |
         *
         *
         *     The above limits are in addition to the standard [Twitch API rate limits](https://dev.twitch.tv/docs/api/guide#twitch-rate-limits). The rate limit headers in the response represent the Twitch rate limits and not the above limits.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderation:read** scope.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderation:read** scope for the user represented by the `broadcaster_id` query parameter.
         */
        post: operations["check-automod-status"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/moderators": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets all users allowed to moderate the broadcaster’s chat room.
         * @description Gets all users allowed to moderate the broadcaster’s chat room.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderation:read** scope. If your app also adds and removes moderators, you can use the **channel:manage:moderators** scope instead.
         */
        get: operations["get-moderators"];
        put?: never;
        /**
         * Adds a moderator to the broadcaster’s chat room.
         * @description Adds a moderator to the broadcaster’s chat room.
         *
         *     **Rate Limits**: The broadcaster may add a maximum of 10 moderators within a 10-second window.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:moderators** scope.
         */
        post: operations["add-channel-moderator"];
        /**
         * Removes a moderator from the broadcaster’s chat room.
         * @description Removes a moderator from the broadcaster’s chat room.
         *
         *     **Rate Limits**: The broadcaster may remove a maximum of 10 moderators within a 10-second window.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:moderators** scope.
         */
        delete: operations["remove-channel-moderator"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/shield_mode": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the broadcaster’s Shield Mode activation status.
         * @description Gets the broadcaster’s Shield Mode activation status.
         *
         *     To receive notification when the broadcaster activates and deactivates Shield Mode, subscribe to the [channel.shield\_mode.begin](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshield%5Fmodebegin) and [channel.shield\_mode.end](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshield%5Fmodeend) subscription types.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:shield\_mode** or **moderator:manage:shield\_mode** scope. The user ID associated with the token must match the `moderator_id` in the query parameter.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:read:shield\_mode** or **moderator:manage:shield\_mode** scope for the user represented by the `moderator_id` query parameter.
         */
        get: operations["get-shield-mode-status"];
        /**
         * Activates or deactivates the broadcaster’s Shield Mode.
         * @description Activates or deactivates the broadcaster’s Shield Mode.
         *
         *     Twitch’s Shield Mode feature is like a panic button that broadcasters can push to protect themselves from chat abuse coming from one or more accounts. When activated, Shield Mode applies the overrides that the broadcaster configured in the Twitch UX. If the broadcaster hasn’t configured Shield Mode, it applies default overrides.
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:shield\_mode** scope. The user ID associated with the token must match the `moderator_id` in the query parameter.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:shield\_mode** scope for the user represented by the `moderator_id` query parameter.
         */
        put: operations["update-shield-mode-status"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/suspicious_users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * NEW Adds a suspicious user status to a chatter on the broadcaster’s channel.
         * @description NEW Adds a suspicious user status to a chatter on the broadcaster’s channel.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:suspicious\_users** scope.
         */
        post: operations["add-suspicious-status-to-chat-user"];
        /**
         * NEW Remove a suspicious user status from a chatter on broadcaster’s channel.
         * @description NEW Remove a suspicious user status from a chatter on broadcaster’s channel.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:suspicious\_users** scope.
         */
        delete: operations["remove-suspicious-status-from-chat-user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderation/unban_requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of unban requests for a broadcaster’s channel.
         * @description Gets a list of unban requests for a broadcaster’s channel.
         *
         *     __Authorization:__
         *
         *     * Requires a user access token that includes the **moderator:read:unban\_requests** or **moderator:manage:unban\_requests** scope.
         *     * Query parameter `moderator_id` must match the `user_id` in the [user access token](https://dev.twitch.tv/docs/authentication/#user-access-tokens).
         */
        get: operations["get-unban-requests"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Resolves an unban request by approving or denying it.
         * @description Resolves an unban request by approving or denying it.
         *
         *     __Authorization:__
         *
         *     * Requires a user access token that includes the **moderator:manage:unban\_requests** scope.
         *     * Query parameter `moderator_id` must match the `user_id` in the[user access token](https://dev.twitch.tv/docs/authentication/#user-access-tokens).
         */
        patch: operations["resolve-unban-requests"];
        trace?: never;
    };
    "/moderation/warnings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Warns a user in the specified broadcaster’s chat room, preventing them from chat interaction until the warning is acknowledged.
         * @description Warns a user in the specified broadcaster’s chat room, preventing them from chat interaction until the warning is acknowledged. New warnings can be issued to a user when they already have a warning in the channel (new warning will replace old warning).
         *
         *     __Authorization:__
         *
         *     Requires one of the following:
         *
         *     * A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:warnings** scope. The user ID associated with the token must match the `moderator_id` in the query parameter.
         *     * BETA An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:warnings** scope for the user represented by the `moderator_id` query parameter.
         */
        post: operations["warn-chat-user"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/polls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of polls that the broadcaster created.
         * @description Gets a list of polls that the broadcaster created.
         *
         *     Polls are available for 90 days after they’re created.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:polls** or **channel:manage:polls** scope.
         */
        get: operations["get-polls"];
        put?: never;
        /**
         * Creates a poll that viewers in the broadcaster’s channel can vote on.
         * @description Creates a poll that viewers in the broadcaster’s channel can vote on.
         *
         *     The poll begins as soon as it’s created. You may run only one poll at a time.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:polls** scope.
         */
        post: operations["create-poll"];
        delete?: never;
        options?: never;
        head?: never;
        /**
         * End an active poll.
         * @description Ends an active poll. You have the option to end it or end it and archive it.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:polls** scope.
         */
        patch: operations["end-poll"];
        trace?: never;
    };
    "/predictions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of Channel Points Predictions that the broadcaster created.
         * @description Gets a list of Channel Points Predictions that the broadcaster created.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:predictions** or **channel:manage:predictions** scope.
         */
        get: operations["get-predictions"];
        put?: never;
        /**
         * Create a Channel Points Prediction.
         * @description Creates a Channel Points Prediction.
         *
         *     With a Channel Points Prediction, the broadcaster poses a question and viewers try to predict the outcome. The prediction runs as soon as it’s created. The broadcaster may run only one prediction at a time.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:predictions** scope.
         */
        post: operations["create-prediction"];
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Locks, resolves, or cancels a Channel Points Prediction.
         * @description Locks, resolves, or cancels a Channel Points Prediction.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:predictions** scope.
         */
        patch: operations["end-prediction"];
        trace?: never;
    };
    "/raids": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Raid another channel by sending the broadcaster’s viewers to the targeted channel.
         * @description Raid another channel by sending the broadcaster’s viewers to the targeted channel.
         *
         *     When you call the API from a chat bot or extension, the Twitch UX pops up a window at the top of the chat room that identifies the number of viewers in the raid. The raid occurs when the broadcaster clicks **Raid Now** or after the 90-second countdown expires.
         *
         *     To determine whether the raid successfully occurred, you must subscribe to the [Channel Raid](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelraid) event. For more information, see [Get notified when a raid begins](https://dev.twitch.tv/docs/api/raids#get-notified-when-a-raid-begins).
         *
         *     To cancel a pending raid, use the [Cancel a raid](https://dev.twitch.tv/docs/api/reference#cancel-a-raid) endpoint.
         *
         *     **Rate Limit**: The limit is 10 requests within a 10-minute window.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:raids** scope.
         */
        post: operations["start-a-raid"];
        /**
         * Cancel a pending raid.
         * @description Cancel a pending raid.
         *
         *     You can cancel a raid at any point up until the broadcaster clicks **Raid Now** in the Twitch UX or the 90-second countdown expires.
         *
         *     **Rate Limit**: The limit is 10 requests within a 10-minute window.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:raids** scope.
         */
        delete: operations["cancel-a-raid"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the broadcaster’s streaming schedule.
         * @description Gets the broadcaster’s streaming schedule. You can get the entire schedule or specific segments of the schedule. [Learn More](https://help.twitch.tv/s/article/channel-page-setup#Schedule)
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-channel-stream-schedule"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/schedule/icalendar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the broadcaster’s streaming schedule as an iCalendar.
         * @description Gets the broadcaster’s streaming schedule as an [iCalendar](https://datatracker.ietf.org/doc/html/rfc5545).
         *
         *     __Authorization:__
         *
         *     The Client-Id and Authorization headers are not required.
         *
         *     __Response Body:__
         *
         *     The response body contains the iCalendar data (see [RFC5545](https://datatracker.ietf.org/doc/html/rfc5545)).
         *
         *     The Content-Type response header is set to `text/calendar`.
         */
        get: operations["get-channel-icalendar"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/schedule/segment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Adds a single or recurring broadcast to the broadcaster’s streaming schedule.
         * @description Adds a single or recurring broadcast to the broadcaster’s streaming schedule. For information about scheduling broadcasts, see [Stream Schedule](https://help.twitch.tv/s/article/channel-page-setup#Schedule).
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.
         */
        post: operations["create-channel-stream-schedule-segment"];
        /**
         * Deletes a broadcast from the broadcaster’s streaming schedule.
         * @description Removes a broadcast segment from the broadcaster’s streaming schedule.
         *
         *     **NOTE**: For recurring segments, removing a segment removes all segments in the recurring schedule.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.
         */
        delete: operations["delete-channel-stream-schedule-segment"];
        options?: never;
        head?: never;
        /**
         * Updates a scheduled broadcast segment.
         * @description Updates a scheduled broadcast segment.
         *
         *     For recurring segments, updating a segment’s title, category, duration, and timezone, changes all segments in the recurring schedule, not just the specified segment.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.
         */
        patch: operations["update-channel-stream-schedule-segment"];
        trace?: never;
    };
    "/schedule/settings": {
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
         * Updates the broadcaster’s schedule settings, such as scheduling a vacation.
         * @description Updates the broadcaster’s schedule settings, such as scheduling a vacation.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.
         */
        patch: operations["update-channel-stream-schedule"];
        trace?: never;
    };
    "/search/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the games or categories that match the specified query.
         * @description Gets the games or categories that match the specified query.
         *
         *     To match, the category’s name must contain all parts of the query string. For example, if the query string is 42, the response includes any category name that contains 42 in the title. If the query string is a phrase like _love computer_, the response includes any category name that contains the words love and computer anywhere in the name. The comparison is case insensitive.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["search-categories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the channels that match the specified query and have streamed content within the past 6 months.
         * @description Gets the channels that match the specified query and have streamed content within the past 6 months.
         *
         *     The fields that the API uses for comparison depends on the value that the _live\_only_ query parameter is set to. If _live\_only_ is **false**, the API matches on the broadcaster’s login name. However, if _live\_only_ is **true**, the API matches on the broadcaster’s name and category name.
         *
         *     To match, the beginning of the broadcaster’s name or category must match the query string. The comparison is case insensitive. If the query string is angel\_of\_death, it matches all names that begin with angel\_of\_death. However, if the query string is a phrase like _angel of death_, it matches to names starting with angelofdeath or names starting with angel\_of\_death.
         *
         *     By default, the results include both live and offline channels. To get only live channels set the _live\_only_ query parameter to **true**.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["search-channels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared_chat/session": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * NEW Retrieves the active shared chat session for a channel.
         * @description NEW Retrieves the active shared chat session for a channel.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/cli/token-command/#app-access-token) or [user access token](https://dev.twitch.tv/docs/authentication/#user-access-tokens).
         */
        get: operations["get-shared-chat-session"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/streams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of all streams.
         * @description Gets a list of all streams. The list is in descending order by the number of viewers watching the stream. Because viewers come and go during a stream, it’s possible to find duplicate or missing streams in the list as you page through the results.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-streams"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/streams/followed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the list of broadcasters that the user follows and that are streaming live.
         * @description Gets the list of broadcasters that the user follows and that are streaming live.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:follows** scope.
         */
        get: operations["get-followed-streams"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/streams/key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the channel’s stream key.
         * @description Gets the channel’s stream key.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:stream\_key** scope.
         */
        get: operations["get-stream-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/streams/markers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of markers from the user’s most recent stream or from the specified VOD/video.
         * @description Gets a list of markers from the user’s most recent stream or from the specified VOD/video. A marker is an arbitrary point in a live stream that the broadcaster or editor marked, so they can return to that spot later to create video highlights (see Video Producer, Highlights in the Twitch UX).
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:broadcast** or **channel:manage:broadcast** scope.
         */
        get: operations["get-stream-markers"];
        put?: never;
        /**
         * Adds a marker to a live stream.
         * @description Adds a marker to a live stream. A marker is an arbitrary point in a live stream that the broadcaster or editor wants to mark, so they can return to that spot later to create video highlights (see Video Producer, Highlights in the Twitch UX).
         *
         *     You may not add markers:
         *
         *     * If the stream is not live
         *     * If the stream has not enabled video on demand (VOD)
         *     * If the stream is a premiere (a live, first-viewing event that combines uploaded videos with live chat)
         *     * If the stream is a rerun of a past broadcast, including past premieres.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:broadcast** scope.
         */
        post: operations["create-stream-marker"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/streams/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the list of stream tags that the broadcaster or Twitch added to their channel.
         * @deprecated
         * @description **IMPORTANT** Twitch is moving from Twitch-defined tags to channel-defined tags. **IMPORTANT** As of February 28, 2023, this endpoint returns an empty array. On July 13, 2023, it will return a 410 response. If you use this endpoint, please update your code to use [Get Channel Information](https://dev.twitch.tv/docs/api/reference#get-channel-information).
         *
         *     Gets the list of stream tags that the broadcaster or Twitch added to their channel.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-stream-tags"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of users that subscribe to the specified broadcaster.
         * @description Gets a list of users that subscribe to the specified broadcaster.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:subscriptions** scope.
         *
         *     A Twitch extensions may use an app access token if the broadcaster has granted the **channel:read:subscriptions** scope from within the Twitch Extensions manager.
         */
        get: operations["get-broadcaster-subscriptions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Checks whether the user subscribes to the broadcaster’s channel.
         * @description Checks whether the user subscribes to the broadcaster’s channel.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:subscriptions** scope.
         *
         *     A Twitch extensions may use an app access token if the broadcaster has granted the **user:read:subscriptions** scope from within the Twitch Extensions manager.
         */
        get: operations["check-user-subscription"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tags/streams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the list of all stream tags that Twitch defines. You can also filter the list by one or more tag IDs.
         * @deprecated
         * @description **IMPORTANT** Twitch is moving from Twitch-defined tags to channel-defined tags. **IMPORTANT** As of February 28, 2023, this endpoint returns an empty array. On July 13, 2023, it will return a 410 response.
         *
         *     Gets a list of all stream tags that Twitch defines. The broadcaster may apply any of these to their channel except automatic tags. For an online list of the possible tags, see [List of All Tags](https://www.twitch.tv/directory/all/tags).
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-all-stream-tags"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets information about the specified Twitch team.
         * @description Gets information about the specified Twitch team. [Read More](https://help.twitch.tv/s/article/twitch-teams)
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-teams"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/channel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the list of Twitch teams that the broadcaster is a member of.
         * @description Gets the list of Twitch teams that the broadcaster is a member of.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-channel-teams"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
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
         * Gets information about one or more users.
         * @description Gets information about one or more users.
         *
         *     You may look up users using their user ID, login name, or both but the sum total of the number of users you may look up is 100\. For example, you may specify 50 IDs and 50 names or 100 IDs or names, but you cannot specify 100 IDs and 100 names.
         *
         *     If you don’t specify IDs or login names, the request returns information about the user in the access token if you specify a user access token.
         *
         *     To include the user’s verified email address in the response, you must use a user access token that includes the **user:read:email** scope.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-users"];
        /**
         * Updates the user’s information.
         * @description Updates the specified user’s information. The user ID in the OAuth token identifies the user whose information you want to update.
         *
         *     To include the user’s verified email address in the response, the user access token must also include the **user:read:email** scope.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:edit** scope.
         */
        put: operations["update-user"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/blocks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the list of users that the broadcaster has blocked.
         * @description Gets the list of users that the broadcaster has blocked. [Read More](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat?language=en%5FUS#BlockWhispersandMessagesfromStrangers)
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:blocked\_users** scope.
         */
        get: operations["get-user-block-list"];
        /**
         * Blocks the specified user from interacting with or having contact with the broadcaster.
         * @description Blocks the specified user from interacting with or having contact with the broadcaster. The user ID in the OAuth token identifies the broadcaster who is blocking the user.
         *
         *     To learn more about blocking users, see [Block Other Users on Twitch](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat?language=en%5FUS#BlockWhispersandMessagesfromStrangers).
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:blocked\_users** scope.
         */
        put: operations["block-user"];
        post?: never;
        /**
         * Removes the user from the broadcaster’s list of blocked users.
         * @description Removes the user from the broadcaster’s list of blocked users. The user ID in the OAuth token identifies the broadcaster who’s removing the block.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:blocked\_users** scope.
         */
        delete: operations["unblock-user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/extensions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets the active extensions that the broadcaster has installed for each configuration.
         * @description Gets the active extensions that the broadcaster has installed for each configuration.
         *
         *     NOTE: To include extensions that you have under development, you must specify a user access token that includes the **user:read:broadcast** or **user:edit:broadcast** scope.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-user-active-extensions"];
        /**
         * Updates an installed extension’s information.
         * @description Updates an installed extension’s information. You can update the extension’s activation state, ID, and version number. The user ID in the access token identifies the broadcaster whose extensions you’re updating.
         *
         *     NOTE: If you try to activate an extension under multiple extension types, the last write wins (and there is no guarantee of write order).
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:edit:broadcast** scope.
         */
        put: operations["update-user-extensions"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/extensions/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets a list of all extensions (both active and inactive) that the broadcaster has installed.
         * @description Gets a list of all extensions (both active and inactive) that the broadcaster has installed. The user ID in the access token identifies the broadcaster.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:broadcast** or **user:edit:broadcast** scope. To include inactive extensions, you must include the **user:edit:broadcast** scope.
         */
        get: operations["get-user-extensions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/videos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets information about one or more published videos.
         * @description Gets information about one or more published videos. You may get videos by ID, by user, or by game/category.
         *
         *     You may apply several filters to get a subset of the videos. The filters are applied as an AND operation to each video. For example, if _language_ is set to ‘de’ and _game\_id_ is set to 21779, the response includes only videos that show playing League of Legends by users that stream in German. The filters apply only if you get videos by user ID or game ID.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).
         */
        get: operations["get-videos"];
        put?: never;
        post?: never;
        /**
         * Deletes one or more videos.
         * @description Deletes one or more videos. You may delete past broadcasts, highlights, or uploads.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:videos** scope.
         */
        delete: operations["delete-videos"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/videos/clips": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * NEW  Creates a clip from the broadcaster’s VOD.
         * @description NEW Creates a clip from a broadcaster’s VOD on behalf of the broadcaster or an editor of the channel. Since a live stream is actively creating a VOD, this endpoint can also be used to create a clip from earlier in the current stream.
         *
         *     The duration of a clip can be from 5 seconds to 60 seconds in length, with a default of 30 seconds if not specified.
         *
         *     `vod_offset` indicates where the clip will end. In other words, the clip will start at (`vod_offset` \- `duration`) and end at `vod_offset`. This means that the value of `vod_offset` must greater than or equal to the value of `duration`.
         *
         *     The URL in the response’s `edit_url` field allows you to edit the clip’s title, feature the clip, create a portrait version of the clip, download the clip media, and share the clip directly to social platforms.
         *
         *     __Authorization:__
         *
         *     Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **editor:manage:clips** or **channel:manage:clips** scope.
         */
        post: operations["create-clip-from-vod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/whispers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sends a whisper message to the specified user.
         * @description Sends a whisper message to the specified user.
         *
         *     NOTE: The user sending the whisper must have a verified phone number (see the **Phone Number** setting in your [Security and Privacy](https://www.twitch.tv/settings/security) settings).
         *
         *     NOTE: The API may silently drop whispers that it suspects of violating Twitch policies. (The API does not indicate that it dropped the whisper; it returns a 204 status code as if it succeeded.)
         *
         *     **Rate Limits**: You may whisper to a maximum of 40 unique recipients per day. Within the per day limit, you may whisper a maximum of 3 whispers per second and a maximum of 100 whispers per minute.
         *
         *     __Authorization:__
         *
         *     Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:whispers** scope.
         */
        post: operations["send-whisper"];
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
        AddBlockedTermBody: {
            /**
             * @description The word or phrase to block from being used in the broadcaster’s chat room. The term must contain a minimum of 2 characters and may contain up to a maximum of 500 characters.
             *
             *     Terms may include a wildcard character (\*). The wildcard character must appear at the beginning or end of a word or set of characters. For example, \*foo or foo\*.
             *
             *     If the blocked term already exists, the response contains the existing blocked term.
             */
            text: string;
        };
        AddBlockedTermResponse: {
            /** @description A list that contains the single blocked term that the broadcaster added. */
            data: components["schemas"]["BlockedTerm"][];
        };
        AddSuspiciousStatusToChatUserBody: {
            /**
             * @description The type of suspicious status. Possible values are: ACTIVE\_MONITORING, RESTRICTED
             * @enum {string}
             */
            status: "ACTIVE_MONITORING" | "RESTRICTED";
            /** @description The ID of the user being given the suspicious status. */
            user_id: string;
        };
        AddSuspiciousStatusToChatUserResponse: {
            /** @description An array with one object containing information about the suspicious user action. */
            data: {
                /** @description The user ID of the broadcaster indicating in which channel the status is being applied. */
                broadcaster_id: string;
                /** @description The user ID of the moderator who applied the last status. */
                moderator_id: string;
                /**
                 * @description The type of suspicious status. Possible values are: ACTIVE\_MONITORING, RESTRICTED
                 * @enum {string}
                 */
                status: "ACTIVE_MONITORING" | "RESTRICTED";
                /** @description An array of strings representing the type(s) of suspicious user this is. Possible values are: MANUALLY\_ADDED, DETECTED\_BAN\_EVADER, DETECTED\_SUS\_CHATTER, BANNED\_IN\_SHARED\_CHANNEL */
                types: ("MANUALLY_ADDED" | "DETECTED_BAN_EVADER" | "DETECTED_SUS_CHATTER" | "BANNED_IN_SHARED_CHANNEL")[];
                /**
                 * Format: date-time
                 * @description The timestamp of the last time this user’s status was updated.
                 */
                updated_at: string;
                /** @description The ID of the user being given the suspicious status. */
                user_id: string;
            }[];
        };
        AutoModSettings: {
            /**
             * Format: int32
             * @description The Automod level for hostility involving aggression.
             */
            aggression: number;
            /** @description The broadcaster’s ID. */
            broadcaster_id: string;
            /**
             * Format: int32
             * @description The Automod level for hostility involving name calling or insults.
             */
            bullying: number;
            /**
             * Format: int32
             * @description The Automod level for discrimination against disability.
             */
            disability: number;
            /**
             * Format: int32
             * @description The Automod level for discrimination against women.
             */
            misogyny: number;
            /** @description The moderator’s ID. */
            moderator_id: string;
            /**
             * Format: int32
             * @description The default AutoMod level for the broadcaster. This field is **null** if the broadcaster has set one or more of the individual settings.
             */
            overall_level: number | null;
            /**
             * Format: int32
             * @description The Automod level for racial discrimination.
             */
            race_ethnicity_or_religion: number;
            /**
             * Format: int32
             * @description The Automod level for sexual content.
             */
            sex_based_terms: number;
            /**
             * Format: int32
             * @description The AutoMod level for discrimination based on sexuality, sex, or gender.
             */
            sexuality_sex_or_gender: number;
            /**
             * Format: int32
             * @description The Automod level for profanity.
             */
            swearing: number;
        };
        AutoModStatus: {
            /** @description A Boolean value that indicates whether Twitch would approve the message for chat or hold it for moderator review or block it from chat. Is **true** if Twitch would approve the message; otherwise, **false** if Twitch would hold the message for moderator review or block it from chat. */
            is_permitted: boolean;
            /** @description The caller-defined ID passed in the request. */
            msg_id: string;
        };
        BannedUser: {
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the user was banned.
             */
            created_at: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the timeout expires, or an empty string if the user is permanently banned.
             */
            expires_at: string;
            /** @description The ID of the moderator that banned the user or put them in a timeout. */
            moderator_id: string;
            /** @description The moderator’s login name. */
            moderator_login: string;
            /** @description The moderator’s display name. */
            moderator_name: string;
            /** @description The reason the user was banned or put in a timeout if the moderator provided one. */
            reason: string;
            /** @description The ID of the banned user. */
            user_id: string;
            /** @description The banned user’s login name. */
            user_login: string;
            /** @description The banned user’s display name. */
            user_name: string;
        };
        BanUserBody: {
            /** @description Identifies the user and type of ban. */
            data: {
                /**
                 * Format: int32
                 * @description To ban a user indefinitely, don’t include this field.
                 *
                 *     To put a user in a timeout, include this field and specify the timeout period, in seconds. The minimum timeout is 1 second and the maximum is 1,209,600 seconds (2 weeks).
                 *
                 *     To end a user’s timeout early, set this field to 1, or use the [Unban user](https://dev.twitch.tv/docs/api/reference#unban-user) endpoint.
                 */
                duration?: number;
                /** @description The reason the you’re banning the user or putting them in a timeout. The text is user defined and is limited to a maximum of 500 characters. */
                reason?: string;
                /** @description The ID of the user to ban or put in a timeout. */
                user_id: string;
            };
        };
        BanUserResponse: {
            /** @description A list that contains the user you successfully banned or put in a timeout. */
            data: {
                /** @description The broadcaster whose chat room the user was banned from chatting in. */
                broadcaster_id: string;
                /**
                 * Format: date-time
                 * @description The UTC date and time (in RFC3339 format) that the ban or timeout was placed.
                 */
                created_at: string;
                /**
                 * Format: date-time
                 * @description The UTC date and time (in RFC3339 format) that the timeout will end. Is **null** if the user was banned instead of being put in a timeout.
                 */
                end_time: string | null;
                /** @description The moderator that banned or put the user in the timeout. */
                moderator_id: string;
                /** @description The user that was banned or put in a timeout. */
                user_id: string;
            }[];
        };
        BitsLeaderboard: {
            /**
             * Format: int32
             * @description The user’s position on the leaderboard.
             */
            rank: number;
            /**
             * Format: int32
             * @description The number of Bits the user has cheered.
             */
            score: number;
            /** @description An ID that identifies a user on the leaderboard. */
            user_id: string;
            /** @description The user’s login name. */
            user_login: string;
            /** @description The user’s display name. */
            user_name: string;
        };
        BlockedTerm: {
            /** @description The broadcaster that owns the list of blocked terms. */
            broadcaster_id: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) that the term was blocked.
             */
            created_at: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) that the blocked term is set to expire. After the block expires, users may use the term in the broadcaster’s chat room.
             *
             *     This field is **null** if the term was added manually or was permanently blocked by AutoMod.
             */
            expires_at: string | null;
            /** @description An ID that identifies this blocked term. */
            id: string;
            /** @description The moderator that blocked the word or phrase from being used in the broadcaster’s chat room. */
            moderator_id: string;
            /** @description The blocked word or phrase. */
            text: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) that the term was updated.
             *
             *     When the term is added, this timestamp is the same as `created_at`. The timestamp changes as AutoMod continues to deny the term.
             */
            updated_at: string;
        };
        BroadcasterSubscription: {
            /** @description An ID that identifies the broadcaster. */
            broadcaster_id: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /** @description The ID of the user that gifted the subscription to the user. Is an empty string if `is_gift` is **false**. */
            gifter_id: string;
            /** @description The gifter’s login name. Is an empty string if `is_gift` is **false**. */
            gifter_login: string;
            /** @description The gifter’s display name. Is an empty string if `is_gift` is **false**. */
            gifter_name: string;
            /** @description A Boolean value that determines whether the subscription is a gift subscription. Is **true** if the subscription was gifted. */
            is_gift: boolean;
            /** @description The name of the subscription. */
            plan_name: string;
            /**
             * @description The type of subscription. Possible values are:
             *
             *     * 1000 — Tier 1
             *     * 2000 — Tier 2
             *     * 3000 — Tier 3
             * @enum {string}
             */
            tier: "1000" | "2000" | "3000";
            /** @description An ID that identifies the subscribing user. */
            user_id: string;
            /** @description The user’s login name. */
            user_login: string;
            /** @description The user’s display name. */
            user_name: string;
        };
        Category: {
            /** @description A URL to an image of the game’s box art or streaming category. */
            box_art_url: string;
            /** @description An ID that uniquely identifies the game or category. */
            id: string;
            /** @description The name of the game or category. */
            name: string;
        };
        Channel: {
            /** @description The ISO 639-1 two-letter language code of the language used by the broadcaster. For example, _en_ for English. If the broadcaster uses a language not in the list of [supported stream languages](https://help.twitch.tv/s/article/languages-on-twitch#streamlang), the value is _other_. */
            broadcaster_language: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            display_name: string;
            /** @description The ID of the game that the broadcaster is playing or last played. */
            game_id: string;
            /** @description The name of the game that the broadcaster is playing or last played. */
            game_name: string;
            /** @description An ID that uniquely identifies the channel (this is the broadcaster’s ID). */
            id: string;
            /** @description A Boolean value that determines whether the broadcaster is streaming live. Is **true** if the broadcaster is streaming live; otherwise, **false**. */
            is_live: boolean;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the broadcaster started streaming. The string is empty if the broadcaster is not streaming live.
             */
            started_at: string;
            /**
             * @deprecated
             * @description **IMPORTANT** As of February 28, 2023, this field is deprecated and returns only an empty array. If you use this field, please update your code to use the `tags` field.
             *
             *     The list of tags that apply to the stream. The list contains IDs only when the channel is steaming live. For a list of possible tags, see [List of All Tags](https://www.twitch.tv/directory/all/tags). The list doesn’t include Category Tags.
             */
            tag_ids: string[];
            /** @description The tags applied to the channel. */
            tags: string[];
            /** @description A URL to a thumbnail of the broadcaster’s profile image. */
            thumbnail_url: string;
            /** @description The stream’s title. Is an empty string if the broadcaster didn’t set it. */
            title: string;
        };
        ChannelEditor: {
            /**
             * Format: date-time
             * @description The date and time, in RFC3339 format, when the user became one of the broadcaster’s editors.
             */
            created_at: string;
            /** @description An ID that uniquely identifies a user with editor permissions. */
            user_id: string;
            /** @description The user’s display name. */
            user_name: string;
        };
        ChannelEmote: {
            /** @description An ID that identifies the emote set that the emote belongs to. */
            emote_set_id: string;
            /**
             * @description The type of emote. The possible values are:
             *
             *     * bitstier — A custom Bits tier emote.
             *     * follower — A custom follower emote.
             *     * subscriptions — A custom subscriber emote.
             * @enum {string}
             */
            emote_type: "bitstier" | "follower" | "subscriptions";
            /**
             * @description The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only `static`. But if the emote is available as a static PNG and an animated GIF, the array contains `static` and `animated`. The possible formats are:
             *
             *     * animated — An animated GIF is available for this emote.
             *     * static — A static PNG file is available for this emote.
             */
            format: ("animated" | "static")[];
            /** @description An ID that identifies this emote. */
            id: string;
            /**
             * @description The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background.
             *
             *     **NOTE:** You should use the templated URL in the `template` field to fetch the image instead of using these URLs.
             */
            images: {
                /** @description A URL to the small version (28px x 28px) of the emote. */
                url_1x: string;
                /** @description A URL to the medium version (56px x 56px) of the emote. */
                url_2x: string;
                /** @description A URL to the large version (112px x 112px) of the emote. */
                url_4x: string;
            };
            /** @description The name of the emote. This is the name that viewers type in the chat window to get the emote to appear. */
            name: string;
            /**
             * @description The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0\. Possible sizes are:
             *
             *     * 1.0 — A small version (28px x 28px) is available.
             *     * 2.0 — A medium version (56px x 56px) is available.
             *     * 3.0 — A large version (112px x 112px) is available.
             */
            scale: ("1.0" | "2.0" | "3.0")[];
            /**
             * @description The background themes that the emote is available in. Possible themes are:
             *
             *     * dark
             *     * light
             */
            theme_mode: ("dark" | "light")[];
            /** @description The subscriber tier at which the emote is unlocked. This field contains the tier information only if `emote_type` is set to `subscriptions`, otherwise, it's an empty string. */
            tier: string;
        };
        ChannelInformation: {
            /** @description An ID that uniquely identifies the broadcaster. */
            broadcaster_id: string;
            /** @description The broadcaster’s preferred language. The value is an ISO 639-1 two-letter language code (for example, _en_ for English). The value is set to “other” if the language is not a Twitch supported language. */
            broadcaster_language: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /** @description The CCLs applied to the channel. */
            content_classification_labels: string[];
            /**
             * Format: int32
             * @description The value of the broadcaster’s stream delay setting, in seconds. This field’s value defaults to zero unless 1) the request specifies a user access token, 2) the ID in the _broadcaster\_id_ query parameter matches the user ID in the access token, and 3) the broadcaster has partner status and they set a non-zero stream delay value.
             */
            delay: number;
            /** @description An ID that uniquely identifies the game that the broadcaster is playing or last played. The value is an empty string if the broadcaster has never played a game. */
            game_id: string;
            /** @description The name of the game that the broadcaster is playing or last played. The value is an empty string if the broadcaster has never played a game. */
            game_name: string;
            /** @description Boolean flag indicating if the channel has branded content. */
            is_branded_content: boolean;
            /** @description The tags applied to the channel. */
            tags: string[];
            /** @description The title of the stream that the broadcaster is currently streaming or last streamed. The value is an empty string if the broadcaster has never streamed. */
            title: string;
        };
        ChannelStreamScheduleSegment: {
            /** @description Indicates whether the broadcaster canceled this segment of a recurring broadcast. If the broadcaster canceled this segment, this field is set to the same value that’s in the `end_time` field; otherwise, it’s set to **null**. */
            canceled_until: string | null;
            /** @description The type of content that the broadcaster plans to stream or **null** if not specified. */
            category: {
                /** @description An ID that identifies the category that best represents the content that the broadcaster plans to stream. For example, the game’s ID if the broadcaster will play a game or the Just Chatting ID if the broadcaster will host a talk show. */
                id: string;
                /** @description The name of the category. For example, the game’s title if the broadcaster will play a game or Just Chatting if the broadcaster will host a talk show. */
                name: string;
            };
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the broadcast ends.
             */
            end_time: string;
            /** @description An ID that identifies this broadcast segment. */
            id: string;
            /** @description A Boolean value that determines whether the broadcast is part of a recurring series that streams at the same time each week or is a one-time broadcast. Is **true** if the broadcast is part of a recurring series. */
            is_recurring: boolean;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the broadcast starts.
             */
            start_time: string;
            /** @description The broadcast segment’s title. */
            title: string;
        };
        ChannelTeam: {
            /** @description A URL to the team’s background image. */
            background_image_url: string;
            /** @description A URL to the team’s banner. */
            banner: string;
            /** @description An ID that identifies the broadcaster. */
            broadcaster_id: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the team was created.
             */
            created_at: string;
            /** @description An ID that identifies the team. */
            id: string;
            /** @description The team’s description. The description may contain formatting such as Markdown, HTML, newline (\\n) characters, etc. */
            info: string;
            /** @description The team’s display name. */
            team_display_name: string;
            /** @description The team’s name. */
            team_name: string;
            /** @description A URL to a thumbnail image of the team’s logo. */
            thumbnail_url: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of the last time the team was updated.
             */
            updated_at: string;
        };
        CharityCampaign: {
            /** @description An ID that identifies the broadcaster that’s running the campaign. */
            broadcaster_id: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /** @description A description of the charity. */
            charity_description: string;
            /** @description A URL to an image of the charity’s logo. The image’s type is PNG and its size is 100px X 100px. */
            charity_logo: string;
            /** @description The charity’s name. */
            charity_name: string;
            /** @description A URL to the charity’s website. */
            charity_website: string;
            /** @description The current amount of donations that the campaign has received. */
            current_amount: {
                /** @description The ISO-4217 three-letter currency code that identifies the type of currency in `value`. */
                currency: string;
                /**
                 * Format: int32
                 * @description The number of decimal places used by the currency. For example, USD uses two decimal places. Use this number to translate `value` from minor units to major units by using the formula:
                 *
                 *     `value / 10^decimal_places`
                 */
                decimal_places: number;
                /**
                 * Format: int32
                 * @description The monetary amount. The amount is specified in the currency’s minor unit. For example, the minor units for USD is cents, so if the amount is $5.50 USD, `value` is set to 550.
                 */
                value: number;
            };
            /** @description An ID that identifies the charity campaign. */
            id: string;
            /** @description The campaign’s fundraising goal. This field is **null** if the broadcaster has not defined a fundraising goal. */
            target_amount: {
                /** @description The ISO-4217 three-letter currency code that identifies the type of currency in `value`. */
                currency: string;
                /**
                 * Format: int32
                 * @description The number of decimal places used by the currency. For example, USD uses two decimal places. Use this number to translate `value` from minor units to major units by using the formula:
                 *
                 *     `value / 10^decimal_places`
                 */
                decimal_places: number;
                /**
                 * Format: int32
                 * @description The monetary amount. The amount is specified in the currency’s minor unit. For example, the minor units for USD is cents, so if the amount is $5.50 USD, `value` is set to 550.
                 */
                value: number;
            };
        };
        CharityCampaignDonation: {
            /** @description An object that contains the amount of money that the user donated. */
            amount: {
                /** @description The ISO-4217 three-letter currency code that identifies the type of currency in `value`. */
                currency: string;
                /**
                 * Format: int32
                 * @description The number of decimal places used by the currency. For example, USD uses two decimal places. Use this number to translate `value` from minor units to major units by using the formula:
                 *
                 *     `value / 10^decimal_places`
                 */
                decimal_places: number;
                /**
                 * Format: int32
                 * @description The monetary amount. The amount is specified in the currency’s minor unit. For example, the minor units for USD is cents, so if the amount is $5.50 USD, `value` is set to 550.
                 */
                value: number;
            };
            /** @description An ID that identifies the charity campaign that the donation applies to. */
            campaign_id: string;
            /** @description An ID that identifies the donation. The ID is unique across campaigns. */
            id: string;
            /** @description An ID that identifies a user that donated money to the campaign. */
            user_id: string;
            /** @description The user’s login name. */
            user_login: string;
            /** @description The user’s display name. */
            user_name: string;
        };
        ChatBadge: {
            /** @description An ID that identifies this set of chat badges. For example, Bits or Subscriber. */
            set_id: string;
            /** @description The list of chat badges in this set. */
            versions: {
                /** @description The action to take when clicking on the badge. Set to `null` if no action is specified. */
                click_action: string;
                /** @description The URL to navigate to when clicking on the badge. Set to `null` if no URL is specified. */
                click_url: string;
                /** @description The description of the badge. */
                description: string;
                /** @description An ID that identifies this version of the badge. The ID can be any value. For example, for Bits, the ID is the Bits tier level, but for World of Warcraft, it could be Alliance or Horde. */
                id: string;
                /** @description A URL to the small version (18px x 18px) of the badge. */
                image_url_1x: string;
                /** @description A URL to the medium version (36px x 36px) of the badge. */
                image_url_2x: string;
                /** @description A URL to the large version (72px x 72px) of the badge. */
                image_url_4x: string;
                /** @description The title of the badge. */
                title: string;
            }[];
        };
        ChatSettings: {
            /** @description The ID of the broadcaster specified in the request. */
            broadcaster_id: string;
            /** @description A Boolean value that determines whether chat messages must contain only emotes. Is **true** if chat messages may contain only emotes; otherwise, **false**. */
            emote_mode: boolean;
            /**
             * @description A Boolean value that determines whether the broadcaster restricts the chat room to followers only.
             *
             *     Is **true** if the broadcaster restricts the chat room to followers only; otherwise, **false**.
             *
             *     See the `follower_mode_duration` field for how long users must follow the broadcaster before being able to participate in the chat room.
             */
            follower_mode: boolean;
            /**
             * Format: int32
             * @description The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Is **null** if `follower_mode` is **false**.
             */
            follower_mode_duration: number | null;
            /** @description The moderator’s ID. The response includes this field only if the request specifies a user access token that includes the **moderator:read:chat\_settings** scope. */
            moderator_id?: string;
            /**
             * @description A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message. See the `non_moderator_chat_delay_duration` field for the length of the delay. Is **true** if the broadcaster applies a delay; otherwise, **false**.
             *
             *     The response includes this field only if the request specifies a user access token that includes the **moderator:read:chat\_settings** scope and the user in the _moderator\_id_ query parameter is one of the broadcaster’s moderators.
             */
            non_moderator_chat_delay?: boolean;
            /**
             * Format: int32
             * @description The amount of time, in seconds, that messages are delayed before appearing in chat. Is **null** if `non_moderator_chat_delay` is **false**.
             *
             *     The response includes this field only if the request specifies a user access token that includes the **moderator:read:chat\_settings** scope and the user in the _moderator\_id_ query parameter is one of the broadcaster’s moderators.
             */
            non_moderator_chat_delay_duration?: number | null;
            /**
             * @description A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages.
             *
             *     Is **true** if the broadcaster applies a delay; otherwise, **false**.
             *
             *     See the `slow_mode_wait_time` field for the delay.
             */
            slow_mode: boolean;
            /**
             * Format: int32
             * @description The amount of time, in seconds, that users must wait between sending messages.
             *
             *     Is **null** if slow\_mode is **false**.
             */
            slow_mode_wait_time: number | null;
            /**
             * @description A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.
             *
             *     Is **true** if the broadcaster restricts the chat room to subscribers only; otherwise, **false**.
             */
            subscriber_mode: boolean;
            /**
             * @description A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.
             *
             *     Is **true** if the broadcaster requires unique messages only; otherwise, **false**.
             */
            unique_chat_mode: boolean;
        };
        ChatSettingsUpdated: {
            /** @description The ID of the broadcaster specified in the request. */
            broadcaster_id: string;
            /** @description A Boolean value that determines whether chat messages must contain only emotes. Is **true** if chat messages may contain only emotes; otherwise, **false**. */
            emote_mode: boolean;
            /**
             * @description A Boolean value that determines whether the broadcaster restricts the chat room to followers only.
             *
             *     Is **true** if the broadcaster restricts the chat room to followers only; otherwise, **false**.
             *
             *     See the `follower_mode_duration` field for how long users must follow the broadcaster before being able to participate in the chat room.
             */
            follower_mode: boolean;
            /**
             * Format: int32
             * @description The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Is **null** if `follower_mode` is **false**.
             */
            follower_mode_duration: number | null;
            /** @description The moderator’s ID. The response includes this field only if the request specifies a user access token that includes the **moderator:read:chat\_settings** scope. */
            moderator_id?: string;
            /** @description A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message. See the `non_moderator_chat_delay_duration` field for the length of the delay. Is **true** if the broadcaster applies a delay; otherwise, **false**. */
            non_moderator_chat_delay: boolean;
            /**
             * Format: int32
             * @description The amount of time, in seconds, that messages are delayed before appearing in chat. Is **null** if `non_moderator_chat_delay` is **false**.
             */
            non_moderator_chat_delay_duration: number | null;
            /**
             * @description A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages.
             *
             *     Is **true** if the broadcaster applies a delay; otherwise, **false**.
             *
             *     See the `slow_mode_wait_time` field for the delay.
             */
            slow_mode: boolean;
            /**
             * Format: int32
             * @description The amount of time, in seconds, that users must wait between sending messages.
             *
             *     Is **null** if slow\_mode is **false**.
             */
            slow_mode_wait_time: number | null;
            /**
             * @description A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.
             *
             *     Is **true** if the broadcaster restricts the chat room to subscribers only; otherwise, **false**.
             */
            subscriber_mode: boolean;
            /**
             * @description A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.
             *
             *     Is **true** if the broadcaster requires unique messages only; otherwise, **false**.
             */
            unique_chat_mode: boolean;
        };
        Chatter: {
            /** @description The ID of a user that’s connected to the broadcaster’s chat room. */
            user_id: string;
            /** @description The user’s login name. */
            user_login: string;
            /** @description The user’s display name. */
            user_name: string;
        };
        CheckAutoModStatusBody: {
            /** @description The list of messages to check. The list must contain at least one message and may contain up to a maximum of 100 messages. */
            data: {
                /** @description A caller-defined ID used to correlate this message with the same message in the response. */
                msg_id: string;
                /** @description The message to check. */
                msg_text: string;
            }[];
        };
        CheckAutoModStatusResponse: {
            /** @description The list of messages and whether Twitch would approve them for chat. */
            data: components["schemas"]["AutoModStatus"][];
        };
        CheckUserSubscriptionResponse: {
            /** @description A list that contains a single object with information about the user’s subscription. */
            data: components["schemas"]["UserSubscription"][];
        };
        Cheermote: {
            /** @description A Boolean value that indicates whether this Cheermote provides a charitable contribution match during charity campaigns. */
            is_charitable: boolean;
            /**
             * Format: date-time
             * @description The date and time, in RFC3339 format, when this Cheermote was last updated.
             */
            last_updated: string;
            /**
             * Format: int32
             * @description The order that the Cheermotes are shown in the Bits card. The numbers may not be consecutive. For example, the numbers may jump from 1 to 7 to 13\. The order numbers are unique within a Cheermote type (for example, global\_first\_party) but may not be unique amongst all Cheermotes in the response.
             */
            order: number;
            /** @description The name portion of the Cheermote string that you use in chat to cheer Bits. The full Cheermote string is the concatenation of {prefix} + {number of Bits}. For example, if the prefix is “Cheer” and you want to cheer 100 Bits, the full Cheermote string is Cheer100\. When the Cheermote string is entered in chat, Twitch converts it to the image associated with the Bits tier that was cheered. */
            prefix: string;
            /** @description A list of tier levels that the Cheermote supports. Each tier identifies the range of Bits that you can cheer at that tier level and an image that graphically identifies the tier level. */
            tiers: {
                /** @description A Boolean value that determines whether users can cheer at this tier level. */
                can_cheer: boolean;
                /** @description The hex code of the color associated with this tier level (for example, #979797). */
                color: string;
                /**
                 * @description The tier level. Possible tiers are:
                 *
                 *     * 1
                 *     * 100
                 *     * 500
                 *     * 1000
                 *     * 5000
                 *     * 10000
                 *     * 100000
                 * @enum {string}
                 */
                id: "1" | "100" | "500" | "1000" | "5000" | "10000" | "100000";
                images: components["schemas"]["CheermoteImages"];
                /**
                 * Format: int32
                 * @description The minimum number of Bits that you must cheer at this tier level. The maximum number of Bits that you can cheer at this level is determined by the required minimum Bits of the next tier level minus 1\. For example, if `min_bits` is 1 and `min_bits` for the next tier is 100, the Bits range for this tier level is 1 through 99\. The minimum Bits value of the last tier is the maximum number of Bits you can cheer using this Cheermote. For example, 10000.
                 */
                min_bits: number;
                /** @description A Boolean value that determines whether this tier level is shown in the Bits card. Is **true** if this tier level is shown in the Bits card. */
                show_in_bits_card: boolean;
            }[];
            /**
             * @description The type of Cheermote. Possible values are:
             *
             *     * global\_first\_party — A Twitch-defined Cheermote that is shown in the Bits card.
             *     * global\_third\_party — A Twitch-defined Cheermote that is not shown in the Bits card.
             *     * channel\_custom — A broadcaster-defined Cheermote.
             *     * display\_only — Do not use; for internal use only.
             *     * sponsored — A sponsor-defined Cheermote. When used, the sponsor adds additional Bits to the amount that the user cheered. For example, if the user cheered Terminator100, the broadcaster might receive 110 Bits, which includes the sponsor's 10 Bits contribution.
             * @enum {string}
             */
            type: "global_first_party" | "global_third_party" | "channel_custom" | "display_only" | "sponsored";
        };
        CheermoteImageFormat: {
            1?: string;
            1.5?: string;
            2?: string;
            3?: string;
            4?: string;
        };
        CheermoteImages: {
            dark?: components["schemas"]["CheermoteImageTheme"];
            light?: components["schemas"]["CheermoteImageTheme"];
        };
        CheermoteImageTheme: {
            animated?: components["schemas"]["CheermoteImageFormat"];
            static?: components["schemas"]["CheermoteImageFormat"];
        };
        Clip: {
            /** @description An ID that identifies the broadcaster that the video was clipped from. */
            broadcaster_id: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /**
             * Format: date-time
             * @description The date and time of when the clip was created. The date and time is in RFC3339 format.
             */
            created_at: string;
            /** @description An ID that identifies the user that created the clip. */
            creator_id: string;
            /** @description The user’s display name. */
            creator_name: string;
            /**
             * Format: float
             * @description The length of the clip, in seconds. Precision is 0.1.
             */
            duration: number;
            /** @description A URL that you can use in an iframe to embed the clip (see [Embedding Video and Clips](https://dev.twitch.tv/docs/embed/video-and-clips/)). */
            embed_url: string;
            /** @description The ID of the game that was being played when the clip was created. */
            game_id: string;
            /** @description An ID that uniquely identifies the clip. */
            id: string;
            /** @description A Boolean value that indicates if the clip is featured or not. */
            is_featured: boolean;
            /** @description The ISO 639-1 two-letter language code that the broadcaster broadcasts in. For example, _en_ for English. The value is _other_ if the broadcaster uses a language that Twitch doesn’t support. */
            language: string;
            /** @description A URL to a thumbnail image of the clip. */
            thumbnail_url: string;
            /** @description The title of the clip. */
            title: string;
            /** @description A URL to the clip. */
            url: string;
            /** @description An ID that identifies the video that the clip came from. This field contains an empty string if the video is not available. */
            video_id: string;
            /**
             * Format: int32
             * @description The number of times the clip has been viewed.
             */
            view_count: number;
            /**
             * Format: int32
             * @description The zero-based offset, in seconds, to where the clip starts in the video (VOD). Is **null** if the video is not available or hasn’t been created yet from the live stream (see `video_id`).
             *
             *     Note that there’s a delay between when a clip is created during a broadcast and when the offset is set. During the delay period, `vod_offset` is **null**. The delay is indeterminant but is typically minutes long.
             */
            vod_offset: number | null;
        };
        ContentClassificationLabel: {
            /** @description Localized description of the CCL. */
            description: string;
            /** @description Unique identifier for the CCL. */
            id: string;
            /** @description Localized name of the CCL. */
            name: string;
        };
        CreateChannelStreamScheduleSegmentBody: {
            /** @description The ID of the category that best represents the broadcast’s content. To get the category ID, use the [Search Categories](https://dev.twitch.tv/docs/api/reference#search-categories) endpoint. */
            category_id?: string;
            /** @description The length of time, in minutes, that the broadcast is scheduled to run. The duration must be in the range 30 through 1380 (23 hours). */
            duration: string;
            /** @description A Boolean value that determines whether the broadcast recurs weekly. Is **true** if the broadcast recurs weekly. Only partners and affiliates may add non-recurring broadcasts. */
            is_recurring?: boolean;
            /**
             * Format: date-time
             * @description The date and time that the broadcast segment starts. Specify the date and time in RFC3339 format (for example, 2021-07-01T18:00:00Z).
             */
            start_time: string;
            /** @description The time zone where the broadcast takes place. Specify the time zone using [IANA time zone database](https://www.iana.org/time-zones) format (for example, America/New\_York). */
            timezone: string;
            /** @description The broadcast’s title. The title may contain a maximum of 140 characters. */
            title?: string;
        };
        CreateChannelStreamScheduleSegmentResponse: {
            /** @description The broadcaster’s streaming scheduled. */
            data: {
                /** @description The ID of the broadcaster that owns the broadcast schedule. */
                broadcaster_id: string;
                /** @description The broadcaster’s login name. */
                broadcaster_login: string;
                /** @description The broadcaster’s display name. */
                broadcaster_name: string;
                /** @description A list that contains the single broadcast segment that you added. */
                segments: components["schemas"]["ChannelStreamScheduleSegment"][];
                /** @description The dates when the broadcaster is on vacation and not streaming. Is set to **null** if vacation mode is not enabled. */
                vacation: {
                    /**
                     * Format: date-time
                     * @description The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation ends.
                     */
                    end_time: string;
                    /**
                     * Format: date-time
                     * @description The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation starts.
                     */
                    start_time: string;
                };
            };
        };
        CreateClipFromVODResponse: {
            /** @description A list containing the created clip. */
            data: {
                /** @description A URL you can use to edit the clip’s title, feature the clip, create a portrait version of the clip, download the clip media, and share the clip directly to third-party platforms. */
                edit_url: string;
                /** @description An ID that uniquely identifies the clip. */
                id: string;
            }[];
        };
        CreateClipResponse: {
            /** @description A list containing the created clip. */
            data: {
                /**
                 * @description A URL that you can use to edit the clip’s title, identify the part of the clip to publish, and publish the clip. [Learn More](https://help.twitch.tv/s/article/how-to-use-clips)
                 *
                 *     The URL is valid for up to 24 hours or until the clip is published, whichever comes first.
                 */
                edit_url: string;
                /** @description An ID that uniquely identifies the clip. */
                id: string;
            }[];
        };
        CreateConduitsBody: {
            /**
             * Format: int32
             * @description The number of shards to create for this conduit.
             */
            shard_count: number;
        };
        CreateConduitsResponse: {
            /** @description List of information about the client’s conduits. */
            data: {
                /** @description Conduit ID. */
                id: string;
                /**
                 * Format: int32
                 * @description Number of shards created for this conduit.
                 */
                shard_count: number;
            }[];
        };
        CreateCustomRewardsBody: {
            /** @description The background color to use for the reward. Specify the color using Hex format (for example, #9147FF). */
            background_color?: string;
            /**
             * Format: int64
             * @description The cost of the reward, in Channel Points. The minimum is 1 point.
             */
            cost: number;
            /**
             * Format: int32
             * @description The cooldown period, in seconds. Applied only if the `is_global_cooldown_enabled` field is **true**. The minimum value is 1; however, the minimum value is 60 for it to be shown in the Twitch UX.
             */
            global_cooldown_seconds?: number;
            /** @description A Boolean value that determines whether the reward is enabled. Viewers see only enabled rewards. The default is **true**. */
            is_enabled?: boolean;
            /** @description A Boolean value that determines whether to apply a cooldown period between redemptions (see the `global_cooldown_seconds` field for the duration of the cooldown period). The default is **false**. */
            is_global_cooldown_enabled?: boolean;
            /** @description A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the `max_per_stream` field). The default is **false**. */
            is_max_per_stream_enabled?: boolean;
            /** @description A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see the `max_per_user_per_stream` field). The default is **false**. */
            is_max_per_user_per_stream_enabled?: boolean;
            /** @description A Boolean value that determines whether the user needs to enter information when redeeming the reward. See the `prompt` field. The default is **false**. */
            is_user_input_required?: boolean;
            /**
             * Format: int32
             * @description The maximum number of redemptions allowed per live stream. Applied only if `is_max_per_stream_enabled` is **true**. The minimum value is 1.
             */
            max_per_stream?: number;
            /**
             * Format: int32
             * @description The maximum number of redemptions allowed per user per stream. Applied only if `is_max_per_user_per_stream_enabled` is **true**. The minimum value is 1.
             */
            max_per_user_per_stream?: number;
            /** @description The prompt shown to the viewer when they redeem the reward. Specify a prompt if `is_user_input_required` is **true**. The prompt is limited to a maximum of 200 characters. */
            prompt?: string;
            /** @description A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If **false**, status is set to UNFULFILLED and follows the normal request queue process. The default is **false**. */
            should_redemptions_skip_request_queue?: boolean;
            /** @description The custom reward’s title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster’s custom rewards. */
            title: string;
        };
        CreateCustomRewardsResponse: {
            /** @description A list that contains the single custom reward you created. */
            data: components["schemas"]["CustomReward"][];
        };
        CreateEventSubSubscriptionBody: {
            /** @description A JSON object that contains the parameter values that are specific to the specified subscription type. For the object’s required and optional fields, see the subscription type’s documentation. */
            condition: Record<string, never>;
            /** @description The transport details that you want Twitch to use when sending you notifications. */
            transport: {
                /**
                 * @description The callback URL where the notifications are sent. The URL must use the HTTPS protocol and port 443\. See [Processing an event](https://dev.twitch.tv/docs/eventsub/handling-webhook-events#processing-an-event). Specify this field only if `method` is set to **webhook**.
                 *
                 *     **NOTE**: Redirects are not followed.
                 */
                callback?: string;
                /** @description An ID that identifies the conduit to send notifications to. When you create a conduit, the server returns the conduit ID. Specify this field only if `method` is set to **conduit**. */
                conduit_id?: string;
                /**
                 * @description The transport method. Possible values are:
                 *
                 *     * webhook
                 *     * websocket
                 *     * conduit
                 * @enum {string}
                 */
                method: "webhook" | "websocket" | "conduit";
                /** @description The secret used to verify the signature. The secret must be an ASCII string that’s a minimum of 10 characters long and a maximum of 100 characters long. For information about how the secret is used, see [Verifying the event message](https://dev.twitch.tv/docs/eventsub/handling-webhook-events#verifying-the-event-message). Specify this field only if `method` is set to **webhook**. */
                secret?: string;
                /** @description An ID that identifies the WebSocket to send notifications to. When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message. Specify this field only if `method` is set to **websocket**. */
                session_id?: string;
            };
            /**
             * @description The type of subscription to create. For a list of subscriptions that you can create, see [Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#subscription-types). Set this field to the value in the **Name** column of the Subscription Types table.
             * @enum {string}
             */
            type: "automod.message.hold" | "automod.message.update" | "automod.settings.update" | "automod.terms.update" | "channel.bits.use" | "channel.update" | "channel.follow" | "channel.ad_break.begin" | "channel.chat.clear" | "channel.chat.clear_user_messages" | "channel.chat.message" | "channel.chat.message_delete" | "channel.chat.notification" | "channel.chat_settings.update" | "channel.chat.user_message_hold" | "channel.chat.user_message_update" | "channel.shared_chat.begin" | "channel.shared_chat.update" | "channel.shared_chat.end" | "channel.subscribe" | "channel.subscription.end" | "channel.subscription.gift" | "channel.subscription.message" | "channel.cheer" | "channel.raid" | "channel.ban" | "channel.unban" | "channel.unban_request.create" | "channel.unban_request.resolve" | "channel.moderate" | "channel.moderator.add" | "channel.moderator.remove" | "channel.guest_star_session.begin" | "channel.guest_star_session.end" | "channel.guest_star_guest.update" | "channel.guest_star_settings.update" | "channel.channel_points_automatic_reward_redemption.add" | "channel.channel_points_custom_reward.add" | "channel.channel_points_custom_reward.update" | "channel.channel_points_custom_reward.remove" | "channel.channel_points_custom_reward_redemption.add" | "channel.channel_points_custom_reward_redemption.update" | "channel.poll.begin" | "channel.poll.progress" | "channel.poll.end" | "channel.prediction.begin" | "channel.prediction.progress" | "channel.prediction.lock" | "channel.prediction.end" | "channel.suspicious_user.message" | "channel.suspicious_user.update" | "channel.vip.add" | "channel.vip.remove" | "channel.warning.acknowledge" | "channel.warning.send" | "channel.charity_campaign.donate" | "channel.charity_campaign.start" | "channel.charity_campaign.progress" | "channel.charity_campaign.stop" | "conduit.shard.disabled" | "drop.entitlement.grant" | "extension.bits_transaction.create" | "channel.goal.begin" | "channel.goal.progress" | "channel.goal.end" | "channel.hype_train.begin" | "channel.hype_train.progress" | "channel.hype_train.end" | "channel.shield_mode.begin" | "channel.shield_mode.end" | "channel.shoutout.create" | "channel.shoutout.receive" | "stream.online" | "stream.offline" | "user.authorization.grant" | "user.authorization.revoke" | "user.update" | "user.whisper.message";
            /** @description The version number that identifies the definition of the subscription type that you want the response to use. */
            version: string;
        };
        CreateEventSubSubscriptionResponse: {
            /** @description A list that contains the single subscription that you created. */
            data: components["schemas"]["EventSubSubscription"][];
            /**
             * Format: int32
             * @description The maximum total cost that you’re allowed to incur for all subscriptions you create.
             */
            max_total_cost: number;
            /**
             * Format: int32
             * @description The total number of subscriptions you’ve created.
             */
            total: number;
            /**
             * Format: int32
             * @description The sum of all of your subscription costs. [Learn More](https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits)
             */
            total_cost: number;
        };
        CreateExtensionSecretResponse: {
            /** @description A list that contains the newly added secrets. */
            data: components["schemas"]["ExtensionSecret"][];
        };
        CreateGuestStarSessionResponse: {
            /** @description Summary of the session details. */
            data: components["schemas"]["GuestStarSession"][];
        };
        CreatePollBody: {
            /** @description The ID of the broadcaster that’s running the poll. This ID must match the user ID in the user access token. */
            broadcaster_id: string;
            /**
             * Format: int32
             * @description The number of points that the viewer must spend to cast one additional vote. The minimum is 1 and the maximum is 1000000\. Set only if `ChannelPointsVotingEnabled` is **true**.
             */
            channel_points_per_vote?: number;
            /** @description A Boolean value that indicates whether viewers may cast additional votes using Channel Points. If **true**, the viewer may cast more than one vote but each additional vote costs the number of Channel Points specified in `channel_points_per_vote`. The default is **false** (viewers may cast only one vote). For information about Channel Points, see [Channel Points Guide](https://help.twitch.tv/s/article/channel-points-guide). */
            channel_points_voting_enabled?: boolean;
            /** @description A list of choices that viewers may choose from. The list must contain a minimum of 2 choices and up to a maximum of 5 choices. */
            choices: {
                /** @description One of the choices the viewer may select. The choice may contain a maximum of 25 characters. */
                title: string;
            }[];
            /**
             * Format: int32
             * @description The length of time (in seconds) that the poll will run for. The minimum is 15 seconds and the maximum is 1800 seconds (30 minutes).
             */
            duration: number;
            /** @description The question that viewers will vote on. For example, _What game should I play next?_ The question may contain a maximum of 60 characters. */
            title: string;
        };
        CreatePollResponse: {
            /** @description A list that contains the single poll that you created. */
            data: components["schemas"]["Poll"][];
        };
        CreatePredictionBody: {
            /** @description The ID of the broadcaster that’s running the prediction. This ID must match the user ID in the user access token. */
            broadcaster_id: string;
            /** @description The list of possible outcomes that the viewers may choose from. The list must contain a minimum of 2 choices and up to a maximum of 10 choices. */
            outcomes: {
                /** @description The text of one of the outcomes that the viewer may select. The title is limited to a maximum of 25 characters. */
                title: string;
            }[];
            /**
             * Format: int32
             * @description The length of time (in seconds) that the prediction will run for. The minimum is 30 seconds and the maximum is 1800 seconds (30 minutes).
             */
            prediction_window: number;
            /** @description The question that the broadcaster is asking. For example, _Will I finish this entire pizza?_ The title is limited to a maximum of 45 characters. */
            title: string;
        };
        CreatePredictionResponse: {
            /** @description A list that contains the single prediction that you created. */
            data: components["schemas"]["Prediction"][];
        };
        CreateStreamMarkerBody: {
            /** @description A short description of the marker to help the user remember why they marked the location. The maximum length of the description is 140 characters. */
            description?: string;
            /** @description The ID of the broadcaster that’s streaming content. This ID must match the user ID in the access token or the user in the access token must be one of the broadcaster’s editors. */
            user_id: string;
        };
        CreateStreamMarkerResponse: {
            /** @description A list that contains the single marker that you added. */
            data: components["schemas"]["StreamMarkerCreated"][];
        };
        CreatorGoal: {
            /** @description An ID that identifies the broadcaster that created the goal. */
            broadcaster_id: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) that the broadcaster created the goal.
             */
            created_at: string;
            /**
             * Format: int32
             * @description The goal’s current value.
             *
             *     The goal’s `type` determines how this value is increased or decreased.
             *
             *     * If `type` is follower, this field is set to the broadcaster's current number of followers. This number increases with new followers and decreases when users unfollow the broadcaster.
             *     * If `type` is subscription, this field is increased and decreased by the points value associated with the subscription tier. For example, if a tier-two subscription is worth 2 points, this field is increased or decreased by 2, not 1.
             *     * If `type` is subscription\_count, this field is increased by 1 for each new subscription and decreased by 1 for each user that unsubscribes.
             *     * If `type` is new\_subscription, this field is increased by the points value associated with the subscription tier. For example, if a tier-two subscription is worth 2 points, this field is increased by 2, not 1.
             *     * If `type` is new\_subscription\_count, this field is increased by 1 for each new subscription.
             */
            current_amount: number;
            /** @description A description of the goal. Is an empty string if not specified. */
            description: string;
            /** @description An ID that identifies this goal. */
            id: string;
            /**
             * Format: int32
             * @description The goal’s target value. For example, if the broadcaster has 200 followers before creating the goal, and their goal is to double that number, this field is set to 400.
             */
            target_amount: number;
            /**
             * @description The type of goal. Possible values are:
             *
             *     * follower — The goal is to increase followers.
             *     * subscription — The goal is to increase subscriptions. This type shows the net increase or decrease in tier points associated with the subscriptions.
             *     * subscription\_count — The goal is to increase subscriptions. This type shows the net increase or decrease in the number of subscriptions.
             *     * new\_subscription — The goal is to increase subscriptions. This type shows only the net increase in tier points associated with the subscriptions (it does not account for users that unsubscribed since the goal started).
             *     * new\_subscription\_count — The goal is to increase subscriptions. This type shows only the net increase in the number of subscriptions (it does not account for users that unsubscribed since the goal started).
             * @enum {string}
             */
            type: "follower" | "subscription" | "subscription_count" | "new_subscription" | "new_subscription_count";
        };
        CustomReward: {
            /** @description The background color to use for the reward. The color is in Hex format (for example, #00E5CB). */
            background_color: string;
            /** @description The ID that uniquely identifies the broadcaster. */
            broadcaster_id: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /**
             * Format: date-time
             * @description The timestamp of when the cooldown period expires. Is **null** if the reward isn’t in a cooldown state. See the `global_cooldown_setting` field.
             */
            cooldown_expires_at: string | null;
            /**
             * Format: int64
             * @description The cost of the reward in Channel Points.
             */
            cost: number;
            /** @description A set of default images for the reward. */
            default_image: {
                /** @description The URL to a small version of the image. */
                url_1x: string;
                /** @description The URL to a medium version of the image. */
                url_2x: string;
                /** @description The URL to a large version of the image. */
                url_4x: string;
            };
            /** @description The settings used to determine whether to apply a cooldown period between redemptions and the length of the cooldown. */
            global_cooldown_setting: {
                /**
                 * Format: int64
                 * @description The cooldown period, in seconds.
                 */
                global_cooldown_seconds: number;
                /** @description A Boolean value that determines whether to apply a cooldown period. Is **true** if a cooldown period is enabled. */
                is_enabled: boolean;
            };
            /** @description The ID that uniquely identifies this custom reward. */
            id: string;
            /** @description A set of custom images for the reward. This field is **null** if the broadcaster didn’t upload images. */
            image: {
                /** @description The URL to a small version of the image. */
                url_1x: string;
                /** @description The URL to a medium version of the image. */
                url_2x: string;
                /** @description The URL to a large version of the image. */
                url_4x: string;
            };
            /** @description A Boolean value that determines whether the reward is enabled. Is **true** if enabled; otherwise, **false**. Disabled rewards aren’t shown to the user. */
            is_enabled: boolean;
            /** @description A Boolean value that determines whether the reward is currently in stock. Is **true** if the reward is in stock. Viewers can’t redeem out of stock rewards. */
            is_in_stock: boolean;
            /** @description A Boolean value that determines whether the reward is currently paused. Is **true** if the reward is paused. Viewers can’t redeem paused rewards. */
            is_paused: boolean;
            /** @description A Boolean value that determines whether the user must enter information when they redeem the reward. Is **true** if the user is prompted. */
            is_user_input_required: boolean;
            /** @description The settings used to determine whether to apply a maximum to the number of redemptions allowed per live stream. */
            max_per_stream_setting: {
                /** @description A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per live stream. Is **true** if the reward applies a limit. */
                is_enabled: boolean;
                /**
                 * Format: int64
                 * @description The maximum number of redemptions allowed per live stream.
                 */
                max_per_stream: number;
            };
            /** @description The settings used to determine whether to apply a maximum to the number of redemptions allowed per user per live stream. */
            max_per_user_per_stream_setting: {
                /** @description A Boolean value that determines whether the reward applies a limit on the number of redemptions allowed per user per live stream. Is **true** if the reward applies a limit. */
                is_enabled: boolean;
                /**
                 * Format: int64
                 * @description The maximum number of redemptions allowed per user per live stream.
                 */
                max_per_user_per_stream: number;
            };
            /** @description The prompt shown to the viewer when they redeem the reward if user input is required. See the `is_user_input_required` field. */
            prompt: string;
            /**
             * Format: int32
             * @description The number of redemptions redeemed during the current live stream. The number counts against the `max_per_stream_setting` limit. This field is **null** if the broadcaster’s stream isn’t live or _max\_per\_stream\_setting_ isn’t enabled.
             */
            redemptions_redeemed_current_stream: number | null;
            /** @description A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If **false**, status is set to UNFULFILLED and follows the normal request queue process. */
            should_redemptions_skip_request_queue: boolean;
            /** @description The title of the reward. */
            title: string;
        };
        CustomRewardRedemption: {
            /** @description The ID that uniquely identifies the broadcaster. */
            broadcaster_id: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /** @description The ID that uniquely identifies this redemption.. */
            id: string;
            /**
             * Format: date-time
             * @description The date and time of when the reward was redeemed, in RFC3339 format.
             */
            redeemed_at: string;
            /** @description An object that describes the reward that the user redeemed. */
            reward: {
                /**
                 * Format: int64
                 * @description The reward’s cost, in Channel Points.
                 */
                cost: number;
                /** @description The ID that uniquely identifies the reward. */
                id: string;
                /** @description The prompt displayed to the viewer if user input is required. */
                prompt: string;
                /** @description The reward’s title. */
                title: string;
            };
            /**
             * @description The state of the redemption. Possible values are:
             *
             *     * CANCELED
             *     * FULFILLED
             *     * UNFULFILLED
             * @enum {string}
             */
            status: "CANCELED" | "FULFILLED" | "UNFULFILLED";
            /** @description The ID of the user that redeemed the reward. */
            user_id: string;
            /** @description The text that the user entered at the prompt when they redeemed the reward; otherwise, an empty string if user input was not required. */
            user_input: string;
            /** @description The user’s login name. */
            user_login: string;
            /** @description The user’s display name. */
            user_name: string;
        };
        DeleteVideosResponse: {
            /** @description The list of IDs of the videos that were deleted. */
            data: string[];
        };
        DropsEntitlement: {
            /** @description An ID that identifies the benefit (reward). */
            benefit_id: string;
            /**
             * @description The entitlement’s fulfillment status. Possible values are:
             *
             *     * CLAIMED
             *     * FULFILLED
             * @enum {string}
             */
            fulfillment_status: "CLAIMED" | "FULFILLED";
            /** @description An ID that identifies the game the user was playing when the reward was entitled. */
            game_id: string;
            /** @description An ID that identifies the entitlement. */
            id: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the entitlement was last updated.
             */
            last_updated: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the entitlement was granted.
             */
            timestamp: string;
            /** @description An ID that identifies the user who was granted the entitlement. */
            user_id: string;
        };
        DropsEntitlementUpdated: {
            /** @description The list of entitlements that the status in the `status` field applies to. */
            ids: string[];
            /**
             * @description A string that indicates whether the status of the entitlements in the `ids` field were successfully updated. Possible values are:
             *
             *     * INVALID\_ID — The entitlement IDs in the `ids` field are not valid.
             *     * NOT\_FOUND — The entitlement IDs in the `ids` field were not found.
             *     * SUCCESS — The status of the entitlements in the `ids` field were successfully updated.
             *     * UNAUTHORIZED — The user or organization identified by the user access token is not authorized to update the entitlements.
             *     * UPDATE\_FAILED — The update failed. These are considered transient errors and the request should be retried later.
             * @enum {string}
             */
            status: "INVALID_ID" | "NOT_FOUND" | "SUCCESS" | "UNAUTHORIZED" | "UPDATE_FAILED";
        };
        Emote: {
            /** @description An ID that identifies the emote set that the emote belongs to. */
            emote_set_id: string;
            /**
             * @description The type of emote. The possible values are:
             *
             *     * bitstier — A Bits tier emote.
             *     * follower — A follower emote.
             *     * subscriptions — A subscriber emote.
             * @enum {string}
             */
            emote_type: "bitstier" | "follower" | "subscriptions";
            /**
             * @description The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only `static`. But if the emote is available as a static PNG and an animated GIF, the array contains `static` and `animated`. The possible formats are:
             *
             *     * animated — An animated GIF is available for this emote.
             *     * static — A static PNG file is available for this emote.
             */
            format: ("animated" | "static")[];
            /** @description An ID that uniquely identifies this emote. */
            id: string;
            /**
             * @description The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background.
             *
             *     **NOTE:** You should use the templated URL in the `template` field to fetch the image instead of using these URLs.
             */
            images: {
                /** @description A URL to the small version (28px x 28px) of the emote. */
                url_1x: string;
                /** @description A URL to the medium version (56px x 56px) of the emote. */
                url_2x: string;
                /** @description A URL to the large version (112px x 112px) of the emote. */
                url_4x: string;
            };
            /** @description The name of the emote. This is the name that viewers type in the chat window to get the emote to appear. */
            name: string;
            /** @description The ID of the broadcaster who owns the emote. */
            owner_id: string;
            /**
             * @description The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0\. Possible sizes are:
             *
             *     * 1.0 — A small version (28px x 28px) is available.
             *     * 2.0 — A medium version (56px x 56px) is available.
             *     * 3.0 — A large version (112px x 112px) is available.
             */
            scale: ("1.0" | "2.0" | "3.0")[];
            /**
             * @description The background themes that the emote is available in. Possible themes are:
             *
             *     * dark
             *     * light
             */
            theme_mode: ("dark" | "light")[];
        };
        EndGuestStarSessionResponse: {
            /** @description Summary of the session details when the session was ended. */
            data: components["schemas"]["GuestStarSession"][];
        };
        EndPollBody: {
            /** @description The ID of the broadcaster that’s running the poll. This ID must match the user ID in the user access token. */
            broadcaster_id: string;
            /** @description The ID of the poll to update. */
            id: string;
            /**
             * @description The status to set the poll to. Possible case-sensitive values are:
             *
             *     * TERMINATED — Ends the poll before the poll is scheduled to end. The poll remains publicly visible.
             *     * ARCHIVED — Ends the poll before the poll is scheduled to end, and then archives it so it's no longer publicly visible.
             * @enum {string}
             */
            status: "TERMINATED" | "ARCHIVED";
        };
        EndPollResponse: {
            /** @description A list that contains the poll that you ended. */
            data: components["schemas"]["Poll"][];
        };
        EndPredictionBody: {
            /** @description The ID of the broadcaster that’s running the prediction. This ID must match the user ID in the user access token. */
            broadcaster_id: string;
            /** @description The ID of the prediction to update. */
            id: string;
            /**
             * @description The status to set the prediction to. Possible case-sensitive values are:
             *
             *     * RESOLVED — The winning outcome is determined and the Channel Points are distributed to the viewers who predicted the correct outcome.
             *     * CANCELED — The broadcaster is canceling the prediction and sending refunds to the participants.
             *     * LOCKED — The broadcaster is locking the prediction, which means viewers may no longer make predictions.
             *
             *     The broadcaster can update an active prediction to LOCKED, RESOLVED, or CANCELED; and update a locked prediction to RESOLVED or CANCELED.
             *
             *     The broadcaster has up to 24 hours after the prediction window closes to resolve the prediction. If not, Twitch sets the status to CANCELED and returns the points.
             * @enum {string}
             */
            status: "RESOLVED" | "CANCELED" | "LOCKED";
            /** @description The ID of the winning outcome. You must set this parameter if you set `status` to RESOLVED. */
            winning_outcome_id?: string;
        };
        EndPredictionResponse: {
            /** @description A list that contains the single prediction that you updated. */
            data: components["schemas"]["Prediction"][];
        };
        EventSubSubscription: {
            /** @description The subscription's parameter values. This is a string-encoded JSON object whose contents are determined by the subscription type. */
            condition: Record<string, never>;
            /**
             * Format: int32
             * @description The amount that the subscription counts against your limit. [Learn More](https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits)
             */
            cost: number;
            /**
             * Format: date-time
             * @description The date and time (in RFC3339 format) of when the subscription was created.
             */
            created_at: string;
            /** @description An ID that identifies the subscription. */
            id: string;
            /**
             * @description The subscription's status. The subscriber receives events only for **enabled** subscriptions. Possible values are:
             *
             *     * enabled — The subscription is enabled.
             *     * webhook\_callback\_verification\_pending — The subscription is pending verification of the specified callback URL.
             *     * webhook\_callback\_verification\_failed — The specified callback URL failed verification.
             *     * notification\_failures\_exceeded — The notification delivery failure rate was too high.
             *     * authorization\_revoked — The authorization was revoked for one or more users specified in the **Condition** object.
             *     * moderator\_removed — The moderator that authorized the subscription is no longer one of the broadcaster's moderators.
             *     * user\_removed — One of the users specified in the **Condition** object was removed.
             *     * version\_removed — The subscription to subscription type and version is no longer supported.
             *     * beta\_maintenance — The subscription to the beta subscription type was removed due to maintenance.
             *     * websocket\_disconnected — The client closed the connection.
             *     * websocket\_failed\_ping\_pong — The client failed to respond to a ping message.
             *     * websocket\_received\_inbound\_traffic — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message).
             *     * websocket\_connection\_unused — The client failed to subscribe to events within the required time.
             *     * websocket\_internal\_error — The Twitch WebSocket server experienced an unexpected error.
             *     * websocket\_network\_timeout — The Twitch WebSocket server timed out writing the message to the client.
             *     * websocket\_network\_error — The Twitch WebSocket server experienced a network error writing the message to the client.
             * @enum {string}
             */
            status: "enabled" | "webhook_callback_verification_pending" | "webhook_callback_verification_failed" | "notification_failures_exceeded" | "authorization_revoked" | "moderator_removed" | "user_removed" | "version_removed" | "beta_maintenance" | "websocket_disconnected" | "websocket_failed_ping_pong" | "websocket_received_inbound_traffic" | "websocket_connection_unused" | "websocket_internal_error" | "websocket_network_timeout" | "websocket_network_error";
            /** @description The transport details used to send the notifications. */
            transport: {
                /** @description The callback URL where the notifications are sent. Included only if `method` is set to **webhook**. */
                callback?: string;
                /**
                 * Format: date-time
                 * @description The UTC date and time that the WebSocket connection was established. Included only if `method` is set to **websocket**.
                 */
                connected_at?: string;
                /**
                 * Format: date-time
                 * @description The UTC date and time that the WebSocket connection was lost. Included only if `method` is set to **websocket**.
                 */
                disconnected_at?: string;
                /**
                 * @description The transport method. Possible values are:
                 *
                 *     * webhook
                 *     * websocket
                 * @enum {string}
                 */
                method: "webhook" | "websocket";
                /** @description An ID that identifies the WebSocket that notifications are sent to. Included only if `method` is set to **websocket**. */
                session_id?: string;
            };
            /**
             * @description The subscription's type. See [Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#subscription-types).
             * @enum {string}
             */
            type: "automod.message.hold" | "automod.message.update" | "automod.settings.update" | "automod.terms.update" | "channel.bits.use" | "channel.update" | "channel.follow" | "channel.ad_break.begin" | "channel.chat.clear" | "channel.chat.clear_user_messages" | "channel.chat.message" | "channel.chat.message_delete" | "channel.chat.notification" | "channel.chat_settings.update" | "channel.chat.user_message_hold" | "channel.chat.user_message_update" | "channel.shared_chat.begin" | "channel.shared_chat.update" | "channel.shared_chat.end" | "channel.subscribe" | "channel.subscription.end" | "channel.subscription.gift" | "channel.subscription.message" | "channel.cheer" | "channel.raid" | "channel.ban" | "channel.unban" | "channel.unban_request.create" | "channel.unban_request.resolve" | "channel.moderate" | "channel.moderator.add" | "channel.moderator.remove" | "channel.guest_star_session.begin" | "channel.guest_star_session.end" | "channel.guest_star_guest.update" | "channel.guest_star_settings.update" | "channel.channel_points_automatic_reward_redemption.add" | "channel.channel_points_custom_reward.add" | "channel.channel_points_custom_reward.update" | "channel.channel_points_custom_reward.remove" | "channel.channel_points_custom_reward_redemption.add" | "channel.channel_points_custom_reward_redemption.update" | "channel.poll.begin" | "channel.poll.progress" | "channel.poll.end" | "channel.prediction.begin" | "channel.prediction.progress" | "channel.prediction.lock" | "channel.prediction.end" | "channel.suspicious_user.message" | "channel.suspicious_user.update" | "channel.vip.add" | "channel.vip.remove" | "channel.warning.acknowledge" | "channel.warning.send" | "channel.charity_campaign.donate" | "channel.charity_campaign.start" | "channel.charity_campaign.progress" | "channel.charity_campaign.stop" | "conduit.shard.disabled" | "drop.entitlement.grant" | "extension.bits_transaction.create" | "channel.goal.begin" | "channel.goal.progress" | "channel.goal.end" | "channel.hype_train.begin" | "channel.hype_train.progress" | "channel.hype_train.end" | "channel.shield_mode.begin" | "channel.shield_mode.end" | "channel.shoutout.create" | "channel.shoutout.receive" | "stream.online" | "stream.offline" | "user.authorization.grant" | "user.authorization.revoke" | "user.update" | "user.whisper.message";
            /** @description The version number that identifies this definition of the subscription's data. */
            version: string;
        };
        Extension: {
            /** @description Allowlisted configuration URLs for displaying the extension (the allowlist is configured on Twitch’s [developer site](https://dev.twitch.tv/console/extensions) under the **Extensions** \-> **Extension** \-> **Version** \-> **Capabilities**). */
            allowlisted_config_urls: string[];
            /** @description Allowlisted panel URLs for displaying the extension (the allowlist is configured on Twitch’s [developer site](https://dev.twitch.tv/console/extensions) under the **Extensions** \-> **Extension** \-> **Version** \-> **Capabilities**). */
            allowlisted_panel_urls: string[];
            /** @description The name of the user or organization that owns the extension. */
            author_name: string;
            /** @description A Boolean value that determines whether the extension has features that use Bits. Is **true** if the extension has features that use Bits. */
            bits_enabled: boolean;
            /**
             * @description A Boolean value that determines whether a user can install the extension on their channel. Is **true** if a user can install the extension.
             *
             *     Typically, this is set to **false** if the extension is currently in testing mode and requires users to be allowlisted (the allowlist is configured on Twitch’s [developer site](https://dev.twitch.tv/console/extensions) under the **Extensions** \-> **Extension** \-> **Version** \-> **Access**).
             */
            can_install: boolean;
            /**
             * @description The location of where the extension’s configuration is stored. Possible values are:
             *
             *     * hosted — The Extensions Configuration Service hosts the configuration.
             *     * custom — The Extension Backend Service (EBS) hosts the configuration.
             *     * none — The extension doesn't require configuration.
             * @enum {string}
             */
            configuration_location: "hosted" | "custom" | "none";
            /** @description A longer description of the extension. It appears on the details page. */
            description: string;
            /** @description A URL to the extension’s Terms of Service. */
            eula_tos_url: string;
            /** @description A Boolean value that determines whether the extension can communicate with the installed channel’s chat. Is **true** if the extension can communicate with the channel’s chat room. */
            has_chat_support: boolean;
            /** @description A URL to the default icon that’s displayed in the Extensions directory. */
            icon_url: string;
            icon_urls: components["schemas"]["ExtensionIconUrls"];
            /** @description The extension’s ID. */
            id: string;
            /** @description The extension’s name. */
            name: string;
            /** @description A URL to the extension’s privacy policy. */
            privacy_policy_url: string;
            /** @description A Boolean value that determines whether the extension wants to explicitly ask viewers to link their Twitch identity. */
            request_identity_link: boolean;
            /** @description A list of URLs to screenshots that are shown in the Extensions marketplace. */
            screenshot_urls: string[];
            /**
             * @description The extension’s state. Possible values are:
             *
             *     * Approved
             *     * AssetsUploaded
             *     * Deleted
             *     * Deprecated
             *     * InReview
             *     * InTest
             *     * PendingAction
             *     * Rejected
             *     * Released
             * @enum {string}
             */
            state: "Approved" | "AssetsUploaded" | "Deleted" | "Deprecated" | "InReview" | "InTest" | "PendingAction" | "Rejected" | "Released";
            /**
             * @description Indicates whether the extension can view the user’s subscription level on the channel that the extension is installed on. Possible values are:
             *
             *     * none — The extension can't view the user’s subscription level.
             *     * optional — The extension can view the user’s subscription level.
             * @enum {string}
             */
            subscriptions_support_level: "none" | "optional";
            /** @description A short description of the extension that streamers see when hovering over the discovery splash screen in the Extensions manager. */
            summary: string;
            /** @description The email address that users use to get support for the extension. */
            support_email: string;
            /** @description The extension’s version number. */
            version: string;
            /** @description A brief description displayed on the channel to explain how the extension works. */
            viewer_summary: string;
            /** @description Describes all views-related information such as how the extension is displayed on mobile devices. */
            views: {
                /** @description Describes how the extension is rendered if the extension may be activated as a video-component extension. */
                component: {
                    /**
                     * Format: int32
                     * @description The width value of the ratio (width : height) which determines the extension’s width, and how the extension’s iframe will resize in different video player environments.
                     */
                    aspect_ratio_x: number;
                    /**
                     * Format: int32
                     * @description The height value of the ratio (width : height) which determines the extension’s height, and how the extension’s iframe will resize in different video player environments.
                     */
                    aspect_ratio_y: number;
                    /** @description A Boolean value that determines whether to apply CSS zoom. If **true**, a CSS zoom is applied such that the size of the extension is variable but the inner dimensions are fixed based on Scale Pixels. This allows your extension to render as if it is of fixed width and height. If **false**, the inner dimensions of the extension iframe are variable, meaning your extension must implement responsiveness. */
                    autoscale: boolean;
                    /** @description A Boolean value that determines whether the extension can link to non-Twitch domains. */
                    can_link_external_content: boolean;
                    /**
                     * Format: int32
                     * @description The base width, in pixels, of the extension to use when scaling (see `autoscale`). This value is ignored if `autoscale` is **false**.
                     */
                    scale_pixels: number;
                    /**
                     * Format: int32
                     * @description The height as a percent of the maximum height of a video component extension. Values are between 1% - 100%.
                     */
                    target_height: number;
                    /** @description The HTML file that is shown to viewers on the channel page when the extension is activated in a Video - Component slot. */
                    viewer_url: string;
                };
                /** @description Describes the view that is shown to broadcasters while they are configuring your extension within the Extension Manager. */
                config: {
                    /** @description A Boolean value that determines whether the extension can link to non-Twitch domains. */
                    can_link_external_content: boolean;
                    /** @description The HTML file shown to broadcasters while they are configuring your extension within the Extension Manager. */
                    viewer_url: string;
                };
                /** @description Describes how the extension is displayed on mobile devices. */
                mobile: {
                    /** @description The HTML file that is shown to viewers on mobile devices. This page is presented to viewers as a panel behind the chat area of the mobile app. */
                    viewer_url: string;
                };
                /** @description Describes how the extension is rendered if the extension may be activated as a panel extension. */
                panel: {
                    /** @description A Boolean value that determines whether the extension can link to non-Twitch domains. */
                    can_link_external_content: boolean;
                    /**
                     * Format: int32
                     * @description The height, in pixels, of the panel component that the extension is rendered in.
                     */
                    height: number;
                    /** @description The HTML file that is shown to viewers on the channel page when the extension is activated in a Panel slot. */
                    viewer_url: string;
                };
                /** @description Describes how the extension is rendered if the extension may be activated as a video-overlay extension. */
                video_overlay: {
                    /** @description A Boolean value that determines whether the extension can link to non-Twitch domains. */
                    can_link_external_content: boolean;
                    /** @description The HTML file that is shown to viewers on the channel page when the extension is activated on the Video - Overlay slot. */
                    viewer_url: string;
                };
            };
        };
        ExtensionAnalytics: {
            /** @description The reporting window’s start and end dates, in RFC3339 format. */
            date_range: {
                /**
                 * Format: date-time
                 * @description The reporting window’s end date.
                 */
                ended_at: string;
                /**
                 * Format: date-time
                 * @description The reporting window’s start date.
                 */
                started_at: string;
            };
            /** @description An ID that identifies the extension that the report was generated for. */
            extension_id: string;
            /** @description The type of report. */
            type: string;
            /** @description The URL that you use to download the report. The URL is valid for 5 minutes. */
            URL: string;
        };
        ExtensionBitsProduct: {
            /** @description An object that contains the product's cost information. */
            cost: {
                /**
                 * Format: int32
                 * @description The product's price.
                 */
                amount: number;
                /**
                 * @description The type of currency. Possible values are:
                 *
                 *     * bits
                 * @enum {string}
                 */
                type: "bits";
            };
            /** @description The product's name as displayed in the extension. */
            display_name: string;
            /**
             * Format: date-time
             * @description The date and time, in RFC3339 format, when the product expires.
             */
            expiration: string;
            /** @description A Boolean value that indicates whether the product is in development. If **true**, the product is not available for public use. */
            in_development: boolean;
            /** @description A Boolean value that determines whether Bits product purchase events are broadcast to all instances of an extension on a channel. The events are broadcast via the `onTransactionComplete` helper callback. Is **true** if the event is broadcast to all instances. */
            is_broadcast: boolean;
            /** @description The product's SKU. The SKU is unique across an extension's products. */
            sku: string;
        };
        ExtensionConfigurationSegment: {
            /** @description The ID of the broadcaster that installed the extension. The object includes this field only if the `segment` query parameter is set to developer or broadcaster. */
            broadcaster_id?: string;
            /** @description The contents of the segment. This string may be a plain-text string or a string-encoded JSON object. */
            content: string;
            /**
             * @description The type of segment. Possible values are:
             *
             *     * broadcaster
             *     * developer
             *     * global
             * @enum {string}
             */
            segment: "broadcaster" | "developer" | "global";
            /** @description The version number that identifies this definition of the segment’s data. */
            version: string;
        };
        /** @description A dictionary that contains URLs to different sizes of the default icon. The dictionary’s key identifies the icon’s size (for example, 24x24), and the dictionary’s value contains the URL to the icon. */
        ExtensionIconUrls: {
            "24x24"?: string;
            "100x100"?: string;
            "300x200"?: string;
        };
        ExtensionLiveChannel: {
            /** @description The ID of the broadcaster that is streaming live and has installed or activated the extension. */
            broadcaster_id: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /** @description The ID of the category or game being streamed. */
            game_id: string;
            /** @description The name of the category or game being streamed. */
            game_name: string;
            /** @description The title of the broadcaster’s stream. May be an empty string if not specified. */
            title: string;
        };
        ExtensionSecret: {
            /**
             * Format: int32
             * @description The version number that identifies this definition of the secret’s data.
             */
            format_version: number;
            /** @description The list of secrets. */
            secrets: {
                /**
                 * Format: date-time
                 * @description The UTC date and time (in RFC3339 format) that you may begin using this secret to sign a JWT.
                 */
                active_at: string;
                /** @description The raw secret that you use with JWT encoding. */
                content: string;
                /**
                 * Format: date-time
                 * @description The UTC date and time (in RFC3339 format) that you must stop using this secret to decode a JWT.
                 */
                expires_at: string;
            }[];
        };
        ExtensionTransaction: {
            /** @description The ID of the broadcaster that owns the channel where the transaction occurred. */
            broadcaster_id: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /** @description An ID that identifies the transaction. */
            id: string;
            /** @description Contains details about the digital product. */
            product_data: {
                /** @description A Boolean value that determines whether the data was broadcast to all instances of the extension. Is **true** if the data was broadcast to all instances. */
                broadcast: boolean;
                /** @description Contains details about the digital product’s cost. */
                cost: {
                    /**
                     * Format: int32
                     * @description The amount exchanged for the digital product.
                     */
                    amount: number;
                    /**
                     * @description The type of currency exchanged. Possible values are:
                     *
                     *     * bits
                     * @enum {string}
                     */
                    type: "bits";
                };
                /** @description The name of the digital product. */
                displayName: string;
                /** @description Set to `twitch.ext.` \+ `<the extension's ID>`. */
                domain: string;
                /** @description This field is always empty since you may purchase only unexpired products. */
                expiration: string;
                /** @description A Boolean value that determines whether the product is in development. Is **true** if the digital product is in development and cannot be exchanged. */
                inDevelopment: boolean;
                /** @description An ID that identifies the digital product. */
                sku: string;
            };
            /**
             * @description The type of transaction. Possible values are:
             *
             *     * BITS\_IN\_EXTENSION
             * @enum {string}
             */
            product_type: "BITS_IN_EXTENSION";
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of the transaction.
             */
            timestamp: string;
            /** @description The ID of the user that purchased the digital product. */
            user_id: string;
            /** @description The user’s login name. */
            user_login: string;
            /** @description The user’s display name. */
            user_name: string;
        };
        Game: {
            /** @description A URL to the category’s or game’s box art. You must replace the `{width}x{height}` placeholder with the size of image you want. */
            box_art_url: string;
            /** @description An ID that identifies the category or game. */
            id: string;
            /** @description The ID that [IGDB](https://www.igdb.com/) uses to identify this game. If the IGDB ID is not available to Twitch, this field is set to an empty string. */
            igdb_id: string;
            /** @description The category’s or game’s name. */
            name: string;
        };
        GameAnalytics: {
            /** @description The reporting window’s start and end dates, in RFC3339 format. */
            date_range: {
                /**
                 * Format: date-time
                 * @description The reporting window’s end date.
                 */
                ended_at: string;
                /**
                 * Format: date-time
                 * @description The reporting window’s start date.
                 */
                started_at: string;
            };
            /** @description An ID that identifies the game that the report was generated for. */
            game_id: string;
            /** @description The type of report. */
            type: string;
            /** @description The URL that you use to download the report. The URL is valid for 5 minutes. */
            URL: string;
        };
        GetAdScheduleResponse: {
            /** @description A list that contains information related to the channel’s ad schedule. */
            data: {
                /**
                 * Format: int32
                 * @description The length in seconds of the scheduled upcoming ad break.
                 */
                duration: number;
                /**
                 * Format: int64
                 * @description The UTC timestamp of the broadcaster’s last ad-break, in RFC3339 format. Empty if the channel has not run an ad or is not live.
                 */
                last_ad_at: number;
                /**
                 * Format: int64
                 * @description The UTC timestamp of the broadcaster’s next scheduled ad, in RFC3339 format. `0` if the channel has no ad scheduled or is not live.
                 */
                next_ad_at: number;
                /**
                 * Format: int32
                 * @description The amount of pre-roll free time remaining for the channel in seconds. Returns 0 if they are currently not pre-roll free.
                 */
                preroll_free_time: number;
                /**
                 * Format: int32
                 * @description The number of snoozes available for the broadcaster.
                 */
                snooze_count: number;
                /**
                 * Format: int64
                 * @description The UTC timestamp when the broadcaster will gain an additional snooze, in RFC3339 format. Can be `0`.
                 */
                snooze_refresh_at: number;
            }[];
        };
        /** @deprecated */
        GetAllStreamTagsResponse: {
            /** @description The list of stream tags that the broadcaster can apply to their channel. */
            data: components["schemas"]["StreamTag"][];
            /** @description The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Set the request’s _after_ query parameter to this value to page forwards through the results. */
                cursor?: string;
            };
        };
        GetAuthorizationByUserResponse: {
            /** @description List of users and their authorized scopes. */
            data: {
                /** @description An array of all the scopes the user has granted to the client ID. */
                scopes: ("analytics:read:extensions" | "analytics:read:games" | "bits:read" | "channel:bot" | "channel:manage:ads" | "channel:read:ads" | "channel:manage:broadcast" | "channel:read:charity" | "channel:manage:clips" | "channel:edit:commercial" | "channel:read:editors" | "channel:manage:extensions" | "channel:read:goals" | "channel:read:guest_star" | "channel:manage:guest_star" | "channel:read:hype_train" | "channel:manage:moderators" | "channel:read:polls" | "channel:manage:polls" | "channel:read:predictions" | "channel:manage:predictions" | "channel:manage:raids" | "channel:read:redemptions" | "channel:manage:redemptions" | "channel:manage:schedule" | "channel:read:stream_key" | "channel:read:subscriptions" | "channel:manage:videos" | "channel:read:vips" | "channel:manage:vips" | "channel:moderate" | "clips:edit" | "editor:manage:clips" | "moderation:read" | "moderator:manage:announcements" | "moderator:manage:automod" | "moderator:read:automod_settings" | "moderator:manage:automod_settings" | "moderator:read:banned_users" | "moderator:manage:banned_users" | "moderator:read:blocked_terms" | "moderator:read:chat_messages" | "moderator:manage:blocked_terms" | "moderator:manage:chat_messages" | "moderator:read:chat_settings" | "moderator:manage:chat_settings" | "moderator:read:chatters" | "moderator:read:followers" | "moderator:read:guest_star" | "moderator:manage:guest_star" | "moderator:read:moderators" | "moderator:read:shield_mode" | "moderator:manage:shield_mode" | "moderator:read:shoutouts" | "moderator:manage:shoutouts" | "moderator:read:suspicious_users" | "moderator:manage:suspicious_users" | "moderator:read:unban_requests" | "moderator:manage:unban_requests" | "moderator:read:vips" | "moderator:read:warnings" | "moderator:manage:warnings" | "user:bot" | "user:edit" | "user:edit:broadcast" | "user:read:blocked_users" | "user:manage:blocked_users" | "user:read:broadcast" | "user:read:chat" | "user:manage:chat_color" | "user:read:email" | "user:read:emotes" | "user:read:follows" | "user:read:moderated_channels" | "user:read:subscriptions" | "user:read:whispers" | "user:manage:whispers" | "user:write:chat" | "chat:edit" | "chat:read" | "whispers:read")[];
                /** @description The user’s ID. */
                user_id: string;
                /** @description The user’s login name. */
                user_login: string;
                /** @description The user’s display name. */
                user_name: string;
            }[];
        };
        GetAutoModSettingsResponse: {
            /** @description The list of AutoMod settings. The list contains a single object that contains all the AutoMod settings. */
            data: components["schemas"]["AutoModSettings"][];
        };
        GetBannedUsersResponse: {
            /** @description The list of users that were banned or put in a timeout. */
            data: components["schemas"]["BannedUser"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        GetBitsLeaderboardResponse: {
            /** @description A list of leaderboard leaders. The leaders are returned in rank order by how much they’ve cheered. The array is empty if nobody has cheered bits. */
            data: components["schemas"]["BitsLeaderboard"][];
            /** @description The reporting window’s start and end dates, in RFC3339 format. The dates are calculated by using the _started\_at_ and _period_ query parameters. If you don’t specify the _started\_at_ query parameter, the fields contain empty strings. */
            date_range: {
                /**
                 * Format: date-time
                 * @description The reporting window’s end date.
                 */
                ended_at: string;
                /**
                 * Format: date-time
                 * @description The reporting window’s start date.
                 */
                started_at: string;
            };
            /**
             * Format: int32
             * @description The number of ranked users in `data`. This is the value in the _count_ query parameter or the total number of entries on the leaderboard, whichever is less.
             */
            total: number;
        };
        GetBlockedTermsResponse: {
            /** @description The list of blocked terms. The list is in descending order of when they were created (see the `created_at` timestamp). */
            data: components["schemas"]["BlockedTerm"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        GetBroadcasterSubscriptionsResponse: {
            /** @description The list of users that subscribe to the broadcaster. The list is empty if the broadcaster has no subscribers. */
            data: components["schemas"]["BroadcasterSubscription"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next or previous page of results. Use the cursor to set the request’s _after_ or _before_ query parameter depending on whether you’re paging forwards or backwards. */
                cursor?: string;
            };
            /**
             * Format: int32
             * @description The current number of subscriber points earned by this broadcaster. Points are based on the subscription tier of each user that subscribes to this broadcaster. For example, a Tier 1 subscription is worth 1 point, Tier 2 is worth 2 points, and Tier 3 is worth 6 points. The number of points determines the number of emote slots that are unlocked for the broadcaster (see [Subscriber Emote Slots](https://help.twitch.tv/s/article/subscriber-emote-guide#emoteslots)).
             */
            points: number;
            /**
             * Format: int32
             * @description The total number of users that subscribe to this broadcaster.
             */
            total: number;
        };
        GetChannelChatBadgesResponse: {
            /** @description The list of chat badges. The list is sorted in ascending order by `set_id`, and within a set, the list is sorted in ascending order by `id`. */
            data: components["schemas"]["ChatBadge"][];
        };
        GetChannelEditorsResponse: {
            /** @description A list of users that are editors for the specified broadcaster. The list is empty if the broadcaster doesn’t have editors. */
            data: components["schemas"]["ChannelEditor"][];
        };
        GetChannelEmotesResponse: {
            /** @description The list of emotes that the specified broadcaster created. If the broadcaster hasn't created custom emotes, the list is empty. */
            data: components["schemas"]["ChannelEmote"][];
            /** @description A templated URL. Use the values from the `id`, `format`, `scale`, and `theme_mode` fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL format](https://dev.twitch.tv/docs/irc/emotes#cdn-template). You should use this template instead of using the URLs in the `images` object. */
            template: string;
        };
        GetChannelFollowersResponse: {
            /** @description The list of users that follow the specified broadcaster. The list is in descending order by `followed_at` (with the most recent follower first). The list is empty if nobody follows the broadcaster, the specified `user_id` isn’t in the follower list, the user access token is missing the **moderator:read:followers** scope, or the user isn’t the broadcaster or moderator for the channel. */
            data: {
                /**
                 * Format: date-time
                 * @description The UTC timestamp when the user started following the broadcaster.
                 */
                followed_at: string;
                /** @description An ID that uniquely identifies the user that’s following the broadcaster. */
                user_id: string;
                /** @description The user’s login name. */
                user_login: string;
                /** @description The user’s display name. */
                user_name: string;
            }[];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read more](https://dev.twitch.tv/docs/api/guide#pagination). */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
            /**
             * Format: int32
             * @description The total number of users that follow this broadcaster. As someone pages through the list, the number of users may change as users follow or unfollow the broadcaster.
             */
            total: number;
        };
        GetChannelGuestStarSettingsResponse: {
            /** @description View only token to generate browser source URLs */
            browser_source_token: string;
            /**
             * @description This setting determines how the guests within a session should be laid out within the browser source. Can be one of the following values:
             *
             *     * `TILED_LAYOUT`: All live guests are tiled within the browser source with the same size.
             *     * `SCREENSHARE_LAYOUT`: All live guests are tiled within the browser source with the same size. If there is an active screen share, it is sized larger than the other guests.
             * @enum {string}
             */
            group_layout: "TILED_LAYOUT" | "SCREENSHARE_LAYOUT";
            /** @description Flag determining if Browser Sources subscribed to sessions on this channel should output audio */
            is_browser_source_audio_enabled: boolean;
            /** @description Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot. */
            is_moderator_send_live_enabled: boolean;
            /**
             * Format: int32
             * @description Number of slots the Guest Star call interface will allow the host to add to a call. Required to be between 1 and 6.
             */
            slot_count: number;
        };
        GetChannelInformationResponse: {
            /** @description A list that contains information about the specified channels. The list is empty if the specified channels weren’t found. */
            data: components["schemas"]["ChannelInformation"][];
        };
        GetChannelStreamScheduleResponse: {
            /** @description The broadcaster’s streaming schedule. */
            data: {
                /** @description The ID of the broadcaster that owns the broadcast schedule. */
                broadcaster_id: string;
                /** @description The broadcaster’s login name. */
                broadcaster_login: string;
                /** @description The broadcaster’s display name. */
                broadcaster_name: string;
                /** @description The information used to page through a list of results. The object is empty if there are no more pages left to page through. [Read more](https://dev.twitch.tv/docs/api/guide#pagination). */
                pagination?: {
                    /** @description The cursor used to get the next page of results. Set the request’s _after_ query parameter to this value. */
                    cursor?: string;
                };
                /** @description The list of broadcasts in the broadcaster’s streaming schedule. */
                segments: components["schemas"]["ChannelStreamScheduleSegment"][];
                /** @description The dates when the broadcaster is on vacation and not streaming. Is set to **null** if vacation mode is not enabled. */
                vacation: {
                    /**
                     * Format: date-time
                     * @description The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation ends.
                     */
                    end_time: string;
                    /**
                     * Format: date-time
                     * @description The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation starts.
                     */
                    start_time: string;
                };
            };
        };
        GetChannelTeamsResponse: {
            /** @description The list of teams that the broadcaster is a member of. Returns an empty array if the broadcaster is not a member of a team. */
            data: components["schemas"]["ChannelTeam"][];
        };
        GetCharityCampaignDonationsResponse: {
            /** @description A list that contains the donations that users have made to the broadcaster’s charity campaign. The list is empty if the broadcaster is not currently running a charity campaign; the donation information is not available after the campaign ends. */
            data: components["schemas"]["CharityCampaignDonation"][];
            /** @description An object that contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        GetCharityCampaignResponse: {
            /** @description A list that contains the charity campaign that the broadcaster is currently running. The list is empty if the broadcaster is not running a charity campaign; the campaign information is not available after the campaign ends. */
            data: components["schemas"]["CharityCampaign"][];
        };
        GetChatSettingsResponse: {
            /** @description The list of chat settings. The list contains a single object with all the settings. */
            data: components["schemas"]["ChatSettings"][];
        };
        GetChattersResponse: {
            /** @description The list of users that are connected to the broadcaster’s chat room. The list is empty if no users are connected to the chat room. */
            data: components["schemas"]["Chatter"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
            /**
             * Format: int32
             * @description The total number of users that are connected to the broadcaster’s chat room. As you page through the list, the number of users may change as users join and leave the chat room.
             */
            total: number;
        };
        GetCheermotesResponse: {
            /** @description The list of Cheermotes. The list is in ascending order by the `order` field’s value. */
            data: components["schemas"]["Cheermote"][];
        };
        GetClipsDownloadResponse: {
            /** @description List of clips and their download URLs. */
            data: {
                /** @description An ID that uniquely identifies the clip. */
                clip_id: string;
                /** @description The landscape URL to download the clip. This field is `null` if the URL is not available. */
                landscape_download_url: string;
                /** @description The portrait URL to download the clip. This field is `null` if the URL is not available. */
                portrait_download_url: string;
            }[];
        };
        GetClipsResponse: {
            /** @description The list of video clips. For clips returned by _game\_id_ or _broadcaster\_id_, the list is in descending order by view count. For lists returned by _id_, the list is in the same order as the input IDs. */
            data: components["schemas"]["Clip"][];
            /** @description The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Set the request’s _after_ or _before_ query parameter to this value depending on whether you’re paging forwards or backwards. */
                cursor?: string;
            };
        };
        GetConduitShardsResponse: {
            /** @description List of information about a conduit's shards. */
            data: {
                /** @description Shard ID. */
                id: string;
                /**
                 * @description The shard status. The subscriber receives events only for enabled shards. Possible values are:
                 *
                 *     * enabled — The shard is enabled.
                 *     * webhook\_callback\_verification\_pending — The shard is pending verification of the specified callback URL.
                 *     * webhook\_callback\_verification\_failed — The specified callback URL failed verification.
                 *     * notification\_failures\_exceeded — The notification delivery failure rate was too high.
                 *     * websocket\_disconnected — The client closed the connection.
                 *     * websocket\_failed\_ping\_pong — The client failed to respond to a ping message.
                 *     * websocket\_received\_inbound\_traffic — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message).
                 *     * websocket\_internal\_error — The Twitch WebSocket server experienced an unexpected error.
                 *     * websocket\_network\_timeout — The Twitch WebSocket server timed out writing the message to the client.
                 *     * websocket\_network\_error — The Twitch WebSocket server experienced a network error writing the message to the client.
                 *     * websocket\_failed\_to\_reconnect - The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.
                 * @enum {string}
                 */
                status: "enabled" | "webhook_callback_verification_pending" | "webhook_callback_verification_failed" | "notification_failures_exceeded" | "websocket_disconnected" | "websocket_failed_ping_pong" | "websocket_received_inbound_traffic" | "websocket_internal_error" | "websocket_network_timeout" | "websocket_network_error" | "websocket_failed_to_reconnect";
                /** @description The transport details used to send the notifications. */
                transport: {
                    /** @description The callback URL where the notifications are sent. Included only if method is set to webhook. */
                    callback?: string;
                    /**
                     * Format: date-time
                     * @description The UTC date and time that the WebSocket connection was established. Included only if method is set to websocket.
                     */
                    connected_at?: string;
                    /**
                     * Format: date-time
                     * @description The UTC date and time that the WebSocket connection was lost. Included only if method is set to websocket.
                     */
                    disconnected_at?: string;
                    /**
                     * @description The transport method. Possible values are:
                     *
                     *     * webhook
                     *     * websocket
                     * @enum {string}
                     */
                    method: "webhook" | "websocket";
                    /** @description An ID that identifies the WebSocket that notifications are sent to. Included only if method is set to websocket. */
                    session_id?: string;
                };
            }[];
            /** @description Contains information used to page through a list of results. The object is empty if there are no more pages left to page through. */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter. */
                cursor?: string;
            };
        };
        GetConduitsResponse: {
            /** @description List of information about the client’s conduits. */
            data: {
                /** @description Conduit ID. */
                id: string;
                /**
                 * Format: int32
                 * @description Number of shards associated with this conduit.
                 */
                shard_count: number;
            }[];
        };
        GetContentClassificationLabelsResponse: {
            /** @description A list that contains information about the available content classification labels. */
            data: components["schemas"]["ContentClassificationLabel"][];
        };
        GetCreatorGoalsResponse: {
            /** @description The list of goals. The list is empty if the broadcaster hasn’t created goals. */
            data: components["schemas"]["CreatorGoal"][];
        };
        GetCustomRewardRedemptionResponse: {
            /** @description The list of redemptions for the specified reward. The list is empty if there are no redemptions that match the redemption criteria. */
            data: components["schemas"]["CustomRewardRedemption"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.[Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        GetCustomRewardResponse: {
            /** @description A list of custom rewards. The list is in ascending order by `id`. If the broadcaster hasn’t created custom rewards, the list is empty. */
            data: components["schemas"]["CustomReward"][];
        };
        GetDropsEntitlementsResponse: {
            /** @description The list of entitlements. */
            data: components["schemas"]["DropsEntitlement"][];
            /** @description The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Set the request’s _after_ query parameter to this value to page forward through the results. */
                cursor?: string;
            };
        };
        GetEmoteSetsResponse: {
            /** @description The list of emotes found in the specified emote sets. The list is empty if none of the IDs were found. The list is in the same order as the set IDs specified in the request. Each set contains one or more emoticons. */
            data: components["schemas"]["Emote"][];
            /** @description A templated URL. Use the values from the `id`, `format`, `scale`, and `theme_mode` fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL format](https://dev.twitch.tv/docs/irc/emotes#cdn-template). You should use this template instead of using the URLs in the `images` object. */
            template: string;
        };
        GetEventSubSubscriptionsResponse: {
            /** @description The list of subscriptions. The list is ordered by the oldest subscription first. The list is empty if the client hasn't created subscriptions or there are no subscriptions that match the specified filter criteria. */
            data: components["schemas"]["EventSubSubscription"][];
            /**
             * Format: int32
             * @description The maximum total cost that you're allowed to incur for all subscriptions that you create.
             */
            max_total_cost: number;
            /** @description An object that contains the cursor used to get the next page of subscriptions. The object is empty if there are no more pages to get. The number of subscriptions returned per page is undertermined. */
            pagination?: {
                /** @description The cursor value that you set the _after_ query parameter to. */
                cursor?: string;
            };
            /**
             * Format: int32
             * @description The total number of subscriptions that you've created.
             */
            total: number;
            /**
             * Format: int32
             * @description The sum of all of your subscription costs. [Learn More](https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits)
             */
            total_cost: number;
        };
        GetExtensionAnalyticsResponse: {
            /** @description A list of reports. The reports are returned in no particular order; however, the data within each report is in ascending order by date (newest first). The report contains one row of data per day of the reporting window; the report contains rows for only those days that the extension was used. The array is empty if there are no reports. */
            data: components["schemas"]["ExtensionAnalytics"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        GetExtensionBitsProductsResponse: {
            /** @description A list of Bits products that the extension created. The list is in ascending SKU order. The list is empty if the extension hasn’t created any products or they’re all expired or disabled. */
            data: components["schemas"]["ExtensionBitsProduct"][];
        };
        GetExtensionConfigurationSegmentResponse: {
            /** @description The list of requested configuration segments. The list is returned in the same order that you specified the list of segments in the request. */
            data: components["schemas"]["ExtensionConfigurationSegment"][];
        };
        GetExtensionLiveChannelsResponse: {
            /** @description The list of broadcasters that are streaming live and that have installed or activated the extension. */
            data: components["schemas"]["ExtensionLiveChannel"][];
            /** @description This field contains the cursor used to page through the results. The field is empty if there are no more pages left to page through. Note that this field is a string compared to other endpoints that use a **Pagination** object. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: string;
        };
        GetExtensionSecretsResponse: {
            /** @description The list of shared secrets that the extension created. */
            data: components["schemas"]["ExtensionSecret"][];
        };
        GetExtensionsResponse: {
            /** @description A list that contains the specified extension. */
            data: components["schemas"]["Extension"][];
        };
        GetExtensionTransactionsResponse: {
            /** @description The list of transactions. */
            data: components["schemas"]["ExtensionTransaction"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        GetFollowedChannelsResponse: {
            /** @description The list of broadcasters that the user follows. The list is in descending order by `followed_at` (with the most recently followed broadcaster first). The list is empty if the user doesn’t follow anyone. */
            data: {
                /** @description An ID that uniquely identifies the broadcaster that this user is following. */
                broadcaster_id: string;
                /** @description The broadcaster’s login name. */
                broadcaster_login: string;
                /** @description The broadcaster’s display name. */
                broadcaster_name: string;
                /**
                 * Format: date-time
                 * @description The UTC timestamp when the user started following the broadcaster.
                 */
                followed_at: string;
            }[];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read more](https://dev.twitch.tv/docs/api/guide#pagination). */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
            /**
             * Format: int32
             * @description The total number of broadcasters that the user follows. As someone pages through the list, the number may change as the user follows or unfollows broadcasters.
             */
            total: number;
        };
        GetFollowedStreamsResponse: {
            /** @description The list of live streams of broadcasters that the specified user follows. The list is in descending order by the number of viewers watching the stream. Because viewers come and go during a stream, it’s possible to find duplicate or missing streams in the list as you page through the results. The list is empty if none of the followed broadcasters are streaming live. */
            data: components["schemas"]["Stream"][];
            /** @description The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Set the request’s _after_ query parameter to this value. */
                cursor?: string;
            };
        };
        GetGameAnalyticsResponse: {
            /** @description A list of reports. The reports are returned in no particular order; however, the data within each report is in ascending order by date (newest first). The report contains one row of data per day of the reporting window; the report contains rows for only those days that the game was used. A report is available only if the game was broadcast for at least 5 hours over the reporting period. The array is empty if there are no reports. */
            data: components["schemas"]["GameAnalytics"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        GetGamesResponse: {
            /** @description The list of categories and games. The list is empty if the specified categories and games weren’t found. */
            data: components["schemas"]["Game"][];
        };
        GetGlobalChatBadgesResponse: {
            /** @description The list of chat badges. The list is sorted in ascending order by `set_id`, and within a set, the list is sorted in ascending order by `id`. */
            data: components["schemas"]["ChatBadge"][];
        };
        GetGlobalEmotesResponse: {
            /** @description The list of global emotes. */
            data: components["schemas"]["GlobalEmote"][];
            /** @description A templated URL. Use the values from the `id`, `format`, `scale`, and `theme_mode` fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL format](https://dev.twitch.tv/docs/irc/emotes#cdn-template). You should use this template instead of using the URLs in the `images` object. */
            template: string;
        };
        GetGuestStarInvitesResponse: {
            /** @description A list of invite objects describing the invited user as well as their ready status. */
            data: components["schemas"]["GuestStarInvite"][];
        };
        GetGuestStarSessionResponse: {
            /** @description Summary of the session details */
            data: components["schemas"]["GuestStarSession"][];
        };
        GetHypeTrainStatusResponse: {
            /** @description An object with information about the channel’s Hype Train records. Null if a Hype Train has not occurred. */
            all_time_high: {
                /**
                 * Format: date-time
                 * @description The time when the record was achieved.
                 */
                achieved_at: string;
                /**
                 * Format: int32
                 * @description The level of the record Hype Train.
                 */
                level: number;
                /**
                 * Format: int32
                 * @description Total points contributed to the record Hype Train.
                 */
                total: number;
            };
            /** @description A list that contains information related to the channel’s Hype Train. */
            data: {
                /** @description An object describing the current Hype Train. Null if a Hype Train is not active. */
                current: {
                    /** @description The broadcaster ID. */
                    broadcaster_user_id: string;
                    /** @description The broadcaster login. */
                    broadcaster_user_login: string;
                    /** @description The broadcaster display name. */
                    broadcaster_user_name: string;
                    /**
                     * Format: int32
                     * @description The number of points required to reach the next level.
                     */
                    goal: number;
                    /** @description The Hype Train ID. */
                    id: string;
                    /**
                     * Format: int32
                     * @description The current level of the Hype Train.
                     */
                    level: number;
                    /**
                     * Format: int32
                     * @description The number of points contributed to the Hype Train at the current level.
                     */
                    progress: number;
                    /** @description The contributors with the most points contributed. */
                    top_contributions: {
                        /**
                         * Format: date-time
                         * @description The time when the Hype Train expires. The expiration is extended when the Hype Train reaches a new level.
                         */
                        expires_at: string;
                        /** @description Indicates if the Hype Train is shared. When true, shared\_train\_participants will contain the list of broadcasters the train is shared with. */
                        is_shared_train: boolean;
                        /** @description A list containing the broadcasters participating in the shared Hype Train. Null if the Hype Train is not shared. */
                        shared_train_participants: {
                            /** @description The broadcaster ID. */
                            broadcaster_user_id: string;
                            /** @description The broadcaster login. */
                            broadcaster_user_login: string;
                            /** @description The broadcaster display name. */
                            broadcaster_user_name: string;
                        }[];
                        /**
                         * Format: date-time
                         * @description The time when the Hype Train started.
                         */
                        started_at: string;
                        /**
                         * Format: int32
                         * @description The total number of points contributed for the type.
                         */
                        total: number;
                        /**
                         * @description The type of the Hype Train. Possible values are:
                         *
                         *     * **treasure**
                         *     * **golden\_kappa**
                         *     * **regular**
                         *
                         *     [Learn More](https://help.twitch.tv/s/article/hype-train-guide#special)
                         * @enum {string}
                         */
                        type: "treasure" | "golden_kappa" | "regular";
                        /** @description The ID of the user that made the contribution. */
                        user_id: string;
                        /** @description The user’s login name. */
                        user_login: string;
                        /** @description The user’s display name. */
                        user_name: string;
                    }[];
                    /**
                     * Format: int32
                     * @description Total points contributed to the Hype Train.
                     */
                    total: number;
                };
            }[];
            /** @description An object with information about the channel’s shared Hype Train records. Null if a Hype Train has not occurred. */
            shared_all_time_high: {
                /**
                 * Format: date-time
                 * @description The time when the record was achieved.
                 */
                achieved_at: string;
                /**
                 * Format: int32
                 * @description The level of the record Hype Train.
                 */
                level: number;
                /**
                 * Format: int32
                 * @description Total points contributed to the record Hype Train.
                 */
                total: number;
            };
        };
        GetModeratedChannelsResponse: {
            /** @description The list of channels that the user has moderator privileges in. */
            data: {
                /** @description An ID that uniquely identifies the channel this user can moderate. */
                broadcaster_id: string;
                /** @description The channel’s login name. */
                broadcaster_login: string;
                /** @description The channels’ display name. */
                broadcaster_name: string;
            }[];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter. */
                cursor?: string;
            };
        };
        GetModeratorsResponse: {
            /** @description The list of moderators. */
            data: components["schemas"]["UserModerator"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        GetPollsResponse: {
            /** @description A list of polls. The polls are returned in descending order of start time unless you specify IDs in the request, in which case they're returned in the same order as you passed them in the request. The list is empty if the broadcaster hasn't created polls. */
            data: components["schemas"]["Poll"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request's _after_ query parameter. */
                cursor?: string;
            };
        };
        GetPredictionsResponse: {
            /** @description The broadcaster’s list of Channel Points Predictions. The list is sorted in descending ordered by when the prediction began (the most recent prediction is first). The list is empty if the broadcaster hasn’t created predictions. */
            data: components["schemas"]["Prediction"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        GetReleasedExtensionsResponse: {
            /** @description A list that contains the specified extension. */
            data: components["schemas"]["Extension"][];
        };
        GetSharedChatSessionResponse: {
            data: {
                /**
                 * Format: date-time
                 * @description The UTC date and time (in RFC3339 format) for when the session was created.
                 */
                created_at: string;
                /** @description The User ID of the host channel. */
                host_broadcaster_id: string;
                /** @description The list of participants in the session. */
                participants: {
                    /** @description The User ID of the participant channel. */
                    broadcaster_id: string;
                }[];
                /** @description The unique identifier for the shared chat session. */
                session_id: string;
                /**
                 * Format: date-time
                 * @description The UTC date and time (in RFC3339 format) for when the session was last updated.
                 */
                updated_at: string;
            }[];
        };
        GetShieldModeStatusResponse: {
            /** @description A list that contains a single object with the broadcaster’s Shield Mode status. */
            data: {
                /** @description A Boolean value that determines whether Shield Mode is active. Is **true** if the broadcaster activated Shield Mode; otherwise, **false**. */
                is_active: boolean;
                /**
                 * Format: date-time
                 * @description The UTC timestamp (in RFC3339 format) of when Shield Mode was last activated. Is an empty string if Shield Mode hasn’t been previously activated.
                 */
                last_activated_at: string;
                /** @description An ID that identifies the moderator that last activated Shield Mode. Is an empty string if Shield Mode hasn’t been previously activated. */
                moderator_id: string;
                /** @description The moderator’s login name. Is an empty string if Shield Mode hasn’t been previously activated. */
                moderator_login: string;
                /** @description The moderator’s display name. Is an empty string if Shield Mode hasn’t been previously activated. */
                moderator_name: string;
            }[];
        };
        GetStreamKeyResponse: {
            /** @description A list that contains the channel’s stream key. */
            data: {
                /** @description The channel’s stream key. */
                stream_key: string;
            }[];
        };
        GetStreamMarkersResponse: {
            /** @description The list of markers grouped by the user that created the marks. */
            data: components["schemas"]["StreamMarkers"][];
            /** @description The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Set the request’s _after_ or _before_ query parameter to this value depending on whether you’re paging forwards or backwards. */
                cursor?: string;
            };
        };
        GetStreamsResponse: {
            /** @description The list of streams. */
            data: components["schemas"]["Stream"][];
            /** @description The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Set the request’s _after_ or _before_ query parameter to this value depending on whether you’re paging forwards or backwards. */
                cursor?: string;
            };
        };
        /** @deprecated */
        GetStreamTagsResponse: {
            /** @description The list of stream tags. The list is empty if the broadcaster or Twitch hasn’t added tags to the broadcaster’s channel. */
            data: components["schemas"]["StreamTag"][];
        };
        GetTeamsResponse: {
            /** @description A list that contains the single team that you requested. */
            data: components["schemas"]["Team"][];
        };
        GetTopGamesResponse: {
            /** @description The list of broadcasts. The broadcasts are sorted by the number of viewers, with the most popular first. */
            data: components["schemas"]["Game"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ or _before_ query parameter to get the next or previous page of results. */
                cursor?: string;
            };
        };
        GetUnbanRequestsResponse: {
            /** @description A list that contains information about the channel's unban requests. */
            data: {
                /** @description User ID of broadcaster whose channel is receiving the unban request. */
                broadcaster_id: string;
                /** @description The broadcaster's login name. */
                broadcaster_login: string;
                /** @description The broadcaster's display name. */
                broadcaster_name: string;
                /**
                 * Format: date-time
                 * @description Timestamp of when the unban request was created.
                 */
                created_at: string;
                /** @description Unban request ID. */
                id: string;
                /** @description User ID of moderator who approved/denied the request. */
                moderator_id: string;
                /** @description The moderator's login name. */
                moderator_login: string;
                /** @description The moderator's display name. */
                moderator_name: string;
                /** @description Text input by the resolver (moderator) of the unban. request */
                resolution_text: string;
                /**
                 * Format: date-time
                 * @description Timestamp of when moderator/broadcaster approved or denied the request.
                 */
                resolved_at: string;
                /**
                 * @description Status of the request. One of:
                 *
                 *     * pending
                 *     * approved
                 *     * denied
                 *     * acknowledged
                 *     * canceled
                 */
                status: string;
                /** @description Text of the request from the requesting user. */
                text: string;
                /** @description User ID of the requestor who is asking for an unban. */
                user_id: string;
                /** @description The user's login name. */
                user_login: string;
                /** @description The user's display name. */
                user_name: string;
            }[];
            /** @description Contains information used to page through a list of results. The object is empty if there are no more pages left to page through. */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter. */
                cursor?: string;
            };
        };
        GetUserActiveExtensionsResponse: {
            /** @description The active extensions that the broadcaster has installed. */
            data?: {
                /** @description A dictionary that contains the data for a video-component extension. The dictionary’s key is a sequential number beginning with 1\. The following fields contain the component’s data for each key. */
                component?: {
                    [key: string]: components["schemas"]["UserExtensionComponent"];
                };
                /** @description A dictionary that contains the data for a video-overlay extension. The dictionary’s key is a sequential number beginning with 1\. The following fields contain the overlay’s data for each key. */
                overlay?: {
                    [key: string]: components["schemas"]["UserExtensionOverlay"];
                };
                /** @description A dictionary that contains the data for a panel extension. The dictionary’s key is a sequential number beginning with 1\. The following fields contain the panel’s data for each key. */
                panel?: {
                    [key: string]: components["schemas"]["UserExtensionPanel"];
                };
            };
        };
        GetUserBlockListResponse: {
            /** @description The list of blocked users. The list is in descending order by when the user was blocked. */
            data: components["schemas"]["UserBlockList"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.[Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        GetUserChatColorResponse: {
            /** @description The list of users and the color code they use for their name. */
            data: components["schemas"]["UserChatColor"][];
        };
        GetUserEmotesResponse: {
            data: {
                /** @description An ID that identifies the emote set that the emote belongs to. */
                emote_set_id: string;
                /**
                 * @description The type of emote. The possible values are:
                 *
                 *     * **none** — No emote type was assigned to this emote.
                 *     * **bitstier** — A Bits tier emote.
                 *     * **follower** — A follower emote.
                 *     * **subscriptions** — A subscriber emote.
                 *     * **channelpoints** — An emote granted by using channel points.
                 *     * **rewards** — An emote granted to the user through a special event.
                 *     * **hypetrain** — An emote granted for participation in a Hype Train.
                 *     * **prime** — An emote granted for linking an Amazon Prime account.
                 *     * **turbo** — An emote granted for having Twitch Turbo.
                 *     * **smilies** — Emoticons supported by Twitch.
                 *     * **globals** — An emote accessible by everyone.
                 *     * **owl2019** — Emotes related to Overwatch League 2019.
                 *     * **twofactor** — Emotes granted by enabling two-factor authentication on an account.
                 *     * **limitedtime** — Emotes that were granted for only a limited time.
                 * @enum {string}
                 */
                emote_type: "none" | "bitstier" | "follower" | "subscriptions" | "channelpoints" | "rewards" | "hypetrain" | "prime" | "turbo" | "smilies" | "globals" | "owl2019" | "twofactor" | "limitedtime";
                /**
                 * @description The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only static. But if the emote is available as a static PNG and an animated GIF, the array contains static and animated.
                 *
                 *     * **animated** — An animated GIF is available for this emote.
                 *     * **static** — A static PNG file is available for this emote.
                 */
                format: string[];
                /** @description An ID that uniquely identifies this emote. */
                id: string;
                /** @description The User ID of broadcaster whose channel is receiving the unban request. */
                name: string;
                /** @description The ID of the broadcaster who owns the emote. */
                owner_id: string;
                /**
                 * @description The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0\.
                 *
                 *     * **1.0** — A small version (28px x 28px) is available.
                 *     * **2.0** — A medium version (56px x 56px) is available.
                 *     * **3.0** — A large version (112px x 112px) is available.
                 */
                scale: string[];
                /**
                 * @description The background themes that the emote is available in.
                 *
                 *     * **dark**
                 *     * **light**
                 */
                theme_mode: string[];
            }[];
            /**
             * @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.
             *
             *      For more information about pagination support, see [Twitch API Guide - Pagination](https://dev.twitch.tv/docs/api/guide#pagination).
             */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter. */
                cursor?: string;
            };
            /**
             * @description A templated URL. Uses the values from the _id_, _format_, _scale_, and _theme\_mode_ fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote.
             *
             *      For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL](https://dev.twitch.tv/docs/irc/emotes#cdn-template) format.
             */
            template: string;
        };
        GetUserExtensionsResponse: {
            /** @description The list of extensions that the user has installed. */
            data: components["schemas"]["UserExtension"][];
        };
        GetUsersResponse: {
            /** @description The list of users. */
            data: components["schemas"]["User"][];
        };
        GetVideosResponse: {
            /** @description The list of published videos that match the filter criteria. */
            data: components["schemas"]["Video"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request's _after_ or _before_ query parameter depending on whether you're paging forwards or backwards through the results. */
                cursor?: string;
            };
        };
        GetVIPsResponse: {
            /** @description The list of VIPs. The list is empty if the broadcaster doesn’t have VIP users. */
            data: components["schemas"]["UserVip"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        GlobalEmote: {
            /**
             * @description The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only `static`. But if the emote is available as a static PNG and an animated GIF, the array contains `static` and `animated`. The possible formats are:
             *
             *     * animated — An animated GIF is available for this emote.
             *     * static — A static PNG file is available for this emote.
             */
            format: ("animated" | "static")[];
            /** @description An ID that identifies this emote. */
            id: string;
            /**
             * @description The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background.
             *
             *     **NOTE:** You should use the templated URL in the `template` field to fetch the image instead of using these URLs.
             */
            images: {
                /** @description A URL to the small version (28px x 28px) of the emote. */
                url_1x: string;
                /** @description A URL to the medium version (56px x 56px) of the emote. */
                url_2x: string;
                /** @description A URL to the large version (112px x 112px) of the emote. */
                url_4x: string;
            };
            /** @description The name of the emote. This is the name that viewers type in the chat window to get the emote to appear. */
            name: string;
            /**
             * @description The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0\. Possible sizes are:
             *
             *     * 1.0 — A small version (28px x 28px) is available.
             *     * 2.0 — A medium version (56px x 56px) is available.
             *     * 3.0 — A large version (112px x 112px) is available.
             */
            scale: ("1.0" | "2.0" | "3.0")[];
            /**
             * @description The background themes that the emote is available in. Possible themes are:
             *
             *     * dark
             *     * light
             */
            theme_mode: ("dark" | "light")[];
        };
        Guest: {
            /**
             * Format: date-time
             * @description Timestamp when this guest was assigned a slot in the session.
             */
            assigned_at: string;
            /** @description Information about the guest’s audio settings */
            audio_settings: {
                /** @description Flag determining whether the guest has an appropriate audio device available to be transmitted to the session. */
                is_available: boolean;
                /** @description Flag determining whether the guest is allowing their audio to be transmitted to the session. */
                is_guest_enabled: boolean;
                /** @description Flag determining whether the host is allowing the guest’s audio to be seen or heard within the session. */
                is_host_enabled: boolean;
            };
            /** @description Flag determining whether or not the guest is visible in the browser source in the host’s streaming software. */
            is_live: boolean;
            /**
             * @description ID representing this guest’s slot assignment.
             *
             *     * Host is always in slot "0"
             *     * Guests are assigned the following consecutive IDs (e.g, "1", "2", "3", etc)
             *     * Screen Share is represented as a special guest with the ID "SCREENSHARE"
             *     * The identifier here matches the ID referenced in browser source links used in broadcasting software.
             */
            slot_id: string;
            /** @description Display name of the guest assigned to this slot. */
            user_display_name: string;
            /** @description User ID of the guest assigned to this slot. */
            user_id: string;
            /** @description Login of the guest assigned to this slot. */
            user_login: string;
            /** @description Information about the guest’s video settings */
            video_settings: {
                /** @description Flag determining whether the guest has an appropriate video device available to be transmitted to the session. */
                is_available: boolean;
                /** @description Flag determining whether the guest is allowing their video to be transmitted to the session. */
                is_guest_enabled: boolean;
                /** @description Flag determining whether the host is allowing the guest’s video to be seen or heard within the session. */
                is_host_enabled: boolean;
            };
            /**
             * Format: int32
             * @description Value from 0 to 100 representing the host’s volume setting for this guest.
             */
            volume: number;
        };
        GuestStarInvite: {
            /**
             * Format: date-time
             * @description Timestamp when this user was invited to the session.
             */
            invited_at: string;
            /** @description Flag signaling that the invited user has an audio device available for sharing. */
            is_audio_available: boolean;
            /** @description Flag signaling that the invited user has chosen to disable their local audio device. The user has muted themselves, but they may choose to unmute their audio feed upon joining the session. */
            is_audio_enabled: boolean;
            /** @description Flag signaling that the invited user has a video device available for sharing. */
            is_video_available: boolean;
            /** @description Flag signaling that the invited user has chosen to disable their local video device. The user has hidden themselves, but they may choose to reveal their video feed upon joining the session. */
            is_video_enabled: boolean;
            /**
             * @description Status representing the invited user’s join state. Can be one of the following:
             *
             *     * `INVITED`: The user has been invited to the session but has not acknowledged it.
             *     * `ACCEPTED`: The invited user has acknowledged the invite and joined the waiting room, but may still be setting up their media devices or otherwise preparing to join the call.
             *     * `READY`: The invited user has signaled they are ready to join the call from the waiting room.
             */
            status: string;
            /** @description Twitch User ID corresponding to the invited guest */
            user_id: string;
        };
        GuestStarSession: {
            /** @description List of guests currently interacting with the Guest Star session. */
            guests: components["schemas"]["Guest"][];
            /** @description ID uniquely representing the Guest Star session. */
            id: string;
        };
        ManageHeldAutoModMessagesBody: {
            /**
             * @description The action to take for the message. Possible values are:
             *
             *     * ALLOW
             *     * DENY
             * @enum {string}
             */
            action: "ALLOW" | "DENY";
            /** @description The ID of the message to allow or deny. */
            msg_id: string;
            /** @description The moderator who is approving or denying the held message. This ID must match the user ID in the access token. */
            user_id: string;
        };
        ModifyChannelInformationBody: {
            /** @description The user’s preferred language. Set the value to an ISO 639-1 two-letter language code (for example, _en_ for English). Set to “other” if the user’s preferred language is not a Twitch supported language. The language isn’t updated if the language code isn’t a Twitch supported language. */
            broadcaster_language?: string;
            /** @description List of labels that should be set as the Channel’s CCLs. */
            content_classification_labels?: {
                /**
                 * @description ID of the [Content Classification Labels](https://help.twitch.tv/s/article/content-classification-labels) that must be added/removed from the channel. Can be one of the following values:
                 *
                 *     * DebatedSocialIssuesAndPolitics
                 *     * DrugsIntoxication
                 *     * SexualThemes
                 *     * ViolentGraphic
                 *     * Gambling
                 *     * ProfanityVulgarity
                 * @enum {string}
                 */
                id: "DebatedSocialIssuesAndPolitics" | "DrugsIntoxication" | "SexualThemes" | "ViolentGraphic" | "Gambling" | "ProfanityVulgarity";
                /** @description Boolean flag indicating whether the label should be enabled (true) or disabled for the channel. */
                is_enabled: boolean;
            }[];
            /**
             * Format: int32
             * @description The number of seconds you want your broadcast buffered before streaming it live. The delay helps ensure fairness during competitive play. Only users with Partner status may set this field. The maximum delay is 900 seconds (15 minutes).
             */
            delay?: number;
            /** @description The ID of the game that the user plays. The game is not updated if the ID isn’t a game ID that Twitch recognizes. To unset this field, use “0” or “” (an empty string). */
            game_id?: string;
            /** @description Boolean flag indicating if the channel has branded content. */
            is_branded_content?: boolean;
            /**
             * @description A list of channel-defined tags to apply to the channel. To remove all tags from the channel, set tags to an empty array. Tags help identify the content that the channel streams. [Learn More](https://help.twitch.tv/s/article/guide-to-tags)
             *
             *     A channel may specify a maximum of 10 tags. Each tag is limited to a maximum of 25 characters and may not be an empty string or contain spaces or special characters. Tags are case insensitive. For readability, consider using camelCasing or PascalCasing.
             */
            tags?: string[];
            /** @description The title of the user’s stream. You may not set this field to an empty string. */
            title?: string;
        };
        Poll: {
            /**
             * Format: int32
             * @description Not used; will be set to 0.
             */
            bits_per_vote: number;
            /** @description Not used; will be set to **false**. */
            bits_voting_enabled: boolean;
            /** @description An ID that identifies the broadcaster that created the poll. */
            broadcaster_id: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /**
             * Format: int32
             * @description The number of points the viewer must spend to cast one additional vote.
             */
            channel_points_per_vote: number;
            /** @description A Boolean value that indicates whether viewers may cast additional votes using Channel Points. For information about Channel Points, see [Channel Points Guide](https://help.twitch.tv/s/article/channel-points-guide). */
            channel_points_voting_enabled: boolean;
            /** @description A list of choices that viewers can choose from. The list will contain a minimum of two choices and up to a maximum of five choices. */
            choices: {
                /**
                 * Format: int32
                 * @description Not used; will be set to 0.
                 */
                bits_votes: number;
                /**
                 * Format: int32
                 * @description The number of votes cast using Channel Points.
                 */
                channel_points_votes: number;
                /** @description An ID that identifies this choice. */
                id: string;
                /** @description The choice’s title. The title may contain a maximum of 25 characters. */
                title: string;
                /**
                 * Format: int32
                 * @description The total number of votes cast for this choice.
                 */
                votes: number;
            }[];
            /**
             * Format: int32
             * @description The length of time (in seconds) that the poll will run for.
             */
            duration: number;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the poll ended. If `status` is ACTIVE, this field is set to **null**.
             */
            ended_at: string | null;
            /** @description An ID that identifies the poll. */
            id: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the poll began.
             */
            started_at: string;
            /**
             * @description The poll’s status. Valid values are:
             *
             *     * ACTIVE — The poll is running.
             *     * COMPLETED — The poll ended on schedule (see the `duration` field).
             *     * TERMINATED — The poll was terminated before its scheduled end.
             *     * ARCHIVED — The poll has been archived and is no longer visible on the channel.
             *     * MODERATED — The poll was deleted.
             *     * INVALID — Something went wrong while determining the state.
             * @enum {string}
             */
            status: "ACTIVE" | "COMPLETED" | "TERMINATED" | "ARCHIVED" | "MODERATED" | "INVALID";
            /** @description The question that viewers are voting on. For example, _What game should I play next?_ The title may contain a maximum of 60 characters. */
            title: string;
        };
        Prediction: {
            /** @description An ID that identifies the broadcaster that created the prediction. */
            broadcaster_id: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /**
             * Format: date-time
             * @description The UTC date and time of when the Prediction began.
             */
            created_at: string;
            /**
             * Format: date-time
             * @description The UTC date and time of when the Prediction ended. If `status` is ACTIVE, this is set to **null**.
             */
            ended_at: string | null;
            /** @description An ID that identifies this prediction. */
            id: string;
            /**
             * Format: date-time
             * @description The UTC date and time of when the Prediction was locked. If `status` is not LOCKED, this is set to **null**.
             */
            locked_at: string | null;
            /** @description The list of possible outcomes for the prediction. */
            outcomes: components["schemas"]["PredictionOutcome"][];
            /**
             * Format: int32
             * @description The length of time (in seconds) that the prediction will run for.
             */
            prediction_window: number;
            /**
             * @description The prediction’s status. Valid values are:
             *
             *     * ACTIVE — The Prediction is running and viewers can make predictions.
             *     * CANCELED — The broadcaster canceled the Prediction and refunded the Channel Points to the participants.
             *     * LOCKED — The broadcaster locked the Prediction, which means viewers can no longer make predictions.
             *     * RESOLVED — The winning outcome was determined and the Channel Points were distributed to the viewers who predicted the correct outcome.
             * @enum {string}
             */
            status: "ACTIVE" | "CANCELED" | "LOCKED" | "RESOLVED";
            /** @description The question that the prediction asks. For example, _Will I finish this entire pizza?_ */
            title: string;
            /** @description The ID of the winning outcome. Is **null** unless `status` is RESOLVED. */
            winning_outcome_id: string | null;
        };
        PredictionOutcome: {
            /**
             * Format: int32
             * @description The number of Channel Points spent by viewers on this outcome.
             */
            channel_points: number;
            /**
             * @description The color that visually identifies this outcome in the UX. Possible values are:
             *
             *     * BLUE
             *     * PINK
             *
             *     If the number of outcomes is two, the color is BLUE for the first outcome and PINK for the second outcome. If there are more than two outcomes, the color is BLUE for all outcomes.
             * @enum {string}
             */
            color: "BLUE" | "PINK";
            /** @description An ID that identifies this outcome. */
            id: string;
            /** @description The outcome’s text. */
            title: string;
            /** @description A list of viewers who were the top predictors; otherwise, **null** if none. */
            top_predictors: {
                /**
                 * Format: int32
                 * @description The number of Channel Points the viewer spent.
                 */
                channel_points_used: number;
                /**
                 * Format: int32
                 * @description The number of Channel Points distributed to the viewer.
                 */
                channel_points_won: number;
                /** @description An ID that identifies the viewer. */
                user_id: string;
                /** @description The viewer’s login name. */
                user_login: string;
                /** @description The viewer’s display name. */
                user_name: string;
            }[] | null;
            /**
             * Format: int32
             * @description The number of unique viewers that chose this outcome.
             */
            users: number;
        };
        RemoveSuspiciousStatusFromChatUserResponse: {
            /** @description An array with one object containing information about the suspicious user action. */
            data: {
                /** @description The user ID of the broadcaster indicating in which channel the status is being removed. */
                broadcaster_id: string;
                /** @description The user ID of the moderator who modified the last status. */
                moderator_id: string;
                /**
                 * @description The type of suspicious status. Possible values are: NO\_TREATMENT
                 * @enum {string}
                 */
                status: "NO_TREATMENT";
                /** @description An array of strings representing the type(s) of suspicious user this is. Possible values are: MANUALLY\_ADDED, DETECTED\_BAN\_EVADER, DETECTED\_SUS\_CHATTER, BANNED\_IN\_SHARED\_CHANNEL */
                types: ("MANUALLY_ADDED" | "DETECTED_BAN_EVADER" | "DETECTED_SUS_CHATTER" | "BANNED_IN_SHARED_CHANNEL")[];
                /**
                 * Format: date-time
                 * @description The timestamp of the last time this user’s status was updated.
                 */
                updated_at: string;
                /** @description The ID of the user having the suspicious status removed. */
                user_id: string;
            }[];
        };
        ResolveUnbanRequestsResponse: {
            data: {
                /** @description User ID of broadcaster whose channel is receiving the unban request. */
                broadcaster_id: string;
                /** @description The broadcaster’s login name. */
                broadcaster_login: string;
                /** @description The broadcaster’s display name. */
                broadcaster_name: string;
                /**
                 * Format: date-time
                 * @description Timestamp of when the unban request was created.
                 */
                created_at: string;
                /** @description Unban request ID. */
                id: string;
                /** @description User ID of moderator who approved/denied the request. */
                moderator_id: string;
                /** @description The moderator’s login name. */
                moderator_login: string;
                /** @description The moderator’s display name. */
                moderator_name: string;
                /** @description Text input by the resolver (moderator) of the unban request. */
                resolution_text: string;
                /**
                 * Format: date-time
                 * @description Timestamp of when moderator/broadcaster approved or denied the request.
                 */
                resolved_at: string;
                /**
                 * @description Status of the request. One of:
                 *
                 *     * approved
                 *     * denied
                 */
                status: string;
                /** @description Text of the request from the requesting user. */
                text: string;
                /** @description User ID of the requestor who is asking for an unban. */
                user_id: string;
                /** @description The user’s login name. */
                user_login: string;
                /** @description The user’s display name. */
                user_name: string;
            }[];
        };
        SearchCategoriesResponse: {
            /** @description The list of games or categories that match the query. The list is empty if there are no matches. */
            data: components["schemas"]["Category"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.[Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        SearchChannelsResponse: {
            /** @description The list of channels that match the query. The list is empty if there are no matches. */
            data: components["schemas"]["Channel"][];
            /** @description Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.[Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
            pagination?: {
                /** @description The cursor used to get the next page of results. Use the cursor to set the request’s _after_ query parameter. */
                cursor?: string;
            };
        };
        SendChatAnnouncementBody: {
            /**
             * @description The color used to highlight the announcement. Possible case-sensitive values are:
             *
             *     * blue
             *     * green
             *     * orange
             *     * purple
             *     * primary (default)
             *
             *     If `color` is set to _primary_ or is not set, the channel’s accent color is used to highlight the announcement (see **Profile Accent Color** under [profile settings](https://www.twitch.tv/settings/profile), **Channel and Videos**, and **Brand**).
             * @default primary
             * @enum {string}
             */
            color: "blue" | "green" | "orange" | "purple" | "primary";
            /** @description The announcement to make in the broadcaster’s chat room. Announcements are limited to a maximum of 500 characters; announcements longer than 500 characters are truncated. */
            message: string;
            /** @description Determines if the chat announcement is sent only to the source channel defined by broadcaster\_id during a shared chat session. This has no effect if the announcement is not sent sent during a shared chat session. The default value is `false`. NOTE: This parameter can only be set when utilizing an App Access Token. It cannot be specified when a User Access Token is used, and will instead result in an HTTP 400 error. */
            "source-only"?: boolean;
        };
        SendChatMessageBody: {
            /** @description The ID of the broadcaster whose chat room the message will be sent to. */
            broadcaster_id: string;
            /**
             * @description **NOTE:** This parameter can only be set when utilizing an App Access Token. It cannot be specified when a User Access Token is used, and will instead result in an HTTP 400 error.
             *
             *     Determines if the chat message is sent only to the source channel (defined by _broadcaster\_id_) during a shared chat session. This has no effect if the message is not sent during a shared chat session.
             *
             *     If this parameter is not set, the default value when using an App Access Token is `false`. On May 19, 2025 the default value for this parameter will be updated to `true`, and chat messages sent using an App Access Token will only be shared with the source channel by default. If you prefer to send a chat message to both channels in a shared chat session, make sure this parameter is explicitly set to `false` in your API request before May 19.
             */
            for_source_only?: boolean;
            /** @description The message to send. The message is limited to a maximum of 500 characters. Chat messages can also include emoticons. To include emoticons, use the name of the emote. The names are case sensitive. Don’t include colons around the name (e.g., :bleedPurple:). If Twitch recognizes the name, Twitch converts the name to the emote before writing the chat message to the chat room */
            message: string;
            /** @description The ID of the chat message being replied to. */
            reply_parent_message_id?: string;
            /** @description The ID of the user sending the message. This ID must match the user ID in the user access token. */
            sender_id: string;
        };
        SendChatMessageResponse: {
            data: {
                /** @description The reason the message was dropped, if any. */
                drop_reason?: {
                    /** @description Code for why the message was dropped. */
                    code: string;
                    /** @description Message for why the message was dropped. */
                    message: string;
                };
                /** @description If the message passed all checks and was sent. */
                is_sent: boolean;
                /** @description The message id for the message that was sent. */
                message_id: string;
            }[];
        };
        SendExtensionChatMessageBody: {
            /** @description The ID of the extension that’s sending the chat message. */
            extension_id: string;
            /** @description The extension’s version number. */
            extension_version: string;
            /** @description The message. The message may contain a maximum of 280 characters. */
            text: string;
        };
        SendExtensionPubSubMessageBody: {
            /** @description The ID of the broadcaster to send the message to. Don’t include this field if `is_global_broadcast` is set to **true**. */
            broadcaster_id: string;
            /** @description A Boolean value that determines whether the message should be sent to all channels where your extension is active. Set to **true** if the message should be sent to all channels. The default is **false**. */
            is_global_broadcast?: boolean;
            /** @description The message to send. The message can be a plain-text string or a string-encoded JSON object. The message is limited to a maximum of 5 KB. */
            message: string;
            /**
             * @description The target of the message. Possible values are:
             *
             *     * broadcast
             *     * global
             *     * whisper-<user-id>
             *
             *     If `is_global_broadcast` is **true**, you must set this field to global. The broadcast and global values are mutually exclusive; specify only one of them.
             */
            target: ("broadcast" | "global" | "whisper-<user-id>")[];
        };
        SendWhisperBody: {
            /**
             * @description The whisper message to send. The message must not be empty.
             *
             *     The maximum message lengths are:
             *
             *     * 500 characters if the user you're sending the message to hasn't whispered you before.
             *     * 10,000 characters if the user you're sending the message to has whispered you before.
             *
             *     Messages that exceed the maximum length are truncated.
             */
            message: string;
        };
        SetExtensionConfigurationSegmentBody: {
            /** @description The ID of the broadcaster that installed the extension. Include this field only if the `segment` is set to developer or broadcaster. */
            broadcaster_id?: string;
            /** @description The contents of the segment. This string may be a plain-text string or a string-encoded JSON object. */
            content?: string;
            /** @description The ID of the extension to update. */
            extension_id: string;
            /**
             * @description The configuration segment to update. Possible case-sensitive values are:
             *
             *     * broadcaster
             *     * developer
             *     * global
             * @enum {string}
             */
            segment: "broadcaster" | "developer" | "global";
            /** @description The version number that identifies this definition of the segment’s data. If not specified, the latest definition is updated. */
            version?: string;
        };
        SetExtensionRequiredConfigurationBody: {
            /** @description The ID of the extension to update. */
            extension_id: string;
            /** @description The version of the extension to update. */
            extension_version: string;
            /** @description The required\_configuration string to use with the extension. */
            required_configuration: string;
        };
        SnoozeNextAdResponse: {
            /** @description A list that contains information about the channel’s snoozes and next upcoming ad after successfully snoozing. */
            data: {
                /**
                 * Format: int64
                 * @description The UTC timestamp of the broadcaster’s next scheduled ad, in RFC3339 format. `0` if the channel has no ad scheduled or is not live.
                 */
                next_ad_at: number;
                /**
                 * Format: int32
                 * @description The number of snoozes available for the broadcaster.
                 */
                snooze_count: number;
                /**
                 * Format: int64
                 * @description The UTC timestamp when the broadcaster will gain an additional snooze, in RFC3339 format. Can be `0`.
                 */
                snooze_refresh_at: number;
            }[];
        };
        StartARaidResponse: {
            /** @description A list that contains a single object with information about the pending raid. */
            data: {
                /**
                 * Format: date-time
                 * @description The UTC date and time, in RFC3339 format, of when the raid was requested.
                 */
                created_at: string;
                /**
                 * @description **IMPORTANT** This field is deprecated and returns only `false`.
                 *
                 *     A Boolean value that indicates whether the channel being raided contains mature content.
                 */
                is_mature: boolean;
            }[];
        };
        StartCommercialBody: {
            /** @description The ID of the partner or affiliate broadcaster that wants to run the commercial. This ID must match the user ID found in the OAuth token. */
            broadcaster_id: string;
            /**
             * Format: int32
             * @description The length of the commercial to run, in seconds. Twitch tries to serve a commercial that’s the requested length, but it may be shorter or longer. The maximum length you should request is 180 seconds.
             */
            length: number;
        };
        StartCommercialResponse: {
            /** @description An array that contains a single object with the status of your start commercial request. */
            data: {
                /**
                 * Format: int32
                 * @description The length of the commercial you requested. If you request a commercial that’s longer than 180 seconds, the API uses 180 seconds.
                 */
                length: number;
                /** @description A message that indicates whether Twitch was able to serve an ad. */
                message: string;
                /**
                 * Format: int32
                 * @description The number of seconds you must wait before running another commercial.
                 */
                retry_after: number;
            }[];
        };
        Stream: {
            /** @description The ID of the category or game being played. */
            game_id: string;
            /** @description The ID of the category or game being played. */
            game_name: string;
            /** @description An ID that identifies the stream. You can use this ID later to look up the video on demand (VOD). */
            id: string;
            /**
             * @description **IMPORTANT** This field is deprecated and returns only `false`.
             *
             *     A Boolean value that indicates whether the stream is meant for mature audiences.
             */
            is_mature: boolean;
            /** @description The language that the stream uses. This is an ISO 639-1 two-letter language code or _other_ if the stream uses a language not in the list of [supported stream languages](https://help.twitch.tv/s/article/languages-on-twitch#streamlang). */
            language: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the broadcast began.
             */
            started_at: string;
            /**
             * @deprecated
             * @description **IMPORTANT** As of February 28, 2023, this field is deprecated and returns only an empty array. If you use this field, please update your code to use the `tags` field.
             *
             *     The list of tags that apply to the stream. The list contains IDs only when the channel is steaming live. For a list of possible tags, see [List of All Tags](https://www.twitch.tv/directory/all/tags). The list doesn’t include Category Tags.
             */
            tag_ids: string[];
            /** @description The tags applied to the stream. */
            tags: string[];
            /** @description A URL to an image of a frame from the last 5 minutes of the stream. Replace the width and height placeholders in the URL (`{width}x{height}`) with the size of the image you want, in pixels. */
            thumbnail_url: string;
            /** @description The stream’s title. Is an empty string if not set. */
            title: string;
            /**
             * @description The type of stream. Possible values are:
             *
             *     * live
             *
             *     If an error occurs, this field is set to an empty string.
             * @enum {string}
             */
            type: "live";
            /** @description The ID of the user that’s broadcasting the stream. */
            user_id: string;
            /** @description The user’s login name. */
            user_login: string;
            /** @description The user’s display name. */
            user_name: string;
            /**
             * Format: int32
             * @description The number of users watching the stream.
             */
            viewer_count: number;
        };
        StreamMarkerCreated: {
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the user created the marker.
             */
            created_at: string;
            /** @description A description that the user gave the marker to help them remember why they marked the location. */
            description: string;
            /** @description An ID that identifies this marker. */
            id: string;
            /**
             * Format: int32
             * @description The relative offset (in seconds) of the marker from the beginning of the stream.
             */
            position_seconds: number;
        };
        StreamMarkers: {
            /** @description The ID of the user that created the marker. */
            user_id: string;
            /** @description The user’s login name. */
            user_login: string;
            /** @description The user’s display name. */
            user_name: string;
            /** @description A list of videos that contain markers. The list contains a single video. */
            videos: {
                /** @description The list of markers in this video. The list in ascending order by when the marker was created. */
                markers: {
                    /**
                     * Format: date-time
                     * @description The UTC date and time (in RFC3339 format) of when the user created the marker.
                     */
                    created_at: string;
                    /** @description The description that the user gave the marker to help them remember why they marked the location. Is an empty string if the user didn’t provide one. */
                    description: string;
                    /** @description An ID that identifies this marker. */
                    id: string;
                    /**
                     * Format: int32
                     * @description The relative offset (in seconds) of the marker from the beginning of the stream.
                     */
                    position_seconds: number;
                    /** @description A URL that opens the video in Twitch Highlighter. */
                    url: string;
                }[];
                /** @description An ID that identifies this video. */
                video_id: string;
            }[];
        };
        StreamTag: {
            /** @description A Boolean value that determines whether the tag is an automatic tag. An automatic tag is one that Twitch adds to the stream. Broadcasters may not add automatic tags to their channel. The value is **true** if the tag is an automatic tag; otherwise, **false**. */
            is_auto: boolean;
            /** @description A dictionary that contains the localized descriptions of the tag. The key is in the form, <locale>-<coutry/region>. For example, en-us. The value is the localized description. */
            localization_descriptions: {
                [key: string]: string;
            };
            /** @description A dictionary that contains the localized names of the tag. The key is in the form, <locale>-<coutry/region>. For example, en-us. The value is the localized name. */
            localization_names: {
                [key: string]: string;
            };
            /** @description An ID that identifies this tag. */
            tag_id: string;
        };
        Team: {
            /** @description A URL to the team’s background image. */
            background_image_url: string;
            /** @description A URL to the team’s banner. */
            banner: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of when the team was created.
             */
            created_at: string;
            /** @description An ID that identifies the team. */
            id: string;
            /** @description The team’s description. The description may contain formatting such as Markdown, HTML, newline (\\n) characters, etc. */
            info: string;
            /** @description The team’s display name. */
            team_display_name: string;
            /** @description The team’s name. */
            team_name: string;
            /** @description A URL to a thumbnail image of the team’s logo. */
            thumbnail_url: string;
            /**
             * Format: date-time
             * @description The UTC date and time (in RFC3339 format) of the last time the team was updated.
             */
            updated_at: string;
            /** @description The list of team members. */
            users: {
                /** @description An ID that identifies the team member. */
                user_id: string;
                /** @description The team member’s login name. */
                user_login: string;
                /** @description The team member’s display name. */
                user_name: string;
            }[];
        };
        UpdateAutoModSettingsBody: {
            /**
             * Format: int32
             * @description The Automod level for hostility involving aggression.
             */
            aggression?: number;
            /**
             * Format: int32
             * @description The Automod level for hostility involving name calling or insults.
             */
            bullying?: number;
            /**
             * Format: int32
             * @description The Automod level for discrimination against disability.
             */
            disability?: number;
            /**
             * Format: int32
             * @description The Automod level for discrimination against women.
             */
            misogyny?: number;
            /**
             * Format: int32
             * @description The default AutoMod level for the broadcaster.
             */
            overall_level?: number;
            /**
             * Format: int32
             * @description The Automod level for racial discrimination.
             */
            race_ethnicity_or_religion?: number;
            /**
             * Format: int32
             * @description The Automod level for sexual content.
             */
            sex_based_terms?: number;
            /**
             * Format: int32
             * @description The AutoMod level for discrimination based on sexuality, sex, or gender.
             */
            sexuality_sex_or_gender?: number;
            /**
             * Format: int32
             * @description The Automod level for profanity.
             */
            swearing?: number;
        };
        UpdateAutoModSettingsResponse: {
            /** @description The list of AutoMod settings. The list contains a single object that contains all the AutoMod settings. */
            data: components["schemas"]["AutoModSettings"][];
        };
        UpdateChannelGuestStarSettingsBody: {
            /**
             * @description This setting determines how the guests within a session should be laid out within the browser source. Can be one of the following values:
             *
             *     * `TILED_LAYOUT`: All live guests are tiled within the browser source with the same size.
             *     * `SCREENSHARE_LAYOUT`: All live guests are tiled within the browser source with the same size. If there is an active screen share, it is sized larger than the other guests.
             *     * `HORIZONTAL_LAYOUT`: All live guests are arranged in a horizontal bar within the browser source
             *     * `VERTICAL_LAYOUT`: All live guests are arranged in a vertical bar within the browser source
             * @enum {string}
             */
            group_layout?: "TILED_LAYOUT" | "SCREENSHARE_LAYOUT" | "HORIZONTAL_LAYOUT" | "VERTICAL_LAYOUT";
            /** @description Flag determining if Browser Sources subscribed to sessions on this channel should output audio */
            is_browser_source_audio_enabled?: boolean;
            /** @description Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot. */
            is_moderator_send_live_enabled?: boolean;
            /** @description Flag determining if Guest Star should regenerate the auth token associated with the channel’s browser sources. Providing a true value for this will immediately invalidate all browser sources previously configured in your streaming software. */
            regenerate_browser_sources?: boolean;
            /**
             * Format: int32
             * @description Number of slots the Guest Star call interface will allow the host to add to a call. Required to be between 1 and 6.
             */
            slot_count?: number;
        };
        UpdateChannelStreamScheduleSegmentBody: {
            /** @description The ID of the category that best represents the broadcast’s content. To get the category ID, use the [Search Categories](https://dev.twitch.tv/docs/api/reference#search-categories) endpoint. */
            category_id?: string;
            /** @description The length of time, in minutes, that the broadcast is scheduled to run. The duration must be in the range 30 through 1380 (23 hours). */
            duration?: string;
            /**
             * @description A Boolean value that indicates whether the broadcast is canceled. Set to **true** to cancel the segment.
             *
             *     **NOTE**: For recurring segments, the API cancels the first segment after the current UTC date and time and not the specified segment (unless the specified segment is the next segment after the current UTC date and time).
             */
            is_canceled?: boolean;
            /**
             * Format: date-time
             * @description The date and time that the broadcast segment starts. Specify the date and time in RFC3339 format (for example, 2022-08-02T06:00:00Z).
             *
             *     **NOTE**: Only partners and affiliates may update a broadcast’s start time and only for non-recurring segments.
             */
            start_time?: string;
            /** @description The time zone where the broadcast takes place. Specify the time zone using [IANA time zone database](https://www.iana.org/time-zones) format (for example, America/New\_York). */
            timezone?: string;
            /** @description The broadcast’s title. The title may contain a maximum of 140 characters. */
            title?: string;
        };
        UpdateChannelStreamScheduleSegmentResponse: {
            /** @description The broadcaster’s streaming scheduled. */
            data: {
                /** @description The ID of the broadcaster that owns the broadcast schedule. */
                broadcaster_id: string;
                /** @description The broadcaster’s login name. */
                broadcaster_login: string;
                /** @description The broadcaster’s display name. */
                broadcaster_name: string;
                /** @description A list that contains the single broadcast segment that you updated. */
                segments: components["schemas"]["ChannelStreamScheduleSegment"][];
                /** @description The dates when the broadcaster is on vacation and not streaming. Is set to **null** if vacation mode is not enabled. */
                vacation: {
                    /**
                     * Format: date-time
                     * @description The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation ends.
                     */
                    end_time: string;
                    /**
                     * Format: date-time
                     * @description The UTC date and time (in RFC3339 format) of when the broadcaster’s vacation starts.
                     */
                    start_time: string;
                };
            };
        };
        UpdateChatSettingsBody: {
            /**
             * @description A Boolean value that determines whether chat messages must contain only emotes.
             *
             *     Set to **true** if only emotes are allowed; otherwise, **false**. The default is **false**.
             */
            emote_mode?: boolean;
            /**
             * @description A Boolean value that determines whether the broadcaster restricts the chat room to followers only.
             *
             *     Set to **true** if the broadcaster restricts the chat room to followers only; otherwise, **false**. The default is **true**.
             *
             *     To specify how long users must follow the broadcaster before being able to participate in the chat room, see the `follower_mode_duration` field.
             */
            follower_mode?: boolean;
            /**
             * Format: int32
             * @description The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Set only if `follower_mode` is **true**. Possible values are: 0 (no restriction) through 129600 (3 months). The default is 0.
             */
            follower_mode_duration?: number;
            /**
             * @description A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message.
             *
             *     Set to **true** if the broadcaster applies a delay; otherwise, **false**. The default is **false**.
             *
             *     To specify the length of the delay, see the `non_moderator_chat_delay_duration` field.
             */
            non_moderator_chat_delay?: boolean;
            /**
             * Format: int32
             * @description The amount of time, in seconds, that messages are delayed before appearing in chat. Set only if `non_moderator_chat_delay` is **true**. Possible values are:
             *
             *     * 2 — 2 second delay (recommended)
             *     * 4 — 4 second delay
             *     * 6 — 6 second delay
             * @enum {integer}
             */
            non_moderator_chat_delay_duration?: 2 | 4 | 6;
            /**
             * @description A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages. Set to **true** if the broadcaster applies a wait period between messages; otherwise, **false**. The default is **false**.
             *
             *     To specify the delay, see the `slow_mode_wait_time` field.
             */
            slow_mode?: boolean;
            /**
             * Format: int32
             * @description The amount of time, in seconds, that users must wait between sending messages. Set only if `slow_mode` is **true**.
             *
             *     Possible values are: 3 (3 second delay) through 120 (2 minute delay). The default is 30 seconds.
             */
            slow_mode_wait_time?: number;
            /**
             * @description A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.
             *
             *     Set to **true** if the broadcaster restricts the chat room to subscribers only; otherwise, **false**. The default is **false**.
             */
            subscriber_mode?: boolean;
            /**
             * @description A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.
             *
             *     Set to **true** if the broadcaster allows only unique messages; otherwise, **false**. The default is **false**.
             */
            unique_chat_mode?: boolean;
        };
        UpdateChatSettingsResponse: {
            /** @description The list of chat settings. The list contains a single object with all the settings. */
            data: components["schemas"]["ChatSettingsUpdated"][];
        };
        UpdateConduitsBody: {
            /** @description Conduit ID. */
            id: string;
            /**
             * Format: int32
             * @description The new number of shards for this conduit.
             */
            shard_count: number;
        };
        UpdateConduitShardsBody: {
            /** @description Conduit ID. */
            conduit_id: string;
            /** @description List of shards to update. */
            shards: {
                /** @description Shard ID. */
                id: string;
                /** @description The transport details that you want Twitch to use when sending you notifications. */
                transport: {
                    /** @description The callback URL where the notifications are sent. The URL must use the HTTPS protocol and port 443\. See Processing an event.Specify this field only if method is set to webhook.NOTE: Redirects are not followed. */
                    callback?: string;
                    /**
                     * @description The transport method. Possible values are:
                     *
                     *     * webhook
                     *     * websocket
                     * @enum {string}
                     */
                    method?: "webhook" | "websocket";
                    /** @description The secret used to verify the signature. The secret must be an ASCII string that’s a minimum of 10 characters long and a maximum of 100 characters long. For information about how the secret is used, see Verifying the event message.Specify this field only if method is set to webhook. */
                    secret?: string;
                    /** @description An ID that identifies the WebSocket to send notifications to. When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message.Specify this field only if method is set to websocket. */
                    session_id?: string;
                };
            }[];
        };
        UpdateConduitShardsResponse: {
            /** @description List of successful shard updates. */
            data: {
                /** @description Shard ID. */
                id: string;
                /**
                 * @description The shard status. The subscriber receives events only for enabled shards. Possible values are:
                 *
                 *     * enabled — The shard is enabled.
                 *     * webhook\_callback\_verification\_pending — The shard is pending verification of the specified callback URL.
                 *     * webhook\_callback\_verification\_failed — The specified callback URL failed verification.
                 *     * notification\_failures\_exceeded — The notification delivery failure rate was too high.
                 *     * websocket\_disconnected — The client closed the connection.
                 *     * websocket\_failed\_ping\_pong — The client failed to respond to a ping message.
                 *     * websocket\_received\_inbound\_traffic — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message).
                 *     * websocket\_internal\_error — The Twitch WebSocket server experienced an unexpected error.
                 *     * websocket\_network\_timeout — The Twitch WebSocket server timed out writing the message to the client.
                 *     * websocket\_network\_error — The Twitch WebSocket server experienced a network error writing the message to the client.
                 *     * websocket\_failed\_to\_reconnect - The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.
                 * @enum {string}
                 */
                status: "enabled" | "webhook_callback_verification_pending" | "webhook_callback_verification_failed" | "notification_failures_exceeded" | "websocket_disconnected" | "websocket_failed_ping_pong" | "websocket_received_inbound_traffic" | "websocket_internal_error" | "websocket_network_timeout" | "websocket_network_error" | "websocket_failed_to_reconnect";
                /** @description The transport details used to send the notifications. */
                transport: {
                    /** @description The callback URL where the notifications are sent. Included only if method is set to webhook. */
                    callback?: string;
                    /**
                     * Format: date-time
                     * @description The UTC date and time that the WebSocket connection was established. Included only if method is set to websocket.
                     */
                    connected_at?: string;
                    /**
                     * Format: date-time
                     * @description The UTC date and time that the WebSocket connection was lost. Included only if method is set to websocket.
                     */
                    disconnected_at?: string;
                    /**
                     * @description The transport method. Possible values are:
                     *
                     *     * webhook
                     *     * websocket
                     * @enum {string}
                     */
                    method: "webhook" | "websocket";
                    /** @description An ID that identifies the WebSocket that notifications are sent to. Included only if method is set to websocket. */
                    session_id?: string;
                };
            }[];
            /** @description List of unsuccessful updates. */
            errors: {
                /** @description Error codes used to represent a specific error condition while attempting to update shards. */
                code: string;
                /** @description Shard ID. */
                id: string;
                /**
                 * @description The error that occurred while updating the shard. Possible errors:
                 *
                 *     * The length of the string in the secret field is not valid.
                 *     * The URL in the transport's callback field is not valid. The URL must use the HTTPS protocol and the 443 port number.
                 *     * The value specified in the method field is not valid.
                 *     * The callback field is required if you specify the webhook transport method.
                 *     * The session\_id field is required if you specify the WebSocket transport method.
                 *     * The websocket session is not connected.
                 *     * The shard id is outside of the conduit’s range.
                 */
                message: string;
            }[];
        };
        UpdateConduitsResponse: {
            /** @description List of information about the client’s conduits. */
            data: {
                /** @description Conduit ID. */
                id: string;
                /**
                 * Format: int32
                 * @description Number of shards associated with this conduit after the update.
                 */
                shard_count: number;
            }[];
        };
        UpdateCustomRewardBody: {
            /** @description The background color to use for the reward. Specify the color using Hex format (for example, \\#00E5CB). */
            background_color?: string;
            /**
             * Format: int64
             * @description The cost of the reward, in channel points. The minimum is 1 point.
             */
            cost?: number;
            /**
             * Format: int64
             * @description The cooldown period, in seconds. Applied only if `is_global_cooldown_enabled` is **true**. The minimum value is 1; however, for it to be shown in the Twitch UX, the minimum value is 60.
             */
            global_cooldown_seconds?: number;
            /** @description A Boolean value that indicates whether the reward is enabled. Set to **true** to enable the reward. Viewers see only enabled rewards. */
            is_enabled?: boolean;
            /** @description A Boolean value that determines whether to apply a cooldown period between redemptions. Set to **true** to apply a cooldown period. For the duration of the cooldown period, see `global_cooldown_seconds`. */
            is_global_cooldown_enabled?: boolean;
            /** @description A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the `max_per_stream` field). Set to **true** to limit redemptions. */
            is_max_per_stream_enabled?: boolean;
            /** @description A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see `max_per_user_per_stream`). The minimum value is 1\. Set to **true** to limit redemptions. */
            is_max_per_user_per_stream_enabled?: boolean;
            /** @description A Boolean value that determines whether to pause the reward. Set to **true** to pause the reward. Viewers can’t redeem paused rewards.. */
            is_paused?: boolean;
            /** @description A Boolean value that determines whether users must enter information to redeem the reward. Set to **true** if user input is required. See the `prompt` field. */
            is_user_input_required?: boolean;
            /**
             * Format: int64
             * @description The maximum number of redemptions allowed per live stream. Applied only if `is_max_per_stream_enabled` is **true**. The minimum value is 1.
             */
            max_per_stream?: number;
            /**
             * Format: int64
             * @description The maximum number of redemptions allowed per user per stream. Applied only if `is_max_per_user_per_stream_enabled` is **true**.
             */
            max_per_user_per_stream?: number;
            /** @description The prompt shown to the viewer when they redeem the reward. Specify a prompt if `is_user_input_required` is **true**. The prompt is limited to a maximum of 200 characters. */
            prompt?: string;
            /** @description A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If **false**, status is set to UNFULFILLED and follows the normal request queue process. */
            should_redemptions_skip_request_queue?: boolean;
            /** @description The reward’s title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster’s custom rewards. */
            title?: string;
        };
        UpdateCustomRewardResponse: {
            /** @description The list contains the single reward that you updated. */
            data: components["schemas"]["CustomReward"][];
        };
        UpdateDropsEntitlementsBody: {
            /** @description A list of IDs that identify the entitlements to update. You may specify a maximum of 100 IDs. */
            entitlement_ids?: string[];
            /**
             * @description The fulfillment status to set the entitlements to. Possible values are:
             *
             *     * CLAIMED — The user claimed the benefit.
             *     * FULFILLED — The developer granted the benefit that the user claimed.
             * @enum {string}
             */
            fulfillment_status?: "CLAIMED" | "FULFILLED";
        };
        UpdateDropsEntitlementsResponse: {
            /** @description A list that indicates which entitlements were successfully updated and those that weren’t. */
            data: components["schemas"]["DropsEntitlementUpdated"][];
        };
        UpdateExtensionBitsProductBody: {
            /** @description An object that contains the product's cost information. */
            cost: {
                /**
                 * Format: int32
                 * @description The product's price.
                 */
                amount: number;
                /**
                 * @description The type of currency. Possible values are:
                 *
                 *     * bits — The minimum price is 1 and the maximum is 10000.
                 * @enum {string}
                 */
                type: "bits";
            };
            /** @description The product's name as displayed in the extension. The maximum length is 255 characters. */
            display_name: string;
            /**
             * Format: date-time
             * @description The date and time, in RFC3339 format, when the product expires. If not set, the product does not expire. To disable the product, set the expiration date to a date in the past.
             */
            expiration?: string;
            /** @description A Boolean value that indicates whether the product is in development. Set to **true** if the product is in development and not available for public use. The default is **false**. */
            in_development?: boolean;
            /** @description A Boolean value that determines whether Bits product purchase events are broadcast to all instances of the extension on a channel. The events are broadcast via the `onTransactionComplete` helper callback. The default is **false**. */
            is_broadcast?: boolean;
            /** @description The product's SKU. The SKU must be unique within an extension. The product's SKU cannot be changed. The SKU may contain only alphanumeric characters, dashes (-), underscores (\_), and periods (.) and is limited to a maximum of 255 characters. No spaces. */
            sku: string;
        };
        UpdateExtensionBitsProductResponse: {
            /** @description A list of Bits products that the extension created. The list is in ascending SKU order. The list is empty if the extension hasn't created any products or they're all expired or disabled. */
            data: components["schemas"]["ExtensionBitsProduct"][];
        };
        UpdateRedemptionStatusBody: {
            /**
             * @description The status to set the redemption to. Possible values are:
             *
             *     * CANCELED
             *     * FULFILLED
             *
             *     Setting the status to CANCELED refunds the user’s channel points.
             * @enum {string}
             */
            status: "CANCELED" | "FULFILLED";
        };
        UpdateRedemptionStatusResponse: {
            /** @description The list contains the single redemption that you updated. */
            data: components["schemas"]["CustomRewardRedemption"][];
        };
        UpdateShieldModeStatusBody: {
            /** @description A Boolean value that determines whether to activate Shield Mode. Set to **true** to activate Shield Mode; otherwise, **false** to deactivate Shield Mode. */
            is_active: boolean;
        };
        UpdateShieldModeStatusResponse: {
            /** @description A list that contains a single object with the broadcaster’s updated Shield Mode status. */
            data: {
                /** @description A Boolean value that determines whether Shield Mode is active. Is **true** if Shield Mode is active; otherwise, **false**. */
                is_active: boolean;
                /**
                 * Format: date-time
                 * @description The UTC timestamp (in RFC3339 format) of when Shield Mode was last activated.
                 */
                last_activated_at: string;
                /** @description An ID that identifies the moderator that last activated Shield Mode. */
                moderator_id: string;
                /** @description The moderator’s login name. */
                moderator_login: string;
                /** @description The moderator’s display name. */
                moderator_name: string;
            }[];
        };
        UpdateUserExtensionsBody: {
            /**
             * @description The extensions to update. The `data` field is a dictionary of extension types. The dictionary’s possible keys are: panel, overlay, or component. The key’s value is a dictionary of extensions.
             *
             *     For the extension’s dictionary, the key is a sequential number beginning with 1\. For panel and overlay extensions, the key’s value is an object that contains the following fields: `active` (true/false), `id` (the extension’s ID), and `version` (the extension’s version).
             *
             *     For component extensions, the key’s value includes the above fields plus the `x` and `y` fields, which identify the coordinate where the extension is placed.
             */
            data: {
                component?: {
                    [key: string]: components["schemas"]["UserExtensionComponentUpdate"];
                };
                overlay?: {
                    [key: string]: components["schemas"]["UserExtensionOverlayUpdate"];
                };
                panel?: {
                    [key: string]: components["schemas"]["UserExtensionPanelUpdate"];
                };
            };
        };
        UpdateUserExtensionsResponse: {
            /** @description The extensions that the broadcaster updated. */
            data: {
                /** @description A dictionary that contains the data for a video-component extension. The dictionary’s key is a sequential number beginning with 1\. The following fields contain the component’s data for each key. */
                component: {
                    [key: string]: components["schemas"]["UserExtensionComponent"];
                };
                /** @description A dictionary that contains the data for a video-overlay extension. The dictionary’s key is a sequential number beginning with 1\. The following fields contain the overlay’s data for each key. */
                overlay: {
                    [key: string]: components["schemas"]["UserExtensionOverlay"];
                };
                /** @description A dictionary that contains the data for a panel extension. The dictionary’s key is a sequential number beginning with 1\. The following fields contain the panel’s data for each key. */
                panel: {
                    [key: string]: components["schemas"]["UserExtensionPanel"];
                };
            };
        };
        UpdateUserResponse: {
            /** @description A list contains the single user that you updated. */
            data: components["schemas"]["User"][];
        };
        User: {
            /**
             * @description The type of broadcaster. Possible values are:
             *
             *     * affiliate — An [affiliate broadcaster](https://help.twitch.tv/s/article/joining-the-affiliate-program)
             *     * partner — A [partner broadcaster](https://help.twitch.tv/s/article/partner-program-overview)
             *     * "" — A normal broadcaster
             * @enum {string}
             */
            broadcaster_type: "affiliate" | "partner" | "";
            /**
             * Format: date-time
             * @description The UTC date and time that the user's account was created. The timestamp is in RFC3339 format.
             */
            created_at: string;
            /** @description The user's description of their channel. */
            description: string;
            /** @description The user's display name. */
            display_name: string;
            /**
             * @description The user's verified email address. The object includes this field only if the user access token includes the **user:read:email** scope.
             *
             *     If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.
             */
            email?: string;
            /** @description An ID that identifies the user. */
            id: string;
            /** @description The user's login name. */
            login: string;
            /** @description A URL to the user's offline image. */
            offline_image_url: string;
            /** @description A URL to the user's profile image. */
            profile_image_url: string;
            /**
             * @description The type of user. Possible values are:
             *
             *     * admin — Twitch administrator
             *     * global\_mod
             *     * staff — Twitch staff
             *     * "" — Normal user
             * @enum {string}
             */
            type: "admin" | "global_mod" | "staff" | "";
            /**
             * Format: int32
             * @deprecated
             * @description The number of times the user's channel has been viewed.
             *
             *     **NOTE**: This field has been deprecated (see [Get Users API endpoint – "view\_count" deprecation](https://discuss.dev.twitch.tv/t/get-users-api-endpoint-view-count-deprecation/37777)). Any data in this field is not valid and should not be used.
             */
            view_count: number;
        };
        UserBlockList: {
            /** @description The blocked user’s display name. */
            display_name: string;
            /** @description An ID that identifies the blocked user. */
            user_id: string;
            /** @description The blocked user’s login name. */
            user_login: string;
        };
        UserChatColor: {
            /** @description The Hex color code that the user uses in chat for their name. If the user hasn’t specified a color in their settings, the string is empty. */
            color: string;
            /** @description An ID that uniquely identifies the user. */
            user_id: string;
            /** @description The user’s login name. */
            user_login: string;
            /** @description The user’s display name. */
            user_name: string;
        };
        UserExtension: {
            /** @description A Boolean value that determines whether the extension is configured and can be activated. Is **true** if the extension is configured and can be activated. */
            can_activate: boolean;
            /** @description An ID that identifies the extension. */
            id: string;
            /** @description The extension's name. */
            name: string;
            /**
             * @description The extension types that you can activate for this extension. Possible values are:
             *
             *     * component
             *     * mobile
             *     * overlay
             *     * panel
             */
            type: ("component" | "mobile" | "overlay" | "panel")[];
            /** @description The extension's version. */
            version: string;
        };
        UserExtensionComponent: {
            /** @description A Boolean value that determines the extension’s activation state. If **false**, the user has not configured a component extension. */
            active: boolean;
            /** @description An ID that identifies the extension. */
            id?: string;
            /** @description The extension’s name. */
            name?: string;
            /** @description The extension’s version. */
            version?: string;
            /**
             * Format: int32
             * @description The x-coordinate where the extension is placed.
             */
            x?: number;
            /**
             * Format: int32
             * @description The y-coordinate where the extension is placed.
             */
            y?: number;
        };
        UserExtensionComponentUpdate: {
            /** @description A Boolean value that determines the extension’s activation state. If **false**, the user has not configured a component extension. */
            active: boolean;
            /** @description An ID that identifies the extension. */
            id?: string;
            /** @description The extension’s version. */
            version?: string;
            /**
             * Format: int32
             * @description The x-coordinate where the extension is placed.
             */
            x?: number;
            /**
             * Format: int32
             * @description The y-coordinate where the extension is placed.
             */
            y?: number;
        };
        UserExtensionOverlay: {
            /** @description A Boolean value that determines the extension’s activation state. If **false**, the user has not configured an overlay extension. */
            active: boolean;
            /** @description An ID that identifies the extension. */
            id?: string;
            /** @description The extension’s name. */
            name?: string;
            /** @description The extension’s version. */
            version?: string;
        };
        UserExtensionOverlayUpdate: {
            /** @description A Boolean value that determines the extension’s activation state. If **false**, the user has not configured an overlay extension. */
            active: boolean;
            /** @description An ID that identifies the extension. */
            id?: string;
            /** @description The extension’s version. */
            version?: string;
        };
        UserExtensionPanel: {
            /** @description A Boolean value that determines the extension’s activation state. If **false**, the user has not configured a panel extension. */
            active: boolean;
            /** @description An ID that identifies the extension. */
            id?: string;
            /** @description The extension’s name. */
            name?: string;
            /** @description The extension’s version. */
            version?: string;
        };
        UserExtensionPanelUpdate: {
            /** @description A Boolean value that determines the extension’s activation state. If **false**, the user has not configured a panel extension. */
            active: boolean;
            /** @description An ID that identifies the extension. */
            id?: string;
            /** @description The extension’s version. */
            version?: string;
        };
        UserModerator: {
            /** @description The ID of the user that has permission to moderate the broadcaster’s channel. */
            user_id: string;
            /** @description The user’s login name. */
            user_login: string;
            /** @description The user’s display name. */
            user_name: string;
        };
        UserSubscription: {
            /** @description An ID that identifies the broadcaster. */
            broadcaster_id: string;
            /** @description The broadcaster’s login name. */
            broadcaster_login: string;
            /** @description The broadcaster’s display name. */
            broadcaster_name: string;
            /** @description The ID of the user that gifted the subscription. The object includes this field only if `is_gift` is **true**. */
            gifter_id?: string;
            /** @description The gifter’s login name. The object includes this field only if `is_gift` is **true**. */
            gifter_login?: string;
            /** @description The gifter’s display name. The object includes this field only if `is_gift` is **true**. */
            gifter_name?: string;
            /** @description A Boolean value that determines whether the subscription is a gift subscription. Is **true** if the subscription was gifted. */
            is_gift: boolean;
            /**
             * @description The type of subscription. Possible values are:
             *
             *     * 1000 — Tier 1
             *     * 2000 — Tier 2
             *     * 3000 — Tier 3
             * @enum {string}
             */
            tier: "1000" | "2000" | "3000";
        };
        UserVip: {
            /** @description An ID that uniquely identifies the VIP user. */
            user_id: string;
            /** @description The user’s login name. */
            user_login: string;
            /** @description The user’s display name. */
            user_name: string;
        };
        Video: {
            /**
             * Format: date-time
             * @description The date and time, in UTC, of when the video was created. The timestamp is in RFC3339 format.
             */
            created_at: string;
            /** @description The video's description. */
            description: string;
            /** @description The video's length in ISO 8601 duration format. For example, 3m21s represents 3 minutes, 21 seconds. */
            duration: string;
            /** @description An ID that identifies the video. */
            id: string;
            /** @description The ISO 639-1 two-letter language code that the video was broadcast in. For example, the language code is DE if the video was broadcast in German. For a list of supported languages, see [Supported Stream Language](https://help.twitch.tv/s/article/languages-on-twitch#streamlang). The language value is "other" if the video was broadcast in a language not in the list of supported languages. */
            language: string;
            /** @description The segments that Twitch Audio Recognition muted; otherwise, **null**. */
            muted_segments: {
                /**
                 * Format: int32
                 * @description The duration of the muted segment, in seconds.
                 */
                duration: number;
                /**
                 * Format: int32
                 * @description The offset, in seconds, from the beginning of the video to where the muted segment begins.
                 */
                offset: number;
            }[] | null;
            /**
             * Format: date-time
             * @description The date and time, in UTC, of when the video was published. The timestamp is in RFC3339 format.
             */
            published_at: string;
            /** @description The ID of the stream that the video originated from if the video's type is "archive;" otherwise, **null**. */
            stream_id: string | null;
            /** @description A URL to a thumbnail image of the video. Before using the URL, you must replace the `%{width}` and `%{height}` placeholders with the width and height of the thumbnail you want returned. Due to current limitations, `${width}` must be 320 and `${height}` must be 180. */
            thumbnail_url: string;
            /** @description The video's title. */
            title: string;
            /**
             * @description The video's type. Possible values are:
             *
             *     * archive — An on-demand video (VOD) of one of the broadcaster's past streams.
             *     * highlight — A highlight reel of one of the broadcaster's past streams. See [Creating Highlights](https://help.twitch.tv/s/article/creating-highlights-and-stream-markers).
             *     * upload — A video that the broadcaster uploaded to their video library. See Upload under [Video Producer](https://help.twitch.tv/s/article/video-on-demand?language=en%5FUS#videoproducer).
             * @enum {string}
             */
            type: "archive" | "highlight" | "upload";
            /** @description The video's URL. */
            url: string;
            /** @description The ID of the broadcaster that owns the video. */
            user_id: string;
            /** @description The broadcaster's login name. */
            user_login: string;
            /** @description The broadcaster's display name. */
            user_name: string;
            /**
             * Format: int32
             * @description The number of times that users have watched the video.
             */
            view_count: number;
            /** @description The video's viewable state. Always set to **public**. */
            viewable: string;
        };
        WarnChatUserBody: {
            /** @description A list that contains information about the warning. */
            data: {
                /** @description A custom reason for the warning. **Max 500 chars.** */
                reason: string;
                /** @description The ID of the twitch user to be warned. */
                user_id: string;
            };
        };
        WarnChatUserResponse: {
            /** @description A list that contains information about the warning. */
            data: {
                /** @description The ID of the channel in which the warning will take effect. */
                broadcaster_id: string;
                /** @description The ID of the user who applied the warning. */
                moderator_id: string;
                /** @description The reason provided for warning. */
                reason: string;
                /** @description The ID of the warned user. */
                user_id: string;
            }[];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    "get-extension-analytics": {
        parameters: {
            query?: {
                /**
                 * @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)
                 *
                 *     This parameter is ignored if the _extension\_id_ parameter is set.
                 */
                after?: string;
                /**
                 * @description The reporting window's end date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-27T00:00:00Z). The report is inclusive of the end date.
                 *
                 *     Specify an end date only if you provide a start date. Because it can take up to two days for the data to be available, you must specify an end date that's earlier than today minus one to two days. If not, the API ignores your end date and uses an end date that is today minus one to two days.
                 */
                ended_at?: string;
                /** @description The extension's client ID. If specified, the response contains a report for the specified extension. If not specified, the response includes a report for each extension that the authenticated user owns. */
                extension_id?: string;
                /**
                 * @description The maximum number of report URLs to return per page in the response. The minimum page size is 1 URL per page and the maximum is 100 URLs per page. The default is 20.
                 *
                 *     **NOTE**: While you may specify a maximum value of 100, the response will contain at most 20 URLs per page.
                 */
                first?: number;
                /**
                 * @description The reporting window's start date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z).
                 *
                 *     The start date must be on or after January 31, 2018\. If you specify an earlier date, the API ignores it and uses January 31, 2018\. If you specify a start date, you must specify an end date. If you don't specify a start and end date, the report includes all available data since January 31, 2018.
                 *
                 *     The report contains one row of data for each day in the reporting window.
                 */
                started_at?: string;
                /**
                 * @description The type of analytics report to get. Possible values are:
                 *
                 *     * overview\_v2
                 */
                type?: "overview_v2";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster's analytics reports. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetExtensionAnalyticsResponse"];
                };
            };
            /**
             * @description * The start and end dates are optional but if you specify one, you must specify the other.
             *     * The end date must be equal to or later than the start date.
             *     * The cursor specified in the _after_ query parameter is not valid.
             *     * The resource supports only forward pagination (use the _after_ query parameter).
             *     * The _first_ query parameter is outside the allowed range of values.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **analytics:read:extensions** scope.
             *     * The OAuth token is not valid.
             *     * The Client-Id header is required.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The extension specified in the _extension\_id_ query parameter was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-game-analytics": {
        parameters: {
            query?: {
                /**
                 * @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)
                 *
                 *     This parameter is ignored if _game\_id_ parameter is set.
                 */
                after?: string;
                /**
                 * @description The reporting window’s end date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z). The report is inclusive of the end date.
                 *
                 *     Specify an end date only if you provide a start date. Because it can take up to two days for the data to be available, you must specify an end date that’s earlier than today minus one to two days. If not, the API ignores your end date and uses an end date that is today minus one to two days.
                 */
                ended_at?: string;
                /**
                 * @description The maximum number of report URLs to return per page in the response. The minimum page size is 1 URL per page and the maximum is 100 URLs per page. The default is 20.
                 *
                 *     **NOTE**: While you may specify a maximum value of 100, the response will contain at most 20 URLs per page.
                 */
                first?: number;
                /** @description The game’s client ID. If specified, the response contains a report for the specified game. If not specified, the response includes a report for each of the authenticated user’s games. */
                game_id?: string;
                /**
                 * @description The reporting window’s start date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z). If you specify a start date, you must specify an end date.
                 *
                 *     The start date must be within one year of today’s date. If you specify an earlier date, the API ignores it and uses a date that’s one year prior to today’s date. If you don’t specify a start and end date, the report includes all available data for the last 365 days from today.
                 *
                 *     The report contains one row of data for each day in the reporting window.
                 */
                started_at?: string;
                /**
                 * @description The type of analytics report to get. Possible values are:
                 *
                 *     * overview\_v2
                 */
                type?: "overview_v2";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s analytics reports. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetGameAnalyticsResponse"];
                };
            };
            /**
             * @description * The start and end dates are optional but if you specify one, you must specify the other.
             *     * The end date must be equal to or later than the start date.
             *     * The cursor specified in the _after_ query parameter is not valid.
             *     * The resource supports only forward pagination (use the _after_ query parameter).
             *     * The _first_ query parameter is outside the allowed range of values.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **analytics:read:games** scope.
             *     * The OAuth token is not valid.
             *     * The Client-Id header is required.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The game specified in the _game\_id_ query parameter was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-authorization-by-user": {
        parameters: {
            query: {
                /** @description The ID of the user(s) you want to check authorization for. To specify more than one user, include the user\_id parameter for each user to get. For example, `user_id=1234&user_id=5678`. The maximum number of IDs you may specify is 10. */
                user_id: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved user authorization. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetAuthorizationByUserResponse"];
                };
            };
            /** @description Request is malformed - invalid parameters or missing parameters. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The access token is not valid.
             *     * Authorization header is required and must specify an app access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The client-id in the header must match the client ID in the access token. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal Server Error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-cheermotes": {
        parameters: {
            query?: {
                /**
                 * @description The ID of the broadcaster whose custom Cheermotes you want to get. Specify the broadcaster’s ID if you want to include the broadcaster’s Cheermotes in the response (not all broadcasters upload Cheermotes). If not specified, the response contains only global Cheermotes.
                 *
                 *     If the broadcaster uploaded Cheermotes, the `type` field in the response is set to **channel\_custom**.
                 */
                broadcaster_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the Cheermotes. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetCheermotesResponse"];
                };
            };
            /**
             * @description * The Authorization header is required and must specify an app access token or user access token.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-extension-bits-products": {
        parameters: {
            query?: {
                /** @description A Boolean value that determines whether to include disabled or expired Bits products in the response. The default is **false**. */
                should_include_all?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of products. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetExtensionBitsProductsResponse"];
                };
            };
            /** @description * The ID in the Client-Id header must belong to an extension. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token; you may not specify a user access token.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-extension-bits-product": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateExtensionBitsProductBody"];
            };
        };
        responses: {
            /** @description Successfully created the product. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateExtensionBitsProductResponse"];
                };
            };
            /**
             * @description * The `sku` field is required.
             *     * The value in the `sku` field is not valid. The SKU may contain only alphanumeric characters, dashes (-), underscores (\_), and periods (.).
             *     * The `cost` object's `amount` field is required.
             *     * The value in the `cost` object's `amount` field is not valid.
             *     * The `cost` object's `type` field is required.
             *     * The value in the `cost` object's `type` field is not valid.
             *     * The `display_name` field is required.
             *     * The ID in the Client-Id header must belong to the extension.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token; you may not specify a user access token.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-bits-leaderboard": {
        parameters: {
            query?: {
                /** @description The number of results to return. The minimum count is 1 and the maximum is 100\. The default is 10. */
                count?: number;
                /**
                 * @description The time period over which data is aggregated (uses the PST time zone). Possible values are:
                 *
                 *     * day — A day spans from 00:00:00 on the day specified in _started\_at_ and runs through 00:00:00 of the next day.
                 *     * week — A week spans from 00:00:00 on the Monday of the week specified in _started\_at_ and runs through 00:00:00 of the next Monday.
                 *     * month — A month spans from 00:00:00 on the first day of the month specified in _started\_at_ and runs through 00:00:00 of the first day of the next month.
                 *     * year — A year spans from 00:00:00 on the first day of the year specified in _started\_at_ and runs through 00:00:00 of the first day of the next year.
                 *     * all — Default. The lifetime of the broadcaster's channel.
                 */
                period?: "day" | "week" | "month" | "year" | "all";
                /**
                 * @description The start date, in RFC3339 format, used for determining the aggregation period. Specify this parameter only if you specify the _period_ query parameter. The start date is ignored if _period_ is all.
                 *
                 *     Note that the date is converted to PST before being used, so if you set the start time to `2022-01-01T00:00:00.0Z` and _period_ to month, the actual reporting period is December 2021, not January 2022\. If you want the reporting period to be January 2022, you must set the start time to `2022-01-01T08:00:00.0Z` or `2022-01-01T00:00:00.0-08:00`.
                 *
                 *     If your start date uses the ‘+’ offset operator (for example, `2022-01-01T00:00:00.0+05:00`), you must URL encode the start date.
                 */
                started_at?: string;
                /** @description An ID that identifies a user that cheered bits in the channel. If _count_ is greater than 1, the response may include users ranked above and below the specified user. To get the leaderboard’s top leaders, don’t specify a user ID. */
                user_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s Bits leaderboard. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetBitsLeaderboardResponse"];
                };
            };
            /**
             * @description * The time period specified in the _period_ query parameter is not valid.
             *     * The _started\_at_ query parameter is required if _period_ is not set to _all_.
             *     * The value in the _count_ query parameter is outside the range of allowed values.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a user access token.
             *     * The user access token must include the the **bits:read** scope.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-custom-reward": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose custom rewards you want to get. This ID must match the user ID found in the OAuth token. */
                broadcaster_id: string;
                /**
                 * @description A list of IDs to filter the rewards by. To specify more than one ID, include this parameter for each reward you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.
                 *
                 *     Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found, the response is 404 Not Found.
                 */
                id?: string[];
                /** @description A Boolean value that determines whether the response contains only the custom rewards that the app may manage (the app is identified by the ID in the Client-Id header). Set to **true** to get only the custom rewards that the app may manage. The default is **false**. */
                only_manageable_rewards?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s list of custom rewards. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetCustomRewardResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The request exceeds the maximum number of _id_ query parameters that you may specify.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header must specify a user access token.
             *     * The user access token must include the **channel:read:redemptions** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster is not a partner or affiliate. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * All of the custom rewards specified using the _id_ query parameter were not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-custom-rewards": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster to add the custom reward to. This ID must match the user ID found in the OAuth token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateCustomRewardsBody"];
            };
        };
        responses: {
            /** @description Successfully created the custom reward. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateCustomRewardsResponse"];
                };
            };
            /**
             * @description * The request exceeds the maximum number of rewards allowed per channel.
             *     * The _broadcaster\_id_ query parameter is required.
             *     * The `title` field is required.
             *     * The `title` must contain a minimum of 1 character and a maximum of 45 characters.
             *     * The `title` must be unique amongst all of the broadcaster's custom rewards.
             *     * The `cost` field is required.
             *     * The `cost` field must contain a minimum of 1 point.
             *     * The `prompt` field is limited to a maximum of 200 characters.
             *     * If `is_max_per_stream_enabled` is **true**, the minimum value for `max_per_stream` is 1.
             *     * If `is_max_per_user_per_stream_enabled` is **true**, the minimum value for `max_per_user_per_stream` is 1.
             *     * If `is_global_cooldown_enabled` is **true**, the minimum value for `global_cooldown_seconds` is 1.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a user access token.
             *     * The user access token is missing the **channel:manage:redemptions** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster is not a partner or affiliate. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-custom-reward": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that created the custom reward. This ID must match the user ID found in the OAuth token. */
                broadcaster_id: string;
                /** @description The ID of the custom reward to delete. */
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully deleted the custom reward.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Deletes the specified custom reward.
             *
             *     ```bash
             *     curl -X DELETE 'https://api.twitch.tv/helix/channel_points/custom_rewards?broadcaster_id=274637212&id=b045196d-9ce7-4a27-a9b9-279ed341ab28' \
             *     -H 'Client-Id: gx2pv4208cff0ig9ou7nk3riccffxt' \
             *     -H 'Authorization: Bearer vjxv3i0l4zxru966wsnwji51tmpkj2'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _id_ query parameter is required.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a user access token.
             *     * The user access token must include the **channel:manage:redemptions** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the Client-Id header must match the client ID used to create the custom reward.
             *     * The broadcaster is not a partner or affiliate.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The custom reward specified in the _id_ query parameter was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-custom-reward": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that’s updating the reward. This ID must match the user ID found in the OAuth token. */
                broadcaster_id: string;
                /** @description The ID of the reward to update. */
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateCustomRewardBody"];
            };
        };
        responses: {
            /** @description Successfully updated the custom reward. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateCustomRewardResponse"];
                };
            };
            /**
             * @description ul>
             *     * The _broadcaster\_id_ query parameter is required.
             *     * The _id_ query parameter is required.
             *     * The `title` must contain a minimum of 1 character and a maximum of 45 characters.
             *     * The `title` must be unique amongst all of the broadcaster's custom rewards.
             *     * The `cost` field must contain a minimum of 1 point.
             *     * The `prompt` field is limited to a maximum of 200 characters.
             *     * If `is_max_per_stream_enabled` is **true**, the minimum value for `max_per_stream` is 1.
             *     * If `is_max_per_user_per_stream_enabled` is **true**, the minimum value for `max_per_user_per_stream` is 1.
             *     * If `is_global_cooldown_enabled` is **true**, the minimum value for `global_cooldown_seconds` is 1 and the maximum is 604800.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a user access token.
             *     * The user access token must include the **channel:manage:redemptions** scope.
             *     * The OAuth token is not valide.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the Client-Id header must match the client ID used to create the custom reward.
             *     * The broadcaster is not a partner or affiliate.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The custom reward specified in the _id_ query parameter was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-custom-reward-redemption": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The ID of the broadcaster that owns the custom reward. This ID must match the user ID found in the user OAuth token. */
                broadcaster_id: string;
                /** @description The maximum number of redemptions to return per page in the response. The minimum page size is 1 redemption per page and the maximum is 50\. The default is 20. */
                first?: number;
                /**
                 * @description A list of IDs to filter the redemptions by. To specify more than one ID, include this parameter for each redemption you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.
                 *
                 *     Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found, the response is 404 Not Found.
                 */
                id?: string[];
                /** @description The ID that identifies the custom reward whose redemptions you want to get. */
                reward_id: string;
                /**
                 * @description The order to sort redemptions by. The possible case-sensitive values are:
                 *
                 *     * OLDEST
                 *     * NEWEST
                 *
                 *     The default is OLDEST.
                 */
                sort?: "OLDEST" | "NEWEST";
                /**
                 * @description The status of the redemptions to return. The possible case-sensitive values are:
                 *
                 *     * CANCELED
                 *     * FULFILLED
                 *     * UNFULFILLED
                 *
                 *     **NOTE**: This field is required only if you don’t specify the _id_ query parameter.
                 *
                 *     **NOTE**: Canceled and fulfilled redemptions are returned for only a few days after they’re canceled or fulfilled.
                 */
                status?: "CANCELED" | "FULFILLED" | "UNFULFILLED";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of redeemed custom rewards. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetCustomRewardRedemptionResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _reward\_id_ query parameter is required.
             *     * The _status_ query parameter is required if you didn't specify the _id_ query parameter.
             *     * The value in the _status_ query parameter is not valid.
             *     * The value in the _sort_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a user access token.
             *     * The user access token must include the **channel:read:redemptions** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the Client-Id header must match the client ID used to create the custom reward.
             *     * The broadcaster is not a partner or affiliate.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * All of the redemptions specified using the _id_ query parameter were not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-redemption-status": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that’s updating the redemption. This ID must match the user ID in the user access token. */
                broadcaster_id: string;
                /** @description A list of IDs that identify the redemptions to update. To specify more than one ID, include this parameter for each redemption you want to update. For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs. */
                id: string[];
                /** @description The ID that identifies the reward that’s been redeemed. */
                reward_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateRedemptionStatusBody"];
            };
        };
        responses: {
            /** @description Successfully updated the redemption’s status. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateRedemptionStatusResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _reward\_id_ query parameter is required.
             *     * The _id_ query parameter is required.
             *     * The value in the _status_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a user access token.
             *     * The user access token must include the **channel:manage:redemptions** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the Client-Id header must match the client ID used to create the custom reward.
             *     * The broadcaster is not a partner or affiliate.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The custom reward specified in the _reward\_id_ query parameter was not found.
             *     * The redemptions specified using the _id_ query parameter were not found or their statuses weren't marked as UNFULFILLED.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-channel-information": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose channel you want to get. To specify more than one ID, include this parameter for each broadcaster you want to get. For example, `broadcaster_id=1234&broadcaster_id=5678`. You may specify a maximum of 100 IDs. The API ignores duplicate IDs and IDs that are not found. */
                broadcaster_id: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of channels. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChannelInformationResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The broadcaster ID is not valid.
             *     * The number of _broadcaster\_id_ query parameters exceeds the maximum allowed.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token or user access token.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The application exceeded the number of calls it may make per minute. For details, see [Rate Limits](https://dev.twitch.tv/docs/api/guide#twitch-rate-limits). */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "modify-channel-information": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose channel you want to update. This ID must match the user ID in the user access token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ModifyChannelInformationBody"];
            };
        };
        responses: {
            /**
             * @description Successfully updated the channel’s properties.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     ```bash
             *     curl -X PATCH 'https://api.twitch.tv/helix/channels?broadcaster_id=41245072' \
             *     -H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \
             *     -H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz' \
             *     -H 'Content-Type: application/json' \
             *     --data-raw '{"game_id":"33214", "title":"there are helicopters in the game? REASON TO PLAY FORTNITE found", "broadcaster_language":"en", "tags":["LevelingUp"]}'
             *     ```
             *
             *     Set CCLs for a Channel
             *
             *     ```bash
             *     curl -X PATCH
             *     'https://api.twitch.tv/helix/channels?broadcaster_id=41245072' \
             *     -H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \
             *     -H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz' \
             *     -H 'Content-Type: application/json' \
             *     --data-raw '{
             *         "game_id": "SomeGameID",
             *         "content_classification_labels": [
             *            {"id": "Gambling", "is_enabled": true},
             *            {"id": "DrugsIntoxication", "is_enabled": false}
             *          ],
             *         "is_branded_content": true
             *     }'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The request must update at least one property.
             *     * The `title` field may not contain an empty string.
             *     * The ID in `game_id` is not valid.
             *     * To update the `delay` field, the broadcaster must have partner status.
             *     * The list in the `tags` field exceeds the maximum number of tags allowed.
             *     * A tag in the `tags` field exceeds the maximum length allowed.
             *     * A tag in the `tags` field is empty.
             *     * A tag in the `tags` field contains special characters or spaces.
             *     * One or more tags in the `tags` field failed AutoMod review.
             *     * Game restricted for user's age and region
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * User requests CCL for a channel they don’t own
             *     * The ID in _broadcaster\_id_ must match the user ID found in the OAuth token.
             *     * The Authorization header is required and must specify a user access token.
             *     * The OAuth token must include the **channel:manage:broadcast** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * User requested gaming CCLs to be added to their channel
             *     * Unallowed CCLs declared for underaged authorized user in a restricted country
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User set the Branded Content flag too frequently */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-ad-schedule": {
        parameters: {
            query: {
                /** @description Provided `broadcaster_id` must match the `user_id` in the auth token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Returns the ad schedule information for the channel. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetAdScheduleResponse"];
                };
            };
            /** @description The broadcaster ID is not valid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "snooze-next-ad": {
        parameters: {
            query: {
                /** @description Provided `broadcaster_id` must match the `user_id` in the auth token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User’s next ad is successfully snoozed. Their _snooze\_count_ is decremented and _snooze\_refresh\_time_ and _next\_ad\_at_ are both updated. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SnoozeNextAdResponse"];
                };
            };
            /**
             * @description * The channel is not currently live.
             *     * The broadcaster ID is not valid.
             *     * Channel does not have an upcoming scheduled ad break.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Channel has no snoozes left. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "start-commercial": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["StartCommercialBody"];
            };
        };
        responses: {
            /** @description Successfully started the commercial. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StartCommercialResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _length_ query parameter is required.
             *     * The ID in _broadcaster\_id_ is not valid.
             *     * To start a commercial, the broadcaster must be streaming live.
             *     * The broadcaster may not run another commercial until the cooldown period expires. The `retry_after` field in the previous start commercial response specifies the amount of time the broadcaster must wait between running commercials.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in `broadcaster_id` must match the user ID found in the request’s OAuth token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:edit:commercial** scope.
             *     * The OAuth token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The ID in `broadcaster_id` was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster may not run another commercial until the cooldown period expires. The `retry_after` field in the previous start commercial response specifies the amount of time the broadcaster must wait between running commercials. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-channel-editors": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that owns the channel. This ID must match the user ID in the access token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster's list of editors. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChannelEditorsResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _broadcaster\_id_ query parameter must match the user ID found in the OAuth token.
             *     * The Authorization header is required and must specify a user access token.
             *     * The OAuth token must include the **channel:read:editors** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-followed-channels": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination). */
                after?: string;
                /** @description A broadcaster’s ID. Use this parameter to see whether the user follows this broadcaster. If specified, the response contains this broadcaster if the user follows them. If not specified, the response contains all broadcasters that the user follows. */
                broadcaster_id?: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20. */
                first?: number;
                /** @description A user’s ID. Returns the list of broadcasters that this user follows. This ID must match the user ID in the user OAuth token. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster's list of followers. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetFollowedChannelsResponse"];
                };
            };
            /**
             * @description Possible reasons:
             *
             *     * The _user\_id_ query parameter is required.
             *     * The _broadcaster\_id_ query parameter is not valid.
             *     * The _user\_id_ query parameter is required.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description Possible reasons:
             *
             *     * The ID in the _user\_id_ query parameter must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token is missing the **user:read:follows** scope.
             *     * The OAuth token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-channel-followers": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination). */
                after?: string;
                /** @description The broadcaster’s ID. Returns the list of users that follow this broadcaster. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20. */
                first?: number;
                /**
                 * @description A user’s ID. Use this parameter to see whether the user follows this broadcaster. If specified, the response contains this user if they follow the broadcaster. If not specified, the response contains all users that follow the broadcaster.
                 *
                 *     Using this parameter requires both a user access token with the **moderator:read:followers** scope and the user ID in the access token match the broadcaster\_id or be the user ID for a moderator of the specified broadcaster.
                 */
                user_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s list of followers. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChannelFollowersResponse"];
                };
            };
            /**
             * @description Possible reasons:
             *
             *     * The _broadcaster\_id_ query parameter is required.
             *     * The _broadcaster\_id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description Possible reasons:
             *
             *     * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token or the user must be a moderator for the specified broadcaster.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token is missing the **moderator:read:followers** scope.
             *     * The OAuth token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             *     * The _user\_id_ parameter was specified but either the user access token is missing the **moderator:read:followers** scope or the user is not the broadcaster or moderator for the specified channel
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-vips": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The ID of the broadcaster whose list of VIPs you want to get. This ID must match the user ID in the access token. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20. */
                first?: number;
                /** @description Filters the list for specific VIPs. To specify more than one user, include the _user\_id_ parameter for each user to get. For example, `&user_id=1234&user_id=5678`. The maximum number of IDs that you may specify is 100\. Ignores the ID of those users in the list that aren’t VIPs. */
                user_id?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s list of VIPs. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetVIPsResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _user\_id_ query parameter is not valid.
             *     * The number of _user\_id_ query parameters exceeds the maximum allowed.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:read:vips** or **channel:manage:vips** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "add-channel-vip": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that’s adding the user as a VIP. This ID must match the user ID in the access token. */
                broadcaster_id: string;
                /** @description The ID of the user to give VIP status to. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully added the VIP.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Adds a VIP to the broadcaster’s chat room.
             *
             *     ```bash
             *     curl -X POST 'https://api.twitch.tv/helix/channels/vips?broadcaster_id=123&user_id=456' \
             *     -H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \
             *     -H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The user in the _user\_id_ query parameter is blocked from the broadcaster's channel.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             *     * The ID in the _user\_id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:vips** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ was not found.
             *     * The ID in _user\_id_ was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The broadcaster doesn’t have available VIP slots. [Read More](https://help.twitch.tv/s/article/Managing-Roles-for-your-Channel?language=en%5FUS#types) */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The user in _user\_id_ is a moderator. To make them a VIP, you must first remove them as a moderator (see [Remove Channel Moderator](https://dev.twitch.tv/docs/api/reference#remove-channel-moderator)).
             *     * The user in the _user\_id_ query parameter is already a VIP.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The broadcaster must complete the Build a Community requirement before they may assign VIPs. */
            425: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The broadcaster exceeded the number of VIP that they may add within a 10-second window. See Rate Limits for this endpoint above. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "remove-channel-vip": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster who owns the channel where the user has VIP status. */
                broadcaster_id: string;
                /** @description The ID of the user to remove VIP status from. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully removed the VIP status from the user.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Removes the VIP user from the broadcaster’s channel.
             *
             *     ```bash
             *     curl -X DELETE 'https://api.twitch.tv/helix/channels/vips?broadcaster_id=123&user_id=456' \
             *     -H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \
             *     -H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ is not valid.
             *     * The ID in _user\_id_ is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:vips** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _broadcaster\_id_ doesn't have permission to remove the user's VIP status. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ was not found.
             *     * The ID in _user\_id_ was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _user\_id_ is not a VIP in the broadcaster's channel. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The broadcaster exceeded the number of VIPs that they may remove within a 10-second window. See Rate Limits for this endpoint above. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-charity-campaign": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that’s currently running a charity campaign. This ID must match the user ID in the access token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved information about the broadcaster’s active charity campaign. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetCharityCampaignResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _broadcaster\_id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:read:charity** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header must match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster is not a partner or affiliate. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-charity-campaign-donations": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The ID of the broadcaster that’s currently running a charity campaign. This ID must match the user ID in the access token. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20. */
                first?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of donations that users contributed to the broadcaster’s charity campaign. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetCharityCampaignDonationsResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _broadcaster\_id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:read:charity** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header must match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster is not a partner or affiliate. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "send-chat-announcement": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that owns the chat room to send the announcement to. */
                broadcaster_id: string;
                /** @description The ID of a user who has permission to moderate the broadcaster’s chat room, or the broadcaster’s ID if they’re sending the announcement. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SendChatAnnouncementBody"];
            };
        };
        responses: {
            /**
             * @description Successfully sent the announcement.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Sends an announcement to the broadcaster’s chat room.
             *
             *     ```bash
             *     curl -X POST 'https://api.twitch.tv/helix/chat/announcements?broadcaster_id=11111&moderator_id=44444' \
             *     -H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \
             *     -H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t' \
             *     -H 'Content-Type: application/json' \
             *     -d '{"message":"Hello chat!","color":"purple"}'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The `message` field in the request's body is required.
             *     * The `message` field may not contain an empty string.
             *     * The string in the `message` field failed review.
             *     * The specified color is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token is missing the **moderator:manage:announcements** scope.
             *     * The OAuth token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The sender has exceeded the number of announcements they may send to this **broadcaster\_id** within a given window. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-channel-chat-badges": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose chat badges you want to get. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s custom chat badges. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChannelChatBadgesResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a valid app access token or user access token.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-global-chat-badges": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of global chat badges. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetGlobalChatBadgesResponse"];
                };
            };
            /**
             * @description * The Authorization header is required and must specify a valid app access token or user access token.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-chatters": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The ID of the broadcaster whose list of chatters you want to get. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 1,000\. The default is 100. */
                first?: number;
                /** @description The ID of the broadcaster or one of the broadcaster’s moderators. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s list of chatters. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChattersResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             *     * The _moderator\_id_ query parameter is required.
             *     * The ID in the _moderator\_id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _moderator\_id_ query parameter must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:read:chatters** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in the _moderator\_id_ query parameter is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-user-chat-color": {
        parameters: {
            query: {
                /**
                 * @description The ID of the user whose username color you want to get. To specify more than one user, include the _user\_id_ parameter for each user to get. For example, `&user_id=1234&user_id=5678`. The maximum number of IDs that you may specify is 100.
                 *
                 *     The API ignores duplicate IDs and IDs that weren’t found.
                 */
                user_id: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the chat color used by the specified users. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetUserChatColorResponse"];
                };
            };
            /** @description * The ID in the _user\_id_ query parameter is not valid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain an app access token or user access token.
             *     * The OAuth token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-user-chat-color": {
        parameters: {
            query: {
                /**
                 * @description The color to use for the user's name in chat. All users may specify one of the following named color values.
                 *
                 *     * blue
                 *     * blue\_violet
                 *     * cadet\_blue
                 *     * chocolate
                 *     * coral
                 *     * dodger\_blue
                 *     * firebrick
                 *     * golden\_rod
                 *     * green
                 *     * hot\_pink
                 *     * orange\_red
                 *     * red
                 *     * sea\_green
                 *     * spring\_green
                 *     * yellow\_green
                 *
                 *     Turbo and Prime users may specify a named color or a Hex color code like #9146FF. If you use a Hex color code, remember to URL encode it.
                 */
                color: "blue" | "blue_violet" | "cadet_blue" | "chocolate" | "coral" | "dodger_blue" | "firebrick" | "golden_rod" | "green" | "hot_pink" | "orange_red" | "red" | "sea_green" | "spring_green" | "yellow_green";
                /** @description The ID of the user whose chat color you want to update. This ID must match the user ID in the access token. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully updated the user's chat color.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Uses a named color to change the color that the user uses for their name in chat.
             *
             *     ```bash
             *     curl -X PUT 'https://api.twitch.tv/helix/chat/color?user_id=123&color=blue' \
             *     -H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \
             *     -H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'
             *     ```
             *
             *     Uses a color Hex code to change the color that the user uses for their name in chat.
             *
             *     ```bash
             *     curl -X PUT 'https://api.twitch.tv/helix/chat/color?user_id=123&color=%239146FF' \
             *     -H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \
             *     -H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _user\_id_ query parameter is not valid.
             *     * The _color_ query parameter is required.
             *     * The named color in the _color_ query parameter is not valid.
             *     * To specify a Hex color code, the user must be a Turbo or Prime user.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:manage:chat\_color** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the _user\_id_ query parameter must match the user ID in the access token.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-channel-emotes": {
        parameters: {
            query: {
                /** @description An ID that identifies the broadcaster whose emotes you want to get. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved broadcaster's list of custom emotes. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChannelEmotesResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a valid app access token or user access token.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-global-emotes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved Twitch's list of global emotes. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetGlobalEmotesResponse"];
                };
            };
            /**
             * @description * The Authorization header is required and must specify a valid app access token or user access token.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-emote-sets": {
        parameters: {
            query: {
                /**
                 * @description An ID that identifies the emote set to get. Include this parameter for each emote set you want to get. For example, `emote_set_id=1234&emote_set_id=5678`. You may specify a maximum of 25 IDs. The response contains only the IDs that were found and ignores duplicate IDs.
                 *
                 *     To get emote set IDs, use the [Get Channel Emotes](https://dev.twitch.tv/docs/api/reference#get-channel-emotes) API.
                 */
                emote_set_id: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the emotes for the specified emote sets. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetEmoteSetsResponse"];
                };
            };
            /**
             * @description * The _emote\_set\_id_ query parameter is required.
             *     * The number of _emote\_set\_id_ query parameters exceeds the maximum allowed.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a valid app access token or user access token.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-user-emotes": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The Pagination object in the response contains the cursor’s value. */
                after?: string;
                /**
                 * @description The User ID of a broadcaster you wish to get follower emotes of. Using this query parameter will guarantee inclusion of the broadcaster’s follower emotes in the response body.
                 *
                 *     **Note:** If the user specified in `user_id` is subscribed to the broadcaster specified, their follower emotes will appear in the response body regardless if this query parameter is used.
                 */
                broadcaster_id?: string;
                /** @description The ID of the user. This ID must match the user ID in the user access token. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the emotes. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetUserEmotesResponse"];
                };
            };
            /**
             * @description * The _user\_id_ query parameter is required.
             *     * The ID in the _user\_id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _user\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:read:emotes** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "send-chat-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SendChatMessageBody"];
            };
        };
        responses: {
            /** @description Successfully sent the specified broadcaster a message. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendChatMessageResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             *     * The _sender\_id_ query parameter is required.
             *     * The ID in the _sender\_id_ query parameter is not valid.
             *     * The _text_ query parameter is required.
             *     * The ID in the _reply\_parent\_message\_id_ query parameter is not valid.
             *     * Cannot set \*for\_source\_only\* if User Access Token is used.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the user\_id query parameter must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the user:write:chat scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The sender is not permitted to send chat messages to the broadcaster’s chat room. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The message is too large. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-chat-settings": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose chat settings you want to get. */
                broadcaster_id: string;
                /**
                 * @description The ID of the broadcaster or one of the broadcaster’s moderators.
                 *
                 *     This field is required only if you want to include the `non_moderator_chat_delay` and `non_moderator_chat_delay_duration` settings in the response.
                 *
                 *     If you specify this field, this ID must match the user ID in the user access token.
                 */
                moderator_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s chat settings. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChatSettingsResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a valid app access token or user access token.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-chat-settings": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose chat settings you want to update. */
                broadcaster_id: string;
                /** @description The ID of a user that has permission to moderate the broadcaster’s chat room, or the broadcaster’s ID if they’re making the update. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateChatSettingsBody"];
            };
        };
        responses: {
            /** @description Successfully updated the broadcaster’s chat settings. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateChatSettingsResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _moderator\_id_ query parameter is required.
             *     * If _slow\_mode_ is **true**, the `slow_mode_wait_time` field must be set to a valid value.
             *     * If `follower_mode` is **true**, the `follower_mode_duration` field must be set to a valid value.
             *     * If `non_moderator_chat_delay` is **true**, the `non_moderator_chat_delay_duration` field must be set to a valid value.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _moderator\_id_ query parameter must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:manage:chat\_settings** scope.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in the _moderator\_id_ query parameter must have moderator privileges in the broadcaster's channel. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "send-a-shoutout": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that’s sending the Shoutout. */
                from_broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that is one of the broadcaster’s moderators. This ID must match the user ID in the access token. */
                moderator_id: string;
                /** @description The ID of the broadcaster that’s receiving the Shoutout. */
                to_broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully sent the specified broadcaster a Shoutout.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     ```bash
             *     curl -X POST 'https://api.twitch.tv/helix/chat/shoutouts?from_broadcaster_id=12345&to_broadcaster_id=626262&moderator_id=98765' \
             *     -H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \
             *     -H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The _from\_broadcaster\_id_ query parameter is required.
             *     * The ID in the _from\_broadcaster\_id_ query parameter is not valid.
             *     * The _to\_broadcaster\_id_ query parameter is required.
             *     * The ID in the _to\_broadcaster\_id_ query parameter is not valid.
             *     * The broadcaster may not give themselves a Shoutout.
             *     * The broadcaster is not streaming live or does not have one or more viewers.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:manage:shoutouts** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The user in _moderator\_id_ is not one of the broadcaster's moderators.
             *     * The broadcaster may not send the specified broadcaster a Shoutout.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The broadcaster exceeded the number of Shoutouts they may send within a given window. See the endpoint's Rate Limits.
             *     * The broadcaster exceeded the number of Shoutouts they may send the same broadcaster within a given window. See the endpoint's Rate Limits.
             */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-clips": {
        parameters: {
            query?: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                before?: string;
                /** @description An ID that identifies the broadcaster whose video clips you want to get. Use this parameter to get clips that were captured from the broadcaster’s streams. */
                broadcaster_id?: string;
                /** @description The end date used to filter clips. If not specified, the time window is the start date plus one week. Specify the date and time in RFC3339 format. */
                ended_at?: string;
                /** @description The maximum number of clips to return per page in the response. The minimum page size is 1 clip per page and the maximum is 100\. The default is 20. */
                first?: number;
                /** @description An ID that identifies the game whose clips you want to get. Use this parameter to get clips that were captured from streams that were playing this game. */
                game_id?: string;
                /** @description An ID that identifies the clip to get. To specify more than one ID, include this parameter for each clip you want to get. For example, `id=foo&id=bar`. You may specify a maximum of 100 IDs. The API ignores duplicate IDs and IDs that aren’t found. */
                id?: string[];
                /** @description A Boolean value that determines whether the response includes featured clips. If **true**, returns only clips that are featured. If **false**, returns only clips that aren’t featured. All clips are returned if this parameter is not present. */
                is_featured?: boolean;
                /** @description The start date used to filter clips. The API returns only clips within the start and end date window. Specify the date and time in RFC3339 format. */
                started_at?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of video clips. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetClipsResponse"];
                };
            };
            /**
             * @description * The _id_ or _game\_id_ or _broadcaster\_id_ query parameter is required.
             *     * The _id_, _game\_id_, and _broadcaster\_id_ query parameters are mutually exclusive; you may specify only one of them.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain an app access token or user access token.
             *     * The OAuth token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The ID in _game\_id_ was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-clip": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose stream you want to create a clip from. */
                broadcaster_id: string;
                /** @description The length of the clip in seconds. Possible values range from 5 to 60 inclusively with a precision of 0.1\. The default is 30. */
                duration?: number;
                /** @description The title of the clip. */
                title?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully started the clip process. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateClipResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter was not found.
             *     * The category is not clippable.
             *     * The title did not pass AutoMod checks.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify user access token.
             *     * The user access token must include the **clips:edit** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The broadcaster has restricted the ability to capture clips to followers and/or subscribers only.
             *     * The specified broadcaster has not enabled clips on their channel.
             *     * The user is banned or timed out from the broadcaster’s channel.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster in the _broadcaster\_id_ query parameter must be broadcasting live. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-clips-download": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster you want to download clips for. */
                broadcaster_id: string;
                /** @description The ID that identifies the clip you want to download. Include this parameter for each clip you want to download, up to a maximum of 10 clips. For example, `clip_id=SleepyGiftedPeppermintNerfRedBlaster-KbkBXYt3lOk3jy8-&clip_id=WimpyAltruisticKleeKeyboardCat-EiY5yMrEwZ4i4gwC`. */
                clip_id: string[];
                /** @description The User ID of the editor for the channel you want to download a clip for. If using the broadcaster’s auth token, this is the same as `broadcaster_id`. This must match the `user_id` in the user access token. */
                editor_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the clip download URL(s). */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetClipsDownloadResponse"];
                };
            };
            /** @description The ID in the broadcaster\_id, editor\_id, or clip\_id query parameter is not valid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The OAuth token is not valid.
             *     * The Authorization header is required and must contain a user access token or app access token.
             *     * The access token must include the editor:manage:clips or channel:manage:clips scope
             *     * The access token is not valid
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The user is not an editor for the specified broadcaster. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal Server Error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-content-classification-labels": {
        parameters: {
            query?: {
                /**
                 * @description Locale for the Content Classification Labels. You may specify a maximum of 1 locale. Default: `“en-US”`
                 *     Supported locales: `"bg-BG", "cs-CZ", "da-DK", "da-DK", "de-DE", "el-GR", "en-GB", "en-US", "es-ES", "es-MX", "fi-FI", "fr-FR", "hu-HU", "it-IT", "ja-JP", "ko-KR", "nl-NL", "no-NO", "pl-PL", "pt-BT", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sv-SE", "th-TH", "tr-TR", "vi-VN", "zh-CN", "zh-TW"`
                 */
                locale?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of CCLs available. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetContentClassificationLabelsResponse"];
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-drops-entitlements": {
        parameters: {
            query?: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The maximum number of entitlements to return per page in the response. The minimum page size is 1 entitlement per page and the maximum is 1000\. The default is 20. */
                first?: number;
                /**
                 * @description The entitlement’s fulfillment status. Used to filter the list to only those with the specified status. Possible values are:
                 *
                 *     * CLAIMED
                 *     * FULFILLED
                 */
                fulfillment_status?: "CLAIMED" | "FULFILLED";
                /** @description An ID that identifies a game that offered entitlements. */
                game_id?: string;
                /** @description An ID that identifies the entitlement to get. Include this parameter for each entitlement you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 100 IDs. */
                id?: string[];
                /** @description An ID that identifies a user that was granted entitlements. */
                user_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the entitlements. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetDropsEntitlementsResponse"];
                };
            };
            /**
             * @description * The value in the _fulfillment\_status_ query parameter is not valid.
             *     * The ID in the _user\_id_ query parameter must match the user ID in the user access token.
             *     * The client in the access token is not associated with a known organization.
             *     * The owner of the client in the access token is not a member of the organization.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the Client-Id header must match the Client ID in the access token.
             *     * The Authorization header is required and must specify an app access token or user access token.
             *     * The access token is not valid.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The organization associated with the client in the access token must own the game specified in the _game\_id_ query parameter.
             *     * The organization associated with the client in the access token must own the entitlements specified in the _id_ query parameter.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-drops-entitlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateDropsEntitlementsBody"];
            };
        };
        responses: {
            /** @description Successfully requested the updates. Check the response to determine which updates succeeded. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateDropsEntitlementsResponse"];
                };
            };
            /**
             * @description * The value in the `fulfillment_status` field is not valid.
             *     * The client in the access token is not associated with a known organization.
             *     * The owner of the client in the access token is not a member of the organization.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-conduits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved conduits. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetConduitsResponse"];
                };
            };
            /** @description Authorization header required with an app access token. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-conduits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateConduitsBody"];
            };
        };
        responses: {
            /** @description Conduit created. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateConduitsResponse"];
                };
            };
            /** @description Invalid shard count. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Authorization header required with an app access token. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Conduit limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-conduit": {
        parameters: {
            query: {
                /** @description Conduit ID. */
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully deleted the conduit.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     ```bash
             *     curl -X DELETE 'https://api.twitch.tv/helix/eventsub/conduits?id=bfcfc993-26b1-b876-44d9-afe75a379dac' \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The id query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Authorization header required with an app access token. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Conduit not found.
             *     * Conduit’s owner must match the client ID in the access token.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-conduits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateConduitsBody"];
            };
        };
        responses: {
            /** @description Conduit updated. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateConduitsResponse"];
                };
            };
            /**
             * @description * Invalid shard count
             *     * The id query parameter is required.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Authorization header required with an app access token. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Conduit not found.
             *     * Conduit’s owner must match the client ID in the access token.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-conduit-shards": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The pagination object in the response contains the cursor’s value. */
                after?: string;
                /** @description Conduit ID. */
                conduit_id: string;
                /** @description Status to filter by. */
                status?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved shards. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetConduitShardsResponse"];
                };
            };
            /** @description The id query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Authorization header required with an app access token. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Conduit not found.
             *     * Conduit’s owner must match the client ID in the access token.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-conduit-shards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateConduitShardsBody"];
            };
        };
        responses: {
            /** @description Successfully retrieved shards. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateConduitShardsResponse"];
                };
            };
            /** @description The id query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Authorization header required with an app access token. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Conduit not found.
             *     * Conduit’s owner must match the client ID in the access token.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-eventsub-subscriptions": {
        parameters: {
            query?: {
                /** @description The cursor used to get the next page of results. The `pagination` object in the response contains the cursor's value. */
                after?: string;
                /**
                 * @description Filter subscriptions by its status. Possible values are:
                 *
                 *     * enabled — The subscription is enabled.
                 *     * webhook\_callback\_verification\_pending — The subscription is pending verification of the specified callback URL.
                 *     * webhook\_callback\_verification\_failed — The specified callback URL failed verification.
                 *     * notification\_failures\_exceeded — The notification delivery failure rate was too high.
                 *     * authorization\_revoked — The authorization was revoked for one or more users specified in the **Condition** object.
                 *     * moderator\_removed — The moderator that authorized the subscription is no longer one of the broadcaster's moderators.
                 *     * user\_removed — One of the users specified in the **Condition** object was removed.
                 *     * chat\_user\_banned - The user specified in the **Condition** object was banned from the broadcaster's chat.
                 *     * version\_removed — The subscription to subscription type and version is no longer supported.
                 *     * beta\_maintenance — The subscription to the beta subscription type was removed due to maintenance.
                 *     * websocket\_disconnected — The client closed the connection.
                 *     * websocket\_failed\_ping\_pong — The client failed to respond to a ping message.
                 *     * websocket\_received\_inbound\_traffic — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message).
                 *     * websocket\_connection\_unused — The client failed to subscribe to events within the required time.
                 *     * websocket\_internal\_error — The Twitch WebSocket server experienced an unexpected error.
                 *     * websocket\_network\_timeout — The Twitch WebSocket server timed out writing the message to the client.
                 *     * websocket\_network\_error — The Twitch WebSocket server experienced a network error writing the message to the client.
                 *     * websocket\_failed\_to\_reconnect - The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.
                 */
                status?: "enabled" | "webhook_callback_verification_pending" | "webhook_callback_verification_failed" | "notification_failures_exceeded" | "authorization_revoked" | "moderator_removed" | "user_removed" | "chat_user_banned" | "version_removed" | "beta_maintenance" | "websocket_disconnected" | "websocket_failed_ping_pong" | "websocket_received_inbound_traffic" | "websocket_connection_unused" | "websocket_internal_error" | "websocket_network_timeout" | "websocket_network_error" | "websocket_failed_to_reconnect";
                /** @description Returns an array with the subscription matching the ID (as long as it is owned by the client making the request), or an empty array if there is no matching subscription. */
                subscription_id?: string;
                /** @description Filter subscriptions by subscription type. For a list of subscription types, see [Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#subscription-types). */
                type?: "automod.message.hold" | "automod.message.update" | "automod.settings.update" | "automod.terms.update" | "channel.bits.use" | "channel.update" | "channel.follow" | "channel.ad_break.begin" | "channel.chat.clear" | "channel.chat.clear_user_messages" | "channel.chat.message" | "channel.chat.message_delete" | "channel.chat.notification" | "channel.chat_settings.update" | "channel.chat.user_message_hold" | "channel.chat.user_message_update" | "channel.shared_chat.begin" | "channel.shared_chat.update" | "channel.shared_chat.end" | "channel.subscribe" | "channel.subscription.end" | "channel.subscription.gift" | "channel.subscription.message" | "channel.cheer" | "channel.raid" | "channel.ban" | "channel.unban" | "channel.unban_request.create" | "channel.unban_request.resolve" | "channel.moderate" | "channel.moderator.add" | "channel.moderator.remove" | "channel.guest_star_session.begin" | "channel.guest_star_session.end" | "channel.guest_star_guest.update" | "channel.guest_star_settings.update" | "channel.channel_points_automatic_reward_redemption.add" | "channel.channel_points_custom_reward.add" | "channel.channel_points_custom_reward.update" | "channel.channel_points_custom_reward.remove" | "channel.channel_points_custom_reward_redemption.add" | "channel.channel_points_custom_reward_redemption.update" | "channel.poll.begin" | "channel.poll.progress" | "channel.poll.end" | "channel.prediction.begin" | "channel.prediction.progress" | "channel.prediction.lock" | "channel.prediction.end" | "channel.suspicious_user.message" | "channel.suspicious_user.update" | "channel.vip.add" | "channel.vip.remove" | "channel.warning.acknowledge" | "channel.warning.send" | "channel.charity_campaign.donate" | "channel.charity_campaign.start" | "channel.charity_campaign.progress" | "channel.charity_campaign.stop" | "conduit.shard.disabled" | "drop.entitlement.grant" | "extension.bits_transaction.create" | "channel.goal.begin" | "channel.goal.progress" | "channel.goal.end" | "channel.hype_train.begin" | "channel.hype_train.progress" | "channel.hype_train.end" | "channel.shield_mode.begin" | "channel.shield_mode.end" | "channel.shoutout.create" | "channel.shoutout.receive" | "stream.online" | "stream.offline" | "user.authorization.grant" | "user.authorization.revoke" | "user.update" | "user.whisper.message";
                /** @description Filter subscriptions by user ID. The response contains subscriptions where this ID matches a user ID that you specified in the **Condition** object when you [created the subscription](https://dev.twitch.tv/docs/api/reference#create-eventsub-subscription). */
                user_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the subscriptions. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetEventSubSubscriptionsResponse"];
                };
            };
            /**
             * @description * The request may specify only one filter query parameter. For example, either _type_ or _status_ or _user\_id_.
             *     * The value in the _type_ query parameter is not valid.
             *     * The value in the _status_ query parameter is not valid.
             *     * The cursor specified in the _after_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-eventsub-subscription": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateEventSubSubscriptionBody"];
            };
        };
        responses: {
            /** @description Successfully accepted the subscription request. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateEventSubSubscriptionResponse"];
                };
            };
            /**
             * @description * The `condition` field is required.
             *     * The user specified in the `condition` object does not exist.
             *     * The `condition` object is missing one or more required fields.
             *     * The combination of values in the `version` and `type` fields is not valid.
             *     * The length of the string in the `secret` field is not valid.
             *     * The URL in the transport's `callback` field is not valid. The URL must use the HTTPS protocol and the 443 port number.
             *     * The value specified in the `method` field is not valid.
             *     * The `callback` field is required if you specify the webhook transport method.
             *     * The `session_id` field is required if you specify the WebSocket transport method.
             *     * The combination of subscription type and version is not valid.
             *     * The `conduit_id` field is required if you specify the Conduit transport method.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token if the transport method is webhook.
             *     * The Authorization header is required and must specify a user access token if the transport method is WebSocket.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The access token is missing the required scopes. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description A subscription already exists for the specified event type and `condition` combination. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request exceeds the number of subscriptions that you may create with the same combination of `type` and `condition` values. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-eventsub-subscription": {
        parameters: {
            query: {
                /** @description The ID of the subscription to delete. */
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully deleted the subscription.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Deletes the specified EventSub subscription.
             *
             *     ```bash
             *     curl -X DELETE
             *     'https://api.twitch.tv/helix/eventsub/subscriptions?id=26b1c993-bfcf-44d9-b876-379dacafe75a' \
             *     -H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \
             *     -H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz'
             *     ```
             *
             *     ```bash
             *     # Twitch CLI example that deletes the specified subscription.
             *
             *     twitch api delete /eventsub/subscriptions -q id=c839a466-034a-4d77-8d4d-c9a751516e7
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The _id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The subscription was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-extensions": {
        parameters: {
            query: {
                /** @description The ID of the extension to get. */
                extension_id: string;
                /** @description The version of the extension to get. If not specified, it returns the latest, released version. If you don’t have a released version, you must specify a version; otherwise, the list is empty. */
                extension_version?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of extensions. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetExtensionsResponse"];
                };
            };
            /** @description * The _extension\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The request must specify the Authorization header.
             *     * The Authorization header is required and must specify a JWT token.
             *     * The JWT token is not valid.
             *     * The request must specify the Client-Id header.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The extension in the _extension\_id_ query parameter was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "send-extension-chat-message": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that has activated the extension. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SendExtensionChatMessageBody"];
            };
        };
        responses: {
            /**
             * @description Successfully sent the chat message.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     ```bash
             *     curl -X POST 'https://api.twitch.tv/helix/extensions/chat?broadcaster_id=237757755' \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2' \
             *     -H 'Content-Type: application/json' \
             *     -d '{
             *       "text": "Hello",
             *       "extension_id": "uo6dggojyb8d6soh92zknwmi5ej1q2",
             *       "extension_version": "0.0.9"
             *     }
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The `extension_id` field in the request's body is required.
             *     * The `extension_version` field in the request's body is required.
             *     * The `text` field in the request's body is required.
             *     * The message is too long.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a JWT token.
             *     * The ID in the _broadcaster\_id_ query parameter must match the `channel_id` claim in the JWT.
             *     * The JWT token is not valid.
             *     * The Client-Id header is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-extension-configuration-segment": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that installed the extension. This parameter is required if you set the _segment_ parameter to broadcaster or developer. Do not specify this parameter if you set _segment_ to global. */
                broadcaster_id?: string;
                /** @description The ID of the extension that contains the configuration segment you want to get. */
                extension_id: string;
                /**
                 * @description The type of configuration segment to get. Possible case-sensitive values are:
                 *
                 *     * broadcaster
                 *     * developer
                 *     * global
                 *
                 *     You may specify one or more segments. To specify multiple segments, include the `segment` parameter for each segment to get. For example, `segment=broadcaster&segment=developer`. Ignores duplicate segments.
                 */
                segment: "broadcaster" | "developer" | "global";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the configurations. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetExtensionConfigurationSegmentResponse"];
                };
            };
            /**
             * @description * The _extension\_id_ query parameter is required.
             *     * The value in the _segment_ query parameter is not valid.
             *     * The _broadcaster\_id_ query parameter is required if the _segment_ query parameter is set to broadcaster or developer.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a JWT token.
             *     * The JWT token is not valid.
             *     * The Client-Id header is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The app exceeded the number of requests that it may make per minute. See Rate Limits above. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "set-extension-configuration-segment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SetExtensionConfigurationSegmentBody"];
            };
        };
        responses: {
            /**
             * @description Successfully updated the configuration.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     ```bash
             *     curl -X PUT 'https://api.twitch.tv/helix/extensions/configurations' \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2' \
             *     -H 'Content-Type: application/json' \
             *     -d '{
             *       "extension_id": "uo6dggojyb8d6soh92zknwmi5ej1q2",
             *       "segment": "global",
             *       "version": "0.0.1",
             *       "content": "hello config!"
             *     }'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The `broadcaster_id` field is required if `segment` is set to developer or broadcaster. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a JWT token.
             *     * The JWT token is not valid.
             *     * The Client-Id header is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-extension-secrets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of secrets. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetExtensionSecretsResponse"];
                };
            };
            /** @description * The _extension\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a JWT token.
             *     * The JWT token is not valid.
             *     * The Client-Id header is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-extension-secret": {
        parameters: {
            query: {
                /** @description The amount of time, in seconds, to delay activating the secret. The delay should provide enough time for instances of the extension to gracefully switch over to the new secret. The minimum delay is 300 seconds (5 minutes). The default is 300 seconds. */
                delay?: number;
                /** @description The ID of the extension to apply the shared secret to. */
                extension_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully created the new secret. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateExtensionSecretResponse"];
                };
            };
            /**
             * @description * The _extension\_id_ query parameter is required.
             *     * The delay specified in the _delay_ query parameter is too short.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a JWT token.
             *     * The JWT token is not valid.
             *     * The Client-Id header is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-extension-live-channels": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The `pagination` field in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The ID of the extension to get. Returns the list of broadcasters that are live and that have installed or activated this extension. */
                extension_id: string;
                /** @description The specific maximum number of items per page in the response. The actual number returned may be less than this limit. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                first?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of broadcasters. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetExtensionLiveChannelsResponse"];
                };
            };
            /**
             * @description * The _extension\_id_ query parameter is required.
             *     * The pagination cursor is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The extension specified in the _extension\_id_ query parameter was not found or it's not being used in a live stream. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "send-extension-pubsub-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SendExtensionPubSubMessageBody"];
            };
        };
        responses: {
            /**
             * @description Successfully sent the message.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     ```bash
             *     curl -X POST 'https://api.twitch.tv/helix/extensions/pubsub' \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2' \
             *     -H 'Content-Type: application/json' \
             *     -d '{
             *       "message": "hello world!",
             *       "broadcaster_id": "141981764",
             *       "target": ["broadcast"]
             *     }'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The `broadcaster_id` field in the request's body may only be set if the `is_global_broadcast` field is set to **false**. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a JWT token.
             *     * The JWT token is not valid.
             *     * The Client-Id header is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The message is too large. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-released-extensions": {
        parameters: {
            query: {
                /** @description The ID of the extension to get. */
                extension_id: string;
                /** @description The version of the extension to get. If not specified, it returns the latest version. */
                extension_version?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the extension. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetReleasedExtensionsResponse"];
                };
            };
            /** @description * The _extension\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header must specify an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The extension specified in the _extension\_id_ query parameter was not found or is not released. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "set-extension-required-configuration": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that installed the extension on their channel. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SetExtensionRequiredConfigurationBody"];
            };
        };
        responses: {
            /**
             * @description Successfully updated the extension’s required\_configuration string.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     ```bash
             *     curl -X PUT 'https://api.twitch.tv/helix/extensions/required_configuration?broadcaster_id=274637212' \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2' \
             *     -H 'Content-Type: application/json' \
             *     -d '{
             *       "required_configuration": "RCS",
             *       "extension_id": "uo6dggojyb8d6soh92zknwmi5ej1q2",
             *       "extension_version": "0.0.1"
             *     }'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The `extension_id` field is required.
             *     * The `extension_version` field is required.
             *     * The `required_configuration` field is required.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a JWT token.
             *     * The JWT token is not valid.
             *     * The Client-Id header is required.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-extension-transactions": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The ID of the extension whose list of transactions you want to get. */
                extension_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20. */
                first?: number;
                /** @description A transaction ID used to filter the list of transactions. Specify this parameter for each transaction you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 100 IDs. */
                id?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of transactions. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetExtensionTransactionsResponse"];
                };
            };
            /**
             * @description * The _extension\_id_ query parameter is required.
             *     * The request specified too many _id_ query parameters.
             *     * The pagination cursor is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token.
             *     * The access token is not valid.
             *     * The ID in the _extension\_id_ query parameter must match the client ID in the access token.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * One or more of the transaction IDs specified using the _id_ query parameter were not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-games": {
        parameters: {
            query?: {
                /** @description The ID of the category or game to get. Include this parameter for each category or game you want to get. For example, `&id=1234&id=5678`. You may specify a maximum of 100 IDs. The endpoint ignores duplicate and invalid IDs or IDs that weren’t found. */
                id?: string[];
                /** @description The [IGDB](https://www.igdb.com/) ID of the game to get. Include this parameter for each game you want to get. For example, `&igdb_id=1234&igdb_id=5678`. You may specify a maximum of 100 IDs. The endpoint ignores duplicate and invalid IDs or IDs that weren’t found. */
                igdb_id?: string[];
                /** @description The name of the category or game to get. The name must exactly match the category’s or game’s title. Include this parameter for each category or game you want to get. For example, `&name=foo&name=bar`. You may specify a maximum of 100 names. The endpoint ignores duplicate names and names that weren’t found. */
                name?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the specified games. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetGamesResponse"];
                };
            };
            /**
             * @description * The request must specify the _id_ or _name_ or _igdb\_id_ query parameter.
             *     * The combined number of game IDs (_id_ and _igdb\_id_) and game names that you specify in the request must not exceed 100.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-top-games": {
        parameters: {
            query?: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                before?: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20. */
                first?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of broadcasts. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetTopGamesResponse"];
                };
            };
            /**
             * @description * The value in the _first_ query parameter is not valid.
             *     * The cursor in the _after_ or _before_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-creator-goals": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that created the goals. This ID must match the user ID in the user access token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s goals. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetCreatorGoalsResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:read:goals** scope.
             *     * The ID in _broadcaster\_id_ must match the user ID in the user access token.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-channel-guest-star-settings": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster you want to get guest star settings for. */
                broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChannelGuestStarSettingsResponse"];
                };
            };
            /**
             * @description * Missing _broadcaster\_id_
             *     * Missing _moderator\_id_
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Insufficient authorization for viewing channel’s Guest Star settings */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-channel-guest-star-settings": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster you want to update Guest Star settings for. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateChannelGuestStarSettingsBody"];
            };
        };
        responses: {
            /**
             * @description Successfully updated channel settings
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Update browser source layout settings
             *
             *     ```bash
             *     curl -x PUT `https://api.twitch.tv/helix/guest_star/channel_settings?broadcaster_id=9321049&group_layout=TILED_LAYOUT` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             *
             *     _Request:_
             *
             *     Disable moderator control of slot live setting
             *
             *     ```bash
             *     curl -x PUT `https://api.twitch.tv/helix/guest_star/channel_settings?broadcaster_id=9321049&is_moderator_send_live_enabled=false` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             *
             *     _Request:_
             *
             *     Update max slot count
             *
             *     ```bash
             *     curl -x PUT `https://api.twitch.tv/helix/guest_star/channel_settings?broadcaster_id=9321049&slot_count=6` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             *
             *     _Request:_
             *
             *     Regenerate browser sources
             *
             *     ```bash
             *     curl -x PUT `https://api.twitch.tv/helix/guest_star/channel_settings?broadcaster_id=9321049&regenerate_browser_sources=true` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Missing _broadcaster\_id_
             *     * Invalid _slot\_count_
             *     * Invalid _group\_layout_
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-guest-star-invites": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster running the Guest Star session. */
                broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the `user_id` in the user access token. */
                moderator_id: string;
                /** @description The session ID to query for invite status. */
                session_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetGuestStarInvitesResponse"];
                };
            };
            /**
             * @description * Missing _broadcaster\_id_
             *     * Missing _session\_id_
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "send-guest-star-invite": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster running the Guest Star session. */
                broadcaster_id: string;
                /** @description Twitch User ID for the guest to invite to the Guest Star session. */
                guest_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the `user_id` in the user access token. */
                moderator_id: string;
                /** @description The session ID for the invite to be sent on behalf of the broadcaster. */
                session_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description __Examples__
             *
             *     _Request:_
             *
             *     Invite user to Guest Star session
             *
             *     ```bash
             *     curl -x POST `https://api.twitch.tv/helix/guest_star/invites?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&guest_id=144601104` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Missing _broadcaster\_id_
             *     * Missing _moderator\_id_
             *     * Missing _session\_id_
             *     * Missing _guest\_id_
             *     * Invalid _session\_id_
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Unauthorized guest invited
             *     * Guest already invited
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-guest-star-invite": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster running the Guest Star session. */
                broadcaster_id: string;
                /** @description Twitch User ID for the guest to revoke the Guest Star session invite from. */
                guest_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the `user_id` in the user access token. */
                moderator_id: string;
                /** @description The ID of the session for the invite to be revoked on behalf of the broadcaster. */
                session_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description __Examples__
             *
             *     _Request:_
             *
             *     Remove invite to session
             *
             *     ```bash
             *     curl -x DELETE `https://api.twitch.tv/helix/guest_star/invites?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&guest_id=144601104` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Missing _broadcaster\_id_
             *     * Missing _session\_id_
             *     * Missing _guest\_id_
             *     * Invalid _session\_id_
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description No invite exists for specified _guest\_id_ */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-guest-star-session": {
        parameters: {
            query: {
                /** @description ID for the user hosting the Guest Star session. */
                broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetGuestStarSessionResponse"];
                };
            };
            /**
             * @description * Missing _broadcaster\_id_
             *     * Missing _moderator\_id_
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description _moderator\_id_ and user token do not match */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-guest-star-session": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster you want to create a Guest Star session for. Provided `broadcaster_id` must match the `user_id` in the auth token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateGuestStarSessionResponse"];
                };
            };
            /**
             * @description * Missing _broadcaster\_id_
             *     * Session limit reached (1 active call)
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Phone verification missing */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Insufficient authorization for creating session */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "end-guest-star-session": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster you want to end a Guest Star session for. Provided `broadcaster_id` must match the `user_id` in the auth token. */
                broadcaster_id: string;
                /** @description ID for the session to end on behalf of the broadcaster. */
                session_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EndGuestStarSessionResponse"];
                };
            };
            /**
             * @description * Missing or invalid _broadcaster\_id_
             *     * Missing or invalid _session\_id_
             *     * Session has already been ended
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Insufficient authorization for ending session */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "assign-guest-star-slot": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster running the Guest Star session. */
                broadcaster_id: string;
                /** @description The Twitch User ID corresponding to the guest to assign a slot in the session. This user must already have an invite to this session, and have indicated that they are ready to join. */
                guest_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the `user_id` in the user access token. */
                moderator_id: string;
                /** @description The ID of the Guest Star session in which to assign the slot. */
                session_id: string;
                /** @description The slot assignment to give to the user. Must be a numeric identifier between “1” and “N” where N is the max number of slots for the session. Max number of slots allowed for the session is reported by [Get Channel Guest Star Settings](https://dev.twitch.tv/docs/api/reference#get-channel-guest-star-settings). */
                slot_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfuly assigned guest to slot
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Assign invited user to slot
             *
             *     ```bash
             *     curl -x POST `https://api.twitch.tv/helix/guest_star/slot?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&guest_id=144601104&slot_id=1` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Missing _broadcaster\_id_
             *     * Missing _moderator\_id_
             *     * Missing _guest\_id_
             *     * Missing or invalid _session\_id_
             *     * Missing or invalid _slot\_id_
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description _moderator\_id_ is not a guest star moderator */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Cannot assign host slot
             *     * Guest not invited to session
             *     * Guest already assigned to slot
             *     * Guest is not ready to join
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-guest-star-slot": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster running the Guest Star session. */
                broadcaster_id: string;
                /** @description The Twitch User ID corresponding to the guest to remove from the session. */
                guest_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
                /** @description The ID of the Guest Star session in which to remove the slot assignment. */
                session_id: string;
                /** @description Flag signaling that the guest should be reinvited to the session, sending them back to the invite queue. */
                should_reinvite_guest?: string;
                /** @description The slot ID representing the slot assignment to remove from the session. */
                slot_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfuly removed user from slot
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Remove user from slot
             *
             *     ```bash
             *     curl -x DELETE `https://api.twitch.tv/helix/guest_star/slot?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&guest_id=144601104&slot_id=1` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Missing _broadcaster\_id_
             *     * Missing _moderator\_id_
             *     * Missing or invalid _session\_id_
             *     * Missing or invalid _slot\_id_
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * _moderator\_id_ is not a Guest Star moderator
             *     * The request is attempting to modify a restricted slot
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description _guest\_id_ or _slot\_id_ not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-guest-star-slot": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster running the Guest Star session. */
                broadcaster_id: string;
                /** @description The slot to move this user assignment to. If the destination slot is occupied, the user assigned will be swapped into `source_slot_id`. */
                destination_slot_id?: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the `user_id` in the user access token. */
                moderator_id: string;
                /** @description The ID of the Guest Star session in which to update slot settings. */
                session_id: string;
                /** @description The slot assignment previously assigned to a user. */
                source_slot_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfuly updated slot(s)
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Move slot assignment to a new slot ID
             *
             *     ```bash
             *     curl -x PATCH `https://api.twitch.tv/helix/guest_star/slot?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&source_slot_id=1&destination_slot_id=2` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Missing _broadcaster\_id_
             *     * Missing or invalid _session\_id_
             *     * Missing or invalid _slot\_id_
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-guest-star-slot-settings": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster running the Guest Star session. */
                broadcaster_id: string;
                /** @description Flag indicating whether the slot is allowed to share their audio with the rest of the session. If false, the slot will be muted in any views containing the slot. */
                is_audio_enabled?: boolean;
                /** @description Flag indicating whether the user assigned to this slot is visible/can be heard from any public subscriptions. Generally, this determines whether or not the slot is enabled in any broadcasting software integrations. */
                is_live?: boolean;
                /** @description Flag indicating whether the slot is allowed to share their video with the rest of the session. If false, the slot will have no video shared in any views containing the slot. */
                is_video_enabled?: boolean;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
                /** @description The ID of the Guest Star session in which to update a slot’s settings. */
                session_id: string;
                /** @description The slot assignment that has previously been assigned to a user. */
                slot_id: string;
                /** @description Value from 0-100 that controls the audio volume for shared views containing the slot. */
                volume?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfuly updated slot settings
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Update slot settings to enable slot in broadcasting software
             *
             *     ```bash
             *     curl -x PATCH `https://api.twitch.tv/helix/guest_star/slot_settings?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&slot_id=1&is_audio_enabled=false` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             *
             *     _Request:_
             *
             *     Mute a slot’s audio for a guest
             *
             *     ```bash
             *     curl -x PATCH `https://api.twitch.tv/helix/guest_star/slot_settings?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&slot_id=1&is_live=true` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             *
             *     _Request:_
             *
             *     Allow slot audio to be unmuted by a guest. **NOTE**: This operation does not immediately unmute the guest. The guest will be notified they can unmute themselves when ready.
             *
             *     ```bash
             *     curl -x PATCH `https://api.twitch.tv/helix/guest_star/slot_settings?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&slot_id=1&is_audio_enabled=true` \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Missing _broadcaster\_id_
             *     * Missing _moderator\_id_
             *     * Missing or invalid _session\_id_
             *     * Missing or invalid _slot\_id_
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * _moderator\_id_ is not a Guest Star moderator
             *     * The request is attempting to modify a restricted slot
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-hype-train-status": {
        parameters: {
            query: {
                /** @description The User ID of the channel broadcaster. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the status object. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetHypeTrainStatusResponse"];
                };
            };
            /** @description The ID in the `broadcaster_id` query parameter is not valid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The OAuth token is not valid.
             *     * The Authorization header is required and must contain a user access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal Server Error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "manage-held-automod-messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ManageHeldAutoModMessagesBody"];
            };
        };
        responses: {
            /**
             * @description Successfully approved or denied the message.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     ```bash
             *     curl -X POST 'https://api.twitch.tv/helix/moderation/automod/message' \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2' \
             *     -H 'Content-Type: application/json' \
             *     -d '{
             *       "user_id": "9327994",
             *       "msg_id": "836013710",
             *       "action": "ALLOW"
             *     }'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The value in the `action` field is not valid.
             *     * The `user_id` field is required.
             *     * The `msg_id` field is required.
             *     * The `action` field is required.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in `user_id` must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:manage:automod** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _user\_id_ is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The message specified in the `msg_id` field was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-automod-settings": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose AutoMod settings you want to get. */
                broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s AutoMod settings. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetAutoModSettingsResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _moderator\_id_ query parameter is required.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:read:automod\_settings** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _moderator\_id_ is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-automod-settings": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose AutoMod settings you want to update. */
                broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateAutoModSettingsBody"];
            };
        };
        responses: {
            /** @description Successfully updated the broadcaster’s AutoMod settings. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateAutoModSettingsResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ is required.
             *     * The _moderator\_id_ is required.
             *     * The `overall_level` setting or one or more individual settings like `aggression` is required; the overall and individual settings are mutually exclusive, so don't set both.
             *     * The value of one or more AutoMod settings is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:manage:automod\_settings** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _moderator\_id_ is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-banned-users": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                before?: string;
                /** @description The ID of the broadcaster whose list of banned users you want to get. This ID must match the user ID in the access token. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20. */
                first?: number;
                /**
                 * @description A list of user IDs used to filter the results. To specify more than one ID, include this parameter for each user you want to get. For example, `user_id=1234&user_id=5678`. You may specify a maximum of 100 IDs.
                 *
                 *     The returned list includes only those users that were banned or put in a timeout. The list is returned in the same order that you specified the IDs.
                 */
                user_id?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of banned users. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetBannedUsersResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderation:read** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "ban-user": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose chat room the user is being banned from. */
                broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BanUserBody"];
            };
        };
        responses: {
            /** @description Successfully banned the user or placed them in a timeout. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BanUserResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _moderator\_id_ query parameter is required.
             *     * The `user_id` field is required.
             *     * The text in the `reason` field is too long.
             *     * The value in the `duration` field is not valid.
             *     * The user specified in the `user_id` field may not be banned.
             *     * The user specified in the `user_id` field may not be put in a timeout.
             *     * The user specified in the `user_id` field is already banned.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:manage:banned\_users** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _moderator\_id_ is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * You may not update the user's ban state while someone else is updating the state. For example, someone else is currently banning the user or putting them in a timeout, moving the user from a timeout to a ban, or removing the user from a ban or timeout. Please retry your request. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The app has exceeded the number of requests it may make per minute for this broadcaster. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "unban-user": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose chat room the user is banned from chatting in. */
                broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
                /** @description The ID of the user to remove the ban or timeout from. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully removed the ban or timeout.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Removes a ban or timeout from a user.
             *
             *     ```bash
             *     curl -X DELETE 'https://api.twitch.tv/helix/moderation/bans?broadcaster_id=1234&moderator_id=5678&user_id=5432' \
             *     -H 'Authorization: Bearer 4a4x78f5wqvkybms7mxfist3jmzul' \
             *     -H 'Client-Id: t214nt8z1rdtbj69hyarjvh5mi6fh'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _moderator\_id_ query parameter is required.
             *     * The _user\_id_ query parameter is required.
             *     * The user specified in the _user\_id_ query parameter is not banned.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:manage:banned\_users** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _moderator\_id_ is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * You may not update the user's ban state while someone else is updating the state. For example, someone else is currently removing the ban or timeout, or they're moving the user from a timeout to a ban. Please retry your request. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The app has exceeded the number of requests it may make per minute for this broadcaster. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-blocked-terms": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. */
                after?: string;
                /** @description The ID of the broadcaster whose blocked terms you’re getting. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20. */
                first?: number;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of blocked terms. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetBlockedTermsResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _moderator\_id_ query parameter is required.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the user access token.
             *     * The Authorization header must contain a user access token.
             *     * The user access token must include the **moderator:read:blocked\_terms** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _moderator\_id_ is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "add-blocked-term": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that owns the list of blocked terms. */
                broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AddBlockedTermBody"];
            };
        };
        responses: {
            /** @description Successfully retrieved the list of blocked terms. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AddBlockedTermResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _moderator\_id_ query parameter is required.
             *     * The `text` field is required.
             *     * The length of the term in the `text` field is either too short or too long.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:manage:blocked\_terms** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _moderator\_id_ is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "remove-blocked-term": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that owns the list of blocked terms. */
                broadcaster_id: string;
                /** @description The ID of the blocked term to remove from the broadcaster’s list of blocked terms. */
                id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully removed the blocked term. Also returned if the ID is not found.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Deletes the specified blocked term.
             *
             *     ```bash
             *     curl -X DELETE 'https://api.twitch.tv/helix/moderation/blocked_terms?broadcaster_id=1234&moderator_id=5678&id=c9fc79b8-0f63-4ef7-9d38-efd811e74ac2' \
             *     -H 'Authorization: Bearer f4otqljtpbpg24v41v9gechs4yvwy' \
             *     -H 'Client-Id: t214nt8z1rdtbj69hyarjvh5mi6fh'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _moderator\_id_ query parameter is required.
             *     * The _id_ query parameter is required.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:manage:blocked\_terms** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _moderator\_id_ is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-moderated-channels": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The Pagination object in the response contains the cursor’s value. */
                after?: string;
                /**
                 * @description The maximum number of items to return per page in the response.
                 *
                 *     Minimum page size is 1 item per page and the maximum is 100\. The default is 20.
                 */
                first?: number;
                /** @description A user’s ID. Returns the list of channels that this user has moderator privileges in. This ID must match the user ID in the user OAuth token */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of moderated channels. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetModeratedChannelsResponse"];
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-chat-messages": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that owns the chat room to remove messages from. */
                broadcaster_id: string;
                /**
                 * @description The ID of the message to remove. The `id` tag in the [PRIVMSG](https://dev.twitch.tv/docs/irc/tags#privmsg-tags) tag contains the message’s ID. Restrictions:
                 *
                 *     * The message must have been created within the last 6 hours.
                 *     * The message must not belong to the broadcaster.
                 *     * The message must not belong to another moderator.
                 *
                 *     If not specified, the request removes all messages in the broadcaster’s chat room.
                 */
                message_id?: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully removed the specified messages.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Removes all messages from the broadcaster’s chat room (doesn’t include the _message\_id_ query parameter).
             *
             *     ```bash
             *     curl -X DELETE 'https://api.twitch.tv/helix/moderation/chat?broadcaster_id=11111&moderator_id=44444' \
             *     -H 'Authorization: Bearer f4otqljtpbpg24v41v9gechs4yvwy' \
             *     -H 'Client-Id: t214nt8z1rdtbj69hyarjvh5mi6fh'
             *     ```
             *
             *     Removes the specified message from the broadcaster’s chat room.
             *
             *     ```bash
             *     curl -X DELETE 'https://api.twitch.tv/helix/moderation/chat?broadcaster_id=11111&moderator_id=44444&message_id=abc-123-def' \
             *     -H 'Authorization: Bearer f4otqljtpbpg24v41v9gechs4yvwy' \
             *     -H 'Client-Id: t214nt8z1rdtbj69hyarjvh5mi6fh'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * You may not delete another moderator's messages.
             *     * You may not delete the broadcaster's messages.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token is missing the **moderator:manage:chat\_messages** scope.
             *     * The OAuth token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _moderator\_id_ is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _message\_id_ was not found.
             *     * The specified message was created more than 6 hours ago.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "check-automod-status": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose AutoMod settings and list of blocked terms are used to check the message. This ID must match the user ID in the access token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CheckAutoModStatusBody"];
            };
        };
        responses: {
            /** @description Successfully checked the messages. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CheckAutoModStatusResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The `data` field is required and the list must contain one or more messages to check.
             *     * The `msg_id` field is required.
             *     * The `msg_text` field is required.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderation:read** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The ID in _broadcaster\_id_ must match the user ID in the user access token. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster exceeded the number of chat message checks that they may make. See the endpoint's rate limits. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-moderators": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The ID of the broadcaster whose list of moderators you want to get. This ID must match the user ID in the access token. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20. */
                first?: string;
                /**
                 * @description A list of user IDs used to filter the results. To specify more than one ID, include this parameter for each moderator you want to get. For example, `user_id=1234&user_id=5678`. You may specify a maximum of 100 IDs.
                 *
                 *     The returned list includes only the users from the list who are moderators in the broadcaster’s channel. The list is returned in the same order as you specified the IDs.
                 */
                user_id?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of moderators. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetModeratorsResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ must match the user ID found in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderation:read** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "add-channel-moderator": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that owns the chat room. This ID must match the user ID in the access token. */
                broadcaster_id: string;
                /** @description The ID of the user to add as a moderator in the broadcaster’s chat room. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully added the moderator.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     ```bash
             *     curl -X POST 'https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=11111&user_id=44444' \
             *     -H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \
             *     -H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ was not found.
             *     * The ID in _user\_id_ was not found.
             *     * The user in _user\_id_ is already a moderator in the broadcaster's chat room.
             *     * The user in _user\_id_ cannot become a moderator because they're banned from the channel.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:moderators** scope.
             *     * The access token is not valid.
             *     * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _user\_id_ is a VIP. To make them a moderator, you must first remove them as a VIP (see [Remove Channel VIP](https://dev.twitch.tv/docs/api/reference#remove-channel-vip)). */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster has exceeded the number of requests allowed within a 10-second window. See this endpoint's rate limits. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "remove-channel-moderator": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that owns the chat room. This ID must match the user ID in the access token. */
                broadcaster_id: string;
                /** @description The ID of the user to remove as a moderator from the broadcaster’s chat room. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully removed the moderator.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     ```bash
             *     curl -X DELETE 'https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=11111&user_id=44444' \
             *     -H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \
             *     -H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ was not found.
             *     * The ID in _user\_id_ was not found.
             *     * The user in _user\_id_ is not a moderator in the broadcaster's chat room.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:moderators** scope.
             *     * The access token is not valid.
             *     * The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster has exceeded the number of requests allowed within a 10-second window. See this endpoint's rate limits. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-shield-mode-status": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose Shield Mode activation status you want to get. */
                broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that is one of the broadcaster’s moderators. This ID must match the user ID in the access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s Shield Mode activation status. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetShieldModeStatusResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:read:shield\_mode** or **moderator:manage:shield\_mode** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _moderator\_id_ is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-shield-mode-status": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose Shield Mode you want to activate or deactivate. */
                broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that is one of the broadcaster’s moderators. This ID must match the user ID in the access token. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateShieldModeStatusBody"];
            };
        };
        responses: {
            /** @description Successfully updated the broadcaster’s Shield Mode status. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateShieldModeStatusResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             *     * The `is_active` field is required.
             *     * The value in the `is_active` field is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:manage:shield\_mode** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _moderator\_id_ is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "add-suspicious-status-to-chat-user": {
        parameters: {
            query: {
                /** @description The user ID of the broadcaster, indicating the channel where the status is being applied. */
                broadcaster_id: string;
                /** @description The user ID of the moderator who is applying the status. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AddSuspiciousStatusToChatUserBody"];
            };
        };
        responses: {
            /** @description Successfully applied a suspicious user status. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AddSuspiciousStatusToChatUserResponse"];
                };
            };
            /**
             * @description * Validation errors: Missing required fields.
             *     * The ID in the broadcaster\_id query parameter was not found.
             *     * The status specified was invalid. Must either be ACTIVE\_MONITORING or RESTRICTED
             *     * The status update is not allowed for this user.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify user access token.
             *     * The user access token must include the **moderator:manage:suspicious\_users** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in the moderator\_id query parameter is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "remove-suspicious-status-from-chat-user": {
        parameters: {
            query: {
                /** @description The user ID of the broadcaster, indicating the channel where the status is being removed. */
                broadcaster_id: string;
                /** @description The user ID of the moderator who is removing the status. */
                moderator_id: string;
                /** @description The ID of the user having the suspicious status removed. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully removed a suspicious user status. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RemoveSuspiciousStatusFromChatUserResponse"];
                };
            };
            /**
             * @description * Validation errors: Missing required fields.
             *     * The ID in the broadcaster\_id query parameter was not found.
             *     * The status update is not allowed for this user.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify user access token.
             *     * The user access token must include the **moderator:manage:suspicious\_users** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in the moderator\_id query parameter is not one of the broadcaster's moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-unban-requests": {
        parameters: {
            query: {
                /** @description Cursor used to get next page of results. Pagination object in response contains cursor value. */
                after?: string;
                /** @description The ID of the broadcaster whose channel is receiving unban requests. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in response */
                first?: number;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s unban requests. This ID must match the user ID in the user access token. */
                moderator_id: string;
                /**
                 * @description Filter by a status.
                 *
                 *     * pending
                 *     * approved
                 *     * denied
                 *     * acknowledged
                 *     * canceled
                 */
                status: string;
                /** @description The ID used to filter what unban requests are returned. */
                user_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of unban requests. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetUnbanRequestsResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             *     * The _moderator\_id_ query parameter is required.
             *     * The ID in the _moderator\_id_ query parameter is not valid.
             *     * The pagination cursor is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:read:unban\_requests** or **moderator:manage:unban\_requests** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "resolve-unban-requests": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose channel is approving or denying the unban request. */
                broadcaster_id: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s unban requests. This ID must match the user ID in the user access token. */
                moderator_id: string;
                /** @description Message supplied by the unban request resolver. The message is limited to a maximum of 500 characters. */
                resolution_text?: string;
                /**
                 * @description Resolution status.
                 *
                 *     * approved
                 *     * denied
                 */
                status: string;
                /** @description The ID of the broadcaster or a user that has permission to moderate the broadcaster’s unban requests. This ID must match the user ID in the user access token. */
                unban_request_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully resolved the unban request. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResolveUnbanRequestsResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             *     * The _moderator\_id_ query parameter is required.
             *     * The ID in the _moderator\_id_ query parameter is not valid.
             *     * The pagination cursor is not valid.
             *     * The broadcaster is not receiving unban requests
             *     * Invalid requested update
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:manage:unban\_requests** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The unban request ID was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "warn-chat-user": {
        parameters: {
            query: {
                /** @description The ID of the channel in which the warning will take effect. */
                broadcaster_id: string;
                /** @description The ID of the twitch user who requested the warning. */
                moderator_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["WarnChatUserBody"];
            };
        };
        responses: {
            /** @description Successfully warn a user. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WarnChatUserResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _moderator\_id_ query parameter is required.
             *     * The _user\_id_ query parameter is required.
             *     * The _reason_ query parameter is required.
             *     * The text in the _reason_ field is too long.
             *     * The user specified in the _user\_id_ may not be warned.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _moderator\_id_ must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **moderator:manage:warnings** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The user in _moderator\_id_ is not one of the broadcaster’s moderators. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description You may not update the user’s warning state while someone else is updating the state. For example, someone else is currently warning the user or the user is acknowledging an existing warning. Please retry your request. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The app has exceeded the number of requests it may make per minute for this broadcaster. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal Server Error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-polls": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The ID of the broadcaster that created the polls. This ID must match the user ID in the user access token. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 20 items per page. The default is 20. */
                first?: string;
                /**
                 * @description A list of IDs that identify the polls to return. To specify more than one ID, include this parameter for each poll you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 20 IDs.
                 *
                 *     Specify this parameter only if you want to filter the list that the request returns. The endpoint ignores duplicate IDs and those not owned by this broadcaster.
                 */
                id?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster's polls. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetPollsResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token is missing the **channel:read:polls** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header must match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * None of the IDs in the _id_ query parameters were found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-poll": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePollBody"];
            };
        };
        responses: {
            /** @description Successfully created the poll. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreatePollResponse"];
                };
            };
            /**
             * @description * The `broadcaster_id` field is required.
             *     * The `title` field is required.
             *     * The `choices` field is required.
             *     * The `duration` field is required.
             *     * The value in `duration` is outside the allowed range of values.
             *     * The value in `channel_points_per_vote` is outside the allowed range of values.
             *     * The value in `bits_per_vote` is outside the allowed range of values.
             *     * The poll's `title` is too long.
             *     * The choice's `title` is too long.
             *     * The choice's `title` failed AutoMod checks.
             *     * The number of choices in the poll may not be less than 2 or greater that 5.
             *     * The broadcaster already has a poll that's running; you may not create another poll until the current poll completes.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in `broadcaster_id` must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token is missing the **channel:manage:polls** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "end-poll": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["EndPollBody"];
            };
        };
        responses: {
            /** @description Successfully ended the poll. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EndPollResponse"];
                };
            };
            /**
             * @description * The `broadcaster_id` field is required.
             *     * The `id` field is required.
             *     * The `status` field is required.
             *     * The value in the `status` field is not valid.
             *     * The poll must be active to terminate or archive it.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in `broadcaster_id` must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:polls** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header must match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-predictions": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The ID of the broadcaster whose predictions you want to get. This ID must match the user ID in the user access token. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 25 items per page. The default is 20. */
                first?: string;
                /** @description The ID of the prediction to get. To specify more than one ID, include this parameter for each prediction you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 25 IDs. The endpoint ignores duplicate IDs and those not owned by the broadcaster. */
                id?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of predictions. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetPredictionsResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:read:predictions** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-prediction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePredictionBody"];
            };
        };
        responses: {
            /** @description Successfully created the Channel Points Prediction. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreatePredictionResponse"];
                };
            };
            /**
             * @description * The `broadcaster_id` field is required.
             *     * The `title` field is required.
             *     * The `outcomes` field is required.
             *     * The `prediction_window` field is required.
             *     * The value in `prediction_window` is outside the allowed range of values.
             *     * The prediction's `title` is too long.
             *     * The outcome's `title` is too long.
             *     * The outcome's `title` failed AutoMod checks.
             *     * There must be 2 outcomes in the prediction.
             *     * The broadcaster already has a prediction that's running; you may not create another prediction until the current prediction is resolved or canceled.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in `broadcaster_id` must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:predictions** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "end-prediction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["EndPredictionBody"];
            };
        };
        responses: {
            /** @description Successfully ended the prediction. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EndPredictionResponse"];
                };
            };
            /**
             * @description * The `broadcaster_id` field is required.
             *     * The `id` field is required.
             *     * The `status` field is required.
             *     * The `winning_outcome_id` field is required if `status` is RESOLVED.
             *     * The value in the `status` field is not valid.
             *     * To update the prediction's status to RESOLVED or CANCELED, its current status must be ACTIVE or LOCKED.
             *     * To update the prediction's status to LOCKED, its current status must be ACTIVE.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in `broadcaster_id` must match the user ID in the OAuth token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:predictions** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The prediction in the `id` field was not found.
             *     * The outcome in the `winning_outcome_id` field was not found.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "start-a-raid": {
        parameters: {
            query?: {
                /** @description The ID of the broadcaster that’s sending the raiding party. This ID must match the user ID in the user access token. */
                from_broadcaster_id?: string;
                /** @description The ID of the broadcaster to raid. */
                to_broadcaster_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully requested to start a raid. To determine whether the raid successfully occurred (that is, the broadcaster clicked **Raid Now** or the countdown expired), you must subscribe to the [Channel Raid](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelraid) event. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StartARaidResponse"];
                };
            };
            /**
             * @description * The raiding broadcaster is blocked from the targeted channel.
             *     * The targeted channel doesn't accept raids from this broadcaster.
             *     * There are too many viewers in the raiding party.
             *     * The IDs in _from\_broadcaster\_id_ and _to\_broadcaster\_id_ cannot be the same ID.
             *     * The ID in the _from\_broadcaster\_id_ query parameter is not valid.
             *     * The ID in the _to\_broadcaster\_id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _from\_broadcaster\_id_ must match the user ID found in the request’s OAuth token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:raids** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The targeted channel was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster is already in the process of raiding another channel. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster exceeded the number of raid requests that they may make. The limit is 10 requests within a 10-minute window. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "cancel-a-raid": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that initiated the raid. This ID must match the user ID in the user access token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description The pending raid was successfully canceled.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     ```bash
             *     curl -X DELETE 'https://api.twitch.tv/helix/raids?broadcaster_id=12345678' \
             *     -H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \
             *     -H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The ID in the _broadcaster\_id_ query parameter is not valid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ must match the user ID found in the request’s OAuth token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:raids** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster doesn't have a pending raid to cancel. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster exceeded the number of raid requests that they may make. The limit is 10 requests within a 10-minute window. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-channel-stream-schedule": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The ID of the broadcaster that owns the streaming schedule you want to get. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 25 items per page. The default is 20. */
                first?: number;
                /** @description The ID of the scheduled segment to return. To specify more than one segment, include the ID of each segment you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 100 IDs. */
                id?: string[];
                /** @description The UTC date and time that identifies when in the broadcaster’s schedule to start returning segments. If not specified, the request returns segments starting after the current UTC date and time. Specify the date and time in RFC3339 format (for example, `2022-09-01T00:00:00Z`). */
                start_time?: string;
                /** @description Not supported. */
                utc_offset?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s streaming schedule. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChannelStreamScheduleResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             *     * The ID in the _id_ query parameter is not valid.
             *     * The format of the date and time in the _start\_time_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify a valid app access token or user access token.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * Only partners and affiliates may add non-recurring broadcast segments. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster has not created a streaming schedule. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-channel-icalendar": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that owns the streaming schedule you want to get. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s schedule as an iCalendar. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/calendar": unknown;
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-channel-stream-schedule-segment": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that owns the schedule to add the broadcast segment to. This ID must match the user ID in the user access token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateChannelStreamScheduleSegmentBody"];
            };
        };
        responses: {
            /** @description Successfully added the broadcast segment. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateChannelStreamScheduleSegmentResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             *     * The format of the date and time in the `start_time` field is not valid.
             *     * The value in the `timezone` field is not valid.
             *     * The value in the `duration` field is not valid.
             *     * The ID in the `category_id` field is not valid.
             *     * The string in the `title` field is too long.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:schedule** scope.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * Only partners and affiliates may add non-recurring broadcast segments. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-channel-stream-schedule-segment": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that owns the streaming schedule. This ID must match the user ID in the user access token. */
                broadcaster_id: string;
                /** @description The ID of the broadcast segment to remove. */
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully removed the broadcast segment.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Removes the segment from the broadcaster’s streaming schedule.
             *
             *     ```bash
             *     curl -X DELETE 'https://api.twitch.tv/helix/schedule/segment?broadcaster_id=141981764&id=eyJzZWdtZW50SUQiOiI4Y2EwN2E2NC0xYTZkLTRjYWItYWE5Ni0xNjIyYzNjYWUzZDkiLCJpc29ZZWFyIjoyMDIxLCJpc29XZWVrIjoyMX0=' \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             *     * The _id_ query parameter is required.
             *     * The ID in the _id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:schedule** scope.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-channel-stream-schedule-segment": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster who owns the broadcast segment to update. This ID must match the user ID in the user access token. */
                broadcaster_id: string;
                /** @description The ID of the broadcast segment to update. */
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateChannelStreamScheduleSegmentBody"];
            };
        };
        responses: {
            /** @description Successfully updated the broadcast segment. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateChannelStreamScheduleSegmentResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             *     * The _id_ query parameter is required.
             *     * The ID in the _id_ query parameter is not valid.
             *     * The format of the date and time in the `start_time` field is not valid.
             *     * The value in the `timezone` field is not valid.
             *     * The value in the `duration` field is not valid.
             *     * The ID in the `category_id` field is not valid.
             *     * The string in the `title` field is too long.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:schedule** scope.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The specified broadcast segment was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-channel-stream-schedule": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose schedule settings you want to update. The ID must match the user ID in the user access token. */
                broadcaster_id: string;
                /** @description A Boolean value that indicates whether the broadcaster has scheduled a vacation. Set to **true** to enable Vacation Mode and add vacation dates, or **false** to cancel a previously scheduled vacation. */
                is_vacation_enabled?: boolean;
                /** @description The time zone that the broadcaster broadcasts from. Specify the time zone using [IANA time zone database](https://www.iana.org/time-zones) format (for example, America/New\_York). Required if _is\_vacation\_enabled_ is **true**. */
                timezone?: string;
                /** @description The UTC date and time of when the broadcaster’s vacation ends. Specify the date and time in RFC3339 format (for example, 2021-05-30T23:59:59Z). Required if _is\_vacation\_enabled_ is **true**. */
                vacation_end_time?: string;
                /** @description The UTC date and time of when the broadcaster’s vacation starts. Specify the date and time in RFC3339 format (for example, 2021-05-16T00:00:00Z). Required if _is\_vacation\_enabled_ is **true**. */
                vacation_start_time?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully updated the broadcaster’s schedule settings.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Schedules the broadcaster’s vacation.
             *
             *     ```bash
             *     curl -X PATCH 'https://api.twitch.tv/helix/schedule/settings?broadcaster_id=141981764&is_vacation_enabled=true&vacation_start_time=2021-05-16T00:00:00Z&vacation_end_time=2021-05-23T00:00:00Z&timezone=America/New_York' \
             *     -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
             *     -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The ID in the _broadcaster\_id_ query parameter is not valid.
             *     * The format of the string in _vacation\_start\_time_ is not valid.
             *     * The format of the string in _vacation\_end\_time_ is not valid.
             *     * The date in _vacation\_end\_time_ must be later than the date in _vacation\_start\_time_.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:schedule** scope.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster's schedule was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "search-categories": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20. */
                first?: number;
                /** @description The URI-encoded search string. For example, encode _#archery_ as `%23archery` and search strings like _angel of death_ as `angel%20of%20death`. */
                query: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of category names that matched the specified query string. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchCategoriesResponse"];
                };
            };
            /** @description * The _query_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain an app access token or user access token.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "search-channels": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20. */
                first?: number;
                /** @description A Boolean value that determines whether the response includes only channels that are currently streaming live. Set to **true** to get only channels that are streaming live; otherwise, **false** to get live and offline channels. The default is **false**. */
                live_only?: boolean;
                /** @description The URI-encoded search string. For example, encode search strings like _angel of death_ as `angel%20of%20death`. */
                query: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of category names that matched the specified query string. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchChannelsResponse"];
                };
            };
            /** @description * The _query_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain an app access token or user access token.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-shared-chat-session": {
        parameters: {
            query: {
                /** @description The User ID of the channel broadcaster. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the shared chat session. Returns an empty array if the broadcaster\_id in the request isn’t in a shared chat session. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetSharedChatSessionResponse"];
                };
            };
            /** @description The ID in the `broadcaster_id` query parameter is not valid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The OAuth token is not valid.
             *     * The Authorization header is required and must contain a user access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal Server Error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-streams": {
        parameters: {
            query?: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                before?: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20. */
                first?: number;
                /** @description A game (category) ID used to filter the list of streams. Returns only the streams that are broadcasting the game (category). You may specify a maximum of 100 IDs. To specify multiple IDs, include the _game\_id_ parameter for each game. For example, `&game_id=9876&game_id=5432`. */
                game_id?: string[];
                /**
                 * @description A language code used to filter the list of streams. Returns only streams that broadcast in the specified language. Specify the language using an ISO 639-1 two-letter language code or _other_ if the broadcast uses a language not in the list of [supported stream languages](https://help.twitch.tv/s/article/languages-on-twitch#streamlang).
                 *
                 *     You may specify a maximum of 100 language codes. To specify multiple languages, include the _language_ parameter for each language. For example, `&language=de&language=fr`.
                 */
                language?: string[];
                /**
                 * @description The type of stream to filter the list of streams by. Possible values are:
                 *
                 *     * all
                 *     * live
                 *
                 *     The default is _all_.
                 */
                type?: "all" | "live";
                /** @description A user ID used to filter the list of streams. Returns only the streams of those users that are broadcasting. You may specify a maximum of 100 IDs. To specify multiple IDs, include the _user\_id_ parameter for each user. For example, `&user_id=1234&user_id=5678`. */
                user_id?: string[];
                /** @description A user login name used to filter the list of streams. Returns only the streams of those users that are broadcasting. You may specify a maximum of 100 login names. To specify multiple names, include the _user\_login_ parameter for each user. For example, `&user_login=foo&user_login=bar`. */
                user_login?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of streams. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetStreamsResponse"];
                };
            };
            /** @description * The value in the _type_ query parameter is not valid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-followed-streams": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 100. */
                first?: number;
                /** @description The ID of the user whose list of followed streams you want to get. This ID must match the user ID in the access token. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of broadcasters that the user follows and that are streaming live. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetFollowedStreamsResponse"];
                };
            };
            /** @description * The _user\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _user\_id_ must match the user ID found in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:read:follows** scope.
             *     * The OAuth token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-stream-key": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster that owns the channel. The ID must match the user ID in the access token. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the stream’s key. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetStreamKeyResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ field is required.
             *     * The ID in the _broadcaster\_id_ field is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ must match the user ID in the access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:read:stream\_key** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header must match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The user must complete additional steps in order to stream. Present the user with the returned error message. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-stream-markers": {
        parameters: {
            query?: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                before?: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20. */
                first?: string;
                /**
                 * @description A user ID. The request returns the markers from this user’s most recent video. This ID must match the user ID in the access token or the user in the access token must be one of the broadcaster’s editors.
                 *
                 *     This parameter and the _video\_id_ query parameter are mutually exclusive.
                 */
                user_id?: string;
                /**
                 * @description A video on demand (VOD)/video ID. The request returns the markers from this VOD/video. The user in the access token must own the video or the user must be one of the broadcaster’s editors.
                 *
                 *     This parameter and the _user\_id_ query parameter are mutually exclusive.
                 */
                video_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of markers. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetStreamMarkersResponse"];
                };
            };
            /** @description * The request must specify either the _user\_id_ or _video\_id_ query parameter, but not both. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:read:broadcast** or **user:manage:broadcast** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in the access token is not authorized to get the video's markers. The user in the access token must own the video or be one of the broadcaster's editors. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user specified in the _user\_id_ query parameter doesn't have videos. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-stream-marker": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateStreamMarkerBody"];
            };
        };
        responses: {
            /** @description Successfully created the marker. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateStreamMarkerResponse"];
                };
            };
            /**
             * @description * The `user_id` field is required.
             *     * The length of the string in the `description` field is too long.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:manage:broadcast** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in the access token is not authorized to create video markers for the user in the `user_id` field. The user in the access token must own the video or they must be one of the broadcaster's editors. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The user in the `user_id` field is not streaming live.
             *     * The ID in the user\_id field is not valid.
             *     * The user hasn't enabled video on demand (VOD).
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-stream-tags": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose stream tags you want to get. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of tags. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetStreamTagsResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ field is required.
             *     * The ID in the _broadcaster\_id_ field is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-broadcaster-subscriptions": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. Do not specify if you set the _user\_id_ query parameter. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The cursor used to get the previous page of results. Do not specify if you set the _user\_id_ query parameter. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                before?: string;
                /** @description The broadcaster’s ID. This ID must match the user ID in the access token. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20. */
                first?: string;
                /** @description Filters the list to include only the specified subscribers. To specify more than one subscriber, include this parameter for each subscriber. For example, `&user_id=1234&user_id=5678`. You may specify a maximum of 100 subscribers. */
                user_id?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster’s list of subscribers. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetBroadcasterSubscriptionsResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ must match the user ID found in the request’s OAuth token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:read:subscriptions** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "check-user-subscription": {
        parameters: {
            query: {
                /** @description The ID of a partner or affiliate broadcaster. */
                broadcaster_id: string;
                /** @description The ID of the user that you’re checking to see whether they subscribe to the broadcaster in _broadcaster\_id_. This ID must match the user ID in the access Token. */
                user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The user subscribes to the broadcaster. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CheckUserSubscriptionResponse"];
                };
            };
            /**
             * @description * The _broadcaster\_id_ query parameter is required.
             *     * The _user\_id_ query parameter is required.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _user\_id_ must match the user ID found in the request’s OAuth token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:read:subscriptions** scope.
             *     * The access token is not valid.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The user in _user\_id_ does not subscribe to the broadcaster in _broadcaster\_id_. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-all-stream-tags": {
        parameters: {
            query?: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20. */
                first?: number;
                /** @description The ID of the tag to get. Used to filter the list of tags. To specify more than one tag, include the _tag\_id_ parameter for each tag to get. For example, `tag_id=1234&tag_id=5678`. The maximum number of IDs you may specify is 100\. Ignores invalid IDs but not duplicate IDs. */
                tag_id?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of tags. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetAllStreamTagsResponse"];
                };
            };
            /**
             * @description * The _tag\_id_ query parameter is empty (for example, `&tag_id=`).
             *     * The list of tag IDs is too long.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-teams": {
        parameters: {
            query?: {
                /** @description The ID of the team to get. This parameter and the _name_ parameter are mutually exclusive; you must specify the team’s name or ID but not both. */
                id?: string;
                /** @description The name of the team to get. This parameter and the _id_ parameter are mutually exclusive; you must specify the team’s name or ID but not both. */
                name?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the team's information. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetTeamsResponse"];
                };
            };
            /**
             * @description * The _name_ or _id_ query parameter is required.
             *     * Specify either the _name_ or _id_ query parameter but not both.
             *     * The ID in the _id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header must contain an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The specified team was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-channel-teams": {
        parameters: {
            query: {
                /** @description The ID of the broadcaster whose teams you want to get. */
                broadcaster_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of teams. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChannelTeamsResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is missing or invalid. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header must contain an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The broadcaster was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-users": {
        parameters: {
            query?: {
                /** @description The ID of the user to get. To specify more than one user, include the _id_ parameter for each user to get. For example, `id=1234&id=5678`. The maximum number of IDs you may specify is 100. */
                id?: string[];
                /** @description The login name of the user to get. To specify more than one user, include the _login_ parameter for each user to get. For example, `login=foo&login=bar`. The maximum number of login names you may specify is 100. */
                login?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the specified users’ information. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetUsersResponse"];
                };
            };
            /**
             * @description * The \*id\* or \*login\* query parameter is required unless the request uses a user access token.
             *     * The request exceeded the maximum allowed number of \*id\* and/or \*login\* query parameters.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-user": {
        parameters: {
            query?: {
                /**
                 * @description The string to update the channel’s description to. The description is limited to a maximum of 300 characters.
                 *
                 *     To remove the description, specify this parameter but don’t set it’s value (for example, `?description=`).
                 */
                description?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully updated the specified user's information. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateUserResponse"];
                };
            };
            /** @description * The string in the _description_ query parameter is too long. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:edit** scope.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The app exceeded the number of requests that it may make. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-user-block-list": {
        parameters: {
            query: {
                /** @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination) */
                after?: string;
                /** @description The ID of the broadcaster whose list of blocked users you want to get. */
                broadcaster_id: string;
                /** @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20. */
                first?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the broadcaster's list of blocked users. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetUserBlockListResponse"];
                };
            };
            /** @description * The _broadcaster\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in _broadcaster\_id_ must match the user ID found in the request’s access token.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:read:blocked\_users** scope.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "block-user": {
        parameters: {
            query: {
                /**
                 * @description The reason that the broadcaster is blocking the user. Possible values are:
                 *
                 *     * harassment
                 *     * spam
                 *     * other
                 */
                reason?: "harassment" | "spam" | "other";
                /**
                 * @description The location where the harassment took place that is causing the brodcaster to block the user. Possible values are:
                 *
                 *     * chat
                 *     * whisper
                 *
                 *     .
                 */
                source_context?: "chat" | "whisper";
                /** @description The ID of the user to block. The API ignores the request if the broadcaster has already blocked the user. */
                target_user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully blocked the user.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Blocks the specified user.
             *
             *     ```bash
             *     curl -X PUT 'https://api.twitch.tv/helix/users/blocks?target_user_id=198704263' \
             *     -H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \
             *     -H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz' \
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The _target\_user\_id_ query parameter is required.
             *     * The ID in _target\_user\_id_ cannot be the same as the user ID in the access token.
             *     * The value in _source\_context_ is not valid.
             *     * The value in _reason_ is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:manage:blocked\_users** scope.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "unblock-user": {
        parameters: {
            query: {
                /** @description The ID of the user to remove from the broadcaster’s list of blocked users. The API ignores the request if the broadcaster hasn’t blocked the user. */
                target_user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /**
             * @description Successfully removed the block.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Unblocks the specified user.
             *
             *     ```bash
             *     curl -X DELETE 'https://api.twitch.tv/helix/users/blocks?target_user_id=198704263' \
             *     -H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \
             *     -H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz' \
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The _target\_user\_id_ query parameter is required. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:read:blocked\_users** scope.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-user-active-extensions": {
        parameters: {
            query?: {
                /**
                 * @description The ID of the broadcaster whose active extensions you want to get.
                 *
                 *     This parameter is required if you specify an app access token and is optional if you specify a user access token. If you specify a user access token and don’t specify this parameter, the API uses the user ID from the access token.
                 */
                user_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the user's active extensions. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetUserActiveExtensionsResponse"];
                };
            };
            /** @description * The _user\_id_ query parameter is required if you specify an app access token. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "update-user-extensions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateUserExtensionsBody"];
            };
        };
        responses: {
            /** @description Successfully updated the active extensions. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateUserExtensionsResponse"];
                };
            };
            /** @description * The JSON payload is malformed. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:edit:broadcast** scope.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * An extension with the specified `id` and `version` values was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-user-extensions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the user's installed extensions. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetUserExtensionsResponse"];
                };
            };
            /**
             * @description * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:read:broadcast** scope.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-videos": {
        parameters: {
            query?: {
                /**
                 * @description The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)
                 *
                 *     Specify this parameter only if you specify the _user\_id_ query parameter.
                 */
                after?: string;
                /**
                 * @description The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)
                 *
                 *     Specify this parameter only if you specify the _user\_id_ query parameter.
                 */
                before?: string;
                /**
                 * @description The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20.
                 *
                 *     Specify this parameter only if you specify the _game\_id_ or _user\_id_ query parameter.
                 */
                first?: string;
                /**
                 * @description A category or game ID. The response contains a maximum of 500 videos that show this content. To get category/game IDs, use the [Search Categories](https://dev.twitch.tv/docs/api/reference#search-categories) endpoint.
                 *
                 *     The _id_, _user\_id_, and _game\_id_ parameters are mutually exclusive.
                 */
                game_id?: string;
                /**
                 * @description A list of IDs that identify the videos you want to get. To get more than one video, include this parameter for each video you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 100 IDs. The endpoint ignores duplicate IDs and IDs that weren't found (if there's at least one valid ID).
                 *
                 *     The _id_, _user\_id_, and _game\_id_ parameters are mutually exclusive.
                 */
                id?: string[];
                /**
                 * @description A filter used to filter the list of videos by the language that the video owner broadcasts in. For example, to get videos that were broadcast in German, set this parameter to the ISO 639-1 two-letter code for German (i.e., DE). For a list of supported languages, see [Supported Stream Language](https://help.twitch.tv/s/article/languages-on-twitch#streamlang). If the language is not supported, use “other.”
                 *
                 *     Specify this parameter only if you specify the _game\_id_ query parameter.
                 */
                language?: string;
                /**
                 * @description A filter used to filter the list of videos by when they were published. For example, videos published in the last week. Possible values are:
                 *
                 *     * all
                 *     * day
                 *     * month
                 *     * week
                 *
                 *     The default is "all," which returns videos published in all periods.
                 *
                 *     Specify this parameter only if you specify the _game\_id_ or _user\_id_ query parameter.
                 */
                period?: "all" | "day" | "month" | "week";
                /**
                 * @description The order to sort the returned videos in. Possible values are:
                 *
                 *     * time — Sort the results in descending order by when they were created (i.e., latest video first).
                 *     * trending — Sort the results in descending order by biggest gains in viewership (i.e., highest trending video first).
                 *     * views — Sort the results in descending order by most views (i.e., highest number of views first).
                 *
                 *     The default is "time."
                 *
                 *     Specify this parameter only if you specify the _game\_id_ or _user\_id_ query parameter.
                 */
                sort?: "time" | "trending" | "views";
                /**
                 * @description A filter used to filter the list of videos by the video's type. Possible case-sensitive values are:
                 *
                 *     * all
                 *     * archive — On-demand videos (VODs) of past streams.
                 *     * highlight — Highlight reels of past streams.
                 *     * upload — External videos that the broadcaster uploaded using the Video Producer.
                 *
                 *     The default is "all," which returns all video types.
                 *
                 *     Specify this parameter only if you specify the _game\_id_ or _user\_id_ query parameter.
                 */
                type?: "all" | "archive" | "highlight" | "upload";
                /**
                 * @description The ID of the user whose list of videos you want to get.
                 *
                 *     The _id_, _user\_id_, and _game\_id_ parameters are mutually exclusive.
                 */
                user_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the list of videos. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetVideosResponse"];
                };
            };
            /**
             * @description * The request must specify either the _id_ or _user\_id_ or _game\_id_ query parameter.
             *     * The _id_, _user\_id_, and _game\_id_ query parameters are mutually exclusive; you must specify only one of them.
             *     * The value in the _id_ query parameter is not valid.
             *     * The ID in the _game\_id_ query parameter is not valid.
             *     * The value in the _type_ query parameter is not valid.
             *     * The value in the _period_ query parameter is not valid.
             *     * The value in the _sort_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must contain an app access token or user access token.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _game\_id_ query parameter was not found.
             *     * The ID in the _id_ query parameter was not found. Returned only if all the IDs were not found; otherwise, the ID is ignored.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-videos": {
        parameters: {
            query: {
                /**
                 * @description The list of videos to delete. To specify more than one video, include the _id_ parameter for each video to delete. For example, `id=1234&id=5678`. You can delete a maximum of 5 videos per request. Ignores invalid video IDs.
                 *
                 *     If the user doesn’t have permission to delete one of the videos in the list, none of the videos are deleted.
                 */
                id: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully deleted the list of videos. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteVideosResponse"];
                };
            };
            /**
             * @description * The _id_ query parameter is required.
             *     * The request exceeded the number of allowed _id_ query parameters.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The caller is not authorized to delete the specified video.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **channel:manage:videos** scope.
             *     * The access token is not valid.
             *     * The ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "create-clip-from-vod": {
        parameters: {
            query: {
                /** @description The user ID for the channel you want to create a clip for. */
                broadcaster_id: string;
                /** @description The length of the clip, in seconds. Precision is 0.1\. Defaults to 30\. Min: 5 seconds, Max: 60 seconds. */
                duration?: number;
                /** @description The user ID of the editor for the channel you want to create a clip for. If using the broadcaster’s auth token, this is the same as broadcaster\_id. This must match the user\_id in the user access token. */
                editor_id: string;
                /** @description The title of the clip. */
                title: string;
                /** @description ID of the VOD the user wants to clip. */
                vod_id: string;
                /** @description Offset in the VOD to create the clip. See notes above. */
                vod_offset: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully started the clip process. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateClipFromVODResponse"];
                };
            };
            /**
             * @description * Validation errors: Invalid source type, missing required fields.
             *     * The broadcaster\_id query parameter is required.
             *     * The ID in the broadcaster\_id query parameter was not found.
             *     * The category is not clippable.
             *     * The title did not pass AutoMod checks.
             *     * Broadcaster is banned.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The Authorization header is required and must specify user access token.
             *     * The user access token must include the **editor:manage:clips** or **channel:manage:clips** scope.
             *     * The OAuth token is not valid.
             *     * The ID in the Client-Id header must match the Client ID in the OAuth token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The broadcaster has restricted the ability to capture clips to followers and/or subscribers only.
             *     * The specified broadcaster has not enabled clips on their channel.
             *     * The user defined by the _editor\_id_ is not authorized to create Clips.
             *     * The user is banned or timed out from the broadcaster's channel.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The broadcaster in the _broadcaster\_id_ query parameter must be broadcasting live.
             *     * The VOD is not found..
             *     * The _broadcaster\_id_ or the _editor\_id_ does not exist.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "send-whisper": {
        parameters: {
            query: {
                /** @description The ID of the user sending the whisper. This user must have a verified phone number. This ID must match the user ID in the user access token. */
                from_user_id: string;
                /** @description The ID of the user to receive the whisper. */
                to_user_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SendWhisperBody"];
            };
        };
        responses: {
            /**
             * @description Successfully sent the whisper message or the message was silently dropped.
             *
             *     __Examples__
             *
             *     _Request:_
             *
             *     Send the user a whisper message.
             *
             *     ```bash
             *     curl -X POST 'https://api.twitch.tv/helix/whispers?from_user_id=123&to_user_id=456' \
             *     -H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \
             *     -H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t' \
             *     -H 'Content-Type: application/json' \
             *     -d '{"message":"hello"}'
             *     ```
             */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The ID in the _from\_user\_id_ and _to\_user\_id_ query parameters must be different.
             *     * The `message` field must not contain an empty string.
             *     * The user that you're sending the whisper to doesn't allow whisper messages (see the **Block Whispers from Strangers** setting in your [Security and Privacy](https://www.twitch.tv/settings/security) settings).
             *     * Whisper messages may not be sent to suspended users.
             *     * The ID in the _from\_user\_id_ query parameter is not valid.
             *     * The ID in the _to\_user\_id_ query parameter is not valid.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * The user in the _from\_user\_id_ query parameter must have a verified phone number.
             *     * The Authorization header is required and must contain a user access token.
             *     * The user access token must include the **user:manage:whispers** scope.
             *     * The access token is not valid.
             *     * This ID in _from\_user\_id_ must match the user ID in the user access token.
             *     * The client ID specified in the Client-Id header does not match the client ID specified in the access token.
             */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /**
             * @description * Suspended users may not send whisper messages.
             *     * The account that's sending the message doesn't allow sending whispers.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The ID in _to\_user\_id_ was not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description * The sending user exceeded the number of whisper requests that they may make. See Rate Limits for this endpoint above. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
