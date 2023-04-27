import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

type Props = {};

function HomeFuneralsInTas({}: Props) {
  return (
    <div className="bg-white text-black">
      <Header />
      <div className="relative">
        <Image src="/img/home-b.jpg" alt="home-b" width={2300} height={300} />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1
            className="text-xl md:text-4xl font-bold
          tracking-[20px] 2xl:text-7xl"
          >
            HOME FUNERALS IN TAS
          </h1>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto md:text-base
      2xl:max-w-7xl 2xl:text-lg"
      >
        <div
          className="flex flex-col space-y-5 md:flex-row md:space-x-5 py-5 md:py-10 px-2 md:px-5
        items-center justify-center"
        >
          <div
            className="flex flex-col space-y-3 md:space-y-5 items-start
          2xl:text-lg"
          >
            <h2
              className="text-xl md:text-2xl
            2xl:text-3xl"
            >
              WHY SHOULD YOU CONSIDER A{" "}
              <span className="decoration-green-400 underline">
                FAMILY LED APPROACH
              </span>{" "}
              TO HOME FUNERALS?
            </h2>
            <p>
              Choosing to spend time with a person who has died and the option
              of keeping their body at home allows for a home vigil. This is
              whether the person’s body is kept at home right up until the point
              of burial or cremation or for a shorter time; even just a few
              hours spent with your person’s body in a familiar setting can make
              a huge difference. It provides the opportunity for a gentler
              approach to ‘letting go’.
            </p>
            <p>
              This time spent can also allow for the family and community
              members to gather together, grieve, share stories and memories,
              comfort each other and if you so choose, plan a farewell.
            </p>
          </div>
          <Image
            className="w-auto h-auto md:w-[400px] md:h-auto rounded-lg
            2xl:h-[400px] 2xl:w-auto"
            src="/img/home-2.jpg"
            alt="home-2"
            width={400}
            height={400}
          />
        </div>

        {/* three benefits */}
        <div className="grid md:grid-cols-3 gap-3 px-2 md:px-5">
          <div className="flex flex-col space-y-3 bg-green-100 rounded-lg p-5 w-auto md:max-w-[500px]">
            <h3 className="text-lg font-semibold">EMOTIONAL EMPOWERMENT</h3>
            <p>
              We have little to no say over when someone will die and those
              living on are made even more powerless by handing everything to a
              business. The Family Led approach gives that power back to the
              family and allows them to be an integral part of the process
              rather than consigning it to an Industry that will provide a
              beautiful, professional but often expensive and less-personal
              service with reduced family involvement.
            </p>
          </div>
          <div className="flex flex-col space-y-3 bg-green-100 rounded-lg p-5 w-auto md:max-w-[500px]">
            <h3 className="text-lg font-semibold">MORE OPTIONS</h3>
            <p>
              A funeral home will let you choose your coffin, but did you know
              that coffins are not a legal requirement? Family led funerals
              provide many more options for every aspect of the funeral process,
              where traditional funeral homes have a limited range of
              predetermined options.
            </p>
          </div>
          <div className="flex flex-col space-y-3 bg-green-100 rounded-lg p-5 w-auto md:max-w-[500px]">
            <h3 className="text-lg font-semibold">LOWER COST</h3>
            <p>
              A funeral home will let you choose your coffin, but did you know
              that coffins are not a legal requirement? Family led funerals
              provide many more options for every aspect of the funeral process,
              where traditional funeral homes have a limited range of
              predetermined options.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-3 md:space-y-5 items-start py-3 md:py-5 px-2 md:px-5">
          <h2
            className="text-xl md:text-2xl
          2xl:text-3xl"
          >
            WHAT&apos;S INVOLVED IN A FAMILY LED HOME FUNERAL?{" "}
          </h2>
          <p>In a Home Funeral, you are in control with what happens.</p>
          <p>
            There are legislative requirements which govern certain elements of
            the Home Funeral process, but you will find that you have much more
            control than you may have with a traditional funeral home
            experience. Often, your person will spend time at home with you and
            this could be for a few hours or a few days.
          </p>
          <p>
            Home does not necessarily mean your home however. A family led
            approach to home funeral could mean working with a funeral director
            who will allow you to go to their premises to wash and dress your
            person, spending time there, perhaps even placing them in a coffin
            or wrapping them in a shroud.
          </p>
          <p>
            If you do chose to be at your home or the home of your person, often
            taking time after a death, especially in a more gentle and familiar
            surrounding also allows time for the organisation of the other more
            practical and legislative requirements and processes.
          </p>
          <p>
            Often when a Funeral Director is responsible for these arrangements
            all of this seems rather hurriedly done in a relatively short
            interview.
          </p>
          <p>
            With a Home Funeral you can organise a Medical Cause of Death
            Certificate and register the death with the Registry of Births,
            Deaths and Marriages, or you can ask a Funeral Director to do it for
            you. This and the Application for Search (which produces the Record
            of Death for you) can be completed and lodged at Service Tasmania.{" "}
          </p>
          <p>
            You will also be required to complete a Burial and Cremation Permit
            (which may be available to you from the Crematorium or Cemetery
            Management) and then to make a booking for either Burial or
            Cremation and eventually transport the body to that place. Again,
            you can do this yourself or ask a Funeral Director to do it for you.
          </p>
          <p>
            With a Family Led Funeral you remain in control of – and responsible
            for – this entire process, including what components you ask others
            to do on your behalf.
          </p>
        </div>

        <div
          className="flex flex-col space-y-5 md:flex-row md:space-x-5 py-3 md:pb-5 px-2 md:px-5
        items-center justify-center"
        >
          <Image
            className="w-auto h-auto md:w-[400px] md:h-auto rounded-lg"
            src="/img/home-3.jpg"
            alt="home-3"
            width={400}
            height={400}
          />
          <div className="flex flex-col space-y-3 md:space-y-5 items-start">
            <h2
              className="text-xl md:text-2xl
            2xl:text-3xl"
            >
              A FAMILY LED HOME FUNERAL DOESN&apos;T MEAN YOU&apos;RE ALONE!
            </h2>
            <p>
              If you like the idea of a Family Led Funeral but need some help,
              we offer an affordable End of Life service where we can be engaged
              before or after death and we can help you with the practical
              assistance, emotional support and technical know how to make your
              choices a reality.
            </p>
            <p>
              We provide a peaceful presence and are able to guide you through
              the process of creating your own Family Led Funeral. Some of the
              things we can do —
            </p>
            <ul className="list-disc pl-10">
              <li>Consultation, planning, advocacy and support before death</li>
              <li>
                Vigil and compassionate family assistance and support during the
                dying process
              </li>
              <li>
                Assisting with natural after death care including cooling,
                washing, dressing
              </li>
              <li>Offering ceremony options and organisation</li>
              <li>
                Connection with service providers for burial and cremation
              </li>
              <li>Help you honour your cultural or spiritual requirements</li>
              <li>
                You can engage us to help you through the whole process or to do
                any one part of it for you
              </li>
              <li>
                Our goal is to leave you with the knowledge of what to do next
                time – in our perfect world, you’ll only need to engage us once
              </li>
            </ul>
          </div>
        </div>

        {/*  Australian Home Funeral Alliance */}
        <div className="flex flex-col space-y-3 md:space-y-5 items-start py-3 md:py-5 px-2 md:px-5">
          <p className="font-bold italic">
            The following is taken from the Australian Home Funeral Alliance -{" "}
            <Link
              href="https://www.ahfa.org.au/tasmania"
              target="_blank"
              className="bg-green-100 hover:text-green-500 rounded-lg px-1 pb-1"
            >
              https://www.ahfa.org.au/tasmania
            </Link>
          </p>
          <p>
            A home funeral is possible in Tasmania. A person is required to
            register the death and generally to have completed the disposition
            of the body within 30 days. A home funeral can be where you live,
            but it does not have to be.
          </p>
          <h2 className="text-lg md:text-xl pt-3 font-semibold">
            FAMILY LED FUNERALS
          </h2>
          <p>
            If your person dies at home and a doctor agrees to complete a
            ‘Medical Cause of Death Certificate’ (MCOD), your person can stay at
            home. If the death occurs outside the home and a doctor agrees to
            complete a MCOD, your person can be transported home once either a
            ‘declaration of life extinct’ (DOLE) form or a MCOD is complete. If
            it is a DOLE form, the doctor will then complete the MCOD within 48
            hours.
          </p>
          <p>
            Whether you are at home with your person or spending time with them
            at their place of death, e.g., a nursing home, you are able to
            provide the after-death care for your person, washing and dressing,
            shrouding or encoffining them, etc. If at home, you can keep your
            person with you in your home for several days. In Tasmania, there is
            no prescribed length of time. General consensus in the home funeral
            movement suggests that depending on the manner of death, 3-5 days is
            a reasonable time to keep a body at home without any outward signs
            of decomposition being present.
          </p>
          <p>
            Sometimes, a family may want to spend time with their person but not
            want to conduct the logistical and administrative functions or the
            hands-on care of their loved one. All of this is possible. It is
            important to note that families and communities can be involved in
            all of these processes as little or as much as they feel
            comfortable.
          </p>
          <p>
            There is a requirement under Tasmanian Burial and Cremation
            Regulations 2015 to maintain the temperature of the body at 5
            degrees Celsius or lower. This is perfectly possible in a home
            setting and there are various options available to do so. The use of
            a cooling bed or blanket, a cuddle cot for a child, ice packs, dry
            ice or Techniice in conjunction with portable air conditioners where
            necessary to assist in keeping room temperature cool are all options
            available to Tasmanians. If this cool temperature is maintained,
            then you are not required to place the care of your loved one into
            the hands of a mortuary or into refrigeration.
          </p>
          <p>
            You will be required to register the death with the Registry of
            Births, Deaths and Marriages. This and the Application for Search
            (which produces the Record of Death for you) can be completed and
            lodged at Service Tasmania. You will also be required to complete a
            Burial and Cremation Permit (which may be available to you from the
            Crematorium Management) and then to make a booking for either burial
            or cremation and eventually transport the body to that place.
          </p>
          <p>
            Regardless of how much time you would like to spend with your person
            or the type of care you would like to give, there are home funeral
            friendly funeral directors in Tasmania willing to work with you in a
            flexible way to ensure your wishes are fulfilled.
          </p>
          <h2 className="text-lg md:text-xl pt-3 font-semibold">
            BURIAL AND CREMATION IN TASMANIA
          </h2>
          <p>
            One of the choices people are often faced with when planning their
            end of life, or indeed making the funeral arrangements for a loved
            one, is a choice between burial and cremation. Traditionally, this
            has always been done in a coffin, however, that isn’t a requirement.
            There is also the option of shroud burial or shroud cremation.
          </p>
          <h2 className="text-lg md:text-xl pt-3 font-semibold">CREMATION</h2>
          <p>
            In general, cremation can be a cost effective option compared to a
            burial, however, that is not the only consideration; location,
            memorialisation wishes and personal preference will play a role in
            the decision making.
          </p>
          <p>
            In Tasmania, many funeral homes have their own cremation facilities.
            Families are able to deal with them directly to organise a cremation
            for their person, even if they want to do the ceremony themselves
            without using a funeral director for the service.
          </p>
          <p>
            There is specific paperwork required before a cremation can occur.
            You are able to complete this yourself or through the assistance of
            a funeral home. The management of a crematorium must be able to be
            satisfied with the identity of the deceased. They must have the
            signed Cremation Permit and the coffin or shroud bearer needs to
            display the name of the deceased in the form of a name plate – in
            all cases the management must be certain there are no discrepancies.
          </p>
          <p>
            It is of particular note that an independent doctor who is not a
            relative of the deceased and who has never treated the deceased is
            required to sight the body and sign a declaration and consent for
            the cremation to take place. Not all doctors may choose to do this
            and those that do may charge a fee. The management of your chosen
            crematorium is able to organise this for you; however, any doctor in
            Tasmania, specialist or general practitioner, is able to sign the
            form as long as they fit the requirements. In signing, they are
            required to take responsibility that the identification of the
            deceased is correct and all other documentation is in order and
            correct.
          </p>
          <p>
            A family can request to be present to witness the cremation process.
            It is up to the discretion of the management, however the Burial and
            Cremation Act 2019 in Division 2, 81(2) does stipulate that: “A
            crematorium manager must permit a representative of any religious or
            cultural group to exercise any religious or cultural practices in
            connection with the cremation of human remains without any hindrance
            or disturbance by the crematorium manager or any other person.”
          </p>
          <h2 className="text-lg md:text-xl pt-3 font-semibold">BURIAL</h2>
          <p>
            For a very long time, burials were the only available, and for many
            people, viable disposal option when someone died. In some places, it
            still is. The notion of burial was to return the body to the earth.
            Over time, different methods have been employed in relation to
            burial practices. The use of solid and hardwood coffins, vaults and
            the introduction of embalming for preservation along with many other
            innovations have seen the landscape of burial and the thought around
            it develop into a more modern approach to laying a person to rest.
          </p>
          <p>
            When choosing burial in Tasmania, a person or their family is able
            to organise the entire process, whether the burial is on private
            land or in a cemetery. They can choose the site, organise the
            digging and the following memorialisation they would like as long as
            it is in line with the guidelines of the cemetery management and/or
            council regulations.
          </p>
          <p>
            No matter the choice made, there will be considerations to take care
            of the final disposal – some legislative, and others procedural and
            specific to the place you have chosen. For example, if you book a
            regional cemetery, you may also be required to contact a Grave
            Digger (if you are not allowed or do not want to dig the grave
            yourself) and some cemeteries will require a booking form or the
            provision of a burial permit before the actual burial takes place.
            Communication is key here; making contact with your chosen cemetery
            and finding out their rules will allow you to negotiate exactly what
            you would like to do.
          </p>
          <p>
            It is also worth noting that the requirements for burial on private
            land vary slightly between local councils, but if those requirements
            can be filled then permission can be obtained. It is advisable to
            contact your local council well ahead of time to find out what you
            need to do and start making those preparations.
          </p>
          <h2 className="text-lg md:text-xl pt-3 font-semibold">
            COFFINS IN TASMANIA
          </h2>
          <p>
            The issue of coffins is an important one. Often the coffin is quite
            a considerable portion of the cost of a contemporary funeral. After
            the Funeral Home’s professional fees, it can be the next most
            expensive single item and there are many options that can be
            relatively unknown to the general public. There is not as much
            regulation around the use of coffins as the general public is often
            led to believe, for instance:
          </p>
          <ul className="list-disc pl-10">
            <li>
              There is no regulation suggesting that a coffin or casket must be
              purchased from a Funeral Director;
            </li>
            <li>
              There is no regulation suggesting that a coffin or casket must be
              purchased from a Funeral Director;
            </li>
            <li>
              A coffin is not a legal requirement for a burial or cremation;
            </li>
            <li>
              Coffins are able to be reused if they can be cleaned in between
              use; and
            </li>
            <li>
              A coffin or casket may be purchased from an independent coffin or
              casket designer/producer or supplier, in which case, it is usually
              produced to comply with regulation requirements.
            </li>
          </ul>
          <p>
            A person is able to make their own coffin or a family can make one
            for their loved one. To this end, there are two coffin clubs in
            Tasmania – one in the north and one in the south – both of which
            support people through the process of making a coffin. Again, it
            needs to comply with regulation requirements. The manager of a
            crematorium has the right to refuse a coffin supplied by a family if
            they feel it may damage their equipment or be injurious to public
            health and safety. In relation to the construction of a coffin, the
            requirements are relatively simple. The coffin must have an
            impervious lining and be of sufficiently robust construction to
            enable the remains to be disposed of in accordance with the Act.
          </p>
          <p>
            Another thing to note is that a nameplate is required to be on a
            coffin at all times, stating the family name and at least one given
            name of the deceased. This should correspond with the name on the
            deceased’s identification tag on their body.
          </p>
          <h2 className="text-lg md:text-xl pt-3 font-semibold">
            TRANSPORTING THE DEAD IN TASMANIA
          </h2>
          <p>
            When someone dies in Tasmania, there is often a requirement for that
            person to be transported from the place of death to somewhere else.
            Generally, this will be to the family home or a funeral home. The
            family of that person is able to carry out that transport in a
            private vehicle if they wish. While logistically challenging, it is
            perfectly legal. The standard of transport should be such that it
            maintains the dignity of those remains i.e., they are not able to be
            seen while being transported.
          </p>
          <p>
            To transport the body of a deceased, there is a requirement that
            either a Medical Cause of Death Certificate or a Life Extinct
            Certificate have already been completed and that the paperwork
            travel with the deceased. The deceased should also have the
            appropriate identification.
          </p>
          <p>According to the Burial and Cremation Regulations 2015 –</p>
          <p className="italic">
            “A person who is transporting human remains to any place or premises
            must place the human remains in a coffin, container, or tray, that
            is capable of preventing the escape of any bodily discharges,
            contaminants or infectious materials.”
          </p>
          <p>
            If it is a regulated business who is called to do the transport,
            there are further restrictions in relation to the vehicle that do
            not apply to a family.
          </p>
          <p>
            A family is also able to transport their person to the place of
            ceremony or to a cemetery. When it comes to transportation to a
            crematorium, however, this should be done in conjunction and with
            the permission of the crematorium management as the Burial and
            Cremation Regulations 2015 does stipulate in section 53 of the
            legislation that as part of the identification process:
          </p>
          <p className="italic">
            “(b). the coffin containing the deceased person has come from the
            premises of a prescribed business.”
          </p>
          <p>
            This means that you can work with a home funeral friendly funeral
            director who will transport your person to their premises, or you
            need their agreement to be able to transport your person to them
            yourself.
          </p>
          <h2 className="text-lg md:text-xl pt-3 font-semibold">SHROUDS</h2>
          <p>
            Shrouding is the process of cocooning a person’s body in cloth. In
            Tasmania, there is a requirement to use four layers of material.
            Shrouding can be used regardless of a person’s choice of burial or
            cremation. It eliminates the cost of expensive coffins and avoids
            the burying or burning of veneered particleboard or solid wood
            coffins, thereby reducing the environmental impact as well.
          </p>
          <p>
            The idea and practice of Shrouded Cremation are old, but it is
            relatively new to Tasmania. Shrouded cremation is perfectly legal
            and any crematorium in Tasmania is able to make their own policy
            decisions about whether or not they will offer this as a service.
          </p>
          <p>
            If the body is the subject of a Shroud Burial or Cremation, then it
            is possible to transport that body wrapped in a Shroud and placed on
            a Shroud Bearer, which is a tray designed for that purpose – as long
            as it meets the legislative requirements already discussed. A Shroud
            Bearer constructed of natural materials can be placed in the ground
            as part of the Natural Burial. If a cremation is the choice, then
            the shroud bearer will be cremated along with the body.
          </p>
          <h2 className="text-lg md:text-xl pt-3 font-semibold">
            RELEVANT LEGISLATION
          </h2>
          <p>
            <Link
              href="https://www.legislation.tas.gov.au/view/whole/html/inforce/current/act-2019-050"
              target="_blank"
              className="bg-green-100 hover:text-green-500 rounded-lg px-1 pb-1"
            >
              https://www.legislation.tas.gov.au/view/whole/html/inforce/current/act-2019-050
            </Link>
          </p>
          <p>
            <Link
              href="https://www.legislation.tas.gov.au/view/whole/html/inforce/current/sr-2015-033"
              target="_blank"
              className="bg-green-100 hover:text-green-500 rounded-lg px-1 pb-1"
            >
              https://www.legislation.tas.gov.au/view/whole/html/inforce/current/sr-2015-033
            </Link>
          </p>
          <h2 className="text-lg md:text-xl pt-3 font-semibold">
            FLOWCHART OF REQUIRED PAPERWORK - TASMANIA
          </h2>
          <p>
            <Link
              href="/Flowchart of Paperwork Tasmania.pdf"
              target="_blank"
              className="bg-green-100 hover:text-green-500 rounded-lg px-1 pb-1"
            >
              Click here to view
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeFuneralsInTas;
