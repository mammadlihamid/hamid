import Blog from '../../../images/blog.png'
import travel from '../../../images/travel.png'

export const projectsData = [
    {
        name: "Blog",
        description: "Şəxsi blog səhifəm.",
        demo: "https://mammadlihamid.github.io/",
        code: "https://hamid.vercel.app",
        image: `${Blog}`,        
        tags: [
            {
                tagName: '#react'
            },
            {
                tagName: '#tailwindcss'
            },
        ]
    },
    {
        name: "Travel",
        description: "Figmadan düzəltdiyim ilk səhifəm.",
        demo: "https://mammadlihamid.github.io/travel/",
        code: "https://github.com/mammadlihamid/travel",
        image: `${travel}`,
        tags: [
            {
                tagName: '#html'
            },
            {
                tagName: '#css'
            }
        ]
    }
]