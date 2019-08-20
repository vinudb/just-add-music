export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const musicItems = [
    {
        id: "03ddbda6-7e03-11e9-8f2a-022ed69f96e6",
        name: "For Flo 11",
        artist_name: "Rpj16###",
        cover_image_path: "https://mmj-staging.s3-accelerate.amazonaws.com/assets/cover_image/03d1a974-7e03-11e9-8f2a-022ed69f96e6.jpeg?cb=20190524110502",
        music_file_path: "https://mmj-staging.s3-accelerate.amazonaws.com/assets/music_file/0302591a-7e03-11e9-8f2a-022ed69f96e6.m4a?cb=20190524110501"
    },
    {
        id: "4c621802-7e02-11e9-8f2a-022ed69f96e6",
        name: "For Flo 10",
        artist_name: "Rpj16###",
        cover_image_path: "https://mmj-staging.s3-accelerate.amazonaws.com/assets/cover_image/4c5c65e8-7e02-11e9-8f2a-022ed69f96e6.jpeg?cb=20190524105954",
        music_file_path: "https://mmj-staging.s3-accelerate.amazonaws.com/assets/music_file/4bc08c06-7e02-11e9-8f2a-022ed69f96e6.m4a?cb=20190524105953"
    }
]