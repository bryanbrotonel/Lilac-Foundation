// Initial Redux state
export default {
    base: {
        lilacLogo: '',
        footerBlurb: [],
        socials: [],
        headerImage: '',
        placeholderImage: ''
    },
    home: {
        TLFCrest: '',
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