function Subject() {
    this.observersList = []
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observersList.push(fn)
    },

    unsubscribe: function(fn) {
        this.observersList = this.observersList.filter(f => {
            if(f != fn) return f
        })
    },
  
    notify: function() {
        this.observersList.forEach(fn => fn.call())
    }
}

const subject = new Subject() 

function Observer1() {
    console.log('Observer 1 firing!')
}
function Observer2() {
    console.log('Observer 2 firing!')
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.unsubscribe(Observer2)

subject.notify()