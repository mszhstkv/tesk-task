import * as axios from "axios"

const instance = axios.create({
    baseURL:"https://mszhstkv.github.io/test-task/",         // for local: http://localhost:3000/test-task/ || for gh pages: https://mszhstkv.github.io/test-task/ \\
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
})

export const dataAPI = {
    getFeedBack() {
        return instance.get("feedback_data.json")
            .then(response => {
                return response.data;
            })
    },

    getBlogPost() {
        return instance.get("blog_posts.json")
            .then(response => {
                return response.data;
            })
    }
}