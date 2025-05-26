export default {
    populate: {
        siteData: {
            populate: {
                favicon: true,
                seo: {
                    populate: {
                        shareImage: true,
                    },
                },
            },
        },
        personal: {
            populate: {
                profileImg: true,
            },
        },
        skills: {
            populate: {
                icon: true,
            },
        },
        resume: {
            populate: {
                file: true,
                downloadIcon: {
                    populate: {
                        dark: true,
                        light: true,
                    },
                },
                viewIcon: {
                    populate: {
                        dark: true,
                        light: true,
                    },
                },
            },
        },
        themeIcon: {
            populate: {
                dark: true,
                light: true,
            },
        },
        socials: {
            populate: {
                icon: {
                    populate: {
                        dark: true,
                        light: true,
                    },
                },
            },
        },
        addressImg: true,
        experiences: {
            populate: {
                companyIcon: true,
                descriptions: true,
            },
        },
        projects: {
            populate: {
                image: true,
            },
        },
    },
    publicationState: 'live',
};
