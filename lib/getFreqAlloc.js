import freqAlloc from '../data/freqAlloc.json';

// send freqAlloc without reference
export default function getFreqAlloc() {
  return JSON.parse(JSON.stringify(freqAlloc));
}
