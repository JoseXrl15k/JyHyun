import axios from 'axios';

const cdn = () => Math.floor(Math.random() * 11) + 51;

const headers = {
    accept: '*/*',
    origin: 'https://ytshorts.savetube.me',
    referer: 'https://ytshorts.savetube.me/',
    'user-agent': 'Postify/1.0.0',
};

const fetch = async (url) => {
    const link = url.replace('{cdn}', cdn());
    try {
        const { data } = await axios.get(link, {
            headers: { ...headers, authority: `cdn${cdn()}.savetube.su` }
        });
        return data;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

const videoQualities = { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' };

const savetube = {
    info: async (url, qualityKey) => {
        try {
            const inpo = await fetch(`https://cdn{cdn}.savetube.su/info?url=${encodeURIComponent(url)}`);
            const { key, title } = inpo.data;
            const quality = videoQualities[qualityKey];
            if (!quality) throw new Error('❌ Opsi kualitas tidak valid!');
            const dlRes = await savetube.dl(key, 'video', quality);
            return {
                title,
                downloadUrl: dlRes.data.downloadUrl,
                quality
            };
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    },

    dl: async (key, type, quality) => {
        const api = `https://cdn${cdn()}.savetube.su/download/${type}/${quality}/${key}`;
        try {
            const { data } = await axios.get(api, { headers: headers });
            return data;
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
};

const handler = async (m, { command, args }) => {
    if (!args[0]) throw '❌ Masukkan URL video YouTube!';
    const qualityKey = parseInt(args[1]) || 5; // default ke 720p jika tidak ada quality
    try {
        const info = await savetube.info(args[0], qualityKey);
        m.reply(`🎬 Judul: ${info.title}\n🔗 Link Download: ${info.downloadUrl}\n📥 Kualitas: ${info.quality}p`);
    } catch (error) {
        m.reply('❌ Terjadi kesalahan saat mengunduh video!');
    }
};

handler.command = /^(ytvtes)$/i;
handler.help = ['ytvtes <url> <quality>'];
handler.tags = ['pp'];

export default handler;