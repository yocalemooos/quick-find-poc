export interface Client {
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
}

export interface Tag {
  id: number;
  name: string;
}
