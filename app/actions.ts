'use server';

import { revalidatePath } from 'next/cache';

export interface ConsultationActionResponse {
  success: boolean;
  message: string;
  data?: {
    bookingId: string;
    name: string;
    email: string;
    serviceInterest: string;
    preferredDate: string;
    timeSlot: string;
  };
  error?: string;
}

export interface ContactActionResponse {
  success: boolean;
  message: string;
  data?: {
    inquiryId: string;
    fullName: string;
    email: string;
    service: string;
  };
  error?: string;
}

/**
 * Server Action to schedule a 20-minute Strategy Consultation Call
 */
export async function submitConsultationAction(formData: FormData): Promise<ConsultationActionResponse> {
  try {
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const websiteUrl = (formData.get('websiteUrl') as string)?.trim() || '';
    const serviceInterest = (formData.get('serviceInterest') as string)?.trim() || 'WordPress Kadence Customization';
    const projectScope = (formData.get('projectScope') as string)?.trim() || 'New Website / Full Redesign';
    const preferredDate = (formData.get('preferredDate') as string)?.trim() || new Date().toISOString().split('T')[0];
    const timeSlot = (formData.get('timeSlot') as string)?.trim() || '11:00 AM EST';
    const notes = (formData.get('notes') as string)?.trim() || '';

    // Validation
    if (!name || name.length < 2) {
      return { success: false, message: 'Please provide a valid name (at least 2 characters).' };
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { success: false, message: 'Please provide a valid email address.' };
    }

    const bookingId = `JS-CALL-${Date.now().toString(36).toUpperCase()}`;

    // Here an email notification, CRM lead sync (e.g. HubSpot, Mailchimp) or database insertion occurs
    console.log('[Jet Slate Consultation Booking Received]', {
      bookingId,
      name,
      email,
      websiteUrl,
      serviceInterest,
      projectScope,
      preferredDate,
      timeSlot,
      notes,
      timestamp: new Date().toISOString(),
    });

    revalidatePath('/');
    return {
      success: true,
      message: `Your 20-Minute Strategy Call has been confirmed for ${preferredDate} at ${timeSlot}! Check your inbox at ${email}.`,
      data: {
        bookingId,
        name,
        email,
        serviceInterest,
        preferredDate,
        timeSlot,
      },
    };
  } catch (err: any) {
    console.error('submitConsultationAction error:', err);
    return {
      success: false,
      message: 'Failed to schedule consultation call. Please try again or email us directly at mail@jetslate.com.',
      error: err?.message || 'Internal error',
    };
  }
}

/**
 * Server Action to submit an Agency Project Inquiry
 */
export async function submitContactInquiryAction(formData: FormData): Promise<ContactActionResponse> {
  try {
    const firstName = (formData.get('firstName') as string)?.trim();
    const lastName = (formData.get('lastName') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const subject = (formData.get('subject') as string)?.trim() || 'New Project Inquiry';
    const message = (formData.get('message') as string)?.trim();
    const selectedService = (formData.get('selectedService') as string)?.trim() || 'WordPress Kadence Customization';
    const preferredContact = (formData.get('preferredContact') as string)?.trim() || 'email';
    const date = (formData.get('date') as string)?.trim() || '';
    const timeSlot = (formData.get('timeSlot') as string)?.trim() || '';

    // Validation
    if (!firstName || !lastName) {
      return { success: false, message: 'Please provide your first and last name.' };
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { success: false, message: 'Please enter a valid email address.' };
    }
    if (!message || message.length < 5) {
      return { success: false, message: 'Please provide a brief message about your project.' };
    }

    const inquiryId = `JS-INQ-${Date.now().toString(36).toUpperCase()}`;

    console.log('[Jet Slate Project Inquiry Received]', {
      inquiryId,
      fullName: `${firstName} ${lastName}`,
      email,
      subject,
      message,
      selectedService,
      preferredContact,
      date,
      timeSlot,
      timestamp: new Date().toISOString(),
    });

    revalidatePath('/contact');
    return {
      success: true,
      message: `Thank you, ${firstName}! We received your project inquiry (${inquiryId}) and will get back to you within 4-8 business hours.`,
      data: {
        inquiryId,
        fullName: `${firstName} ${lastName}`,
        email,
        service: selectedService,
      },
    };
  } catch (err: any) {
    console.error('submitContactInquiryAction error:', err);
    return {
      success: false,
      message: 'Failed to submit inquiry. Please email mail@jetslate.com or call +1 (419) 622-8499.',
      error: err?.message || 'Internal error',
    };
  }
}
