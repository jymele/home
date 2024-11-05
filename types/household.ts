export type Household = {
  id: string;
  name: string;
};

export type UserHouseholdAssignment = {
  id: string;
  user_email: string;
  household_id: string;
  is_admin: boolean;
};
