export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ebb0c2d5109231193202660',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-previews-studio-1ub3qbub',
                  apiId: '9b964e58-9d52-4cd5-9346-387804ba855d'
                },
                {
                  buildHookId: '5ebb0c1e3aa8174fd0b5547d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-previews-web',
                  apiId: '38f7b2f7-e36a-43cb-b97c-80bddcec4c6d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krsnaa/sanity-gatsby-portfolio-previews',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-previews-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
