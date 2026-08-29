import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { departments } from '../../data/departments';
import { doctors } from '../../data/doctors';
import { User, Calendar, CheckCircle2, ChevronRight, ChevronLeft, AlertCircle } from 'lucide-react';

type Step = 1 | 2 | 3;

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  departmentId: string;
  doctorId: string;
  date: string;
  time: string;
  notes: string;
}

const Appointment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedDept = searchParams.get('department') || '';
  const preselectedDoc = searchParams.get('doctor') || '';

  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    gender: '',
    departmentId: preselectedDept,
    doctorId: preselectedDoc,
    date: '',
    time: '',
    notes: ''
  });

  // If doctor is preselected, auto-select their department
  useEffect(() => {
    if (preselectedDoc) {
      const doc = doctors.find(d => d.id === preselectedDoc);
      if (doc) {
        const dept = departments.find(d => d.name === doc.department);
        if (dept) {
          setFormData(prev => ({ ...prev, departmentId: dept.id }));
        }
      }
    }
  }, [preselectedDoc]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book Appointment | Lifeline Care Hospital";
  }, [step]);

  const availableDoctors = formData.departmentId 
    ? doctors.filter(doc => {
        const dept = departments.find(d => d.id === formData.departmentId);
        return dept && doc.department === dept.name;
      })
    : doctors;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\D/g,''))) newErrors.phone = 'Valid 10-digit phone is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.departmentId) newErrors.departmentId = 'Department is required';
    if (!formData.doctorId) newErrors.doctorId = 'Doctor is required';
    if (!formData.date) newErrors.date = 'Appointment date is required';
    if (!formData.time) newErrors.time = 'Appointment time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) setStep(2);
    if (step === 2 && validateStep2()) setStep(3);
  };

  const prevStep = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  const submitAppointment = () => {
    setStatus('loading');
    
    // Simulate API Call
    setTimeout(() => {
      // Simulate 10% chance of random network error for realism, otherwise success
      if (Math.random() > 0.9) {
        setStatus('error');
      } else {
        setStatus('success');
      }
    }, 2000);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-12 max-w-2xl mx-auto">
      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 1 ? 'bg-primary border-primary text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
          1
        </div>
        <span className={`text-xs mt-2 font-medium ${step >= 1 ? 'text-primary-dark' : 'text-gray-400'}`}>Patient Details</span>
      </div>
      
      <div className={`flex-grow h-1 mx-4 rounded ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
      
      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 2 ? 'bg-primary border-primary text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
          2
        </div>
        <span className={`text-xs mt-2 font-medium ${step >= 2 ? 'text-primary-dark' : 'text-gray-400'}`}>Appointment</span>
      </div>
      
      <div className={`flex-grow h-1 mx-4 rounded ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
      
      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 3 ? 'bg-primary border-primary text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
          3
        </div>
        <span className={`text-xs mt-2 font-medium ${step >= 3 ? 'text-primary-dark' : 'text-gray-400'}`}>Confirm</span>
      </div>
    </div>
  );

  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-primary-dark mb-4">Book an Appointment</h1>
          <p className="text-text-muted">Fill out the form below to schedule your visit with our specialists.</p>
        </div>

        {status === 'success' ? (
          <div className="bg-white rounded-2xl shadow-floating border border-border p-12 text-center fade-in">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-primary-dark mb-4">Appointment Confirmed!</h2>
            <p className="text-lg text-text-muted mb-8 max-w-lg mx-auto">
              Thank you, {formData.firstName}. Your appointment has been successfully scheduled. We've sent a confirmation email to {formData.email}.
            </p>
            <div className="bg-background-soft p-6 rounded-xl border border-border max-w-md mx-auto mb-8 text-left">
              <p className="flex justify-between mb-3"><span className="text-text-muted">Date:</span> <span className="font-bold text-text">{formData.date}</span></p>
              <p className="flex justify-between mb-3"><span className="text-text-muted">Time:</span> <span className="font-bold text-text">{formData.time}</span></p>
              <p className="flex justify-between"><span className="text-text-muted">Doctor:</span> <span className="font-bold text-text">{doctors.find(d => d.id === formData.doctorId)?.name}</span></p>
            </div>
            <Link to="/" className="btn-primary">Return to Home</Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-card border border-border p-8 md:p-12">
            {renderStepIndicator()}

            {status === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start fade-in">
                <AlertCircle className="text-red-500 mr-3 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-red-800">Connection Error</h4>
                  <p className="text-sm text-red-700">There was a problem processing your request. Please try again.</p>
                </div>
              </div>
            )}

            {/* Step 1: Patient Details */}
            {step === 1 && (
              <div className="space-y-6 fade-in">
                <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center border-b border-border pb-4">
                  <User className="mr-3 text-primary" /> Patient Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.firstName ? 'border-red-500' : 'border-border'}`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.lastName ? 'border-red-500' : 'border-border'}`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.phone ? 'border-red-500' : 'border-border'}`}
                      placeholder="9876543210"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.email ? 'border-red-500' : 'border-border'}`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1">Date of Birth *</label>
                    <input 
                      type="date" 
                      name="dob" 
                      value={formData.dob}
                      onChange={handleInputChange}
                      max={new Date().toISOString().split("T")[0]}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.dob ? 'border-red-500' : 'border-border'}`}
                    />
                    {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1">Gender *</label>
                    <select 
                      name="gender" 
                      value={formData.gender}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.gender ? 'border-red-500' : 'border-border'}`}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <button onClick={nextStep} className="btn-primary px-8 flex items-center">
                    Continue <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Appointment Details */}
            {step === 2 && (
              <div className="space-y-6 fade-in">
                <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center border-b border-border pb-4">
                  <Calendar className="mr-3 text-primary" /> Appointment Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1">Department *</label>
                    <select 
                      name="departmentId" 
                      value={formData.departmentId}
                      onChange={(e) => {
                        handleInputChange(e);
                        // Reset doctor when department changes
                        setFormData(prev => ({ ...prev, doctorId: '' }));
                      }}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.departmentId ? 'border-red-500' : 'border-border'}`}
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                      ))}
                    </select>
                    {errors.departmentId && <p className="text-red-500 text-xs mt-1">{errors.departmentId}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1">Doctor *</label>
                    <select 
                      name="doctorId" 
                      value={formData.doctorId}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.doctorId ? 'border-red-500' : 'border-border'}`}
                      disabled={!formData.departmentId && availableDoctors.length > 5} // Only disable if too many doctors and no dept selected
                    >
                      <option value="">Select Doctor</option>
                      {availableDoctors.map(doc => (
                        <option key={doc.id} value={doc.id}>Dr. {doc.name}</option>
                      ))}
                    </select>
                    {errors.doctorId && <p className="text-red-500 text-xs mt-1">{errors.doctorId}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text mb-1">Preferred Date *</label>
                    <input 
                      type="date" 
                      name="date" 
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.date ? 'border-red-500' : 'border-border'}`}
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text mb-1">Preferred Time *</label>
                    <select 
                      name="time" 
                      value={formData.time}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.time ? 'border-red-500' : 'border-border'}`}
                    >
                      <option value="">Select Time Slot</option>
                      <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                      <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                      <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                      <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                      <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                      <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                    </select>
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-text mb-1">Additional Notes (Optional)</label>
                    <textarea 
                      name="notes" 
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Any specific symptoms or information the doctor should know..."
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button onClick={prevStep} className="btn-secondary px-8 flex items-center">
                    <ChevronLeft size={18} className="mr-2" /> Back
                  </button>
                  <button onClick={nextStep} className="btn-primary px-8 flex items-center">
                    Review <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Confirm */}
            {step === 3 && (
              <div className="space-y-8 fade-in">
                <h2 className="text-2xl font-bold text-primary-dark mb-2 flex items-center border-b border-border pb-4">
                  Review Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-background-soft p-6 rounded-xl border border-border">
                    <h3 className="text-lg font-bold text-text mb-4">Patient Info</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between border-b border-gray-200 pb-2"><span className="text-text-muted">Name:</span> <span className="font-semibold text-text">{formData.firstName} {formData.lastName}</span></li>
                      <li className="flex justify-between border-b border-gray-200 pb-2"><span className="text-text-muted">Phone:</span> <span className="font-semibold text-text">{formData.phone}</span></li>
                      <li className="flex justify-between border-b border-gray-200 pb-2"><span className="text-text-muted">Email:</span> <span className="font-semibold text-text">{formData.email}</span></li>
                      <li className="flex justify-between border-b border-gray-200 pb-2"><span className="text-text-muted">DOB:</span> <span className="font-semibold text-text">{formData.dob}</span></li>
                      <li className="flex justify-between"><span className="text-text-muted">Gender:</span> <span className="font-semibold text-text">{formData.gender}</span></li>
                    </ul>
                  </div>

                  <div className="bg-background-soft p-6 rounded-xl border border-border">
                    <h3 className="text-lg font-bold text-text mb-4">Appointment Info</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between border-b border-gray-200 pb-2"><span className="text-text-muted">Department:</span> <span className="font-semibold text-text">{departments.find(d => d.id === formData.departmentId)?.name}</span></li>
                      <li className="flex justify-between border-b border-gray-200 pb-2"><span className="text-text-muted">Doctor:</span> <span className="font-semibold text-text">Dr. {doctors.find(d => d.id === formData.doctorId)?.name}</span></li>
                      <li className="flex justify-between border-b border-gray-200 pb-2"><span className="text-text-muted">Date:</span> <span className="font-semibold text-text">{formData.date}</span></li>
                      <li className="flex justify-between"><span className="text-text-muted">Time:</span> <span className="font-semibold text-text">{formData.time}</span></li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t border-border">
                  <button onClick={prevStep} disabled={status === 'loading'} className="btn-secondary px-8 flex items-center">
                    <ChevronLeft size={18} className="mr-2" /> Back
                  </button>
                  <button 
                    onClick={submitAppointment} 
                    disabled={status === 'loading'}
                    className={`btn-primary px-8 flex items-center ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : (
                      <CheckCircle2 size={18} className="mr-2" />
                    )}
                    {status === 'loading' ? 'Processing...' : 'Confirm Appointment'}
                  </button>
                </div>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
