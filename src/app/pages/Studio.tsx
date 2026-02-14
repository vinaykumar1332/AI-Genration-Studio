import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { GlassHeader } from '../components/GlassHeader';
import { AvatarSelector } from '../components/AvatarSelector';
import { BackgroundSelector } from '../components/BackgroundSelector';
import { GenerateButton } from '../components/GenerateButton';
import { ProgressBar } from '../components/ProgressBar';
import { ChevronDown } from 'lucide-react';

export function Studio() {
  const navigate = useNavigate();
  const [gender, setGender] = useState<string | null>(null);
  const [origin, setOrigin] = useState<string | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [selectedPose, setSelectedPose] = useState<string | null>(null);
  const [selectedBackground, setSelectedBackground] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showGenderMenu, setShowGenderMenu] = useState(false);
  const [showOriginMenu, setShowOriginMenu] = useState(false);

  // Mock data
  const genderOptions = ['Female', 'Male', 'Non-Binary'];
  const originOptions = ['European', 'Asian', 'African', 'Latin American', 'Middle Eastern'];

  const avatars = [
    {
      id: '1',
      name: 'Sophia',
      gender: 'Female',
      origin: 'European',
      image: 'https://images.unsplash.com/photo-1629507313712-f21468afdf2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtb2RlbCUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTA0NTg0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      available: gender === 'Female',
    },
    {
      id: '2',
      name: 'Alexander',
      gender: 'Male',
      origin: 'European',
      image: 'https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbW9kZWwlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzEwNDU4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: gender === 'Male',
    },
    {
      id: '3',
      name: 'Isabella',
      gender: 'Female',
      origin: 'European',
      image: 'https://images.unsplash.com/photo-1629507313712-f21468afdf2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtb2RlbCUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTA0NTg0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      available: gender === 'Female',
    },
    {
      id: '4',
      name: 'Marcus',
      gender: 'Male',
      origin: 'European',
      image: 'https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbW9kZWwlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzEwNDU4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      available: gender === 'Male',
    },
  ];

  const poses = [
    { id: 'standing', name: 'Standing', icon: '🧍' },
    { id: 'sitting', name: 'Sitting', icon: '🪑' },
    { id: 'walking', name: 'Walking', icon: '🚶' },
    { id: 'fashion', name: 'Fashion Pose', icon: '💃' },
  ];

  const backgrounds = [
    {
      id: '1',
      name: 'Luxury Studio',
      category: 'Indoor',
      image: 'https://images.unsplash.com/photo-1770062421988-7929b4748e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkaW8lMjBpbmRvb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzcxMDQ1ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '2',
      name: 'Elegant Interior',
      category: 'Indoor',
      image: 'https://images.unsplash.com/photo-1661099548731-fc8f74fc9dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBsdXh1cnl8ZW58MXx8fHwxNzcxMDQ1ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '3',
      name: 'Natural Landscape',
      category: 'Outdoor',
      image: 'https://images.unsplash.com/photo-1712330138676-60e86456c218?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbmF0dXJhbCUyMGxhbmRzY2FwZSUyMHNjZW5pY3xlbnwxfHx8fDE3NzEwNDU4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '4',
      name: 'Urban Setting',
      category: 'Outdoor',
      image: 'https://images.unsplash.com/photo-1770062421988-7929b4748e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkaW8lMjBpbmRvb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzcxMDQ1ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const isReady = !!(selectedAvatar && selectedPose && selectedBackground && gender && origin);

  const handleGenerate = () => {
    if (!isReady) return;

    setIsGenerating(true);
    setProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/results');
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]">
      <GlassHeader />

      {isGenerating && <ProgressBar progress={progress} />}

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl mb-4" style={{ color: '#F2F2F2' }}>
              <span className="font-light">Create Your</span>
              <br />
              <span className="font-semibold">AI Masterpiece</span>
            </h1>
            <p className="text-xl" style={{ color: '#A47864' }}>
              Select your preferences to generate ultra-realistic 4K imagery
            </p>
          </motion.div>

          {/* Selection Flow */}
          <div className="space-y-12">
            {/* Gender & Origin Selectors */}
            <motion.section
              className="p-8 rounded-3xl backdrop-blur-[30px] border border-white/10"
              style={{ background: 'rgba(255, 255, 255, 0.03)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl mb-6" style={{ color: '#F2F2F2' }}>
                1. Select Demographics
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Gender Dropdown */}
                <div className="relative">
                  <label className="block mb-2 text-sm" style={{ color: '#A47864' }}>
                    Gender
                  </label>
                  <button
                    onClick={() => setShowGenderMenu(!showGenderMenu)}
                    className="w-full px-6 py-4 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-between transition-all hover:border-purple-400/50"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#F2F2F2' }}
                  >
                    <span>{gender || 'Select gender'}</span>
                    <ChevronDown size={20} />
                  </button>

                  {showGenderMenu && (
                    <motion.div
                      className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl backdrop-blur-[40px] border border-white/20 z-20"
                      style={{ background: 'rgba(0, 0, 0, 0.8)' }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {genderOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setGender(option);
                            setShowGenderMenu(false);
                            setSelectedAvatar(null); // Reset avatar selection
                          }}
                          className="w-full px-4 py-3 rounded-lg text-left hover:bg-white/10 transition-colors"
                          style={{ color: '#F2F2F2' }}
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Origin Dropdown */}
                <div className="relative">
                  <label className="block mb-2 text-sm" style={{ color: '#A47864' }}>
                    Origin
                  </label>
                  <button
                    onClick={() => setShowOriginMenu(!showOriginMenu)}
                    className="w-full px-6 py-4 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-between transition-all hover:border-purple-400/50"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#F2F2F2' }}
                  >
                    <span>{origin || 'Select origin'}</span>
                    <ChevronDown size={20} />
                  </button>

                  {showOriginMenu && (
                    <motion.div
                      className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl backdrop-blur-[40px] border border-white/20 z-20"
                      style={{ background: 'rgba(0, 0, 0, 0.8)' }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {originOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setOrigin(option);
                            setShowOriginMenu(false);
                          }}
                          className="w-full px-4 py-3 rounded-lg text-left hover:bg-white/10 transition-colors"
                          style={{ color: '#F2F2F2' }}
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>

              {!gender && (
                <p className="mt-4 text-sm" style={{ color: '#A47864' }}>
                  💡 Select gender to unlock avatar options
                </p>
              )}
            </motion.section>

            {/* Avatar Selection */}
            <motion.section
              className="p-8 rounded-3xl backdrop-blur-[30px] border border-white/10"
              style={{ background: 'rgba(255, 255, 255, 0.03)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl mb-6" style={{ color: '#F2F2F2' }}>
                2. Choose Your Avatar
              </h2>
              <AvatarSelector
                avatars={avatars}
                selected={selectedAvatar}
                onSelect={setSelectedAvatar}
              />
            </motion.section>

            {/* Pose Selection */}
            <motion.section
              className="p-8 rounded-3xl backdrop-blur-[30px] border border-white/10"
              style={{ background: 'rgba(255, 255, 255, 0.03)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl mb-6" style={{ color: '#F2F2F2' }}>
                3. Select Pose
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {poses.map((pose) => (
                  <motion.button
                    key={pose.id}
                    onClick={() => setSelectedPose(pose.id)}
                    className="p-6 rounded-2xl border-2 transition-all"
                    style={{
                      background: selectedPose === pose.id ? 'rgba(167, 139, 250, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                      borderColor: selectedPose === pose.id ? '#A78BFA' : 'rgba(255, 255, 255, 0.1)',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-4xl mb-2">{pose.icon}</div>
                    <p style={{ color: '#F2F2F2' }}>{pose.name}</p>
                  </motion.button>
                ))}
              </div>
            </motion.section>

            {/* Background Selection */}
            <motion.section
              className="p-8 rounded-3xl backdrop-blur-[30px] border border-white/10"
              style={{ background: 'rgba(255, 255, 255, 0.03)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl mb-6" style={{ color: '#F2F2F2' }}>
                4. Choose Background
              </h2>
              <BackgroundSelector
                backgrounds={backgrounds}
                selected={selectedBackground}
                onSelect={setSelectedBackground}
              />
            </motion.section>

            {/* Generate Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center pt-8"
            >
              <GenerateButton
                isReady={isReady}
                isGenerating={isGenerating}
                onClick={handleGenerate}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
