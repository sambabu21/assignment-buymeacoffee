import AppStore from "../Images/App Store.png"
import PlayStore from "../Images/Google Play.png"

export default function Footer(){
    return (
       
        <footer class="bg-white" aria-labelledby="footer-heading">

  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-20">
    
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="flex justify-center items-center  gap-1">
                <span className="w-[28px] h-[28px] bg-[#222222] rounded-full"></span>
                <span className="w-[18px] h-[18px] bg-[#9B62E0] rounded-full"></span>
            </div>
      <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-[20px] font-medium leading-6 text-gray-900">Company</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
              </li>
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">Privacy & Terms</a>
              </li>
             
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-[20px] font-medium leading-6 text-gray-900">Support</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">Chat with us</a>
              </li>
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">help center</a>
              </li>
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">Feature request</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-[20px] font-medium leading-6 text-gray-900">Community</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">Twitter</a>
              </li>
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">Facebook</a>
              </li>
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">Discord</a>
              </li>
              
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-[20px] font-medium leading-6 text-gray-900">More</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">Buttons</a>
              </li>
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">Brand assests</a>
              </li>
              <li>
                <a href="#" class="text-[16px] leading-6 text-gray-600 hover:text-gray-900">Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-4px  justify-center items-center w-3/4 mt-10">
        <div className="flex gap-4">
            <img src={AppStore} className="cursor-pointer"/>
            <img src={PlayStore} className="cursor-pointer"/>
        </div>
        <p className="text-sm mt-5">© 2023. Privacy & Terms.</p>
    </div>
  </div>
</footer>

    )
}