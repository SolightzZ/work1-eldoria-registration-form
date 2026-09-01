export const STUDENT_ID = '66040233122';
export const STUDENT_NAME = 'นายปณิธิ จ่าเหม';

export const EXPERIENCE_OPTIONS = [
   { value: 'No experience', label: 'No experience' },
   { value: 'Amateur (up to 1 year)', label: 'Amateur (up to 1 year)' },
   { value: 'Intermediate (1–5 years)', label: 'Intermediate (1–5 years)' },
   { value: 'Professional (more than 5 years)', label: 'Professional (more than 5 years)' },
] as const;

export const ROLE_OPTIONS = [
   { value: 'Researcher', label: 'Researcher', descTh: 'นักวิจัย' },
   { value: 'Photographer', label: 'Photographer', descTh: 'ช่างภาพ' },
   { value: 'Drone Operator', label: 'Drone Operator', descTh: 'ผู้ควบคุมโดรน' },
   { value: 'Cartographer', label: 'Cartographer', descTh: 'นักทำแผนที่' },
   { value: 'Medic', label: 'Medic', descTh: 'แพทย์' },
] as const;

export const REGION_OPTIONS = [
   { value: 'South America', label: 'South America', descTh: 'อเมริกาใต้' },
   { value: 'Africa', label: 'Africa', descTh: 'แอฟริกา' },
   { value: 'Asia', label: 'Asia', descTh: 'เอเชีย' },
   { value: 'Europe', label: 'Europe', descTh: 'ยุโรป' },
   { value: 'Australia', label: 'Australia', descTh: 'ออสเตรเลีย' },
] as const;

export const CONTACT_METHOD_OPTIONS = [
   { value: 'Email', label: 'Email' },
   { value: 'Phone', label: 'Phone' },
   { value: 'WhatsApp', label: 'WhatsApp' },
   { value: 'Telegram', label: 'Telegram' },
] as const;

export const ACCEPTED_FILE_TYPES = '.jpg,.jpeg,.png,.pdf';
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const DEMO_FORM_DATA = {
   fullName: 'Peter Ford',
   email: 'peter.ford@eldoria-expedition.com',
   contactNumber: '+1234567890',
   dateOfBirth: '1998-06-20',
   experience: 'Intermediate (1–5 years)',
   preferredRole: ['Drone Operator', 'Photographer'],
   preferredRegion: 'South America',
   salary: 700,
   contactMethod: 'Email',
   passportFile: null,
   comment: 'Experienced in jungle navigation and drone mapping in South America.',
   accept: true,
};
