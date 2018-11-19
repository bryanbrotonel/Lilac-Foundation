// Initial Redux state
export default {
    base: {
        socials: [],
        headerImage: '',
        placeholderImage: ''
    },
    home :{
        aboutBlurb: '',
        donateBlurb: '',
        loading: false
    },
    projects: {
        loading: false,
        projects: [],
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