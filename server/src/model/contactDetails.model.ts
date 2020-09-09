export interface SantaPickerRequestDetails {
  organiserName: string;
  contacts: Contact[];
  spendingLimit?: string;
}

export interface Contact {
  name: string;
  email: string;
}

export interface PairedContact {
  contact: Contact;
  assignedContact: Contact;
}
