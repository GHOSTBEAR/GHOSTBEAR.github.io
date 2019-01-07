const api = new Kitsu()

var app = new Vue({
    el: '#app',
    data: {
        items: null
    },
    created: function () {
        api.fetch('users/87313/library-entries', {
                filter: {
                    //kind: 'anime',
                    status: 'current'
                },
                sort: '-progressedAt',
                include: 'media'
            })
            .then(res => {
                console.info(res.data)
                this.items = res.data
            })
            .catch(err => console.error(err))
    }
})