export interface GetUsersArgs {
  gender: string;
  page: number;
  resultsCount: number;
  nat: string;
}

export interface UserType {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: DateAndAge;
  registered: DateAndAge;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  postcode: string;
  coordinates: Coorditates;
  timezone: Timezone;
}

interface Street {
  name: string;
  number: number;
}

interface Coorditates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface DateAndAge {
  date: string;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
