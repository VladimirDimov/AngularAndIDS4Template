// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;
using static IdentityServer4.Models.IdentityResources;

namespace IdentityServer
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> IdentityResources =>
            new IdentityResource[]
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };

        public static IEnumerable<ApiResource> ApiResources =>
        new ApiResource[]
        {
            new ApiResource("m2m.client", "m2m.client")
            {
                Scopes = { "m2m.client.read", "m2m.client.write", "m2m.client", JwtClaimTypes.Role, JwtClaimTypes.Name }
            }
        };

        public static IEnumerable<ApiScope> ApiScopes =>
            new ApiScope[]
            {
                new ApiScope("scope1"),
                new ApiScope("scope2"),
                new ApiScope("m2m.client"),
                new ApiScope("role"),
            };

        public static IEnumerable<Client> Clients =>
            new Client[]
            {
                // m2m client credentials flow client
                new Client
                {
                    ClientId = "m2m.client",
                    ClientName = "m2m.client",

                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    ClientSecrets = { new Secret("511536EF-F270-4058-80CA-1C89C192F69A") },

                    AllowedScopes = { "scope1" },
                },

                // interactive client using code flow + pkce
                new Client
                {
                    ClientId = "my-angular-app",
                    ClientSecrets = { new Secret("123456789-aA") },
                    RequireClientSecret = false,
                    AllowedGrantTypes = GrantTypes.Code,

                    RedirectUris = {"http://localhost:4200" },
                    FrontChannelLogoutUri = "http://localhost:4200",
                    PostLogoutRedirectUris = { "http://localhost:4200" },
                    RequirePkce = true,
                    AllowOfflineAccess = true,
                    AllowedScopes = { "openid", "profile", "m2m.client", JwtClaimTypes.Role },
                },
            };
    }
}