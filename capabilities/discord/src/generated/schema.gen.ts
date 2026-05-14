export type paths = {
    "/applications/{application_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_application"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_application"];
        trace?: never;
    };
    "/applications/{application_id}/activity-instances/{instance_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                instance_id: string;
            };
            cookie?: never;
        };
        get: operations["applications_get_activity_instance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/attachment": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["upload_application_attachment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/commands": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_application_commands"];
        put: operations["bulk_set_application_commands"];
        post: operations["create_application_command"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/commands/{command_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_application_command"];
        put?: never;
        post?: never;
        delete: operations["delete_application_command"];
        options?: never;
        head?: never;
        patch: operations["update_application_command"];
        trace?: never;
    };
    "/applications/{application_id}/emojis": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_application_emojis"];
        put?: never;
        post: operations["create_application_emoji"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/emojis/{emoji_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_application_emoji"];
        put?: never;
        post?: never;
        delete: operations["delete_application_emoji"];
        options?: never;
        head?: never;
        patch: operations["update_application_emoji"];
        trace?: never;
    };
    "/applications/{application_id}/entitlements": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_entitlements"];
        put?: never;
        post: operations["create_entitlement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/entitlements/{entitlement_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                entitlement_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_entitlement"];
        put?: never;
        post?: never;
        delete: operations["delete_entitlement"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/entitlements/{entitlement_id}/consume": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                entitlement_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["consume_entitlement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/guilds/{guild_id}/commands": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_application_commands"];
        put: operations["bulk_set_guild_application_commands"];
        post: operations["create_guild_application_command"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_application_command"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_application_command"];
        options?: never;
        head?: never;
        patch: operations["update_guild_application_command"];
        trace?: never;
    };
    "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_application_command_permissions"];
        put: operations["set_guild_application_command_permissions"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/guilds/{guild_id}/commands/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_application_command_permissions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/{application_id}/role-connections/metadata": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_application_role_connections_metadata"];
        put: operations["update_application_role_connections_metadata"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/applications/@me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_my_application"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_my_application"];
        trace?: never;
    };
    "/channels/{channel_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_channel"];
        put?: never;
        post?: never;
        delete: operations["delete_channel"];
        options?: never;
        head?: never;
        patch: operations["update_channel"];
        trace?: never;
    };
    "/channels/{channel_id}/followers": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["follow_channel"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/invites": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_channel_invites"];
        put?: never;
        post: operations["create_channel_invite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_messages"];
        put?: never;
        post: operations["create_message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_message"];
        put?: never;
        post?: never;
        delete: operations["delete_message"];
        options?: never;
        head?: never;
        patch: operations["update_message"];
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/crosspost": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["crosspost_message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/reactions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["delete_all_message_reactions"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_message_reactions_by_emoji"];
        put?: never;
        post?: never;
        delete: operations["delete_all_message_reactions_by_emoji"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
                message_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["delete_user_message_reaction"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["add_my_message_reaction"];
        post?: never;
        delete: operations["delete_my_message_reaction"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/{message_id}/threads": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_thread_from_message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/bulk-delete": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["bulk_delete_messages"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/pins": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_pins"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/messages/pins/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["create_pin"];
        post?: never;
        delete: operations["delete_pin"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/permissions/{overwrite_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                overwrite_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["set_channel_permission_overwrite"];
        post?: never;
        delete: operations["delete_channel_permission_overwrite"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/pins": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["deprecated_list_pins"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/pins/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["deprecated_create_pin"];
        post?: never;
        delete: operations["deprecated_delete_pin"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/polls/{message_id}/answers/{answer_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                answer_id: number;
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_answer_voters"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/polls/{message_id}/expire": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["poll_expire"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/recipients/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["add_group_dm_user"];
        post?: never;
        delete: operations["delete_group_dm_user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/send-soundboard-sound": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["send_soundboard_sound"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/thread-members": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_thread_members"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/thread-members/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_thread_member"];
        put: operations["add_thread_member"];
        post?: never;
        delete: operations["delete_thread_member"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/thread-members/@me": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["join_thread"];
        post?: never;
        delete: operations["leave_thread"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/threads": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_thread"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/threads/archived/private": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_private_archived_threads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/threads/archived/public": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_public_archived_threads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/threads/search": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["thread_search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/typing": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["trigger_typing_indicator"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/users/@me/threads/archived/private": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_my_private_archived_threads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/voice-status": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        /** @description Set a voice channel's status. */
        put: operations["update_voice_channel_status"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/channels/{channel_id}/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_channel_webhooks"];
        put?: never;
        post: operations["create_webhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/gateway": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_gateway"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/gateway/bot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_bot_gateway"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_guild"];
        trace?: never;
    };
    "/guilds/{guild_id}/audit-logs": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_audit_log_entries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/auto-moderation/rules": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_auto_moderation_rules"];
        put?: never;
        post: operations["create_auto_moderation_rule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/auto-moderation/rules/{rule_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                rule_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_auto_moderation_rule"];
        put?: never;
        post?: never;
        delete: operations["delete_auto_moderation_rule"];
        options?: never;
        head?: never;
        patch: operations["update_auto_moderation_rule"];
        trace?: never;
    };
    "/guilds/{guild_id}/bans": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_bans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/bans/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_ban"];
        put: operations["ban_user_from_guild"];
        post?: never;
        delete: operations["unban_user_from_guild"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/bulk-ban": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["bulk_ban_users_from_guild"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/channels": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_channels"];
        put?: never;
        post: operations["create_guild_channel"];
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["bulk_update_guild_channels"];
        trace?: never;
    };
    "/guilds/{guild_id}/emojis": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_emojis"];
        put?: never;
        post: operations["create_guild_emoji"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/emojis/{emoji_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                emoji_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_emoji"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_emoji"];
        options?: never;
        head?: never;
        patch: operations["update_guild_emoji"];
        trace?: never;
    };
    "/guilds/{guild_id}/integrations": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_integrations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/integrations/{integration_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                integration_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["delete_guild_integration"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/invites": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_invites"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/members": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_members"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/members/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_member"];
        put: operations["add_guild_member"];
        post?: never;
        delete: operations["delete_guild_member"];
        options?: never;
        head?: never;
        patch: operations["update_guild_member"];
        trace?: never;
    };
    "/guilds/{guild_id}/members/{user_id}/roles/{role_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["add_guild_member_role"];
        post?: never;
        delete: operations["delete_guild_member_role"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/members/@me": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_my_guild_member"];
        trace?: never;
    };
    "/guilds/{guild_id}/members/search": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["search_guild_members"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/messages/search": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["guild_search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/new-member-welcome": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_new_member_welcome"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/onboarding": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guilds_onboarding"];
        put: operations["put_guilds_onboarding"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/preview": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_preview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/prune": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["preview_prune_guild"];
        put?: never;
        post: operations["prune_guild"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/regions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_voice_regions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/requests": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        /** @description List join requests for guild, optionally filtered by application status */
        get: operations["get_guild_join_requests"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/requests/{request_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                request_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** @description Approve or reject guild join request */
        patch: operations["action_guild_join_request"];
        trace?: never;
    };
    "/guilds/{guild_id}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_roles"];
        put?: never;
        post: operations["create_guild_role"];
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["bulk_update_guild_roles"];
        trace?: never;
    };
    "/guilds/{guild_id}/roles/{role_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_role"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_role"];
        options?: never;
        head?: never;
        patch: operations["update_guild_role"];
        trace?: never;
    };
    "/guilds/{guild_id}/roles/member-counts": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["guild_role_member_counts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/scheduled-events": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_scheduled_events"];
        put?: never;
        post: operations["create_guild_scheduled_event"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_scheduled_event"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_scheduled_event"];
        options?: never;
        head?: never;
        patch: operations["update_guild_scheduled_event"];
        trace?: never;
    };
    "/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_scheduled_event_users"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/soundboard-sounds": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_soundboard_sounds"];
        put?: never;
        post: operations["create_guild_soundboard_sound"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/soundboard-sounds/{sound_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sound_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_soundboard_sound"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_soundboard_sound"];
        options?: never;
        head?: never;
        patch: operations["update_guild_soundboard_sound"];
        trace?: never;
    };
    "/guilds/{guild_id}/stickers": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_stickers"];
        put?: never;
        post: operations["create_guild_sticker"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/stickers/{sticker_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_sticker"];
        put?: never;
        post?: never;
        delete: operations["delete_guild_sticker"];
        options?: never;
        head?: never;
        patch: operations["update_guild_sticker"];
        trace?: never;
    };
    "/guilds/{guild_id}/templates": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["list_guild_templates"];
        put?: never;
        post: operations["create_guild_template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/templates/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["sync_guild_template"];
        post?: never;
        delete: operations["delete_guild_template"];
        options?: never;
        head?: never;
        patch: operations["update_guild_template"];
        trace?: never;
    };
    "/guilds/{guild_id}/threads/active": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_active_guild_threads"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/vanity-url": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_vanity_url"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/voice-states/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_voice_state"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_voice_state"];
        trace?: never;
    };
    "/guilds/{guild_id}/voice-states/@me": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_self_voice_state"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_self_voice_state"];
        trace?: never;
    };
    "/guilds/{guild_id}/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_webhooks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/welcome-screen": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_welcome_screen"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_guild_welcome_screen"];
        trace?: never;
    };
    "/guilds/{guild_id}/widget": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_widget_settings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_guild_widget_settings"];
        trace?: never;
    };
    "/guilds/{guild_id}/widget.json": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_widget"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/{guild_id}/widget.png": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_guild_widget_png"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/guilds/templates/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        get: operations["get_guild_template"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/interactions/{interaction_id}/{interaction_token}/callback": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                interaction_id: components["schemas"]["SnowflakeType"];
                interaction_token: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_interaction_response"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/invites/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        get: operations["invite_resolve"];
        put?: never;
        post?: never;
        delete: operations["invite_revoke"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/invites/{code}/target-users": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        /** @description Get the target users for an invite. */
        get: operations["get_invite_target_users"];
        /** @description Update the target users for an existing invite. */
        put: operations["update_invite_target_users"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/invites/{code}/target-users/job-status": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        /** @description Get the target users job status for an invite. */
        get: operations["get_invite_target_users_job_status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["create_or_join_lobby"];
        post: operations["create_lobby"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_lobby"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["edit_lobby"];
        trace?: never;
    };
    "/lobbies/{lobby_id}/channel-linking": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["edit_lobby_channel_link"];
        trace?: never;
    };
    "/lobbies/{lobby_id}/members/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put: operations["add_lobby_member"];
        post?: never;
        delete: operations["delete_lobby_member"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}/members/{user_id}/invites": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_linked_lobby_guild_invite_for_user"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}/members/@me": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["leave_lobby"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}/members/@me/invites": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_linked_lobby_guild_invite_for_self"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}/members/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["bulk_update_lobby_members"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_lobby_messages"];
        put?: never;
        post: operations["create_lobby_message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/lobbies/{lobby_id}/messages/{message_id}/moderation-metadata": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        /** @description Update the external moderation metadata for a lobby message. */
        put: operations["update_lobby_message_external_moderation_metadata"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth2/@me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_my_oauth2_authorization"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth2/applications/@me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_my_oauth2_application"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth2/keys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_public_keys"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth2/userinfo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_openid_connect_userinfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                message_id: components["schemas"]["SnowflakeType"];
                user_id_1: components["schemas"]["SnowflakeType"];
                user_id_2: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        /** @description Update the external moderation metadata for a user message (DM). */
        put: operations["update_user_message_external_moderation_metadata"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/partner-sdk/provisional-accounts/unmerge": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["partner_sdk_unmerge_provisional_account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/partner-sdk/provisional-accounts/unmerge/bot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["bot_partner_sdk_unmerge_provisional_account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/partner-sdk/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["partner_sdk_token"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/partner-sdk/token/bot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["bot_partner_sdk_token"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/soundboard-default-sounds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_soundboard_default_sounds"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stage-instances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_stage_instance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stage-instances/{channel_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_stage_instance"];
        put?: never;
        post?: never;
        delete: operations["delete_stage_instance"];
        options?: never;
        head?: never;
        patch: operations["update_stage_instance"];
        trace?: never;
    };
    "/sticker-packs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["list_sticker_packs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sticker-packs/{pack_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                pack_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_sticker_pack"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stickers/{sticker_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_sticker"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_user"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["get_my_user"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["update_my_user"];
        trace?: never;
    };
    "/users/@me/applications/{application_id}/entitlements": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_current_user_application_entitlements"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me/applications/{application_id}/role-connection": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_application_user_role_connection"];
        put: operations["update_application_user_role_connection"];
        post?: never;
        delete: operations["delete_application_user_role_connection"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["create_dm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me/connections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["list_my_connections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me/guilds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["list_my_guilds"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me/guilds/{guild_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["leave_guild"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/@me/guilds/{guild_id}/member": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_my_guild_member"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/voice/regions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["list_voice_regions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/{webhook_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        get: operations["get_webhook"];
        put?: never;
        post?: never;
        delete: operations["delete_webhook"];
        options?: never;
        head?: never;
        patch: operations["update_webhook"];
        trace?: never;
    };
    "/webhooks/{webhook_id}/{webhook_token}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        get: operations["get_webhook_by_token"];
        put?: never;
        post: operations["execute_webhook"];
        delete: operations["delete_webhook_by_token"];
        options?: never;
        head?: never;
        patch: operations["update_webhook_by_token"];
        trace?: never;
    };
    "/webhooks/{webhook_id}/{webhook_token}/github": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["execute_github_compatible_webhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                message_id: components["schemas"]["SnowflakeType"];
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        get: operations["get_webhook_message"];
        put?: never;
        post?: never;
        delete: operations["delete_webhook_message"];
        options?: never;
        head?: never;
        patch: operations["update_webhook_message"];
        trace?: never;
    };
    "/webhooks/{webhook_id}/{webhook_token}/messages/@original": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        get: operations["get_original_webhook_message"];
        put?: never;
        post?: never;
        delete: operations["delete_original_webhook_message"];
        options?: never;
        head?: never;
        patch: operations["update_original_webhook_message"];
        trace?: never;
    };
    "/webhooks/{webhook_id}/{webhook_token}/slack": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["execute_slack_compatible_webhook"];
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
        AccountResponse: {
            id: string;
            name: string | null;
        };
        ActionRowComponentForMessageRequest: {
            components: (components["schemas"]["ButtonComponentForMessageRequest"] | components["schemas"]["ChannelSelectComponentForMessageRequest"] | components["schemas"]["MentionableSelectComponentForMessageRequest"] | components["schemas"]["RoleSelectComponentForMessageRequest"] | components["schemas"]["StringSelectComponentForMessageRequest"] | components["schemas"]["UserSelectComponentForMessageRequest"])[];
            /** Format: int32 */
            id?: number | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        ActionRowComponentForModalRequest: {
            components: components["schemas"]["TextInputComponentForModalRequest"][];
            /** Format: int32 */
            id?: number | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        ActionRowComponentResponse: {
            components: (components["schemas"]["ButtonComponentResponse"] | components["schemas"]["ChannelSelectComponentResponse"] | components["schemas"]["MentionableSelectComponentResponse"] | components["schemas"]["RoleSelectComponentResponse"] | components["schemas"]["StringSelectComponentResponse"] | components["schemas"]["TextInputComponentResponse"] | components["schemas"]["UserSelectComponentResponse"])[];
            /** Format: int32 */
            id: number;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        ActionTypes: string & ("TYPING_START" | "INVITE_CREATE" | "INVITE_DELETE" | "WEBHOOKS_UPDATE" | "CHANNEL_CREATE" | "VOICE_CHANNEL_STATUS_UPDATE" | "CHANNEL_UPDATE" | "CHANNEL_DELETE" | "CHANNEL_PINS_UPDATE" | "THREAD_CREATE" | "THREAD_UPDATE" | "THREAD_DELETE" | "THREAD_LIST_SYNC" | "THREAD_MEMBER_UPDATE" | "THREAD_MEMBERS_UPDATE" | "GUILD_CREATE" | "GUILD_UPDATE" | "GUILD_DELETE" | "GUILD_EMOJIS_UPDATE" | "GUILD_STICKERS_UPDATE" | "GUILD_INTEGRATIONS_UPDATE" | "GUILD_MEMBER_ADD" | "GUILD_MEMBER_UPDATE" | "GUILD_MEMBER_REMOVE" | "GUILD_BAN_ADD" | "GUILD_BAN_REMOVE" | "GUILD_ROLE_CREATE" | "GUILD_ROLE_UPDATE" | "GUILD_ROLE_DELETE" | "GUILD_MEMBERS_CHUNK" | "MESSAGE_CREATE" | "MESSAGE_UPDATE" | "MESSAGE_DELETE" | "MESSAGE_DELETE_BULK" | "MESSAGE_REACTION_ADD" | "MESSAGE_REACTION_REMOVE" | "MESSAGE_REACTION_REMOVE_ALL" | "MESSAGE_REACTION_REMOVE_EMOJI" | "USER_UPDATE" | "ENTITLEMENT_CREATE" | "ENTITLEMENT_UPDATE" | "ENTITLEMENT_DELETE" | "READY" | "RESUMED" | "PRESENCE_UPDATE" | "VOICE_STATE_UPDATE" | "VOICE_SERVER_UPDATE" | "LOBBY_MESSAGE_CREATE" | "LOBBY_MESSAGE_UPDATE" | "LOBBY_MESSAGE_DELETE" | "GAME_DIRECT_MESSAGE_CREATE" | "GAME_DIRECT_MESSAGE_DELETE" | "GAME_DIRECT_MESSAGE_UPDATE" | "INTERACTION_CREATE" | "INTEGRATION_CREATE" | "INTEGRATION_UPDATE" | "INTEGRATION_DELETE" | "APPLICATION_COMMAND_PERMISSIONS_UPDATE" | "APPLICATION_AUTHORIZED" | "APPLICATION_DEAUTHORIZED" | "STAGE_INSTANCE_CREATE" | "STAGE_INSTANCE_UPDATE" | "STAGE_INSTANCE_DELETE" | "GUILD_AUDIT_LOG_ENTRY_CREATE" | "GUILD_SCHEDULED_EVENT_CREATE" | "GUILD_SCHEDULED_EVENT_UPDATE" | "GUILD_SCHEDULED_EVENT_DELETE" | "GUILD_SCHEDULED_EVENT_USER_ADD" | "GUILD_SCHEDULED_EVENT_USER_REMOVE" | "AUTO_MODERATION_RULE_CREATE" | "AUTO_MODERATION_RULE_UPDATE" | "AUTO_MODERATION_RULE_DELETE" | "AUTO_MODERATION_ACTION_EXECUTION" | "GUILD_SOUNDBOARD_SOUNDS_UPDATE" | "GUILD_SOUNDBOARD_SOUND_CREATE" | "GUILD_SOUNDBOARD_SOUND_UPDATE" | "GUILD_SOUNDBOARD_SOUND_DELETE" | "QUEST_USER_ENROLLMENT" | "RATE_LIMITED");
        ActivitiesAttachmentResponse: {
            attachment: components["schemas"]["AttachmentResponse"];
        };
        /** Format: int32 */
        ActivityActionTypes: number & (1 | 2 | 3 | 5 | 6);
        /** Format: int32 */
        AfkTimeouts: number & (60 | 300 | 900 | 1800 | 3600);
        AllowedMentionTypes: string & ("users" | "roles" | "everyone");
        ApplicationCommandAttachmentOption: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 11;
        };
        ApplicationCommandAttachmentOptionResponse: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            required?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 11;
        };
        ApplicationCommandAutocompleteCallbackRequest: {
            data: components["schemas"]["InteractionApplicationCommandAutocompleteCallbackIntegerData"] | components["schemas"]["InteractionApplicationCommandAutocompleteCallbackNumberData"] | components["schemas"]["InteractionApplicationCommandAutocompleteCallbackStringData"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 8;
        };
        ApplicationCommandBooleanOption: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 5;
        };
        ApplicationCommandBooleanOptionResponse: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            required?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 5;
        };
        ApplicationCommandChannelOption: {
            channel_types?: components["schemas"]["ChannelTypes"][] | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 7;
        };
        ApplicationCommandChannelOptionResponse: {
            channel_types?: components["schemas"]["ChannelTypes"][];
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            required?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 7;
        };
        ApplicationCommandCreateRequest: {
            contexts?: components["schemas"]["InteractionContextType"][] | null;
            default_member_permissions?: number | null;
            description?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            dm_permission?: boolean | null;
            handler?: null | components["schemas"]["ApplicationCommandHandler"];
            integration_types?: components["schemas"]["ApplicationIntegrationType"][] | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            options?: (components["schemas"]["ApplicationCommandAttachmentOption"] | components["schemas"]["ApplicationCommandBooleanOption"] | components["schemas"]["ApplicationCommandChannelOption"] | components["schemas"]["ApplicationCommandIntegerOption"] | components["schemas"]["ApplicationCommandMentionableOption"] | components["schemas"]["ApplicationCommandNumberOption"] | components["schemas"]["ApplicationCommandRoleOption"] | components["schemas"]["ApplicationCommandStringOption"] | components["schemas"]["ApplicationCommandSubcommandGroupOption"] | components["schemas"]["ApplicationCommandSubcommandOption"] | components["schemas"]["ApplicationCommandUserOption"])[] | null;
            type?: null | components["schemas"]["ApplicationCommandType"];
        };
        /** Format: int32 */
        ApplicationCommandHandler: number;
        ApplicationCommandIntegerOption: {
            autocomplete?: boolean | null;
            choices?: components["schemas"]["ApplicationCommandOptionIntegerChoice"][] | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            max_value?: null | components["schemas"]["Int53Type"];
            min_value?: null | components["schemas"]["Int53Type"];
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
        };
        ApplicationCommandIntegerOptionResponse: {
            autocomplete?: boolean;
            choices?: components["schemas"]["ApplicationCommandOptionIntegerChoiceResponse"][];
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            max_value?: components["schemas"]["Int53Type"];
            min_value?: components["schemas"]["Int53Type"];
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            required?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
        };
        ApplicationCommandInteractionMetadataResponse: {
            authorizing_integration_owners: {
                [key: string]: components["schemas"]["SnowflakeType"];
            };
            id: components["schemas"]["SnowflakeType"];
            original_response_message_id?: components["schemas"]["SnowflakeType"];
            target_message_id?: components["schemas"]["SnowflakeType"];
            target_user?: components["schemas"]["UserResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            user?: components["schemas"]["UserResponse"];
        };
        ApplicationCommandMentionableOption: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 9;
        };
        ApplicationCommandMentionableOptionResponse: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            required?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 9;
        };
        ApplicationCommandNumberOption: {
            autocomplete?: boolean | null;
            choices?: components["schemas"]["ApplicationCommandOptionNumberChoice"][] | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            /** Format: double */
            max_value?: number | null;
            /** Format: double */
            min_value?: number | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10;
        };
        ApplicationCommandNumberOptionResponse: {
            autocomplete?: boolean;
            choices?: components["schemas"]["ApplicationCommandOptionNumberChoiceResponse"][];
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            /** Format: double */
            max_value?: number;
            /** Format: double */
            min_value?: number;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            required?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10;
        };
        ApplicationCommandOptionIntegerChoice: {
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            value: components["schemas"]["Int53Type"];
        };
        ApplicationCommandOptionIntegerChoiceResponse: {
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            value: components["schemas"]["Int53Type"];
        };
        ApplicationCommandOptionNumberChoice: {
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            /** Format: double */
            value: number;
        };
        ApplicationCommandOptionNumberChoiceResponse: {
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            /** Format: double */
            value: number;
        };
        ApplicationCommandOptionStringChoice: {
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            value: string;
        };
        ApplicationCommandOptionStringChoiceResponse: {
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            value: string;
        };
        /** Format: int32 */
        ApplicationCommandOptionType: number & (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11);
        ApplicationCommandPatchRequestPartial: {
            contexts?: components["schemas"]["InteractionContextType"][] | null;
            default_member_permissions?: number | null;
            description?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            dm_permission?: boolean | null;
            handler?: null | components["schemas"]["ApplicationCommandHandler"];
            integration_types?: components["schemas"]["ApplicationIntegrationType"][] | null;
            name?: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            options?: (components["schemas"]["ApplicationCommandAttachmentOption"] | components["schemas"]["ApplicationCommandBooleanOption"] | components["schemas"]["ApplicationCommandChannelOption"] | components["schemas"]["ApplicationCommandIntegerOption"] | components["schemas"]["ApplicationCommandMentionableOption"] | components["schemas"]["ApplicationCommandNumberOption"] | components["schemas"]["ApplicationCommandRoleOption"] | components["schemas"]["ApplicationCommandStringOption"] | components["schemas"]["ApplicationCommandSubcommandGroupOption"] | components["schemas"]["ApplicationCommandSubcommandOption"] | components["schemas"]["ApplicationCommandUserOption"])[] | null;
        };
        ApplicationCommandPermission: {
            id: components["schemas"]["SnowflakeType"];
            permission: boolean;
            type: components["schemas"]["ApplicationCommandPermissionType"];
        };
        /** Format: int32 */
        ApplicationCommandPermissionType: number & (1 | 2 | 3);
        ApplicationCommandResponse: {
            application_id: components["schemas"]["SnowflakeType"];
            contexts?: components["schemas"]["InteractionContextType"][] | null;
            default_member_permissions: string | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            dm_permission?: boolean;
            guild_id?: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            integration_types?: components["schemas"]["ApplicationIntegrationType"][];
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            nsfw?: boolean;
            options?: (components["schemas"]["ApplicationCommandAttachmentOptionResponse"] | components["schemas"]["ApplicationCommandBooleanOptionResponse"] | components["schemas"]["ApplicationCommandChannelOptionResponse"] | components["schemas"]["ApplicationCommandIntegerOptionResponse"] | components["schemas"]["ApplicationCommandMentionableOptionResponse"] | components["schemas"]["ApplicationCommandNumberOptionResponse"] | components["schemas"]["ApplicationCommandRoleOptionResponse"] | components["schemas"]["ApplicationCommandStringOptionResponse"] | components["schemas"]["ApplicationCommandSubcommandGroupOptionResponse"] | components["schemas"]["ApplicationCommandSubcommandOptionResponse"] | components["schemas"]["ApplicationCommandUserOptionResponse"])[];
            type: components["schemas"]["ApplicationCommandType"];
            version: components["schemas"]["SnowflakeType"];
        };
        ApplicationCommandRoleOption: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 8;
        };
        ApplicationCommandRoleOptionResponse: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            required?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 8;
        };
        ApplicationCommandStringOption: {
            autocomplete?: boolean | null;
            choices?: components["schemas"]["ApplicationCommandOptionStringChoice"][] | null;
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            max_length?: number | null;
            min_length?: number | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
        };
        ApplicationCommandStringOptionResponse: {
            autocomplete?: boolean;
            choices?: components["schemas"]["ApplicationCommandOptionStringChoiceResponse"][];
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            /** Format: int32 */
            max_length?: number;
            /** Format: int32 */
            min_length?: number;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            required?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
        };
        ApplicationCommandSubcommandGroupOption: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            options?: components["schemas"]["ApplicationCommandSubcommandOption"][] | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
        };
        ApplicationCommandSubcommandGroupOptionResponse: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            options?: components["schemas"]["ApplicationCommandSubcommandOptionResponse"][];
            required?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
        };
        ApplicationCommandSubcommandOption: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            options?: (components["schemas"]["ApplicationCommandAttachmentOption"] | components["schemas"]["ApplicationCommandBooleanOption"] | components["schemas"]["ApplicationCommandChannelOption"] | components["schemas"]["ApplicationCommandIntegerOption"] | components["schemas"]["ApplicationCommandMentionableOption"] | components["schemas"]["ApplicationCommandNumberOption"] | components["schemas"]["ApplicationCommandRoleOption"] | components["schemas"]["ApplicationCommandStringOption"] | components["schemas"]["ApplicationCommandUserOption"])[] | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        ApplicationCommandSubcommandOptionResponse: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            options?: (components["schemas"]["ApplicationCommandAttachmentOptionResponse"] | components["schemas"]["ApplicationCommandBooleanOptionResponse"] | components["schemas"]["ApplicationCommandChannelOptionResponse"] | components["schemas"]["ApplicationCommandIntegerOptionResponse"] | components["schemas"]["ApplicationCommandMentionableOptionResponse"] | components["schemas"]["ApplicationCommandNumberOptionResponse"] | components["schemas"]["ApplicationCommandRoleOptionResponse"] | components["schemas"]["ApplicationCommandStringOptionResponse"] | components["schemas"]["ApplicationCommandUserOptionResponse"])[];
            required?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        /** Format: int32 */
        ApplicationCommandType: number & (1 | 2 | 3 | 4);
        ApplicationCommandUpdateRequest: {
            contexts?: components["schemas"]["InteractionContextType"][] | null;
            default_member_permissions?: number | null;
            description?: string | null;
            description_localizations?: {
                [key: string]: string;
            } | null;
            dm_permission?: boolean | null;
            handler?: null | components["schemas"]["ApplicationCommandHandler"];
            id?: null | components["schemas"]["SnowflakeType"];
            integration_types?: components["schemas"]["ApplicationIntegrationType"][] | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            options?: (components["schemas"]["ApplicationCommandAttachmentOption"] | components["schemas"]["ApplicationCommandBooleanOption"] | components["schemas"]["ApplicationCommandChannelOption"] | components["schemas"]["ApplicationCommandIntegerOption"] | components["schemas"]["ApplicationCommandMentionableOption"] | components["schemas"]["ApplicationCommandNumberOption"] | components["schemas"]["ApplicationCommandRoleOption"] | components["schemas"]["ApplicationCommandStringOption"] | components["schemas"]["ApplicationCommandSubcommandGroupOption"] | components["schemas"]["ApplicationCommandSubcommandOption"] | components["schemas"]["ApplicationCommandUserOption"])[] | null;
            type?: null | components["schemas"]["ApplicationCommandType"];
        };
        ApplicationCommandUserOption: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 6;
        };
        ApplicationCommandUserOptionResponse: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            description_localized?: string;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            name_localized?: string;
            required?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 6;
        };
        /** Format: int32 */
        ApplicationEventWebhooksStatus: number & (1 | 2 | 3);
        /** Format: int32 */
        ApplicationExplicitContentFilterTypes: number & (0 | 1);
        ApplicationFormPartial: {
            cover_image?: string | null;
            /** Format: uri */
            custom_install_url?: string | null;
            description?: {
                default: string;
                localizations?: {
                    [key: string]: string;
                } | null;
            } | null;
            event_webhooks_status?: null | (1 | 2);
            event_webhooks_types?: ("APPLICATION_AUTHORIZED" | "APPLICATION_DEAUTHORIZED" | "ENTITLEMENT_CREATE" | "ENTITLEMENT_DELETE" | "ENTITLEMENT_UPDATE" | "GAME_DIRECT_MESSAGE_CREATE" | "GAME_DIRECT_MESSAGE_DELETE" | "GAME_DIRECT_MESSAGE_UPDATE" | "LOBBY_MESSAGE_CREATE" | "LOBBY_MESSAGE_DELETE" | "LOBBY_MESSAGE_UPDATE" | "QUEST_USER_ENROLLMENT")[] | null;
            /** Format: uri */
            event_webhooks_url?: string | null;
            explicit_content_filter?: null | components["schemas"]["ApplicationExplicitContentFilterTypes"];
            flags?: number | null;
            icon?: string | null;
            install_params?: null | components["schemas"]["ApplicationOAuth2InstallParams"];
            integration_types_config?: {
                [key: string]: null | components["schemas"]["ApplicationIntegrationTypeConfiguration"];
            } | null;
            /** Format: uri */
            interactions_endpoint_url?: string | null;
            /** Format: int32 */
            max_participants?: number | null;
            /** Format: uri */
            role_connections_verification_url?: string | null;
            tags?: string[] | null;
            team_id?: null | components["schemas"]["SnowflakeType"];
            type?: null | components["schemas"]["ApplicationTypes"];
        };
        ApplicationIdentityProviderAuthType: string & ("OIDC" | "EPIC_ONLINE_SERVICES_ACCESS_TOKEN" | "EPIC_ONLINE_SERVICES_ID_TOKEN" | "STEAM_SESSION_TICKET" | "UNITY_SERVICES_ID_TOKEN" | "DISCORD_BOT_ISSUED_ACCESS_TOKEN" | "APPLE_ID_TOKEN" | "PLAYSTATION_NETWORK_ID_TOKEN");
        ApplicationIncomingWebhookResponse: {
            application_id: null | components["schemas"]["SnowflakeType"];
            avatar: string | null;
            channel_id: null | components["schemas"]["SnowflakeType"];
            guild_id?: null | components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
            user?: components["schemas"]["UserResponse"];
        };
        /** Format: int32 */
        ApplicationIntegrationType: number & (0 | 1);
        ApplicationIntegrationTypeConfiguration: {
            oauth2_install_params?: null | components["schemas"]["ApplicationOAuth2InstallParams"];
        };
        ApplicationIntegrationTypeConfigurationResponse: {
            oauth2_install_params?: components["schemas"]["ApplicationOAuth2InstallParamsResponse"];
        };
        ApplicationOAuth2InstallParams: {
            permissions?: number | null;
            scopes?: ("applications.commands" | "bot")[] | null;
        };
        ApplicationOAuth2InstallParamsResponse: {
            permissions: string;
            scopes: ("applications.commands" | "bot")[];
        };
        ApplicationResponse: {
            bot?: components["schemas"]["UserResponse"];
            bot_public?: boolean;
            bot_require_code_grant?: boolean;
            cover_image?: string;
            /** Format: uri */
            custom_install_url?: string;
            description: string;
            /** Format: int32 */
            flags: number;
            flags_new: string;
            guild_id?: components["schemas"]["SnowflakeType"];
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            install_params?: components["schemas"]["ApplicationOAuth2InstallParamsResponse"];
            integration_types_config?: {
                [key: string]: components["schemas"]["ApplicationIntegrationTypeConfigurationResponse"];
            };
            /** Format: int32 */
            max_participants?: number | null;
            name: string;
            primary_sku_id?: components["schemas"]["SnowflakeType"];
            /** Format: uri */
            privacy_policy_url?: string;
            rpc_origins?: string[];
            slug?: string;
            tags?: string[];
            /** Format: uri */
            terms_of_service_url?: string;
            type: null | components["schemas"]["ApplicationTypes"];
            verify_key: string;
        };
        ApplicationRoleConnectionsMetadataItemRequest: {
            description: string;
            description_localizations?: {
                [key: string]: string | null;
            } | null;
            key: string;
            name: string;
            name_localizations?: {
                [key: string]: string | null;
            } | null;
            type: components["schemas"]["MetadataItemTypes"];
        };
        ApplicationRoleConnectionsMetadataItemResponse: {
            description: string;
            description_localizations?: {
                [key: string]: string;
            } | null;
            key: string;
            name: string;
            name_localizations?: {
                [key: string]: string;
            } | null;
            type: components["schemas"]["MetadataItemTypes"];
        };
        /** Format: int32 */
        ApplicationTypes: number & 4;
        ApplicationUserRoleConnectionResponse: {
            metadata?: {
                [key: string]: string;
            };
            platform_name?: string;
            platform_username?: string | null;
        };
        AttachmentResponse: {
            application?: components["schemas"]["ApplicationResponse"];
            /** Format: date-time */
            clip_created_at?: string;
            clip_participants?: components["schemas"]["UserResponse"][];
            content_type?: string;
            description?: string;
            /** Format: double */
            duration_secs?: number;
            ephemeral?: boolean;
            filename: string;
            /** Format: int32 */
            flags?: number;
            /** Format: int32 */
            height?: number;
            id: components["schemas"]["SnowflakeType"];
            placeholder?: string;
            /** Format: int32 */
            placeholder_version?: number;
            /** Format: uri */
            proxy_url: string;
            /** Format: int32 */
            size: number;
            title?: string | null;
            /** Format: uri */
            url: string;
            waveform?: string;
            /** Format: int32 */
            width?: number;
        };
        /** Format: int32 */
        AuditLogActionTypes: number & (1 | 10 | 11 | 12 | 13 | 14 | 15 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 30 | 31 | 32 | 40 | 41 | 42 | 50 | 51 | 52 | 60 | 61 | 62 | 72 | 73 | 74 | 75 | 80 | 81 | 82 | 83 | 84 | 85 | 90 | 91 | 92 | 100 | 101 | 102 | 110 | 111 | 112 | 121 | 130 | 131 | 132 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 150 | 151 | 163 | 164 | 165 | 166 | 167 | 171 | 172 | 180 | 190 | 191 | 192 | 193 | 211);
        AuditLogEntryResponse: {
            action_type: components["schemas"]["AuditLogActionTypes"];
            changes?: components["schemas"]["AuditLogObjectChangeResponse"][];
            id: components["schemas"]["SnowflakeType"];
            options?: {
                [key: string]: string;
            };
            reason?: string;
            target_id: null | components["schemas"]["SnowflakeType"];
            user_id: null | components["schemas"]["SnowflakeType"];
        };
        AuditLogObjectChangeResponse: {
            key: string | null;
            new_value?: unknown;
            old_value?: unknown;
        };
        AuthorType: string & ("user" | "bot" | "webhook" | "-user" | "-bot" | "-webhook");
        /** Format: int32 */
        AutomodActionType: number & (1 | 2 | 3 | 4);
        /** Format: int32 */
        AutomodEventType: number & (1 | 2);
        /** Format: int32 */
        AutomodKeywordPresetType: number & (1 | 2 | 3);
        /** Format: int32 */
        AutomodTriggerType: number & (1 | 2 | 3 | 4 | 5);
        AvailableLocalesEnum: string & ("ar" | "bg" | "cs" | "da" | "de" | "el" | "en-GB" | "en-US" | "es-419" | "es-ES" | "fi" | "fr" | "he" | "hi" | "hr" | "hu" | "id" | "it" | "ja" | "ko" | "lt" | "nl" | "no" | "pl" | "pt-BR" | "ro" | "ru" | "sv-SE" | "th" | "tr" | "uk" | "vi" | "zh-CN" | "zh-TW");
        BanUserFromGuildRequest: {
            delete_message_days?: number | null;
            delete_message_seconds?: number | null;
        };
        BaseCreateMessageCreateRequest: {
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            flags?: number | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
            shared_client_theme?: null | components["schemas"]["CustomClientThemeShareRequest"];
            sticker_ids?: components["schemas"]["SnowflakeType"][] | null;
        };
        BasicApplicationResponse: {
            bot?: components["schemas"]["UserResponse"];
            cover_image?: string;
            description: string;
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            name: string;
            primary_sku_id?: components["schemas"]["SnowflakeType"];
            type: null | components["schemas"]["ApplicationTypes"];
        };
        BasicGuildMemberResponse: {
            avatar: string | null;
            avatar_decoration_data?: null | components["schemas"]["UserAvatarDecorationResponse"];
            banner: string | null;
            collectibles?: null | components["schemas"]["UserCollectiblesResponse"];
            /** Format: date-time */
            communication_disabled_until: string | null;
            /** Format: int32 */
            flags: number;
            /** Format: date-time */
            joined_at: string;
            nick: string | null;
            pending: boolean;
            /** Format: date-time */
            premium_since: string | null;
            roles: components["schemas"]["SnowflakeType"][];
        };
        BasicMessageResponse: {
            activity?: components["schemas"]["MessageActivityResponse"];
            application?: components["schemas"]["BasicApplicationResponse"];
            application_id?: components["schemas"]["SnowflakeType"];
            attachments: components["schemas"]["MessageAttachmentResponse"][];
            author: components["schemas"]["UserResponse"];
            call?: components["schemas"]["MessageCallResponse"];
            channel_id: components["schemas"]["SnowflakeType"];
            components: (components["schemas"]["ActionRowComponentResponse"] | components["schemas"]["ContainerComponentResponse"] | components["schemas"]["FileComponentResponse"] | components["schemas"]["MediaGalleryComponentResponse"] | components["schemas"]["SectionComponentResponse"] | components["schemas"]["SeparatorComponentResponse"] | components["schemas"]["TextDisplayComponentResponse"])[];
            content: string;
            /** Format: date-time */
            edited_timestamp: string | null;
            embeds: components["schemas"]["MessageEmbedResponse"][];
            /** Format: int32 */
            flags: number;
            id: components["schemas"]["SnowflakeType"];
            interaction?: components["schemas"]["MessageInteractionResponse"];
            interaction_metadata?: components["schemas"]["ApplicationCommandInteractionMetadataResponse"] | components["schemas"]["MessageComponentInteractionMetadataResponse"] | components["schemas"]["ModalSubmitInteractionMetadataResponse"];
            mention_channels?: components["schemas"]["MessageMentionChannelResponse"][];
            mention_everyone: boolean;
            mention_roles: components["schemas"]["SnowflakeType"][];
            mentions: components["schemas"]["UserResponse"][];
            message_reference?: components["schemas"]["MessageReferenceResponse"];
            message_snapshots?: components["schemas"]["MessageSnapshotResponse"][];
            nonce?: number | string;
            pinned: boolean;
            poll?: components["schemas"]["PollResponse"];
            /** Format: int32 */
            position?: number;
            purchase_notification?: components["schemas"]["PurchaseNotificationResponse"];
            resolved?: components["schemas"]["ResolvedObjectsResponse"];
            role_subscription_data?: components["schemas"]["MessageRoleSubscriptionDataResponse"];
            shared_client_theme?: components["schemas"]["CustomClientThemeResponse"];
            sticker_items?: components["schemas"]["MessageStickerItemResponse"][];
            stickers?: (components["schemas"]["GuildStickerResponse"] | components["schemas"]["StandardStickerResponse"])[];
            thread?: components["schemas"]["ThreadResponse"];
            /** Format: date-time */
            timestamp: string;
            tts: boolean;
            type: components["schemas"]["MessageType"];
            webhook_id?: components["schemas"]["SnowflakeType"];
        };
        BlockMessageAction: {
            metadata?: null | components["schemas"]["BlockMessageActionMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        BlockMessageActionMetadata: {
            custom_message?: string | null;
        };
        BlockMessageActionMetadataResponse: {
            custom_message?: string;
        };
        BlockMessageActionResponse: {
            metadata: components["schemas"]["BlockMessageActionMetadataResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        BotAccountPatchRequest: {
            avatar?: string | null;
            banner?: string | null;
            username: string;
        };
        BotAddGuildMemberRequest: {
            access_token: string;
            deaf?: boolean | null;
            flags?: number | null;
            mute?: boolean | null;
            nick?: string | null;
            roles?: components["schemas"]["SnowflakeType"][] | null;
        };
        BulkBanUsersRequest: {
            delete_message_seconds?: number | null;
            user_ids: components["schemas"]["SnowflakeType"][];
        };
        BulkBanUsersResponse: {
            banned_users: components["schemas"]["SnowflakeType"][];
            failed_users: components["schemas"]["SnowflakeType"][];
        };
        BulkLobbyMemberRequest: {
            flags?: null | 1;
            id: components["schemas"]["SnowflakeType"];
            metadata?: {
                [key: string]: string;
            } | null;
            remove_member?: boolean | null;
        };
        ButtonComponentForMessageRequest: {
            custom_id?: string | null;
            disabled?: boolean | null;
            emoji?: null | components["schemas"]["ComponentEmojiForRequest"];
            /** Format: int32 */
            id?: number | null;
            label?: string | null;
            sku_id?: null | components["schemas"]["SnowflakeType"];
            style: components["schemas"]["ButtonStyleTypes"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            /** Format: uri */
            url?: string | null;
        };
        ButtonComponentResponse: {
            custom_id?: string;
            disabled?: boolean;
            emoji?: components["schemas"]["ComponentEmojiResponse"];
            /** Format: int32 */
            id: number;
            label?: string;
            sku_id?: components["schemas"]["SnowflakeType"];
            style: components["schemas"]["ButtonStyleTypes"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            /** Format: uri */
            url?: string | null;
        };
        /** Format: int32 */
        ButtonStyleTypes: number & (1 | 2 | 3 | 4 | 5 | 6);
        ChannelFollowerResponse: {
            channel_id: components["schemas"]["SnowflakeType"];
            webhook_id: components["schemas"]["SnowflakeType"];
        };
        ChannelFollowerWebhookResponse: {
            application_id: null | components["schemas"]["SnowflakeType"];
            avatar: string | null;
            channel_id: null | components["schemas"]["SnowflakeType"];
            guild_id?: null | components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            source_channel?: components["schemas"]["WebhookSourceChannelResponse"];
            source_guild?: components["schemas"]["WebhookSourceGuildResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            user?: components["schemas"]["UserResponse"];
        };
        ChannelPermissionOverwriteRequest: {
            allow?: number | null;
            deny?: number | null;
            id: components["schemas"]["SnowflakeType"];
            type?: null | components["schemas"]["ChannelPermissionOverwrites"];
        };
        ChannelPermissionOverwriteResponse: {
            allow: string;
            deny: string;
            id: components["schemas"]["SnowflakeType"];
            type: components["schemas"]["ChannelPermissionOverwrites"];
        };
        /** Format: int32 */
        ChannelPermissionOverwrites: number & (0 | 1);
        ChannelSelectComponentForMessageRequest: {
            channel_types?: components["schemas"]["ChannelTypes"][] | null;
            custom_id: string;
            default_values?: components["schemas"]["ChannelSelectDefaultValue"][] | null;
            disabled?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            placeholder?: string | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 8;
        };
        ChannelSelectComponentForModalRequest: {
            channel_types?: components["schemas"]["ChannelTypes"][] | null;
            custom_id: string;
            default_values?: components["schemas"]["ChannelSelectDefaultValue"][] | null;
            disabled?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            placeholder?: string | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 8;
        };
        ChannelSelectComponentResponse: {
            channel_types?: components["schemas"]["ChannelTypes"][];
            custom_id: string;
            default_values?: components["schemas"]["ChannelSelectDefaultValueResponse"][];
            disabled?: boolean;
            /** Format: int32 */
            id: number;
            /** Format: int32 */
            max_values: number;
            /** Format: int32 */
            min_values: number;
            placeholder?: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 8;
        };
        ChannelSelectDefaultValue: {
            id: components["schemas"]["SnowflakeType"];
            /** @enum {string} */
            type: "channel";
        };
        ChannelSelectDefaultValueResponse: {
            id: components["schemas"]["SnowflakeType"];
            /** @enum {string} */
            type: "channel";
        };
        /** Format: int32 */
        ChannelTypes: number & (1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15);
        CheckboxComponentForModalRequest: {
            custom_id: string;
            default?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 23;
        };
        CheckboxGroupComponentForModalRequest: {
            custom_id: string;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            options: components["schemas"]["CheckboxGroupOptionForRequest"][];
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 22;
        };
        CheckboxGroupOptionForRequest: {
            default?: boolean | null;
            description?: string | null;
            label: string;
            value: string;
        };
        CommandPermissionResponse: {
            id: components["schemas"]["SnowflakeType"];
            permission: boolean;
            type: components["schemas"]["ApplicationCommandPermissionType"];
        };
        CommandPermissionsResponse: {
            application_id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            permissions: components["schemas"]["CommandPermissionResponse"][];
        };
        ComponentEmojiForRequest: {
            id?: null | components["schemas"]["SnowflakeType"];
            name: string;
        };
        ComponentEmojiResponse: {
            animated?: boolean;
            id?: components["schemas"]["SnowflakeType"];
            name: string;
        };
        ConnectedAccountGuildResponse: {
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            name: string;
        };
        ConnectedAccountIntegrationResponse: {
            account: components["schemas"]["AccountResponse"];
            guild: components["schemas"]["ConnectedAccountGuildResponse"];
            id: string;
            type: components["schemas"]["IntegrationTypes"];
        };
        ConnectedAccountProviders: string & ("battlenet" | "bluesky" | "bungie" | "ebay" | "epicgames" | "facebook" | "github" | "instagram" | "mastodon" | "leagueoflegends" | "paypal" | "playstation" | "reddit" | "riotgames" | "roblox" | "skype" | "spotify" | "steam" | "tiktok" | "twitch" | "twitter" | "xbox" | "youtube" | "domain");
        ConnectedAccountResponse: {
            friend_sync: boolean;
            id: string;
            integrations?: components["schemas"]["ConnectedAccountIntegrationResponse"][];
            name: string | null;
            revoked?: boolean;
            show_activity: boolean;
            two_way_link: boolean;
            type: components["schemas"]["ConnectedAccountProviders"];
            verified: boolean;
            visibility: components["schemas"]["ConnectedAccountVisibility"];
        };
        /** Format: int32 */
        ConnectedAccountVisibility: number & (0 | 1);
        ContainerComponentForMessageRequest: {
            accent_color?: number | null;
            components: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[];
            /** Format: int32 */
            id?: number | null;
            spoiler?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 17;
        };
        ContainerComponentResponse: {
            /** Format: int32 */
            accent_color: number | null;
            components: (components["schemas"]["ActionRowComponentResponse"] | components["schemas"]["FileComponentResponse"] | components["schemas"]["MediaGalleryComponentResponse"] | components["schemas"]["SectionComponentResponse"] | components["schemas"]["SeparatorComponentResponse"] | components["schemas"]["TextDisplayComponentResponse"])[];
            /** Format: int32 */
            id: number;
            spoiler: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 17;
        };
        CreatedThreadResponse: {
            applied_tags?: components["schemas"]["SnowflakeType"][];
            /** Format: int32 */
            bitrate?: number;
            /** Format: int32 */
            flags: number;
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            last_message_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: date-time */
            last_pin_timestamp?: string | null;
            member?: components["schemas"]["ThreadMemberResponse"];
            /** Format: int32 */
            member_count: number;
            /** Format: int32 */
            message_count: number;
            name: string;
            owner_id: components["schemas"]["SnowflakeType"];
            parent_id?: null | components["schemas"]["SnowflakeType"];
            permissions?: string;
            /** Format: int32 */
            rate_limit_per_user?: number;
            rtc_region?: string | null;
            thread_metadata: components["schemas"]["ThreadMetadataResponse"];
            /** Format: int32 */
            total_message_sent: number;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10 | 11 | 12;
            /** Format: int32 */
            user_limit?: number;
            video_quality_mode?: components["schemas"]["VideoQualityModes"];
        };
        CreateEntitlementRequestData: {
            owner_id: components["schemas"]["SnowflakeType"];
            owner_type: components["schemas"]["EntitlementOwnerTypes"];
            sku_id: components["schemas"]["SnowflakeType"];
        };
        CreateForumThreadRequest: {
            applied_tags?: components["schemas"]["SnowflakeType"][] | null;
            auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            message: components["schemas"]["BaseCreateMessageCreateRequest"];
            name: string;
            rate_limit_per_user?: number | null;
        };
        CreateGroupDMInviteRequest: {
            max_age?: number | null;
        };
        CreateGuildChannelRequest: {
            available_tags?: (null | components["schemas"]["CreateOrUpdateThreadTagRequest"])[] | null;
            /** Format: int32 */
            bitrate?: number | null;
            default_auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            default_forum_layout?: null | components["schemas"]["ForumLayout"];
            default_reaction_emoji?: null | components["schemas"]["UpdateDefaultReactionEmojiRequest"];
            default_sort_order?: null | components["schemas"]["ThreadSortOrder"];
            default_tag_setting?: null | components["schemas"]["ThreadSearchTagSetting"];
            default_thread_rate_limit_per_user?: number | null;
            name: string;
            nsfw?: boolean | null;
            parent_id?: null | components["schemas"]["SnowflakeType"];
            permission_overwrites?: components["schemas"]["ChannelPermissionOverwriteRequest"][] | null;
            /** Format: int32 */
            position?: number | null;
            rate_limit_per_user?: number | null;
            rtc_region?: string | null;
            topic?: string | null;
            type?: null | (0 | 2 | 4 | 5 | 13 | 14 | 15);
            /** Format: int32 */
            user_limit?: number | null;
            video_quality_mode?: null | components["schemas"]["VideoQualityModes"];
        };
        CreateGuildInviteRequest: {
            max_age?: number | null;
            max_uses?: number | null;
            target_application_id?: null | components["schemas"]["SnowflakeType"];
            target_type?: null | (1 | 2);
            target_user_id?: null | components["schemas"]["SnowflakeType"];
            temporary?: boolean | null;
            unique?: boolean | null;
        };
        CreateMessageInteractionCallbackRequest: {
            data?: null | components["schemas"]["IncomingWebhookInteractionRequest"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4 | 5;
        };
        CreateMessageInteractionCallbackResponse: {
            message: components["schemas"]["MessageResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
        };
        CreateOrUpdateThreadTagRequest: {
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
            moderated?: boolean | null;
            name: string;
        };
        CreatePrivateChannelRequest: {
            access_tokens?: string[] | null;
            nicks?: {
                [key: string]: string | null;
            } | null;
            recipient_id?: null | components["schemas"]["SnowflakeType"];
        };
        CreateRoleRequest: {
            color?: number | null;
            colors?: null | components["schemas"]["RoleColors"];
            hoist?: boolean | null;
            icon?: string | null;
            mentionable?: boolean | null;
            name?: string | null;
            permissions?: number | null;
            unicode_emoji?: string | null;
        };
        CreateTextThreadWithMessageRequest: {
            auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            name: string;
            rate_limit_per_user?: number | null;
        };
        CreateTextThreadWithoutMessageRequest: {
            auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            invitable?: boolean | null;
            name: string;
            rate_limit_per_user?: number | null;
            type?: null | (10 | 11 | 12);
        };
        CustomClientThemeResponse: {
            /** Format: int32 */
            base_mix: number;
            base_theme: components["schemas"]["MessageShareCustomUserThemeBaseTheme"];
            colors: string[];
            /** Format: int32 */
            gradient_angle: number;
        };
        CustomClientThemeShareRequest: {
            /** Format: int32 */
            base_mix: number;
            base_theme?: null | components["schemas"]["MessageShareCustomUserThemeBaseTheme"];
            colors: string[];
            /** Format: int32 */
            gradient_angle: number;
        };
        DefaultKeywordListTriggerMetadata: {
            allow_list?: string[] | null;
            presets?: components["schemas"]["AutomodKeywordPresetType"][] | null;
        };
        DefaultKeywordListTriggerMetadataResponse: {
            allow_list: string[];
            presets: components["schemas"]["AutomodKeywordPresetType"][];
        };
        DefaultKeywordListUpsertRequest: {
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            event_type: components["schemas"]["AutomodEventType"];
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            name: string;
            trigger_metadata: components["schemas"]["DefaultKeywordListTriggerMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 4;
        };
        DefaultKeywordListUpsertRequestPartial: {
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            event_type?: components["schemas"]["AutomodEventType"];
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            name?: string;
            trigger_metadata?: components["schemas"]["DefaultKeywordListTriggerMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type?: 4;
        };
        DefaultKeywordRuleResponse: {
            actions: (components["schemas"]["BlockMessageActionResponse"] | components["schemas"]["FlagToChannelActionResponse"] | components["schemas"]["QuarantineUserActionResponse"] | components["schemas"]["UserCommunicationDisabledActionResponse"])[];
            creator_id: components["schemas"]["SnowflakeType"];
            enabled: boolean;
            event_type: components["schemas"]["AutomodEventType"];
            exempt_channels: components["schemas"]["SnowflakeType"][];
            exempt_roles: components["schemas"]["SnowflakeType"][];
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            trigger_metadata: components["schemas"]["DefaultKeywordListTriggerMetadataResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 4;
        };
        DefaultReactionEmojiResponse: {
            emoji_id: null | components["schemas"]["SnowflakeType"];
            emoji_name: string | null;
        };
        DiscordIntegrationResponse: {
            account: components["schemas"]["AccountResponse"];
            application: components["schemas"]["IntegrationApplicationResponse"];
            enabled: boolean;
            id: components["schemas"]["SnowflakeType"];
            name: string | null;
            scopes: ("applications.commands" | "bot" | "webhook.incoming")[];
            /** @enum {string} */
            type: "discord";
            user?: components["schemas"]["UserResponse"];
        };
        EmbeddedActivityInstance: {
            application_id: components["schemas"]["SnowflakeType"];
            instance_id: string;
            launch_id: string;
            location: components["schemas"]["GuildChannelLocation"] | components["schemas"]["PrivateChannelLocation"];
            users: components["schemas"]["SnowflakeType"][];
        };
        EmbeddedActivityLocationKind: string & ("gc" | "pc" | "party");
        EmojiResponse: {
            animated: boolean;
            available: boolean;
            id: components["schemas"]["SnowflakeType"];
            managed: boolean;
            name: string;
            require_colons: boolean;
            roles: components["schemas"]["SnowflakeType"][];
            user?: components["schemas"]["UserResponse"];
        };
        /** Format: int32 */
        EntitlementOwnerTypes: number;
        EntitlementResponse: {
            application_id: components["schemas"]["SnowflakeType"];
            consumed?: boolean;
            deleted: boolean;
            /** Format: date-time */
            ends_at: string | null;
            /** Format: date-time */
            fulfilled_at?: string | null;
            fulfillment_status?: null | components["schemas"]["EntitlementTenantFulfillmentStatusResponse"];
            gifter_user_id?: null | components["schemas"]["SnowflakeType"];
            guild_id?: null | components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            parent_id?: null | components["schemas"]["SnowflakeType"];
            sku_id: components["schemas"]["SnowflakeType"];
            /** Format: date-time */
            starts_at: string | null;
            type: components["schemas"]["EntitlementTypes"];
            user_id: components["schemas"]["SnowflakeType"];
        };
        /** Format: int32 */
        EntitlementTenantFulfillmentStatusResponse: number & (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7);
        /** Format: int32 */
        EntitlementTypes: number & (8 | 10);
        EntityMetadataExternal: {
            location: string;
        };
        EntityMetadataExternalResponse: {
            location: string;
        };
        EntityMetadataStageInstance: Record<string, never>;
        EntityMetadataStageInstanceResponse: Record<string, never>;
        EntityMetadataVoice: Record<string, never>;
        EntityMetadataVoiceResponse: Record<string, never>;
        /** @description A single error, either for an API response or a specific field. */
        Error: {
            /** @description Discord internal error code. See error code reference */
            code: number;
            /** @description Human-readable error message */
            message: string;
        };
        ErrorDetails: {
            [key: string]: components["schemas"]["ErrorDetails"];
        } | components["schemas"]["InnerErrors"];
        /** @description Errors object returned by the Discord API */
        ErrorResponse: components["schemas"]["Error"] & {
            errors?: components["schemas"]["ErrorDetails"];
        };
        ExternalConnectionIntegrationResponse: {
            account: components["schemas"]["AccountResponse"];
            enable_emoticons?: boolean;
            enabled: boolean;
            expire_behavior?: components["schemas"]["IntegrationExpireBehaviorTypes"];
            expire_grace_period?: components["schemas"]["IntegrationExpireGracePeriodTypes"];
            id: string;
            name: string | null;
            revoked?: boolean;
            role_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            subscriber_count?: number;
            /** Format: date-time */
            synced_at?: string;
            syncing?: boolean;
            /** @enum {string} */
            type: "twitch" | "youtube";
            user: components["schemas"]["UserResponse"];
        };
        ExternalScheduledEventCreateRequest: {
            channel_id?: null | components["schemas"]["SnowflakeType"];
            description?: string | null;
            entity_metadata: components["schemas"]["EntityMetadataExternal"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 3;
            image?: string | null;
            name: string;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /** Format: date-time */
            scheduled_end_time?: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
        };
        ExternalScheduledEventPatchRequestPartial: {
            channel_id?: null | components["schemas"]["SnowflakeType"];
            description?: string | null;
            entity_metadata?: components["schemas"]["EntityMetadataExternal"];
            entity_type?: null | 3;
            image?: string | null;
            name?: string;
            privacy_level?: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /** Format: date-time */
            scheduled_end_time?: string | null;
            /** Format: date-time */
            scheduled_start_time?: string;
            status?: null | components["schemas"]["GuildScheduledEventStatuses"];
        };
        ExternalScheduledEventResponse: {
            channel_id: null | components["schemas"]["SnowflakeType"];
            creator?: components["schemas"]["UserResponse"];
            creator_id: null | components["schemas"]["SnowflakeType"];
            description: string | null;
            entity_id: null | components["schemas"]["SnowflakeType"];
            entity_metadata: components["schemas"]["EntityMetadataExternalResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 3;
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            image: string | null;
            name: string;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /** Format: date-time */
            scheduled_end_time: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
            status: components["schemas"]["GuildScheduledEventStatuses"];
            /** Format: int32 */
            user_count?: number;
            user_rsvp?: null | components["schemas"]["ScheduledEventUserResponse"];
        };
        FileComponentForMessageRequest: {
            file: components["schemas"]["UnfurledMediaRequestWithAttachmentReferenceRequired"];
            /** Format: int32 */
            id?: number | null;
            spoiler?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 13;
        };
        FileComponentResponse: {
            file: components["schemas"]["UnfurledMediaResponse"];
            /** Format: int32 */
            id: number;
            name: string | null;
            /** Format: int32 */
            size: number | null;
            spoiler: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 13;
        };
        FileUploadComponentForModalRequest: {
            custom_id: string;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 19;
        };
        FlagToChannelAction: {
            metadata: components["schemas"]["FlagToChannelActionMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
        };
        FlagToChannelActionMetadata: {
            channel_id: components["schemas"]["SnowflakeType"];
        };
        FlagToChannelActionMetadataResponse: {
            channel_id: components["schemas"]["SnowflakeType"];
        };
        FlagToChannelActionResponse: {
            metadata: components["schemas"]["FlagToChannelActionMetadataResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
        };
        /** Format: int32 */
        ForumLayout: number & (0 | 1 | 2);
        ForumTagResponse: {
            emoji_id: null | components["schemas"]["SnowflakeType"];
            emoji_name: string | null;
            id: components["schemas"]["SnowflakeType"];
            moderated: boolean;
            name: string;
        };
        FriendInviteResponse: {
            channel: null | components["schemas"]["InviteChannelResponse"];
            code: string;
            /** Format: date-time */
            created_at?: string;
            /** Format: date-time */
            expires_at: string | null;
            /** Format: int32 */
            flags?: number;
            /** Format: int32 */
            friends_count?: number;
            inviter?: components["schemas"]["UserResponse"];
            is_contact?: boolean;
            /** Format: int32 */
            max_age?: number;
            /** Format: int32 */
            max_uses?: number;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            /** Format: int32 */
            uses?: number;
        };
        GatewayBotResponse: {
            session_start_limit: components["schemas"]["GatewayBotSessionStartLimitResponse"];
            /** Format: int32 */
            shards: number;
            /** Format: uri */
            url: string;
        };
        GatewayBotSessionStartLimitResponse: {
            /** Format: int32 */
            max_concurrency: number;
            /** Format: int32 */
            remaining: number;
            /** Format: int32 */
            reset_after: number;
            /** Format: int32 */
            total: number;
        };
        GatewayResponse: {
            /** Format: uri */
            url: string;
        };
        GithubAuthor: {
            name: string;
            username?: string | null;
        };
        GithubCheckApp: {
            name: string;
        };
        GithubCheckPullRequest: {
            number: number;
        };
        GithubCheckRun: {
            check_suite: components["schemas"]["GithubCheckSuite"];
            conclusion?: string | null;
            /** Format: uri */
            details_url?: string | null;
            /** Format: uri */
            html_url: string;
            name: string;
            output?: null | components["schemas"]["GithubCheckRunOutput"];
            pull_requests?: components["schemas"]["GithubCheckPullRequest"][] | null;
        };
        GithubCheckRunOutput: {
            summary?: string | null;
            title?: string | null;
        };
        GithubCheckSuite: {
            app: components["schemas"]["GithubCheckApp"];
            conclusion?: string | null;
            head_branch?: string | null;
            head_sha: string;
            pull_requests?: components["schemas"]["GithubCheckPullRequest"][] | null;
        };
        GithubComment: {
            body: string;
            commit_id?: string | null;
            /** Format: uri */
            html_url: string;
            id: number;
            user: components["schemas"]["GithubUser"];
        };
        GithubCommit: {
            author: components["schemas"]["GithubAuthor"];
            id: string;
            message: string;
            /** Format: uri */
            url: string;
        };
        GithubDiscussion: {
            /** Format: uri */
            answer_html_url?: string | null;
            body?: string | null;
            /** Format: uri */
            html_url: string;
            number: number;
            title: string;
            user: components["schemas"]["GithubUser"];
        };
        GithubIssue: {
            body?: string | null;
            /** Format: uri */
            html_url: string;
            id: number;
            number: number;
            pull_request?: unknown;
            title: string;
            user: components["schemas"]["GithubUser"];
        };
        GithubRelease: {
            author: components["schemas"]["GithubUser"];
            /** Format: uri */
            html_url: string;
            id: number;
            tag_name: string;
        };
        GithubRepository: {
            full_name: string;
            /** Format: uri */
            html_url: string;
            id: number;
            name: string;
        };
        GithubReview: {
            body?: string | null;
            /** Format: uri */
            html_url: string;
            state: string;
            user: components["schemas"]["GithubUser"];
        };
        GithubUser: {
            /** Format: uri */
            avatar_url: string;
            /** Format: uri */
            html_url: string;
            id: number;
            login: string;
        };
        GithubWebhook: {
            action?: string | null;
            answer?: null | components["schemas"]["GithubComment"];
            check_run?: null | components["schemas"]["GithubCheckRun"];
            check_suite?: null | components["schemas"]["GithubCheckSuite"];
            comment?: null | components["schemas"]["GithubComment"];
            commits?: components["schemas"]["GithubCommit"][] | null;
            /** Format: uri */
            compare?: string | null;
            discussion?: null | components["schemas"]["GithubDiscussion"];
            forced?: boolean | null;
            forkee?: null | components["schemas"]["GithubRepository"];
            head_commit?: null | components["schemas"]["GithubCommit"];
            issue?: null | components["schemas"]["GithubIssue"];
            member?: null | components["schemas"]["GithubUser"];
            pull_request?: null | components["schemas"]["GithubIssue"];
            ref?: string | null;
            ref_type?: string | null;
            release?: null | components["schemas"]["GithubRelease"];
            repository?: null | components["schemas"]["GithubRepository"];
            review?: null | components["schemas"]["GithubReview"];
            sender: components["schemas"]["GithubUser"];
        };
        GroupDMInviteResponse: {
            /** Format: int32 */
            approximate_member_count?: number | null;
            channel: components["schemas"]["InviteChannelResponse"];
            code: string;
            /** Format: date-time */
            created_at?: string;
            /** Format: date-time */
            expires_at: string | null;
            inviter?: components["schemas"]["UserResponse"];
            /** Format: int32 */
            max_age?: number;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        GuildAuditLogResponse: {
            application_commands: components["schemas"]["ApplicationCommandResponse"][];
            audit_log_entries: components["schemas"]["AuditLogEntryResponse"][];
            auto_moderation_rules: (components["schemas"]["DefaultKeywordRuleResponse"] | components["schemas"]["KeywordRuleResponse"] | components["schemas"]["MLSpamRuleResponse"] | components["schemas"]["MentionSpamRuleResponse"] | components["schemas"]["SpamLinkRuleResponse"] | null)[];
            guild_scheduled_events: (components["schemas"]["ExternalScheduledEventResponse"] | components["schemas"]["StageScheduledEventResponse"] | components["schemas"]["VoiceScheduledEventResponse"])[];
            integrations: (components["schemas"]["PartialDiscordIntegrationResponse"] | components["schemas"]["PartialExternalConnectionIntegrationResponse"] | components["schemas"]["PartialGuildSubscriptionIntegrationResponse"])[];
            threads: components["schemas"]["ThreadResponse"][];
            users: components["schemas"]["UserResponse"][];
            webhooks: (components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"])[];
        };
        GuildBanResponse: {
            reason: string | null;
            user: components["schemas"]["UserResponse"];
        };
        GuildChannelLocation: {
            channel_id: components["schemas"]["SnowflakeType"];
            guild_id: components["schemas"]["SnowflakeType"];
            id: string;
            /** @enum {string} */
            kind: "gc";
        };
        GuildChannelResponse: {
            available_tags?: components["schemas"]["ForumTagResponse"][];
            /** Format: int32 */
            bitrate?: number;
            default_auto_archive_duration?: components["schemas"]["ThreadAutoArchiveDuration"];
            default_forum_layout?: components["schemas"]["ForumLayout"];
            default_reaction_emoji?: null | components["schemas"]["DefaultReactionEmojiResponse"];
            default_sort_order?: null | components["schemas"]["ThreadSortOrder"];
            default_tag_setting?: null | components["schemas"]["ThreadSearchTagSetting"];
            /** Format: int32 */
            default_thread_rate_limit_per_user?: number;
            /** Format: int32 */
            flags: number;
            guild_id: components["schemas"]["SnowflakeType"];
            hd_streaming_buyer_id?: components["schemas"]["SnowflakeType"];
            /** Format: date-time */
            hd_streaming_until?: string;
            id: components["schemas"]["SnowflakeType"];
            last_message_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: date-time */
            last_pin_timestamp?: string | null;
            name: string;
            nsfw?: boolean;
            parent_id?: null | components["schemas"]["SnowflakeType"];
            permission_overwrites?: components["schemas"]["ChannelPermissionOverwriteResponse"][];
            permissions?: string;
            /** Format: int32 */
            position: number;
            /** Format: int32 */
            rate_limit_per_user?: number;
            rtc_region?: string | null;
            topic?: string | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 0 | 2 | 4 | 5 | 13 | 14 | 15;
            /** Format: int32 */
            user_limit?: number;
            video_quality_mode?: components["schemas"]["VideoQualityModes"];
        };
        /** Format: int32 */
        GuildExplicitContentFilterTypes: number & (0 | 1 | 2);
        GuildFeatures: string & ("ANIMATED_BANNER" | "ANIMATED_ICON" | "APPLICATION_COMMAND_PERMISSIONS_V2" | "AUTO_MODERATION" | "BANNER" | "COMMUNITY" | "CREATOR_MONETIZABLE_PROVISIONAL" | "CREATOR_STORE_PAGE" | "DEVELOPER_SUPPORT_SERVER" | "DISCOVERABLE" | "FEATURABLE" | "INVITES_DISABLED" | "INVITE_SPLASH" | "MEMBER_VERIFICATION_GATE_ENABLED" | "MORE_STICKERS" | "NEWS" | "PARTNERED" | "PREVIEW_ENABLED" | "RAID_ALERTS_DISABLED" | "ROLE_ICONS" | "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE" | "ROLE_SUBSCRIPTIONS_ENABLED" | "TICKETED_EVENTS_ENABLED" | "VANITY_URL" | "VERIFIED" | "VIP_REGIONS" | "WELCOME_SCREEN_ENABLED" | "OFFICIAL_GAME_GUILD");
        GuildHomeSettingsResponse: {
            enabled: boolean;
            guild_id: components["schemas"]["SnowflakeType"];
            new_member_actions: components["schemas"]["NewMemberActionResponse"][];
            resource_channels: components["schemas"]["ResourceChannelResponse"][];
            welcome_message?: components["schemas"]["WelcomeMessageResponse"];
        };
        GuildIncidentsDataResponse: {
            /** Format: date-time */
            dms_disabled_until: string | null;
            /** Format: date-time */
            invites_disabled_until: string | null;
        };
        GuildIncomingWebhookResponse: {
            application_id: null | components["schemas"]["SnowflakeType"];
            avatar: string | null;
            channel_id: null | components["schemas"]["SnowflakeType"];
            guild_id?: null | components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            token?: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
            /** Format: uri */
            url?: string;
            user?: components["schemas"]["UserResponse"];
        };
        GuildInviteResponse: {
            /** Format: int32 */
            approximate_member_count?: number | null;
            /** Format: int32 */
            approximate_presence_count?: number | null;
            channel: components["schemas"]["InviteChannelResponse"];
            code: string;
            /** Format: date-time */
            created_at?: string;
            /** Format: date-time */
            expires_at: string | null;
            /** Format: int32 */
            flags?: number;
            guild: components["schemas"]["InviteGuildResponse"];
            guild_id: components["schemas"]["SnowflakeType"];
            guild_scheduled_event?: components["schemas"]["ScheduledEventResponse"];
            inviter?: components["schemas"]["UserResponse"];
            is_contact?: boolean;
            is_nickname_changeable?: boolean;
            /** Format: int32 */
            max_age?: number;
            /** Format: int32 */
            max_uses?: number;
            roles?: components["schemas"]["InviteGuildRoleResponse"][] | null;
            target_application?: components["schemas"]["InviteApplicationResponse"];
            target_type?: components["schemas"]["InviteTargetTypes"];
            target_user?: components["schemas"]["UserResponse"];
            temporary?: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 0;
            /** Format: int32 */
            uses?: number;
        };
        GuildJoinRequestApplicationStatus: string & ("STARTED" | "SUBMITTED" | "REJECTED" | "APPROVED");
        GuildJoinRequestResponse: {
            actioned_by_user?: null | components["schemas"]["UserResponse"];
            application_status: null | components["schemas"]["GuildJoinRequestApplicationStatus"];
            /** Format: date-time */
            created_at: string;
            /** @description Applicant's responses on join request form */
            form_responses?: (components["schemas"]["MultipleChoiceFormFieldResponse"] | components["schemas"]["ParagraphFormFieldResponse"] | components["schemas"]["TermsFormFieldResponse"] | components["schemas"]["TextInputFormFieldResponse"])[] | null;
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            /** @description Reason request was rejected. Only set when application_status is REJECTED */
            rejection_reason: string | null;
            /** Format: date-time */
            reviewed_at: string | null;
            user?: null | components["schemas"]["UserResponse"];
            user_id: components["schemas"]["SnowflakeType"];
        };
        GuildJoinRequestsListResponse: {
            guild_join_requests?: components["schemas"]["GuildJoinRequestResponse"][];
            /** Format: int32 */
            total?: number;
        };
        GuildMemberResponse: {
            avatar: string | null;
            avatar_decoration_data?: null | components["schemas"]["UserAvatarDecorationResponse"];
            banner: string | null;
            collectibles?: null | components["schemas"]["UserCollectiblesResponse"];
            /** Format: date-time */
            communication_disabled_until: string | null;
            deaf: boolean;
            /** Format: int32 */
            flags: number;
            /** Format: date-time */
            joined_at: string;
            mute: boolean;
            nick: string | null;
            pending: boolean;
            /** Format: date-time */
            premium_since: string | null;
            roles: components["schemas"]["SnowflakeType"][];
            user: components["schemas"]["UserResponse"];
        };
        GuildMemberVerificationFormFieldType: string & ("TERMS" | "TEXT_INPUT" | "PARAGRAPH" | "MULTIPLE_CHOICE");
        /** Format: int32 */
        GuildMFALevel: number & (0 | 1);
        /** Format: int32 */
        GuildNSFWContentLevel: number & (0 | 1 | 2 | 3);
        /** Format: int32 */
        GuildOnboardingMode: number & (0 | 1);
        GuildOnboardingResponse: {
            default_channel_ids: components["schemas"]["SnowflakeType"][];
            enabled: boolean;
            guild_id: components["schemas"]["SnowflakeType"];
            mode: components["schemas"]["GuildOnboardingMode"];
            prompts: components["schemas"]["OnboardingPromptResponse"][];
        };
        GuildPatchRequestPartial: {
            afk_channel_id?: null | components["schemas"]["SnowflakeType"];
            afk_timeout?: null | components["schemas"]["AfkTimeouts"];
            banner?: string | null;
            default_message_notifications?: null | components["schemas"]["UserNotificationSettings"];
            description?: string | null;
            discovery_splash?: string | null;
            explicit_content_filter?: null | components["schemas"]["GuildExplicitContentFilterTypes"];
            features?: (string | null)[] | null;
            home_header?: string | null;
            icon?: string | null;
            name?: string;
            preferred_locale?: null | components["schemas"]["AvailableLocalesEnum"];
            premium_progress_bar_enabled?: boolean | null;
            public_updates_channel_id?: null | components["schemas"]["SnowflakeType"];
            region?: string | null;
            rules_channel_id?: null | components["schemas"]["SnowflakeType"];
            safety_alerts_channel_id?: null | components["schemas"]["SnowflakeType"];
            splash?: string | null;
            system_channel_flags?: number | null;
            system_channel_id?: null | components["schemas"]["SnowflakeType"];
            verification_level?: null | components["schemas"]["VerificationLevels"];
        };
        GuildPreviewResponse: {
            /** Format: int32 */
            approximate_member_count: number;
            /** Format: int32 */
            approximate_presence_count: number;
            description: string | null;
            discovery_splash: string | null;
            emojis: components["schemas"]["EmojiResponse"][];
            features: components["schemas"]["GuildFeatures"][];
            home_header: string | null;
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            name: string;
            splash: string | null;
            stickers: components["schemas"]["GuildStickerResponse"][];
        };
        GuildProductPurchaseResponse: {
            listing_id: components["schemas"]["SnowflakeType"];
            product_name: string;
        };
        GuildPruneResponse: {
            /** Format: int32 */
            pruned: number | null;
        };
        GuildResponse: {
            afk_channel_id: null | components["schemas"]["SnowflakeType"];
            afk_timeout: components["schemas"]["AfkTimeouts"];
            application_id: null | components["schemas"]["SnowflakeType"];
            banner: string | null;
            default_message_notifications: components["schemas"]["UserNotificationSettings"];
            description: string | null;
            discovery_splash: string | null;
            emojis: components["schemas"]["EmojiResponse"][];
            explicit_content_filter: components["schemas"]["GuildExplicitContentFilterTypes"];
            features: components["schemas"]["GuildFeatures"][];
            home_header: string | null;
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            incidents_data: null | components["schemas"]["GuildIncidentsDataResponse"];
            /** Format: int32 */
            max_members: number;
            /** Format: int32 */
            max_presences: number | null;
            /** Format: int32 */
            max_stage_video_channel_users: number;
            /** Format: int32 */
            max_video_channel_users: number;
            mfa_level: components["schemas"]["GuildMFALevel"];
            name: string;
            nsfw: boolean;
            nsfw_level: components["schemas"]["GuildNSFWContentLevel"];
            owner_id: components["schemas"]["SnowflakeType"];
            preferred_locale: components["schemas"]["AvailableLocalesEnum"];
            premium_progress_bar_enabled: boolean;
            /** Format: date-time */
            premium_progress_bar_enabled_user_updated_at?: string | null;
            /** Format: int32 */
            premium_subscription_count: number;
            premium_tier: components["schemas"]["PremiumGuildTiers"];
            public_updates_channel_id: null | components["schemas"]["SnowflakeType"];
            region: string;
            roles: components["schemas"]["GuildRoleResponse"][];
            rules_channel_id: null | components["schemas"]["SnowflakeType"];
            safety_alerts_channel_id: null | components["schemas"]["SnowflakeType"];
            splash: string | null;
            stickers: components["schemas"]["GuildStickerResponse"][];
            /** Format: int32 */
            system_channel_flags: number;
            system_channel_id: null | components["schemas"]["SnowflakeType"];
            vanity_url_code: string | null;
            verification_level: components["schemas"]["VerificationLevels"];
            widget_channel_id: null | components["schemas"]["SnowflakeType"];
            widget_enabled: boolean;
        };
        GuildRoleColorsResponse: {
            /** Format: int32 */
            primary_color: number;
            /** Format: int32 */
            secondary_color: number | null;
            /** Format: int32 */
            tertiary_color: number | null;
        };
        GuildRoleResponse: {
            /** Format: int32 */
            color: number;
            colors: components["schemas"]["GuildRoleColorsResponse"];
            description: string | null;
            /** Format: int32 */
            flags: number;
            hoist: boolean;
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            managed: boolean;
            mentionable: boolean;
            name: string;
            permissions: string;
            /** Format: int32 */
            position: number;
            tags?: components["schemas"]["GuildRoleTagsResponse"];
            unicode_emoji: string | null;
        };
        GuildRoleTagsResponse: {
            available_for_purchase?: null;
            bot_id?: components["schemas"]["SnowflakeType"];
            guild_connections?: null;
            integration_id?: components["schemas"]["SnowflakeType"];
            premium_subscriber?: null;
            subscription_listing_id?: components["schemas"]["SnowflakeType"];
        };
        /** Format: int32 */
        GuildScheduledEventEntityTypes: number & (0 | 1 | 2 | 3);
        /** Format: int32 */
        GuildScheduledEventPrivacyLevels: number & 2;
        /** Format: int32 */
        GuildScheduledEventStatuses: number & (1 | 2 | 3 | 4);
        GuildSearchResponse: {
            /** Format: int32 */
            documents_indexed?: number | null;
            doing_deep_historical_index: boolean;
            members?: components["schemas"]["ThreadMemberResponse"][] | null;
            messages: components["schemas"]["SearchMessageResponse"][][];
            threads?: components["schemas"]["ThreadResponse"][] | null;
            /** Format: int32 */
            total_results: number;
        };
        GuildStickerResponse: {
            available: boolean;
            description: string | null;
            format_type: null | components["schemas"]["StickerFormatTypes"];
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            tags: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 2;
            user?: components["schemas"]["UserResponse"];
        };
        GuildSubscriptionIntegrationResponse: {
            account: components["schemas"]["AccountResponse"];
            enabled: boolean;
            id: components["schemas"]["SnowflakeType"];
            name: string | null;
            /** @enum {string} */
            type: "guild_subscription";
        };
        GuildTemplateChannelResponse: {
            available_tags: components["schemas"]["GuildTemplateChannelTags"][] | null;
            /** Format: int32 */
            bitrate: number;
            default_auto_archive_duration: null | components["schemas"]["ThreadAutoArchiveDuration"];
            default_forum_layout: null | components["schemas"]["ForumLayout"];
            default_reaction_emoji: null | components["schemas"]["DefaultReactionEmojiResponse"];
            default_sort_order: null | components["schemas"]["ThreadSortOrder"];
            default_tag_setting: null | components["schemas"]["ThreadSearchTagSetting"];
            /** Format: int32 */
            default_thread_rate_limit_per_user: number | null;
            icon_emoji: null | components["schemas"]["IconEmojiResponse"];
            /** Format: int32 */
            id: number | null;
            name: string | null;
            nsfw: boolean;
            parent_id: null | components["schemas"]["SnowflakeType"];
            permission_overwrites: components["schemas"]["ChannelPermissionOverwriteResponse"][];
            /** Format: int32 */
            position: number | null;
            /** Format: int32 */
            rate_limit_per_user: number;
            template: string;
            /** Format: int32 */
            theme_color: number | null;
            topic: string | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 0 | 2 | 4 | 15;
            /** Format: int32 */
            user_limit: number;
        };
        GuildTemplateChannelTags: {
            emoji_id: null | components["schemas"]["SnowflakeType"];
            emoji_name: string | null;
            /** Format: int32 */
            id: number | null;
            moderated: boolean | null;
            name: string;
        };
        GuildTemplateResponse: {
            code: string;
            /** Format: date-time */
            created_at: string;
            creator: null | components["schemas"]["UserResponse"];
            creator_id: components["schemas"]["SnowflakeType"];
            description: string | null;
            is_dirty: boolean | null;
            name: string;
            serialized_source_guild: components["schemas"]["GuildTemplateSnapshotResponse"];
            source_guild_id: components["schemas"]["SnowflakeType"];
            /** Format: date-time */
            updated_at: string;
            /** Format: int32 */
            usage_count: number;
        };
        GuildTemplateRoleColorsResponse: {
            /** Format: int32 */
            primary_color: number;
            /** Format: int32 */
            secondary_color: number | null;
            /** Format: int32 */
            tertiary_color: number | null;
        };
        GuildTemplateRoleResponse: {
            /** Format: int32 */
            color: number;
            colors: null | components["schemas"]["GuildTemplateRoleColorsResponse"];
            hoist: boolean;
            icon: string | null;
            /** Format: int32 */
            id: number;
            mentionable: boolean;
            name: string;
            permissions: string;
            unicode_emoji: string | null;
        };
        GuildTemplateSnapshotResponse: {
            afk_channel_id: null | components["schemas"]["SnowflakeType"];
            afk_timeout: components["schemas"]["AfkTimeouts"];
            channels: components["schemas"]["GuildTemplateChannelResponse"][];
            default_message_notifications: components["schemas"]["UserNotificationSettings"];
            description: string | null;
            explicit_content_filter: components["schemas"]["GuildExplicitContentFilterTypes"];
            name: string;
            preferred_locale: components["schemas"]["AvailableLocalesEnum"];
            region: string | null;
            roles: components["schemas"]["GuildTemplateRoleResponse"][];
            /** Format: int32 */
            system_channel_flags: number;
            system_channel_id: null | components["schemas"]["SnowflakeType"];
            verification_level: components["schemas"]["VerificationLevels"];
        };
        GuildWelcomeChannel: {
            channel_id: components["schemas"]["SnowflakeType"];
            description: string;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
        };
        GuildWelcomeScreenChannelResponse: {
            channel_id: components["schemas"]["SnowflakeType"];
            description: string;
            emoji_id: null | components["schemas"]["SnowflakeType"];
            emoji_name: string | null;
        };
        GuildWelcomeScreenResponse: {
            description: string | null;
            welcome_channels: components["schemas"]["GuildWelcomeScreenChannelResponse"][];
        };
        GuildWithCountsResponse: {
            afk_channel_id: null | components["schemas"]["SnowflakeType"];
            afk_timeout: components["schemas"]["AfkTimeouts"];
            application_id: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            approximate_member_count?: number | null;
            /** Format: int32 */
            approximate_presence_count?: number | null;
            banner: string | null;
            default_message_notifications: components["schemas"]["UserNotificationSettings"];
            description: string | null;
            discovery_splash: string | null;
            emojis: components["schemas"]["EmojiResponse"][];
            explicit_content_filter: components["schemas"]["GuildExplicitContentFilterTypes"];
            features: components["schemas"]["GuildFeatures"][];
            home_header: string | null;
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            incidents_data: null | components["schemas"]["GuildIncidentsDataResponse"];
            /** Format: int32 */
            max_members: number;
            /** Format: int32 */
            max_presences: number | null;
            /** Format: int32 */
            max_stage_video_channel_users: number;
            /** Format: int32 */
            max_video_channel_users: number;
            mfa_level: components["schemas"]["GuildMFALevel"];
            name: string;
            nsfw: boolean;
            nsfw_level: components["schemas"]["GuildNSFWContentLevel"];
            owner_id: components["schemas"]["SnowflakeType"];
            preferred_locale: components["schemas"]["AvailableLocalesEnum"];
            premium_progress_bar_enabled: boolean;
            /** Format: date-time */
            premium_progress_bar_enabled_user_updated_at?: string | null;
            /** Format: int32 */
            premium_subscription_count: number;
            premium_tier: components["schemas"]["PremiumGuildTiers"];
            public_updates_channel_id: null | components["schemas"]["SnowflakeType"];
            region: string;
            roles: components["schemas"]["GuildRoleResponse"][];
            rules_channel_id: null | components["schemas"]["SnowflakeType"];
            safety_alerts_channel_id: null | components["schemas"]["SnowflakeType"];
            splash: string | null;
            stickers: components["schemas"]["GuildStickerResponse"][];
            /** Format: int32 */
            system_channel_flags: number;
            system_channel_id: null | components["schemas"]["SnowflakeType"];
            vanity_url_code: string | null;
            verification_level: components["schemas"]["VerificationLevels"];
            widget_channel_id: null | components["schemas"]["SnowflakeType"];
            widget_enabled: boolean;
        };
        HasOption: string & ("link" | "embed" | "file" | "image" | "video" | "sound" | "sticker" | "poll" | "snapshot" | "-link" | "-embed" | "-file" | "-image" | "-video" | "-sound" | "-sticker" | "-poll" | "-snapshot");
        IconEmojiResponse: Record<string, never>;
        IncomingWebhookInteractionRequest: {
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            flags?: number | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
            tts?: boolean | null;
        };
        IncomingWebhookRequestPartial: {
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            applied_tags?: components["schemas"]["SnowflakeType"][] | null;
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            /** Format: uri */
            avatar_url?: string | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            flags?: number | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
            thread_name?: string | null;
            tts?: boolean | null;
            username?: string | null;
        };
        IncomingWebhookUpdateForInteractionCallbackRequestPartial: {
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            flags?: number | null;
        };
        IncomingWebhookUpdateRequestPartial: {
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            flags?: number | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
        };
        InnerErrors: {
            /** @description The list of errors for this field */
            _errors: components["schemas"]["Error"][];
        };
        /** Format: int64 */
        Int53Type: number;
        IntegrationApplicationResponse: {
            bot?: components["schemas"]["UserResponse"];
            cover_image?: string;
            description: string;
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            name: string;
            primary_sku_id?: components["schemas"]["SnowflakeType"];
            type: null | components["schemas"]["ApplicationTypes"];
        };
        /** Format: int32 */
        IntegrationExpireBehaviorTypes: number & (0 | 1);
        /** Format: int32 */
        IntegrationExpireGracePeriodTypes: number & (1 | 3 | 7 | 14 | 30);
        IntegrationTypes: string & ("discord" | "twitch" | "youtube" | "guild_subscription");
        InteractionApplicationCommandAutocompleteCallbackIntegerData: {
            choices?: (null | components["schemas"]["ApplicationCommandOptionIntegerChoice"])[] | null;
        };
        InteractionApplicationCommandAutocompleteCallbackNumberData: {
            choices?: (null | components["schemas"]["ApplicationCommandOptionNumberChoice"])[] | null;
        };
        InteractionApplicationCommandAutocompleteCallbackStringData: {
            choices?: (null | components["schemas"]["ApplicationCommandOptionStringChoice"])[] | null;
        };
        InteractionCallbackResponse: {
            interaction: components["schemas"]["InteractionResponse"];
            resource?: components["schemas"]["CreateMessageInteractionCallbackResponse"] | components["schemas"]["LaunchActivityInteractionCallbackResponse"] | components["schemas"]["UpdateMessageInteractionCallbackResponse"];
        };
        /** Format: int32 */
        InteractionCallbackTypes: number & (1 | 4 | 5 | 6 | 7 | 8 | 9 | 12 | 13);
        /** Format: int32 */
        InteractionContextType: number & (0 | 1 | 2);
        InteractionResponse: {
            channel_id?: components["schemas"]["SnowflakeType"];
            guild_id?: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            response_message_ephemeral?: boolean;
            response_message_id?: components["schemas"]["SnowflakeType"];
            response_message_loading?: boolean;
            type: components["schemas"]["InteractionTypes"];
        };
        /** Format: int32 */
        InteractionTypes: number & (1 | 2 | 3 | 4 | 5 | 6);
        InviteApplicationResponse: {
            bot?: components["schemas"]["UserResponse"];
            bot_public?: boolean;
            bot_require_code_grant?: boolean;
            cover_image?: string;
            /** Format: uri */
            custom_install_url?: string;
            description: string;
            /** Format: int32 */
            flags: number;
            flags_new: string;
            guild_id?: components["schemas"]["SnowflakeType"];
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            install_params?: components["schemas"]["ApplicationOAuth2InstallParamsResponse"];
            integration_types_config?: {
                [key: string]: components["schemas"]["ApplicationIntegrationTypeConfigurationResponse"];
            };
            /** Format: int32 */
            max_participants?: number | null;
            name: string;
            primary_sku_id?: components["schemas"]["SnowflakeType"];
            /** Format: uri */
            privacy_policy_url?: string;
            rpc_origins?: string[];
            slug?: string;
            tags?: string[];
            /** Format: uri */
            terms_of_service_url?: string;
            type: null | components["schemas"]["ApplicationTypes"];
            verify_key: string;
        };
        InviteChannelRecipientResponse: {
            username: string;
        };
        InviteChannelResponse: {
            icon?: string;
            id: components["schemas"]["SnowflakeType"];
            name: string | null;
            recipients?: components["schemas"]["InviteChannelRecipientResponse"][];
            type: components["schemas"]["ChannelTypes"];
        };
        InviteGuildResponse: {
            banner: string | null;
            description: string | null;
            features: components["schemas"]["GuildFeatures"][];
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            name: string;
            nsfw: boolean | null;
            nsfw_level: null | components["schemas"]["GuildNSFWContentLevel"];
            /** Format: int32 */
            premium_subscription_count: number;
            splash: string | null;
            vanity_url_code: string | null;
            verification_level: null | components["schemas"]["VerificationLevels"];
        };
        InviteGuildRoleResponse: {
            /** Format: int32 */
            color: number;
            colors: components["schemas"]["GuildRoleColorsResponse"];
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            name: string;
            permissions?: string;
            /** Format: int32 */
            position: number;
            unicode_emoji: string | null;
        };
        /** Format: int32 */
        InviteTargetTypes: number & (1 | 2 | 3);
        /** Format: int32 */
        InviteTypes: number & (0 | 1 | 2);
        KeywordRuleResponse: {
            actions: (components["schemas"]["BlockMessageActionResponse"] | components["schemas"]["FlagToChannelActionResponse"] | components["schemas"]["QuarantineUserActionResponse"] | components["schemas"]["UserCommunicationDisabledActionResponse"])[];
            creator_id: components["schemas"]["SnowflakeType"];
            enabled: boolean;
            event_type: components["schemas"]["AutomodEventType"];
            exempt_channels: components["schemas"]["SnowflakeType"][];
            exempt_roles: components["schemas"]["SnowflakeType"][];
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            trigger_metadata: components["schemas"]["KeywordTriggerMetadataResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 1;
        };
        KeywordTriggerMetadata: {
            allow_list?: string[] | null;
            keyword_filter?: string[] | null;
            regex_patterns?: string[] | null;
        };
        KeywordTriggerMetadataResponse: {
            allow_list: string[];
            keyword_filter: string[];
            regex_patterns: string[];
        };
        KeywordUpsertRequest: {
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            event_type: components["schemas"]["AutomodEventType"];
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            name: string;
            trigger_metadata?: null | components["schemas"]["KeywordTriggerMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 1;
        };
        KeywordUpsertRequestPartial: {
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            event_type?: components["schemas"]["AutomodEventType"];
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            name?: string;
            trigger_metadata?: null | components["schemas"]["KeywordTriggerMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type?: 1;
        };
        LabelComponentForModalRequest: {
            component: components["schemas"]["ChannelSelectComponentForModalRequest"] | components["schemas"]["CheckboxComponentForModalRequest"] | components["schemas"]["CheckboxGroupComponentForModalRequest"] | components["schemas"]["FileUploadComponentForModalRequest"] | components["schemas"]["MentionableSelectComponentForModalRequest"] | components["schemas"]["RadioGroupComponentForModalRequest"] | components["schemas"]["RoleSelectComponentForModalRequest"] | components["schemas"]["StringSelectComponentForModalRequest"] | components["schemas"]["TextInputComponentForModalRequest"] | components["schemas"]["UserSelectComponentForModalRequest"];
            description?: string | null;
            /** Format: int32 */
            id?: number | null;
            label: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 18;
        };
        LaunchActivityInteractionCallbackRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 12;
        };
        LaunchActivityInteractionCallbackResponse: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 12;
        };
        ListApplicationEmojisResponse: {
            items: components["schemas"]["EmojiResponse"][];
        };
        ListGuildSoundboardSoundsResponse: {
            items: components["schemas"]["SoundboardSoundResponse"][];
        };
        LobbyGuildInviteResponse: {
            code: string;
        };
        LobbyMemberRequest: {
            flags?: null | 1;
            id: components["schemas"]["SnowflakeType"];
            metadata?: {
                [key: string]: string;
            } | null;
        };
        LobbyMemberResponse: {
            /** Format: int32 */
            flags: number;
            id: components["schemas"]["SnowflakeType"];
            metadata: {
                [key: string]: string;
            } | null;
        };
        LobbyMessageResponse: {
            application_id?: components["schemas"]["SnowflakeType"];
            author: components["schemas"]["UserResponse"];
            channel_id: components["schemas"]["SnowflakeType"];
            content: string;
            /** Format: int32 */
            flags: number;
            id: components["schemas"]["SnowflakeType"];
            lobby_id: components["schemas"]["SnowflakeType"];
            metadata?: {
                [key: string]: string;
            };
            moderation_metadata?: {
                [key: string]: string;
            };
            type: components["schemas"]["MessageType"];
        };
        LobbyResponse: {
            application_id: components["schemas"]["SnowflakeType"];
            flags: components["schemas"]["UInt32Type"];
            id: components["schemas"]["SnowflakeType"];
            linked_channel?: components["schemas"]["GuildChannelResponse"];
            members: components["schemas"]["LobbyMemberResponse"][];
            metadata: {
                [key: string]: string;
            } | null;
            override_event_webhooks_url?: string | null;
        };
        MediaGalleryComponentForMessageRequest: {
            /** Format: int32 */
            id?: number | null;
            items: components["schemas"]["MediaGalleryItemRequest"][];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 12;
        };
        MediaGalleryComponentResponse: {
            /** Format: int32 */
            id: number;
            items: components["schemas"]["MediaGalleryItemResponse"][];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 12;
        };
        MediaGalleryItemRequest: {
            description?: string | null;
            media: components["schemas"]["UnfurledMediaRequest"];
            spoiler?: boolean | null;
        };
        MediaGalleryItemResponse: {
            description: string | null;
            media: components["schemas"]["UnfurledMediaResponse"];
            spoiler: boolean;
        };
        MentionableSelectComponentForMessageRequest: {
            custom_id: string;
            default_values?: (components["schemas"]["RoleSelectDefaultValue"] | components["schemas"]["UserSelectDefaultValue"])[] | null;
            disabled?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            placeholder?: string | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 7;
        };
        MentionableSelectComponentForModalRequest: {
            custom_id: string;
            default_values?: (components["schemas"]["RoleSelectDefaultValue"] | components["schemas"]["UserSelectDefaultValue"])[] | null;
            disabled?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            placeholder?: string | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 7;
        };
        MentionableSelectComponentResponse: {
            custom_id: string;
            default_values?: (components["schemas"]["RoleSelectDefaultValueResponse"] | components["schemas"]["UserSelectDefaultValueResponse"])[];
            disabled?: boolean;
            /** Format: int32 */
            id: number;
            /** Format: int32 */
            max_values: number;
            /** Format: int32 */
            min_values: number;
            placeholder?: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 7;
        };
        MentionSpamRuleResponse: {
            actions: (components["schemas"]["BlockMessageActionResponse"] | components["schemas"]["FlagToChannelActionResponse"] | components["schemas"]["QuarantineUserActionResponse"] | components["schemas"]["UserCommunicationDisabledActionResponse"])[];
            creator_id: components["schemas"]["SnowflakeType"];
            enabled: boolean;
            event_type: components["schemas"]["AutomodEventType"];
            exempt_channels: components["schemas"]["SnowflakeType"][];
            exempt_roles: components["schemas"]["SnowflakeType"][];
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            trigger_metadata: components["schemas"]["MentionSpamTriggerMetadataResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 5;
        };
        MentionSpamTriggerMetadata: {
            mention_raid_protection_enabled?: boolean | null;
            mention_total_limit?: number | null;
        };
        MentionSpamTriggerMetadataResponse: {
            mention_raid_protection_enabled: boolean;
            /** Format: int32 */
            mention_total_limit: number;
        };
        MentionSpamUpsertRequest: {
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            event_type: components["schemas"]["AutomodEventType"];
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            name: string;
            trigger_metadata?: null | components["schemas"]["MentionSpamTriggerMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 5;
        };
        MentionSpamUpsertRequestPartial: {
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            event_type?: components["schemas"]["AutomodEventType"];
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            name?: string;
            trigger_metadata?: null | components["schemas"]["MentionSpamTriggerMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type?: 5;
        };
        MessageActivityResponse: {
            party_id?: string;
            type: components["schemas"]["ActivityActionTypes"];
        };
        MessageAllowedMentionsRequest: {
            parse?: (null | components["schemas"]["AllowedMentionTypes"])[] | null;
            replied_user?: boolean | null;
            roles?: (null | components["schemas"]["SnowflakeType"])[] | null;
            users?: (null | components["schemas"]["SnowflakeType"])[] | null;
        };
        MessageAttachmentRequest: {
            description?: string | null;
            /** Format: double */
            duration_secs?: number | null;
            filename?: string | null;
            id: components["schemas"]["SnowflakeType"];
            is_remix?: boolean | null;
            title?: string | null;
            waveform?: string | null;
        };
        MessageAttachmentResponse: {
            application?: components["schemas"]["ApplicationResponse"];
            /** Format: date-time */
            clip_created_at?: string;
            clip_participants?: components["schemas"]["UserResponse"][];
            content_type?: string;
            description?: string;
            /** Format: double */
            duration_secs?: number;
            ephemeral?: boolean;
            filename: string;
            /** Format: int32 */
            flags?: number;
            /** Format: int32 */
            height?: number;
            id: components["schemas"]["SnowflakeType"];
            placeholder?: string;
            /** Format: int32 */
            placeholder_version?: number;
            /** Format: uri */
            proxy_url: string;
            /** Format: int32 */
            size: number;
            title?: string | null;
            /** Format: uri */
            url: string;
            waveform?: string;
            /** Format: int32 */
            width?: number;
        };
        MessageCallResponse: {
            /** Format: date-time */
            ended_timestamp?: string | null;
            participants: components["schemas"]["SnowflakeType"][];
        };
        MessageComponentInteractionMetadataResponse: {
            authorizing_integration_owners: {
                [key: string]: components["schemas"]["SnowflakeType"];
            };
            id: components["schemas"]["SnowflakeType"];
            interacted_message_id: components["schemas"]["SnowflakeType"];
            original_response_message_id?: components["schemas"]["SnowflakeType"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
            user?: components["schemas"]["UserResponse"];
        };
        /** Format: int32 */
        MessageComponentSeparatorSpacingSize: number & (1 | 2);
        /** Format: int32 */
        MessageComponentTypes: number & (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 17 | 18 | 19 | 21 | 22 | 23);
        MessageCreateRequest: {
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            enforce_nonce?: boolean | null;
            flags?: number | null;
            message_reference?: null | components["schemas"]["MessageReferenceRequest"];
            nonce?: number | string | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
            shared_client_theme?: null | components["schemas"]["CustomClientThemeShareRequest"];
            sticker_ids?: components["schemas"]["SnowflakeType"][] | null;
            tts?: boolean | null;
        };
        MessageEditRequestPartial: {
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            flags?: number | null;
            sticker_ids?: components["schemas"]["SnowflakeType"][] | null;
        };
        MessageEmbedAuthorResponse: {
            icon_url?: string;
            name: string;
            /** Format: uri */
            proxy_icon_url?: string;
            url?: string;
        };
        MessageEmbedFieldResponse: {
            inline: boolean;
            name: string;
            value: string;
        };
        MessageEmbedFooterResponse: {
            icon_url?: string;
            /** Format: uri */
            proxy_icon_url?: string;
            text: string;
        };
        MessageEmbedImageResponse: {
            content_type?: string;
            description?: string;
            flags?: components["schemas"]["UInt32Type"];
            height?: components["schemas"]["UInt32Type"];
            placeholder?: string;
            placeholder_version?: components["schemas"]["UInt32Type"];
            /** Format: uri */
            proxy_url?: string;
            url?: string;
            width?: components["schemas"]["UInt32Type"];
        };
        MessageEmbedProviderResponse: {
            name: string;
            /** Format: uri */
            url?: string;
        };
        MessageEmbedResponse: {
            author?: components["schemas"]["MessageEmbedAuthorResponse"];
            /** Format: int32 */
            color?: number;
            components?: components["schemas"]["ContainerComponentResponse"][];
            description?: string;
            fields?: components["schemas"]["MessageEmbedFieldResponse"][];
            /** Format: int32 */
            flags?: number | null;
            footer?: components["schemas"]["MessageEmbedFooterResponse"];
            image?: components["schemas"]["MessageEmbedImageResponse"];
            provider?: components["schemas"]["MessageEmbedProviderResponse"];
            thumbnail?: components["schemas"]["MessageEmbedImageResponse"];
            /** Format: date-time */
            timestamp?: string;
            title?: string;
            type: string;
            /** Format: uri */
            url?: string;
            video?: components["schemas"]["MessageEmbedVideoResponse"];
        };
        MessageEmbedVideoResponse: {
            content_type?: string;
            description?: string;
            flags?: components["schemas"]["UInt32Type"];
            height?: components["schemas"]["UInt32Type"];
            placeholder?: string;
            placeholder_version?: components["schemas"]["UInt32Type"];
            /** Format: uri */
            proxy_url?: string;
            url?: string;
            width?: components["schemas"]["UInt32Type"];
        };
        MessageInteractionResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            name_localized?: string;
            type: components["schemas"]["InteractionTypes"];
            user?: components["schemas"]["UserResponse"];
        };
        MessageMentionChannelResponse: {
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            type: components["schemas"]["ChannelTypes"];
        };
        MessageReactionCountDetailsResponse: {
            /** Format: int32 */
            burst: number;
            /** Format: int32 */
            normal: number;
        };
        MessageReactionEmojiResponse: {
            animated?: boolean;
            id: null | components["schemas"]["SnowflakeType"];
            name: string | null;
        };
        MessageReactionResponse: {
            burst_colors: string[];
            /** Format: int32 */
            count: number;
            count_details: components["schemas"]["MessageReactionCountDetailsResponse"];
            emoji: components["schemas"]["MessageReactionEmojiResponse"];
            me: boolean;
            me_burst: boolean;
        };
        MessageReferenceRequest: {
            channel_id?: null | components["schemas"]["SnowflakeType"];
            fail_if_not_exists?: boolean | null;
            guild_id?: null | components["schemas"]["SnowflakeType"];
            message_id: components["schemas"]["SnowflakeType"];
            type?: null | components["schemas"]["MessageReferenceType"];
        };
        MessageReferenceResponse: {
            channel_id: components["schemas"]["SnowflakeType"];
            guild_id?: components["schemas"]["SnowflakeType"];
            message_id?: components["schemas"]["SnowflakeType"];
            type: components["schemas"]["MessageReferenceType"];
        };
        /** Format: int32 */
        MessageReferenceType: number & 0;
        MessageResponse: {
            activity?: components["schemas"]["MessageActivityResponse"];
            application?: components["schemas"]["BasicApplicationResponse"];
            application_id?: components["schemas"]["SnowflakeType"];
            attachments: components["schemas"]["MessageAttachmentResponse"][];
            author: components["schemas"]["UserResponse"];
            call?: components["schemas"]["MessageCallResponse"];
            channel_id: components["schemas"]["SnowflakeType"];
            components: (components["schemas"]["ActionRowComponentResponse"] | components["schemas"]["ContainerComponentResponse"] | components["schemas"]["FileComponentResponse"] | components["schemas"]["MediaGalleryComponentResponse"] | components["schemas"]["SectionComponentResponse"] | components["schemas"]["SeparatorComponentResponse"] | components["schemas"]["TextDisplayComponentResponse"])[];
            content: string;
            /** Format: date-time */
            edited_timestamp: string | null;
            embeds: components["schemas"]["MessageEmbedResponse"][];
            /** Format: int32 */
            flags: number;
            id: components["schemas"]["SnowflakeType"];
            interaction?: components["schemas"]["MessageInteractionResponse"];
            interaction_metadata?: components["schemas"]["ApplicationCommandInteractionMetadataResponse"] | components["schemas"]["MessageComponentInteractionMetadataResponse"] | components["schemas"]["ModalSubmitInteractionMetadataResponse"];
            mention_channels?: components["schemas"]["MessageMentionChannelResponse"][];
            mention_everyone: boolean;
            mention_roles: components["schemas"]["SnowflakeType"][];
            mentions: components["schemas"]["UserResponse"][];
            message_reference?: components["schemas"]["MessageReferenceResponse"];
            message_snapshots?: components["schemas"]["MessageSnapshotResponse"][];
            nonce?: number | string;
            pinned: boolean;
            poll?: components["schemas"]["PollResponse"];
            /** Format: int32 */
            position?: number;
            purchase_notification?: components["schemas"]["PurchaseNotificationResponse"];
            reactions?: components["schemas"]["MessageReactionResponse"][];
            referenced_message?: null | components["schemas"]["BasicMessageResponse"];
            resolved?: components["schemas"]["ResolvedObjectsResponse"];
            role_subscription_data?: components["schemas"]["MessageRoleSubscriptionDataResponse"];
            shared_client_theme?: components["schemas"]["CustomClientThemeResponse"];
            sticker_items?: components["schemas"]["MessageStickerItemResponse"][];
            stickers?: (components["schemas"]["GuildStickerResponse"] | components["schemas"]["StandardStickerResponse"])[];
            thread?: components["schemas"]["ThreadResponse"];
            /** Format: date-time */
            timestamp: string;
            tts: boolean;
            type: components["schemas"]["MessageType"];
            webhook_id?: components["schemas"]["SnowflakeType"];
        };
        MessageRoleSubscriptionDataResponse: {
            is_renewal: boolean;
            role_subscription_listing_id: components["schemas"]["SnowflakeType"];
            tier_name: string;
            /** Format: int32 */
            total_months_subscribed: number;
        };
        /** Format: int32 */
        MessageShareCustomUserThemeBaseTheme: number & (0 | 1 | 2 | 3 | 4);
        MessageSnapshotResponse: {
            message: components["schemas"]["MinimalContentMessageResponse"];
        };
        MessageStickerItemResponse: {
            format_type: components["schemas"]["StickerFormatTypes"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
        };
        /** Format: int32 */
        MessageType: number & (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 46 | 55);
        /** Format: int32 */
        MetadataItemTypes: number & (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8);
        MinimalContentMessageResponse: {
            attachments: components["schemas"]["MessageAttachmentResponse"][];
            components: (components["schemas"]["ActionRowComponentResponse"] | components["schemas"]["ContainerComponentResponse"] | components["schemas"]["FileComponentResponse"] | components["schemas"]["MediaGalleryComponentResponse"] | components["schemas"]["SectionComponentResponse"] | components["schemas"]["SeparatorComponentResponse"] | components["schemas"]["TextDisplayComponentResponse"])[];
            content: string;
            /** Format: date-time */
            edited_timestamp: string | null;
            embeds: components["schemas"]["MessageEmbedResponse"][];
            /** Format: int32 */
            flags: number;
            mention_roles: components["schemas"]["SnowflakeType"][];
            mentions: components["schemas"]["UserResponse"][];
            sticker_items?: components["schemas"]["MessageStickerItemResponse"][];
            stickers?: (components["schemas"]["GuildStickerResponse"] | components["schemas"]["StandardStickerResponse"])[];
            /** Format: date-time */
            timestamp: string;
            type: components["schemas"]["MessageType"];
        };
        MLSpamRuleResponse: {
            actions: (components["schemas"]["BlockMessageActionResponse"] | components["schemas"]["FlagToChannelActionResponse"] | components["schemas"]["QuarantineUserActionResponse"] | components["schemas"]["UserCommunicationDisabledActionResponse"])[];
            creator_id: components["schemas"]["SnowflakeType"];
            enabled: boolean;
            event_type: components["schemas"]["AutomodEventType"];
            exempt_channels: components["schemas"]["SnowflakeType"][];
            exempt_roles: components["schemas"]["SnowflakeType"][];
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            trigger_metadata: components["schemas"]["MLSpamTriggerMetadataResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 3;
        };
        MLSpamTriggerMetadata: Record<string, never>;
        MLSpamTriggerMetadataResponse: Record<string, never>;
        MLSpamUpsertRequest: {
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            event_type: components["schemas"]["AutomodEventType"];
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            name: string;
            trigger_metadata?: null | components["schemas"]["MLSpamTriggerMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 3;
        };
        MLSpamUpsertRequestPartial: {
            actions?: (components["schemas"]["BlockMessageAction"] | components["schemas"]["FlagToChannelAction"] | components["schemas"]["QuarantineUserAction"] | components["schemas"]["UserCommunicationDisabledAction"])[] | null;
            enabled?: boolean | null;
            event_type?: components["schemas"]["AutomodEventType"];
            exempt_channels?: components["schemas"]["SnowflakeType"][] | null;
            exempt_roles?: components["schemas"]["SnowflakeType"][] | null;
            name?: string;
            trigger_metadata?: null | components["schemas"]["MLSpamTriggerMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type?: 3;
        };
        ModalInteractionCallbackRequest: {
            data: components["schemas"]["ModalInteractionCallbackRequestData"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 9;
        };
        ModalInteractionCallbackRequestData: {
            components: (components["schemas"]["ActionRowComponentForModalRequest"] | components["schemas"]["LabelComponentForModalRequest"] | components["schemas"]["TextDisplayComponentForModalRequest"])[];
            custom_id: string;
            title: string;
        };
        ModalSubmitInteractionMetadataResponse: {
            authorizing_integration_owners: {
                [key: string]: components["schemas"]["SnowflakeType"];
            };
            id: components["schemas"]["SnowflakeType"];
            original_response_message_id?: components["schemas"]["SnowflakeType"];
            triggering_interaction_metadata: components["schemas"]["ApplicationCommandInteractionMetadataResponse"] | components["schemas"]["MessageComponentInteractionMetadataResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 5;
            user?: components["schemas"]["UserResponse"];
        };
        MultipleChoiceFormFieldResponse: {
            /** @description Choices applicant can select from */
            choices: string[];
            /** @description Optional helper text shown below label */
            description?: string;
            /**
             * @description Type of form field
             * @enum {string}
             */
            field_type: "MULTIPLE_CHOICE";
            /** @description Label shown above field */
            label?: string;
            /** @description Whether applicant must fill in field */
            required?: boolean;
            /**
             * Format: int32
             * @description Index of choice selected by applicant
             */
            response?: number;
        };
        MyGuildResponse: {
            /** Format: int32 */
            approximate_member_count?: number | null;
            /** Format: int32 */
            approximate_presence_count?: number | null;
            banner: string | null;
            features: components["schemas"]["GuildFeatures"][];
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            name: string;
            owner: boolean;
            permissions: string;
        };
        NameplatePalette: string;
        NewMemberActionResponse: {
            action_type: components["schemas"]["NewMemberActionType"];
            channel_id: components["schemas"]["SnowflakeType"];
            description: string;
            emoji?: components["schemas"]["SettingsEmojiResponse"];
            icon?: string;
            title: string;
        };
        /** Format: int32 */
        NewMemberActionType: number & (0 | 1);
        OAuth2GetAuthorizationResponse: {
            application: components["schemas"]["ApplicationResponse"];
            /** Format: date-time */
            expires: string;
            scopes: components["schemas"]["OAuth2Scopes"][];
            user?: components["schemas"]["UserResponse"];
        };
        OAuth2GetKeys: {
            keys: components["schemas"]["OAuth2Key"][];
        };
        OAuth2GetOpenIDConnectUserInfoResponse: {
            email?: string | null;
            email_verified?: boolean;
            locale?: string;
            nickname?: string | null;
            picture?: string;
            preferred_username?: string;
            sub: string;
        };
        OAuth2Key: {
            alg: string;
            e: string;
            kid: string;
            kty: string;
            n: string;
            use: string;
        };
        OAuth2Scopes: string & ("identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "bot" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.permissions.update" | "applications.commands.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "activities.invites.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write" | "openid");
        OnboardingPromptOptionRequest: {
            channel_ids?: components["schemas"]["SnowflakeType"][] | null;
            description?: string | null;
            emoji_animated?: boolean | null;
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
            id?: null | components["schemas"]["SnowflakeType"];
            role_ids?: components["schemas"]["SnowflakeType"][] | null;
            title: string;
        };
        OnboardingPromptOptionResponse: {
            channel_ids: components["schemas"]["SnowflakeType"][];
            description: string;
            emoji: components["schemas"]["SettingsEmojiResponse"];
            id: components["schemas"]["SnowflakeType"];
            role_ids: components["schemas"]["SnowflakeType"][];
            title: string;
        };
        OnboardingPromptResponse: {
            id: components["schemas"]["SnowflakeType"];
            in_onboarding: boolean;
            options: components["schemas"]["OnboardingPromptOptionResponse"][];
            required: boolean;
            single_select: boolean;
            title: string;
            type: components["schemas"]["OnboardingPromptType"];
        };
        /** Format: int32 */
        OnboardingPromptType: number & (0 | 1);
        ParagraphFormFieldResponse: {
            /** @description Optional helper text shown below label */
            description?: string;
            /**
             * @description Type of form field
             * @enum {string}
             */
            field_type: "PARAGRAPH";
            /** @description Label shown above field */
            label?: string;
            /** @description Placeholder text shown in empty input */
            placeholder?: string;
            /** @description Whether applicant must fill in field */
            required?: boolean;
            /** @description Applicant's text response */
            response?: string;
        };
        PartialDiscordIntegrationResponse: {
            account: components["schemas"]["AccountResponse"];
            application_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string | null;
            /** @enum {string} */
            type: "discord";
        };
        PartialExternalConnectionIntegrationResponse: {
            account: components["schemas"]["AccountResponse"];
            id: components["schemas"]["SnowflakeType"];
            name: string | null;
            /** @enum {string} */
            type: "twitch" | "youtube";
        };
        PartialGuildSubscriptionIntegrationResponse: {
            account: components["schemas"]["AccountResponse"];
            id: components["schemas"]["SnowflakeType"];
            name: string | null;
            /** @enum {string} */
            type: "guild_subscription";
        };
        PinnedMessageResponse: {
            message: components["schemas"]["MessageResponse"];
            /** Format: date-time */
            pinned_at: string;
        };
        PinnedMessagesResponse: {
            has_more: boolean;
            items: components["schemas"]["PinnedMessageResponse"][];
        };
        PollAnswerCreateRequest: {
            poll_media: components["schemas"]["PollMediaCreateRequest"];
        };
        PollAnswerDetailsResponse: {
            users: components["schemas"]["UserResponse"][];
        };
        PollAnswerResponse: {
            /** Format: int32 */
            answer_id: number;
            poll_media: components["schemas"]["PollMediaResponse"];
        };
        PollCreateRequest: {
            allow_multiselect?: boolean | null;
            answers: components["schemas"]["PollAnswerCreateRequest"][];
            /** Format: int32 */
            duration?: number | null;
            layout_type?: null | components["schemas"]["PollLayoutTypes"];
            question: components["schemas"]["PollMedia"];
        };
        PollEmoji: {
            animated?: boolean | null;
            id?: null | components["schemas"]["SnowflakeType"];
            name?: string | null;
        };
        PollEmojiCreateRequest: {
            animated?: boolean | null;
            id?: null | components["schemas"]["SnowflakeType"];
            name?: string | null;
        };
        /** Format: int32 */
        PollLayoutTypes: number;
        PollMedia: {
            emoji?: null | components["schemas"]["PollEmoji"];
            text?: string | null;
        };
        PollMediaCreateRequest: {
            emoji?: null | components["schemas"]["PollEmojiCreateRequest"];
            text?: string | null;
        };
        PollMediaResponse: {
            emoji?: components["schemas"]["MessageReactionEmojiResponse"];
            text?: string;
        };
        PollResponse: {
            allow_multiselect: boolean;
            answers: components["schemas"]["PollAnswerResponse"][];
            /** Format: date-time */
            expiry: string;
            layout_type: components["schemas"]["PollLayoutTypes"];
            question: components["schemas"]["PollMediaResponse"];
            results: components["schemas"]["PollResultsResponse"];
        };
        PollResultsEntryResponse: {
            /** Format: int32 */
            count: number;
            /** Format: int32 */
            id: number;
            me_voted: boolean;
        };
        PollResultsResponse: {
            answer_counts: components["schemas"]["PollResultsEntryResponse"][];
            is_finalized: boolean;
        };
        PongInteractionCallbackRequest: {
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        /** Format: int32 */
        PremiumGuildTiers: number & (0 | 1 | 2 | 3);
        /** Format: int32 */
        PremiumTypes: number & (0 | 1 | 2 | 3);
        PrivateApplicationResponse: {
            /** Format: int32 */
            approximate_guild_count: number;
            /** Format: int32 */
            approximate_user_authorization_count: number;
            /** Format: int32 */
            approximate_user_install_count: number;
            bot?: components["schemas"]["UserResponse"];
            bot_public?: boolean;
            bot_require_code_grant?: boolean;
            cover_image?: string;
            /** Format: uri */
            custom_install_url?: string;
            description: string;
            event_webhooks_status?: components["schemas"]["ApplicationEventWebhooksStatus"];
            event_webhooks_types?: ("APPLICATION_AUTHORIZED" | "APPLICATION_DEAUTHORIZED" | "ENTITLEMENT_CREATE" | "ENTITLEMENT_DELETE" | "ENTITLEMENT_UPDATE" | "GAME_DIRECT_MESSAGE_CREATE" | "GAME_DIRECT_MESSAGE_DELETE" | "GAME_DIRECT_MESSAGE_UPDATE" | "LOBBY_MESSAGE_CREATE" | "LOBBY_MESSAGE_DELETE" | "LOBBY_MESSAGE_UPDATE" | "QUEST_USER_ENROLLMENT")[];
            /** Format: uri */
            event_webhooks_url?: string | null;
            explicit_content_filter: components["schemas"]["ApplicationExplicitContentFilterTypes"];
            /** Format: int32 */
            flags: number;
            flags_new: string;
            guild_id?: components["schemas"]["SnowflakeType"];
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            install_params?: components["schemas"]["ApplicationOAuth2InstallParamsResponse"];
            integration_types_config?: {
                [key: string]: components["schemas"]["ApplicationIntegrationTypeConfigurationResponse"];
            };
            /** Format: uri */
            interactions_endpoint_url: string | null;
            /** Format: int32 */
            max_participants?: number | null;
            name: string;
            owner: components["schemas"]["UserResponse"];
            primary_sku_id?: components["schemas"]["SnowflakeType"];
            /** Format: uri */
            privacy_policy_url?: string;
            redirect_uris: string[];
            /** Format: uri */
            role_connections_verification_url: string | null;
            rpc_origins?: string[];
            slug?: string;
            tags?: string[];
            team: null | components["schemas"]["TeamResponse"];
            /** Format: uri */
            terms_of_service_url?: string;
            type: null | components["schemas"]["ApplicationTypes"];
            verify_key: string;
        };
        PrivateChannelLocation: {
            channel_id: components["schemas"]["SnowflakeType"];
            id: string;
            /** @enum {string} */
            kind: "pc";
        };
        PrivateChannelResponse: {
            /** Format: int32 */
            flags: number;
            id: components["schemas"]["SnowflakeType"];
            last_message_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: date-time */
            last_pin_timestamp?: string | null;
            recipients: components["schemas"]["UserResponse"][];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        PrivateGroupChannelResponse: {
            application_id?: components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            flags: number;
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            last_message_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: date-time */
            last_pin_timestamp?: string | null;
            managed?: boolean;
            name: string | null;
            owner_id: components["schemas"]["SnowflakeType"];
            recipients: components["schemas"]["UserResponse"][];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
        };
        PrivateGuildMemberResponse: {
            avatar: string | null;
            avatar_decoration_data?: null | components["schemas"]["UserAvatarDecorationResponse"];
            banner: string | null;
            collectibles?: null | components["schemas"]["UserCollectiblesResponse"];
            /** Format: date-time */
            communication_disabled_until: string | null;
            deaf: boolean;
            /** Format: int32 */
            flags: number;
            /** Format: date-time */
            joined_at: string;
            mute: boolean;
            nick: string | null;
            pending: boolean;
            permissions?: string;
            /** Format: date-time */
            premium_since: string | null;
            roles: components["schemas"]["SnowflakeType"][];
            user: components["schemas"]["UserResponse"];
        };
        ProvisionalTokenResponse: {
            access_token: string;
            /** Format: int32 */
            expires_at_s?: number | null;
            /** Format: int32 */
            expires_in: number;
            id_token: string;
            refresh_token?: string | null;
            scope: string;
            scopes?: string[] | null;
            token_type: string;
        };
        PruneGuildRequest: {
            compute_prune_count?: boolean | null;
            days?: number | null;
            include_roles?: string | components["schemas"]["SnowflakeType"][] | null;
        };
        PurchaseNotificationResponse: {
            guild_product_purchase?: components["schemas"]["GuildProductPurchaseResponse"];
            type: components["schemas"]["PurchaseType"];
        };
        /** Format: int32 */
        PurchaseType: number & 0;
        QuarantineUserAction: {
            metadata?: null | components["schemas"]["QuarantineUserActionMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
        };
        QuarantineUserActionMetadata: Record<string, never>;
        QuarantineUserActionMetadataResponse: Record<string, never>;
        QuarantineUserActionResponse: {
            metadata: components["schemas"]["QuarantineUserActionMetadataResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
        };
        RadioGroupComponentForModalRequest: {
            custom_id: string;
            /** Format: int32 */
            id?: number | null;
            options: components["schemas"]["RadioGroupOptionForRequest"][];
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 21;
        };
        RadioGroupOptionForRequest: {
            default?: boolean | null;
            description?: string | null;
            label: string;
            value: string;
        };
        /** @description Ratelimit error object returned by the Discord API */
        RatelimitedResponse: components["schemas"]["Error"] & {
            /** @description Whether you are being ratelimited by the global ratelimit or a per-endpoint ratelimit */
            global: boolean;
            /** @description The number of seconds to wait before retrying your request */
            retry_after: number;
        };
        /** Format: int32 */
        ReactionTypes: number & (0 | 1);
        ResolvedObjectsResponse: {
            channels?: {
                [key: string]: components["schemas"]["GuildChannelResponse"] | components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"] | components["schemas"]["ThreadResponse"];
            } | null;
            members?: {
                [key: string]: components["schemas"]["BasicGuildMemberResponse"];
            } | null;
            roles?: {
                [key: string]: components["schemas"]["GuildRoleResponse"];
            } | null;
            users?: {
                [key: string]: components["schemas"]["UserResponse"];
            } | null;
        };
        ResourceChannelResponse: {
            channel_id: components["schemas"]["SnowflakeType"];
            description: string;
            emoji?: components["schemas"]["SettingsEmojiResponse"];
            icon?: string;
            title: string;
        };
        RichEmbed: {
            author?: null | components["schemas"]["RichEmbedAuthor"];
            color?: number | null;
            description?: string | null;
            fields?: components["schemas"]["RichEmbedField"][] | null;
            footer?: null | components["schemas"]["RichEmbedFooter"];
            image?: null | components["schemas"]["RichEmbedImage"];
            provider?: null | components["schemas"]["RichEmbedProvider"];
            thumbnail?: null | components["schemas"]["RichEmbedThumbnail"];
            /** Format: date-time */
            timestamp?: string | null;
            title?: string | null;
            type?: string | null;
            /** Format: uri */
            url?: string | null;
            video?: null | components["schemas"]["RichEmbedVideo"];
        };
        RichEmbedAuthor: {
            /** Format: uri */
            icon_url?: string | null;
            name?: string | null;
            /** Format: uri */
            url?: string | null;
        };
        RichEmbedField: {
            inline?: boolean | null;
            name: string;
            value: string;
        };
        RichEmbedFooter: {
            /** Format: uri */
            icon_url?: string | null;
            text?: string | null;
        };
        RichEmbedImage: {
            description?: string | null;
            height?: number | null;
            is_animated?: boolean | null;
            placeholder?: string | null;
            placeholder_version?: number | null;
            /** Format: uri */
            url?: string | null;
            width?: number | null;
        };
        RichEmbedProvider: {
            name?: string | null;
            /** Format: uri */
            url?: string | null;
        };
        RichEmbedThumbnail: {
            description?: string | null;
            height?: number | null;
            is_animated?: boolean | null;
            placeholder?: string | null;
            placeholder_version?: number | null;
            /** Format: uri */
            url?: string | null;
            width?: number | null;
        };
        RichEmbedVideo: {
            description?: string | null;
            height?: number | null;
            is_animated?: boolean | null;
            placeholder?: string | null;
            placeholder_version?: number | null;
            /** Format: uri */
            url?: string | null;
            width?: number | null;
        };
        RoleColors: {
            primary_color?: number | null;
            secondary_color?: number | null;
            tertiary_color?: number | null;
        };
        RoleSelectComponentForMessageRequest: {
            custom_id: string;
            default_values?: components["schemas"]["RoleSelectDefaultValue"][] | null;
            disabled?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            placeholder?: string | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 6;
        };
        RoleSelectComponentForModalRequest: {
            custom_id: string;
            default_values?: components["schemas"]["RoleSelectDefaultValue"][] | null;
            disabled?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            placeholder?: string | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 6;
        };
        RoleSelectComponentResponse: {
            custom_id: string;
            default_values?: components["schemas"]["RoleSelectDefaultValueResponse"][];
            disabled?: boolean;
            /** Format: int32 */
            id: number;
            /** Format: int32 */
            max_values: number;
            /** Format: int32 */
            min_values: number;
            placeholder?: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 6;
        };
        RoleSelectDefaultValue: {
            id: components["schemas"]["SnowflakeType"];
            /** @enum {string} */
            type: "role";
        };
        RoleSelectDefaultValueResponse: {
            id: components["schemas"]["SnowflakeType"];
            /** @enum {string} */
            type: "role";
        };
        ScheduledEventResponse: {
            channel_id: null | components["schemas"]["SnowflakeType"];
            creator?: components["schemas"]["UserResponse"];
            creator_id: null | components["schemas"]["SnowflakeType"];
            description: string | null;
            entity_id: null | components["schemas"]["SnowflakeType"];
            entity_type: components["schemas"]["GuildScheduledEventEntityTypes"];
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            image: string | null;
            name: string;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /** Format: date-time */
            scheduled_end_time: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
            status: components["schemas"]["GuildScheduledEventStatuses"];
            /** Format: int32 */
            user_count?: number;
            user_rsvp?: null | components["schemas"]["ScheduledEventUserResponse"];
        };
        ScheduledEventUserResponse: {
            guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            member?: components["schemas"]["GuildMemberResponse"];
            user?: components["schemas"]["UserResponse"];
            user_id: components["schemas"]["SnowflakeType"];
        };
        SDKMessageRequest: {
            allowed_mentions?: null | components["schemas"]["MessageAllowedMentionsRequest"];
            attachments?: components["schemas"]["MessageAttachmentRequest"][] | null;
            components?: (components["schemas"]["ActionRowComponentForMessageRequest"] | components["schemas"]["ContainerComponentForMessageRequest"] | components["schemas"]["FileComponentForMessageRequest"] | components["schemas"]["MediaGalleryComponentForMessageRequest"] | components["schemas"]["SectionComponentForMessageRequest"] | components["schemas"]["SeparatorComponentForMessageRequest"] | components["schemas"]["TextDisplayComponentForMessageRequest"])[] | null;
            content?: string | null;
            embeds?: components["schemas"]["RichEmbed"][] | null;
            enforce_nonce?: boolean | null;
            flags?: number | null;
            message_reference?: null | components["schemas"]["MessageReferenceRequest"];
            nonce?: number | string | null;
            poll?: null | components["schemas"]["PollCreateRequest"];
            shared_client_theme?: null | components["schemas"]["CustomClientThemeShareRequest"];
            sticker_ids?: components["schemas"]["SnowflakeType"][] | null;
            tts?: boolean | null;
        };
        SearchableEmbedType: string & ("image" | "video" | "gif" | "sound" | "article");
        SearchIndexNotReadyResponse: {
            /** Format: int32 */
            code: number;
            /** Format: int32 */
            documents_indexed: number;
            message: string;
            /** Format: int32 */
            retry_after: number;
        };
        SearchMessageResponse: {
            activity?: components["schemas"]["MessageActivityResponse"];
            application?: components["schemas"]["BasicApplicationResponse"];
            application_id?: components["schemas"]["SnowflakeType"];
            attachments: components["schemas"]["MessageAttachmentResponse"][];
            author: components["schemas"]["UserResponse"];
            call?: components["schemas"]["MessageCallResponse"];
            channel_id: components["schemas"]["SnowflakeType"];
            components: (components["schemas"]["ActionRowComponentResponse"] | components["schemas"]["ContainerComponentResponse"] | components["schemas"]["FileComponentResponse"] | components["schemas"]["MediaGalleryComponentResponse"] | components["schemas"]["SectionComponentResponse"] | components["schemas"]["SeparatorComponentResponse"] | components["schemas"]["TextDisplayComponentResponse"])[];
            content: string;
            /** Format: date-time */
            edited_timestamp: string | null;
            embeds: components["schemas"]["MessageEmbedResponse"][];
            /** Format: int32 */
            flags: number;
            hit: boolean;
            id: components["schemas"]["SnowflakeType"];
            interaction?: components["schemas"]["MessageInteractionResponse"];
            interaction_metadata?: components["schemas"]["ApplicationCommandInteractionMetadataResponse"] | components["schemas"]["MessageComponentInteractionMetadataResponse"] | components["schemas"]["ModalSubmitInteractionMetadataResponse"];
            mention_channels?: components["schemas"]["MessageMentionChannelResponse"][];
            mention_everyone: boolean;
            mention_roles: components["schemas"]["SnowflakeType"][];
            mentions: components["schemas"]["UserResponse"][];
            message_reference?: components["schemas"]["MessageReferenceResponse"];
            message_snapshots?: components["schemas"]["MessageSnapshotResponse"][];
            nonce?: number | string;
            pinned: boolean;
            poll?: components["schemas"]["PollResponse"];
            /** Format: int32 */
            position?: number;
            purchase_notification?: components["schemas"]["PurchaseNotificationResponse"];
            reactions?: components["schemas"]["MessageReactionResponse"][];
            referenced_message?: null | components["schemas"]["BasicMessageResponse"];
            resolved?: components["schemas"]["ResolvedObjectsResponse"];
            role_subscription_data?: components["schemas"]["MessageRoleSubscriptionDataResponse"];
            shared_client_theme?: components["schemas"]["CustomClientThemeResponse"];
            sticker_items?: components["schemas"]["MessageStickerItemResponse"][];
            stickers?: (components["schemas"]["GuildStickerResponse"] | components["schemas"]["StandardStickerResponse"])[];
            thread?: components["schemas"]["ThreadResponse"];
            /** Format: date-time */
            timestamp: string;
            tts: boolean;
            type: components["schemas"]["MessageType"];
            webhook_id?: components["schemas"]["SnowflakeType"];
        };
        SectionComponentForMessageRequest: {
            accessory: components["schemas"]["ButtonComponentForMessageRequest"] | components["schemas"]["ThumbnailComponentForMessageRequest"];
            components: components["schemas"]["TextDisplayComponentForMessageRequest"][];
            /** Format: int32 */
            id?: number | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 9;
        };
        SectionComponentResponse: {
            accessory: components["schemas"]["ButtonComponentResponse"] | components["schemas"]["ThumbnailComponentResponse"];
            components: components["schemas"]["TextDisplayComponentResponse"][];
            /** Format: int32 */
            id: number;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 9;
        };
        SeparatorComponentForMessageRequest: {
            divider?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            spacing?: null | components["schemas"]["MessageComponentSeparatorSpacingSize"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 14;
        };
        SeparatorComponentResponse: {
            divider: boolean;
            /** Format: int32 */
            id: number;
            spacing: components["schemas"]["MessageComponentSeparatorSpacingSize"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 14;
        };
        SettingsEmojiResponse: {
            animated: boolean;
            id: null | components["schemas"]["SnowflakeType"];
            name: string | null;
        };
        /** Format: int32 */
        SKUIneligibilityReason: number & (0 | 1 | 2);
        SlackWebhook: {
            attachments?: components["schemas"]["WebhookSlackEmbed"][] | null;
            /** Format: uri */
            icon_url?: string | null;
            text?: string | null;
            username?: string | null;
        };
        SnowflakeSelectDefaultValueTypes: string & ("user" | "role" | "channel");
        /** Format: snowflake */
        SnowflakeType: string;
        SocialLayerSKUPurchaseEligibilityCallbackData: {
            eligible: boolean;
            ineligible_reason?: null | components["schemas"]["SKUIneligibilityReason"];
            ineligible_reason_description?: string | null;
        };
        SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest: {
            data: components["schemas"]["SocialLayerSKUPurchaseEligibilityCallbackData"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 13;
        };
        SortingMode: string & ("relevance" | "timestamp");
        SortingOrder: string & ("asc" | "desc");
        SoundboardCreateRequest: {
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
            name: string;
            sound: string;
            /** Format: double */
            volume?: number | null;
        };
        SoundboardPatchRequestPartial: {
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
            name?: string;
            /** Format: double */
            volume?: number | null;
        };
        SoundboardSoundResponse: {
            available: boolean;
            emoji_id: null | components["schemas"]["SnowflakeType"];
            emoji_name: string | null;
            guild_id?: components["schemas"]["SnowflakeType"];
            name: string;
            sound_id: components["schemas"]["SnowflakeType"];
            user?: components["schemas"]["UserResponse"];
            /** Format: double */
            volume: number;
        };
        SoundboardSoundSendRequest: {
            sound_id: components["schemas"]["SnowflakeType"];
            source_guild_id?: null | components["schemas"]["SnowflakeType"];
        };
        SpamLinkRuleResponse: {
            actions: (components["schemas"]["BlockMessageActionResponse"] | components["schemas"]["FlagToChannelActionResponse"] | components["schemas"]["QuarantineUserActionResponse"] | components["schemas"]["UserCommunicationDisabledActionResponse"])[];
            creator_id: components["schemas"]["SnowflakeType"];
            enabled: boolean;
            event_type: components["schemas"]["AutomodEventType"];
            exempt_channels: components["schemas"]["SnowflakeType"][];
            exempt_roles: components["schemas"]["SnowflakeType"][];
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            trigger_metadata: components["schemas"]["SpamLinkTriggerMetadataResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            trigger_type: 2;
        };
        SpamLinkTriggerMetadataResponse: Record<string, never>;
        StageInstanceResponse: {
            channel_id: components["schemas"]["SnowflakeType"];
            discoverable_disabled: boolean;
            guild_id: components["schemas"]["SnowflakeType"];
            guild_scheduled_event_id: null | components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            privacy_level: components["schemas"]["StageInstancesPrivacyLevels"];
            topic: string;
        };
        /** Format: int32 */
        StageInstancesPrivacyLevels: number & (1 | 2);
        StageScheduledEventCreateRequest: {
            channel_id?: null | components["schemas"]["SnowflakeType"];
            description?: string | null;
            entity_metadata?: null | components["schemas"]["EntityMetadataStageInstance"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 1;
            image?: string | null;
            name: string;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /** Format: date-time */
            scheduled_end_time?: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
        };
        StageScheduledEventPatchRequestPartial: {
            channel_id?: null | components["schemas"]["SnowflakeType"];
            description?: string | null;
            entity_metadata?: null | components["schemas"]["EntityMetadataStageInstance"];
            entity_type?: null | 1;
            image?: string | null;
            name?: string;
            privacy_level?: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /** Format: date-time */
            scheduled_end_time?: string | null;
            /** Format: date-time */
            scheduled_start_time?: string;
            status?: null | components["schemas"]["GuildScheduledEventStatuses"];
        };
        StageScheduledEventResponse: {
            channel_id: null | components["schemas"]["SnowflakeType"];
            creator?: components["schemas"]["UserResponse"];
            creator_id: null | components["schemas"]["SnowflakeType"];
            description: string | null;
            entity_id: null | components["schemas"]["SnowflakeType"];
            entity_metadata: null | components["schemas"]["EntityMetadataStageInstanceResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 1;
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            image: string | null;
            name: string;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /** Format: date-time */
            scheduled_end_time: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
            status: components["schemas"]["GuildScheduledEventStatuses"];
            /** Format: int32 */
            user_count?: number;
            user_rsvp?: null | components["schemas"]["ScheduledEventUserResponse"];
        };
        StandardStickerResponse: {
            description: string | null;
            format_type: null | components["schemas"]["StickerFormatTypes"];
            id: components["schemas"]["SnowflakeType"];
            name: string;
            pack_id: components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            sort_value: number;
            tags: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 1;
        };
        /** Format: int32 */
        StickerFormatTypes: number & (1 | 2 | 3 | 4);
        StickerPackCollectionResponse: {
            sticker_packs: components["schemas"]["StickerPackResponse"][];
        };
        StickerPackResponse: {
            banner_asset_id?: components["schemas"]["SnowflakeType"];
            cover_sticker_id?: components["schemas"]["SnowflakeType"];
            description: string | null;
            id: components["schemas"]["SnowflakeType"];
            name: string;
            sku_id: components["schemas"]["SnowflakeType"];
            stickers: components["schemas"]["StandardStickerResponse"][];
        };
        /** Format: int32 */
        StickerTypes: number & (1 | 2);
        StringSelectComponentForMessageRequest: {
            custom_id: string;
            disabled?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            options: components["schemas"]["StringSelectOptionForRequest"][];
            placeholder?: string | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
        };
        StringSelectComponentForModalRequest: {
            custom_id: string;
            disabled?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            options: components["schemas"]["StringSelectOptionForRequest"][];
            placeholder?: string | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
        };
        StringSelectComponentResponse: {
            custom_id: string;
            disabled?: boolean;
            /** Format: int32 */
            id: number;
            /** Format: int32 */
            max_values: number;
            /** Format: int32 */
            min_values: number;
            options: components["schemas"]["StringSelectOptionResponse"][];
            placeholder?: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
        };
        StringSelectOptionForRequest: {
            default?: boolean | null;
            description?: string | null;
            emoji?: null | components["schemas"]["ComponentEmojiForRequest"];
            label: string;
            value: string;
        };
        StringSelectOptionResponse: {
            default?: boolean;
            description?: string;
            emoji?: components["schemas"]["ComponentEmojiResponse"];
            label: string;
            value: string;
        };
        TargetUsersJobStatusResponse: {
            /**
             * Format: date-time
             * @description The timestamp when the job was successfully completed.
             */
            completed_at: string | null;
            /**
             * Format: date-time
             * @description The timestamp when the job was created.
             */
            created_at: string | null;
            /** @description The error message if the job failed. */
            error_message: string | null;
            /** @description The number of users processed so far. */
            processed_users: components["schemas"]["UInt32Type"];
            /** @description The status of the job processing the target users. */
            status: components["schemas"]["TargetUsersJobStatusTypes"];
            /** @description The total number of users in the provided list. */
            total_users: components["schemas"]["UInt32Type"];
        };
        /** Format: int32 */
        TargetUsersJobStatusTypes: number & (0 | 1 | 2 | 3);
        TeamMemberResponse: {
            membership_state: components["schemas"]["TeamMembershipStates"];
            permissions: string[];
            role: components["schemas"]["TeamMemberRoles"];
            team_id: components["schemas"]["SnowflakeType"];
            user: components["schemas"]["UserResponse"];
        };
        TeamMemberRoles: string & ("admin" | "developer" | "read_only");
        /** Format: int32 */
        TeamMembershipStates: number & (1 | 2);
        TeamResponse: {
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            members: components["schemas"]["TeamMemberResponse"][];
            name: string;
            owner_user_id: components["schemas"]["SnowflakeType"];
        };
        TermsFormFieldResponse: {
            /** @description Optional helper text shown below label */
            description?: string;
            /**
             * @description Type of form field
             * @enum {string}
             */
            field_type: "TERMS";
            /** @description Label shown above field */
            label?: string;
            /** @description Whether applicant must fill in field */
            required?: boolean;
            /** @description Whether applicant accepted terms */
            response?: boolean;
            /** @description Terms applicant must acknowledge */
            values: string[];
        };
        TextDisplayComponentForMessageRequest: {
            content: string;
            /** Format: int32 */
            id?: number | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10;
        };
        TextDisplayComponentForModalRequest: {
            content: string;
            /** Format: int32 */
            id?: number | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10;
        };
        TextDisplayComponentResponse: {
            content: string;
            /** Format: int32 */
            id: number;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10;
        };
        TextInputComponentForModalRequest: {
            custom_id: string;
            /** Format: int32 */
            id?: number | null;
            label?: string | null;
            max_length?: number | null;
            min_length?: number | null;
            placeholder?: string | null;
            required?: boolean | null;
            style: components["schemas"]["TextInputStyleTypes"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
            value?: string | null;
        };
        TextInputComponentResponse: {
            custom_id: string;
            /** Format: int32 */
            id: number;
            label: string | null;
            /** Format: int32 */
            max_length: number | null;
            /** Format: int32 */
            min_length: number | null;
            placeholder?: string;
            required?: boolean;
            style: components["schemas"]["TextInputStyleTypes"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 4;
            value?: string;
        };
        TextInputFormFieldResponse: {
            /** @description Optional helper text shown below label */
            description?: string;
            /**
             * @description Type of form field
             * @enum {string}
             */
            field_type: "TEXT_INPUT";
            /** @description Label shown above field */
            label?: string;
            /** @description Placeholder text shown in empty input */
            placeholder?: string;
            /** @description Whether applicant must fill in field */
            required?: boolean;
            /** @description Applicant's text response */
            response?: string;
        };
        /** Format: int32 */
        TextInputStyleTypes: number & (1 | 2);
        /** Format: int32 */
        ThreadAutoArchiveDuration: number & (60 | 1440 | 4320 | 10080);
        ThreadMemberResponse: {
            /** Format: int32 */
            flags: number;
            id: components["schemas"]["SnowflakeType"];
            /** Format: date-time */
            join_timestamp: string;
            member?: components["schemas"]["GuildMemberResponse"];
            user_id: components["schemas"]["SnowflakeType"];
        };
        ThreadMetadataResponse: {
            /** Format: date-time */
            archive_timestamp: string | null;
            archived: boolean;
            auto_archive_duration: components["schemas"]["ThreadAutoArchiveDuration"];
            /** Format: date-time */
            create_timestamp?: string;
            invitable?: boolean;
            locked: boolean;
        };
        ThreadResponse: {
            applied_tags?: components["schemas"]["SnowflakeType"][];
            /** Format: int32 */
            bitrate?: number;
            /** Format: int32 */
            flags: number;
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            last_message_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: date-time */
            last_pin_timestamp?: string | null;
            member?: components["schemas"]["ThreadMemberResponse"];
            /** Format: int32 */
            member_count: number;
            /** Format: int32 */
            message_count: number;
            name: string;
            owner_id: components["schemas"]["SnowflakeType"];
            parent_id?: null | components["schemas"]["SnowflakeType"];
            permissions?: string;
            /** Format: int32 */
            rate_limit_per_user?: number;
            rtc_region?: string | null;
            thread_metadata: components["schemas"]["ThreadMetadataResponse"];
            /** Format: int32 */
            total_message_sent: number;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 10 | 11 | 12;
            /** Format: int32 */
            user_limit?: number;
            video_quality_mode?: components["schemas"]["VideoQualityModes"];
        };
        ThreadSearchResponse: {
            first_messages?: components["schemas"]["MessageResponse"][];
            has_more: boolean;
            members: components["schemas"]["ThreadMemberResponse"][];
            threads: components["schemas"]["ThreadResponse"][];
            /** Format: int32 */
            total_results: number;
        };
        ThreadSearchTagSetting: string & ("match_all" | "match_some");
        ThreadSortingMode: string & ("relevance" | "creation_time" | "last_message_time" | "archive_time");
        /** Format: int32 */
        ThreadSortOrder: number & (0 | 1);
        ThreadsResponse: {
            first_messages?: components["schemas"]["MessageResponse"][];
            has_more: boolean;
            members: components["schemas"]["ThreadMemberResponse"][];
            threads: components["schemas"]["ThreadResponse"][];
        };
        ThumbnailComponentForMessageRequest: {
            description?: string | null;
            /** Format: int32 */
            id?: number | null;
            media: components["schemas"]["UnfurledMediaRequest"];
            spoiler?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 11;
        };
        ThumbnailComponentResponse: {
            description: string | null;
            /** Format: int32 */
            id: number;
            media: components["schemas"]["UnfurledMediaResponse"];
            spoiler: boolean;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 11;
        };
        TypingIndicatorResponse: Record<string, never>;
        /** Format: int64 */
        UInt32Type: number;
        UnbanUserFromGuildRequest: Record<string, never>;
        UnfurledMediaRequest: {
            /** Format: uri */
            url: string;
        };
        UnfurledMediaRequestWithAttachmentReferenceRequired: {
            /** Format: uri */
            url: string;
        };
        UnfurledMediaResponse: {
            attachment_id?: components["schemas"]["SnowflakeType"];
            content_type?: string | null;
            /** Format: int32 */
            height?: number | null;
            id: components["schemas"]["SnowflakeType"];
            proxy_url: string;
            url: string;
            /** Format: int32 */
            width?: number | null;
        };
        UpdateApplicationUserRoleConnectionRequest: {
            metadata?: {
                [key: string]: string;
            } | null;
            platform_name?: string | null;
            platform_username?: string | null;
        };
        UpdateDefaultReactionEmojiRequest: {
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
        };
        UpdateDMRequestPartial: {
            name?: string | null;
        };
        UpdateGroupDMRequestPartial: {
            icon?: string | null;
            name?: string | null;
        };
        UpdateGuildChannelRequestPartial: {
            available_tags?: components["schemas"]["UpdateThreadTagRequest"][] | null;
            /** Format: int32 */
            bitrate?: number | null;
            default_auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            default_forum_layout?: null | components["schemas"]["ForumLayout"];
            default_reaction_emoji?: null | components["schemas"]["UpdateDefaultReactionEmojiRequest"];
            default_sort_order?: null | components["schemas"]["ThreadSortOrder"];
            default_tag_setting?: null | components["schemas"]["ThreadSearchTagSetting"];
            default_thread_rate_limit_per_user?: number | null;
            flags?: number | null;
            name?: string;
            nsfw?: boolean | null;
            parent_id?: null | components["schemas"]["SnowflakeType"];
            permission_overwrites?: components["schemas"]["ChannelPermissionOverwriteRequest"][] | null;
            /** Format: int32 */
            position?: number | null;
            rate_limit_per_user?: number | null;
            rtc_region?: string | null;
            topic?: string | null;
            type?: null | (0 | 2 | 4 | 5 | 13 | 14 | 15);
            /** Format: int32 */
            user_limit?: number | null;
            video_quality_mode?: null | components["schemas"]["VideoQualityModes"];
        };
        UpdateGuildOnboardingRequest: {
            default_channel_ids?: components["schemas"]["SnowflakeType"][] | null;
            enabled?: boolean | null;
            mode?: null | components["schemas"]["GuildOnboardingMode"];
            prompts?: components["schemas"]["UpdateOnboardingPromptRequest"][] | null;
        };
        UpdateMessageInteractionCallbackRequest: {
            data?: null | components["schemas"]["IncomingWebhookUpdateForInteractionCallbackRequestPartial"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 6 | 7;
        };
        UpdateMessageInteractionCallbackResponse: {
            message: components["schemas"]["MessageResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 7;
        };
        UpdateOnboardingPromptRequest: {
            id: components["schemas"]["SnowflakeType"];
            in_onboarding?: boolean | null;
            options: components["schemas"]["OnboardingPromptOptionRequest"][];
            required?: boolean | null;
            single_select?: boolean | null;
            title: string;
            type?: null | components["schemas"]["OnboardingPromptType"];
        };
        UpdateRolePositionsRequest: {
            id?: null | components["schemas"]["SnowflakeType"];
            /** Format: int32 */
            position?: number | null;
        };
        UpdateRoleRequestPartial: {
            color?: number | null;
            colors?: null | components["schemas"]["RoleColors"];
            hoist?: boolean | null;
            icon?: string | null;
            mentionable?: boolean | null;
            name?: string | null;
            permissions?: number | null;
            unicode_emoji?: string | null;
        };
        UpdateSelfVoiceStateRequestPartial: {
            channel_id?: null | components["schemas"]["SnowflakeType"];
            /** Format: date-time */
            request_to_speak_timestamp?: string | null;
            suppress?: boolean | null;
        };
        UpdateThreadRequestPartial: {
            applied_tags?: components["schemas"]["SnowflakeType"][] | null;
            archived?: boolean | null;
            auto_archive_duration?: null | components["schemas"]["ThreadAutoArchiveDuration"];
            /** Format: int32 */
            bitrate?: number | null;
            flags?: number | null;
            invitable?: boolean | null;
            locked?: boolean | null;
            name?: string | null;
            rate_limit_per_user?: number | null;
            rtc_region?: string | null;
            user_limit?: number | null;
            video_quality_mode?: null | components["schemas"]["VideoQualityModes"];
        };
        UpdateThreadTagRequest: {
            emoji_id?: null | components["schemas"]["SnowflakeType"];
            emoji_name?: string | null;
            id?: null | components["schemas"]["SnowflakeType"];
            moderated?: boolean | null;
            name: string;
        };
        UpdateVoiceStateRequestPartial: {
            channel_id?: null | components["schemas"]["SnowflakeType"];
            suppress?: boolean | null;
        };
        UserAvatarDecorationResponse: {
            asset: string;
            sku_id: null | components["schemas"]["SnowflakeType"];
        };
        UserCollectiblesResponse: {
            nameplate: null | components["schemas"]["UserNameplateResponse"];
        };
        UserCommunicationDisabledAction: {
            metadata: components["schemas"]["UserCommunicationDisabledActionMetadata"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
        };
        UserCommunicationDisabledActionMetadata: {
            duration_seconds?: number | null;
        };
        UserCommunicationDisabledActionMetadataResponse: {
            /** Format: int32 */
            duration_seconds: number;
        };
        UserCommunicationDisabledActionResponse: {
            metadata: components["schemas"]["UserCommunicationDisabledActionMetadataResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 3;
        };
        UserGuildOnboardingResponse: {
            default_channel_ids: components["schemas"]["SnowflakeType"][];
            enabled: boolean;
            guild_id: components["schemas"]["SnowflakeType"];
            mode: components["schemas"]["GuildOnboardingMode"];
            prompts: components["schemas"]["OnboardingPromptResponse"][];
        };
        UserNameplateResponse: {
            asset: string;
            label: string;
            palette: components["schemas"]["NameplatePalette"];
            sku_id: null | components["schemas"]["SnowflakeType"];
        };
        /** Format: int32 */
        UserNotificationSettings: number & (0 | 1);
        UserPIIResponse: {
            /** Format: int32 */
            accent_color?: number | null;
            avatar: string | null;
            avatar_decoration_data?: null | components["schemas"]["UserAvatarDecorationResponse"];
            banner?: string | null;
            bot?: boolean;
            collectibles?: null | components["schemas"]["UserCollectiblesResponse"];
            discriminator: string;
            email?: string | null;
            flags: components["schemas"]["Int53Type"];
            global_name: string | null;
            id: components["schemas"]["SnowflakeType"];
            locale: components["schemas"]["AvailableLocalesEnum"];
            mfa_enabled: boolean;
            premium_type?: components["schemas"]["PremiumTypes"];
            primary_guild?: null | components["schemas"]["UserPrimaryGuildResponse"];
            /** Format: int32 */
            public_flags: number;
            system?: boolean;
            username: string;
            verified?: boolean;
        };
        UserPrimaryGuildResponse: {
            badge: string | null;
            identity_enabled: boolean | null;
            identity_guild_id: null | components["schemas"]["SnowflakeType"];
            tag: string | null;
        };
        UserResponse: {
            /** Format: int32 */
            accent_color?: number | null;
            avatar: string | null;
            avatar_decoration_data?: null | components["schemas"]["UserAvatarDecorationResponse"];
            banner?: string | null;
            bot?: boolean;
            collectibles?: null | components["schemas"]["UserCollectiblesResponse"];
            discriminator: string;
            flags: components["schemas"]["Int53Type"];
            global_name: string | null;
            id: components["schemas"]["SnowflakeType"];
            primary_guild: null | components["schemas"]["UserPrimaryGuildResponse"];
            /** Format: int32 */
            public_flags: number;
            system?: boolean;
            username: string;
        };
        UserSelectComponentForMessageRequest: {
            custom_id: string;
            default_values?: components["schemas"]["UserSelectDefaultValue"][] | null;
            disabled?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            placeholder?: string | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 5;
        };
        UserSelectComponentForModalRequest: {
            custom_id: string;
            default_values?: components["schemas"]["UserSelectDefaultValue"][] | null;
            disabled?: boolean | null;
            /** Format: int32 */
            id?: number | null;
            max_values?: number | null;
            min_values?: number | null;
            placeholder?: string | null;
            required?: boolean | null;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 5;
        };
        UserSelectComponentResponse: {
            custom_id: string;
            default_values?: components["schemas"]["UserSelectDefaultValueResponse"][];
            disabled?: boolean;
            /** Format: int32 */
            id: number;
            /** Format: int32 */
            max_values: number;
            /** Format: int32 */
            min_values: number;
            placeholder?: string;
            /**
             * Format: int32
             * @enum {integer}
             */
            type: 5;
        };
        UserSelectDefaultValue: {
            id: components["schemas"]["SnowflakeType"];
            /** @enum {string} */
            type: "user";
        };
        UserSelectDefaultValueResponse: {
            id: components["schemas"]["SnowflakeType"];
            /** @enum {string} */
            type: "user";
        };
        VanityURLErrorResponse: {
            /** Format: int32 */
            code: number;
            message: string;
        };
        VanityURLResponse: {
            code: string | null;
            error?: null | components["schemas"]["VanityURLErrorResponse"];
            /** Format: int32 */
            uses: number;
        };
        /** Format: int32 */
        VerificationLevels: number & (0 | 1 | 2 | 3 | 4);
        /** Format: int32 */
        VideoQualityModes: number & (1 | 2);
        VoiceRegionResponse: {
            custom: boolean;
            deprecated: boolean;
            id: string;
            name: string;
            optimal: boolean;
        };
        VoiceScheduledEventCreateRequest: {
            channel_id?: null | components["schemas"]["SnowflakeType"];
            description?: string | null;
            entity_metadata?: null | components["schemas"]["EntityMetadataVoice"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 2;
            image?: string | null;
            name: string;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /** Format: date-time */
            scheduled_end_time?: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
        };
        VoiceScheduledEventPatchRequestPartial: {
            channel_id?: null | components["schemas"]["SnowflakeType"];
            description?: string | null;
            entity_metadata?: null | components["schemas"]["EntityMetadataVoice"];
            entity_type?: null | 2;
            image?: string | null;
            name?: string;
            privacy_level?: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /** Format: date-time */
            scheduled_end_time?: string | null;
            /** Format: date-time */
            scheduled_start_time?: string;
            status?: null | components["schemas"]["GuildScheduledEventStatuses"];
        };
        VoiceScheduledEventResponse: {
            channel_id: null | components["schemas"]["SnowflakeType"];
            creator?: components["schemas"]["UserResponse"];
            creator_id: null | components["schemas"]["SnowflakeType"];
            description: string | null;
            entity_id: null | components["schemas"]["SnowflakeType"];
            entity_metadata: null | components["schemas"]["EntityMetadataVoiceResponse"];
            /**
             * Format: int32
             * @enum {integer}
             */
            entity_type: 2;
            guild_id: components["schemas"]["SnowflakeType"];
            id: components["schemas"]["SnowflakeType"];
            image: string | null;
            name: string;
            privacy_level: components["schemas"]["GuildScheduledEventPrivacyLevels"];
            /** Format: date-time */
            scheduled_end_time: string | null;
            /** Format: date-time */
            scheduled_start_time: string;
            status: components["schemas"]["GuildScheduledEventStatuses"];
            /** Format: int32 */
            user_count?: number;
            user_rsvp?: null | components["schemas"]["ScheduledEventUserResponse"];
        };
        VoiceStateResponse: {
            channel_id: null | components["schemas"]["SnowflakeType"];
            deaf: boolean;
            guild_id: null | components["schemas"]["SnowflakeType"];
            member?: components["schemas"]["GuildMemberResponse"];
            mute: boolean;
            /** Format: date-time */
            request_to_speak_timestamp: string | null;
            self_deaf: boolean;
            self_mute: boolean;
            self_stream: boolean | null;
            self_video: boolean;
            session_id: string;
            suppress: boolean;
            user_id: components["schemas"]["SnowflakeType"];
        };
        WebhookSlackEmbed: {
            /** Format: uri */
            author_icon?: string | null;
            /** Format: uri */
            author_link?: string | null;
            author_name?: string | null;
            color?: string | null;
            fields?: components["schemas"]["WebhookSlackEmbedField"][] | null;
            footer?: string | null;
            /** Format: uri */
            footer_icon?: string | null;
            /** Format: uri */
            image_url?: string | null;
            pretext?: string | null;
            text?: string | null;
            /** Format: uri */
            thumb_url?: string | null;
            title?: string | null;
            /** Format: uri */
            title_link?: string | null;
            ts?: number | null;
        };
        WebhookSlackEmbedField: {
            inline?: boolean | null;
            name?: string | null;
            value?: string | null;
        };
        WebhookSourceChannelResponse: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
        };
        WebhookSourceGuildResponse: {
            icon: string | null;
            id: components["schemas"]["SnowflakeType"];
            name: string;
        };
        /** Format: int32 */
        WebhookTypes: number & (1 | 2 | 3);
        WelcomeMessageResponse: {
            author_ids: components["schemas"]["SnowflakeType"][];
            message: string;
        };
        WelcomeScreenPatchRequestPartial: {
            description?: string | null;
            enabled?: boolean | null;
            welcome_channels?: components["schemas"]["GuildWelcomeChannel"][] | null;
        };
        WidgetActivity: {
            name: string;
        };
        WidgetChannel: {
            id: components["schemas"]["SnowflakeType"];
            name: string;
            /** Format: int32 */
            position: number;
        };
        WidgetImageStyles: string & ("shield" | "banner1" | "banner2" | "banner3" | "banner4");
        WidgetMember: {
            activity?: components["schemas"]["WidgetActivity"];
            avatar: null;
            /** Format: uri */
            avatar_url: string;
            channel_id?: components["schemas"]["SnowflakeType"];
            deaf?: boolean;
            discriminator: components["schemas"]["WidgetUserDiscriminator"];
            id: string;
            mute?: boolean;
            self_deaf?: boolean;
            self_mute?: boolean;
            status: string;
            suppress?: boolean;
            username: string;
        };
        WidgetResponse: {
            channels: components["schemas"]["WidgetChannel"][];
            id: components["schemas"]["SnowflakeType"];
            instant_invite: string | null;
            members: components["schemas"]["WidgetMember"][];
            name: string;
            /** Format: int32 */
            presence_count: number;
        };
        WidgetSettingsResponse: {
            channel_id: null | components["schemas"]["SnowflakeType"];
            enabled: boolean;
        };
        WidgetUserDiscriminator: string & "0000";
    };
    responses: {
        /** @description Client error response */
        ClientErrorResponse: {
            headers: {
                "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ErrorResponse"];
            };
        };
        /** @description Client ratelimited response */
        ClientRatelimitedResponse: {
            headers: {
                "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["RatelimitedResponse"];
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: {
        /** @description The bucket that the request belongs to */
        "X-RateLimit-Bucket": string;
        /** @description The maximum number of requests that can be made in the current ratelimit window */
        "X-RateLimit-Limit": number;
        /** @description The number of requests remaining in the current ratelimit window */
        "X-RateLimit-Remaining": number;
        /** @description A unix timestamp in seconds at which the current ratelimit window resets */
        "X-RateLimit-Reset": number;
        /** @description The duration in seconds until the current ratelimit window resets */
        "X-RateLimit-Reset-After": number;
    };
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    get_application: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_application */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateApplicationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_application: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationFormPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_application */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateApplicationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    applications_get_activity_instance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                instance_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for applications_get_activity_instance */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmbeddedActivityInstance"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    upload_application_attachment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    file: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for upload_application_attachment */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActivitiesAttachmentResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_application_commands: {
        parameters: {
            query?: {
                with_localizations?: boolean;
            };
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_application_commands */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    bulk_set_application_commands: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandUpdateRequest"][] | null;
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for bulk_set_application_commands */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandCreateRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_application_command */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            /** @description 201 response for create_application_command */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_application_command */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_application_command */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandPatchRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_application_command */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_application_emojis: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_application_emojis */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListApplicationEmojisResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_application_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    image: string;
                    name: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 201 response for create_application_emoji */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_application_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_application_emoji */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_application_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_application_emoji */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_application_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                emoji_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_application_emoji */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_entitlements: {
        parameters: {
            query?: {
                after?: components["schemas"]["SnowflakeType"];
                before?: components["schemas"]["SnowflakeType"];
                exclude_deleted?: boolean;
                exclude_ended?: boolean;
                guild_id?: components["schemas"]["SnowflakeType"];
                limit?: number;
                only_active?: boolean;
                sku_ids?: string | (null | components["schemas"]["SnowflakeType"])[];
                user_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_entitlements */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EntitlementResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_entitlement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateEntitlementRequestData"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_entitlement */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EntitlementResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_entitlement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                entitlement_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_entitlement */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EntitlementResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_entitlement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                entitlement_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_entitlement */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    consume_entitlement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                entitlement_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for consume_entitlement */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_application_commands: {
        parameters: {
            query?: {
                with_localizations?: boolean;
            };
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_application_commands */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    bulk_set_guild_application_commands: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandUpdateRequest"][] | null;
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for bulk_set_guild_application_commands */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_guild_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandCreateRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_guild_application_command */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            /** @description 201 response for create_guild_application_command */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_application_command */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_guild_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_guild_application_command */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_guild_application_command: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandPatchRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_guild_application_command */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationCommandResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_application_command_permissions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_application_command_permissions */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommandPermissionsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    set_guild_application_command_permissions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                command_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    permissions?: components["schemas"]["ApplicationCommandPermission"][] | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for set_guild_application_command_permissions */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommandPermissionsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_application_command_permissions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_application_command_permissions */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommandPermissionsResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_application_role_connections_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_application_role_connections_metadata */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationRoleConnectionsMetadataItemResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_application_role_connections_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationRoleConnectionsMetadataItemRequest"][] | null;
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_application_role_connections_metadata */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationRoleConnectionsMetadataItemResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_my_application: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_my_application */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateApplicationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_my_application: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationFormPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_my_application */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateApplicationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_channel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_channel */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildChannelResponse"] | components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"] | components["schemas"]["ThreadResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_channel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for delete_channel */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildChannelResponse"] | components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"] | components["schemas"]["ThreadResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_channel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateDMRequestPartial"] | components["schemas"]["UpdateGroupDMRequestPartial"] | components["schemas"]["UpdateGuildChannelRequestPartial"] | components["schemas"]["UpdateThreadRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_channel */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildChannelResponse"] | components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"] | components["schemas"]["ThreadResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    follow_channel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    webhook_channel_id: components["schemas"]["SnowflakeType"];
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for follow_channel */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelFollowerResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_channel_invites: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_channel_invites */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["FriendInviteResponse"] | components["schemas"]["GroupDMInviteResponse"] | components["schemas"]["GuildInviteResponse"] | null)[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_channel_invite: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateGroupDMInviteRequest"] | components["schemas"]["CreateGuildInviteRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["CreateGroupDMInviteRequest"] | components["schemas"]["CreateGuildInviteRequest"];
                "multipart/form-data": (components["schemas"]["CreateGroupDMInviteRequest"] | components["schemas"]["CreateGuildInviteRequest"]) & {
                    target_users_file?: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_channel_invite */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FriendInviteResponse"] | components["schemas"]["GroupDMInviteResponse"] | components["schemas"]["GuildInviteResponse"];
                };
            };
            /** @description 204 response for create_channel_invite */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_messages: {
        parameters: {
            query?: {
                after?: components["schemas"]["SnowflakeType"];
                around?: components["schemas"]["SnowflakeType"];
                before?: components["schemas"]["SnowflakeType"];
                limit?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_messages */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MessageCreateRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["MessageCreateRequest"];
                "multipart/form-data": components["schemas"]["MessageCreateRequest"] & {
                    "files[0]"?: string;
                    "files[1]"?: string;
                    "files[2]"?: string;
                    "files[3]"?: string;
                    "files[4]"?: string;
                    "files[5]"?: string;
                    "files[6]"?: string;
                    "files[7]"?: string;
                    "files[8]"?: string;
                    "files[9]"?: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_message */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_message */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_message */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MessageEditRequestPartial"];
                "application/x-www-form-urlencoded": components["schemas"]["MessageEditRequestPartial"];
                "multipart/form-data": components["schemas"]["MessageEditRequestPartial"] & {
                    "files[0]"?: string;
                    "files[1]"?: string;
                    "files[2]"?: string;
                    "files[3]"?: string;
                    "files[4]"?: string;
                    "files[5]"?: string;
                    "files[6]"?: string;
                    "files[7]"?: string;
                    "files[8]"?: string;
                    "files[9]"?: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_message */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    crosspost_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for crosspost_message */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_all_message_reactions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_all_message_reactions */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_message_reactions_by_emoji: {
        parameters: {
            query?: {
                after?: components["schemas"]["SnowflakeType"];
                limit?: number;
                type?: components["schemas"]["ReactionTypes"];
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_message_reactions_by_emoji */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_all_message_reactions_by_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_all_message_reactions_by_emoji */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_user_message_reaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
                message_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_user_message_reaction */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    add_my_message_reaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for add_my_message_reaction */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_my_message_reaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                emoji_name: string;
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_my_message_reaction */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_thread_from_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateTextThreadWithMessageRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 201 response for create_thread_from_message */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    bulk_delete_messages: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    messages: components["schemas"]["SnowflakeType"][];
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for bulk_delete_messages */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_pins: {
        parameters: {
            query?: {
                before?: string;
                limit?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_pins */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PinnedMessagesResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_pin: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for create_pin */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_pin: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_pin */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    set_channel_permission_overwrite: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                overwrite_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    allow?: number | null;
                    deny?: number | null;
                    type?: null | components["schemas"]["ChannelPermissionOverwrites"];
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for set_channel_permission_overwrite */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_channel_permission_overwrite: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                overwrite_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_channel_permission_overwrite */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    deprecated_list_pins: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for deprecated_list_pins */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    deprecated_create_pin: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for deprecated_create_pin */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    deprecated_delete_pin: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for deprecated_delete_pin */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_answer_voters: {
        parameters: {
            query?: {
                after?: components["schemas"]["SnowflakeType"];
                limit?: number;
            };
            header?: never;
            path: {
                answer_id: number;
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_answer_voters */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PollAnswerDetailsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    poll_expire: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for poll_expire */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    add_group_dm_user: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    access_token?: string | null;
                    nick?: string | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 201 response for add_group_dm_user */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"];
                };
            };
            /** @description 204 response for add_group_dm_user */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_group_dm_user: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_group_dm_user */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    send_soundboard_sound: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SoundboardSoundSendRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for send_soundboard_sound */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_thread_members: {
        parameters: {
            query?: {
                after?: components["schemas"]["SnowflakeType"];
                limit?: number;
                with_member?: boolean;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_thread_members */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadMemberResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_thread_member: {
        parameters: {
            query?: {
                with_member?: boolean;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_thread_member */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadMemberResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    add_thread_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for add_thread_member */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_thread_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_thread_member */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    join_thread: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for join_thread */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    leave_thread: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for leave_thread */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_thread: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateForumThreadRequest"] | components["schemas"]["CreateTextThreadWithoutMessageRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["CreateForumThreadRequest"] | components["schemas"]["CreateTextThreadWithoutMessageRequest"];
                "multipart/form-data": components["schemas"]["CreateForumThreadRequest"] | components["schemas"]["CreateTextThreadWithoutMessageRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 201 response for create_thread */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreatedThreadResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_private_archived_threads: {
        parameters: {
            query?: {
                before?: string;
                limit?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_private_archived_threads */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_public_archived_threads: {
        parameters: {
            query?: {
                before?: string;
                limit?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_public_archived_threads */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    thread_search: {
        parameters: {
            query?: {
                archived?: boolean;
                limit?: number;
                max_id?: components["schemas"]["SnowflakeType"];
                min_id?: components["schemas"]["SnowflakeType"];
                name?: string;
                offset?: number;
                slop?: number;
                sort_by?: components["schemas"]["ThreadSortingMode"];
                sort_order?: components["schemas"]["SortingOrder"];
                tag?: string | components["schemas"]["SnowflakeType"][];
                tag_setting?: components["schemas"]["ThreadSearchTagSetting"];
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for thread_search */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadSearchResponse"];
                };
            };
            /** @description 202 response for thread_search */
            202: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchIndexNotReadyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    trigger_typing_indicator: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for trigger_typing_indicator */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TypingIndicatorResponse"];
                };
            };
            /** @description 204 response for trigger_typing_indicator */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_my_private_archived_threads: {
        parameters: {
            query?: {
                before?: components["schemas"]["SnowflakeType"];
                limit?: number;
            };
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_my_private_archived_threads */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_voice_channel_status: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description The new voice channel status */
                    status?: string | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for update_voice_channel_status */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_channel_webhooks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_channel_webhooks */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_webhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    avatar?: string | null;
                    name: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_webhook */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildIncomingWebhookResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_gateway: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_gateway */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GatewayResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_bot_gateway: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_bot_gateway */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GatewayBotResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild: {
        parameters: {
            query?: {
                with_counts?: boolean;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildWithCountsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GuildPatchRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_guild */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_audit_log_entries: {
        parameters: {
            query?: {
                action_type?: components["schemas"]["AuditLogActionTypes"];
                after?: components["schemas"]["SnowflakeType"];
                before?: components["schemas"]["SnowflakeType"];
                limit?: number;
                target_id?: components["schemas"]["SnowflakeType"];
                user_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_audit_log_entries */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildAuditLogResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_auto_moderation_rules: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_auto_moderation_rules */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["DefaultKeywordRuleResponse"] | components["schemas"]["KeywordRuleResponse"] | components["schemas"]["MLSpamRuleResponse"] | components["schemas"]["MentionSpamRuleResponse"] | components["schemas"]["SpamLinkRuleResponse"] | null)[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_auto_moderation_rule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DefaultKeywordListUpsertRequest"] | components["schemas"]["KeywordUpsertRequest"] | components["schemas"]["MLSpamUpsertRequest"] | components["schemas"]["MentionSpamUpsertRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_auto_moderation_rule */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DefaultKeywordRuleResponse"] | components["schemas"]["KeywordRuleResponse"] | components["schemas"]["MLSpamRuleResponse"] | components["schemas"]["MentionSpamRuleResponse"] | components["schemas"]["SpamLinkRuleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_auto_moderation_rule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                rule_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_auto_moderation_rule */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DefaultKeywordRuleResponse"] | components["schemas"]["KeywordRuleResponse"] | components["schemas"]["MLSpamRuleResponse"] | components["schemas"]["MentionSpamRuleResponse"] | components["schemas"]["SpamLinkRuleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_auto_moderation_rule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                rule_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_auto_moderation_rule */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_auto_moderation_rule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                rule_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DefaultKeywordListUpsertRequestPartial"] | components["schemas"]["KeywordUpsertRequestPartial"] | components["schemas"]["MLSpamUpsertRequestPartial"] | components["schemas"]["MentionSpamUpsertRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_auto_moderation_rule */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DefaultKeywordRuleResponse"] | components["schemas"]["KeywordRuleResponse"] | components["schemas"]["MLSpamRuleResponse"] | components["schemas"]["MentionSpamRuleResponse"] | components["schemas"]["SpamLinkRuleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_bans: {
        parameters: {
            query?: {
                after?: components["schemas"]["SnowflakeType"];
                before?: components["schemas"]["SnowflakeType"];
                limit?: number;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_bans */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildBanResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_ban: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_ban */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildBanResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    ban_user_from_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BanUserFromGuildRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for ban_user_from_guild */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    unban_user_from_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UnbanUserFromGuildRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for unban_user_from_guild */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    bulk_ban_users_from_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkBanUsersRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for bulk_ban_users_from_guild */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BulkBanUsersResponse"];
                };
            };
            /** @description 204 response for bulk_ban_users_from_guild */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_channels: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_channels */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["GuildChannelResponse"] | components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"] | components["schemas"]["ThreadResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_guild_channel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateGuildChannelRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 201 response for create_guild_channel */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildChannelResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    bulk_update_guild_channels: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    id?: null | components["schemas"]["SnowflakeType"];
                    lock_permissions?: boolean | null;
                    parent_id?: null | components["schemas"]["SnowflakeType"];
                    /** Format: int32 */
                    position?: number | null;
                }[];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for bulk_update_guild_channels */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_emojis: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_emojis */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_guild_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    image: string;
                    name: string;
                    roles?: (null | components["schemas"]["SnowflakeType"])[] | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 201 response for create_guild_emoji */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                emoji_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_emoji */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_guild_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                emoji_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_guild_emoji */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_guild_emoji: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                emoji_id: components["schemas"]["SnowflakeType"];
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    roles?: (null | components["schemas"]["SnowflakeType"])[] | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_guild_emoji */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmojiResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_integrations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_integrations */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["DiscordIntegrationResponse"] | components["schemas"]["ExternalConnectionIntegrationResponse"] | components["schemas"]["GuildSubscriptionIntegrationResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_guild_integration: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                integration_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_guild_integration */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_invites: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_invites */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["FriendInviteResponse"] | components["schemas"]["GroupDMInviteResponse"] | components["schemas"]["GuildInviteResponse"] | null)[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_members: {
        parameters: {
            query?: {
                after?: number;
                limit?: number;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_members */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildMemberResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_member */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildMemberResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    add_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BotAddGuildMemberRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 201 response for add_guild_member */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildMemberResponse"];
                };
            };
            /** @description 204 response for add_guild_member */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_guild_member */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    channel_id?: null | components["schemas"]["SnowflakeType"];
                    /** Format: date-time */
                    communication_disabled_until?: string | null;
                    deaf?: boolean | null;
                    flags?: number | null;
                    mute?: boolean | null;
                    nick?: string | null;
                    roles?: (null | components["schemas"]["SnowflakeType"])[] | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_guild_member */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildMemberResponse"];
                };
            };
            /** @description 204 response for update_guild_member */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    add_guild_member_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for add_guild_member_role */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_guild_member_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_guild_member_role */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_my_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    avatar?: string | null;
                    banner?: string | null;
                    bio?: string | null;
                    nick?: string | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_my_guild_member */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateGuildMemberResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    search_guild_members: {
        parameters: {
            query: {
                limit?: number;
                query: string;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for search_guild_members */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildMemberResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    guild_search: {
        parameters: {
            query?: {
                attachment_extension?: string[];
                attachment_filename?: string[];
                author_id?: components["schemas"]["SnowflakeType"][];
                author_type?: components["schemas"]["AuthorType"][];
                channel_id?: components["schemas"]["SnowflakeType"][];
                content?: string;
                embed_provider?: string[];
                embed_type?: components["schemas"]["SearchableEmbedType"][];
                has?: components["schemas"]["HasOption"][];
                include_nsfw?: boolean;
                limit?: number;
                link_hostname?: string[];
                max_id?: components["schemas"]["SnowflakeType"];
                mention_everyone?: boolean;
                mentions?: components["schemas"]["SnowflakeType"][];
                mentions_role_id?: components["schemas"]["SnowflakeType"][];
                min_id?: components["schemas"]["SnowflakeType"];
                offset?: number;
                pinned?: boolean;
                replied_to_message_id?: components["schemas"]["SnowflakeType"][];
                replied_to_user_id?: components["schemas"]["SnowflakeType"][];
                slop?: number;
                sort_by?: components["schemas"]["SortingMode"];
                sort_order?: components["schemas"]["SortingOrder"];
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for guild_search */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildSearchResponse"];
                };
            };
            /** @description 202 response for guild_search */
            202: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchIndexNotReadyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_new_member_welcome: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_new_member_welcome */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildHomeSettingsResponse"];
                };
            };
            /** @description 204 response for get_guild_new_member_welcome */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guilds_onboarding: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guilds_onboarding */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserGuildOnboardingResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    put_guilds_onboarding: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateGuildOnboardingRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for put_guilds_onboarding */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildOnboardingResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_preview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_preview */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildPreviewResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    preview_prune_guild: {
        parameters: {
            query?: {
                days?: number;
                include_roles?: string | (null | components["schemas"]["SnowflakeType"])[];
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for preview_prune_guild */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildPruneResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    prune_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PruneGuildRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for prune_guild */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildPruneResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_voice_regions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_voice_regions */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceRegionResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_join_requests: {
        parameters: {
            query?: {
                after?: components["schemas"]["SnowflakeType"];
                before?: components["schemas"]["SnowflakeType"];
                limit?: number;
                status?: never;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_join_requests */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildJoinRequestsListResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    action_guild_join_request: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                request_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Whether to approve or reject the join request
                     * @enum {string}
                     */
                    action?: never;
                    /** @description Reason for rejection. Only used when action is REJECTED */
                    rejection_reason?: string | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for action_guild_join_request */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildJoinRequestResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_roles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_roles */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildRoleResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_guild_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateRoleRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_guild_role */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildRoleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    bulk_update_guild_roles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateRolePositionsRequest"][];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for bulk_update_guild_roles */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildRoleResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_role */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildRoleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_guild_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_guild_role */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_guild_role: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                role_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateRoleRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_guild_role */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildRoleResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    guild_role_member_counts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for guild_role_member_counts */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: number;
                    };
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_scheduled_events: {
        parameters: {
            query?: {
                with_user_count?: boolean;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_scheduled_events */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["ExternalScheduledEventResponse"] | components["schemas"]["StageScheduledEventResponse"] | components["schemas"]["VoiceScheduledEventResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_guild_scheduled_event: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExternalScheduledEventCreateRequest"] | components["schemas"]["StageScheduledEventCreateRequest"] | components["schemas"]["VoiceScheduledEventCreateRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_guild_scheduled_event */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExternalScheduledEventResponse"] | components["schemas"]["StageScheduledEventResponse"] | components["schemas"]["VoiceScheduledEventResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_scheduled_event: {
        parameters: {
            query?: {
                with_user_count?: boolean;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_scheduled_event */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExternalScheduledEventResponse"] | components["schemas"]["StageScheduledEventResponse"] | components["schemas"]["VoiceScheduledEventResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_guild_scheduled_event: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_guild_scheduled_event */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_guild_scheduled_event: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExternalScheduledEventPatchRequestPartial"] | components["schemas"]["StageScheduledEventPatchRequestPartial"] | components["schemas"]["VoiceScheduledEventPatchRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_guild_scheduled_event */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExternalScheduledEventResponse"] | components["schemas"]["StageScheduledEventResponse"] | components["schemas"]["VoiceScheduledEventResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_scheduled_event_users: {
        parameters: {
            query?: {
                after?: components["schemas"]["SnowflakeType"];
                before?: components["schemas"]["SnowflakeType"];
                limit?: number;
                with_member?: boolean;
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                guild_scheduled_event_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_scheduled_event_users */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScheduledEventUserResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_soundboard_sounds: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_soundboard_sounds */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListGuildSoundboardSoundsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_guild_soundboard_sound: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SoundboardCreateRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 201 response for create_guild_soundboard_sound */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SoundboardSoundResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_soundboard_sound: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sound_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_soundboard_sound */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SoundboardSoundResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_guild_soundboard_sound: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sound_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_guild_soundboard_sound */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_guild_soundboard_sound: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sound_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SoundboardPatchRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_guild_soundboard_sound */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SoundboardSoundResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_stickers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_stickers */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildStickerResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_guild_sticker: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    description?: string | null;
                    file: string;
                    name: string;
                    tags: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 201 response for create_guild_sticker */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildStickerResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_sticker: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_sticker */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildStickerResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_guild_sticker: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_guild_sticker */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_guild_sticker: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    description?: string | null;
                    name?: string;
                    tags?: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_guild_sticker */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildStickerResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_guild_templates: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_guild_templates */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_guild_template: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    description?: string | null;
                    name: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_guild_template */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    sync_guild_template: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for sync_guild_template */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_guild_template: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for delete_guild_template */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_guild_template: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    description?: string | null;
                    name?: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_guild_template */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_active_guild_threads: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_active_guild_threads */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_vanity_url: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_vanity_url */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VanityURLResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_voice_state: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_voice_state */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceStateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_voice_state: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateVoiceStateRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for update_voice_state */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_self_voice_state: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_self_voice_state */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceStateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_self_voice_state: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateSelfVoiceStateRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for update_self_voice_state */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_webhooks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_webhooks */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"])[] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_welcome_screen: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_welcome_screen */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildWelcomeScreenResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_guild_welcome_screen: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WelcomeScreenPatchRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_guild_welcome_screen */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildWelcomeScreenResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_widget_settings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_widget_settings */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WidgetSettingsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_guild_widget_settings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    channel_id?: null | components["schemas"]["SnowflakeType"];
                    enabled?: boolean | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_guild_widget_settings */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WidgetSettingsResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_widget: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_widget */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WidgetResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_widget_png: {
        parameters: {
            query?: {
                style?: components["schemas"]["WidgetImageStyles"];
            };
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_widget_png */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "image/png": string;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_guild_template: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_guild_template */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildTemplateResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_interaction_response: {
        parameters: {
            query?: {
                with_response?: boolean;
            };
            header?: never;
            path: {
                interaction_id: components["schemas"]["SnowflakeType"];
                interaction_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApplicationCommandAutocompleteCallbackRequest"] | components["schemas"]["CreateMessageInteractionCallbackRequest"] | components["schemas"]["LaunchActivityInteractionCallbackRequest"] | components["schemas"]["ModalInteractionCallbackRequest"] | components["schemas"]["PongInteractionCallbackRequest"] | components["schemas"]["SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest"] | components["schemas"]["UpdateMessageInteractionCallbackRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["ApplicationCommandAutocompleteCallbackRequest"] | components["schemas"]["CreateMessageInteractionCallbackRequest"] | components["schemas"]["LaunchActivityInteractionCallbackRequest"] | components["schemas"]["ModalInteractionCallbackRequest"] | components["schemas"]["PongInteractionCallbackRequest"] | components["schemas"]["SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest"] | components["schemas"]["UpdateMessageInteractionCallbackRequest"];
                "multipart/form-data": components["schemas"]["ApplicationCommandAutocompleteCallbackRequest"] | components["schemas"]["CreateMessageInteractionCallbackRequest"] | components["schemas"]["LaunchActivityInteractionCallbackRequest"] | components["schemas"]["ModalInteractionCallbackRequest"] | components["schemas"]["PongInteractionCallbackRequest"] | components["schemas"]["SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest"] | components["schemas"]["UpdateMessageInteractionCallbackRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_interaction_response */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InteractionCallbackResponse"];
                };
            };
            /** @description 204 response for create_interaction_response */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    invite_resolve: {
        parameters: {
            query?: {
                guild_scheduled_event_id?: components["schemas"]["SnowflakeType"];
                with_counts?: boolean;
            };
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for invite_resolve */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FriendInviteResponse"] | components["schemas"]["GroupDMInviteResponse"] | components["schemas"]["GuildInviteResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    invite_revoke: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for invite_revoke */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FriendInviteResponse"] | components["schemas"]["GroupDMInviteResponse"] | components["schemas"]["GuildInviteResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_invite_target_users: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_invite_target_users */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "text/csv": string;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_invite_target_users: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    target_users_file: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for update_invite_target_users */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_invite_target_users_job_status: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_invite_target_users_job_status */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TargetUsersJobStatusResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_or_join_lobby: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    flags?: null | 1;
                    /** Format: int32 */
                    idle_timeout_seconds?: number | null;
                    lobby_metadata?: {
                        [key: string]: string;
                    } | null;
                    member_metadata?: {
                        [key: string]: string;
                    } | null;
                    secret: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_or_join_lobby */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_lobby: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    flags?: null | 1;
                    /** Format: int32 */
                    idle_timeout_seconds?: number | null;
                    members?: components["schemas"]["LobbyMemberRequest"][] | null;
                    metadata?: {
                        [key: string]: string;
                    } | null;
                    /** Format: uri */
                    override_event_webhooks_url?: string | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 201 response for create_lobby */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_lobby: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_lobby */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    edit_lobby: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    flags?: null | 1;
                    /** Format: int32 */
                    idle_timeout_seconds?: number | null;
                    members?: components["schemas"]["LobbyMemberRequest"][] | null;
                    metadata?: {
                        [key: string]: string;
                    } | null;
                    /** Format: uri */
                    override_event_webhooks_url?: string | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for edit_lobby */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    edit_lobby_channel_link: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    channel_id?: null | components["schemas"]["SnowflakeType"];
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for edit_lobby_channel_link */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    add_lobby_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    flags?: null | 1;
                    metadata?: {
                        [key: string]: string;
                    } | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for add_lobby_member */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyMemberResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_lobby_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_lobby_member */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_linked_lobby_guild_invite_for_user: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_linked_lobby_guild_invite_for_user */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyGuildInviteResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    leave_lobby: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for leave_lobby */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_linked_lobby_guild_invite_for_self: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_linked_lobby_guild_invite_for_self */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyGuildInviteResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    bulk_update_lobby_members: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkLobbyMemberRequest"][] | null;
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for bulk_update_lobby_members */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyMemberResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_lobby_messages: {
        parameters: {
            query?: {
                limit?: number;
            };
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_lobby_messages */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyMessageResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_lobby_message: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SDKMessageRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["SDKMessageRequest"];
                "multipart/form-data": components["schemas"]["SDKMessageRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 201 response for create_lobby_message */
            201: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LobbyMessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_lobby_message_external_moderation_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lobby_id: components["schemas"]["SnowflakeType"];
                message_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: string;
                };
                "application/x-www-form-urlencoded": {
                    [key: string]: string;
                };
                "multipart/form-data": {
                    [key: string]: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for update_lobby_message_external_moderation_metadata */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_my_oauth2_authorization: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_my_oauth2_authorization */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OAuth2GetAuthorizationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_my_oauth2_application: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_my_oauth2_application */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateApplicationResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_public_keys: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_public_keys */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OAuth2GetKeys"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_openid_connect_userinfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_openid_connect_userinfo */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OAuth2GetOpenIDConnectUserInfoResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_user_message_external_moderation_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                message_id: components["schemas"]["SnowflakeType"];
                user_id_1: components["schemas"]["SnowflakeType"];
                user_id_2: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: string;
                };
                "application/x-www-form-urlencoded": {
                    [key: string]: string;
                };
                "multipart/form-data": {
                    [key: string]: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for update_user_message_external_moderation_metadata */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    partner_sdk_unmerge_provisional_account: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    client_id: components["schemas"]["SnowflakeType"];
                    client_secret?: string | null;
                    external_auth_token: string;
                    external_auth_type: components["schemas"]["ApplicationIdentityProviderAuthType"];
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for partner_sdk_unmerge_provisional_account */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    bot_partner_sdk_unmerge_provisional_account: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    external_user_id: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for bot_partner_sdk_unmerge_provisional_account */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    partner_sdk_token: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    client_id: components["schemas"]["SnowflakeType"];
                    client_secret?: string | null;
                    external_auth_token: string;
                    external_auth_type: components["schemas"]["ApplicationIdentityProviderAuthType"];
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for partner_sdk_token */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProvisionalTokenResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    bot_partner_sdk_token: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    external_user_id: string;
                    preferred_global_name?: string | null;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for bot_partner_sdk_token */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProvisionalTokenResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_soundboard_default_sounds: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_soundboard_default_sounds */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SoundboardSoundResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_stage_instance: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    channel_id: components["schemas"]["SnowflakeType"];
                    guild_scheduled_event_id?: null | components["schemas"]["SnowflakeType"];
                    privacy_level?: null | components["schemas"]["StageInstancesPrivacyLevels"];
                    send_start_notification?: boolean | null;
                    topic: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_stage_instance */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StageInstanceResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_stage_instance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_stage_instance */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StageInstanceResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_stage_instance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_stage_instance */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_stage_instance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    privacy_level?: components["schemas"]["StageInstancesPrivacyLevels"];
                    topic?: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_stage_instance */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StageInstanceResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_sticker_packs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_sticker_packs */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StickerPackCollectionResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_sticker_pack: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                pack_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_sticker_pack */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StickerPackResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_sticker: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                sticker_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_sticker */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GuildStickerResponse"] | components["schemas"]["StandardStickerResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_user: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_user */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_my_user: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_my_user */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPIIResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_my_user: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BotAccountPatchRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_my_user */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPIIResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_current_user_application_entitlements: {
        parameters: {
            query?: {
                exclude_consumed?: boolean;
                sku_ids?: string | (null | components["schemas"]["SnowflakeType"])[];
            };
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_current_user_application_entitlements */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EntitlementResponse"][];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_application_user_role_connection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_application_user_role_connection */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationUserRoleConnectionResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_application_user_role_connection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateApplicationUserRoleConnectionRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_application_user_role_connection */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationUserRoleConnectionResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_application_user_role_connection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                application_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_application_user_role_connection */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    create_dm: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreatePrivateChannelRequest"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for create_dm */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateChannelResponse"] | components["schemas"]["PrivateGroupChannelResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_my_connections: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_my_connections */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConnectedAccountResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_my_guilds: {
        parameters: {
            query?: {
                after?: components["schemas"]["SnowflakeType"];
                before?: components["schemas"]["SnowflakeType"];
                limit?: number;
                with_counts?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_my_guilds */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MyGuildResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    leave_guild: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for leave_guild */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_my_guild_member: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                guild_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_my_guild_member */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PrivateGuildMemberResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    list_voice_regions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for list_voice_regions */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceRegionResponse"][] | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_webhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_webhook */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_webhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_webhook */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_webhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    avatar?: string | null;
                    channel_id?: null | components["schemas"]["SnowflakeType"];
                    name?: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_webhook */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_webhook_by_token: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_webhook_by_token */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    execute_webhook: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
                wait?: boolean;
                with_components?: boolean;
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["IncomingWebhookRequestPartial"] | components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "application/x-www-form-urlencoded": components["schemas"]["IncomingWebhookRequestPartial"] | components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "multipart/form-data": components["schemas"]["IncomingWebhookRequestPartial"] | components["schemas"]["IncomingWebhookUpdateRequestPartial"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for execute_webhook */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            /** @description 204 response for execute_webhook */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_webhook_by_token: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_webhook_by_token */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_webhook_by_token: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    avatar?: string | null;
                    name?: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_webhook_by_token */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApplicationIncomingWebhookResponse"] | components["schemas"]["ChannelFollowerWebhookResponse"] | components["schemas"]["GuildIncomingWebhookResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    execute_github_compatible_webhook: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
                wait?: boolean;
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GithubWebhook"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for execute_github_compatible_webhook */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                message_id: components["schemas"]["SnowflakeType"];
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_webhook_message */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                message_id: components["schemas"]["SnowflakeType"];
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_webhook_message */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
                with_components?: boolean;
            };
            header?: never;
            path: {
                message_id: components["schemas"]["SnowflakeType"];
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "application/x-www-form-urlencoded": components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "multipart/form-data": components["schemas"]["IncomingWebhookUpdateRequestPartial"] & {
                    "files[0]"?: string;
                    "files[1]"?: string;
                    "files[2]"?: string;
                    "files[3]"?: string;
                    "files[4]"?: string;
                    "files[5]"?: string;
                    "files[6]"?: string;
                    "files[7]"?: string;
                    "files[8]"?: string;
                    "files[9]"?: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_webhook_message */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    get_original_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for get_original_webhook_message */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    delete_original_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 204 response for delete_original_webhook_message */
            204: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content?: never;
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    update_original_webhook_message: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
                with_components?: boolean;
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "application/x-www-form-urlencoded": components["schemas"]["IncomingWebhookUpdateRequestPartial"];
                "multipart/form-data": components["schemas"]["IncomingWebhookUpdateRequestPartial"] & {
                    "files[0]"?: string;
                    "files[1]"?: string;
                    "files[2]"?: string;
                    "files[3]"?: string;
                    "files[4]"?: string;
                    "files[5]"?: string;
                    "files[6]"?: string;
                    "files[7]"?: string;
                    "files[8]"?: string;
                    "files[9]"?: string;
                };
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for update_original_webhook_message */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
    execute_slack_compatible_webhook: {
        parameters: {
            query?: {
                thread_id?: components["schemas"]["SnowflakeType"];
                wait?: boolean;
            };
            header?: never;
            path: {
                webhook_id: components["schemas"]["SnowflakeType"];
                webhook_token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SlackWebhook"];
                "application/x-www-form-urlencoded": components["schemas"]["SlackWebhook"];
                "multipart/form-data": components["schemas"]["SlackWebhook"];
            };
        };
        responses: {
            "4XX": components["responses"]["ClientErrorResponse"];
            /** @description 200 response for execute_slack_compatible_webhook */
            200: {
                headers: {
                    "X-RateLimit-Bucket": components["headers"]["X-RateLimit-Bucket"];
                    "X-RateLimit-Limit": components["headers"]["X-RateLimit-Limit"];
                    "X-RateLimit-Remaining": components["headers"]["X-RateLimit-Remaining"];
                    "X-RateLimit-Reset": components["headers"]["X-RateLimit-Reset"];
                    "X-RateLimit-Reset-After": components["headers"]["X-RateLimit-Reset-After"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string | null;
                };
            };
            429: components["responses"]["ClientRatelimitedResponse"];
        };
    };
}
