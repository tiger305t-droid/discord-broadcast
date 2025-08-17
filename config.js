module.exports = {
    bot: {
        tokens: [
            process.env.DISCORD_TOKEN,
            process.env.DISCORD_TOKEN_2,
        ].filter(Boolean) ,

        defaultLanguage: 'ar', // ar | en لغة البوت
        
        activity: {
            name: 'CAS Studio', // رسالة حالة البوت
            type: 'Streaming', // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
            status: 'dnd' // online, idle, dnd, invisible
        }
    },
    server: {
        guildId: '990661091950460928',         // ايدي السيرفر
        broadcastRoleId: '1255836155178516540', // ايدي الرول اللي يستخدم عليها البوت
        reportChannelId: '1279293184161091656' // ايدي الروم اللي يرسل فيه البوت التقارير
    },
    broadcast: {
        cooldownTime: 1000, // لا تلعب فيها
        memberCooldown: 100, // لا تلعب فيها
        requestsPerSecond: 1 // لا تلعب فيها
    },

    colors: {
        primary: '#5865F2',    // Discord Blue (used for standard messages)
        success: '#57F287',    // Green (used for successful operations)
        warning: '#FEE75C',    // Yellow (used for warnings)
        error: '#ED4245',      // Red (used for errors)
        neutral: '#5D5D5D'     // Gray (used for neutral messages)
    }

};

