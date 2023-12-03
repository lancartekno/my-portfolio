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
      <title>Faris Helmi Permana - Profil</title>
      <meta name="description" content="Profil Faris Helmi Permana" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Faris Helmi Permana</h1>
      <p className="text-lg mb-8">Student</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Ringkasan</h2>
        <p>
        Faris Helmi Permana adalah seorang profesional pengembang perangkat lunak dengan keahlian luas di bidang pengembangan web. Sebagai ahli front-end, Faris memiliki kemampuan luar biasa dalam mengelola state menggunakan React Hooks, mengambil data dengan React APIs, bekerja dengan JSX, dan menampilkan daftar dengan React. Ia juga terampil dalam menggunakan React Router dan membuat formulir, serta melakukan pengujian unit pada komponen React. 
        <br></br>
        <br></br>
        Di sisi backend, Faris memiliki keahlian dalam pemodelan data dan SQL, serta pengembangan dan dokumentasi API. Kemampuannya dalam mengintegrasikan frontend React dengan backend Flask membuatnya mampu mengambil dan menampilkan data dalam aplikasi React-Flask. Faris juga memiliki keahlian dalam autentikasi dan otorisasi, penanganan kesalahan, serta merancang arsitektur modular dengan memanfaatkan kekuatan Blueprints pada Flask.
        <br></br>
        <br></br>
        Dengan pengalaman dalam pengujian unit Flask dan penyebaran aplikasi Flask menggunakan kontainerisasi, Faris mampu mengimplementasikan praktik terbaik dalam pengembangan perangkat lunak. Keterampilan ini, ditambah dengan pemahaman mendalam tentang manajemen data, membuatnya menjadi pengembang web yang handal dan berorientasi pada solusi.
        <br></br>
        <br></br>
        Faris Helmi Permana adalah sosok yang berdedikasi tinggi terhadap kualitas perangkat lunak dan senantiasa berusaha untuk mencapai standar yang tinggi dalam setiap proyek yang ia tangani. Dengan kombinasi keterampilan frontend dan backend-nya, Faris memberikan kontribusi yang signifkan dalam menciptakan aplikasi web yang dinamis, efsien, dan responsif. 
        </p>
        <br></br>
        <br></br>
        {/* Add a link to your profile page */}
        <p>
          <a href="https://port2-faris.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-500">
            Kunjungi portofolio saya <span className="text-cyan-700">di sini</span>
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pengalaman</h2>
        <ExperienceItem
          title="Pengembang Full Stack"
          role="Proyek: Website untuk Berita Terkini (2022)"
          description="Saya telah mengembangkan aplikasi website yang bertujuan untuk menguji ftur login, logout, dan tampilan konten berita. Website ini telah dirancang dengan menggunakan beberapa kerangka kerja, termasuk React dan Redux, serta mengimplementasikan otentikasi dengan JWT (Login/Daftar/Keluar). Selain itu, saya juga telah mengimplementasikan server menggunakan Flask dan basis data SQLite3. Hasilnya adalah sebuah proyek yang menggabungkan teknologi seperti Flask Framework, React Framework, dan Basis Data SQLite3, yang memungkinkan pengguna untuk mengakses berita terkini dengan antarmuka pengguna yang menarik."
        />
        <ExperienceItem
          title="Front-End"
          role="Website Portofolio Dokter Gigi (2021)"
          description="Saya telah membuat sebuah website responsif untuk mempresentasikan portofolio seorang dokter gigi, yang dapat diakses dengan lancar melalui berbagai perangkat, seperti smartphone, tablet, dan laptop. Website ini menonjolkan desain antarmuka pengguna yang responsif, memungkinkan pengiriman data ke email, mengimplementasikan perhitungan mundur dengan JavaScript, dan menyediakan fungsi web untuk panggilan. Proyek ini didukung oleh teknologi seperti Bootstrap Framework, HTML, CSS, dan JavaScript, menciptakan pengalaman interaktif yang baik bagi pengguna. "
        />
        <ExperienceItem
          title="Pentester"
          role="UNJANI"
          description={
            <span>
              ⚪ Menemukan celah keamanan pada website unjani menggunakan serangan SQL Injection.
              <br />
              ⚪ Mengirimkan laporan potensi bahaya keamanan pada website akademik.unjani.ac.id.
            </span>
          }
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pendidikan</h2>
        <EducationItem
          degree="Sistem Informasi"
          institution="Universitas Terbuka"
          year="01/2023 - 12/2027"
        />
        <EducationItem
          degree="IPA"
          institution="SMAN 1 Cimahi"
          year="2020"
          additionalInfo="High School Diploma (nilai di ijazah 82,80), Juara 3 catur sebandung raya, Menjabat sebagai ketua di organisasi."
        />
      </section>

      <section className="mb-8">
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
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Keterampilan</h2>
        <div className="flex flex-wrap">
          <SkillItem skill="Flask" level="Menengah" />
          <SkillItem skill="React" level="Menengah" />
          <SkillItem skill="Spreadsheet" level="Menengah" />
          <SkillItem skill="Text Formatting" level="Profesional" />
          <SkillItem skill="Design" level="Menengah" />
          <SkillItem skill="Python" level="Menengah" />
          <SkillItem skill="JavaScript" level="Dasar" />
          <SkillItem skill="HTML" level="Ahli" />
          <SkillItem skill="CSS" level="Menengah" />
          <SkillItem skill="Git" level="Dasar" />
          <SkillItem skill="Express" level="Dasar" />
          <SkillItem skill="Tailwind" level="Dasar" />
          <SkillItem skill="Bootstrap" level="Menengah" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Bahasa</h2>
        <p>Bahasa asli: Indonesia, Sundanese</p>
        <p>Menengah: Javanese</p>
        <p>Dasar: English</p>
      </section>
    </div>
  </div>
);

export default Profile;
