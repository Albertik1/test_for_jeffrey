import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mob: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://419neo2er9.execute-api.us-east-2.amazonaws.com/default/send-OTP', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { mob} = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="mob"
							value={mob}
							onChange={this.changeHandler}
						/>
					</div>
				
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm
