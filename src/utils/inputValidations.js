/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'write your name ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const desc_validation = {
  name: 'description',
  label: 'description',
  multiline: true,
  id: 'description',
  placeholder: 'write description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
}

export const num_validation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  placeholder: 'write a random number',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const email_validation = {
  name: 'email',
  label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'write a random email address',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}

export const department_validation = {
  name: 'department',
  label: 'Department',
  type: 'select', 
  id: 'department',
  // placeholder: 'Select department...',
  options: [
    { value: '', label: 'Please select a department...' }, 
    { value: 'IT', label: 'IT' },
    { value: 'HR', label: 'HR' },
    { value: 'Marketing', label:'Marketing'},
    { value: 'Engineering' , label: 'Engineering'},
  ],
  validation: {
    required: {
      value: true,
      message: 'required', // Ensuring a selection is made
    },
  },
}

export const employeeType_validation = {
  name: 'employeeType',
  label: 'Employee Type',
  type: 'select', 
  id: 'employeeType',
  // placeholder: 'Select employee type...',
  options: [ 
    { value: '', label: 'Please select an employee type...' }, 
    { value: 'FullTime', label: 'Full Time' },
    { value: 'PartTime', label: 'Part Time' },
    { value: 'Contract', label: 'Contract' },
    { value: 'Seasonal', label: 'Seasonal' },
  ],
  validation: {
    required: {
      value: true,
      message: 'required', 
    },
  },
}

export const designation_validation = {
  name: 'designation',
  label: 'Designation',
  type: 'select',
  id: 'designation',
  // placeholder: 'Select designation...', // Commented out as it's not always used in select implementations
  options: [
    { value: '', label: 'Please select a designation...' },
    { value: 'Employee', label: 'Employee' },
    { value: 'Manager', label: 'Manager' },
    { value: 'Director', label: 'Director' },
    { value: 'VP', label: 'VP' },
  ],
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}


