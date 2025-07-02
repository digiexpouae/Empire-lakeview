export default{
    name:'post',
    title:'Post',
    type:'document' ,
    fields:[{name:'Image',type:'image',options:{
        hotspot:true
    }},
       {name:"title",title:'title',type:'string'},
       {
        name: "publishedDate",
        type: "date",
        title: "Published Date",
        options: {
          dateFormat: "YYYY-MM-DD",
        }},
       {name:'content',title:'Content', type: 'array',
        of: [{ type: 'block' }]},  {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            slugify: input => input
              .toLowerCase()
              .replace(/\s+/g, '-') // Replace spaces with hyphens
              .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters
              .slice(0, 200) // Limit length
          }
      }

    ]
   }