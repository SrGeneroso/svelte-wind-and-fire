export function emailValidator(input) {
	if (
		input &&
		!!input.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
	) {
		return {
			valid: true,
			message: 'The email field is valid'
		};
	}

	return {
		valid: false,
		message: 'Please add a correct email address'
	};
}
