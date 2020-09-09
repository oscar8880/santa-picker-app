export interface Contact {
  name: string;
  email: string;
}

export interface PairedContact {
  contact: Contact;
  assignedContact: Contact;
}
