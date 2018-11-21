// Initial Redux state
export default {
    base: {
        socials: [],
        headerImage: '',
        placeholderImage: ''
    },
    home: {
        aboutBlurb: '',
        donateBlurb: '',
        loading: false
    },
    projects: {
        loading: false,
        currentProjects: [],
        futureProjects: [],
        projectPost: []
    },
    blog: {
        loading: false,
        posts: [],
        singlePost: []
    },
    team: {
        loading: false,
        teamMembers: []
    }
}