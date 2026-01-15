'use client';

import { useState } from 'react';

const MBTI_TYPES = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

const ZODIAC_ANIMALS = [
  { value: 'rat', label: '🐀 쥐띠', emoji: '🐀' },
  { value: 'ox', label: '🐂 소띠', emoji: '🐂' },
  { value: 'tiger', label: '🐅 호랑이띠', emoji: '🐅' },
  { value: 'rabbit', label: '🐇 토끼띠', emoji: '🐇' },
  { value: 'dragon', label: '🐉 용띠', emoji: '🐉' },
  { value: 'snake', label: '🐍 뱀띠', emoji: '🐍' },
  { value: 'horse', label: '🐎 말띠', emoji: '🐎' },
  { value: 'sheep', label: '🐑 양띠', emoji: '🐑' },
  { value: 'monkey', label: '🐒 원숭이띠', emoji: '🐒' },
  { value: 'rooster', label: '🐓 닭띠', emoji: '🐓' },
  { value: 'dog', label: '🐕 개띠', emoji: '🐕' },
  { value: 'pig', label: '🐖 돼지띠', emoji: '🐖' }
];

const ZODIAC_SIGNS = [
  { value: 'aries', label: '♈ 양자리', emoji: '♈' },
  { value: 'taurus', label: '♉ 황소자리', emoji: '♉' },
  { value: 'gemini', label: '♊ 쌍둥이자리', emoji: '♊' },
  { value: 'cancer', label: '♋ 게자리', emoji: '♋' },
  { value: 'leo', label: '♌ 사자자리', emoji: '♌' },
  { value: 'virgo', label: '♍ 처녀자리', emoji: '♍' },
  { value: 'libra', label: '♎ 천칭자리', emoji: '♎' },
  { value: 'scorpio', label: '♏ 전갈자리', emoji: '♏' },
  { value: 'sagittarius', label: '♐ 궁수자리', emoji: '♐' },
  { value: 'capricorn', label: '♑ 염소자리', emoji: '♑' },
  { value: 'aquarius', label: '♒ 물병자리', emoji: '♒' },
  { value: 'pisces', label: '♓ 물고기자리', emoji: '♓' }
];

export default function InputForm({ onSubmit }) {
  const [mbti, setMbti] = useState('');
  const [zodiacAnimal, setZodiacAnimal] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mbti && zodiacAnimal && zodiacSign) {
      onSubmit({
        mbti,
        zodiacAnimal: ZODIAC_ANIMALS.find(z => z.value === zodiacAnimal),
        zodiacSign: ZODIAC_SIGNS.find(z => z.value === zodiacSign)
      });
    }
  };

  const isValid = mbti && zodiacAnimal && zodiacSign;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 fade-in">
      {/* MBTI 선택 */}
      <div className="stagger-1">
        <label className="block text-white/80 font-body text-sm mb-3 uppercase tracking-wider">
          👤 MBTI 선택
        </label>
        <div className="grid grid-cols-4 gap-2">
          {MBTI_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setMbti(type)}
              className={`py-3 rounded-lg font-display text-sm font-semibold transition-all ${
                mbti === type
                  ? 'bg-gradient-to-r from-neon-pink to-neon-purple text-white neon-box'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* 띠 선택 */}
      <div className="stagger-2">
        <label className="block text-white/80 font-body text-sm mb-3 uppercase tracking-wider">
          🐲 띠 선택
        </label>
        <div className="grid grid-cols-4 gap-2">
          {ZODIAC_ANIMALS.map((animal) => (
            <button
              key={animal.value}
              type="button"
              onClick={() => setZodiacAnimal(animal.value)}
              className={`py-3 rounded-lg text-center transition-all ${
                zodiacAnimal === animal.value
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white neon-box-cyan'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <span className="text-xl">{animal.emoji}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 별자리 선택 */}
      <div className="stagger-3">
        <label className="block text-white/80 font-body text-sm mb-3 uppercase tracking-wider">
          ⭐ 별자리 선택
        </label>
        <div className="grid grid-cols-4 gap-2">
          {ZODIAC_SIGNS.map((sign) => (
            <button
              key={sign.value}
              type="button"
              onClick={() => setZodiacSign(sign.value)}
              className={`py-3 rounded-lg text-center transition-all ${
                zodiacSign === sign.value
                  ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white neon-box'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <span className="text-xl">{sign.emoji}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 선택 요약 */}
      {(mbti || zodiacAnimal || zodiacSign) && (
        <div className="p-4 bg-white/5 rounded-lg border border-white/10 stagger-4">
          <p className="text-center text-white/80 font-body">
            {mbti && <span className="text-neon-pink font-semibold">{mbti}</span>}
            {mbti && zodiacAnimal && <span className="mx-2">×</span>}
            {zodiacAnimal && (
              <span className="text-neon-cyan">
                {ZODIAC_ANIMALS.find(z => z.value === zodiacAnimal)?.emoji}
              </span>
            )}
            {zodiacAnimal && zodiacSign && <span className="mx-2">×</span>}
            {zodiacSign && (
              <span className="text-neon-purple">
                {ZODIAC_SIGNS.find(z => z.value === zodiacSign)?.emoji}
              </span>
            )}
          </p>
        </div>
      )}

      {/* 제출 버튼 */}
      <button
        type="submit"
        disabled={!isValid}
        className={`w-full cyber-btn stagger-5 ${
          !isValid ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        ✨ 오늘의 운세 보기 ✨
      </button>
    </form>
  );
}
