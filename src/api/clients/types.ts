export interface Client {
  id: string | number;
  businessId: number;
  businessName: string;
  clientAppointmentHistoryUrl: string;
  clientId: number;
  clientSinceDate: string;
  email: string;
  firstName: string;
  gender: string;
  isAnonymous: boolean;
  isBlocked: boolean;
  isOffline: boolean;
  languagePreference: string;
  lastLoginDateTime: string;
  lastName: string;
  paymentGatewayCustomerId: number;
  tags: Tag[];
  telephone: string;
  uniqueIdentifier: string;
  userId: number;
  userProfilePicture: string;
  dependents: unknown[];
  label: string;
}

export interface Tag {
  id: number;
  name: string;
}
