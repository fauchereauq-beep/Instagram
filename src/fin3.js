// Planche de fin commune (style gros nez) : question à commenter, envoi, enregistrement, annonce de l'épisode suivant.
const { C, G } = require('./ep.js');
const I = G.I;
const typo = (t) => String(t).replace(/'/g, '’');
module.exports = function fin3({ question, teaser, envoie = 'l’ami qui a besoin de le lire', enregistre = 'pour la prochaine fois que ton Brutus parle' }) {
  const row = (ico, bg, html) => `<div style="display:flex;align-items:center;gap:18px;padding:8px 16px"><div style="flex:none;width:70px;height:70px;border-radius:50%;background:${bg};border:6px solid ${I};display:flex;align-items:center;justify-content:center;font-size:34px">${ico}</div><div style="font-family:Poppins;font-weight:700;font-size:31px;line-height:1.12;color:${I}">${typo(html)}</div></div>`;
  return `<div class="abs" style="left:40px;right:40px;top:150px;z-index:4;background:#fff;border:7px solid ${I};border-radius:30px;box-shadow:10px 10px 0 ${I};padding:16px;display:flex;flex-direction:column;gap:4px">
    <div style="padding:20px 24px;background:${C.soleil};border:6px solid ${I};border-radius:22px;font-family:Poppins;font-weight:700;font-size:44px;line-height:1.08;color:${I}">💬 ${typo(question)}<div style="font-family:Inter;font-weight:600;font-size:25px;margin-top:8px;color:#3A3550">Réponds en commentaire : je lis tout.</div></div>
    ${row('↗', '#7FD4FF', `Envoie-le à ${envoie}`)}
    ${row('🔖', '#9BD1A8', `Enregistre-le ${enregistre}`)}
    ${teaser ? `<div style="margin:6px 8px 4px;padding:14px 20px;background:${C.nuit};border-radius:16px;font-family:Poppins;font-weight:700;font-size:30px;line-height:1.12;color:${C.creme}">${typo(teaser)}</div>` : ''}
  </div>`;
};
