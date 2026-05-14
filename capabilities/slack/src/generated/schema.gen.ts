export type paths = {
    "/admin.apps.approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Approve an app for installation on a workspace. */
        post: operations["admin_apps_approve"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.apps.approved.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List approved apps for an org or workspace. */
        get: operations["admin_apps_approved_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.apps.requests.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List app requests for a team/workspace. */
        get: operations["admin_apps_requests_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.apps.restrict": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Restrict an app for installation on a workspace. */
        post: operations["admin_apps_restrict"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.apps.restricted.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List restricted apps for an org or workspace. */
        get: operations["admin_apps_restricted_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Archive a public or private channel. */
        post: operations["admin_conversations_archive"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.convertToPrivate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Convert a public channel to a private channel. */
        post: operations["admin_conversations_convertToPrivate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Create a public or private channel-based conversation. */
        post: operations["admin_conversations_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Delete a public or private channel. */
        post: operations["admin_conversations_delete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.disconnectShared": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Disconnect a connected channel from one or more workspaces. */
        post: operations["admin_conversations_disconnectShared"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.ekm.listOriginalConnectedChannelInfo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM. */
        get: operations["admin_conversations_ekm_listOriginalConnectedChannelInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.getConversationPrefs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get conversation preferences for a public or private channel. */
        get: operations["admin_conversations_getConversationPrefs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.getTeams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get all the workspaces a given public or private channel is connected to within this Enterprise org. */
        get: operations["admin_conversations_getTeams"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.invite": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Invite a user to a public or private channel. */
        post: operations["admin_conversations_invite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.rename": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Rename a public or private channel. */
        post: operations["admin_conversations_rename"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.restrictAccess.addGroup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Add an allowlist of IDP groups for accessing a channel */
        post: operations["admin_conversations_restrictAccess_addGroup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.restrictAccess.listGroups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List all IDP Groups linked to a channel */
        get: operations["admin_conversations_restrictAccess_listGroups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.restrictAccess.removeGroup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Remove a linked IDP group linked from a private channel */
        post: operations["admin_conversations_restrictAccess_removeGroup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Search for public or private channels in an Enterprise organization. */
        get: operations["admin_conversations_search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.setConversationPrefs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set the posting permissions for a public or private channel. */
        post: operations["admin_conversations_setConversationPrefs"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.setTeams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set the workspaces in an Enterprise grid org that connect to a public or private channel. */
        post: operations["admin_conversations_setTeams"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.conversations.unarchive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Unarchive a public or private channel. */
        post: operations["admin_conversations_unarchive"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.emoji.add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Add an emoji. */
        post: operations["admin_emoji_add"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.emoji.addAlias": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Add an emoji alias. */
        post: operations["admin_emoji_addAlias"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.emoji.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List emoji for an Enterprise Grid organization. */
        get: operations["admin_emoji_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.emoji.remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Remove an emoji across an Enterprise Grid organization */
        post: operations["admin_emoji_remove"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.emoji.rename": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Rename an emoji. */
        post: operations["admin_emoji_rename"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.inviteRequests.approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Approve a workspace invite request. */
        post: operations["admin_inviteRequests_approve"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.inviteRequests.approved.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List all approved workspace invite requests. */
        get: operations["admin_inviteRequests_approved_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.inviteRequests.denied.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List all denied workspace invite requests. */
        get: operations["admin_inviteRequests_denied_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.inviteRequests.deny": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Deny a workspace invite request. */
        post: operations["admin_inviteRequests_deny"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.inviteRequests.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List all pending workspace invite requests. */
        get: operations["admin_inviteRequests_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.teams.admins.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List all of the admins on a given workspace. */
        get: operations["admin_teams_admins_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.teams.create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Create an Enterprise team. */
        post: operations["admin_teams_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.teams.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List all teams on an Enterprise organization */
        get: operations["admin_teams_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.teams.owners.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List all of the owners on a given workspace. */
        get: operations["admin_teams_owners_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.teams.settings.info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Fetch information about settings in a workspace */
        get: operations["admin_teams_settings_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.teams.settings.setDefaultChannels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set the default channels of a workspace. */
        post: operations["admin_teams_settings_setDefaultChannels"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.teams.settings.setDescription": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set the description of a given workspace. */
        post: operations["admin_teams_settings_setDescription"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.teams.settings.setDiscoverability": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description An API method that allows admins to set the discoverability of a given workspace */
        post: operations["admin_teams_settings_setDiscoverability"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.teams.settings.setIcon": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Sets the icon of a workspace. */
        post: operations["admin_teams_settings_setIcon"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.teams.settings.setName": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set the name of a given workspace. */
        post: operations["admin_teams_settings_setName"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.usergroups.addChannels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Add one or more default channels to an IDP group. */
        post: operations["admin_usergroups_addChannels"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.usergroups.addTeams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Associate one or more default workspaces with an organization-wide IDP group. */
        post: operations["admin_usergroups_addTeams"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.usergroups.listChannels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List the channels linked to an org-level IDP group (user group). */
        get: operations["admin_usergroups_listChannels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.usergroups.removeChannels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Remove one or more default channels from an org-level IDP group (user group). */
        post: operations["admin_usergroups_removeChannels"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.users.assign": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Add an Enterprise user to a workspace. */
        post: operations["admin_users_assign"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.users.invite": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Invite a user to a workspace. */
        post: operations["admin_users_invite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.users.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List users on a workspace */
        get: operations["admin_users_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.users.remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Remove a user from a workspace. */
        post: operations["admin_users_remove"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.users.session.invalidate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Invalidate a single session for a user by session_id */
        post: operations["admin_users_session_invalidate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.users.session.reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Wipes all valid sessions on all devices for a given user */
        post: operations["admin_users_session_reset"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.users.setAdmin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set an existing guest, regular user, or owner to be an admin user. */
        post: operations["admin_users_setAdmin"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.users.setExpiration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set an expiration for a guest user */
        post: operations["admin_users_setExpiration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.users.setOwner": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set an existing guest, regular user, or admin user to be a workspace owner. */
        post: operations["admin_users_setOwner"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin.users.setRegular": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set an existing guest user, admin user, or owner to be a regular user. */
        post: operations["admin_users_setRegular"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api.test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Checks API calling code. */
        get: operations["api_test"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps.event.authorizations.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to. */
        get: operations["apps_event_authorizations_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps.permissions.info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns list of permissions this app has on a team. */
        get: operations["apps_permissions_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps.permissions.request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Allows an app to request additional scopes */
        get: operations["apps_permissions_request"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps.permissions.resources.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns list of resource grants this app has on a team. */
        get: operations["apps_permissions_resources_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps.permissions.scopes.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns list of scopes this app has on a team. */
        get: operations["apps_permissions_scopes_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps.permissions.users.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns list of user grants and corresponding scopes this app has on a team. */
        get: operations["apps_permissions_users_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps.permissions.users.request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Enables an app to trigger a permissions modal to grant an app access to a user access scope. */
        get: operations["apps_permissions_users_request"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apps.uninstall": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Uninstalls your app from a workspace. */
        get: operations["apps_uninstall"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth.revoke": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Revokes a token. */
        get: operations["auth_revoke"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth.test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Checks authentication & identity. */
        get: operations["auth_test"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bots.info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets information about a bot user. */
        get: operations["bots_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calls.add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Registers a new Call. */
        post: operations["calls_add"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calls.end": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Ends a Call. */
        post: operations["calls_end"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calls.info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns information about a Call. */
        get: operations["calls_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calls.participants.add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Registers new participants added to a Call. */
        post: operations["calls_participants_add"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calls.participants.remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Registers participants removed from a Call. */
        post: operations["calls_participants_remove"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calls.update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Updates information about a Call. */
        post: operations["calls_update"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat.delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Deletes a message. */
        post: operations["chat_delete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat.deleteScheduledMessage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Deletes a pending scheduled message from the queue. */
        post: operations["chat_deleteScheduledMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat.getPermalink": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieve a permalink URL for a specific extant message */
        get: operations["chat_getPermalink"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat.meMessage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Share a me message into a channel. */
        post: operations["chat_meMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat.postEphemeral": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Sends an ephemeral message to a user in a channel. */
        post: operations["chat_postEphemeral"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat.postMessage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Sends a message to a channel. */
        post: operations["chat_postMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat.scheduledMessages.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Returns a list of scheduled messages. */
        get: operations["chat_scheduledMessages_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat.scheduleMessage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Schedules a message to be sent to a channel. */
        post: operations["chat_scheduleMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat.unfurl": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Provide custom unfurl behavior for user-posted URLs */
        post: operations["chat_unfurl"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat.update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Updates a message. */
        post: operations["chat_update"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Archives a conversation. */
        post: operations["conversations_archive"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.close": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Closes a direct message or multi-person direct message. */
        post: operations["conversations_close"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Initiates a public or private channel-based conversation */
        post: operations["conversations_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Fetches a conversation's history of messages and events. */
        get: operations["conversations_history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieve information about a conversation. */
        get: operations["conversations_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.invite": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Invites users to a channel. */
        post: operations["conversations_invite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.join": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Joins an existing conversation. */
        post: operations["conversations_join"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.kick": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Removes a user from a conversation. */
        post: operations["conversations_kick"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.leave": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Leaves a conversation. */
        post: operations["conversations_leave"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Lists all channels in a Slack team. */
        get: operations["conversations_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.mark": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Sets the read cursor in a channel. */
        post: operations["conversations_mark"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieve members of a conversation. */
        get: operations["conversations_members"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.open": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Opens or resumes a direct message or multi-person direct message. */
        post: operations["conversations_open"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.rename": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Renames a conversation. */
        post: operations["conversations_rename"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.replies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieve a thread of messages posted to a conversation */
        get: operations["conversations_replies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.setPurpose": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Sets the purpose for a conversation. */
        post: operations["conversations_setPurpose"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.setTopic": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Sets the topic for a conversation. */
        post: operations["conversations_setTopic"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations.unarchive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Reverses conversation archival. */
        post: operations["conversations_unarchive"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dialog.open": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Open a dialog with a user */
        get: operations["dialog_open"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dnd.endDnd": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Ends the current user's Do Not Disturb session immediately. */
        post: operations["dnd_endDnd"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dnd.endSnooze": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Ends the current user's snooze mode immediately. */
        post: operations["dnd_endSnooze"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dnd.info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieves a user's current Do Not Disturb status. */
        get: operations["dnd_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dnd.setSnooze": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Turns on Do Not Disturb mode for the current user, or changes its duration. */
        post: operations["dnd_setSnooze"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dnd.teamInfo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieves the Do Not Disturb status for up to 50 users on a team. */
        get: operations["dnd_teamInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/emoji.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Lists custom emoji for a team. */
        get: operations["emoji_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.comments.delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Deletes an existing comment on a file. */
        post: operations["files_comments_delete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Deletes a file. */
        post: operations["files_delete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets information about a file. */
        get: operations["files_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List for a team, in a channel, or from a user with applied filters. */
        get: operations["files_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.remote.add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Adds a file from a remote service */
        post: operations["files_remote_add"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.remote.info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieve information about a remote file added to Slack */
        get: operations["files_remote_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.remote.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieve information about a remote file added to Slack */
        get: operations["files_remote_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.remote.remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Remove a remote file. */
        post: operations["files_remote_remove"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.remote.share": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Share a remote file into a channel. */
        get: operations["files_remote_share"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.remote.update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Updates an existing remote file. */
        post: operations["files_remote_update"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.revokePublicURL": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Revokes public/external sharing access for a file */
        post: operations["files_revokePublicURL"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.sharedPublicURL": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Enables a file for public/external sharing. */
        post: operations["files_sharedPublicURL"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files.upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Uploads or creates a file. */
        post: operations["files_upload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/migration.exchange": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description For Enterprise Grid workspaces, map local user IDs to global user IDs */
        get: operations["migration_exchange"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth.access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Exchanges a temporary OAuth verifier code for an access token. */
        get: operations["oauth_access"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth.token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Exchanges a temporary OAuth verifier code for a workspace token. */
        get: operations["oauth_token"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth.v2.access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Exchanges a temporary OAuth verifier code for an access token. */
        get: operations["oauth_v2_access"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pins.add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Pins an item to a channel. */
        post: operations["pins_add"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pins.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Lists items pinned to a channel. */
        get: operations["pins_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pins.remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Un-pins an item from a channel. */
        post: operations["pins_remove"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reactions.add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Adds a reaction to an item. */
        post: operations["reactions_add"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reactions.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets reactions for an item. */
        get: operations["reactions_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reactions.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Lists reactions made by a user. */
        get: operations["reactions_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reactions.remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Removes a reaction from an item. */
        post: operations["reactions_remove"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reminders.add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Creates a reminder. */
        post: operations["reminders_add"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reminders.complete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Marks a reminder as complete. */
        post: operations["reminders_complete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reminders.delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Deletes a reminder. */
        post: operations["reminders_delete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reminders.info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets information about a reminder. */
        get: operations["reminders_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reminders.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Lists all reminders created by or for a given user. */
        get: operations["reminders_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/rtm.connect": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Starts a Real Time Messaging session. */
        get: operations["rtm_connect"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search.messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Searches for messages matching a query. */
        get: operations["search_messages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stars.add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Adds a star to an item. */
        post: operations["stars_add"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stars.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Lists stars for a user. */
        get: operations["stars_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stars.remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Removes a star from an item. */
        post: operations["stars_remove"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/team.accessLogs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets the access logs for the current team. */
        get: operations["team_accessLogs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/team.billableInfo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets billable users information for the current team. */
        get: operations["team_billableInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/team.info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets information about the current team. */
        get: operations["team_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/team.integrationLogs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets the integration logs for the current team. */
        get: operations["team_integrationLogs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/team.profile.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieve a team's profile. */
        get: operations["team_profile_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/usergroups.create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Create a User Group */
        post: operations["usergroups_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/usergroups.disable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Disable an existing User Group */
        post: operations["usergroups_disable"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/usergroups.enable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Enable a User Group */
        post: operations["usergroups_enable"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/usergroups.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List all User Groups for a team */
        get: operations["usergroups_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/usergroups.update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Update an existing User Group */
        post: operations["usergroups_update"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/usergroups.users.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List all users in a User Group */
        get: operations["usergroups_users_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/usergroups.users.update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Update the list of users for a User Group */
        post: operations["usergroups_users_update"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.conversations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List conversations the calling user may access. */
        get: operations["users_conversations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.deletePhoto": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Delete the user profile photo */
        post: operations["users_deletePhoto"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.getPresence": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets user presence information. */
        get: operations["users_getPresence"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.identity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a user's identity. */
        get: operations["users_identity"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets information about a user. */
        get: operations["users_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Lists all users in a Slack team. */
        get: operations["users_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.lookupByEmail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Find a user with an email address. */
        get: operations["users_lookupByEmail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.profile.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Retrieves a user's profile information. */
        get: operations["users_profile_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.profile.set": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set the profile information for a user. */
        post: operations["users_profile_set"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.setActive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Marked a user as active. Deprecated and non-functional. */
        post: operations["users_setActive"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.setPhoto": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Set the user profile photo */
        post: operations["users_setPhoto"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users.setPresence": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Manually sets user presence. */
        post: operations["users_setPresence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/views.open": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Open a view for a user. */
        get: operations["views_open"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/views.publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Publish a static view for a User. */
        get: operations["views_publish"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/views.push": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Push a view onto the stack of a root view. */
        get: operations["views_push"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/views.update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Update an existing view. */
        get: operations["views_update"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows.stepCompleted": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Indicate that an app's step in a workflow completed execution. */
        get: operations["workflows_stepCompleted"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows.stepFailed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Indicate that an app's step in a workflow failed to execute. */
        get: operations["workflows_stepFailed"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows.updateStep": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Update the configuration for a workflow extension step. */
        get: operations["workflows_updateStep"];
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
         * Block Kit blocks
         * @description This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace.
         */
        blocks: ({
            type: string;
        } & {
            [key: string]: unknown;
        })[];
        /** App ID */
        defs_app_id: string;
        /** Bot User ID */
        defs_bot_id: string;
        /** Channel-like conversation ID */
        defs_channel: string;
        /** Channel ID */
        defs_channel_id: string;
        /** Name of a channel */
        defs_channel_name: string;
        /** File Comment ID */
        defs_comment_id: string;
        /** Direct Message Channel ID */
        defs_dm_id: string;
        /** Enterprise ID */
        defs_enterprise_id: string;
        /** Name of the enterprise org */
        defs_enterprise_name: string;
        /** Enterprise User ID */
        defs_enterprise_user_id: string;
        /** File ID */
        defs_file_id: string;
        /** Private Channel ID */
        defs_group_id: string;
        /**
         * default failure response
         * @enum {boolean}
         */
        defs_ok_false: false;
        /**
         * default success response
         * @enum {boolean}
         */
        defs_ok_true: true;
        /** App ID or empty string */
        defs_optional_app_id: string;
        /** Info for a pinned item */
        defs_pinned_info: Record<string, never>;
        /** Reminder ID */
        defs_reminder_id: string;
        /** Subteam ID */
        defs_subteam_id: string;
        /** Team ID */
        defs_team: string;
        /** User ID or empty string, used for topic and purpose creation */
        defs_topic_purpose_creator: string;
        /** Timestamp in format 0123456789.012345 */
        defs_ts: string;
        /** User ID */
        defs_user_id: string;
        /** Team or Enterprise ID */
        defs_workspace_id: string;
        /** Bot Profile Object */
        objs_bot_profile: {
            app_id: components["schemas"]["defs_app_id"];
            deleted: boolean;
            icons: {
                /** Format: uri */
                image_36: string;
                /** Format: uri */
                image_48: string;
                /** Format: uri */
                image_72: string;
            };
            id: components["schemas"]["defs_bot_id"];
            name: string;
            team_id: components["schemas"]["defs_team"];
            updated: number;
        };
        /** Channel Object */
        objs_channel: {
            accepted_user?: components["schemas"]["defs_user_id"];
            created: number;
            creator: components["schemas"]["defs_user_id"];
            id: components["schemas"]["defs_channel_id"];
            is_archived?: boolean;
            is_channel: boolean;
            is_frozen?: boolean;
            is_general?: boolean;
            is_member?: boolean;
            is_moved?: number;
            is_mpim: boolean;
            is_non_threadable?: boolean;
            is_org_shared: boolean;
            is_pending_ext_shared?: boolean;
            is_private: boolean;
            is_read_only?: boolean;
            is_shared: boolean;
            is_thread_only?: boolean;
            last_read?: components["schemas"]["defs_ts"];
            latest?: unknown;
            members: components["schemas"]["defs_user_id"][];
            name: string;
            name_normalized: string;
            num_members?: number;
            pending_shared?: components["schemas"]["defs_team"][];
            previous_names?: components["schemas"]["defs_channel_name"][];
            priority?: number;
            purpose: {
                creator: components["schemas"]["defs_topic_purpose_creator"];
                last_set: number;
                value: string;
            };
            topic: {
                creator: components["schemas"]["defs_topic_purpose_creator"];
                last_set: number;
                value: string;
            };
            /** Field to determine whether a channel has ever been shared/disconnected in the past */
            unlinked?: number;
            unread_count?: number;
            unread_count_display?: number;
        };
        /** File Comment Object */
        objs_comment: {
            comment: string;
            created: number;
            id: components["schemas"]["defs_comment_id"];
            is_intro: boolean;
            is_starred?: boolean;
            num_stars?: number;
            pinned_info?: components["schemas"]["defs_pinned_info"];
            pinned_to?: components["schemas"]["defs_channel"][];
            reactions?: components["schemas"]["objs_reaction"][];
            timestamp: number;
            user: components["schemas"]["defs_user_id"];
        };
        /** file comments object */
        objs_comments: unknown[];
        objs_conversation: unknown;
        objs_enterprise_user: {
            enterprise_id: components["schemas"]["defs_enterprise_id"];
            enterprise_name: components["schemas"]["defs_enterprise_name"];
            id: components["schemas"]["defs_enterprise_user_id"];
            is_admin: boolean;
            is_owner: boolean;
            teams: components["schemas"]["defs_team"][];
        };
        /** External Org Migrations */
        objs_external_org_migrations: {
            current: {
                date_started: number;
                team_id: string;
            }[];
            date_updated: number;
        };
        /** file object */
        objs_file: {
            channels?: components["schemas"]["defs_channel_id"][];
            comments_count?: number;
            created?: number;
            date_delete?: number;
            display_as_bot?: boolean;
            editable?: boolean;
            editor?: components["schemas"]["defs_user_id"];
            external_id?: string;
            external_type?: string;
            /** Format: uri */
            external_url?: string;
            filetype?: string;
            groups?: components["schemas"]["defs_group_id"][];
            has_rich_preview?: boolean;
            id?: components["schemas"]["defs_file_id"];
            image_exif_rotation?: number;
            ims?: components["schemas"]["defs_dm_id"][];
            is_external?: boolean;
            is_public?: boolean;
            is_starred?: boolean;
            is_tombstoned?: boolean;
            last_editor?: components["schemas"]["defs_user_id"];
            mimetype?: string;
            mode?: string;
            name?: string;
            non_owner_editable?: boolean;
            num_stars?: number;
            original_h?: number;
            original_w?: number;
            /** Format: uri */
            permalink?: string;
            /** Format: uri */
            permalink_public?: string;
            pinned_info?: components["schemas"]["defs_pinned_info"];
            pinned_to?: components["schemas"]["defs_channel"][];
            pretty_type?: string;
            preview?: string;
            public_url_shared?: boolean;
            reactions?: components["schemas"]["objs_reaction"][];
            shares?: {
                private?: unknown;
                public?: unknown;
            };
            size?: number;
            source_team?: components["schemas"]["defs_team"];
            state?: string;
            /** Format: uri */
            thumb_64?: string;
            /** Format: uri */
            thumb_80?: string;
            /** Format: uri */
            thumb_160?: string;
            /** Format: uri */
            thumb_360?: string;
            thumb_360_h?: number;
            thumb_360_w?: number;
            /** Format: uri */
            thumb_480?: string;
            thumb_480_h?: number;
            thumb_480_w?: number;
            /** Format: uri */
            thumb_720?: string;
            thumb_720_h?: number;
            thumb_720_w?: number;
            /** Format: uri */
            thumb_800?: string;
            thumb_800_h?: number;
            thumb_800_w?: number;
            /** Format: uri */
            thumb_960?: string;
            thumb_960_h?: number;
            thumb_960_w?: number;
            /** Format: uri */
            thumb_1024?: string;
            thumb_1024_h?: number;
            thumb_1024_w?: number;
            thumb_tiny?: string;
            timestamp?: number;
            title?: string;
            updated?: number;
            /** Format: uri */
            url_private?: string;
            /** Format: uri */
            url_private_download?: string;
            user?: string;
            user_team?: components["schemas"]["defs_team"];
            username?: string;
        };
        objs_icon: {
            image_34?: string;
            image_44?: string;
            image_68?: string;
            image_88?: string;
            image_102?: string;
            image_132?: string;
            image_230?: string;
            image_default?: boolean;
        };
        /** Message object */
        objs_message: {
            attachments?: {
                fallback?: string;
                id: number;
                image_bytes?: number;
                image_height?: number;
                image_url?: string;
                image_width?: number;
            }[];
            blocks?: components["schemas"]["blocks"];
            bot_id?: unknown;
            bot_profile?: components["schemas"]["objs_bot_profile"];
            client_msg_id?: string;
            comment?: components["schemas"]["objs_comment"];
            display_as_bot?: boolean;
            file?: components["schemas"]["objs_file"];
            files?: components["schemas"]["objs_file"][];
            icons?: {
                emoji?: string;
                /** Format: uri */
                image_64?: string;
            };
            inviter?: components["schemas"]["defs_user_id"];
            is_delayed_message?: boolean;
            is_intro?: boolean;
            is_starred?: boolean;
            last_read?: components["schemas"]["defs_ts"];
            latest_reply?: components["schemas"]["defs_ts"];
            name?: string;
            old_name?: string;
            parent_user_id?: components["schemas"]["defs_user_id"];
            /** Format: uri */
            permalink?: string;
            pinned_to?: components["schemas"]["defs_channel"][];
            purpose?: string;
            reactions?: components["schemas"]["objs_reaction"][];
            reply_count?: number;
            reply_users?: components["schemas"]["defs_user_id"][];
            reply_users_count?: number;
            source_team?: components["schemas"]["defs_workspace_id"];
            subscribed?: boolean;
            subtype?: string;
            team?: components["schemas"]["defs_workspace_id"];
            text: string;
            thread_ts?: components["schemas"]["defs_ts"];
            topic?: string;
            ts: components["schemas"]["defs_ts"];
            type: string;
            unread_count?: number;
            upload?: boolean;
            user?: components["schemas"]["defs_user_id"];
            user_profile?: components["schemas"]["objs_user_profile_short"];
            user_team?: components["schemas"]["defs_workspace_id"];
            username?: string;
        };
        /** paging object */
        objs_paging: {
            count?: number;
            page: number;
            pages?: number;
            per_page?: number;
            spill?: number;
            total: number;
        };
        objs_primary_owner: {
            email: string;
            id: string;
        };
        /** Reaction object */
        objs_reaction: {
            count: number;
            name: string;
            users: components["schemas"]["defs_user_id"][];
        } & {
            [key: string]: unknown;
        };
        objs_reminder: {
            complete_ts?: number;
            creator: components["schemas"]["defs_user_id"];
            id: components["schemas"]["defs_reminder_id"];
            recurring: boolean;
            text: string;
            time?: number;
            user: components["schemas"]["defs_user_id"];
        };
        /** resources in info from apps.permissions.info */
        objs_resources: {
            excluded_ids?: unknown[];
            ids: unknown[];
            wildcard?: boolean;
        };
        objs_response_metadata: unknown;
        objs_scopes: string[];
        /** Subteam/Usergroup Object */
        objs_subteam: {
            auto_provision: boolean;
            auto_type: unknown;
            channel_count?: number;
            created_by: components["schemas"]["defs_user_id"];
            date_create: number;
            date_delete: number;
            date_update: number;
            deleted_by: unknown;
            description: string;
            enterprise_subteam_id: string;
            handle: string;
            id: components["schemas"]["defs_subteam_id"];
            is_external: boolean;
            is_subteam: boolean;
            is_usergroup: boolean;
            name: string;
            prefs: {
                channels: components["schemas"]["defs_channel_id"][];
                groups: components["schemas"]["defs_group_id"][];
            };
            team_id: components["schemas"]["defs_team"];
            updated_by: components["schemas"]["defs_user_id"];
            user_count?: number;
            users?: components["schemas"]["defs_user_id"][];
        };
        /** Team Object */
        objs_team: {
            archived?: boolean;
            /** Format: uri */
            avatar_base_url?: string;
            created?: number;
            date_create?: number;
            deleted?: boolean;
            description?: string | null;
            discoverable?: unknown;
            domain: string;
            email_domain: string;
            enterprise_id?: components["schemas"]["defs_enterprise_id"];
            enterprise_name?: components["schemas"]["defs_enterprise_name"];
            external_org_migrations?: components["schemas"]["objs_external_org_migrations"];
            has_compliance_export?: boolean;
            icon: components["schemas"]["objs_icon"];
            id: components["schemas"]["defs_workspace_id"];
            is_assigned?: boolean;
            is_enterprise?: number;
            is_over_storage_limit?: boolean;
            limit_ts?: number;
            locale?: string;
            messages_count?: number;
            msg_edit_window_mins?: number;
            name: string;
            over_integrations_limit?: boolean;
            over_storage_limit?: boolean;
            pay_prod_cur?: string;
            /** @enum {string} */
            plan?: "" | "std" | "plus" | "compliance" | "enterprise";
            primary_owner?: components["schemas"]["objs_primary_owner"];
            sso_provider?: {
                label?: string;
                name?: string;
                type?: string;
            };
        };
        objs_team_profile_field: {
            field_name?: string | null;
            hint: string;
            id: string;
            is_hidden?: boolean;
            label: string;
            options?: unknown;
            ordering: number;
            possible_values?: string[] | null;
            /** @enum {string} */
            type: "text" | "date" | "link" | "mailto" | "options_list" | "user";
        };
        objs_team_profile_field_option: {
            is_custom?: boolean | null;
            is_multiple_entry?: boolean | null;
            is_protected?: boolean | null;
            is_scim?: boolean | null;
        };
        objs_user: unknown;
        /** User profile object */
        objs_user_profile: {
            always_active?: boolean;
            api_app_id?: components["schemas"]["defs_optional_app_id"];
            avatar_hash: string;
            bot_id?: components["schemas"]["defs_bot_id"];
            display_name: string;
            display_name_normalized: string;
            /** Format: email */
            email?: string | null;
            fields: (Record<string, never> | unknown[]) | null;
            first_name?: string | null;
            guest_expiration_ts?: number | null;
            guest_invited_by?: string | null;
            /** Format: uri */
            image_24?: string | null;
            /** Format: uri */
            image_32?: string | null;
            /** Format: uri */
            image_48?: string | null;
            /** Format: uri */
            image_72?: string | null;
            /** Format: uri */
            image_192?: string | null;
            /** Format: uri */
            image_512?: string | null;
            /** Format: uri */
            image_1024?: string | null;
            /** Format: uri */
            image_original?: string | null;
            is_app_user?: boolean;
            is_custom_image?: boolean;
            is_restricted?: boolean | null;
            is_ultra_restricted?: boolean | null;
            last_avatar_image_hash?: string;
            last_name?: string | null;
            memberships_count?: number;
            name?: string | null;
            phone: string;
            pronouns?: string;
            real_name: string;
            real_name_normalized: string;
            skype: string;
            status_default_emoji?: string;
            status_default_text?: string;
            status_default_text_canonical?: string | null;
            status_emoji: string;
            status_expiration?: number;
            status_text: string;
            status_text_canonical?: string | null;
            team?: components["schemas"]["defs_workspace_id"];
            title: string;
            updated?: number;
            user_id?: string;
            username?: string | null;
        };
        objs_user_profile_short: {
            avatar_hash: string;
            display_name: string;
            display_name_normalized?: string;
            first_name: string | null;
            /** Format: uri */
            image_72: string;
            is_restricted: boolean;
            is_ultra_restricted: boolean;
            name: string;
            real_name: string;
            real_name_normalized?: string;
            team: components["schemas"]["defs_workspace_id"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: {
        admin_inviteRequests_approve: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description ID of the request to invite. */
                    invite_request_id: string;
                    /** @description ID for the workspace where the invite request was made. */
                    team_id?: string;
                };
            };
        };
    };
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    admin_apps_approve: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.apps:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The id of the app to approve. */
                    app_id?: string;
                    /** @description The id of the request to approve. */
                    request_id?: string;
                    team_id?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_apps_approved_list: {
        parameters: {
            query: {
                /** @description Set `cursor` to `next_cursor` returned by the previous call to list items in the next page */
                cursor?: string;
                enterprise_id?: string;
                /** @description The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
                limit?: number;
                team_id?: string;
                /** @description Authentication token. Requires scope: `admin.apps:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_apps_requests_list: {
        parameters: {
            query: {
                /** @description Set `cursor` to `next_cursor` returned by the previous call to list items in the next page */
                cursor?: string;
                /** @description The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
                limit?: number;
                team_id?: string;
                /** @description Authentication token. Requires scope: `admin.apps:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_apps_restrict: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.apps:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The id of the app to restrict. */
                    app_id?: string;
                    /** @description The id of the request to restrict. */
                    request_id?: string;
                    team_id?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_apps_restricted_list: {
        parameters: {
            query: {
                /** @description Set `cursor` to `next_cursor` returned by the previous call to list items in the next page */
                cursor?: string;
                enterprise_id?: string;
                /** @description The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
                limit?: number;
                team_id?: string;
                /** @description Authentication token. Requires scope: `admin.apps:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_conversations_archive: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The channel to archive. */
                    channel_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "channel_not_found" | "channel_type_not_supported" | "default_org_wide_channel" | "already_archived" | "cant_archive_general" | "restricted_action" | "could_not_archive_channel";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    admin_conversations_convertToPrivate: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The channel to convert to private. */
                    channel_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "restricted_action" | "name_taken" | "channel_not_found" | "channel_type_not_supported" | "default_org_wide_channel" | "method_not_supported_for_channel_type" | "could_not_convert_channel" | "external_channel_migrating";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    admin_conversations_create: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Description of the public or private channel to create. */
                    description?: string;
                    /** @description When `true`, creates a private channel instead of a public channel */
                    is_private: boolean;
                    /** @description Name of the public or private channel to create. */
                    name: string;
                    /** @description When `true`, the channel will be available org-wide. Note: if the channel is not `org_wide=true`, you must specify a `team_id` for this channel */
                    org_wide?: boolean;
                    /** @description The workspace to create the channel in. Note: this argument is required unless you set `org_wide=true`. */
                    team_id?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel_id?: components["schemas"]["defs_channel_id"];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "name_taken" | "restricted_action" | "team_not_found" | "invalid_team" | "invalid_name" | "could_not_create_channel" | "team_id_or_org_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    admin_conversations_delete: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The channel to delete. */
                    channel_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "not_an_admin" | "channel_not_found" | "channel_type_not_supported" | "default_org_wide_channel" | "restricted_action" | "could_not_delete_channel" | "missing_scope";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    admin_conversations_disconnectShared: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The channel to be disconnected from some workspaces. */
                    channel_id: string;
                    /** @description The team to be removed from the channel. Currently only a single team id can be specified. */
                    leaving_team_ids?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "not_an_admin" | "not_an_enterprise" | "channel_not_found" | "not_supported" | "team_not_found" | "restricted_action" | "missing_scope" | "leaving_team_not_in_channel" | "no_teams_to_disconnect" | "leaving_team_required" | "cannot_kick_team" | "cannot_kick_home_team";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    admin_conversations_ekm_listOriginalConnectedChannelInfo: {
        parameters: {
            query: {
                /** @description A comma-separated list of channels to filter to. */
                channel_ids?: string;
                /** @description Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. */
                cursor?: string;
                /** @description The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
                limit?: number;
                /** @description A comma-separated list of the workspaces to which the channels you would like returned belong. */
                team_ids?: string;
                /** @description Authentication token. Requires scope: `admin.conversations:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_conversations_getConversationPrefs: {
        parameters: {
            query: {
                /** @description The channel to get preferences for. */
                channel_id: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        prefs?: {
                            can_thread?: {
                                type?: string[];
                                user?: string[];
                            };
                            who_can_post?: {
                                type?: string[];
                                user?: string[];
                            };
                        };
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "not_an_admin" | "not_an_enterprise" | "restricted_action" | "missing_scope" | "channel_not_found" | "channel_type_not_supported" | "could_not_get_conversation_prefs";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    admin_conversations_getTeams: {
        parameters: {
            query: {
                /** @description The channel to determine connected workspaces within the organization for. */
                channel_id: string;
                /** @description Set `cursor` to `next_cursor` returned by the previous call to list items in the next page */
                cursor?: string;
                /** @description The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
                limit?: number;
            };
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        response_metadata?: {
                            next_cursor: string;
                        };
                        team_ids: components["schemas"]["defs_team"][];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "channel_not_found" | "channel_type_not_supported" | "unsupported_team_type" | "restricted_action" | "could_not_get_teams" | "invalid_cursor" | "invalid_limit";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    admin_conversations_invite: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The channel that the users will be invited to. */
                    channel_id: string;
                    /** @description The users to invite. */
                    user_ids: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "channel_not_found" | "channel_type_not_supported" | "default_org_wide_channel" | "restricted_action" | "user_must_be_admin" | "failed_for_some_users";
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_conversations_rename: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The channel to rename. */
                    channel_id: string;
                    name: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "channel_not_found" | "channel_type_not_supported" | "restricted_action" | "could_not_rename_channel" | "default_org_wide_channel" | "name_taken";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    admin_conversations_restrictAccess_addGroup: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The channel to link this group to. */
                    channel_id: string;
                    /** @description The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to be an allowlist for the private channel. */
                    group_id: string;
                    /** @description The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. */
                    team_id?: string;
                    /** @description Authentication token. Requires scope: `admin.conversations:write` */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_conversations_restrictAccess_listGroups: {
        parameters: {
            query: {
                channel_id: string;
                /** @description The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. */
                team_id?: string;
                /** @description Authentication token. Requires scope: `admin.conversations:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_conversations_restrictAccess_removeGroup: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The channel to remove the linked group from. */
                    channel_id: string;
                    /** @description The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel. */
                    group_id: string;
                    /** @description The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. */
                    team_id: string;
                    /** @description Authentication token. Requires scope: `admin.conversations:write` */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_conversations_search: {
        parameters: {
            query?: {
                /** @description Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. */
                cursor?: string;
                /** @description Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10. */
                limit?: number;
                /** @description Name of the the channel to query by. */
                query?: string;
                /** @description The type of channel to include or exclude in the search. For example `private` will search private channels, while `private_exclude` will exclude them. For a full list of types, check the [Types section](#types). */
                search_channel_types?: string;
                /** @description Possible values are `relevant` (search ranking based on what we think is closest), `name` (alphabetical), `member_count` (number of users in the channel), and `created` (date channel was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted */
                sort?: string;
                /** @description Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c), and `desc` for descending order like (3, 2, 1) or (c, b, a) */
                sort_dir?: string;
                /** @description Comma separated string of team IDs, signifying the workspaces to search through. */
                team_ids?: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channels: components["schemas"]["objs_channel"][];
                        next_cursor: string;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "not_an_admin" | "not_an_enterprise" | "team_not_found" | "not_allowed" | "invalid_auth" | "invalid_cursor" | "invalid_search_channel_type" | "invalid_sort" | "invalid_sort_dir";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    admin_conversations_setConversationPrefs: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The channel to set the prefs for */
                    channel_id: string;
                    /** @description The prefs for this channel in a stringified JSON format. */
                    prefs: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "not_an_admin" | "channel_not_found" | "channel_type_not_supported" | "restricted_action" | "missing_scope" | "could_not_set_channel_pref" | "default_org_wide_channel";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    admin_conversations_setTeams: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The encoded `channel_id` to add or remove to workspaces. */
                    channel_id: string;
                    /** @description True if channel has to be converted to an org channel */
                    org_channel?: boolean;
                    /** @description A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide. */
                    target_team_ids?: string;
                    /** @description The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel. */
                    team_id?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_conversations_unarchive: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.conversations:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The channel to unarchive. */
                    channel_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        error: "feature_not_enabled" | "channel_not_found" | "channel_not_archived" | "channel_type_not_supported" | "restricted_action" | "could_not_unarchive_channel" | "default_org_wide_channel" | "missing_scope";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    admin_emoji_add: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included. */
                    name: string;
                    /** @description Authentication token. Requires scope: `admin.teams:write` */
                    token: string;
                    /** @description The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best. */
                    url: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_emoji_addAlias: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The alias of the emoji. */
                    alias_for: string;
                    /** @description The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included. */
                    name: string;
                    /** @description Authentication token. Requires scope: `admin.teams:write` */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_emoji_list: {
        parameters: {
            query: {
                /** @description Set `cursor` to `next_cursor` returned by the previous call to list items in the next page */
                cursor?: string;
                /** @description The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
                limit?: number;
                /** @description Authentication token. Requires scope: `admin.teams:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_emoji_remove: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included. */
                    name: string;
                    /** @description Authentication token. Requires scope: `admin.teams:write` */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_emoji_rename: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included. */
                    name: string;
                    /** @description The new name of the emoji. */
                    new_name: string;
                    /** @description Authentication token. Requires scope: `admin.teams:write` */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_inviteRequests_approve: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.invites:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["admin_inviteRequests_approve"];
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_inviteRequests_approved_list: {
        parameters: {
            query?: {
                /** @description Value of the `next_cursor` field sent as part of the previous API response */
                cursor?: string;
                /** @description The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive */
                limit?: number;
                /** @description ID for the workspace where the invite requests were made. */
                team_id?: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `admin.invites:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_inviteRequests_denied_list: {
        parameters: {
            query?: {
                /** @description Value of the `next_cursor` field sent as part of the previous api response */
                cursor?: string;
                /** @description The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive */
                limit?: number;
                /** @description ID for the workspace where the invite requests were made. */
                team_id?: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `admin.invites:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_inviteRequests_deny: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.invites:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["admin_inviteRequests_approve"];
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_inviteRequests_list: {
        parameters: {
            query?: {
                /** @description Value of the `next_cursor` field sent as part of the previous API response */
                cursor?: string;
                /** @description The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive */
                limit?: number;
                /** @description ID for the workspace where the invite requests were made. */
                team_id?: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `admin.invites:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_teams_admins_list: {
        parameters: {
            query: {
                /** @description Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. */
                cursor?: string;
                /** @description The maximum number of items to return. */
                limit?: number;
                team_id: string;
                /** @description Authentication token. Requires scope: `admin.teams:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_teams_create: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.teams:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Description for the team. */
                    team_description?: string;
                    /** @description Who can join the team. A team's discoverability can be `open`, `closed`, `invite_only`, or `unlisted`. */
                    team_discoverability?: string;
                    /** @description Team domain (for example, slacksoftballteam). */
                    team_domain: string;
                    /** @description Team name (for example, Slack Softball Team). */
                    team_name: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_teams_list: {
        parameters: {
            query?: {
                /** @description Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. */
                cursor?: string;
                /** @description The maximum number of items to return. Must be between 1 - 100 both inclusive. */
                limit?: number;
            };
            header: {
                /** @description Authentication token. Requires scope: `admin.teams:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_teams_owners_list: {
        parameters: {
            query: {
                /** @description Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. */
                cursor?: string;
                /** @description The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
                limit?: number;
                team_id: string;
                /** @description Authentication token. Requires scope: `admin.teams:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_teams_settings_info: {
        parameters: {
            query: {
                team_id: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `admin.teams:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_teams_settings_setDefaultChannels: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description An array of channel IDs. */
                    channel_ids: string;
                    /** @description ID for the workspace to set the default channel for. */
                    team_id: string;
                    /** @description Authentication token. Requires scope: `admin.teams:write` */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_teams_settings_setDescription: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.teams:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The new description for the workspace. */
                    description: string;
                    /** @description ID for the workspace to set the description for. */
                    team_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_teams_settings_setDiscoverability: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.teams:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description This workspace's discovery setting. It must be set to one of `open`, `invite_only`, `closed`, or `unlisted`. */
                    discoverability: string;
                    /** @description The ID of the workspace to set discoverability on. */
                    team_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_teams_settings_setIcon: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Image URL for the icon */
                    image_url: string;
                    /** @description ID for the workspace to set the icon for. */
                    team_id: string;
                    /** @description Authentication token. Requires scope: `admin.teams:write` */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_teams_settings_setName: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.teams:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The new name of the workspace. */
                    name: string;
                    /** @description ID for the workspace to set the name for. */
                    team_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_usergroups_addChannels: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.usergroups:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Comma separated string of channel IDs. */
                    channel_ids: string;
                    /** @description The workspace to add default channels in. */
                    team_id?: string;
                    /** @description ID of the IDP group to add default channels for. */
                    usergroup_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response if the token provided is not associated with an Org Admin or Owner */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_usergroups_addTeams: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.teams:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description When `true`, this method automatically creates new workspace accounts for the IDP group members. */
                    auto_provision?: boolean;
                    /** @description A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the organization associated with the token. */
                    team_ids: string;
                    /** @description An encoded usergroup (IDP Group) ID. */
                    usergroup_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_usergroups_listChannels: {
        parameters: {
            query: {
                /** @description Flag to include or exclude the count of members per channel. */
                include_num_members?: boolean;
                /** @description ID of the the workspace. */
                team_id?: string;
                /** @description ID of the IDP group to list default channels for. */
                usergroup_id: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `admin.usergroups:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response if the token provided is not associated with an Org Admin or Owner */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_usergroups_removeChannels: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.usergroups:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Comma-separated string of channel IDs */
                    channel_ids: string;
                    /** @description ID of the IDP Group */
                    usergroup_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response if the token provided is not associated with an Org Admin or Owner */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_users_assign: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.users:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Comma separated values of channel IDs to add user in the new workspace. */
                    channel_ids?: string;
                    /** @description True if user should be added to the workspace as a guest. */
                    is_restricted?: boolean;
                    /** @description True if user should be added to the workspace as a single-channel guest. */
                    is_ultra_restricted?: boolean;
                    /** @description The ID (`T1234`) of the workspace. */
                    team_id: string;
                    /** @description The ID of the user to add to the workspace. */
                    user_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_users_invite: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.users:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A comma-separated list of `channel_id`s for this user to join. At least one channel is required. */
                    channel_ids: string;
                    /** @description An optional message to send to the user in the invite email. */
                    custom_message?: string;
                    /** @description The email address of the person to invite. */
                    email: string;
                    /** @description Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date. */
                    guest_expiration_ts?: string;
                    /** @description Is this user a multi-channel guest user? (default: false) */
                    is_restricted?: boolean;
                    /** @description Is this user a single channel guest user? (default: false) */
                    is_ultra_restricted?: boolean;
                    /** @description Full name of the user. */
                    real_name?: string;
                    /** @description Allow this invite to be resent in the future if a user has not signed up yet. (default: false) */
                    resend?: boolean;
                    /** @description The ID (`T1234`) of the workspace. */
                    team_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_users_list: {
        parameters: {
            query: {
                /** @description Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. */
                cursor?: string;
                /** @description Limit for how many users to be retrieved per page */
                limit?: number;
                /** @description The ID (`T1234`) of the workspace. */
                team_id: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `admin.users:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_users_remove: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.users:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The ID (`T1234`) of the workspace. */
                    team_id: string;
                    /** @description The ID of the user to remove. */
                    user_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_users_session_invalidate: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.users:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    session_id: number;
                    /** @description ID of the team that the session belongs to */
                    team_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_users_session_reset: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.users:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Only expire mobile sessions (default: false) */
                    mobile_only?: boolean;
                    /** @description The ID of the user to wipe sessions for */
                    user_id: string;
                    /** @description Only expire web sessions (default: false) */
                    web_only?: boolean;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_users_setAdmin: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.users:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The ID (`T1234`) of the workspace. */
                    team_id: string;
                    /** @description The ID of the user to designate as an admin. */
                    user_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_users_setExpiration: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.users:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Timestamp when guest account should be disabled. */
                    expiration_ts: number;
                    /** @description The ID (`T1234`) of the workspace. */
                    team_id: string;
                    /** @description The ID of the user to set an expiration for. */
                    user_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_users_setOwner: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.users:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The ID (`T1234`) of the workspace. */
                    team_id: string;
                    /** @description Id of the user to promote to owner. */
                    user_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    admin_users_setRegular: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `admin.users:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The ID (`T1234`) of the workspace. */
                    team_id: string;
                    /** @description The ID of the user to designate as a regular user. */
                    user_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    api_test: {
        parameters: {
            query?: {
                /** @description Error response to return */
                error?: string;
                /** @description example property to return */
                foo?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Standard success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: Record<string, never>;
                    };
                };
            };
            /** @description Artificial error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: Record<string, never>;
                    };
                };
            };
        };
    };
    apps_event_authorizations_list: {
        parameters: {
            query: {
                cursor?: string;
                event_context: string;
                limit?: number;
            };
            header: {
                /** @description Authentication token. Requires scope: `authorizations:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    apps_permissions_info: {
        parameters: {
            query?: {
                /** @description Authentication token. Requires scope: `none` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Standard success response when used with a user token */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        info: {
                            app_home: {
                                resources?: components["schemas"]["objs_resources"];
                                scopes?: components["schemas"]["objs_scopes"];
                            };
                            channel: {
                                resources?: components["schemas"]["objs_resources"];
                                scopes?: components["schemas"]["objs_scopes"];
                            };
                            group: {
                                resources?: components["schemas"]["objs_resources"];
                                scopes?: components["schemas"]["objs_scopes"];
                            };
                            im: {
                                resources?: components["schemas"]["objs_resources"];
                                scopes?: components["schemas"]["objs_scopes"];
                            };
                            mpim: {
                                resources?: components["schemas"]["objs_resources"];
                                scopes?: components["schemas"]["objs_scopes"];
                            };
                            team: {
                                resources: components["schemas"]["objs_resources"];
                                scopes: components["schemas"]["objs_scopes"];
                            };
                        };
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Standard failure response when used with an invalid token */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    apps_permissions_request: {
        parameters: {
            query: {
                /** @description A comma separated list of scopes to request for */
                scopes: string;
                /** @description Authentication token. Requires scope: `none` */
                token: string;
                /** @description Token used to trigger the permissions API */
                trigger_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Standard success response when used with a user token */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Standard failure response when trigger_id is invalid */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "invalid_trigger" | "trigger_exchanged" | "invalid_scope" | "invalid_user" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    apps_permissions_resources_list: {
        parameters: {
            query: {
                /** @description Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
                cursor?: string;
                /** @description The maximum number of items to return. */
                limit?: number;
                /** @description Authentication token. Requires scope: `none` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical successful paginated response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        resources: {
                            /** An ID for a resource */
                            id?: string;
                            /** The type of resource the `id` corresponds to */
                            type?: string;
                        }[];
                        response_metadata?: {
                            next_cursor: string;
                        };
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "invalid_cursor" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    apps_permissions_scopes_list: {
        parameters: {
            query: {
                /** @description Authentication token. Requires scope: `none` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical successful paginated response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        scopes: {
                            app_home?: components["schemas"]["objs_scopes"];
                            channel?: components["schemas"]["objs_scopes"];
                            group?: components["schemas"]["objs_scopes"];
                            im?: components["schemas"]["objs_scopes"];
                            mpim?: components["schemas"]["objs_scopes"];
                            team?: components["schemas"]["objs_scopes"];
                            user?: components["schemas"]["objs_scopes"];
                        } & {
                            [key: string]: unknown;
                        };
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    apps_permissions_users_list: {
        parameters: {
            query: {
                /** @description Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
                cursor?: string;
                /** @description The maximum number of items to return. */
                limit?: number;
                /** @description Authentication token. Requires scope: `none` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical successful paginated response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    apps_permissions_users_request: {
        parameters: {
            query: {
                /** @description A comma separated list of user scopes to request for */
                scopes: string;
                /** @description Authentication token. Requires scope: `none` */
                token: string;
                /** @description Token used to trigger the request */
                trigger_id: string;
                /** @description The user this scope is being requested for */
                user: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Standard success response when used with a user token */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Standard failure response when trigger_id is invalid */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    apps_uninstall: {
        parameters: {
            query?: {
                /** @description Issued when you created your application. */
                client_id?: string;
                /** @description Issued when you created your application. */
                client_secret?: string;
                /** @description Authentication token. Requires scope: `none` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "invalid_client_id" | "bad_client_secret" | "client_id_token_mismatch" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    auth_revoke: {
        parameters: {
            query: {
                /** @description Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked. */
                test?: boolean;
                /** @description Authentication token. Requires scope: `none` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        revoked: boolean;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    auth_test: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `none` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Standard success response when used with a user token */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        bot_id?: components["schemas"]["defs_bot_id"];
                        is_enterprise_install?: boolean;
                        ok: components["schemas"]["defs_ok_true"];
                        team: string;
                        team_id: components["schemas"]["defs_team"];
                        url: string;
                        user: string;
                        user_id: components["schemas"]["defs_user_id"];
                    };
                };
            };
            /** @description Standard failure response when used with an invalid token */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "token_revoked" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    bots_info: {
        parameters: {
            query: {
                /** @description Bot user to get info on */
                bot?: string;
                /** @description Authentication token. Requires scope: `users:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description When successful, returns bot info by bot ID. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        bot: {
                            app_id: components["schemas"]["defs_app_id"];
                            deleted: boolean;
                            icons: {
                                /** Format: uri */
                                image_36: string;
                                /** Format: uri */
                                image_48: string;
                                /** Format: uri */
                                image_72: string;
                            };
                            id: components["schemas"]["defs_bot_id"];
                            name: string;
                            updated: number;
                            user_id?: components["schemas"]["defs_user_id"];
                        };
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description When no bot can be found, it returns an error. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "bot_not_found" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    calls_add: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `calls:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The valid Slack user ID of the user who created this Call. When this method is called with a user token, the `created_by` field is optional and defaults to the authed user of the token. Otherwise, the field is required. */
                    created_by?: string;
                    /** @description Call start time in UTC UNIX timestamp format */
                    date_start?: number;
                    /** @description When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL. */
                    desktop_app_join_url?: string;
                    /** @description An optional, human-readable ID supplied by the 3rd-party Call provider. If supplied, this ID will be displayed in the Call object. */
                    external_display_id?: string;
                    /** @description An ID supplied by the 3rd-party Call provider. It must be unique across all Calls from that service. */
                    external_unique_id: string;
                    /** @description The URL required for a client to join the Call. */
                    join_url: string;
                    /** @description The name of the Call. */
                    title?: string;
                    /** @description The list of users to register as participants in the Call. [Read more on how to specify users here](/apis/calls#users). */
                    users?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    calls_end: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `calls:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Call duration in seconds */
                    duration?: number;
                    /** @description `id` returned when registering the call using the [`calls.add`](/methods/calls.add) method. */
                    id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    calls_info: {
        parameters: {
            query: {
                /** @description `id` of the Call returned by the [`calls.add`](/methods/calls.add) method. */
                id: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `calls:read` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    calls_participants_add: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `calls:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description `id` returned by the [`calls.add`](/methods/calls.add) method. */
                    id: string;
                    /** @description The list of users to add as participants in the Call. [Read more on how to specify users here](/apis/calls#users). */
                    users: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    calls_participants_remove: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `calls:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description `id` returned by the [`calls.add`](/methods/calls.add) method. */
                    id: string;
                    /** @description The list of users to remove as participants in the Call. [Read more on how to specify users here](/apis/calls#users). */
                    users: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    calls_update: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `calls:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL. */
                    desktop_app_join_url?: string;
                    /** @description `id` returned by the [`calls.add`](/methods/calls.add) method. */
                    id: string;
                    /** @description The URL required for a client to join the Call. */
                    join_url?: string;
                    /** @description The name of the Call. */
                    title?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    chat_delete: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `chat:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope. */
                    as_user?: boolean;
                    /** @description Channel containing the message to be deleted. */
                    channel?: string;
                    /** @description Timestamp of the message to be deleted. */
                    ts?: number;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["defs_channel"];
                        ok: components["schemas"]["defs_ok_true"];
                        ts: components["schemas"]["defs_ts"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "message_not_found" | "channel_not_found" | "cant_delete_message" | "compliance_exports_prevent_deletion" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    chat_deleteScheduledMessage: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `chat:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope. */
                    as_user?: boolean;
                    /** @description The channel the scheduled_message is posting to */
                    channel: string;
                    /** @description `scheduled_message_id` returned from call to chat.scheduleMessage */
                    scheduled_message_id: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response if no message is found */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "invalid_scheduled_message_id" | "channel_not_found" | "bad_token" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "ekm_access_denied" | "missing_scope" | "invalid_arguments" | "invalid_arg_name" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    chat_getPermalink: {
        parameters: {
            query: {
                /** @description The ID of the conversation or channel containing the message */
                channel: string;
                /** @description A message's `ts` value, uniquely identifying it within a channel */
                message_ts: string;
                /** @description Authentication token. Requires scope: `none` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Standard success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["defs_channel"];
                        ok: components["schemas"]["defs_ok_true"];
                        /** Format: uri */
                        permalink: string;
                    };
                };
            };
            /** @description Error response when channel cannot be found */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "channel_not_found" | "message_not_found" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    chat_meMessage: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `chat:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name. */
                    channel?: string;
                    /** @description Text of the message to send. */
                    text?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel?: components["schemas"]["defs_channel"];
                        ok: components["schemas"]["defs_ok_true"];
                        ts?: components["schemas"]["defs_ts"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "channel_not_found" | "not_in_channel" | "is_archived" | "msg_too_long" | "no_text" | "rate_limited" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    chat_postEphemeral: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `chat:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Pass true to post the message as the authed user. Defaults to true if the chat:write:bot scope is not included. Otherwise, defaults to false. */
                    as_user?: boolean;
                    /** @description A JSON-based array of structured attachments, presented as a URL-encoded string. */
                    attachments?: string;
                    /** @description A JSON-based array of structured blocks, presented as a URL-encoded string. */
                    blocks?: string;
                    /** @description Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. */
                    channel: string;
                    /** @description Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below. */
                    icon_emoji?: string;
                    /** @description URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. */
                    icon_url?: string;
                    /** @description Find and link channel names and usernames. */
                    link_names?: boolean;
                    /** @description Change how messages are treated. Defaults to `none`. See [below](#formatting). */
                    parse?: string;
                    /** @description How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. */
                    text?: string;
                    /** @description Provide another message's `ts` value to post this message in a thread. Avoid using a reply's `ts` value; use its parent's value instead. Ephemeral messages in threads are only shown if there is already an active thread. */
                    thread_ts?: string;
                    /** @description `id` of the user who will receive the ephemeral message. The user should be in the channel specified by the `channel` argument. */
                    user: string;
                    /** @description Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. */
                    username?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message_ts: components["schemas"]["defs_ts"];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "channel_not_found" | "is_archived" | "msg_too_long" | "no_text" | "restricted_action" | "too_many_attachments" | "user_not_in_channel" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    chat_postMessage: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `chat:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](#authorship) below. */
                    as_user?: string;
                    /** @description A JSON-based array of structured attachments, presented as a URL-encoded string. */
                    attachments?: string;
                    /** @description A JSON-based array of structured blocks, presented as a URL-encoded string. */
                    blocks?: string;
                    /** @description Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details. */
                    channel: string;
                    /** @description Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below. */
                    icon_emoji?: string;
                    /** @description URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. */
                    icon_url?: string;
                    /** @description Find and link channel names and usernames. */
                    link_names?: boolean;
                    /** @description Disable Slack markup parsing by setting to `false`. Enabled by default. */
                    mrkdwn?: boolean;
                    /** @description Change how messages are treated. Defaults to `none`. See [below](#formatting). */
                    parse?: string;
                    /** @description Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`. */
                    reply_broadcast?: boolean;
                    /** @description How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. */
                    text?: string;
                    /** @description Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead. */
                    thread_ts?: string;
                    /** @description Pass true to enable unfurling of primarily text-based content. */
                    unfurl_links?: boolean;
                    /** @description Pass false to disable unfurling of media content. */
                    unfurl_media?: boolean;
                    /** @description Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. */
                    username?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["defs_channel"];
                        message: components["schemas"]["objs_message"];
                        ok: components["schemas"]["defs_ok_true"];
                        ts: components["schemas"]["defs_ts"];
                    };
                };
            };
            /** @description Typical error response if too many attachments are included */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "channel_not_found" | "not_in_channel" | "is_archived" | "msg_too_long" | "no_text" | "too_many_attachments" | "rate_limited" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    chat_scheduledMessages_list: {
        parameters: {
            query?: {
                /** @description The channel of the scheduled messages */
                channel?: string;
                /** @description For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from. */
                cursor?: string;
                /** @description A UNIX timestamp of the latest value in the time range */
                latest?: number;
                /** @description Maximum number of original entries to return. */
                limit?: number;
                /** @description A UNIX timestamp of the oldest value in the time range */
                oldest?: number;
            };
            header?: {
                /** @description Authentication token. Requires scope: `none` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        response_metadata: {
                            next_cursor: string;
                        };
                        scheduled_messages: {
                            channel_id: components["schemas"]["defs_channel_id"];
                            date_created: number;
                            id: string;
                            post_at: number;
                            text?: string;
                        }[];
                    };
                };
            };
            /** @description Typical error response if the channel passed is invalid */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "invalid_channel" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "ekm_access_denied" | "missing_scope" | "invalid_arguments" | "invalid_arg_name" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    chat_scheduleMessage: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `chat:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [chat.postMessage](chat.postMessage#authorship). */
                    as_user?: boolean;
                    /** @description A JSON-based array of structured attachments, presented as a URL-encoded string. */
                    attachments?: string;
                    /** @description A JSON-based array of structured blocks, presented as a URL-encoded string. */
                    blocks?: string;
                    /** @description Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details. */
                    channel?: string;
                    /** @description Find and link channel names and usernames. */
                    link_names?: boolean;
                    /** @description Change how messages are treated. Defaults to `none`. See [chat.postMessage](chat.postMessage#formatting). */
                    parse?: string;
                    /** @description Unix EPOCH timestamp of time in future to send the message. */
                    post_at?: string;
                    /** @description Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`. */
                    reply_broadcast?: boolean;
                    /** @description How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. */
                    text?: string;
                    /** @description Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead. */
                    thread_ts?: number;
                    /** @description Pass true to enable unfurling of primarily text-based content. */
                    unfurl_links?: boolean;
                    /** @description Pass false to disable unfurling of media content. */
                    unfurl_media?: boolean;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["defs_channel"];
                        message: {
                            bot_id: components["schemas"]["defs_bot_id"];
                            bot_profile?: components["schemas"]["objs_bot_profile"];
                            team: components["schemas"]["defs_team"];
                            text: string;
                            type: string;
                            user: components["schemas"]["defs_user_id"];
                            username?: string;
                        };
                        ok: components["schemas"]["defs_ok_true"];
                        post_at: number;
                        /** Scheduled Message ID */
                        scheduled_message_id: string;
                    };
                };
            };
            /** @description Typical error response if the `post_at` is invalid (ex. in the past or too far into the future) */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "invalid_time" | "time_in_past" | "time_too_far" | "channel_not_found" | "not_in_channel" | "is_archived" | "msg_too_long" | "no_text" | "restricted_action" | "restricted_action_read_only_channel" | "restricted_action_thread_only_channel" | "restricted_action_non_threadable_channel" | "too_many_attachments" | "rate_limited" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "ekm_access_denied" | "missing_scope" | "invalid_arguments" | "invalid_arg_name" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    chat_unfurl: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `links:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Channel ID of the message */
                    channel: string;
                    /** @description Timestamp of the message to add unfurl behavior to. */
                    ts: string;
                    /** @description URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl blocks or message attachments. */
                    unfurls?: string;
                    /** @description Provide a simply-formatted string to send as an ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior */
                    user_auth_message?: string;
                    /** @description Set to `true` or `1` to indicate the user must install your Slack app to trigger unfurls for this domain */
                    user_auth_required?: boolean;
                    /** @description Send users to this custom URL where they will complete authentication in your app to fully trigger unfurling. Value should be properly URL-encoded. */
                    user_auth_url?: string;
                };
            };
        };
        responses: {
            /** @description Typical, minimal success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "cannot_unfurl_url" | "cannot_find_service" | "missing_unfurls" | "cannot_prompt" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    chat_update: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `chat:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Pass true to update the message as the authed user. [Bot users](/bot-users) in this context are considered authed users. */
                    as_user?: string;
                    /** @description A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting `text`. If you don't include this field, the message's previous `attachments` will be retained. To remove previous `attachments`, include an empty array for this field. */
                    attachments?: string;
                    /** @description A JSON-based array of [structured blocks](/block-kit/building), presented as a URL-encoded string. If you don't include this field, the message's previous `blocks` will be retained. To remove previous `blocks`, include an empty array for this field. */
                    blocks?: string;
                    /** @description Channel containing the message to be updated. */
                    channel: string;
                    /** @description Find and link channel names and usernames. Defaults to `none`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `none`. */
                    link_names?: string;
                    /** @description Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. Accepts either `none` or `full`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `client`. */
                    parse?: string;
                    /** @description New text for the message, using the [default formatting rules](/reference/surfaces/formatting). It's not required when presenting `blocks` or `attachments`. */
                    text?: string;
                    /** @description Timestamp of the message to be updated. */
                    ts: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: string;
                        /** Message object */
                        message: {
                            attachments?: Record<string, never>[];
                            blocks?: Record<string, never>;
                            text: string;
                        };
                        ok: components["schemas"]["defs_ok_true"];
                        text: string;
                        ts: string;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "message_not_found" | "cant_update_message" | "channel_not_found" | "edit_window_closed" | "msg_too_long" | "too_many_attachments" | "rate_limited" | "no_text" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "request_timeout" | "invalid_json" | "json_not_object" | "upgrade_required" | "fatal_error" | "is_inactive";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    conversations_archive: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description ID of conversation to archive */
                    channel?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "missing_scope" | "not_supported" | "channel_not_found" | "already_archived" | "cant_archive_general" | "restricted_action" | "not_authed" | "invalid_auth" | "account_inactive" | "user_is_bot" | "user_is_restricted" | "user_is_ultra_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "team_added_to_org" | "missing_charset" | "superfluous_charset";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_close: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Conversation to close. */
                    channel?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        already_closed?: boolean;
                        no_op?: boolean;
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "channel_not_found" | "user_does_not_own_channel" | "missing_scope" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_create: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Create a private channel instead of a public one */
                    is_private?: boolean;
                    /** @description Name of the public or private channel to create */
                    name?: string;
                };
            };
        };
        responses: {
            /** @description If successful, the command returns a rather stark [conversation object](/types/conversation) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["objs_conversation"];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response when name already in use */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        detail?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "missing_scope" | "name_taken" | "restricted_action" | "no_channel" | "invalid_name_required" | "invalid_name_punctuation" | "invalid_name_maxlength" | "invalid_name_specials" | "invalid_name" | "not_authed" | "invalid_auth" | "account_inactive" | "user_is_bot" | "user_is_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_history: {
        parameters: {
            query?: {
                /** @description Conversation ID to fetch history for. */
                channel?: string;
                /** @description Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
                cursor?: string;
                /** @description Include messages with latest or oldest timestamp in results only when either timestamp is specified. */
                inclusive?: boolean;
                /** @description End of time range of messages to include in results. */
                latest?: number;
                /** @description The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. */
                limit?: number;
                /** @description Start of time range of messages to include in results. */
                oldest?: number;
                /** @description Authentication token. Requires scope: `conversations:history` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response containing a channel's messages */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel_actions_count: number;
                        channel_actions_ts: unknown;
                        has_more: boolean;
                        messages: components["schemas"]["objs_message"][];
                        ok: components["schemas"]["defs_ok_true"];
                        pin_count: number;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "missing_scope" | "channel_not_found" | "invalid_ts_latest" | "invalid_ts_oldest" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_info: {
        parameters: {
            query?: {
                /** @description Conversation ID to learn more about */
                channel?: string;
                /** @description Set this to `true` to receive the locale for this conversation. Defaults to `false` */
                include_locale?: boolean;
                /** @description Set to `true` to include the member count for the specified conversation. Defaults to `false` */
                include_num_members?: boolean;
                /** @description Authentication token. Requires scope: `conversations:read` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response for a public channel. (Also, a response from a private channel and a multi-party IM is very similar to this example.) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["objs_conversation"];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response when a channel cannot be found */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "missing_scope" | "channel_not_found" | "team_added_to_org" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_invite: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The ID of the public or private channel to invite user(s) to. */
                    channel?: string;
                    /** @description A comma separated list of user IDs. Up to 1000 users may be listed. */
                    users?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response when an invitation is extended */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["objs_conversation"];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response when an invite is attempted on a conversation type that does not support it */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error?: "method_not_supported_for_channel_type" | "missing_scope" | "channel_not_found" | "user_not_found" | "no_user" | "cant_invite_self" | "not_in_channel" | "already_in_channel" | "is_archived" | "cant_invite" | "too_many_users" | "ura_max_channels" | "not_authed" | "invalid_auth" | "account_inactive" | "user_is_bot" | "user_is_restricted" | "user_is_ultra_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "team_added_to_org" | "missing_charset" | "superfluous_charset";
                        /** errors is returned when an error associates an user */
                        errors?: {
                            /** @enum {string} */
                            error: "method_not_supported_for_channel_type" | "missing_scope" | "channel_not_found" | "user_not_found" | "no_user" | "cant_invite_self" | "not_in_channel" | "already_in_channel" | "is_archived" | "cant_invite" | "too_many_users" | "ura_max_channels" | "not_authed" | "invalid_auth" | "account_inactive" | "user_is_bot" | "user_is_restricted" | "user_is_ultra_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "team_added_to_org" | "missing_charset" | "superfluous_charset";
                            ok: components["schemas"]["defs_ok_false"];
                            user?: components["schemas"]["defs_user_id"];
                        }[];
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_join: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `channels:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description ID of conversation to join */
                    channel?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["objs_conversation"];
                        ok: components["schemas"]["defs_ok_true"];
                        /** Response metadata */
                        response_metadata?: {
                            warnings?: string[];
                        };
                        warning?: string;
                    };
                };
            };
            /** @description Typical error response if the conversation is archived and cannot be joined */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "missing_scope" | "channel_not_found" | "is_archived" | "not_authed" | "invalid_auth" | "account_inactive" | "user_is_bot" | "user_is_restricted" | "user_is_ultra_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "team_added_to_org" | "missing_charset" | "superfluous_charset";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_kick: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description ID of conversation to remove user from. */
                    channel?: string;
                    /** @description User ID to be removed. */
                    user?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response when you attempt to kick yourself from a channel */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "missing_scope" | "channel_not_found" | "user_not_found" | "cant_kick_self" | "not_in_channel" | "cant_kick_from_general" | "restricted_action" | "not_authed" | "invalid_auth" | "account_inactive" | "user_is_bot" | "user_is_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_leave: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Conversation to leave */
                    channel?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {boolean} */
                        not_in_channel?: true;
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response when attempting to leave a workspace's "general" channel */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "last_member" | "missing_scope" | "channel_not_found" | "is_archived" | "cant_leave_general" | "not_authed" | "invalid_auth" | "account_inactive" | "user_is_bot" | "user_is_restricted" | "user_is_ultra_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "team_added_to_org" | "missing_charset" | "superfluous_charset";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_list: {
        parameters: {
            query?: {
                /** @description Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
                cursor?: string;
                /** @description Set to `true` to exclude archived channels from the list */
                exclude_archived?: boolean;
                /** @description The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000. */
                limit?: number;
                /** @description Authentication token. Requires scope: `conversations:read` */
                token?: string;
                /** @description Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im` */
                types?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response with only public channels */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channels: components["schemas"]["objs_conversation"][];
                        ok: components["schemas"]["defs_ok_true"];
                        response_metadata?: {
                            next_cursor: string;
                        };
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "missing_scope" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_mark: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Channel or conversation to set the read cursor for. */
                    channel?: string;
                    /** @description Unique identifier of message you want marked as most recently seen in this conversation. */
                    ts?: number;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "missing_scope" | "channel_not_found" | "invalid_timestamp" | "not_in_channel" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "not_allowed_token_type";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_members: {
        parameters: {
            query?: {
                /** @description ID of the conversation to retrieve members for */
                channel?: string;
                /** @description Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
                cursor?: string;
                /** @description The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. */
                limit?: number;
                /** @description Authentication token. Requires scope: `conversations:read` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical paginated success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        members: components["schemas"]["defs_user_id"][];
                        ok: components["schemas"]["defs_ok_true"];
                        response_metadata: {
                            next_cursor: string;
                        };
                    };
                };
            };
            /** @description Typical error response when an invalid cursor is provided */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "channel_not_found" | "invalid_limit" | "invalid_cursor" | "fetch_members_failed" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    conversations_open: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Resume a conversation by supplying an `im` or `mpim`'s ID. Or provide the `users` field instead. */
                    channel?: string;
                    /** @description Boolean, indicates you want the full IM channel definition in the response. */
                    return_im?: boolean;
                    /** @description Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a `channel` when not supplying `users`. */
                    users?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        already_open?: boolean;
                        channel: unknown;
                        no_op?: boolean;
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "user_not_found" | "user_not_visible" | "user_disabled" | "users_list_not_supplied" | "not_enough_users" | "too_many_users" | "invalid_user_combination" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "channel_not_found";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    conversations_rename: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description ID of conversation to rename */
                    channel?: string;
                    /** @description New name for conversation. */
                    name?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["objs_conversation"];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response when the calling user is not a member of the conversation */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "user_is_restricted" | "method_not_supported_for_channel_type" | "missing_scope" | "channel_not_found" | "not_in_channel" | "not_authorized" | "invalid_name" | "name_taken" | "invalid_name_required" | "invalid_name_punctuation" | "invalid_name_maxlength" | "invalid_name_specials" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_replies: {
        parameters: {
            query?: {
                /** @description Conversation ID to fetch thread from. */
                channel?: string;
                /** @description Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
                cursor?: string;
                /** @description Include messages with latest or oldest timestamp in results only when either timestamp is specified. */
                inclusive?: boolean;
                /** @description End of time range of messages to include in results. */
                latest?: number;
                /** @description The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. */
                limit?: number;
                /** @description Start of time range of messages to include in results. */
                oldest?: number;
                /** @description Authentication token. Requires scope: `conversations:history` */
                token?: string;
                /** @description Unique identifier of a thread's parent message. `ts` must be the timestamp of an existing message with 0 or more replies. If there are no replies then just the single message referenced by `ts` will return - it is just an ordinary, unthreaded message. */
                ts?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        has_more?: boolean;
                        messages: unknown[];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "missing_scope" | "channel_not_found" | "thread_not_found" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_setPurpose: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Conversation to set the purpose of */
                    channel?: string;
                    /** @description A new, specialer purpose */
                    purpose?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["objs_conversation"];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "missing_scope" | "channel_not_found" | "not_in_channel" | "is_archived" | "too_long" | "user_is_restricted" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_setTopic: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Conversation to set the topic of */
                    channel?: string;
                    /** @description The new topic string. Does not support formatting or linkification. */
                    topic?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channel: components["schemas"]["objs_conversation"];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "missing_scope" | "channel_not_found" | "not_in_channel" | "is_archived" | "too_long" | "user_is_restricted" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    conversations_unarchive: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `conversations:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description ID of conversation to unarchive */
                    channel?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "missing_scope" | "channel_not_found" | "not_archived" | "not_authed" | "invalid_auth" | "account_inactive" | "user_is_bot" | "user_is_restricted" | "user_is_ultra_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "team_added_to_org" | "missing_charset" | "superfluous_charset";
                        needed?: string;
                        ok: components["schemas"]["defs_ok_false"];
                        provided?: string;
                    };
                };
            };
        };
    };
    dialog_open: {
        parameters: {
            query: {
                /** @description The dialog definition. This must be a JSON-encoded string. */
                dialog: string;
                /** @description Exchange a trigger to post to the user. */
                trigger_id: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `none` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response is quite minimal. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response, before getting to any possible validation errors. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "validation_errors" | "missing_trigger" | "missing_dialog" | "trigger_exchanged" | "trigger_expired" | "invalid_trigger" | "app_missing_action_url" | "cannot_create_dialog" | "failed_sending_dialog" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    dnd_endDnd: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `dnd:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "unknown_error" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    dnd_endSnooze: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `dnd:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        dnd_enabled: boolean;
                        next_dnd_end_ts: number;
                        next_dnd_start_ts: number;
                        ok: components["schemas"]["defs_ok_true"];
                        snooze_enabled: boolean;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "snooze_not_active" | "snooze_end_failed" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    dnd_info: {
        parameters: {
            query?: {
                /** @description Authentication token. Requires scope: `dnd:read` */
                token?: string;
                /** @description User to fetch status for (defaults to current user) */
                user?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        dnd_enabled: boolean;
                        next_dnd_end_ts: number;
                        next_dnd_start_ts: number;
                        ok: components["schemas"]["defs_ok_true"];
                        snooze_enabled?: boolean;
                        snooze_endtime?: number;
                        snooze_remaining?: number;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "user_not_found" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    dnd_setSnooze: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Number of minutes, from now, to snooze until. */
                    num_minutes: string;
                    /** @description Authentication token. Requires scope: `dnd:write` */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        snooze_enabled: boolean;
                        snooze_endtime: number;
                        snooze_remaining: number;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "missing_duration" | "snooze_failed" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "too_long" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    dnd_teamInfo: {
        parameters: {
            query?: {
                /** @description Authentication token. Requires scope: `dnd:read` */
                token?: string;
                /** @description Comma-separated list of users to fetch Do Not Disturb status for */
                users?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    emoji_list: {
        parameters: {
            query: {
                /** @description Authentication token. Requires scope: `emoji:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    files_comments_delete: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `files:write:user` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description File to delete a comment from. */
                    file?: string;
                    /** @description The comment to delete. */
                    id?: string;
                };
            };
        };
        responses: {
            /** @description Standard success response is very simple */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Standard failure response when used with an invalid token */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "cant_delete" | "comment_not_found" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    files_delete: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `files:write:user` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description ID of file to delete. */
                    file?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "file_not_found" | "file_deleted" | "cant_delete_file" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    files_info: {
        parameters: {
            query?: {
                count?: string;
                /** @description Parameter for pagination. File comments are paginated for a single file. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection of comments. See [pagination](/docs/pagination) for more details. */
                cursor?: string;
                /** @description Specify a file by providing its ID. */
                file?: string;
                /** @description The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. */
                limit?: number;
                page?: string;
                /** @description Authentication token. Requires scope: `files:read` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        comments: components["schemas"]["objs_comments"];
                        content_html?: unknown;
                        editor?: components["schemas"]["defs_user_id"];
                        file: components["schemas"]["objs_file"];
                        ok: components["schemas"]["defs_ok_true"];
                        paging?: components["schemas"]["objs_paging"];
                        response_metadata?: components["schemas"]["objs_response_metadata"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "file_not_found" | "file_deleted" | "timezone_count_failed" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    files_list: {
        parameters: {
            query?: {
                /** @description Filter files appearing in a specific channel, indicated by its ID. */
                channel?: string;
                count?: string;
                page?: string;
                /** @description Show truncated file info for files hidden due to being too old, and the team who owns the file being over the file limit. */
                show_files_hidden_by_limit?: boolean;
                /** @description Authentication token. Requires scope: `files:read` */
                token?: string;
                /** @description Filter files created after this timestamp (inclusive). */
                ts_from?: number;
                /** @description Filter files created before this timestamp (inclusive). */
                ts_to?: number;
                /** @description Filter files by type ([see below](#file_types)). You can pass multiple values in the types argument, like `types=spaces,snippets`.The default value is `all`, which does not filter the list. */
                types?: string;
                /** @description Filter files created by a single user. */
                user?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        files: components["schemas"]["objs_file"][];
                        ok: components["schemas"]["defs_ok_true"];
                        paging: components["schemas"]["objs_paging"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "user_not_found" | "unknown_type" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    files_remote_add: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Creator defined GUID for the file. */
                    external_id?: string;
                    /** @description URL of the remote file. */
                    external_url?: string;
                    /** @description type of file */
                    filetype?: string;
                    /** @description A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file. */
                    indexable_file_contents?: string;
                    /** @description Preview of the document via `multipart/form-data`. */
                    preview_image?: string;
                    /** @description Title of the file being shared. */
                    title?: string;
                    /** @description Authentication token. Requires scope: `remote_files:write` */
                    token?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    files_remote_info: {
        parameters: {
            query?: {
                /** @description Creator defined GUID for the file. */
                external_id?: string;
                /** @description Specify a file by providing its ID. */
                file?: string;
                /** @description Authentication token. Requires scope: `remote_files:read` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    files_remote_list: {
        parameters: {
            query?: {
                /** @description Filter files appearing in a specific channel, indicated by its ID. */
                channel?: string;
                /** @description Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
                cursor?: string;
                /** @description The maximum number of items to return. */
                limit?: number;
                /** @description Authentication token. Requires scope: `remote_files:read` */
                token?: string;
                /** @description Filter files created after this timestamp (inclusive). */
                ts_from?: number;
                /** @description Filter files created before this timestamp (inclusive). */
                ts_to?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    files_remote_remove: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Creator defined GUID for the file. */
                    external_id?: string;
                    /** @description Specify a file by providing its ID. */
                    file?: string;
                    /** @description Authentication token. Requires scope: `remote_files:write` */
                    token?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    files_remote_share: {
        parameters: {
            query?: {
                /** @description Comma-separated list of channel IDs where the file will be shared. */
                channels?: string;
                /** @description The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required. */
                external_id?: string;
                /** @description Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required. */
                file?: string;
                /** @description Authentication token. Requires scope: `remote_files:share` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    files_remote_update: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Creator defined GUID for the file. */
                    external_id?: string;
                    /** @description URL of the remote file. */
                    external_url?: string;
                    /** @description Specify a file by providing its ID. */
                    file?: string;
                    /** @description type of file */
                    filetype?: string;
                    /** @description File containing contents that can be used to improve searchability for the remote file. */
                    indexable_file_contents?: string;
                    /** @description Preview of the document via `multipart/form-data`. */
                    preview_image?: string;
                    /** @description Title of the file being shared. */
                    title?: string;
                    /** @description Authentication token. Requires scope: `remote_files:write` */
                    token?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    files_revokePublicURL: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `files:write:user` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description File to revoke */
                    file?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        file: components["schemas"]["objs_file"];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "file_not_found" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "user_is_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    files_sharedPublicURL: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `files:write:user` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description File to share */
                    file?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        file: components["schemas"]["objs_file"];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "file_not_found" | "not_allowed" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "user_is_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    files_upload: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Comma-separated list of channel names or IDs where the file will be shared. */
                    channels?: string;
                    /** @description File contents via a POST variable. If omitting this parameter, you must provide a `file`. */
                    content?: string;
                    /** @description File contents via `multipart/form-data`. If omitting this parameter, you must submit `content`. */
                    file?: string;
                    /** @description Filename of file. */
                    filename?: string;
                    /** @description A [file type](/types/file#file_types) identifier. */
                    filetype?: string;
                    /** @description The message text introducing the file in specified `channels`. */
                    initial_comment?: string;
                    /** @description Provide another message's `ts` value to upload this file as a reply. Never use a reply's `ts` value; use its parent instead. */
                    thread_ts?: number;
                    /** @description Title of file. */
                    title?: string;
                    /** @description Authentication token. Requires scope: `files:write:user` */
                    token?: string;
                };
            };
        };
        responses: {
            /** @description Success response after uploading a file to a channel with an initial message */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        file: components["schemas"]["objs_file"];
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "posting_to_general_channel_denied" | "invalid_channel" | "file_uploads_disabled" | "file_uploads_except_images_disabled" | "storage_limit_reached" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    migration_exchange: {
        parameters: {
            query: {
                /** @description Specify team_id starts with `T` in case of Org Token */
                team_id?: string;
                /** @description Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`. */
                to_old?: boolean;
                /** @description Authentication token. Requires scope: `tokens.basic` */
                token: string;
                /** @description A comma-separated list of user ids, up to 400 per request */
                users: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response when mappings exist for the specified user IDs */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** The enterprise grid organization ID containing the workspace/team. */
                        enterprise_id: string;
                        /** A list of User IDs that cannot be mapped or found */
                        invalid_user_ids?: string[];
                        ok: components["schemas"]["defs_ok_true"];
                        team_id: components["schemas"]["defs_team"];
                        /** A mapping of provided user IDs with mapped user IDs */
                        user_id_map?: {
                            [key: string]: unknown;
                        };
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response when there are no mappings to provide */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_enterprise_team" | "too_many_users" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    oauth_access: {
        parameters: {
            query?: {
                /** @description Issued when you created your application. */
                client_id?: string;
                /** @description Issued when you created your application. */
                client_secret?: string;
                /** @description The `code` param returned via the OAuth callback. */
                code?: string;
                /** @description This must match the originally submitted URI (if one was sent). */
                redirect_uri?: string;
                /** @description Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps). */
                single_channel?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful user token negotiation for a single scope */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    oauth_token: {
        parameters: {
            query?: {
                /** @description Issued when you created your application. */
                client_id?: string;
                /** @description Issued when you created your application. */
                client_secret?: string;
                /** @description The `code` param returned via the OAuth callback. */
                code?: string;
                /** @description This must match the originally submitted URI (if one was sent). */
                redirect_uri?: string;
                /** @description Request the user to add your app only to a single channel. */
                single_channel?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success example using a workspace app produces a very different kind of response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    oauth_v2_access: {
        parameters: {
            query: {
                /** @description Issued when you created your application. */
                client_id?: string;
                /** @description Issued when you created your application. */
                client_secret?: string;
                /** @description The `code` param returned via the OAuth callback. */
                code: string;
                /** @description This must match the originally submitted URI (if one was sent). */
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful token request with scopes for both a bot user and a user token */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    pins_add: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `pins:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Channel to pin the item in. */
                    channel: string;
                    /** @description Timestamp of the message to pin. */
                    timestamp?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "bad_timestamp" | "message_not_found" | "channel_not_found" | "no_item_specified" | "already_pinned" | "permission_denied" | "file_not_shared" | "not_pinnable" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    pins_list: {
        parameters: {
            query: {
                /** @description Channel to get pinned items for. */
                channel: string;
                /** @description Authentication token. Requires scope: `pins:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "channel_not_found" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    pins_remove: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `pins:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Channel where the item is pinned to. */
                    channel: string;
                    /** @description Timestamp of the message to un-pin. */
                    timestamp?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "bad_timestamp" | "file_not_found" | "file_comment_not_found" | "message_not_found" | "no_item_specified" | "not_pinned" | "permission_denied" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_typ" | "missing_post_typ" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeou" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    reactions_add: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `reactions:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Channel where the message to add reaction to was posted. */
                    channel: string;
                    /** @description Reaction (emoji) name. */
                    name: string;
                    /** @description Timestamp of the message to add reaction to. */
                    timestamp: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "bad_timestamp" | "message_not_found" | "no_item_specified" | "invalid_name" | "already_reacted" | "too_many_emoji" | "too_many_reactions" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    reactions_get: {
        parameters: {
            query: {
                /** @description Channel where the message to get reactions for was posted. */
                channel?: string;
                /** @description File to get reactions for. */
                file?: string;
                /** @description File comment to get reactions for. */
                file_comment?: string;
                /** @description If true always return the complete reaction list. */
                full?: boolean;
                /** @description Timestamp of the message to get reactions for. */
                timestamp?: string;
                /** @description Authentication token. Requires scope: `reactions:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "bad_timestamp" | "file_not_found" | "file_comment_not_found" | "message_not_found" | "no_item_specified" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    reactions_list: {
        parameters: {
            query: {
                count?: number;
                /** @description Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details. */
                cursor?: string;
                /** @description If true always return the complete reaction list. */
                full?: boolean;
                /** @description The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. */
                limit?: number;
                page?: number;
                /** @description Authentication token. Requires scope: `reactions:read` */
                token: string;
                /** @description Show reactions made by this user. Defaults to the authed user. */
                user?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: unknown[];
                        ok: components["schemas"]["defs_ok_true"];
                        paging?: components["schemas"]["objs_paging"];
                        response_metadata?: components["schemas"]["objs_response_metadata"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "user_not_found" | "not_authed" | "invalid_auth" | "account_inactiv" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    reactions_remove: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `reactions:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Channel where the message to remove reaction from was posted. */
                    channel?: string;
                    /** @description File to remove reaction from. */
                    file?: string;
                    /** @description File comment to remove reaction from. */
                    file_comment?: string;
                    /** @description Reaction (emoji) name. */
                    name: string;
                    /** @description Timestamp of the message to remove reaction from. */
                    timestamp?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "bad_timestamp" | "file_not_found" | "file_comment_not_found" | "message_not_found" | "no_item_specified" | "invalid_name" | "no_reaction" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    reminders_add: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `reminders:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The content of the reminder */
                    text: string;
                    /** @description When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday") */
                    time: string;
                    /** @description The user who will receive the reminder. If no user is specified, the reminder will go to user who created it. */
                    user?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        reminder: components["schemas"]["objs_reminder"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "cannot_parse" | "user_not_found" | "cannot_add_bot" | "cannot_add_slackbot" | "cannot_add_others" | "cannot_add_others_recurring" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    reminders_complete: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `reminders:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The ID of the reminder to be marked as complete */
                    reminder?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_found" | "cannot_complete_recurring" | "cannot_complete_others" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    reminders_delete: {
        parameters: {
            query?: never;
            header?: {
                /** @description Authentication token. Requires scope: `reminders:write` */
                token?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description The ID of the reminder */
                    reminder?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_found" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    reminders_info: {
        parameters: {
            query?: {
                /** @description The ID of the reminder */
                reminder?: string;
                /** @description Authentication token. Requires scope: `reminders:read` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        reminder: components["schemas"]["objs_reminder"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_found" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    reminders_list: {
        parameters: {
            query?: {
                /** @description Authentication token. Requires scope: `reminders:read` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        reminders: components["schemas"]["objs_reminder"][];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    rtm_connect: {
        parameters: {
            query: {
                /** @description Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events. See [batch presence](/docs/presence-and-status#batching). */
                batch_presence_aware?: boolean;
                /** @description Only deliver presence events when requested by subscription. See [presence subscriptions](/docs/presence-and-status#subscriptions). */
                presence_sub?: boolean;
                /** @description Authentication token. Requires scope: `rtm:stream` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        self: {
                            id: components["schemas"]["defs_user_id"];
                            name: string;
                        };
                        team: {
                            domain: string;
                            id: components["schemas"]["defs_team"];
                            name: string;
                        };
                        /** Format: uri */
                        url: string;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    search_messages: {
        parameters: {
            query: {
                /** @description Pass the number of results you want per "page". Maximum of `100`. */
                count?: number;
                /** @description Pass a value of `true` to enable query highlight markers (see below). */
                highlight?: boolean;
                page?: number;
                /** @description Search query. */
                query: string;
                /** @description Return matches sorted by either `score` or `timestamp`. */
                sort?: string;
                /** @description Change sort direction to ascending (`asc`) or descending (`desc`). */
                sort_dir?: string;
                /** @description Authentication token. Requires scope: `search:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    stars_add: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `stars:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Channel to add star to, or channel where the message to add star to was posted (used with `timestamp`). */
                    channel?: string;
                    /** @description File to add star to. */
                    file?: string;
                    /** @description File comment to add star to. */
                    file_comment?: string;
                    /** @description Timestamp of the message to add star to. */
                    timestamp?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "bad_timestamp" | "message_not_found" | "file_not_found" | "file_comment_not_found" | "channel_not_found" | "no_item_specified" | "already_starred" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    stars_list: {
        parameters: {
            query?: {
                count?: string;
                /** @description Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details. */
                cursor?: string;
                /** @description The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. */
                limit?: number;
                page?: string;
                /** @description Authentication token. Requires scope: `stars:read` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: unknown[];
                        ok: components["schemas"]["defs_ok_true"];
                        paging?: components["schemas"]["objs_paging"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    stars_remove: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `stars:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Channel to remove star from, or channel where the message to remove star from was posted (used with `timestamp`). */
                    channel?: string;
                    /** @description File to remove star from. */
                    file?: string;
                    /** @description File comment to remove star from. */
                    file_comment?: string;
                    /** @description Timestamp of the message to remove star from. */
                    timestamp?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "bad_timestamp" | "message_not_found" | "file_not_found" | "file_comment_not_found" | "channel_not_found" | "no_item_specified" | "not_starred" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    team_accessLogs: {
        parameters: {
            query: {
                /** @description End of time range of logs to include in results (inclusive). */
                before?: string;
                count?: string;
                page?: string;
                /** @description Authentication token. Requires scope: `admin` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description This response demonstrates pagination and two access log entries. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        logins: {
                            count: number;
                            country: string | null;
                            date_first: number;
                            date_last: number;
                            ip: string | null;
                            isp: string | null;
                            region: string | null;
                            user_agent: string;
                            user_id: components["schemas"]["defs_user_id"];
                            username: string;
                        }[];
                        ok: components["schemas"]["defs_ok_true"];
                        paging: components["schemas"]["objs_paging"];
                    };
                };
            };
            /** @description A workspace must be on a paid plan to use this method, otherwise the `paid_only` error is thrown: */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "paid_only" | "over_pagination_limit" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    team_billableInfo: {
        parameters: {
            query: {
                /** @description Authentication token. Requires scope: `admin` */
                token: string;
                /** @description A user to retrieve the billable information for. Defaults to all users. */
                user?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    team_info: {
        parameters: {
            query: {
                /** @description Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels */
                team?: string;
                /** @description Authentication token. Requires scope: `team:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        team: components["schemas"]["objs_team"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    team_integrationLogs: {
        parameters: {
            query: {
                /** @description Filter logs to this Slack app. Defaults to all logs. */
                app_id?: string;
                /** @description Filter logs with this change type. Defaults to all logs. */
                change_type?: string;
                count?: string;
                page?: string;
                /** @description Filter logs to this service. Defaults to all logs. */
                service_id?: string;
                /** @description Authentication token. Requires scope: `admin` */
                token: string;
                /** @description Filter logs generated by this user’s actions. Defaults to all logs. */
                user?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        logs: {
                            admin_app_id?: components["schemas"]["defs_app_id"];
                            app_id: components["schemas"]["defs_app_id"];
                            app_type: string;
                            change_type: string;
                            channel?: components["schemas"]["defs_channel"];
                            date: string;
                            scope: string;
                            service_id?: string;
                            service_type?: string;
                            user_id: components["schemas"]["defs_user_id"];
                            user_name: string;
                        }[];
                        ok: components["schemas"]["defs_ok_true"];
                        paging: components["schemas"]["objs_paging"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    team_profile_get: {
        parameters: {
            query: {
                /** @description Authentication token. Requires scope: `users.profile:read` */
                token: string;
                /** @description Filter by visibility. */
                visibility?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        profile: {
                            fields: components["schemas"]["objs_team_profile_field"][];
                        };
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_typ" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeou" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    usergroups_create: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `usergroups:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A comma separated string of encoded channel IDs for which the User Group uses as a default. */
                    channels?: string;
                    /** @description A short description of the User Group. */
                    description?: string;
                    /** @description A mention handle. Must be unique among channels, users and User Groups. */
                    handle?: string;
                    /** @description Include the number of users in each User Group. */
                    include_count?: boolean;
                    /** @description A name for the User Group. Must be unique among User Groups. */
                    name: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        usergroup: components["schemas"]["objs_subteam"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "permission_denied" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "user_is_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    usergroups_disable: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `usergroups:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Include the number of users in the User Group. */
                    include_count?: boolean;
                    /** @description The encoded ID of the User Group to disable. */
                    usergroup: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        usergroup: components["schemas"]["objs_subteam"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "permission_denied" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "user_is_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    usergroups_enable: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `usergroups:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Include the number of users in the User Group. */
                    include_count?: boolean;
                    /** @description The encoded ID of the User Group to enable. */
                    usergroup: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        usergroup: components["schemas"]["objs_subteam"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "user_is_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_require" | "fatal_error" | "missing_charset" | "superfluous_charset";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    usergroups_list: {
        parameters: {
            query: {
                /** @description Include the number of users in each User Group. */
                include_count?: boolean;
                /** @description Include disabled User Groups. */
                include_disabled?: boolean;
                /** @description Include the list of users for each User Group. */
                include_users?: boolean;
                /** @description Authentication token. Requires scope: `usergroups:read` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        usergroups: components["schemas"]["objs_subteam"][];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "user_is_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_require" | "fatal_error" | "missing_charset" | "superfluous_charset";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    usergroups_update: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `usergroups:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description A comma separated string of encoded channel IDs for which the User Group uses as a default. */
                    channels?: string;
                    /** @description A short description of the User Group. */
                    description?: string;
                    /** @description A mention handle. Must be unique among channels, users and User Groups. */
                    handle?: string;
                    /** @description Include the number of users in the User Group. */
                    include_count?: boolean;
                    /** @description A name for the User Group. Must be unique among User Groups. */
                    name?: string;
                    /** @description The encoded ID of the User Group to update. */
                    usergroup: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        usergroup: components["schemas"]["objs_subteam"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "permission_denied" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "user_is_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_require" | "fatal_error" | "missing_charset" | "superfluous_charset";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    usergroups_users_list: {
        parameters: {
            query: {
                /** @description Allow results that involve disabled User Groups. */
                include_disabled?: boolean;
                /** @description Authentication token. Requires scope: `usergroups:read` */
                token: string;
                /** @description The encoded ID of the User Group to update. */
                usergroup: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Standard success response when used with a user token */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        users: components["schemas"]["defs_user_id"][];
                    };
                };
            };
            /** @description Standard failure response when used with an invalid token */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "user_is_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_require" | "fatal_error" | "missing_charset" | "superfluous_charset";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    usergroups_users_update: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `usergroups:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Include the number of users in the User Group. */
                    include_count?: boolean;
                    /** @description The encoded ID of the User Group to update. */
                    usergroup: string;
                    /** @description A comma separated string of encoded user IDs that represent the entire list of users for the User Group. */
                    users: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        usergroup: components["schemas"]["objs_subteam"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "permission_denied" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "user_is_restricted" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_require" | "fatal_error" | "missing_charset" | "superfluous_charset";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    users_conversations: {
        parameters: {
            query?: {
                /** @description Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
                cursor?: string;
                /** @description Set to `true` to exclude archived channels from the list */
                exclude_archived?: boolean;
                /** @description The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000. */
                limit?: number;
                /** @description Authentication token. Requires scope: `conversations:read` */
                token?: string;
                /** @description Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im` */
                types?: string;
                /** @description Browse conversations by a specific user ID's membership. Non-public channels are restricted to those where the calling user shares membership. */
                user?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response with only public channels. Note how `num_members` and `is_member` are not returned like typical `conversations` objects. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        channels: components["schemas"]["objs_conversation"][];
                        ok: components["schemas"]["defs_ok_true"];
                        response_metadata?: {
                            next_cursor: string;
                        };
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "method_not_supported_for_channel_type" | "missing_scope" | "invalid_types" | "invalid_cursor" | "invalid_limit" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    users_deletePhoto: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Authentication token. Requires scope: `users.profile:write` */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    users_getPresence: {
        parameters: {
            query: {
                /** @description Authentication token. Requires scope: `users:read` */
                token: string;
                /** @description User to get presence info on. Defaults to the authed user. */
                user?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description When requesting information for a different user, this method just returns the current presence (either `active` or `away`). */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        auto_away?: boolean;
                        connection_count?: number;
                        last_activity?: number;
                        manual_away?: boolean;
                        ok: components["schemas"]["defs_ok_true"];
                        online?: boolean;
                        presence: string;
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error: string;
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: Record<string, never>;
                    };
                };
            };
        };
    };
    users_identity: {
        parameters: {
            query?: {
                /** @description Authentication token. Requires scope: `identity.basic` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description You will receive at a minimum the following information: */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    users_info: {
        parameters: {
            query: {
                /** @description Set this to `true` to receive the locale for this user. Defaults to `false` */
                include_locale?: boolean;
                /** @description Authentication token. Requires scope: `users:read` */
                token: string;
                /** @description User to get info on */
                user?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        user: components["schemas"]["objs_user"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        callstack?: string;
                        /** @enum {string} */
                        error: "user_not_found" | "user_not_visible" | "not_authed" | "invalid_auth" | "account_inactive" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    users_list: {
        parameters: {
            query?: {
                /** @description Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
                cursor?: string;
                /** @description Set this to `true` to receive the locale for users. Defaults to `false` */
                include_locale?: boolean;
                /** @description The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. Providing no `limit` value will result in Slack attempting to deliver you the entire result set. If the collection is too large you may experience `limit_required` or HTTP 500 errors. */
                limit?: number;
                /** @description Authentication token. Requires scope: `users:read` */
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        cache_ts: number;
                        members: components["schemas"]["objs_user"][];
                        ok: components["schemas"]["defs_ok_true"];
                        response_metadata?: components["schemas"]["objs_response_metadata"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "limit_required" | "invalid_cursor" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    users_lookupByEmail: {
        parameters: {
            query: {
                /** @description An email address belonging to a user in the workspace */
                email: string;
                /** @description Authentication token. Requires scope: `users:read.email` */
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        user: components["schemas"]["objs_user"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "users_not_found" | "enterprise_is_restricted" | "not_authed" | "invalid_auth" | "account_inactive" | "no_permission" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    users_profile_get: {
        parameters: {
            query: {
                /** @description Include labels for each ID in custom profile fields */
                include_labels?: boolean;
                /** @description Authentication token. Requires scope: `users.profile:read` */
                token: string;
                /** @description User to retrieve profile info for */
                user?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        profile: components["schemas"]["objs_user_profile"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "user_not_found" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    users_profile_set: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `users.profile:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Name of a single key to set. Usable only if `profile` is not passed. */
                    name?: string;
                    /** @description Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters. */
                    profile?: string;
                    /** @description ID of user to change. This argument may only be specified by team admins on paid teams. */
                    user?: string;
                    /** @description Value to set a single key to. Usable only if `profile` is not passed. */
                    value?: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: email */
                        email_pending?: string;
                        ok: components["schemas"]["defs_ok_true"];
                        profile: components["schemas"]["objs_user_profile"];
                        username: string;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "reserved_name" | "invalid_profile" | "profile_set_failed" | "not_admin" | "not_app_admin" | "cannot_update_admin_user" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    users_setActive: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `users:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "ekm_access_denied" | "missing_scope" | "invalid_arguments" | "invalid_arg_name" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "request_timeout" | "fatal_error" | "internal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    users_setPhoto: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Width/height of crop box (always square) */
                    crop_w?: string;
                    /** @description X coordinate of top-left corner of crop box */
                    crop_x?: string;
                    /** @description Y coordinate of top-left corner of crop box */
                    crop_y?: string;
                    /** @description File contents via `multipart/form-data`. */
                    image?: string;
                    /** @description Authentication token. Requires scope: `users.profile:write` */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                        profile: {
                            avatar_hash: string;
                            /** Format: uri */
                            image_24: string;
                            /** Format: uri */
                            image_32: string;
                            /** Format: uri */
                            image_48: string;
                            /** Format: uri */
                            image_72: string;
                            /** Format: uri */
                            image_192: string;
                            /** Format: uri */
                            image_512: string;
                            /** Format: uri */
                            image_1024: string;
                            /** Format: uri */
                            image_original: string;
                        };
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @description possibly DEV/QA only */
                        debug_step?: string;
                        /** @description possibly DEV/QA only */
                        dims?: string;
                        /** @enum {string} */
                        error: "bad_image" | "too_large" | "too_many_frames" | "not_found" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "user_is_bot" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                        /** @description possibly DEV/QA only */
                        time_ident?: number;
                    };
                };
            };
        };
    };
    users_setPresence: {
        parameters: {
            query?: never;
            header: {
                /** @description Authentication token. Requires scope: `users:write` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": {
                    /** @description Either `auto` or `away` */
                    presence: string;
                };
            };
        };
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Note: PHP callstack is only visible in dev/qa */
                        callstack?: string;
                        /** @enum {string} */
                        error: "invalid_presence" | "not_authed" | "invalid_auth" | "account_inactive" | "token_revoked" | "no_permission" | "org_login_required" | "invalid_arg_name" | "invalid_array_arg" | "invalid_charset" | "invalid_form_data" | "invalid_post_type" | "missing_post_type" | "team_added_to_org" | "invalid_json" | "json_not_object" | "request_timeout" | "upgrade_required" | "fatal_error";
                        ok: components["schemas"]["defs_ok_false"];
                    };
                };
            };
        };
    };
    views_open: {
        parameters: {
            query: {
                /** @description Exchange a trigger to post to the user. */
                trigger_id: string;
                /** @description A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. */
                view: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `none` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response includes the opened view payload. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response, before getting to any possible validation errors. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    views_publish: {
        parameters: {
            query: {
                /** @description A string that represents view state to protect against possible race conditions. */
                hash?: string;
                /** @description `id` of the user you want publish a view to. */
                user_id: string;
                /** @description A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. */
                view: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `none` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response includes the published view payload. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response, before getting to any possible validation errors. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    views_push: {
        parameters: {
            query: {
                /** @description Exchange a trigger to post to the user. */
                trigger_id: string;
                /** @description A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. */
                view: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `none` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response includes the pushed view payload. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    views_update: {
        parameters: {
            query?: {
                /** @description A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either `view_id` or `external_id` is required. */
                external_id?: string;
                /** @description A string that represents view state to protect against possible race conditions. */
                hash?: string;
                /** @description A [view object](/reference/surfaces/views). This must be a JSON-encoded string. */
                view?: string;
                /** @description A unique identifier of the view to be updated. Either `view_id` or `external_id` is required. */
                view_id?: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `none` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response includes the updated view payload. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    workflows_stepCompleted: {
        parameters: {
            query: {
                /** @description Key-value object of outputs from your step. Keys of this object reflect the configured `key` properties of your [`outputs`](/reference/workflows/workflow_step#output) array from your `workflow_step` object. */
                outputs?: string;
                /** @description Context identifier that maps to the correct workflow step execution. */
                workflow_step_execute_id: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `workflow.steps:execute` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    workflows_stepFailed: {
        parameters: {
            query: {
                /** @description A JSON-based object with a `message` property that should contain a human readable error message. */
                error: string;
                /** @description Context identifier that maps to the correct workflow step execution. */
                workflow_step_execute_id: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `workflow.steps:execute` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    workflows_updateStep: {
        parameters: {
            query: {
                /** @description A JSON key-value map of inputs required from a user during configuration. This is the data your app expects to receive when the workflow step starts. **Please note**: the embedded variable format is set and replaced by the workflow system. You cannot create custom variables that will be replaced at runtime. [Read more about variables in workflow steps here](/workflows/steps#variables). */
                inputs?: string;
                /** @description An JSON array of output objects used during step execution. This is the data your app agrees to provide when your workflow step was executed. */
                outputs?: string;
                /** @description An optional field that can be used to override app image that is shown in the Workflow Builder. */
                step_image_url?: string;
                /** @description An optional field that can be used to override the step name that is shown in the Workflow Builder. */
                step_name?: string;
                /** @description A context identifier provided with `view_submission` payloads used to call back to `workflows.updateStep`. */
                workflow_step_edit_id: string;
            };
            header: {
                /** @description Authentication token. Requires scope: `workflow.steps:execute` */
                token: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Typical success response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_true"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Typical error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ok: components["schemas"]["defs_ok_false"];
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
}
