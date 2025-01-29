import { AuthData } from "../../redux/authSlice/authSlice.interface.ts";
interface AuthInputs {
	value: keyof Omit<AuthData, 'isStateInstance'>;
	type: string;
	required: boolean;
	minLength?: number,
	maxLength?: number,
}

export const authInputs: AuthInputs[] = [
	{
		value: 'idInstance',
		type: 'text',
		required: true,
	},
	{
		value: 'apiTokenInstance',
		type: 'text',
		required: true,
	},
	{
		value: 'phoneNumber',
		type: 'text',
		required: true,
		minLength: 11,
		maxLength: 11,
	},
]
