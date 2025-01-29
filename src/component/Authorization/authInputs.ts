import { AuthData } from "../../redux/chatSlice/chatSlice.interface.ts";

type ValueProps = AuthData & { phoneNumber: string };

interface AuthInputs {
	value: keyof ValueProps;
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
