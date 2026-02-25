import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    budgetRange: '',
    projectDetails: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 5;

  const serviceTypes = [
    'Cloud Services',
    'Full Stack Development',
    'DevOps Solutions',
    'UI/UX Design',
    'Complete Digital Transformation',
  ];

  const budgetRanges = [
    'Under $25k',
    '$25k - $50k',
    '$50k - $100k',
    '$100k - $250k',
    '$250k+',
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim().length > 0;
      case 2:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 3:
        return formData.serviceType.length > 0;
      case 4:
        return formData.budgetRange.length > 0;
      case 5:
        return formData.projectDetails.trim().length > 0;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <label className="block">
              <span className="text-white/70 text-sm font-medium mb-2 block">Your Name</span>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors"
              />
            </label>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <label className="block">
              <span className="text-white/70 text-sm font-medium mb-2 block">Email Address</span>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors"
              />
            </label>
          </div>
        );
      case 3:
        return (
          <div className="space-y-3">
            <span className="text-white/70 text-sm font-medium block mb-3">
              What service are you interested in?
            </span>
            <div className="grid grid-cols-1 gap-3">
              {serviceTypes.map((service) => (
                <button
                  key={service}
                  onClick={() => handleInputChange('serviceType', service)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.serviceType === service
                      ? 'border-pacific-cyan bg-pacific-cyan/20 text-white'
                      : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-3">
            <span className="text-white/70 text-sm font-medium block mb-3">
              What's your estimated budget?
            </span>
            <div className="grid grid-cols-1 gap-3">
              {budgetRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => handleInputChange('budgetRange', range)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.budgetRange === range
                      ? 'border-pacific-cyan bg-pacific-cyan/20 text-white'
                      : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <label className="block">
              <span className="text-white/70 text-sm font-medium mb-2 block">
                Tell us about your project
              </span>
              <textarea
                value={formData.projectDetails}
                onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                placeholder="Describe your project goals, timeline, and any specific requirements..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors resize-none"
              />
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pacific-cyan to-sky-blue mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Thank You!
          </h1>
          <p className="text-xl text-white/70 mb-8">
            We've received your request and will get back to you within 24 hours to schedule your
            discovery call.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setCurrentStep(1);
              setFormData({
                name: '',
                email: '',
                serviceType: '',
                budgetRange: '',
                projectDetails: '',
              });
            }}
            className="px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
              Exceptional Together
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Share your vision with us and we'll schedule a discovery call to discuss how we can
            bring it to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/50 text-sm font-medium">
                    Step {currentStep} of {totalSteps}
                  </span>
                  <span className="text-pacific-cyan text-sm font-medium">
                    {Math.round((currentStep / totalSteps) * 100)}% Complete
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pacific-cyan to-sky-blue"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                <button
                  onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-white/5 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>

                {currentStep < totalSteps ? (
                  <button
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    disabled={!canProceed()}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-pacific-cyan/40 transition-all"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-pacific-cyan/40 transition-all"
                  >
                    <span>Submit</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="font-heading font-semibold text-xl text-white mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white/50 text-xs mb-1">Email</p>
                    <a
                      href="mailto:hello@astechnix.com"
                      className="text-white hover:text-pacific-cyan transition-colors"
                    >
                      hello@astechnix.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white/50 text-xs mb-1">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-white hover:text-pacific-cyan transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white/50 text-xs mb-1">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pacific-cyan/20 to-sky-blue/20 backdrop-blur-sm border border-pacific-cyan/30">
              <h3 className="font-heading font-semibold text-lg text-white mb-3">
                What Happens Next?
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                  <span>We'll review your requirements within 24 hours</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                  <span>Schedule a discovery call at your convenience</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                  <span>Receive a detailed proposal and timeline</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
