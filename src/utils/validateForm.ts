export interface IValidateForm {
  isEmailvalid?: boolean;
  isPasswordValid?: boolean;
}

// export interface IInputForm{
//     email? : string,
//     passwrod? : string
// }

export const validateForm = (email:string = "", password: string = "") => {
  const isEmailvalid = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  // ^ → Start of string
  // [a-zA-Z0-9._%+-]+ → Allows alphanumeric characters and ._%+- before @
  // @ → Must contain @
  // [a-zA-Z0-9.-]+ → Domain name (e.g., gmail, yahoo)
  // \. → Must contain a . before domain extension
  // [a-zA-Z]{2,}$ → Domain extension (e.g., .com, .org, .io)
  // $ → End of string
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/.test(
      password
    );

  //  ^ → Start of string
  // (?=.*[A-Z]) → At least one uppercase letter
  // (?=.*[a-z]) → At least one lowercase letter
  // (?=.*\d) → At least one digit (0-9)
  // (?=.*[@$!%*?&]) → At least one special character (@ $ ! % * ? &)
  // [A-Za-z\d@$!%*?&]{8,} → Minimum 8 characters (letters, numbers, special chars)
  // $ → End of string

  return { isEmailvalid, isPasswordValid };
};

// Symbol	Meaning
// .	Matches any character except a newline
// ^	Start of the string
// $	End of the string
// \d	Any digit (0-9)
// \w	Any word character (a-z, A-Z, 0-9, _)
// \s	Any whitespace character (space, tab, newline)
// +	One or more of the previous character
// *	Zero or more of the previous character
// {n,m}	Between n and m times
// ?=	Lookahead (ensures something is present but doesn’t consume it)
