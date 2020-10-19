module.exports = {
    mongodbMemoryServerOptions: {
        instance: {
            dbName: 'jest'
        },
        binary: {
            version: '4.0.14',
            skipMD5: true
        },
        autostart: false
    }
}