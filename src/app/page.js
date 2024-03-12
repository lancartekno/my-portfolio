// pages/profile.js
import Head from 'next/head';

const ExperienceItem = ({ title, role, description }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-gray-700">{role}</p>
    <p className="mt-2 text-black">{description}</p>
  </div>
);

const EducationItem = ({ institution, degree, year }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold">{degree}</h3>
    <p className="text-gray-700">{institution}</p>
    <p className="mt-2 text-black">{year}</p>
  </div>
);

const CertificationItem = ({ title, issuer, year }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-gray-700">{issuer}</p>
    <p className="mt-2 text-black">{year}</p>
  </div>
);

const SkillItem = ({ skill, level }) => (
  <div className="mr-4 mb-4">
    <p className="text-lg font-bold text-black">{skill}</p>
    <p className="text-gray-700">{level}</p>
  </div>
);

const Profile = () => (
  <div className="bg-white text-black min-h-screen p-8">
    <Head>
      <title>Putri Alifia Zahra - Profil</title>
      <meta name="description" content="Profil Putri Alifia Zahra" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Putri Alifia Zahra</h1>
      <p className="text-lg mb-8">Fresh Graduate</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Ringkasan</h2>
        <p>
        Saya adalah individu yang teliti, selalu memperhatikan detail dalam pekerjaan.saya juga sangat terampil dalam bekerja dalam
        tim, mampu berkolaborasi dengan baik untuk mencapai tujuan bersama. Kemampuan sosialisasi yang baik membuat saya
        mudah berinteraksi dengan berbagai macam orang dan membangun hubungan yang kuat dalam lingkungan kerja. Selain itu
        saya terampil dalam mengatur waktu dengan baik, sehingga dapat menyelesaikan tugas-tugas dengan efsien dan tepat
        waktu. Sifat ramah dan ingin belajar yang saya miliki membuat saya terbuka terhadap ide-ide baru dan siap untuk
        mengembangkan diri Anda secara terus-menerus. Saya memiliki keinginan yang kuat untuk menambah pengalaman dan
        keterampilan baru, serta untuk memperluas jaringan hubungan sosial. Meskipun demikian kelemahan saya, saya mengakui
        bahwa saya mungkin sedikit gugup ketika melakukan presentasi di depan banyak orang, tetapi saya siap untuk mengatasi
        kekurangan tersebut dengan latihan dan pengalaman yang lebih banyak. 
        </p>


        {/* Add a link to your profile page */}
        {/* <p>
          <a href="https://port2-faris.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-500">
            Kunjungi portofolio saya <span className="text-cyan-700">di sini</span>
          </a>
        </p> */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pengalaman</h2>
        <ExperienceItem
          title="Staff Administrasi"
          role="Sekretariat Pangandaran"
          description={
            <span>
              ⚪ Mengoperasikan Ms. excel
              <br />
              ⚪ Mengoperasikan Ms. Word
            </span>
          }
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pendidikan</h2>
        <EducationItem
          degree="Akuntansi"
          institution="Universitas Siliwangi"
          year="08/2019 - 03/2024"
        />
      </section>

      {/* <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Sertifikasi</h2>
        <CertificationItem
          title="JavaScript (Intermediate)"
          issuer="HackerRank"
          year="04/2022 - Saat ini"
        />
        <CertificationItem
          title="JavaScript Algorithms and Data Structures"
          issuer="freeCodeCamp"
          year="04/2022 - Saat ini"
        />
        <CertificationItem
          title="Responsive Web Design"
          issuer="freeCodeCamp"
          year="04/2022 - Saat ini"
        />
        <CertificationItem
          title="Certified Ethical Hacker"
          issuer="Ec-Council"
          year="12/2022 - 12/2023"
        />
      </section> */}

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Keterampilan</h2>
        <div className="flex flex-wrap">
          <SkillItem skill="Spreadsheet" level="Dasar" />
          <SkillItem skill="Text Formatting" level="Menengah" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Bahasa</h2>
        <p>Bahasa asli: Indonesia, Sundanese</p>
        {/* <p>Menengah: Javanese</p> */}
        <p>Dasar: English</p>
      </section>
    </div>
  </div>
);

export default Profile;
