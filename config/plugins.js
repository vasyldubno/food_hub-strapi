module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },

  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET'),
      },

      actionOptions: {
        uploadStream: {
          folder: env('CLOUDINARY_FOLDER')
        },
        delete: {},
      },
    },
  },

  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_RvOhvDWQBkfMZ8Aowq1NozD108Tu/5xZ5Z3kN09",
      apiToken: "bRBaEUbtqNTPJdYtU4bNDoKq",
      appFilter: "food-hub-strapi",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"]
    }
  }
});
