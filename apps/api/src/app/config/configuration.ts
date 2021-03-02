export default () => ({
  // 端口
  port: parseInt(process.env.PORT, 10) || 8080,
  apiPath: 'api',
  apiDocPath:'apidoc',
  // keycloak
  keycloak: {
    url: process.env.SERVICE_KEYCLOAK_ADDRESS || 'http://localhost:8081/auth',
    realmName: process.env.KEYCLOAK_REALM_NAME || 'cofco',
    adminUrl: process.env.KEYCLOAK_ROOTURL || 'http://portal.baoli.com:4200',
    api: {
      client: process.env.KEYCLOAK_CLIENT || 'test_portal_node',
      name: process.env.KEYCLOAK_NAME || '门户服务端',
      description: process.env.KEYCLOAK_DESCRIPTION || '门户服务端',
      secret:
        process.env.KEYCLOAK_SECRET || 'd94f33fb-7752-4d03-9b88-a6f1c0ed9d52',
      // bearerOnly:true
    },
    web: {
      client: process.env.KEYCLOAK_WEB_CLIENT || 'test_portal_web',
      name: process.env.KEYCLOAK_WEB_NAME || '门户客户端',
      description: process.env.KEYCLOAK_WEB_DESCRIPTION || '门户客户端',
    },
    admin: {
      clientId: process.env.KEYCLOAK_ADMIN_CLI_CLIENT_ID || 'admin-cli',
      username: process.env.KEYCLOAK_ADMIN_CLI_USERNAME || 'cofco_admin', //'keycloak',
      password: process.env.KEYCLOAK_ADMIN_CLI_PASSWORD || '111111',
      grantType: process.env.KEYCLOAK_ADMIN_CLI_GRANT_TYPE || 'password',
      clientSecret:
        process.env.KEYCLOAK_ADMIN_CLI_CLIENT_SECRET ||
        '73e6416a-4baa-4391-9e0c-29f16256151a',
    },
  },
});
