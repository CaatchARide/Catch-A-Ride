import React from 'react'

export const posts = () => {
    constructor(props){
        super(props);

        this.state = {
            date: '',
            time: '',
            from: '',
            to: '',
            price: '',
            message: '',
            trips: []
        
        }
    }

    onChangeDate(e){
        this.setState({
            date: e.target.value
        });
    }

    onChangeTime(e){
        this.setState({
            time: e.target.value
        });
    }

    onChangeFrom(e){
        this.setState({
            from: e.target.value
        });
    }

    onChangeTo(e){
        this.setState({
            to: e.target.value
        });
    }

    onChangePrice(e){
        this.setState({
            price: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const trip = {
            date: this.state.date,
            time: this.state.time,
            from: this.state.from,
            to: this.state.to,
            price: this.state.price
        }

        console.log(trip)
    }



    render() {
    return (
        <div>
            
        </div>
    )
}
}
