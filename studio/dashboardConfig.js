export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a014ac73c18e1ee8cf18f9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xkp4j12s',
                  apiId: '67a01559-d84f-4cde-bdd1-085b0ee85705'
                },
                {
                  buildHookId: '62a014ad2961f81f8d8f3f91',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4gbipgpd',
                  apiId: '90bc939e-a9b7-48a6-bf6a-690dc5e16b9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hermioxo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4gbipgpd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
